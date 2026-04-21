import Link from "next/link";
import { Badge } from "lucide-react";
import WhatsAppIcon from "@/icons/WhatsappIcon";
import FacebookIcon from "@/icons/FacebookIcon";
import InstagramIcon from "@/icons/InstagramIcon";

const Footer = () => {
  return (
    <footer className="my-7 flex max-w-7xl flex-col gap-6 rounded-xl bg-white p-4 text-lg sm:mx-auto sm:px-16 sm:py-9">
      <div className="flex flex-col justify-between gap-6 sm:flex-row">
        <Link href="/" className="flex items-center gap-2">
          <img className="w-30" src="/logo/logo-rosso-nero-complete.svg"></img>
        </Link>
        <div className="flex flex-col gap-2.5">
          <div className="flex flex-col">
            <p className="font-bold">Studio Fisioterapico Bergamo</p>
            <p className="font-bold">Dott. Luca Gavazzeni</p>
            <p className="font-bold">Dott. Matteo Rossi</p>
          </div>
          <div className="">
            <a href="https://maps.app.goo.gl/dtU2nXjPK79vZJTU7">
              <p className="text-brownish hover:underline">
                Via dei Bastazi, 13 - 24126 <strong>Bergamo (BG)</strong>
              </p>
            </a>
            <a className="text-brownish" href="tel:3450906595">
              <p className="text-brownish hover:underline">
                Tel<strong> +39 035 123 4567</strong>
              </p>
            </a>
            <p className="text-brownish hover:underline">
              Email <strong>info@fisiobergamo.it</strong>
            </p>
            <p className="text-brownish hover:underline">
              P.IVA <strong>04567890123</strong>
            </p>
          </div>
        </div>
        <ul className="flex flex-col">
          <li className="hover:text-primary font-bold hover:scale-105">
            <Link href="/">Home</Link>
          </li>
          <li className="hover:text-primary font-bold hover:scale-105">
            <Link href="/servizi">Servizi</Link>
          </li>
          <li>
            <Link
              href="/chi-siamo"
              className="hover:text-primary font-bold hover:scale-105"
            >
              Chi Siamo
            </Link>
          </li>
          <li>
            <Link
              href="/spazi"
              className="hover:text-primary font-bold hover:scale-105"
            >
              Spazi
            </Link>
          </li>
          <li>
            <Link
              href="/contatti"
              className="hover:text-primary font-bold hover:scale-105"
            >
              Contatti
            </Link>
          </li>
        </ul>
        <div className="flex flex-col gap-3.5">
          <div className="flex justify-center gap-4 sm:order-last">
            <WhatsAppIcon className="text-brownish hover:text-whatsapp size-6 hover:scale-105"></WhatsAppIcon>
            <a href="https://www.instagram.com/dalfisio_/">
              <InstagramIcon className="text-brownish size-6 hover:scale-105 hover:text-pink-600"></InstagramIcon>
            </a>
            <FacebookIcon className="text-brownish size-6 hover:scale-105 hover:text-sky-500"></FacebookIcon>
          </div>
          <div className="flex flex-col items-center justify-center sm:order-first">
            <span className="text-brownish">Privacy Policy</span>
            <span className="text-brownish">Cookie Policy</span>
          </div>
        </div>
      </div>
      <div className="flex justify-center">
        <p className="text-brownish">
          © 2026 Dal Fisio. Tutti i diritti riservati.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
