"use client";
import { useState, useEffect } from "react";
import { Badge, Menu, Phone, XIcon } from "lucide-react";
import WhatsAppIcon from "@/icons/WhatsappIcon";
import FacebookIcon from "@/icons/FacebookIcon";
import InstagramIcom from "@/icons/InstagramIcon";
import Link from "next/link";
import Button from "./Button";
import { cn } from "@/utils/cn";
import { usePathname } from "next/navigation";

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
              <span className="transition-shadow">Servizi</span>
            </Link>
          </li>
          <li className="font-bold">
            <Link href="/chi-siamo">Chi siamo</Link>
          </li>
          <li className="font-bold">
            <Link href="/spazi">Spazi</Link>
          </li>
          <li className="font-bold">
            <Link href="/contatti" className="">
              Contatti
            </Link>
          </li>
          <Button className="flex gap-2 rounded-xl font-bold">
            <a href="tel:3450906595">
              <div className="flex gap-2 rounded-xl font-bold">
                Chiama
                <Phone />
              </div>
            </a>
          </Button>
        </ul>
      </nav>
      {isMenuOpen ? (
        <div className="bg-primary h-screen w-full p-9">
          <div className="flex w-full justify-between">
            <div className="">
              <Link
                href="/"
                className="flex items-center gap-2 sm:justify-between"
              >
                <Badge className="w-8 text-white" />
                <h1 className="text-4xl font-bold text-white sm:text-black">
                  Dal Fisio
                </h1>
              </Link>
            </div>
            <button onClick={toggleMenu}>
              <XIcon className="size-10 text-white" />
            </button>
          </div>
          <nav className="flex flex-col items-center">
            <ul className="my-52 flex flex-col gap-11">
              <li className="text-[32px] font-bold text-white">
                <Link href="/servizi">Servizi</Link>
              </li>
              <li className="text-[32px] font-bold text-white">
                <Link href="/chi-siamo">Chi Siamo</Link>
              </li>
              <li className="text-[32px] font-bold text-white">
                <Link href="/spazi">Spazi</Link>
              </li>
              <li className="text-[32px] font-bold text-white">
                <Link href="/contatti">Contatti</Link>
              </li>
              <button
                className="flex w-fit items-center gap-3 rounded-xl p-3 text-[30px] font-bold text-white outline-3 outline-white"
                href="tel:3450906595"
              >
                <Phone className="size-6 font-bold" />
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
              <a href="#">
                <InstagramIcom className="size-8 text-white" />
              </a>
            </div>
          </nav>
        </div>
      ) : (
        <div className="flex w-full max-w-7xl justify-between rounded-xl bg-white p-9 drop-shadow-sm sm:hidden">
          <div className="">
            <Link
              href="/"
              className="flex items-center gap-2 sm:justify-between"
            >
              <Badge className="w-8" />
              <h1 className="text-4xl font-bold sm:text-black">Dal Fisio</h1>
            </Link>
          </div>
          <button onClick={toggleMenu}>
            <Menu className="size-8" />
          </button>
        </div>
      )}
    </header>
  );
}
