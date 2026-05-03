"use client";

import { useState } from "react";
import Link from "next/link";
import React from "react";
import { Icon } from "@iconify/react";
import { useForm } from "react-hook-form";
import { authClient } from "@/lib/auth-client";
import { toast } from "react-toastify";


const SignInPage = () => {
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm();

  const [loading, setLoading] = useState(false);
  // loadin

  const handleSubmitFunc =async (data) => {
    // console.log(data);
    const { data:res, error } = await authClient.signIn.email({
   email: data.email, // required
    password: data.password, // required
    rememberMe: true,
    callbackURL: "/",
});
   if(res){
  toast.success("Login is successful")
}
if(error){
  toast.error(error.message)
}

    setLoading(false);
  };

  const handleGoogleLogin = async () => {
    console.log("google button is clicked")
    setLoading(true);
     const data = await authClient.signIn.social({
    provider: "google",
  });
    setLoading(false);
  };

  return (
    <div className="min-h-[80vh] flex items-center justify-center px-4 py-12">
      <div className="card w-full max-w-md bg-base-100 shadow-2xl">
        <div className="card-body">
          <h2 className="text-3xl font-bold text-center mb-2">Welcome Back</h2>
          <p className="text-center text-gray-500 mb-6">
            Sign in to access your account
          </p>

          <form onSubmit={handleSubmit(handleSubmitFunc)} className="space-y-4">
            <div className="form-control">
              <label className="label">
                <span className="label-text">Email</span>
              </label>
              <div className="input-group">
                <input
                  type="email"
                  placeholder="your@email.com"
                  className="input input-bordered w-full"
                  {...register("email", { required: "Please enter your email address" })}
                />
                {errors.email && (
                  <p className="text-red-700">{errors.email.message}</p>
                )}
              </div>
            </div>

            <div className="form-control">
              <label className="label">
                <span className="label-text">Password</span>
              </label>
              <input
                type="password"
                placeholder="Enter your password"
                className="input input-bordered w-full"
                {...register("password", { required: "Password field is required" ,  minLength: {
      value: 6,
      message: "Password must be at least 6 characters",
    },})}
               
              />
              {errors.password && (
                <p className="text-red-700">{errors.password.message}</p>
              )}
              <label className="label">
                <Link
                  href="#"
                  className="label-text-alt link link-hover text-primary"
                >
                  Forgot password?
                </Link>
              </label>
            </div>

            <button
              className={`btn btn-primary w-full }`}
              // disabled={loading}
            >
              {/* {!loading && <Icon icon="mdi:login" className="mr-2" />} */}
              <Icon icon="mdi:login" className="mr-2" />
              Sign In
            </button>
          </form>

          <div className="divider">OR</div>

          <button
            onClick={handleGoogleLogin}
            className="btn btn-outline w-full gap-2"
            disabled={loading}
          >
            <Icon icon="mdi:google" className="text-xl" />
            Continue with Google
          </button>

          <p className="text-center mt-4">
            Don&apos;t have an account?{" "}
            <Link href={'/signup'} className="link link-primary font-medium">
              Register here
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
};

export default SignInPage;
