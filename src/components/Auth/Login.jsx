import React from "react";
import { useForm } from "react-hook-form";

function Login() {
  const { register, handleSubmit, reset } = useForm();
  const handleFormSubmit = (data) => {
    console.log(data);
    reset();
  };
  return (
    <div className="flex items-center justify-center h-screen w-screen">
      <div className="bg-[#7e7f83] rounded-lg py-10 px-15 border-2 border-black">
        <form
          className="flex flex-col items-center justify-center gap-4"
          onSubmit={handleSubmit(handleFormSubmit)}
        >
          <input
            {...register("email", { required: true })}
            className="bg-[#fffbff] rounded-full py-3 px-5 text-xl outline-none placeholder:text-zinc-700 mt-8 border-1"
            type="email"
            placeholder="Email address"
            style={{ color: "black" }}
          />
          <input
            {...register("password", { required: true })}
            className="bg-[#fffbff] rounded-full py-3 px-5 text-xl outline-none placeholder:text-zinc-700 border-1"
            type="password"
            placeholder="Password"
            style={{ color: "black" }}
          />
          <input
            className="bg-[#90FFDC] hover:bg-emerald-300 border-1 rounded-full py-2 px-5 text-lg mt-8 font-base"
            type="submit"
            value="Log In"
            style={{ color: "black" }}
          />
        </form>
      </div>
    </div>
  );
}

export default Login;
