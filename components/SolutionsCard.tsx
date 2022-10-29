// deno-lint-ignore-file no-explicit-any
import { useState } from "preact/hooks";
import { Button } from "../components/Button.tsx";

export interface SolutionCardProps {
    icon: any;
    title: string;
    description: string;
    techsImageUrl: string
}

export default function SolutionsCard(props: SolutionCardProps) {
    return (
        <div class="w-[300px] h-[400px] bg-primary">
            <div class="text-center absolute w-[300px] h-[400px] bg-white mt-[10px] ml-[10px]">
                {/* Icon */}
                {props.icon}
                {/* Title */}
                <h1 class="text-2xl text-center">{props.title}</h1>
                {/* Description */}
                <p class="text-sm text-center mt-2">{props.description}</p>
                {/* Image */}
                <h2 class="text-center mt-2">Technologies</h2>
                <img alt="tech-brands" class="block ml-auto mr-auto mt-2" src={props.techsImageUrl} />
            </div>
        </div >
    );
}
