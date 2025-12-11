"use client";

import React from "react";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { frequentAskQuestions as faqs } from "@/utils/frequentAskQuestions";
import { motion } from "motion/react";

const FrequentQuestions = () => {
  return (
    <div
      id="faq"
      className="md:max-h-screen md:mb-10 mb-4 md:mt-0 mt-12 flex items-center justify-center flex-col md:gap-14 gap-2"
    >
      <div className="max-w-7xl mx-auto text-center">
        <p className="font-bold text-xl md:text-4xl dark:text-white text-black">
          Frequently{" "}
          <span className="text-neutral-400">
            {"Asked, Questions".split("").map((word, idx) => (
              <motion.span
                key={idx}
                className="inline-block"
                initial={{ x: -10, opacity: 0 }}
                animate={{ x: 0, opacity: 1 }}
                transition={{ duration: 0.5, delay: idx * 0.04 }}
              >
                {word}
              </motion.span>
            ))}
          </span>
        </p>
      </div>
      <Accordion type="single" collapsible className="w-full">
        {faqs.map((faq, index) => (
          <AccordionItem key={index} value={`item-${index + 1}`}>
            <AccordionTrigger>{faq.question}</AccordionTrigger>
            <AccordionContent className="text-neutral-400">
              {faq.answer}
            </AccordionContent>
          </AccordionItem>
        ))}
      </Accordion>
    </div>
  );
};

export default FrequentQuestions;
