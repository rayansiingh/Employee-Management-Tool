import React from "react";

function Login() {
  return (
    <div className="flex items-center justify-center h-screen w-screen">
      <div className="bg-[#7e7f83] rounded-lg py-10 px-15 border-2">
        <form className="flex flex-col items-center justify-center gap-4">
          <input
            required
            className="bg-[#FFFBFF] rounded-full py-3 px-5 text-xl outline-none placeholder:text-zinc-700 mt-8 border-1"
            type="email"
            placeholder="Email address"
          />
          <input
            required
            className="bg-[#FFFBFF] rounded-full py-3 px-5 text-xl outline-none placeholder:text-zinc-700 border-1"
            type="password"
            placeholder="Password"
          />
          <button className="bg-[#90FFDC] border-1 border-black rounded-full py-2 px-5 text-lg mt-8 font-base">
            Log In
          </button>
        </form>
      </div>
    </div>
  );
}

export default Login;
