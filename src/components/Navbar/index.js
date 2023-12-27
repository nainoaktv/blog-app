"use client";

import { navOptions } from "@/utils";
import { useRouter } from "next/navigation";

function NavItems({ router }) {
  return (
    <div className="items-center justify-between w-full md:flex md:w-auto">
      <ul className="flex flex-col p-4 md:p-0 mt-4 font-medium font-sans md:flex-row md:space-x-8 md:mt-0 md:border-0">
        {navOptions.map((item) => (
          <li
            className="cursor-pointer block py-2 pl-3 pr-4 text-amber-500 md:p-0"
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
      <nav className="fixed w-full top-0 left-0 z-20 border-b border-amber-500 bg-green-950">
        <NavItems router={router} />
      </nav>
    </>
  );
}
