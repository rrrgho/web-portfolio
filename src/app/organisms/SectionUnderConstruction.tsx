import DevelopingEngineerImage from "@/app/assets/images/developing-engineer.jpg";
import Image from "next/image";
import DownloadThisWebsite from "../components/DownloadThisWeb";

const SectionUnderConstraction = () => {
  return (
    <main>
      <div className="h-screen w-full">
        <div className="h-full flex flex-col w-full justify-center content-center items-center">
          <Image
            className="w-[300px] h-[300px] md:w-[500px] md:h-[500px]"
            src={DevelopingEngineerImage}
            alt="Developing Engineer"
          />
          <div className="container text-center">
            <span className="font-cairoBold text-3xl">
              The page is under construction
            </span>
            <p className="mt-2">
              Sorry, the page you are looking for is under development, We will
              fix it as soon as possible
            </p>
          </div>
          <div className="container text-center mt-8 flex flex-row justify-center content-center items-center">
            <DownloadThisWebsite />
          </div>
        </div>
      </div>
    </main>
  );
};

export default SectionUnderConstraction;
