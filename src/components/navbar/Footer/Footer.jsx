import React from "react";
import { MdOutlineEmail } from "react-icons/md";
import { CiLinkedin } from "react-icons/ci";
import { FaGithub } from "react-icons/fa";

const Footer = () => {
  return (
    <div id="Footer" className="bg-[#465697] text-white px-6 py-10 md:px-12 md:py-16">
      {/* Top Section */}
      <div className="flex flex-col md:flex-row justify-between items-center md:items-start gap-8">
        {/* Contact Text */}
        <div className="text-center md:text-left">
          <h2 className="text-2xl md:text-5xl font-bold mb-2">Contact</h2>
          <h3 className="text-sm md:text-xl font-normal">Feel free to reach out!</h3>
        </div>

        {/* Social Icons */}
        <ul className="flex gap-6 text-white text-2xl">
          <li>
            <a
              href="mailto:khondokermunir@gmail.com"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Email"
            >
              <MdOutlineEmail size={36} />
            </a>
          </li>
          <li>
            <a
              href="https://www.linkedin.com/in/khondoker-moniruzzaman-8b5b74327"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="LinkedIn"
            >
              <CiLinkedin size={36} />
            </a>
          </li>
          <li>
            <a
              href="https://github.com/kh-Munir"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="GitHub"
            >
              <FaGithub size={36} />
            </a>
          </li>
        </ul>
      </div>

      {/* Bottom Section */}
      <div className="mt-10 text-center text-sm opacity-80">
        <footer>
          &copy; {new Date().getFullYear()} Khondoker Moniruzzaman. All rights reserved.
        </footer>
      </div>
    </div>
  );
};

export default Footer;
