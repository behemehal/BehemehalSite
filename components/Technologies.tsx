import { useState } from "preact/hooks";
import { Button } from "../components/Button.tsx";
import TechCard from "./TechCard.tsx";


export default function Technologies() {
    return (
        <section class="w-full h-[550px] bg-primary p-12">
            <h1 class="text-4xl text-white">Technologies</h1>
            <br />
            <TechCard />
        </section>
    );
}
