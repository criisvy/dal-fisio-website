"use client";
import { cn } from "@/utils/cn";
import { Plus, Minus } from "lucide-react";

const Accordion = ({ heading, text, open, onOpenChange }) => {
  return (
    <dl>
      <div
        className="flex cursor-pointer justify-between"
        onClick={onOpenChange}
      >
        <dt className="font-bold">{heading}</dt>
        {open ? (
          <Minus className="text-primary" />
        ) : (
          <Plus className="text-primary transition-opacity" />
        )}
      </div>
      <hr className="bg-primary mt-3.5 mb-5 h-px border-0"></hr>
      <dd
        className={cn(
          "text-brownish transition-all ease-in-out",
          open ? "opacity-100" : "opacity-0",
        )}
      >
        {text}
      </dd>
    </dl>
  );
};

export default Accordion;
