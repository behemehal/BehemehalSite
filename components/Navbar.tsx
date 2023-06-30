import { useState } from "preact/hooks";
import MobileMenu from "../islands/mobileMenu.tsx";


export default function Navbar() {
  return (
    <section class="w-full h-[50px] px-4 flex flex-row bg-primaryDark fixed z-50">
      <div class="flex flex-row pt-[9px]">
        <img src="/img/bBrand/main.min.webp" class="h-[30px] w-[30px]" alt="Behemehal Logo: Red square with b letter inside also rounded corners" />
        <p class="exsm:hidden text-2xl text-white ml-1">Behemehal</p>
      </div>
      <div class="flex flex-row pt-3 ml-auto align-middle exsm:hidden">
        <a class="text-white mr-4 mt-1" href="/#applications">Applications</a>
        <a class="text-white mr-4 mt-1" href="/#technologies">Technologies</a>
        <a class="text-white mr-4 mt-1" href="/#solutions">Solutions</a>
        <iframe src="https://github.com/sponsors/ahmtcn123/button" title="Sponsor ahmtcn123" height="32" width="114" style="border: 0; border-radius: 6px;"></iframe>
      </div>
      <MobileMenu/>
    </section >
  );
}
