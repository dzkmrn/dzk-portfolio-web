import React from "react";
import Link from "next/link";
import MetaSeo from "../components/MetaSeo";
import http from "../utilities/http";
import constant from "../utilities/constant";
import Typewriter from "typewriter-effect";
import Image from "next/image";

const myTitle = "Hello World! I'm Dzaka | Mobile and Web Developer";
const myDesc = {
  subtitle: "I'm a fullstack developer that experienced in mobile and web development using native and framework technology.",
};
const myCv = {
  subtitle: "https://drive.google.com/file/d/1QGPNjBrnO0hm2xZtkg-He5V6hWFI9KjS/view?usp=drive_link"
};


export default function Home({ setting }) {
  return (
    <div className="flex justify-center h-[90vh] xl:items-center xl:flex-row flex-col-reverse">
      <MetaSeo
        title="Dzaka's Portfolio"
        description="Halo! Nama saya Muhammad Dzaka dan saya merupakan mahasiswa teknik informatika di Politeknik Negeri Malang. Sedang berpogres untuk menjadi fullstack programmer mobile dan website."
      />
      <div className="xl:w-7/12" data-aos="fade-up">
        <h1 className="font-doodle h-20 lg:h-auto  tracking-widest xl:text-4xl text-3xl  text-center xl:text-left">
          <Typewriter
            options={{
              strings: myTitle.split("|"),
              autoStart: true,
              loop: true,
              delay: 75,
            }}
          />
        </h1>
        <p className="mt-5 mb-4 text-center xl:text-left leading-7">
          {myDesc.subtitle}
        </p>
        <p className="text-center z-50 xl:text-left">
          See
          <Link href={"/portfolio"}>
            <a>
              <span className="font-semibold underline"> My Portfolio</span>
            </a>
          </Link>{" "}
          and also{" "}
          <a href={myCv.subtitle} target={"_blank"} rel="noreferrer">
            <span className="font-semibold underline">Download My CV</span>
          </a>
        </p>
      </div>
      <div className="xl:w-5/12 flex xl:justify-end justify-center h-80 ">
        <Image
          src="https://drive.google.com/uc?export=view&id=16nvnUwdrkSNSXJZgqffPmsln0JNkc81U"
          layout="fixed"
          height={300}
          width={300}
          alt="BG-Image"
        />
      </div>
    </div>
  );
}
