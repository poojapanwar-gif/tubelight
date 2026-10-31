import AuthLayout from "@/components/Auth/AuthLayout";
import LoginForm from "@/components/Auth/LoginForm";
import { PORTAL_SIGN_IN_URL } from "@/lib/portalApi";
import React from "react";

export const metadata = {
  title: "Login — Tubelight Communications",
  description: "Login to the Tubelight Communications portal with your corporate credentials.",
};

const page = () => {
  return (
    <AuthLayout>
      <LoginForm portalSignInUrl={PORTAL_SIGN_IN_URL} />
    </AuthLayout>
  );
};

export default page;
