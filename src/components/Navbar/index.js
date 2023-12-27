"use client";

import { navOptions } from "@/utils";
import { useRouter } from "next/navigation";

function NavItems({ router }) {
  return (
    <div className="items-center w-auto justify-between md:flex md:w-auto">
      <ul className="flex flex-col  p-4 md:p-0 mt-4 font-medium font-mono md:flex-row md:space-x-8 md:mt-0 md:border-0">
        {navOptions.map((item) => (
          <li
            className="cursor-pointer block py-2 pl-4 pr-4 mb-2 bg-amber-700 hover:bg-amber-600 text-black rounded md:p-1 transition duration-300 ease-in-out hover:-translate-y-1 hover:scale-110 shadow-lg shadow-amber-400/30"
            key={item.id}
            onClick={() => router.push(item.path)}
          >
            {item.label}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default function Navbar() {
  const router = useRouter();

  return (
    <>
      <nav className="fixed w-full top-0 left-0 z-20 border-b bg-gradient-to-bl from-emerald-950">
        <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
          <NavItems router={router} />
        </div>
      </nav>
    </>
  );
}
