// deno-lint-ignore-file no-explicit-any
import { useState } from "preact/hooks";
import { Button } from "../components/Button.tsx";

export interface Links {
    link: string;
    icon: any;
    label: string;
}

export interface TechCardProps {
    title: string;
    description: string;
    links: Links[];
    image: any;
}

export default function TechCard(props: TechCardProps) {
    return (
        <div class="exsm:w-[300px] exsm:max-w-[300px] exsm:h-[320px] w-[450px] h-[175px] bg-techCardColor rounded-2xl border-solid border-2 border-white p-5">
            <div class="p-3 ml-auto hidden exsm:block exsm:mr-auto">
                {/* Image */}
                {props.image}
            </div>
            <div class="flex text-white">
                {/* Texts */}
                <div class="flex-2 w-72">
                    {/* Title */}
                    <h1 class="text-2xl">{props.title}</h1>
                    {/* Description */}
                    <p class="text-sm mt-2">{props.description}</p>
                    {/* Bottom Links With Icons */}
                    <div class="flex flex-row mt-3 exsm:justify-center">
                        {
                            props.links.map((link) => {
                                return (
                                    <a aria-label={link.label} class="text-black text-lg" href={link.link}>
                                        {link.icon}
                                    </a>
                                )
                            })
                        }
                    </div>
                </div>
                <div class="flex-1 w-32 p-3 h-[96px] w-[96px] ml-auto exsm:hidden">
                    {/* Image */}
                    {props.image}
                </div>
            </div>
        </div>
    );
}
