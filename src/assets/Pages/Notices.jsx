
import React from "react";
import { Link } from "react-router-dom";

import {
  FaBell,
  FaRegBell,
  FaFileAlt,
  FaArrowRight,
  FaCalendarAlt,
  FaRegClock,
  FaCheckCircle,
  FaBuilding,
  FaBolt,
  FaEnvelope,
  FaInfoCircle,
  FaShieldAlt,
  FaBullhorn,
  FaChartLine,
} from "react-icons/fa";

const Notices = () => {
  const features = [
    {
      icon: <FaFileAlt />,
      number: "01",
      title: "Official Notices",
      description:
        "Access official company notifications, formal announcements and important documents.",
    },
    {
      icon: <FaCalendarAlt />,
      number: "02",
      title: "Latest Updates",
      description:
        "Stay informed about company developments, activities and important updates.",
    },
    {
      icon: <FaBell />,
      number: "03",
      title: "Important Information",
      description:
        "Find essential information for stakeholders, investors and visitors.",
    },
  ];

  const benefits = [
    "Official Information",
    "Timely Updates",
    "Corporate Notices",
  ];

  return (
    <main className="min-h-screen overflow-hidden bg-white text-slate-700">

      {/* ================= ANIMATIONS ================= */}

      <style>{`
        @keyframes fadeUp {
          from {
            opacity: 0;
            transform: translateY(25px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        @keyframes floatBell {
          0%, 100% {
            transform: translateY(0);
          }
          50% {
            transform: translateY(-9px);
          }
        }

        @keyframes softPulse {
          0%, 100% {
            box-shadow: 0 0 0 0 rgba(245,158,11,.16);
          }
          50% {
            box-shadow: 0 0 0 17px rgba(245,158,11,0);
          }
        }

        .notice-fade {
          animation: fadeUp .8s ease-out both;
        }

        .notice-float {
          animation: floatBell 3s ease-in-out infinite;
        }

        .notice-pulse {
          animation: softPulse 2.5s ease-in-out infinite;
        }

        @media (prefers-reduced-motion: reduce) {
          .notice-fade,
          .notice-float,
          .notice-pulse {
            animation: none !important;
          }
        }
      `}</style>

      {/* ================= HERO SECTION ================= */}

      <section className="relative overflow-hidden bg-white">

        {/* Decorative Background */}

        <div className="pointer-events-none absolute -right-36 -top-40 h-[500px] w-[500px] rounded-full border border-[#1B365D]/[0.06]" />
        <div className="pointer-events-none absolute -right-16 -top-20 h-[340px] w-[340px] rounded-full border border-[#1B365D]/[0.06]" />
        <div className="pointer-events-none absolute -bottom-32 -left-32 h-96 w-96 rounded-full bg-[#F59E0B]/[0.05]" />

        <div className="relative mx-auto grid max-w-[1440px] grid-cols-1 items-center gap-12 px-5 py-14 sm:px-8 sm:py-20 lg:grid-cols-2 lg:gap-16 lg:px-12 lg:py-24">

          {/* LEFT SIDE */}

          <div className="notice-fade flex flex-col items-start">

            {/* Breadcrumb */}

            <div className="mb-8 flex flex-wrap items-center gap-3 text-sm">

              <Link
                to="/"
                className="font-medium text-slate-500 transition hover:text-[#F59E0B]"
              >
                Home
              </Link>

              <FaArrowRight className="text-[10px] text-[#F59E0B]" />

              <span className="font-semibold text-[#1B365D]">
                Notices
              </span>

            </div>

            {/* Small Label */}

            <div className="inline-flex items-center gap-2 rounded-full border border-[#F59E0B]/30 bg-[#F59E0B]/10 px-4 py-2">

              <span className="h-2 w-2 rounded-full bg-[#F59E0B]" />

              <span className="text-[11px] font-bold uppercase tracking-[2px] text-[#1B365D]">
                Company Information Centre
              </span>

            </div>

            {/* Main Heading */}

            <h1 className="mt-7 text-4xl font-extrabold leading-[1.15] tracking-tight text-[#1B365D] sm:text-5xl lg:text-[60px]">

              Notices &

              <span className="mt-2 block text-[#F59E0B]">
                Announcements
              </span>

            </h1>

            <p className="mt-7 max-w-xl text-sm leading-8 text-slate-600 sm:text-base">
              Stay informed with official company announcements,
              important notifications, corporate updates and other
              essential information from Devdhunga Hydropower.
              Your trusted source for the latest company information.
            </p>

            {/* BENEFITS FLEXBOX */}

            <div className="mt-8 flex flex-wrap items-center gap-x-7 gap-y-4">

              {benefits.map((benefit) => (
                <div
                  key={benefit}
                  className="flex items-center gap-2 text-xs font-semibold text-slate-600 sm:text-sm"
                >
                  <FaCheckCircle className="shrink-0 text-[#F59E0B]" />
                  {benefit}
                </div>
              ))}

            </div>

            {/* BUTTONS FLEXBOX */}

            <div className="mt-10 flex w-full flex-wrap items-center gap-4">

              <a
                href="#notice-board"
                className="group inline-flex items-center justify-center gap-3 rounded-lg bg-[#F59E0B] px-7 py-4 text-sm font-bold text-[#1B365D] shadow-lg shadow-[#F59E0B]/20 transition duration-300 hover:-translate-y-1 hover:bg-[#1B365D] hover:text-white"
              >
                Explore Notices

                <FaArrowRight className="transition duration-300 group-hover:translate-x-1" />
              </a>

              <Link
                to="/contact"
                className="inline-flex items-center justify-center gap-3 rounded-lg border border-slate-200 px-7 py-4 text-sm font-bold text-[#1B365D] transition duration-300 hover:border-[#F59E0B] hover:bg-[#F59E0B]/10"
              >
                Contact Us

                <FaArrowRight className="text-xs" />
              </Link>

            </div>

            {/* TRUST INFORMATION */}

            <div className="mt-12 flex flex-wrap items-center gap-4 border-t border-slate-100 pt-7">

              <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-[#1B365D]/10 text-xl text-[#1B365D]">
                <FaShieldAlt />
              </div>

              <div>
                <p className="text-sm font-bold text-[#1B365D]">
                  Transparent Communication
                </p>

                <p className="mt-1 text-xs text-slate-500">
                  Keeping our stakeholders informed.
                </p>
              </div>

            </div>

          </div>

          {/* RIGHT SIDE IMAGE */}

          <div className="notice-fade relative lg:pl-3">

            <div className="relative h-[310px] overflow-hidden rounded-2xl border border-slate-200 shadow-2xl shadow-slate-900/10 sm:h-[410px] lg:h-[480px]">

              <img
                src="https://images.unsplash.com/photo-1473341304170-971dccb5ac1e?auto=format&fit=crop&w=1400&q=90"
                alt="Hydropower electricity generation and transmission"
                className="h-full w-full object-cover transition duration-700 hover:scale-105"
              />

              <div className="absolute inset-0 bg-gradient-to-t from-[#0F172A]/90 via-[#0F172A]/10 to-transparent" />

              {/* Image Content */}

              <div className="absolute bottom-0 left-0 flex w-full flex-col items-start p-6 sm:p-9">

                <div className="mb-5 flex h-14 w-14 items-center justify-center rounded-xl bg-[#F59E0B] text-2xl text-[#1B365D] shadow-lg">
                  <FaBolt />
                </div>

                <span className="text-xs font-bold uppercase tracking-[3px] text-[#F59E0B]">
                  Devdhunga Hydropower
                </span>

                <h2 className="mt-3 text-2xl font-extrabold leading-tight text-white sm:text-3xl lg:text-4xl">
                  Powering a
                  <br />
                  Brighter Future
                </h2>

                <p className="mt-4 max-w-md text-sm leading-7 text-slate-200">
                  Delivering important information with transparency,
                  responsibility and commitment.
                </p>

              </div>

            </div>

            {/* FLOATING CARD */}

            <div className="absolute -bottom-6 left-4 right-4 flex items-center gap-4 rounded-xl border border-slate-100 bg-white p-4 shadow-xl sm:left-auto sm:right-7 sm:w-[290px]">

              <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-[#1B365D] text-xl text-[#F59E0B]">
                <FaBuilding />
              </div>

              <div className="min-w-0">
                <h3 className="text-sm font-extrabold text-[#1B365D]">
                  Corporate Information
                </h3>

                <p className="mt-1 text-xs text-slate-500">
                  Official company updates
                </p>
              </div>

            </div>

          </div>

        </div>
      </section>

      {/* ================= INFORMATION SECTION ================= */}

      <section className="bg-[#F8FAFC] px-5 py-20 sm:px-8 lg:px-12 lg:py-24">

        <div className="mx-auto max-w-[1250px]">

          {/* SECTION HEADER */}

          <div className="mx-auto mb-14 flex max-w-3xl flex-col items-center text-center">

            <span className="text-xs font-bold uppercase tracking-[3px] text-[#F59E0B]">
              Information Centre
            </span>

            <h2 className="mt-4 text-3xl font-extrabold text-[#1B365D] sm:text-4xl">
              Your Official Notice Board
            </h2>

            <div className="mt-5 h-1 w-20 rounded-full bg-[#F59E0B]" />

            <p className="mt-6 max-w-2xl text-sm leading-8 text-slate-500 sm:text-base">
              We believe in transparent communication and keeping
              our stakeholders informed. Explore important company
              notices, announcements and updates in one place.
            </p>

          </div>

          {/* FEATURE GRID */}

          <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">

            {features.map((feature) => (
              <div
                key={feature.number}
                className="group relative flex min-h-[260px] flex-col overflow-hidden rounded-2xl border border-slate-200 bg-white p-7 shadow-sm transition duration-300 hover:-translate-y-2 hover:border-[#F59E0B]/50 hover:shadow-xl sm:p-8"
              >

                {/* Number */}

                <span className="absolute right-6 top-5 text-4xl font-extrabold text-slate-100 transition group-hover:text-[#F59E0B]/15">
                  {feature.number}
                </span>

                {/* Icon */}

                <div className="relative flex h-16 w-16 items-center justify-center rounded-2xl bg-[#1B365D]/10 text-2xl text-[#1B365D] transition duration-300 group-hover:bg-[#F59E0B]/20 group-hover:text-[#1B365D]">
                  {feature.icon}
                </div>

                {/* Content */}

                <div className="relative mt-7 flex flex-1 flex-col">

                  <h3 className="text-lg font-extrabold text-[#1B365D]">
                    {feature.title}
                  </h3>

                  <p className="mt-3 text-sm leading-7 text-slate-500">
                    {feature.description}
                  </p>

                  <div className="mt-auto flex items-center pt-6">
                    <span className="h-1 w-10 rounded-full bg-[#F59E0B] transition-all duration-300 group-hover:w-20" />
                  </div>

                </div>

              </div>
            ))}

          </div>

        </div>

      </section>

      {/* ================= NOTICE BOARD ================= */}

      <section
        id="notice-board"
        className="scroll-mt-24 bg-white px-5 py-20 sm:px-8 lg:px-12 lg:py-24"
      >

        <div className="mx-auto max-w-[1250px]">

          {/* NOTICE HEADER */}

          <div className="mb-12 flex flex-col items-center justify-between gap-7 md:flex-row md:items-end">

            <div className="flex flex-col items-center text-center md:items-start md:text-left">

              <span className="text-xs font-bold uppercase tracking-[3px] text-[#F59E0B]">
                Stay Informed
              </span>

              <h2 className="mt-3 text-3xl font-extrabold text-[#1B365D] sm:text-4xl">
                Latest Notices
              </h2>

              <div className="mt-5 h-1 w-16 rounded-full bg-[#F59E0B]" />

              <p className="mt-5 max-w-xl text-sm leading-7 text-slate-500 sm:text-base">
                Find the latest official notices and announcements
                published by Devdhunga Hydropower.
              </p>

            </div>

            {/* STATUS */}

            <div className="flex shrink-0 items-center gap-3 rounded-xl border border-emerald-100 bg-emerald-50 px-5 py-4">

              <span className="relative flex h-3 w-3">
                <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-400 opacity-50" />
                <span className="relative inline-flex h-3 w-3 rounded-full bg-emerald-500" />
              </span>

              <span className="text-xs font-bold text-emerald-700">
                Notice Board Active
              </span>

            </div>

          </div>

          {/* MAIN NOTICE BOARD GRID */}

          <div className="grid grid-cols-1 overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-[0_15px_50px_rgba(15,23,42,0.07)] lg:grid-cols-[300px_1fr]">

            {/* LEFT SIDEBAR */}

            <div className="flex flex-col justify-between bg-[#1B365D] p-7 text-white sm:p-9">

              <div>

                <div className="flex h-14 w-14 items-center justify-center rounded-xl bg-white/10 text-2xl text-[#F59E0B]">
                  <FaBullhorn />
                </div>

                <h3 className="mt-7 text-xl font-extrabold">
                  Official Notice Board
                </h3>

                <p className="mt-3 text-sm leading-7 text-slate-300">
                  Your central source for official company announcements
                  and important information.
                </p>

                <div className="my-7 h-px bg-white/15" />

                <div className="flex flex-col gap-5">

                  <div className="flex items-center gap-3">
                    <FaFileAlt className="shrink-0 text-[#F59E0B]" />
                    <span className="text-sm text-slate-200">
                      Official Announcements
                    </span>
                  </div>

                  <div className="flex items-center gap-3">
                    <FaCalendarAlt className="shrink-0 text-[#F59E0B]" />
                    <span className="text-sm text-slate-200">
                      Company Updates
                    </span>
                  </div>

                  <div className="flex items-center gap-3">
                    <FaShieldAlt className="shrink-0 text-[#F59E0B]" />
                    <span className="text-sm text-slate-200">
                      Verified Information
                    </span>
                  </div>

                </div>

              </div>

              <div className="mt-10 flex items-center gap-3 rounded-xl border border-white/10 bg-white/5 p-4">

                <FaCheckCircle className="text-xl text-emerald-400" />

                <div>
                  <p className="text-xs font-bold text-white">
                    Information Centre
                  </p>

                  <p className="mt-1 text-[11px] text-slate-300">
                    Devdhunga Hydropower
                  </p>
                </div>

              </div>

            </div>

            {/* RIGHT NOTICE CONTENT */}

            <div className="flex min-h-[440px] flex-col">

              {/* Top Header */}

              <div className="flex flex-col justify-between gap-4 border-b border-slate-100 bg-[#F8FAFC] px-6 py-6 sm:flex-row sm:items-center sm:px-9">

                <div>
                  <h3 className="text-lg font-extrabold text-[#1B365D]">
                    Recent Announcements
                  </h3>

                  <p className="mt-1 text-xs text-slate-500">
                    Latest published company information
                  </p>
                </div>

                <div className="flex w-fit items-center gap-2 rounded-full bg-white px-4 py-2 text-xs font-semibold text-slate-500 shadow-sm">
                  <FaRegClock className="text-[#F59E0B]" />
                  Notice Updates
                </div>

              </div>

              {/* Empty State */}

              <div className="relative flex flex-1 flex-col items-center justify-center overflow-hidden px-5 py-14 text-center sm:px-10 sm:py-16">

                <div className="pointer-events-none absolute -right-16 -top-16 h-48 w-48 rounded-full bg-[#F59E0B]/[0.05]" />

                <div className="pointer-events-none absolute -bottom-20 -left-16 h-52 w-52 rounded-full bg-[#1B365D]/[0.04]" />

                {/* Bell */}

                <div className="notice-float relative">

                  <div className="notice-pulse flex h-28 w-28 items-center justify-center rounded-full bg-[#FFF7E6] sm:h-32 sm:w-32">

                    <div className="flex h-20 w-20 items-center justify-center rounded-full bg-[#F59E0B]/15 sm:h-24 sm:w-24">
                      <FaRegBell className="text-4xl text-[#F59E0B] sm:text-5xl" />
                    </div>

                  </div>

                  <span className="absolute right-1 top-2 h-4 w-4 rounded-full border-[3px] border-white bg-[#1B365D]" />

                </div>

                <span className="mt-7 rounded-full bg-slate-100 px-4 py-2 text-[11px] font-bold uppercase tracking-[2px] text-slate-500">
                  No New Announcements
                </span>

                <h3 className="mt-5 max-w-lg text-2xl font-extrabold leading-snug text-[#1B365D] sm:text-3xl">
                  No Notices Are Available Right Now
                </h3>

                <p className="mt-4 max-w-lg text-sm leading-8 text-slate-500">
                  There are currently no published notices or announcements.
                  Please visit this page again for the latest official
                  information and updates from Devdhunga Hydropower.
                </p>

                {/* Information Card */}

                <div className="mt-8 flex w-full max-w-md items-center gap-4 rounded-xl border border-slate-200 bg-[#F8FAFC] p-4 text-left sm:p-5">

                  <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-[#1B365D]/10">
                    <FaInfoCircle className="text-xl text-[#1B365D]" />
                  </div>

                  <div className="min-w-0 flex-1">
                    <p className="text-sm font-bold text-[#1B365D]">
                      Notice Board Status
                    </p>

                    <p className="mt-1 text-xs leading-5 text-slate-500">
                      The board is ready for new announcements.
                    </p>
                  </div>

                  <FaCheckCircle className="shrink-0 text-xl text-emerald-600" />

                </div>

              </div>

              {/* Board Footer */}

              <div className="flex flex-col items-center justify-between gap-3 border-t border-slate-100 bg-[#F8FAFC] px-6 py-5 text-center sm:flex-row sm:px-9 sm:text-left">

                <p className="text-xs leading-6 text-slate-500">
                  Official information from Devdhunga Hydropower.
                </p>

                <div className="flex items-center gap-2 text-xs font-bold text-[#1B365D]">
                  <FaCheckCircle className="text-emerald-600" />
                  Verified Information Centre
                </div>

              </div>

            </div>

          </div>

          {/* BOTTOM INFORMATION */}

          <div className="mt-8 flex flex-wrap items-center justify-center gap-3 text-center">

            <FaRegClock className="text-lg text-[#F59E0B]" />

            <p className="text-sm leading-6 text-slate-500">
              New announcements will appear here as soon as they are published.
            </p>

          </div>

        </div>

      </section>

      {/* ================= CONTACT SECTION ================= */}

      <section className="bg-[#F8FAFC] px-5 py-16 sm:px-8 lg:px-12 lg:py-20">

        <div className="relative mx-auto max-w-[1250px] overflow-hidden rounded-2xl bg-[#1B365D] shadow-xl">

          {/* Decorations */}

          <div className="pointer-events-none absolute -right-28 -top-32 h-80 w-80 rounded-full border border-white/10" />

          <div className="pointer-events-none absolute -right-10 -top-16 h-56 w-56 rounded-full border border-white/10" />

          <div className="pointer-events-none absolute -bottom-32 left-1/3 h-72 w-72 rounded-full bg-[#F59E0B]/10" />

          {/* CTA GRID */}

          <div className="relative grid grid-cols-1 items-center gap-10 px-7 py-12 sm:px-10 sm:py-14 lg:grid-cols-[1fr_auto] lg:px-16 lg:py-16">

            {/* LEFT CONTENT */}

            <div className="flex flex-col items-center text-center lg:items-start lg:text-left">

              <span className="flex items-center gap-2 text-xs font-bold uppercase tracking-[3px] text-[#F59E0B]">
                <FaEnvelope />
                Need More Information?
              </span>

              <h2 className="mt-5 max-w-2xl text-2xl font-extrabold leading-tight text-white sm:text-3xl lg:text-4xl">
                Stay Connected With
                <span className="block text-[#F59E0B]">
                  Devdhunga Hydropower
                </span>
              </h2>

              <p className="mt-5 max-w-2xl text-sm leading-8 text-slate-300 sm:text-base">
                For inquiries, additional information or assistance,
                please contact our team. We are always ready to help
                and provide the information you need.
              </p>

              <Link
                to="/contact"
                className="group mt-8 inline-flex items-center justify-center gap-3 rounded-lg bg-[#F59E0B] px-7 py-4 text-sm font-bold text-[#1B365D] transition duration-300 hover:-translate-y-1 hover:bg-white"
              >
                Contact Our Team

                <FaArrowRight className="transition duration-300 group-hover:translate-x-1" />
              </Link>

            </div>

            {/* RIGHT ICON */}

            <div className="hidden h-40 w-40 items-center justify-center rounded-full border border-white/20 bg-white/10 text-6xl text-[#F59E0B] lg:flex">
              <FaEnvelope />
            </div>

          </div>

        </div>

      </section>

    </main>
  );
};

export default Notices;
