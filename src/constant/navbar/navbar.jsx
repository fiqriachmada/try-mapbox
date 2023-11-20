import Link from "next/link";
import React from "react";
import { routes } from "../routes/routes";

function Navbar() {
  return (
    <div className="my-32">
      <div className="flex justify-between ">
        {routes.map((route) => (
          <Link href={route.href}>{route.label}</Link>
        ))}
      </div>
    </div>
  );
}

export default Navbar;
