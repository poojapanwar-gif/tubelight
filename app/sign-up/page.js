import AuthLayout from "@/components/Auth/AuthLayout";
import SignUpForm from "@/components/Auth/SignUpForm";
import { PORTAL_SIGN_IN_URL } from "@/lib/portalApi";
import React from "react";

export const metadata = {
  title: "Sign Up — Tubelight Communications",
  description: "Create your Tubelight Communications account and start with free text credits.",
};

const page = () => {
  return (
    <AuthLayout>
      <SignUpForm portalSignInUrl={PORTAL_SIGN_IN_URL} />
    </AuthLayout>
  );
};

export default page;
