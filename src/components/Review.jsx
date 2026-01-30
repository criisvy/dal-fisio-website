"use client";
import { cn } from "@/utils/cn";
import { Star } from "lucide-react";

const Review = ({ imageSrc, imageAlt, name, text }) => {
  return (
    <div className="flex w-full flex-col gap-7 rounded-xl bg-white p-9">
      <div className="flex gap-4">
        <img src={imageSrc} alt={imageAlt} className="rounded-full"></img>
        <div className="flex flex-col gap-3">
          <h3 className="font-bold">{name}</h3>
          <div className="flex">
            <Star className="fill-primary text-primary"></Star>
            <Star className="fill-primary text-primary"></Star>
            <Star className="fill-primary text-primary"></Star>
            <Star className="fill-primary text-primary"></Star>
            <Star className="fill-primary text-primary"></Star>
          </div>
        </div>
      </div>
      <blockquote className="text-brownish">{text}</blockquote>
    </div>
  );
};

export default Review;
