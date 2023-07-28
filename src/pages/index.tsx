import Image from "next/image";
import { Inter } from "next/font/google";
import Link from "next/link";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <div>
      <Link href="/page2">go to Page2</Link>
      <div className="grid grid-cols-3">
        <div className="flex flex-col">
          <h1>server render</h1>
          <Link href={"/ssr/volvo"}>volvo</Link>
          <Link href={"/ssr/saab"}>saab</Link>
          <Link href={"/ssr/mercedes"}>mercedes</Link>
          <Link href={"/ssr/audi"}>Audi</Link>
        </div>
        <div className="flex flex-col">
          <h1>prebuilt static</h1>
          <Link href={"/prebuilt-ssg/volvo"}>volvo</Link>
          <Link href={"/prebuilt-ssg/saab"}>saab</Link>
          <Link href={"/prebuilt-ssg/mercedes"}>mercedes</Link>
          <Link href={"/prebuilt-ssg/audi"}>Audi</Link>
        </div>
      </div>
    </div>
  );
}
