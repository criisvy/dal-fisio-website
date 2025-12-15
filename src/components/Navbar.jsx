import Link from "next/link";
import Button from "./Button";
import { Badge, Menu, Phone, XIcon } from "lucide-react";

const Navbar = () => {
  return (
    <nav
      className="sm:bg-background text-foreground group data-[open=true]:bg-primary mx-auto data-[open=true]:flex-col flex  max-w-7xl  bg-white p-4 font-bold shadow-sm data-[open=true]:fixed data-[open=true]:inset-0 sm:shadow-none"
      data-open={false}
    >
      <div className="group-data-[open=true]:flex group-data-[open=true]:justify-between">
        <Link href="/" className="flex items-center gap-2">
          <Badge className="w-6 group-data-[open=true]:text-white" />
          <h1 className="text-lg group-data-[open=true]:text-white">
            Dal Fisio
          </h1>
        </Link>
        <XIcon className="hidden group-data-[open=true]:block group-data-[open=true]:size-9 group-data-[open=true]:text-white"></XIcon>
      </div>
      <div className="hidden ml-auto items-center group-data-[open=true]:flex-col group-data-[open=true]:gap-12 sm:flex">
        <ul className="mr-9 flex gap-9 group-data-[open=true]:flex-col group-data-[open=true]:gap-12">
          <li className="group-data-[open=true]:text-4xl group-data-[open=true]:text-white">
            <Link href="services">Servizi</Link>
          </li>
          <li className="group-data-[open=true]:text-4xl group-data-[open=true]:text-white">
            <Link href="/chi-siamo">Chi siamo</Link>
          </li>
          <li className="group-data-[open=true]:text-4xl group-data-[open=true]:text-white">
            <Link href="/spazi">Spazi</Link>
          </li>
          <li className="group-data-[open=true]:text-4xl group-data-[open=true]:text-white">
            <Link href="/contatti" className="">Contatti</Link>
          </li>
        </ul>
        <Button
          size="sm"
          className="flex items-center gap-2 group-data-[open=true]:gap-3.5 group-data-[open=true]:rounded-2xl group-data-[open=true]:border-4"
        >
          <Phone className="h-5 w-5 group-data-[open=true]:size-7" />
          <span className="group-data-[open=true]:text-4xl group-data-[open=true]:text-white">
            Contattaci{" "}
          </span>
        </Button>
      </div>
      <button className="text-primary ml-auto block sm:hidden">
        <Menu />
      </button>
    </nav>
  );
};

export default Navbar;
