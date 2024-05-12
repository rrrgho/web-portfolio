import React from "react";
import PortfolioLayout from "../components/PortfolioLayout";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faDownload, faEnvelope } from "@fortawesome/free-solid-svg-icons";

const HireMe = () => {
  return (
    <PortfolioLayout>
      <div className="container w-screen py-[100px] flex flex-col justify-center content-center items-center">
        <div className="w-full md:w-5/6">
          <Card>
            <CardContent>
              <div className="w-full flex flex-row mt-3 md:mt-0 justify-between md:justify-end md:text-end md:p-4 md:content-end md:items-end">
                <Button className="px-8 bg-primary text-white font-cairoSemiBold tracking-wide">
                  <FontAwesomeIcon icon={faEnvelope} />
                  <span className="ml-2">Email me</span>
                </Button>
                <a href="/rian-gho-software-engineer-cv.pdf">
                  <Button className="px-8 bg-primary border-solid border-[1px] border-primary md:ms-4 bg-white text-primary tracking-[.10em] hover:text-primary hover:bg-white hover:font-bold">
                    <FontAwesomeIcon icon={faDownload} />
                    <span className="ml-2">Download</span>
                  </Button>
                </a>
              </div>
              <div className="w-full flex flex-row py-10 justify-between">
                <div className="w-full border-solid  border-b-2 border-primary pb-10 ">
                  <div>
                    <span className="font-mainBold text-primary text-4xl md:text-6xl tracking-wide md:tracking-[.20em]">
                      Rian Gho
                    </span>
                  </div>
                  <div>
                    <span className="font-mainRegular text-zinc-800 text-1xl md:text-3xl">
                      Software Engineer
                    </span>
                  </div>
                </div>
              </div>

              <div className="w-full">
                <span>
                  I am passionated about programming, dedicated and innovative
                  software engineer with 5 years of experience, in developing
                  and designing high quality software applications. And also
                  eager to learn new experiences.
                </span>
              </div>

              <div className="w-full flex flex-wrap py-5 justify-between">
                <div className="w-full md:w-1/2">
                  <div className="w-full">
                    <div>
                      <span className="font-mainRegular font-bold md:text-3xl">
                        Experiences
                      </span>
                    </div>

                    {/* Telkomsel */}
                    <main>
                      <div className="mt-4">
                        <span className="font-mainRegular text-2xl">
                          1. Software Engineer
                        </span>{" "}
                        <br />
                        <span className="font-mainRegular text-1xl">
                          Telkomsel ( 2021 - Present )
                        </span>{" "}
                        <br />
                      </div>
                      <div className="mt-2 text-justify">
                        <p className="text-[15px]">
                          Telkomsel is biggest Telecommunication and Internet
                          provider in Indonesia, I am associated as Lead
                          Software Engineer with focus in Frontend, The lists of
                          activity as Lead Software Engineer in Telkomsel as
                          below :
                        </p>
                        <ul className="list-disc pl-5 text-[12px] md:text-[14px]">
                          <li className="mt-3">
                            Leading frontend team by implementing Agile with
                            SCRUM methodology.
                          </li>
                          <li className="mt-3">
                            Designing and Architecting the system of Frontend to
                            suit the System Requirement and Oversee project
                            strategies and processes.
                          </li>
                          <li className="mt-3">
                            Design product upgrades and improvements and
                            maintenance technical documentation
                          </li>
                          <li className="mt-3">
                            Not only Management, I also dive into coding same
                            like other members, with React JS, React Native,
                            Next JS, Material UI, Tailwind and ShadCN
                          </li>
                          <li className="mt-3">
                            Integrated API provided by NextJS using React
                            Tanstack Query
                          </li>
                        </ul>
                      </div>
                    </main>

                    {/* Detikcom */}
                    <main>
                      <div className="mt-[40px]">
                        <span className="font-mainRegular text-2xl">
                          2. Software Engineer
                        </span>{" "}
                        <br />
                        <span className="font-mainRegular text-1xl">
                          Detikcom, Transmedia ( 2020 - 2021 )
                        </span>{" "}
                        <br />
                      </div>
                      <div className="mt-2 text-justify">
                        <p className="text-[15px]">
                          Transmedia is one of online Media and Television
                          company in Indonesia, I work as Senior Software
                          Engineer who handle Backend and Frontend, but mostly I
                          handle frontend side.
                        </p>
                        <ul className="list-disc pl-5 text-[12px] md:text-[14px]">
                          <li className="mt-3">
                            Providing API with Python Django and GraphQL
                          </li>
                          <li className="mt-3">
                            Slicing UI into code using React JS and React
                            Native, with Tailwind and ShadCN UI for styling
                          </li>
                          <li className="mt-3">
                            Designing, building, and optimizing the client-side
                            of web applications, and make sure it is in
                            responsive behavior.
                          </li>
                          <li className="mt-3">
                            Integrate the API using GraphQL Client for the live
                            comment section of Detikcom live streeming.
                          </li>
                        </ul>
                      </div>
                    </main>

                    {/* GIC */}
                    <main>
                      <div className="mt-[40px]">
                        <span className="font-mainRegular text-2xl">
                          3. Software Engineer
                        </span>{" "}
                        <br />
                        <span className="font-mainRegular text-1xl">
                          GIC Trade, Global Investa Capital ( 2018 - 2020 )
                        </span>{" "}
                        <br />
                      </div>
                      <div className="mt-2 text-justify">
                        <p className="text-[15px]">
                          GIC Trade is online Forex and Cryptocurrency tradding
                          company, which run with Blockchain Technology, I was
                          associated as Backend Engineer at the First Year and
                          move to Frontend at the second year, here is what I
                          have done in GIC:
                        </p>
                        <ul className="list-disc pl-5 text-[12px] md:text-[14px]">
                          <li className="mt-3">
                            Handling Fullstack Backoffice with Laravel and Blade
                            Laravel
                          </li>
                          <li className="mt-3">
                            Providing API to another Backoffice Web-App to
                            manage customer's GIC Coin
                          </li>
                          <li className="mt-3">
                            Building GIC Web Landing page with Next JS and React
                            Strap for the UI Component
                          </li>
                          <li className="mt-3">
                            Implement Redux for state management
                          </li>
                          <li className="mt-3">
                            Building Coin Swap App with Solidity and React JS
                            and integrating Blockchain Smart Contract ( Web3 )
                          </li>
                        </ul>
                      </div>
                    </main>
                  </div>
                </div>

                <div className="w-full md:w-1/2 mt-5 md:mt-0">
                  <div className="w-full md:pl-5">
                    <div>
                      <span className="font-mainRegular font-bold md:text-3xl">
                        Education
                      </span>
                    </div>
                    <main>
                      <div className="mt-4">
                        <span className="font-mainRegular text-2xl">
                          Information Technology
                        </span>{" "}
                        <br />
                        <span className="font-mainBold text-1xl">
                          Mikroskil University
                        </span>{" "}
                        <br />
                        <span className="font-mainRegular text-1xl">
                          Bachelor's Degree ( 2022 )
                        </span>{" "}
                        <br />
                      </div>
                      <div className="mt-2 text-justify">
                        <p className="text-[15px]">
                          Getting college of Information Technology enabled my
                          self into my passion, it is programming, almost 4
                          years in university and learn many things about
                          Information Technology, Community and Leadership made
                          me ready to face the world of modern tech.
                        </p>
                      </div>
                    </main>
                  </div>

                  <div className="w-full md:pl-5 mt-5">
                    <div>
                      <span className="font-mainRegular font-bold md:text-3xl">
                        Skills
                      </span>
                    </div>
                    <main>
                      <div className="mt-2 text-justify">
                        <p className="text-[15px]">
                          As a Senior Software Engineer, I have no hesitation in
                          saying I capable in everything in Tech, as long as it
                          has the documentation. But, to make it specific, here
                          is the most often used technology of me :
                        </p>
                      </div>
                      <div className="flex flex-wrap justify-between mt-4">
                        <div className="w-1/4 m-2">React JS</div>
                        <div className="w-1/4 m-2">React Native</div>
                        <div className="w-1/4 m-2">Next JS</div>
                        <div className="w-1/4 m-2">Redux</div>
                        <div className="w-1/4 m-2">React Tanstack</div>
                        <div className="w-1/4 m-2">Tailwind</div>
                        <div className="w-1/4 m-2">Material UI</div>
                        <div className="w-1/4 m-2">ShadCn</div>
                        <div className="w-1/4 m-2">Laravel</div>
                        <div className="w-1/4 m-2">Postgres SQL</div>
                        <div className="w-1/4 m-2">MySQL</div>
                        <div className="w-1/4 m-2">MongoDB</div>
                        <div className="w-1/4 m-2">Node JS</div>
                        <div className="w-1/4 m-2">Nest JS</div>
                        <div className="w-1/4 m-2">Message Broker</div>
                        <div className="w-1/4 m-2">Graph QL</div>
                      </div>
                    </main>
                  </div>

                  <div className="w-full md:pl-5 mt-5">
                    <div>
                      <span className="font-mainRegular font-bold md:text-3xl">
                        Language
                      </span>
                    </div>
                    <main>
                      <div className="mt-2 text-justify">
                        <p className="text-[15px]">
                          I speak English and Bahasa Indonesia
                        </p>
                      </div>
                    </main>
                  </div>
                  <div className="w-full md:pl-5 mt-5">
                    <div>
                      <span className="font-mainRegular font-bold md:text-3xl">
                        Contact
                      </span>
                    </div>
                    <main>
                      <div className="mt-2 text-justify">
                        <p className="text-[15px]">
                          Email :{" "}
                          <a
                            className="text-sky-500"
                            href="mailto:rianiregho@gmail.com"
                          >
                            rianiregho@gmail.com
                          </a>
                        </p>
                        <p className="text-[15px]">
                          Website :{" "}
                          <a
                            className="text-sky-500"
                            href="https://riangho.com"
                            target="_blank"
                          >
                            https://riangho.com
                          </a>
                        </p>
                        <p className="text-[15px]">
                          LinkedIn :{" "}
                          <a
                            className="text-sky-500"
                            href="https://www.linkedin.com/in/rian-gho/"
                            target="_blank"
                          >
                            https://www.linkedin.com/in/rian-gho/
                          </a>
                        </p>
                        <span className="text-[11px]">
                          Phone number is not shared through here, contact me
                          via email as first connect !
                        </span>
                      </div>
                    </main>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </PortfolioLayout>
  );
};

export default HireMe;
