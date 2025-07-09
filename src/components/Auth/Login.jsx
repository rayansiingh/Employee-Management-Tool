import React from "react";
import { useForm } from "react-hook-form";

function Login({ handleLogin }) {
  const { register, handleSubmit, reset } = useForm();
  const handleFormSubmit = (data) => {
    // console.log(data);
    handleLogin(data.email, data.password);
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
            className=" text-black bg-[#fffbff] rounded-full py-3 px-5 text-xl outline-none placeholder:text-zinc-700 mt-8 border-1"
            type="email"
            placeholder="Email address"
          />
          <input
            {...register("password", { required: true })}
            className=" text-black bg-[#fffbff] rounded-full py-3 px-5 text-xl outline-none placeholder:text-zinc-700 border-1"
            type="password"
            placeholder="Password"
          />
          <input
            className=" text-black bg-[#90FFDC] hover:bg-emerald-300 border-1 rounded-full py-2 px-5 text-lg mt-8 font-base"
            type="submit"
            value="Log In"
          />
        </form>
      </div>
    </div>
  );
}

export default Login;
