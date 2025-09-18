import React from "react";

const Footer = () => {
  const links = [
    ["FAQ", "Help Centre", "Account", "Media Centre", "Investor Relations", "Jobs"],
    ["Ways to Watch", "Terms of Use", "Privacy", "Cookie Preferences", "Corporate Information", "Contact Us"],
    ["Speed Test", "Legal Notices", "Only on Netflix", "Select Language"]
  ];

  return (
    <footer className="bg-gray-900 text-gray-400 py-10 px-6">
      <div className="max-w-6xl mx-auto">
        {/* Questions */}
        <p className="mb-6 text-sm">Questions? Call 000-800-919-1743</p>

        {/* Links */}
        <div className="grid grid-cols-2 sm:grid-cols-3 gap-4 mb-6 text-sm">
          {links.flat().map((link, idx) => (
            <a
              key={idx}
              href="#"
              className="hover:underline hover:text-white transition-colors"
            >
              {link}
            </a>
          ))}
        </div>

        {/* Language & Region */}
        <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-2 border-t border-gray-700 pt-6 text-sm">
          <div>
            <select className="bg-gray-800 text-gray-400 p-2 rounded-md border border-gray-700">
              <option>English</option>
              {/* Add more languages here if needed */}
            </select>
          </div>
          <p>Netflix India</p>
        </div>

        {/* reCAPTCHA notice */}
        <p className="mt-4 text-xs text-gray-500">
          This page is protected by Google reCAPTCHA to ensure you're not a bot.{" "}
          <a href="#" className="underline hover:text-white">
            Learn more
          </a>.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
