import React from "react";
import { Link } from "react-router-dom";
import { AlertError } from "../../../../Global/Alert/AlertError";
import { useSignup } from "../../../../Global/hook/useSignup";
import MaxCard from "../../../../Global/Card/MaxCard/MaxCard";
import Card from "../../../../Global/Card/Card";
import LoadingModal  from "../../../../Global/LoadingModal/LoadingModal";

export const SignUpForm = () => {
  const { handleSubmit, onSubmit, register, isError, isLoading } = useSignup();

  return (
    <div className="flex h-full w-full flex-col items-center justify-center bg-secondary">
      <h1 className="text-center font-bold text-2xl m-4">Safe Trade FX</h1>
      <MaxCard>
        <Card className="m-auto w-[100%] shadow-xl border-[1px] lg:w-[50%]">
          <h1 className="text-center text-xl font-bold">SignUp</h1>
          <form onSubmit={handleSubmit(onSubmit)} className="flex flex-col">
            <label className="font-bold text-black">Enter Username:</label>
            <input
              {...register("name")}
              placeholder="Enter Username Here"
              className="w-full rounded-lg border-b-2 text-black border-b-[#ebebeb] p-2 outline-none"
            />
            <label className="mt-4 font-bold text-black">Enter Email:</label>
            <input
              placeholder="Enter Email Here"
              {...register("email")}
              type="email"
              className="w-full rounded-lg text-black border-b-2 border-b-[#ebebeb] p-2 outline-none"
            />
            <label className="mt-4 font-bold text-black">Enter Password:</label>
            <input
              placeholder="Enter Password Here"
              {...register("password")}
              type="password"
              className="w-full rounded-lg text-black border-b-2 border-b-[#ebebeb] p-2 outline-none"
            />
            {isError && <AlertError>{isError}</AlertError>}
            <input
              type="submit"
              className={`${
                isLoading ? "animate-pulse cursor-wait" : "cursor-pointer"
              } mt-4 rounded-lg bg-primary p-2 font-bold bg-blue-700 text-white outline-none`}
              value={isLoading ? "Signing up..." : "Sign up"}
            />
            {isLoading ? <LoadingModal/>: ""}
            <div className="mt-4 flex space-x-3 italic">
              <h1 className="font-bold text-black">Already have an account?</h1>
              <Link to="/login" className="text-black">
                Login
              </Link>
            </div>
          </form>
        </Card>
      </MaxCard>
    </div>
  );
};
