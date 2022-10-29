import { useState } from "preact/hooks";
import { Button } from "../components/Button.tsx";
import { GitHubIcon } from "./ExtraIcons.tsx";


export default function Footer() {
    return (
        <section class="w-full text-white h-[220px] px-4 text-white text-center justify-center bg-black">
            <img src="/img/bBrand/main.min.png" class="h-[40px] w-[40px] block ml-auto mr-auto mt-5 mb-2" alt="Behemehal Logo: Red square with b letter inside also rounded corners" />
            <p class="text-sm">
                Behemehal
            </p>
            <p class="text-sm mt-2 mb-3">
                All Rights Reserved
            </p>
            <div class="flex flex-row mt-3 justify-center gap-2">
                <a class="text-sm" href="/support">Support</a>
                <a class="text-sm" href="https://github.com/behemehal/Ellie-Language/blob/main/SECURITY.md">Security Policy</a>
                <a class="text-sm" href="https://github.com/behemehal/Ellie-Language/blob/main/CODE_OF_CONDUCT.md">Code of Conduct</a>
                <a class="text-sm" href="https://github.com/behemehal/Ellie-Language/blob/main/LICENSE">GPL-2.0</a>
            </div>
            <br />
            <div class="flex flex-row justify-center gap-2 mb-5">
                <a href="https://github.com/behemehal">
                    <GitHubIcon width={25} height={25} color={"white"} />
                </a>
            </div>
        </section>
    );
}
