import { useState } from "preact/hooks";


export default function MobileMenu() {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <div class="ml-auto exsm:block hidden">
            <div onClick={() => setIsOpen(!isOpen)} class="ml-auto w-[60px] h-[30px] text-center text-white hidden exsm:block border-2 rounded-md border-primary mt-[9px] hover:bg-primary transition-all ease-in-out duration-150 cursor-pointer select-none">
                <span class="material-symbols-outlined block">
                    menu
                </span>
            </div>
            {/* Menu */}
            <div dir="ltr" class="justify-items-start justify-end w-[250px] h-full bg-white fixed right-[0px] top-[0px] border-l-4 border-primary transition-all ease-in-out duration-[250ms]" style={{ right: isOpen ? 0 : -260 }}>
                <div onClick={() => setIsOpen(false)} class="w-[35px] h-[35px] border-2 rounded-full border-primary mt-[9px] hover:text-white hover:bg-primary transition-all ease-in duration-150 cursor-pointer select-none ml-auto text-center pt-1 mr-2 text-primary">
                    <span class="material-symbols-outlined block">
                        close
                    </span>
                </div>
                <br />
                <a class="mt-2 ml-2 block text-primary text-left text-2xl" href="/#applications">Applications</a>
                <a class="mt-2 ml-2 block text-primary text-left text-2xl" href="/#technologies">Technologies</a>
                <a class="mt-2 ml-2 block text-primary text-left text-2xl" href="/#solutions">Solutions</a>
                <iframe src="https://github.com/sponsors/ahmtcn123/button" title="Sponsor ahmtcn123" height="32" width="125" style="border: 0; border-radius: 6px; margin-top: 15px; margin-left: auto; margin-right: auto;"></iframe>
            </div>
        </div>
    );
}
