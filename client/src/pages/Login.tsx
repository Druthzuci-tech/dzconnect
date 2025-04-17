import { useState } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { useAuth } from "../context/AuthContext";
import { useToast } from "@/hooks/use-toast";

export default function Login() {
  const [phoneNumber, setPhoneNumber] = useState("");
  const [phoneError, setPhoneError] = useState("");
  const [otp, setOtp] = useState(["", "", "", ""]);
  const [isLoading, setIsLoading] = useState(false);
  const [otpSent, setOtpSent] = useState(false);
  const { login } = useAuth();
  const { toast } = useToast();

  const isValidPhoneNumber = (phone: string): boolean => {
    const normalized = phone.replace(/\s|-/g, "");
    const phoneRegex = /^[6-9]\d{9}$/; // 10-digit Indian number only
    return phoneRegex.test(normalized);
  };

  const handlePhoneChange = (value: string) => {
    if (/^[+]?[0-9\s-]*$/.test(value)) {
      setPhoneNumber(value);
      const cleaned = value.replace(/\s|-/g, "");
      if (!isValidPhoneNumber(cleaned)) {
        setPhoneError("Enter a valid 10-digit Indian phone number.");
      } else {
        setPhoneError("");
      }
    }
  };

  const handleOtpChange = (index: number, value: string) => {
    if (/^[0-9]?$/.test(value)) {
      const newOtp = [...otp];
      newOtp[index] = value;
      setOtp(newOtp);

      if (value && index < 3) {
        const nextInput = document.getElementById(`otp-${index + 1}`) as HTMLInputElement;
        if (nextInput) nextInput.focus();
      }
    }
  };

  const handleLogin = async () => {
    const cleanedPhone = phoneNumber.replace(/\s|-/g, "");

    if (!cleanedPhone) {
      setPhoneError("Phone number is required.");
      return;
    }

    if (!isValidPhoneNumber(cleanedPhone)) {
      setPhoneError("Invalid phone number.");
      return;
    }

    if (otp.some((digit) => !digit)) {
      toast({
        title: "OTP required",
        description: "Please enter the complete OTP",
        variant: "destructive",
      });
      return;
    }

    setIsLoading(true);
    try {
      await login(`+91${cleanedPhone}`, otp.join(""));
      toast({
        title: "Login successful",
        description: "Welcome to DZ Connect!",
      });
    } catch (error) {
      toast({
        title: "Login failed",
        description: "Invalid credentials. Please try again.",
        variant: "destructive",
      });
    } finally {
      setIsLoading(false);
    }
  };

  const sendOtp = () => {
    const cleanedPhone = phoneNumber.replace(/\s|-/g, "");

    if (!cleanedPhone) {
      setPhoneError("Phone number is required.");
      return;
    }

    if (!isValidPhoneNumber(cleanedPhone)) {
      setPhoneError("Invalid phone number.");
      return;
    }

    setOtpSent(true);
    toast({
      title: "OTP sent",
      description: "A one-time password has been sent to your phone",
    });
  };

  return (
    <div className="w-full h-screen p-4 md:p-0 md:flex items-center justify-center bg-slate-50 dark:bg-slate-900">
      <Card className="w-full max-w-md">
        <CardContent className="pt-6">
          <div className="text-center mb-8">
            <h1 className="text-3xl font-display font-bold text-primary-500 mb-2">
              DZ <span className="text-secondary-500">Connect</span>
            </h1>
            <p className="text-gray-500 dark:text-gray-400">
              Vehicle Telematics Platform
            </p>
          </div>

          <div className="space-y-6">
            {/* Phone Input */}
            <div>
              <label
                htmlFor="phone"
                className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1"
              >
                Phone Number
              </label>
              <div className="relative rounded-md">
                <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
                  <i className="fas fa-phone text-gray-400"></i>
                </div>
                <Input
                  type="tel"
                  id="phone"
                  name="phone"
                  maxLength={13}
                  className="pl-10"
                  placeholder="e.g. 9876543210"
                  value={phoneNumber}
                  onChange={(e) => handlePhoneChange(e.target.value)}
                />
              </div>
              {phoneError && (
                <p className="text-sm text-red-500 mt-1">{phoneError}</p>
              )}
            </div>

            {/* OTP Input */}
            <div>
              <div className="flex justify-between">
                <label
                  htmlFor="otp"
                  className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1"
                >
                  OTP
                </label>
                <button
                  type="button"
                  className="text-xs text-primary-500 hover:text-primary-600 dark:hover:text-primary-400"
                  onClick={sendOtp}
                  disabled={!!phoneError || !phoneNumber}
                >
                  Send OTP
                </button>
              </div>
              <div className="flex justify-between gap-2">
                {otp.map((digit, index) => (
                  <Input
                    key={index}
                    id={`otp-${index}`}
                    type="text"
                    maxLength={1}
                    className="w-12 h-12 text-center text-xl"
                    value={digit}
                    onChange={(e) => handleOtpChange(index, e.target.value)}
                  />
                ))}
              </div>
            </div>

            {/* Login Button */}
            <Button
              className="w-full"
              onClick={handleLogin}
              disabled={isLoading || !!phoneError}
            >
              {isLoading ? (
                <>
                  <span className="mr-2 h-4 w-4 animate-spin rounded-full border-2 border-current border-t-transparent"></span>
                  Logging in...
                </>
              ) : (
                "Login"
              )}
            </Button>

            {/* Help Link */}
            <div className="text-center mt-4">
              <a
                href="#"
                className="text-sm text-gray-600 dark:text-gray-400 hover:text-primary-500 dark:hover:text-primary-400"
              >
                Need help logging in?
              </a>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
