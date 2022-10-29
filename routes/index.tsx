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
      {/* Intro */}
      <section class="w-full h-[550px] p-12 bg-primaryDark">
        <div class="bg-black rounded-lg h-auto min-h-[220px] pt-12 pl-6">
          <p class="text-white text-6xl">Open source solutions to</p>
          <p class="text-white text-6xl">Open source world</p>
        </div>
        <div class="mt-9 w-full max-w-[600px] text-white text-2xl text-center block ml-auto mr-auto">
          Behemehal creating smart technologies for increase <strong>accessibility</strong>, inspiring people to reach their <strong>Goals</strong>
        </div>
      </section>
      {/* Technologies */}
      <section class="w-full min-h-[550px] bg-primary p-12">
        <h1 id="technologies" class="text-4xl text-white">Technologies</h1>
        <br />
        <div class="grid justify-items-center sm:grid-cols-1 lg:grid-cols-2 2xl:grid-cols-3 3xl:grid-cols-4 gap-5">
          <TechCard title="Ellie-Language" description="A type-safe programing language that runs on embedded and sandboxed environments." image={
            <img
              src="/img/bBrand/main.min.png"
              alt="Behemehal Logo: Red square with b letter inside also rounded corners"
            />
          } links={[{
            link: "https://github.com/behemehal/Ellie-Language",
            icon: GitHubIcon({ width: 25, height: 25, color: "white" })
          }]} />
          <TechCard title="SafeEn" description="Local database solution for situations that requires strict data integrity and absolute portability" image={
            <span class="material-symbols-outlined" style={{
              fontSize: "96px",
              width: 96,
              height: 96,
              color: "white"
            }}>dns</span>
          } links={
            [{
              link: "https://github.com/behemehal/Ellie-Language",
              icon: GitHubIcon({ width: 25, height: 25, color: "white" })
            }]} />
          <TechCard title="event_listener" description="NodeJS like Event Listener library for dart!" image={
            <span class="material-symbols-outlined" style={{
              fontSize: "96px",
              width: 96,
              height: 96,
              color: "white"
            }}>compare_arrows</span>
          } links={
            [{
              link: "https://github.com/behemehal/Ellie-Language",
              icon: GitHubIcon({ width: 25, height: 25, color: "white" })
            }]} />
          <TechCard title="rust_event_listener" description="NodeJS like Event Listener library for rust!" image={
            <span class="material-symbols-outlined" style={{
              fontSize: "96px",
              width: 96,
              height: 96,
              color: "white"
            }}>compare_arrows</span>
          } links={
            [{
              link: "https://github.com/behemehal/Ellie-Language",
              icon: GitHubIcon({ width: 25, height: 25, color: "white" })
            }]} />
          <TechCard title="Menemen" description="A streaming http/https request library" image={
            <span class="material-symbols-outlined" style={{
              fontSize: "96px",
              width: 96,
              height: 96,
              color: "white"
            }}>compare_arrows</span>
          } links={
            [{
              link: "https://github.com/behemehal/Ellie-Language",
              icon: GitHubIcon({ width: 25, height: 25, color: "white" })
            }]} />
        </div>
      </section >
      {/* Solutions */}
      <section class="w-full min-h-[550px] bg-primaryDark p-12">
        <h1 id="solutions" class="text-4xl text-white">Solutions</h1>
        <br />
        <div class="grid justify-items-center sm:grid-cols-2 lg:grid-cols-3 2xl:grid-cols-3 gap-5">
          <SolutionsCard
            icon={
              <span class="material-symbols-outlined" style={{
                fontSize: "96px",
                width: 96,
                height: 96,
                color: "#AA2129"
              }}>
                language
              </span>
            }
            title={
              "Web Project Development"
            }
            description={
              "Planning and developing projects with modern web technologies"
            }
            techsImageUrl="/img/tech1.png"
          />
          <SolutionsCard
            icon={
              <img width="96px" alt="tech-brands" class="block ml-auto mr-auto mt-2" src="/img/controller.png" />
            }
            title={
              "Embedded Software Development"
            }
            description={
              "Developing projects for embedded devices"
            }
            techsImageUrl="/img/tech2.png"
          />
          <SolutionsCard
            icon={
              <span class="material-symbols-outlined" style={{
                fontSize: "96px",
                width: 96,
                height: 96,
                color: "#AA2129"
              }}>
                smartphone
              </span>
            }
            title={
              "Mobile Project Development"
            }
            description={
              "Planning and developing projects with mobile technologies"
            }
            techsImageUrl="/img/tech3.png"
          />
        </div>
        <p class="text-white text-center mt-12">
          Contact us for collaborations
        </p>
        <a href="mailto:info@behemehal.org" class="block ml-auto mr-auto mt-4 text-center text-white text-xl">
          info@behemehal.org
        </a>
      </section >
      {/* Footer */}
      < Footer />
    </div >
  );
}
