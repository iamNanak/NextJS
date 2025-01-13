"use client";
import { AnimatedTooltip } from "./ui/animated-tooltip";
import { WavyBackground } from "./ui/wavy-background";

const people = [
  {
    id: 1,
    name: "Alice Johnson",
    designation: "Vocal Coach",
    image:
      "https://plus.unsplash.com/premium_vector-1725992914591-c84d48e20574?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8dm9jYWwlMjB0ZWFjaGVyfGVufDB8fDB8fHww",
  },
  {
    id: 2,
    name: "David Smith",
    designation: "Guitar Instructor",
    image:
      "https://plus.unsplash.com/premium_vector-1722782879493-e479e8d23385?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NDB8fGd1aXRhcnxlbnwwfHwwfHx8MA%3D%3D",
  },
  {
    id: 3,
    name: "Emily Brown",
    designation: "Piano Teacher",
    image:
      "https://plus.unsplash.com/premium_vector-1682303451786-cff8e7aadbfa?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8cGlhbm98ZW58MHx8MHx8fDA%3D",
  },
  {
    id: 4,
    name: "Michael Williams",
    designation: "Drum Specialist",
    image:
      "https://plus.unsplash.com/premium_vector-1682302041002-10b88e725b86?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjJ8fGRydW18ZW58MHx8MHx8fDA%3D",
  },
  {
    id: 5,
    name: "Sophia Taylor",
    designation: "Violin Instructor",
    image:
      "https://plus.unsplash.com/premium_vector-1682301209017-590cc773e416?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8dmlvbGlufGVufDB8fDB8fHww",
  },
  {
    id: 6,
    name: "James Wilson",
    designation: "Music Theory Expert",
    image:
      "https://plus.unsplash.com/premium_vector-1726847200908-6a3c4e1b3072?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjV8fG11c2ljfGVufDB8fDB8fHww",
  },
];

const Instructors = () => {
  return (
    <div className="relative h-[40rem] overflow-hidden flex items-center justify-center">
      <WavyBackground className="w-full max-w-7xl mx-auto flex flex-col items-center justify-center h-full">
        <h2 className="text-center text-2xl md:text-4xl lg:text-7xl text-white font-bold mb-8">
          Meet Our Instructors
        </h2>
        <p className="text-base md:text-lg text-white text-center mb-4">
          Discover the talented professionals who will guide your musical
          journey
        </p>
        <div className="flex flex-row justify-center items-center mb-10 w-full">
          <AnimatedTooltip items={people}></AnimatedTooltip>
        </div>
      </WavyBackground>
    </div>
  );
};

export default Instructors;
