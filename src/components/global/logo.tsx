import Link from "next/link";
import Image from "next/image";

const Logo = () => {
  return (
    <Link href="/" className="flex items-center gap-3 group">
      <span className="font-black text-xl md:text-2xl tracking-tighter uppercase italic">
        Compra<span className="text-primary"> Fácil</span>
      </span>
    </Link>
  );
};

export { Logo };