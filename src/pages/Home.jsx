import React from "react";
import { ReactTyped } from "react-typed";
import About from "./About";
import Events from "../components/Events";
import Gallery from "../components/Gallery";
import Contact from "../components/Contact";

const Home = () => {
  return (
    <div>
      <section
        id="home"
        className="h-screen bg-cover bg-center opacity-94 text-white flex items-center justify-center"
        style={{
          backgroundImage: "url('/nidhibackground.jpg')",
        }}
      >
        <div className="text-center px-6 sm:px-8 md:px-12 lg:px-16 xl:px-24 space-y-6">
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold  rounded-md shadow-lg max-w-3xl mx-auto">
            <ReactTyped
              strings={[
                "Welcome to the Poetry of Nidhi",
                "Discover the Art of Verse",
                "Words That Touch the Soul",
                "A Journey Through Poetry",
              ]}
              typeSpeed={50}
              backSpeed={50}
              backDelay={1000}
              startDelay={500}
              loop
            />
          </h1>
          <p className="mt-6 text-lg sm:text-xl md:text-2xl bg-black bg-opacity-40 p-4 rounded-md shadow-lg max-w-3xl mx-auto">
            <ReactTyped
              strings={[
                "Explore the beauty of words and imagination.",
                "Dive deep into the heart of poetry.",
                "Feel the rhythm of expression.",
                "Unlock the magic of language.",
              ]}
              typeSpeed={50}
              backSpeed={50}
              backDelay={1000}
              startDelay={500}
              loop
            />
          </p>
        </div>
      </section>

      <section id="about" className="">
        <About />
      </section>
      <section id="events" className="py-16 bg-white">
        <Events />
      </section>
      <section id="gallery" className="py-16 bg-gray-100">
        <Gallery />
      </section>
      <section id="contact" className="py-16 bg-gray-200">
        <Contact />
      </section>
    </div>
  );
};

export default Home;
