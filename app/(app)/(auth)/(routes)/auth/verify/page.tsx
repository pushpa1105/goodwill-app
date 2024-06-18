"use client";

import axios from "axios";
import { useRouter, useSearchParams } from "next/navigation";
import { useCallback, useEffect, useState } from "react";
import toast from "react-hot-toast";

const VerifyEmailPage = () => {
  const [verified, setVerified] = useState(false)
  const searchParams = useSearchParams();
  const router = useRouter();
  const token = searchParams.get("token");

  if (!token) {
    toast.error("Token error");
    router.push("/auth/resend-verification-email");
  }

  const verifyEmail = useCallback(() => {
    if (verified || !token) return;
    axios
      .post("/api/user/verify-email", { token })
      .then((res) => {
        console.log(res);
        toast.success(res?.data?.message || "Something went wrong");
        router.push("/sign-in");
      })
      .catch((err) => {
        const errorMessage = err?.response?.data || "Something went wrong"  
        toast.error(errorMessage);

        if (errorMessage === 'Email already verified') {
          router.push("/sign-in");
        }
        router.push("/auth/resend-verification-email");
      }).finally(()=>{
        setVerified(true)
      })
  }, [token, router, verified]);

  useEffect(() => {
    verifyEmail();
  }, [verifyEmail]);
};

export default VerifyEmailPage;
