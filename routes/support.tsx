import { Head } from "$fresh/runtime.ts";
import Counter from "../islands/Counter.tsx";
import HeadCustom from "../components/HeadCustom.tsx";
import Navbar from "../components/Navbar.tsx";
import { GitHubIcon } from "../components/extraIcons.tsx";
import TechCard from "../components/TechCard.tsx";
import SolutionsCard from "../components/SolutionsCard.tsx";
import Footer from "../components/Footer.tsx";

export default function Home() {
    return (
        <div class="w-full h-full flex flex-col">
            <HeadCustom title="Behemehal" description="Açık kaynak dünyaya, Açık kaynak çözümler" url="https://www.ellie-lang.org" />
            <Navbar />
            {/* 404 */}
            <section class="w-full h-screen min-h-[550px] p-12 bg-primaryDark">
                <p class="text-white text-5xl">Reach behemehal</p>
                <p class="text-white text-2xl mt-3">We are here to help you</p>
                <hr class="w-1/3 bg-white mt-5 mb-5" />
                <div class="flex flex-row gap-2">
                    <a class="text-white text-xl" href="mailto:info@behemehal.org">
                        info@behemehal.org
                    </a>
                </div>
            </section>
            {/* Footer */}
            < Footer />
        </div >
    );
}
