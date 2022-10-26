import { useState } from "preact/hooks";
import { Button } from "../components/Button.tsx";

export interface Links {
    link: string;
    //icon element
    icon: any;
}

export interface TechCardProps {
    title: string;
    description: string;
    links: Links[];
    image: string;
}

export default function TechCard(props: TechCardProps) {
    return (
        <div class="w-[450px] h-[175px] bg-techCardColor rounded-2xl border-solid border-2 border-white p-5">
            <div class="flex text-white">
                {/* Texts */}
                <div class="flex-1 w-64">
                    {/* Title */}
                    <h1 class="text-4xl">Title</h1>
                    {/* Description */}
                    <p class="text-lg mt-2">Description</p>
                    {/* Bottom Links With Icons */}
                    <div class="flex flex-row mt-2">
                        <a class="text-black text-lg" href="/docs">
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                class="h-6 w-6"
                                fill="none"
                                viewBox="0 0 24 24"
                                stroke="currentColor"
                            >
                                <path
                                    stroke-linecap="round"
                                    stroke-linejoin="round"
                                    stroke-width="2"
                                    d="M9 5l7 7-7 7"
                                />
                            </svg>
                        </a>
                    </div>
                </div>
                <div class="flex-1 w-32 p-3">
                    {/* Image */}
                    <img
                        src="/img/bBrand/main.min.png"
                        class="h-[96px] w-[96px] ml-auto"
                        alt="Behemehal Logo: Red square with b letter inside also rounded corners"
                    />
                </div>
            </div>
        </div>
    );
}
