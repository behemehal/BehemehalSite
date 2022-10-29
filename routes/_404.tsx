import { Head } from "$fresh/runtime.ts";
import HeadCustom from "../components/HeadCustom.tsx";
import Navbar from "../components/Navbar.tsx";
import { GitHubIcon } from "../components/ExtraIcons.tsx";
import TechCard from "../components/TechCard.tsx";
import SolutionsCard from "../components/SolutionsCard.tsx";
import Footer from "../components/Footer.tsx";

export default function Home() {
    return (
        <div class="w-full h-full flex flex-col">
            <HeadCustom title="Behemehal" description="Açık kaynak dünyaya, Açık kaynak çözümler" url="https://www.ellie-lang.org" />
            <Navbar />
            {/* 404 */}
            <section class="w-full h-screen min-h-[550px] p-12 bg-primaryDark text-center">
                <div class="bg-black rounded-lg h-auto min-h-[220px] pt-12 pl-6">
                    <p class="text-white text-6xl">404</p>
                    <p class="text-white text-4xl mt-3">Page not found</p>
                </div>
            </section>
            {/* Footer */}
            < Footer />
        </div >
    );
}
