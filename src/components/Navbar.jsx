import Link from 'next/link';
import Button from './Button';
import { Badge, Phone } from 'lucide-react';

const Navbar = () => {
  return (
    <nav className="max-w-5xl mx-auto bg-white p-4 text-foreground font-bold flex  items-center w-full">
      <Link href="/" className="flex items-center gap-2">
        <Badge className="w-6" />
        <h1>Dal Fisio</h1>
      </Link>

      <ul className="flex ml-auto mr-9 gap-9">
        <li>
          <Link href="services">Servizi</Link>
        </li>
        <li>
          <Link href="#">Chi siamo</Link>
        </li>
        <li>
          <Link href="#">Spazi</Link>
        </li>
        <li>
          <Link href="#">Contatti</Link>
        </li>
      </ul>
      <Button size="sm" className="flex items-center gap-2">
        <Phone className="w-5 h-5" />
        <span>Prenota Ora</span>
      </Button>
    </nav>
  );
};

export default Navbar;
