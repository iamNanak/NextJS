"use client";
import { Meteors } from "@/components/ui/meteors";

function page() {
  return (
    <div className="relative flex flex-col justify-center items-center bg-slate-900 h-full">
      <Meteors number={20} />
      <div className="h-[45rem] max-w-xl relative flex flex-col items-center justify-center overflow-hidden">
        <h2 className="text-7xl text-center font-bold mb-8">Contact Us</h2>
        <p className="text-sm md:text-lg text-slate-600 text-center mb-4 overflow-hidden">
          We're here to help with any questions about our Courses, programs, or
          events. Reach out and let us know how we can assist you in your
          musical journey.
        </p>
        <div className="w-full">
          <input
            type="email"
            placeholder="Your email address"
            className="w-full h-14 bg-black px-4 rounded-lg placeholder:text-slate-700 border-none mb-4 text-base"
          />
          <textarea
            placeholder="Your message"
            className="w-full h-36 bg-black px-4 py-3 rounded-lg placeholder:text-slate-700 border-none text-base"
          ></textarea>
        </div>
      </div>
    </div>
  );
}

export default page;
