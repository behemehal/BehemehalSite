import { useState } from "preact/hooks";
import { Button } from "../components/Button.tsx";


export default function Intro() {
    return (
        <section class="w-full h-[550px] bg-primaryDark">
            <div class="m-9 bg-black rounded-lg h-64 pt-12 pl-6">
                <p class="text-white text-6xl">Open source world</p>
                <p class="text-white text-6xl">Open source solutions to</p>
            </div>
            <div class="m-9 w-1/2 text-white text-2xl text-center block ml-auto mr-auto">
                Behemehal creating smart technologies for increase <strong>accessibility</strong>, inspiring people to reach their <strong>Goals</strong>
            </div>
        </section>
    );
}
