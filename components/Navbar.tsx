import { useState } from "preact/hooks";
import { Button } from "../components/Button.tsx";


export default function Navbar() {
  return (
    <section class="w-full h-[50px] px-4 flex flex-row bg-primaryDark">
      <div class="flex flex-row pt-[9px]">
        <img src="/img/bBrand/main.min.png" class="h-[30px] w-[30px]" alt="Behemehal Logo: Red square with b letter inside also rounded corners" />
        <p class="text-2xl text-white ml-1">Behemehal</p>
      </div>
      <div class="flex flex-row pt-3 ml-auto align-middle">
        <a class="text-white mr-4" href="/#technologies">Technologies</a>
        <a class="text-white mr-4" href="/#solutions">Solutions</a>
      </div>
    </section>
  );
}
