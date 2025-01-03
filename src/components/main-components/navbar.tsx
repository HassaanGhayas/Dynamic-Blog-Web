"use client";
import { useState, useEffect } from "react";
import Link from "next/link";
import { FaUser, FaBars, FaTimes } from "react-icons/fa";
import { FaCartShopping } from "react-icons/fa6";
import { Switch } from "../ui/switch";

export default function Navbar() {
  const [showMobileMenu, setShowMobileMenu] = useState(false);
  const [pathname, setPathname] = useState("");

  const linksHamburger = [
    { href: "/", label: "Home", key: "" },
    { href: "/shop", label: "Shop", key: "shop" },
    { href: "/blogs", label: "Blog", key: "blog" },
    { href: "/about", label: "About", key: "about" },
    { href: "/cart", label: "Cart", key: "cart" },
    { href: "/account", label: "Account", key: "account" },
  ];
  const linksNavbar = [
    { href: "/", label: "Home", key: "" },
    { href: "/shop", label: "Shop", key: "shop" },
    { href: "/blogs", label: "Blog", key: "blog" },
    { href: "/about", label: "About", key: "about" },
  ];

  return (
    <nav className="bg-white shadow-md poppins">
      <div className="w-full max-w-screen-lg m-auto flex items-center justify-between py-5 px-4">
        <div className="text-2xl text-[#FF8F52] font-bold playfairdisplay">
          Blossom
        </div>
        <ul className="flex gap-5 hidden md:flex text-black">
          {linksNavbar.map(({ href, label, key }) => (
            <Link key={key} href={href} onClick={() => setPathname(href)}>
              <li className={`${pathname === href ? "text-[#FF8F52]" : ""}`}>
                {label}
              </li>
            </Link>
          ))}
        </ul>
        <div className="flex items-center gap-4 text-2xl text-[#3A6351] hidden md:flex">
          <span>
            <FaCartShopping />
          </span>
          <span>
            <FaUser />
          </span>
          <span>
            <Switch className="data-[state=checked]:bg-[#3A6351]" />
          </span>
        </div>
        <div
          className="text-gray-600 text-xl md:hidden"
          onClick={() => setShowMobileMenu(!showMobileMenu)}
        >
          {showMobileMenu ? <FaTimes /> : <FaBars />}
        </div>
      </div>
      {showMobileMenu && (
        <div className="absolute right-0 md:hidden w-full max-w-44">
          <ul className="flex bg-white flex-col text-black w-full max-w-44 p-5 gap-3 rounded-lg shadow-lg text-black">
            {linksHamburger.map(({ href, label, key }) => (
              <Link
                key={key}
                href={href}
                onClick={() => {
                  setShowMobileMenu(false);
                  setPathname(href);
                }}
              >
                <li className={`${pathname === href ? "text-[#FF8F52]" : ""}`}>
                  {label}
                </li>
              </Link>
            ))}
            <li className="space-x-2">
              <Switch className="data-[state=checked]:bg-[#FF8F52]" />
            </li>
          </ul>
        </div>
      )}
    </nav>
  );
}
