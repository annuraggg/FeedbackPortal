import React from "react";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import template from "../assets/template.jpg";
import { Clipboard } from "lucide-react";
import { MapPin } from "lucide-react";
import { ThumbsUp, MessageSquareText, Share2 } from "lucide-react";
const QueryCard = () => {
  return (
    <div className="flex p-0 m-0 shadow-lg">
      <Card className="flex flex-col h-10 w-80 rounded-tr-md rounded-tl-md shadow-2xl">
        <CardHeader className="p-0 m-0">
          <img
            src={template} 
            alt="template"
            className="rounded-tr-md rounded-tl-md"
          />
        </CardHeader>
        <CardContent className="p-0 m-0 bg-secondary rounded-br-md rounded-bl-md">
          <CardDescription className="p-0 m-0">
            <p className="mt-2 ml-3 text-A5F3FC">Cleanliness & Sanitation</p>
            <CardTitle className="mt-1 ml-3">Classroom Cleanliness</CardTitle>
          </CardDescription>
          <div className="flex flex-row items-center ml-3 mt-4">
            <Clipboard size={16} className="text-primary" />
            <p className="text-primary font-medium ml-1 mb-0.5 text-sm">
              Query ID:
            </p>
            <p className="font ml-1 mb-0.5 text-sm">101302-1</p>
          </div>
          <div className="flex flex-row items-center ml-3 mt-1">
            <MapPin size={16} className="text-primary" />
            <p className="text-primary font-medium ml-1 mb-0.5 text-sm">
              Location:
            </p>
            <p className="font ml-1 mb-0.5 text-sm">205</p>
          </div>
          <hr className=" mt-2 mb-2 ml-3 mr-3 text-primary border-t-20 border-r-2 border-primary  w-65 justify-center"></hr>
          <div className="flex flex-row items-center ml-4 mt-2 mb-2">
            <ThumbsUp size={22} className="text" />
            <p className="text font-medium ml-1 mb-0.5 text-sm">962</p>
            <MessageSquareText size={22} className="text ml-4" />
            <p className="text font-medium ml-1 mb-0.5 text-sm">40</p>
            <Share2 size={22} className="text ml-25 mr-5 ml-auto hover:text-gray-500" />
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default QueryCard;
