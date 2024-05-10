import PortfolioLayout from "@/app/components/PortfolioLayout";
import PostCardThumbnail from "@/app/components/PostCardThumbnail";
import React, { FC } from "react";
import DetikcomThumbnail from "../../assets/images/detikcom.png";
import GicThumbnail from "../../assets/images/gic.png";
import TelkomselThumbnail from "../../assets/images/telkomsel.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLink } from "@fortawesome/free-solid-svg-icons";

// Import Icons
import GraphQlIcon from "../../assets/icons/graphql-icon.png";
import MaterialUiIcon from "../../assets/icons/materialui-icon.png";
import NextJsIcon from "../../assets/icons/nextjs-icon.png";
import ReactIcon from "../../assets/icons/React-icon.png";
import ShadcnIcon from "../../assets/icons/shadcn-icon.png";
import TailwindIcon from "../../assets/icons/tailwind-icon.jpeg";
import DjangoIcon from "../../assets/icons/django-icon.svg";
import BlockChainIcon from "../../assets/icons/blockchain-icon.png";
import PancakeSwapIcon from "../../assets/icons/pancakeswap-icon.png";
import Image from "next/image";

const MyWork: FC = () => {
  return (
    <PortfolioLayout>
      {/* SECTION WORKING EXPERIENCE TELKOMSEL */}
      <div className="py-10 md:py-0 w-full h-auto bg-white">
        <div className="container md:flex p-0">
          <div className="w-full md:w-1/2 h-auto justify-center content-center">
            <div className="">
              <PostCardThumbnail image={TelkomselThumbnail} />
            </div>
          </div>
          <div className="w-full md:w-1/2 md:py-[200px] px-10">
            <div className="bg-white relative">
              <span className="font-cairoBold text-lg">
                Lead Software Engineer
              </span>{" "}
              <br />
              <span className="font-cairoBold text-3xl md:text-5xl">
                My Telkomsel - Telkomsel
              </span>
              <div className="absolute bottom-[-10px] md:bottom-[-20px] bg-primary h-[10px] md:h-[15px] rounded-full overflow-hidden">
                <span className="font-cairoBold text-3xl md:text-5xl text-primary">
                  Telkomsel
                </span>
              </div>
            </div>
            <div className="relative mt-5 md:mt-10">
              <div className="text-justify md:text-start">
                <p>
                  Become a leader of Software Engineers, especially for Frontend
                  team, {`I've`} been leading 10 people in a team.
                </p>
                <p className="mt-4">
                  Designing, Architechting, Goal planing, People Management and
                  Sprint Planning are my daily dutties. Not limited of those
                  things, I have push my limit to ensure the Product that My
                  Team developed is well delivered, I use Jira to manage all my
                  team tasks.
                </p>
                <p className="mt-4">
                  I also do some code to help my team reach our goal together,
                  we use React Js, React Native, Next Js, Tailwind, ShadCn and
                  Material UI. In case that I am not limited to Lead Frontend
                  team, but also the Entire Software Engineer, I sometime take
                  care about Backend side and even Data Migrating. We use Nest
                  JS, MongoDB, Kafka, Redis for the Backend and Ops.
                </p>
              </div>
            </div>

            <div className="relative mt-4">
              <span className="font-mainRegular text-[10px]">
                Used Technologies :{" "}
              </span>
            </div>
            <div className="relative flex flex-row mt-4">
              <Image
                alt="Programming Tools and Framework Icon"
                src={NextJsIcon}
                className="w-[20px] h-[20px] md:w-[25px] md:h-[25px] mr-2"
              />
              <Image
                alt="Programming Tools and Framework Icon"
                src={ReactIcon}
                className="w-[25px] h-[20px] md:w-[30px] md:h-[25px] mr-2"
              />
              <Image
                alt="Programming Tools and Framework Icon"
                src={MaterialUiIcon}
                className="w-[20px] h-[20px] md:w-[25px] md:h-[25px] mr-2"
              />
              <Image
                alt="Programming Tools and Framework Icon"
                src={ShadcnIcon}
                className="w-[20px] h-[20px] md:w-[25px] md:h-[25px] mr-2"
              />
              <Image
                alt="Programming Tools and Framework Icon"
                src={TailwindIcon}
                className="w-[25px] h-[20px] md:w-[30px] md:h-[25px] mr-2"
              />
            </div>
          </div>
        </div>
      </div>

      {/* SECTION WORKING EXPERIENCE DETIKCOM */}
      <div className="py-10 md:py-0 w-full h-auto bg-[#f4f4f4]">
        <div className="container flex flex-col-reverse md:flex-row p-0">
          <div className="w-full md:w-1/2 md:py-[200px] px-10">
            <div className="bg-transparent relative">
              <span className="font-cairoBold text-lg">
                Senior Frontend Engineer
              </span>{" "}
              <br />
              <span className="font-cairoBold text-3xl md:text-5xl">
                Detikcom - Transmedia
              </span>
              <div className="absolute bottom-[-10px] md:bottom-[-20px] bg-primary h-[10px] md:h-[15px] rounded-full overflow-hidden">
                <span className="font-cairoBold text-3xl md:text-5xl text-primary">
                  Detikcom
                </span>
              </div>
            </div>
            <div className="relative mt-5 md:mt-10">
              <div className="text-justify md:text-start">
                <p>
                  Workin in Detikcom, Transmedia. Associated as Fullstack
                  Engineer but I mostly assigned to the Frontend Side.
                </p>
                <p className="mt-4">
                  The lists that {`I've`} done are about Providing API,
                  integrating API with Frontend and Slicing the UI to code.
                </p>
                <p className="mt-4">
                  We {`don't`} use external UI Component here, we built it from
                  the scratch or even sometime I use the existing component from
                  the other team. We use React JS, React Native and Next JS in
                  frontend side, and for the Backend side, we use Python Django
                  with Graph QL.
                </p>
              </div>
            </div>

            <div className="relative mt-4">
              <span className="font-mainRegular text-[10px]">
                Used Technologies :{" "}
              </span>
            </div>
            <div className="relative flex flex-row mt-4">
              <Image
                alt="Programming Tools and Framework Icon"
                src={DjangoIcon}
                className="w-[20px] h-[20px] md:w-[25px] md:h-[25px] mr-2"
              />
              <Image
                alt="Programming Tools and Framework Icon"
                src={GraphQlIcon}
                className="w-[25px] h-[20px] md:w-[25px] md:h-[25px] mr-2"
              />
              <Image
                alt="Programming Tools and Framework Icon"
                src={NextJsIcon}
                className="w-[20px] h-[20px] md:w-[25px] md:h-[25px] mr-2"
              />
              <Image
                alt="Programming Tools and Framework Icon"
                src={ReactIcon}
                className="w-[25px] h-[20px] md:w-[30px] md:h-[25px] mr-2"
              />
            </div>
          </div>
          <div className="w-full md:w-1/2 h-auto justify-center content-center">
            <div className="">
              <PostCardThumbnail image={DetikcomThumbnail} />
            </div>
          </div>
        </div>
      </div>

      {/* SECTION WORKING EXPERIENCE GIC */}
      <div className="py-10 md:py-0 w-full h-auto bg-white">
        <div className="container md:flex p-0">
          <div className="w-full md:w-1/2 h-auto justify-center content-center">
            <div className="">
              <PostCardThumbnail image={GicThumbnail} />
            </div>
          </div>

          <div className="w-full md:w-1/2 md:py-[200px] px-10">
            <div className="bg-transparent relative">
              <span className="font-cairoBold text-lg">
                Blockchain Frontend Engineer
              </span>{" "}
              <br />
              <span className="font-cairoBold text-3xl md:text-5xl">
                GIC Trade - GIC Indonesia
              </span>
              <div className="absolute bottom-[-10px] md:bottom-[-20px] bg-primary h-[10px] md:h-[15px] rounded-full overflow-hidden">
                <span className="font-cairoBold text-3xl md:text-5xl text-primary">
                  GIC Trade
                </span>
              </div>
            </div>
            <div className="relative mt-5 md:mt-10">
              <div className="text-justify md:text-start">
                <p>
                  GIC Trade is online forex and cryptocurrency trading app, they
                  provide user to trade on their app or even swap their crypto
                  coin.
                </p>
                <p className="mt-4">
                  I worked on Web2 and Web3 using Blockchain technology in order
                  to provide user to interact with their crypto coin on GIC App.
                </p>
                <p className="mt-4">
                  I mostly use React JS and sometime Next JS for public website,
                  for the Mobile App, I used React Native. We use Blockchain
                  technology with Smart Contract, I also integrated Pancake Swap
                  UI to make CoinSwap Web App.
                </p>
              </div>
            </div>

            <div className="relative mt-4">
              <span className="font-mainRegular text-[10px]">
                Used Technologies :{" "}
              </span>
            </div>
            <div className="relative flex flex-row mt-4">
              <Image
                alt="Programming Tools and Framework Icon"
                src={BlockChainIcon}
                className="w-[20px] h-[20px] md:w-[25px] md:h-[25px] mr-2"
              />
              <Image
                alt="Programming Tools and Framework Icon"
                src={PancakeSwapIcon}
                className="w-[25px] h-[20px] md:w-[25px] md:h-[25px] mr-2"
              />
              <Image
                alt="Programming Tools and Framework Icon"
                src={NextJsIcon}
                className="w-[20px] h-[20px] md:w-[25px] md:h-[25px] mr-2"
              />
              <Image
                alt="Programming Tools and Framework Icon"
                src={ReactIcon}
                className="w-[25px] h-[20px] md:w-[30px] md:h-[25px] mr-2"
              />
              <Image
                alt="Programming Tools and Framework Icon"
                src={TailwindIcon}
                className="w-[25px] h-[20px] md:w-[30px] md:h-[25px] mr-2"
              />
            </div>
          </div>
        </div>
      </div>
    </PortfolioLayout>
  );
};

export default MyWork;
