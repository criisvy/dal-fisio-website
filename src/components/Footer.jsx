import Link from "next/link";
import { Badge } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-white">
      <Link href="/" className="flex items-center gap-2">
        <Badge className="w-6" />
        <h1>Dal Fisio</h1>
      </Link>
    </footer>
  );
};

export default Footer;