
import React from "react";

import {
  FaPhoneAlt,
  FaEnvelope,
  FaMapMarkerAlt,
  FaFacebookF,
  FaLinkedinIn,
  FaClock,
  FaArrowRight,
} from "react-icons/fa";

const TopBar = () => {
  return (
    <div className="relative z-[60] bg-[#1B365D] text-white">

      <div className="mx-auto max-w-[1440px] px-4 sm:px-6 lg:px-10">

        {/* DESKTOP TOPBAR */}
        <div className="hidden min-h-[42px] items-center justify-between md:flex">

          {/* LEFT INFORMATION */}
          <div className="flex items-center gap-5 lg:gap-7">

            {/* EMAIL */}
            <a
              href="mailto:info@devdhungahydro.com"
              className="group flex items-center gap-2 text-xs font-medium text-slate-200 transition hover:text-[#F59E0B]"
            >
              <FaEnvelope className="text-[#F59E0B] transition group-hover:scale-110" />
              <span>info@devdhungahydro.com</span>
            </a>

            {/* PHONE */}
            <a
              href="tel:+9770000000000"
              className="group flex items-center gap-2 text-xs font-medium text-slate-200 transition hover:text-[#F59E0B]"
            >
              <FaPhoneAlt className="text-[#F59E0B] transition group-hover:scale-110" />
              <span>+977-XXXXXXXXXX</span>
            </a>

            {/* LOCATION */}
            <div className="flex items-center gap-2 text-xs font-medium text-slate-200">
              <FaMapMarkerAlt className="text-[#F59E0B]" />
              <span>Nepal</span>
            </div>

          </div>

          {/* RIGHT INFORMATION */}
          <div className="flex items-center gap-5">

            {/* WORKING HOURS */}
            <div className="flex items-center gap-2 border-r border-white/20 pr-5 text-xs text-slate-200">
              <FaClock className="text-[#F59E0B]" />
              <span>Sunday - Friday | 10:00 AM - 5:00 PM</span>
            </div>

            {/* SOCIAL MEDIA */}
            <div className="flex items-center gap-3">

              <a
                href="#"
                target="_blank"
                rel="noreferrer"
                aria-label="Facebook"
                className="flex h-7 w-7 items-center justify-center rounded-full bg-white/10 text-xs text-white transition duration-300 hover:bg-[#F59E0B] hover:text-[#1B365D]"
              >
                <FaFacebookF />
              </a>

              <a
                href="#"
                target="_blank"
                rel="noreferrer"
                aria-label="LinkedIn"
                className="flex h-7 w-7 items-center justify-center rounded-full bg-white/10 text-xs text-white transition duration-300 hover:bg-[#F59E0B] hover:text-[#1B365D]"
              >
                <FaLinkedinIn />
              </a>

            </div>

          </div>

        </div>

        {/* MOBILE TOPBAR */}
        <div className="flex min-h-[38px] items-center justify-between gap-3 py-2 md:hidden">

          <a
            href="mailto:info@devdhungahydro.com"
            className="flex min-w-0 items-center gap-2 text-[11px] font-medium text-slate-200 transition hover:text-[#F59E0B]"
          >
            <FaEnvelope className="shrink-0 text-[#F59E0B]" />
            <span className="truncate">info@devdhungahydro.com</span>
          </a>

          <div className="flex shrink-0 items-center gap-2">

            <a
              href="#"
              target="_blank"
              rel="noreferrer"
              aria-label="Facebook"
              className="flex h-7 w-7 items-center justify-center rounded-full bg-white/10 text-xs transition hover:bg-[#F59E0B] hover:text-[#1B365D]"
            >
              <FaFacebookF />
            </a>

            <a
              href="#"
              target="_blank"
              rel="noreferrer"
              aria-label="LinkedIn"
              className="flex h-7 w-7 items-center justify-center rounded-full bg-white/10 text-xs transition hover:bg-[#F59E0B] hover:text-[#1B365D]"
            >
              <FaLinkedinIn />
            </a>

          </div>

        </div>

      </div>

      {/* GOLD ACCENT LINE */}
      <div className="h-[2px] w-full bg-gradient-to-r from-[#1B365D] via-[#F59E0B] to-[#1B365D]" />

    </div>
  );
};

export default TopBar;
