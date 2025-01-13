"use client";

import Link from "next/link";
import { HoverEffect } from "./ui/card-hover-effect";
import { title } from "process";

const featuredWebinars = [
  {
    title: "Mastering Music Theory for Beginners",
    description:
      "An in-depth webinar designed to introduce beginners to the fundamental concepts of music theory, including notes, scales, chords, and rhythm patterns.",
    slug: "mastering-music-theory-for-beginners",
    isFeatured: true,
  },
  {
    title: "Improvisation Techniques for Guitarists",
    description:
      "This webinar focuses on helping guitarists develop improvisational skills using scales, modes, and chord progressions in various genres like jazz, blues, and rock.",
    slug: "improvisation-techniques-for-guitarists",
    isFeatured: false,
  },
  {
    title: "Vocal Training: Finding Your Unique Voice",
    description:
      "Learn how to improve your vocal range, control, and tone while discovering techniques to find and develop your unique singing style.",
    slug: "vocal-training-finding-your-unique-voice",
    isFeatured: true,
  },
  {
    title: "Advanced Piano Performance Techniques",
    description:
      "A webinar designed for intermediate and advanced piano students, focusing on advanced techniques, interpretation, and stage performance skills.",
    slug: "advanced-piano-performance-techniques",
    isFeatured: false,
  },
  {
    title: "The Art of Songwriting",
    description:
      "Discover the essential elements of songwriting, including melody, lyrics, harmony, and structure, in this interactive and creative webinar.",
    slug: "the-art-of-songwriting",
    isFeatured: true,
  },
  {
    title: "Building Confidence for Live Performances",
    description:
      "Overcome stage fright and learn how to captivate your audience with practical tips and techniques for performing live.",
    slug: "building-confidence-for-live-performances",
    isFeatured: false,
  },
];

const UpcomingWebinars = () => {
  return (
    <div className="p-12 bg-gray-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <div className="text-center">
          <h2 className="text-base text-teal-600 font-semibold tracking-wide uppercase">
            FEATURED WEBINARS
          </h2>
          <p
            className="mt-2 text-3xl leading-8 font-extrabold trackinng-light
           text-white sm:text-4xl"
          >
            Enhance Your Musical Journey
          </p>
        </div>
        <div className="mt-10">
          <HoverEffect
            items={featuredWebinars.map((webinar) => ({
              title: webinar.title,
              description: webinar.description,
              link: `/${webinar.slug}`,
            }))}
          ></HoverEffect>
        </div>
        <div className="mt-10 text-center">
          <Link
            href={"/"}
            className="px-4 py-2 rounded border border-neutral-600 text-neutral-700 bg-white hover:bg-gray-100 transition duration-200"
          >
            View All Webinars
          </Link>
        </div>
      </div>
    </div>
  );
};

export default UpcomingWebinars;
