import React from "react";

const Events = () => {
  return (
    <section id="events" className="">
      <div className="container mx-auto text-center px-6">
        <h2 className="text-4xl font-extrabold text-gray-800 mb-8">
          Upcoming Events
        </h2>
        <ul className="space-y-6">
          <li className="text-lg text-gray-800 font-semibold hover:text-blue-600 transition-colors duration-300">
            <span className="font-bold text-gray-900">
              "The Kavi Collective"
            </span>{" "}
            - December 8, 2024, Online Event (available on{" "}
            <span className="text-blue-500">BookMyShow</span>)
          </li>
          <li className="text-lg text-gray-800 font-semibold hover:text-blue-600 transition-colors duration-300">
            <span className="font-bold text-gray-900">"RomCom"</span> - December
            10, 2024, Delhi, blending poetry and humor.
          </li>
          <li className="text-lg text-gray-800 font-semibold hover:text-blue-600 transition-colors duration-300">
            <span className="font-bold text-gray-900">
              "Just Baat Nhi Jazbaat"
            </span>{" "}
            - December 15, 2024, Ahmedabad, her signature poetry and
            storytelling show.
          </li>
        </ul>
        <p className="text-sm mt-8 text-gray-600">
          For tickets and details, visit{" "}
          <a
            href="https://bookmyshow.com"
            className="text-blue-500 hover:underline"
          >
            BookMyShow
          </a>
          .
        </p>
      </div>
    </section>
  );
};

export default Events;
