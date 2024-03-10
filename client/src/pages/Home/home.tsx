import React from "react";
import { BrowserRouter as Router, Link } from "react-router-dom";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import cs from "../../assets/cs.jpg";
import emts from "../../assets/emts.jpg";
import fum from "../../assets/fum.jpg";
import am from "../../assets/am.jpg";
import { useTypewriter, Cursor } from "react-simple-typewriter";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import QueryCard from "../../components/querycard";
import Feedbackcard from "@/components/Feedbackcard";

const home = () => {
  const [text] = useTypewriter({
    words: ["Shravandeep Yadav", "Broski", "Buddy"],
    loop: false,
  });
  return (
    <>
      <div className="p-0 m-0">
        <div className=" flex flex-col relative left-40 top-6 mb-4">
          <h1>
            <span className="text-4xl font-bold text-primary">Hello, </span>
            <span className="text-4xl font-bold text-primary">{text}</span>
            <Cursor />
          </h1>
          <div className="relative top-3">
            <p>
              Your voice shapes our college experience
              <br />
              Share feedback or concerns to enhance our services together
            </p>
          </div>
        </div>
        <div className=" flex flex-col relative left-40 top-16 p-0">
          <h1>
            <span className="text-2xl font-bold text-primary">
              What are you looking for?
            </span>
          </h1>
        </div>
        <div className="relative top-20 mx-40 grid grid-cols-4 gap-3">
          <div className="w-full">
            <Card className="rounded-tr-md rounded-tl-md hover:transform hover:scale-105 transition-transform">
              <CardHeader className="p-0 rounded-tr-md rounded-tl-md">
                <img
                  src={cs}
                  alt="cs"
                  className="rounded-tr-md rounded-tl-md"
                />
              </CardHeader>
              <CardFooter className="justify-center rounded-br-md rounded-bl-md pb-3 pt-3 bg-secondary">
                <Link to="" className="btn text-center">
                  Cleanliness & Sanitation
                </Link>
              </CardFooter>
            </Card>
          </div>
          <div className="w-full">
            <Card className="rounded-tr-md rounded-tl-md hover:transform hover:scale-105 transition-transform">
              <CardHeader className="p-0 rounded-tr-md rounded-tl-md">
                <img
                  src={emts}
                  alt="cs"
                  className="rounded-tr-md rounded-tl-md"
                />
              </CardHeader>
              <CardFooter className="justify-center rounded-br-md rounded-bl-md pb-3 pt-3 pr-1 pl-1 bg-secondary">
                <Link to="" className="btn text-center">
                  Equipment Issues & Support
                </Link>
              </CardFooter>
            </Card>
          </div>
          <div className="w-full">
            <Card className="rounded-tr-md rounded-tl-md hover:transform hover:scale-105 transition-transform">
              <CardHeader className="p-0 rounded-tr-md rounded-tl-md">
                <img
                  src={fum}
                  alt="cs"
                  className="rounded-tr-md rounded-tl-md"
                />
              </CardHeader>
              <CardFooter className="justify-center rounded-br-md rounded-bl-md pb-3 pt-3 bg-secondary">
                <Link to="" className="btn text-center">
                  Cleanliness & Sanitation
                </Link>
              </CardFooter>
            </Card>
          </div>
          <div className="w-full">
            <Card className="rounded-tr-md rounded-tl-md hover:transform hover:scale-105 transition-transform">
              <CardHeader className="p-0 rounded-tr-md rounded-tl-md">
                <img
                  src={am}
                  alt="cs"
                  className="rounded-tr-md rounded-tl-md"
                />
              </CardHeader>
              <CardFooter className="justify-center rounded-br-md rounded-bl-md pb-3 pt-3 bg-secondary">
                <Link to="" className="btn text-center">
                  Cleanliness & Sanitation
                </Link>
              </CardFooter>
            </Card>
          </div>
        </div>
        <div className=" flex flex-col ml-40 mt-28">
          <h1 className="relative">
            <span className="text-2xl font-bold text-primary">
              Most recent Queries
            </span>
          </h1>
        </div>
        <div className="flex relative top-4 mx-40 bg-darkgray">
          <Carousel className="flex h-[380px] w-max">
            <CarouselContent className="">
              <CarouselItem className="">
                <QueryCard />
              </CarouselItem>
              <CarouselItem>
                <QueryCard />
              </CarouselItem>
              <CarouselItem>
                <QueryCard />
              </CarouselItem>
            </CarouselContent>
            <CarouselPrevious />
            <CarouselNext />
          </Carousel>
        </div>
        <div className=" flex flex-col ml-40 mt-20">
          <h1 className="relative">
            <span className="text-2xl font-bold text-primary">
              Latest Feedback
            </span>
          </h1>
          <div className="mt-6 mb-6">
            <Feedbackcard />
          </div>
        </div>
      </div>
    </>
  );
};

export default home;
