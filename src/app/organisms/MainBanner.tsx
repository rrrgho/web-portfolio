"use client";
import { Button } from "@/components/ui/button";
import Image from "next/image";
import React from "react";
import { TypeAnimation } from "react-type-animation";
import RianGhoImage from "../assets/images/rian-gho-banner.jpg";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHeart } from "@fortawesome/free-solid-svg-icons";
import Link from "next/link";

const MainBanner = () => {
  return (
    <main>
      <div className="h-screen overflow-hidden">
        <div className="w-full bg-transparent md:h-full z-30 justify-start pl-6 mt-[200px] md:mt-0 md:pl-0 md:justify-center md:content-center md:item-center absolute top-0">
          <div className="mt-0 container flex flex-col md:pl-[200px]">
            <span className="text-base md:text-2xl font-mainLight p-0">
              Hello there ...
            </span>
            <span className="text-[50px] md:text-[70px] tracking-wide font-cairoBold md:mt-[-10px]">
              Rian Gho
            </span>
            <span className="text-base md:text-2xl font-mainSemiBold md:mt-[-10px] p-0">
              Passionate
              <TypeAnimation
                sequence={[
                  "Software Engineer",
                  1000,
                  "IT Project Manager",
                  1000,
                ]}
                wrapper="span"
                speed={50}
                repeat={Infinity}
                className="text-base md:text-2xl font-mainSemiBold ms-2 underline decoration-solid"
              />
            </span>
            <div className="flex flex-row mt-4">
              <Link passHref legacyBehavior href="/showcase/my-work">
                <Button className="px-8 bg-primary text-white font-cairoSemiBold tracking-wide">
                  My Work
                </Button>
              </Link>
              <Button className="px-8 bg-primary border-solid border-[1px] border-primary ms-4 bg-white text-primary tracking-[.10em] hover:text-primary hover:bg-white hover:font-bold">
                Hire Me
              </Button>
            </div>
          </div>
        </div>

        <div className="w-1/6 z-20 h-screen flex justify-end content-start items-center absolute top-0 bg-white overflow-hidden">
          <span>{""}</span>
        </div>

        <div className="w-full z-10 h-screen flex justify-end content-start items-center absolute top-0 bg-white md:bg-[#FCFCFC] overflow-hidden">
          <div>
            <Image
              src={RianGhoImage}
              alt="Rian Gho Image"
              width={400}
              height={400}
              className="w-[1300] mt-[500px] md:h-[1300px] md:w-[1050px] md:mt-[200px]"
              unoptimized
            />
          </div>
        </div>

        <div className="w-full hidden md:block z-50 h-10 flex justify-start content-start items-center absolute bottom-0 bg-transparent">
          <div className="container mx-auto flex flex-row">
            <span className="font-mainLight">
              I built this website with
              <FontAwesomeIcon icon={faHeart} className="text-pink-500 mx-2" />
              Get it on my{" "}
              <a href="" className="text-blue-500">
                GitHub
              </a>
            </span>
          </div>
        </div>
      </div>
    </main>
  );
};

export default MainBanner;
