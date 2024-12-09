import React from "react";

const About = () => {
  return (
    <section
      id="about"
      className="relative py-16 bg-gradient-to-r from-blue-50 via-pink-100 to-purple-200"
    >
      <div className="container mx-auto text-center px-4">
        <h2 className="text-4xl font-extrabold text-gray-900 mb-6 tracking-wide leading-tight">
          About Me
        </h2>
        <p className="text-lg text-gray-800 leading-relaxed mb-6">
          Hi, I’m Nidhi Narwal – a poet, storyteller, and someone who loves to
          weave emotions into words. Writing has always been my way of
          expressing what’s in my heart – the things we often feel but struggle
          to say out loud. My journey into poetry started as a simple attempt to
          understand myself better, and it’s been the most beautiful experience
          to see my words resonate with so many of you.
        </p>
        <p className="text-lg text-gray-800 leading-relaxed mb-6">
          My poetry comes from a place of honesty and vulnerability. Whether
          it's about love, heartbreak, or finding yourself, I write to connect
          with the emotions we all carry but sometimes hide. Over the years,
          sharing my poetry on stage and online has given me the chance to not
          only share my stories but to hear yours as well. It’s this exchange of
          emotions that inspires me to keep writing.
        </p>
        <p className="text-lg text-gray-800 leading-relaxed mb-6">
          I believe poetry has the power to heal, to give voice to silence, and
          to remind us that we are never alone in what we feel. Every poem I
          write is a piece of my heart, and my hope is that it finds a place in
          yours.
        </p>
        <p className="text-lg text-gray-800 leading-relaxed mb-6">
          When I’m not writing or performing, you’ll probably find me lost in a
          good book, sipping chai, or daydreaming about my next poem. Thank you
          for being part of my journey and for letting my words be a part of
          yours.
        </p>

        {/* Optional: Add a decorative graphic or icon */}
        <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 opacity-50">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 100 100"
            className="h-48 w-48 text-gray-300"
          >
            <circle
              cx="50"
              cy="50"
              r="45"
              stroke="gray"
              strokeWidth="2"
              fill="none"
            />
            <path
              d="M20 50 Q 50 10, 80 50 T 80 50"
              fill="none"
              stroke="gray"
              strokeWidth="2"
            />
          </svg>
        </div>
      </div>
    </section>
  );
};

export default About;
