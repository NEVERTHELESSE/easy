import { Link } from "react-router-dom";
import Image from "../../components/Image";

export default function Logo() {
  return (
    <Link to="/" className="hidden items-center sm:flex">
      <div className="w-[2rem]">
        <Image src="/easy.png" />
      </div>
      <h2 className="text-2xl">Easy-Electrician</h2>
    </Link>
  );
}
