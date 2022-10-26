import { useState } from "preact/hooks";
import { Button } from "../components/Button.tsx";


export default function Intro() {
    return (
        <section class="w-full h-[550px] p-12 bg-primaryDark">
            <div class="bg-black rounded-lg h-auto min-h-[220px] pt-12 pl-6">
                <p class="text-white text-6xl">Open source solutions to</p>
                <p class="text-white text-6xl">Open source world</p>
            </div>
            <div class="mt-9 w-full max-w-[600px] text-white text-2xl text-center block ml-auto mr-auto">
                Behemehal creating smart technologies for increase <strong>accessibility</strong>, inspiring people to reach their <strong>Goals</strong>
            </div>
        </section>
    );
}
