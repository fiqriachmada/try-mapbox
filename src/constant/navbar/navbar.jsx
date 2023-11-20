
import Link from "next/link";
import React from "react";
import { routes } from "../routes/routes";

function Navbar() {
  return (
    <div className="my-32">
      <div className="flex justify-between z-0">
        {routes.map((route, index) => (
          <Link key={index} href={route.href}>
            {route.label}
          </Link>
        ))}
      </div>
    </div>
  );
}

export default Navbar;
