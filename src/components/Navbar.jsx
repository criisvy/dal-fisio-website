"use client";
import Link from "next/link";
import Button from "./Button";
import { Badge, Menu, Phone, XIcon } from "lucide-react";
import WhatsAppIcon from "@/icons/WhatsappIcon";
import FacebookIcon from "@/icons/FacebookIcon";
import InstagramIcom from "@/icons/InstagramIcon";
import { useState } from "react";
import { cn } from "@/utils/cn";

const Navbar = (open, onOpenChange) => {
  return (
    <nav
      className={cn(
        open
          ? "sm:bg-background text-foreground mx-auto flex max-w-7xl items-center bg-white p-4 font-bold shadow-sm sm:shadow-none"
          : "bg-primary fixed inset-0 flex-col",
      )}
    >
      <div
        className={cn(
          open
            ? "transition-shadow"
            : "flex w-full justify-between hover:scale-105",
        )}
      >
        <Link
          href="/"
          className={cn(open ? "flex items-center gap-2" : "justify-between")}
        >
          <Badge
            className={cn(open ? "w-6" : "hover:text-primary text-white")}
          />
          <h1 className={cn(open ? "text-lg" : "text-white")}>Dal Fisio</h1>
        </Link>
        <XIcon
          className={cn(open ? "hidden" : "block size-9 text-white")}
        ></XIcon>
      </div>
      <div
        className={cn(
          open
            ? "ml-auto hidden items-center sm:flex"
            : "mr-auto ml-auto block flex-col justify-center gap-12",
        )}
      >
        <ul className={cn(open ? "mr-9 flex gap-9" : "flex-col gap-12")}>
          <li className={cn(open ? "hover:scale-105" : "text-4xl text-white")}>
            <Link href="/servizi">
              <span className="transition-shadow">Servizi</span>
            </Link>
          </li>
          <li className={cn(open ? "hover:scale-105" : "text-4xl text-white")}>
            <Link href="/chi-siamo">Chi siamo</Link>
          </li>
          <li className={cn(open ? "hover:scale-105" : "text-4xl text-white")}>
            <Link href="/spazi">Spazi</Link>
          </li>
          <li className={cn(open ? "hover:scale-105" : "text-4xl text-white")}>
            <Link href="/contatti" className="">
              Contatti
            </Link>
          </li>
        </ul>
        <Button
          size="sm"
          className={cn(
            open
              ? "flex items-center gap-2 rounded-xl"
              : "hidden rounded-2xl border-4",
          )}
        >
          <Phone className={cn(open ? "h-5 w-5" : "size-7")} />
          <span className={cn(open ? "" : "text-4xl text-white")}>
            Contattaci
          </span>
        </Button>
        <Button
          size="sm"
          className={cn(
            open
              ? "mt-9 hidden items-center gap-2 rounded-xl"
              : "flex gap-3.5 rounded-2xl border-4",
          )}
        >
          <Phone className={cn(open ? "h-5 w-5" : "size-7")} />
          <span className={cn(open ? "" : "text-4xl text-white")}>
            345 090 6595
          </span>
        </Button>
      </div>
      <button className="text-primary ml-auto block sm:hidden">
        <Menu onClick={onOpenChange} />
      </button>
      <div
        className={cn(open ? "hidden w-full justify-center gap-10" : "flex")}
      >
        <WhatsAppIcon className="size-8 text-white" />
        <InstagramIcom className="size-8 text-white" />
        <FacebookIcon className="size-8 text-white" />
      </div>
    </nav>
  );
};

export default Navbar;
