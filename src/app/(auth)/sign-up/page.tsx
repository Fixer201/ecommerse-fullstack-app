import React from "react";
import AuthForm from "@/components/forms/AuthForm";

const page = () => {
  return (
    <div className="flex items-center justify-center h-full w-full">
      <AuthForm isSignUp={true} />
    </div>
  );
};

export default page;
