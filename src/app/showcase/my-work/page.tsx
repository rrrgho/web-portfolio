import PortfolioLayout from "@/app/components/PortfolioLayout";
import PostCardThumbnail from "@/app/components/PostCardThumbnail";
import { FC } from "react";
import DetikcomThumbnail from "@/app/assets/images/detikcom.png";
import GicThumbnail from "@/app/assets/images/gic.png";
import TelkomselThumbnail from "@/app/assets/images/telkomsel.png";
import UpThumbnail from "@/app/assets/images/up.png";
import PlnThumbnail from "@/app/assets/images/pln.png";

// Import Icons
import Image from "next/image";
import ReactIcon from "@/app/assets/icons/React-icon.png";
import BlockChainIcon from "@/app/assets/icons/blockchain-icon.png";
import DjangoIcon from "@/app/assets/icons/django-icon.svg";
import GraphQlIcon from "@/app/assets/icons/graphql-icon.png";
import MaterialUiIcon from "@/app/assets/icons/materialui-icon.png";
import NextJsIcon from "@/app/assets/icons/nextjs-icon.png";
import PancakeSwapIcon from "@/app/assets/icons/pancakeswap-icon.png";
import ShadcnIcon from "@/app/assets/icons/shadcn-icon.png";
import TailwindIcon from "@/app/assets/icons/tailwind-icon.jpeg";
import LaravelIcon from "@/app/assets/icons/laravel-icon.png";

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

      {/* SECTION GREETING OF PERSONAL PROJECT */}
      <div className="py-10 md:py-0 w-full h-auto bg-primary">
        <div className="container py-10">
          <div className="w-full md:w-3/5">
            <span className="text-white font-cairoBold text-3xl md:text-5xl">
              Do those works above impress you?
            </span>{" "}
            <br />
            <span className="text-white font-cairoRegular tracking-wide text-2xl">
              {`That's`} just a begining, {`I'll`} show you below my personal
              project
            </span>
            <p className="mt-4 text-white font-mainLight">
              I work on my personal project only with my beautiful hands, start
              from the Backend side, Frontend side and even Deployment or Data
              migration.
            </p>
          </div>
        </div>
      </div>

      {/* SECTION WORKING EXPERIENCE UNITED PLANTATION */}
      <div className="py-10 md:py-0 w-full h-auto bg-white">
        <div className="container md:flex p-0">
          <div className="w-full md:w-1/2 h-auto justify-center content-center">
            <div className="">
              <PostCardThumbnail image={UpThumbnail} />
            </div>
          </div>

          <div className="w-full md:w-1/2 md:py-[200px] px-10">
            <div className="bg-transparent relative">
              <span className="font-cairoBold text-lg">Fullstack Engineer</span>{" "}
              <br />
              <span className="font-cairoBold text-3xl md:text-5xl">
                Palm Tree Research & Development App
              </span>
              <div className="absolute bottom-[-10px] md:bottom-[-20px] bg-primary h-[10px] md:h-[15px] rounded-full overflow-hidden">
                <span className="font-cairoBold text-3xl md:text-5xl text-primary">
                  Palm Tree
                </span>
              </div>
            </div>
            <div className="relative mt-5 md:mt-10">
              <div className="text-justify md:text-start">
                <p>
                  This app is used for managing Palm Tree Research, which it
                  will record all Palm Tree process untill Palm Seed Production
                </p>
                <p className="mt-4">
                  I use Laravel for the Backend side to make it easier to
                  maintanance and fast in development, with Postgresql database.
                </p>
                <p className="mt-4">
                  For the Frontend side, of course I use React Native which it
                  required Cross-Platform app, and React JS for the website
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
                src={LaravelIcon}
                className="w-[20px] h-[20px] md:w-[25px] md:h-[25px] mr-2"
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
                src={ShadcnIcon}
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

      {/* SECTION WORKING EXPERIENCE PLN INDONESIA POWER */}
      <div className="py-10 md:py-0 w-full h-auto bg-[#f4f4f4]">
        <div className="container flex flex-col-reverse md:flex-row p-0">
          <div className="w-full md:w-1/2 md:py-[200px] px-10">
            <div className="bg-transparent relative">
              <span className="font-cairoBold text-lg">Fullstack Engineer</span>{" "}
              <br />
              <span className="font-cairoBold text-3xl md:text-5xl">
                PLN Working Permit App
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
                  PLN is the biggest power provider company of Indonesia, they
                  only one Power provider in Indonesia.
                </p>
                <p className="mt-4">
                  I built the Working Permit App for their company, which to
                  validate every workers or vendors who work in PLN Indonesia
                </p>
                <p className="mt-4">
                  As usual, I use React Native and PHP Laravel to execute this
                  Web and App
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
                src={LaravelIcon}
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
              <PostCardThumbnail image={PlnThumbnail} />
            </div>
          </div>
        </div>
      </div>
    </PortfolioLayout>
  );
};

export default MyWork;
