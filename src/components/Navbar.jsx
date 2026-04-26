"use client";
import { useState, useEffect } from "react";
import { Badge, Menu, Phone, XIcon } from "lucide-react";
import WhatsAppIcon from "@/icons/WhatsappIcon";
import FacebookIcon from "@/icons/FacebookIcon";
import InstagramIcom from "@/icons/InstagramIcon";
import Link from "next/link";
import Button from "./Button";
import { usePathname } from "next/navigation";
import AnimatedUnderline from "./AnimatedUnderline";

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  function toggleMenu() {
    setIsMenuOpen((prev) => !prev);
  }

  const pathname = usePathname();

  useEffect(() => {
    document.body.style.overflow = isMenuOpen ? "hidden" : "auto";
    return () => {
      document.body.style.overflow = "auto";
    };
  }, [isMenuOpen]);

  useEffect(() => {
    setIsMenuOpen(false);
  }, [pathname]);

  useEffect(() => {
    function handleResize() {
      if (window.innerWidth >= 640) {
        setIsMenuOpen(false);
      }
    }

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <header className="w-full">
      <nav className="mx-auto mt-9 hidden max-w-6xl items-center justify-between px-6 sm:flex">
        <Link href="/">
          <img className="w-40" src="/logo/logo-rosso-nero-complete.svg"></img>
        </Link>

        <ul className="flex items-center gap-9">
          <li className="font-bold">
            <Link href="/servizi">
              <span className="transition-shadow">
                <AnimatedUnderline>Servizi</AnimatedUnderline>
              </span>
            </Link>
          </li>
          <li className="font-bold">
            <Link href="/chi-siamo">
              <AnimatedUnderline>Chi siamo</AnimatedUnderline>
            </Link>
          </li>
          <li className="font-bold">
            <Link href="/spazi">
              <AnimatedUnderline>Spazi</AnimatedUnderline>
            </Link>
          </li>
          <li className="font-bold">
            <Link href="/contatti" className="">
              <AnimatedUnderline>Contatti</AnimatedUnderline>
            </Link>
          </li>
          <Button className="flex gap-2 rounded-xl font-bold">
            <a href="tel:3450906595">
              <div className="flex gap-2 rounded-xl font-bold">
                Chiamaci
                <Phone />
              </div>
            </a>
          </Button>
        </ul>
      </nav>
      {isMenuOpen ? (
        <div className="bg-primary h-screen w-full p-6">
          <div className="flex w-full justify-between">
            <Link href="/">
              <img className="w-40" src="/logo/logo-bianco-complete.svg"></img>
            </Link>

            <button onClick={toggleMenu}>
              <span
                className={`block h-0.5 w-6 rounded-sm bg-white transition-all duration-300 ease-out ${
                  isMenuOpen ? "translate-y-1 rotate-45" : "-translate-y-0.5"
                }`}
              ></span>
              <span
                className={`my-0.5 block h-0.5 w-6 rounded-sm bg-white transition-all duration-300 ease-out ${
                  isMenuOpen ? "opacity-0" : "opacity-100"
                }`}
              ></span>
              <span
                className={`block h-0.5 w-6 rounded-sm bg-white transition-all duration-300 ease-out ${
                  isMenuOpen ? "-translate-y-1 -rotate-45" : "translate-y-0.5"
                }`}
              ></span>
            </button>
          </div>

          <nav className="flex flex-col items-center">
            <ul className="my-28 flex flex-col gap-11">
              <li
                className={`text-4xl text-white ${pathname === "/servizi" ? "font-bold" : "font-normal"}`}
              >
                <Link href="/servizi">Servizi</Link>
              </li>
              <li
                className={`text-4xl text-white ${pathname === "/chi-siamo" ? "font-bold" : "font-normal"}`}
              >
                <Link href="/chi-siamo">Chi Siamo</Link>
              </li>
              <li
                className={`text-4xl text-white ${pathname === "/spazi" ? "font-bold" : "font-normal"}`}
              >
                <Link href="/spazi">Spazi</Link>
              </li>
              <li
                className={`text-4xl text-white ${pathname === "/contatti" ? "font-bold" : "font-normal"}`}
              >
                <Link href="/contatti">Contatti</Link>
              </li>
              <button
                className="flex w-fit items-center gap-3 rounded-xl p-3 text-[30px] font-bold text-white outline-3 outline-white"
                href="tel:3450906595"
              >
                <Phone className="size-8 font-bold" />
                345 090 6595
              </button>
            </ul>
            <div className="flex gap-9">
              <a href="#">
                <WhatsAppIcon className="size-8 text-white" />
              </a>
              <a href="#">
                <FacebookIcon className="size-8 text-white" />
              </a>
              <a href="https://www.instagram.com/dalfisio_/">
                <InstagramIcom className="size-8 text-white" />
              </a>
            </div>
          </nav>
        </div>
      ) : (
        <div className="flex w-full max-w-6xl justify-between rounded-xl bg-white p-6 drop-shadow-sm sm:hidden">
          <div className="">
            <Link href="/">
              <img
                className="w-40"
                src="/logo/logo-rosso-nero-complete.svg"
              ></img>
            </Link>
          </div>
          <button
            onClick={toggleMenu}
            className="flex flex-col items-center justify-center"
          >
            <span
              className={`block h-0.5 w-6 rounded-sm bg-black transition-all duration-300 ease-out ${
                isMenuOpen ? "translate-y-1 rotate-45" : "-translate-y-0.5"
              }`}
            ></span>
            <span
              className={`my-0.5 block h-0.5 w-6 rounded-sm bg-black transition-all duration-300 ease-out ${
                isMenuOpen ? "opacity-0" : "opacity-100"
              }`}
            ></span>
            <span
              className={`block h-0.5 w-6 rounded-sm bg-black transition-all duration-300 ease-out ${
                isMenuOpen ? "-translate-y-1 -rotate-45" : "translate-y-0.5"
              }`}
            ></span>
          </button>
        </div>
      )}
    </header>
  );
}
