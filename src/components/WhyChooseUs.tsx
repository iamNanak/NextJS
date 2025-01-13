"use client";
import { title } from "process";
import { StickyScroll } from "./ui/stick-scroll-reveal";

const content = [
  {
    title: "Welcome to Our Music School",
    description:
      "Unlock your musical potential with our comprehensive music education programs. Whether you are a complete beginner or an advanced musician, our school offers a welcoming and inspiring environment designed to nurture talent, build confidence, and foster a lifelong love for music.",
    content: (
      <div className="h-full w-full bg-[linear-gradient(to_bottom_right,var(--cyan-500),var(--emerald-500))] flex items-center justify-center text-white">
        Welcome to Our Music School
      </div>
    ),
  },
  {
    title: "Learn from Expert Instructors",
    description:
      "Our highly skilled instructors bring years of professional experience and a passion for teaching to every lesson. They specialize in a wide range of instruments and musical genres, ensuring that every student receives personalized attention and guidance to reach their full potential.",
  },
  {
    title: "Instruments We Teach",
    description:
      "From classical piano and acoustic guitar to modern electric instruments and percussion, we provide lessons for a broad selection of instruments. Our goal is to help students master their instrument of choice while gaining a deeper understanding of music theory and performance techniques.",
  },
  {
    title: "Tailored Lesson Plans",
    description:
      "At our music school, we understand that each student is unique. That’s why we offer customized lesson plans designed to match individual learning styles, goals, and musical interests. Whether you’re learning for personal enjoyment or professional growth, we have a program for you.",
  },
  {
    title: "Performance Opportunities",
    description:
      "We believe that performance is a key part of musical development. Throughout the year, students have the opportunity to participate in recitals, concerts, and community events, helping them build stage confidence, showcase their progress, and gain valuable experience in front of an audience.",
  },
  {
    title: "State-of-the-Art Facilities",
    description:
      "Our music school is equipped with modern classrooms, soundproof practice rooms, and top-of-the-line instruments to create an ideal learning environment. Whether you are attending in-person lessons or practicing independently, our facilities are designed to support your musical growth.",
  },
  {
    title: "Online & In-Person Classes",
    description:
      "For students who prefer flexibility, we offer both in-person and online classes. Our virtual lessons are conducted using high-quality video conferencing tools, allowing students to receive the same level of personalized instruction from the comfort of their homes.",
  },
  {
    title: "Affordable Pricing",
    description:
      "We believe that music education should be accessible to everyone. That’s why we offer a range of affordable pricing options and flexible payment plans, ensuring that students from all backgrounds can benefit from our high-quality music programs.",
  },
  {
    title: "Join Our Community",
    description:
      "When you enroll at our music school, you join a vibrant and supportive community of fellow music enthusiasts. Our collaborative learning environment encourages students to connect with each other, share ideas, and form friendships while growing their musical skills.",
  },
  {
    title: "Enroll Today",
    description:
      "Ready to begin your musical journey? Enroll today and take the first step toward mastering your favorite instrument. Whether you’re aiming to become a professional musician or simply want to enjoy playing music as a hobby, we’re here to help you achieve your dreams.",
  },
];

const WhyChooseUs = () => {
  return (
    <div>
      <StickyScroll content={content}></StickyScroll>
    </div>
  );
};

export default WhyChooseUs;
