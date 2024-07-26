import React from "react";
import { Link } from "react-router-dom";
import { useLogin } from "../../../../Global/hook/useLogin";
import Card from "../../../../Global/Card/Card";
import { AlertError } from "../../../../Global/Alert/AlertError";
import LoadingModal from "../../../../Global/LoadingModal/LoadingModal";

export const LoginForm = () => {
  const { errors, handleSubmit, isLoading, onSubmit, register, message } =
    useLogin();

  return (
    <div className="flex flex-col h-full w-full items-center justify-center bg-secondary">
      <h1 className="text-center text-black font-bold text-2xl m-4">
        Safe Trade FX
      </h1>
      <Card className="m-auto sm:w-[100%] shadow-xl border-[1px] md:w-[50%]">
        <h1 className="text-center text-xl text-black font-bold">Login</h1>
        <form onSubmit={handleSubmit(onSubmit)} className="flex flex-col">
          <label className="font-bold text-black">Enter Email:</label>
          <input
            {...register("email", { required: true })}
            placeholder="Enter Email Here"
            className="w-full rounded-lg border-b-2 border-b-[#ebebeb] text-black p-2 outline-none"
          />
          {errors.email && <AlertError>Please enter your email</AlertError>}
          <label className="mt-4 font-bold text-black">Enter Password:</label>
          <input
            {...register("password", { required: true })}
            type="password"
            placeholder="Enter Password Here"
            className="w-full rounded-lg border-b-2 text-black border-b-[#ebebeb] p-2 outline-none"
          />
          {errors.password && (
            <AlertError>Please enter your password</AlertError>
          )}
          {message && <AlertError>{message}</AlertError>}
          {isLoading && <LoadingModal />}
          <input
            type="submit"
            disabled={isLoading}
            className={`${
              isLoading ? "animate-pulse cursor-wait" : "cursor-pointer"
            } mt-4 rounded-lg bg-primary p-2 font-bold bg-blue-700 text-white outline-none`}
            value={isLoading ? "Loading..." : "Log In"}
          />
          <div className="mt-4 flex space-x-3 italic">
            <h1 className="font-bold text-black">Don't have an account?</h1>
            <Link to="/signup" className="text-black">
              Sign Up
            </Link>
          </div>
        </form>
      </Card>
    </div>
  );
};
