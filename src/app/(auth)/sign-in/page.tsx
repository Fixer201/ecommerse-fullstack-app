import React from "react";
import AuthForm from "@/components/forms/AuthForm";

const page = () => {
  return (
    <div className="flex items-center justify-center h-screen w-full">
      <AuthForm isSignUp={false} />
    </div>
  );
};

export default page;
