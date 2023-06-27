// deno-lint-ignore-file no-explicit-any
import { useState } from "preact/hooks";
import { Button } from "../components/Button.tsx";

export interface Links {
    link: string;
    icon: string;
    width?: number;
    height?: number;
    imageStyle?: any;
    style?: any;
}

export interface AppCardProps {
    title: string;
    icon: string;
    description: string;
    screenShots: string[];
    platforms: Links[];
    backgroundColor: string;
}

export default function AppCard(props: AppCardProps) {
    return (
        <div class={`exsm:h-[650px] w-auto h-[350px] bg-[${props.backgroundColor}] p-8 grid grid-cols-2 exsm:grid-cols-1`}>
            <div class="exsm:text-center">
                <img width={96} src={props.icon} class="pb-8 exsm:display-block exsm:ml-auto exsm:mr-auto" />
                <h1 class="text-4xl text-white">{props.title}</h1>
                <h1 class="text-2xl text-white mt-2">{props.description}</h1>
                <div class="flex exsm:justify-center">
                    {
                        props.platforms.map((platform) => (
                            <a href={platform.link} target="_blank" rel="noreferrer" class="w-[225px] h-[85px] block" style={platform.style}>
                                <img width={platform.width || 225} height={platform.height || 50} src={platform.icon} style={platform.imageStyle} class="exsm:ml-[0px] ml-[-15px]" />
                            </a>
                        ))
                    }
                </div>
            </div>
            <div class="flex gap-5 justify-end justify-self-end exsm:justify-self-center exsm:mt-5 snap-x snap-mandatory overflow-x-auto overflow-y-hidden">
                {
                    props.screenShots.map((src) => (
                        <div class="snap-center">
                            <img width={150} src={src} class="min-w-[150px]" />
                        </div>
                    ))
                }
            </div>
        </div>
    );
}
