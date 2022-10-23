import Image from "next/future/image";
import Link from "./Link";

const Header = () => {
  return (
    <div className="flex justify-between items-center">
      <Link href="/">
        <div className="flex items-center gap-2">
          <Image
            draggable={false}
            src="/PaimonGivingPrimo.png"
            width={64}
            height={64}
          />
          <div className="text-2xl font-sans">Genshin Primo Planner</div>
        </div>
      </Link>
    </div>
  );
};

export default Header;
