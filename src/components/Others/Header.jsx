import React from "react";

function Header() {
  return (
    <div className="flex items-end justify-between">
      <h1 className="text-3xl">
        Hello, <span className="font-medium">Rayan 👋</span>
      </h1>
      <button className="text-xl px-4 py-2 rounded bg-red-400 font-medium">
        Log Out
      </button>
    </div>
  );
}

export default Header;
