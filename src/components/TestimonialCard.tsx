"use client";

import { InfiniteMovingCards } from "./ui/infinite-moving-cards";

const testimonials = [
  {
    quote:
      "Joining this music school has been one of the best decisions of my life. The instructors are incredibly supportive and knowledgeable. I've learned so much and gained the confidence to perform in front of an audience.",
    name: "Emily Johnson",
    title: "Piano Student",
  },
  {
    quote:
      "As a beginner, I was nervous about learning the guitar, but the tailored lesson plans made the process enjoyable and easy to follow. The performance opportunities here are amazing, and I’m proud of how far I’ve come.",
    name: "Michael Lee",
    title: "Guitar Student",
  },
  {
    quote:
      "The online classes are just as effective as in-person lessons, with great flexibility for my schedule. The instructors always provide constructive feedback, and the school’s community is incredibly motivating.",
    name: "Sarah Thompson",
    title: "Violin Student",
  },
  {
    quote:
      "My child has developed a strong interest in music thanks to the wonderful teachers at this school. The personalized approach and engaging lessons have made a huge difference in her musical journey.",
    name: "James Carter",
    title: "Parent of a Student",
  },
  {
    quote:
      "I’ve been playing drums for a few years, but I wanted to improve my technique. The lessons here helped me refine my skills and taught me new styles I hadn’t explored before.",
    name: "David Martinez",
    title: "Drum Student",
  },
];

const TestimonialCard = () => {
  return (
    <div className="h-[40rem] w-full dark:bg-black dark:bg-grid-white/[0.2] relative flex flex-col items-center justify-center overflow-hidden">
      <h2 className="text-3xl text-center font-bold mb-8">
        Hear our Harmony: Voices of Success
      </h2>
      <div className="flex justify-center w-full overflow-hidden px-4 sm:px-6 lg:px-8">
        <div className="w-full max-w-6xl">
          <InfiniteMovingCards
            items={testimonials}
            direction="right"
            speed="slow"
          />
        </div>
      </div>
    </div>
  );
};

export default TestimonialCard;
