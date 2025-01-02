import React from "react";
import Form from "next/form";
import Link from "next/link";
import FormInput from "../ui/input";

const ForgotPasswordForm = () => {
  return (
    <div className="flex flex-col h-full w-full justify-center items-center">
      {/* TODO: ADD API CALL */}
      <Form
        action={"/api/auth/forgot-password"}
        className="flex flex-col group gap-6 w-1/3 border bg-red-950/30 border-red-800 hover:border-amber-400 hover:bg-black transition-all ease-in-out duration-300 rounded-xl p-6"
      >
        <h1 className="text-center text-3xl text-white font-bold group-hover:text-amber-400 transition-all ease-in-out duration-300">
          Forgot Password
        </h1>
        <FormInput
          inputType="email"
          placeholder="Email"
          FormInputClassName="group-hover:border-amber-400 group-hover:bg-black group-hover:text-amber-400"
        />
        <button
          type="submit"
          className="bg-red-800 group-hover:bg-amber-400 transition-all ease-in-out duration-300 rounded-lg p-2 w-full text-black font-semibold"
        >
          Reset Password
        </button>
      </Form>
    </div>
  );
};

export default ForgotPasswordForm;
