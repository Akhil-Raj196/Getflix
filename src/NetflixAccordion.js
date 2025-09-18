import React, { useState } from "react";

const faqs = [
  {
    question: "What is Netflix?",
    answer: `Netflix is a streaming service that offers a wide variety of award-winning TV shows, movies, anime, documentaries and more – on thousands of internet-connected devices.

You can watch as much as you want, whenever you want, without a single ad – all for one low monthly price. There's always something new to discover, and new TV shows and movies are added every week!`,
  },
  {
    question: "How much does Netflix cost?",
    answer: `Watch Netflix on your smartphone, tablet, Smart TV, laptop, or streaming device, all for one fixed monthly fee. Plans range from ₹149 to ₹649 a month. No extra costs, no contracts.`,
  },
  {
    question: "Where can I watch?",
    answer: `Watch anywhere, anytime. Sign in with your Netflix account to watch instantly on the web at netflix.com from your personal computer or on any internet-connected device that offers the Netflix app, including smart TVs, smartphones, tablets, streaming media players and game consoles.

You can also download your favourite shows with the iOS or Android app. Use downloads to watch while you're on the go and without an internet connection. Take Netflix with you anywhere.`,
  },
  {
    question: "How do I cancel?",
    answer: `Netflix is flexible. There are no annoying contracts and no commitments. You can easily cancel your account online in two clicks. There are no cancellation fees – start or stop your account anytime.`,
  },
  {
    question: "What can I watch on Netflix?",
    answer: `Netflix has an extensive library of feature films, documentaries, TV shows, anime, award-winning Netflix originals, and more. Watch as much as you want, anytime you want.`,
  },
  {
    question: "Is Netflix good for kids?",
    answer: `The Netflix Kids experience is included in your membership to give parents control while kids enjoy family-friendly TV shows and films in their own space.

Kids profiles come with PIN-protected parental controls that let you restrict the maturity rating of content kids can watch and block specific titles you don’t want kids to see.`,
  },
];

const NetflixAccordion = () => {
  const [openIndex, setOpenIndex] = useState(null);

  const toggleFAQ = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div className="max-w-3xl mx-auto my-12 px-4">
      <h2 className="text-center text-3xl sm:text-2xl font-bold mb-8 text-white">
        Frequently Asked Questions
      </h2>
      {faqs.map((faq, index) => (
        <div key={index} className="mb-4">
          <button
            onClick={() => toggleFAQ(index)}
            className="w-full flex justify-between items-center bg-black/60 border border-gray-700 p-5 text-left text-xl sm:text-lg font-semibold text-white rounded transition-all duration-300 hover:bg-black/80"
          >
            <span>{faq.question}</span>
            <span className="text-2xl sm:text-xl font-bold">
              {openIndex === index ? "×" : "+"}
            </span>
          </button>
          {openIndex === index && (
            <div className="mt-2 p-5 bg-black/60 border border-gray-700 rounded text-gray-200 text-lg sm:text-base transition-all duration-300">
              {faq.answer.split("\n").map((line, i) => (
                <p key={i} className="mb-2">
                  {line}
                </p>
              ))}
            </div>
          )}
        </div>
      ))}
    </div>
  );
};

export default NetflixAccordion;
