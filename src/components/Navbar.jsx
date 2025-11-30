import Link from "next/link";
import Button from "./Button";
import { Badge, Phone } from "lucide-react";

const Navbar = () => {
  return (
    <nav className="bg-background text-foreground mx-auto flex w-full max-w-5xl items-center p-4 font-bold">
      <Link href="/" className="flex items-center gap-2">
        <Badge className="w-6" />
        <h1>Dal Fisio</h1>
      </Link>

      <ul className="mr-9 ml-auto flex gap-9">
        <li>
          <Link href="services">Servizi</Link>
        </li>
        <li>
          <Link href="/chi-siamo">Chi siamo</Link>
        </li>
        <li>
          <Link href="/spazi">Spazi</Link>
        </li>
        <li>
          <Link href="/contatti">Contatti</Link>
        </li>
      </ul>
      <Button size="sm" className="flex items-center gap-2">
        <Phone className="h-5 w-5" />
        <span>Contattaci </span>
      </Button>
    </nav>
  );
};

export default Navbar;
