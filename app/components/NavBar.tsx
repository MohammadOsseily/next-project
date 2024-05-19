"use client";
import Image from "next/image";
import Link from "next/link";

function NavBar() {
  return (
    <header className="fixed z-[99] top-0 left-0 w-full ">
      <div className="relative flex justify-between items-center p-3 ">
        <div className="flex items-center gap-16">
          <div>
            <Link
              href={"/"}
              className="relative w-20 h-10 block cursor-pointer"
            >
              Logo
            </Link>
          </div>
          <nav>
            <ul className="flex items-center gap-10 text-[220px] font-medium	">
              <li>
                <Link href={"/"}>الرئيسية</Link>
              </li>
              <li>
                <Link href={"/"}>مسلسلات</Link>
              </li>
              <li>
                <Link href={"/"}>برامج</Link>
              </li>
              <li>
                <Link href={"/"}>وثائقيات</Link>
              </li>
              <li>
                <Link href={"/"}>أطفال</Link>
              </li>
            </ul>
          </nav>
        </div>
        <div></div>
      </div>
    </header>
  );
}

export default NavBar;
