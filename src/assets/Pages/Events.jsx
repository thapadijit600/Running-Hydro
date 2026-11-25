
import { useState } from "react";
import {
  FaCalendarAlt,
  FaMapMarkerAlt,
  FaArrowRight,
  FaRegClock,
  FaUsers,
  FaBolt,
  FaCheckCircle,
  FaHistory,
  FaCalendarCheck,
  FaBuilding,
} from "react-icons/fa";

import { Link } from "react-router-dom";

const Events = () => {
  const [activeTab, setActiveTab] = useState("upcoming");

  // UPCOMING EVENTS
  const upcomingEvents = [
    {
      id: 1,
      title: "Annual Stakeholder Meeting",
      category: "Corporate Event",
      date: "February 15, 2027",
      time: "10:00 AM",
      location: "Kathmandu, Nepal",
      description:
        "An opportunity to connect with stakeholders, discuss company progress, share future development plans, and strengthen our commitment to sustainable hydropower development.",
      image:
        "https://images.unsplash.com/photo-1511795409834-ef04bbd61622?auto=format&fit=crop&w=1000&q=85",
    },
    {
      id: 2,
      title: "Renewable Energy Awareness Program",
      category: "Community Program",
      date: "March 20, 2027",
      time: "11:00 AM",
      location: "Nepal",
      description:
        "An awareness initiative focused on renewable energy, responsible development, and the importance of hydropower in Nepal's energy future.",
      image:
        "https://images.unsplash.com/photo-1473341304170-971dccb5ac1e?auto=format&fit=crop&w=1000&q=85",
    },
    {
      id: 3,
      title: "Hydropower Development Workshop",
      category: "Technical Workshop",
      date: "April 12, 2027",
      time: "09:30 AM",
      location: "Kathmandu, Nepal",
      description:
        "A professional knowledge-sharing session covering hydropower technology, project development, operational excellence, and sustainable practices.",
      image:
        "https://images.unsplash.com/photo-1581092921461-eab62e97a780?auto=format&fit=crop&w=1000&q=85",
    },
  ];

  // PAST EVENTS
  const pastEvents = [
    {
      id: 4,
      title: "Renewable Energy Discussion",
      category: "Corporate Event",
      date: "September 18, 2026",
      location: "Kathmandu, Nepal",
      description:
        "A professional discussion highlighting renewable energy opportunities and the role of hydropower in Nepal's sustainable development.",
      image:
        "https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?auto=format&fit=crop&w=1000&q=85",
    },
    {
      id: 5,
      title: "Community Engagement Program",
      category: "Community Program",
      date: "July 10, 2026",
      location: "Nepal",
      description:
        "A community-focused initiative encouraging communication, cooperation, and awareness around responsible infrastructure development.",
      image:
        "https://images.unsplash.com/photo-1511632765486-a01980e01a18?auto=format&fit=crop&w=1000&q=85",
    },
    {
      id: 6,
      title: "Energy Sector Knowledge Sharing",
      category: "Knowledge Sharing",
      date: "May 22, 2026",
      location: "Kathmandu, Nepal",
      description:
        "A knowledge-sharing event focused on the development, opportunities, and challenges of Nepal's hydropower sector.",
      image:
        "https://images.unsplash.com/photo-1521737711867-e3b97375f902?auto=format&fit=crop&w=1000&q=85",
    },
  ];

  const currentEvents =
    activeTab === "upcoming" ? upcomingEvents : pastEvents;

  const changeTab = (tab) => {
    setActiveTab(tab);
  };

  return (
    <main className="overflow-hidden bg-white text-[#0F172A]">

      {/* =====================================================
          HERO SECTION
      ===================================================== */}
      <section className="relative overflow-hidden bg-[#F1F5F9]">

        {/* Background Decoration */}
        <div className="pointer-events-none absolute -right-24 -top-24 h-80 w-80 rounded-full bg-[#F59E0B]/10 blur-3xl" />
        <div className="pointer-events-none absolute -bottom-24 -left-24 h-80 w-80 rounded-full bg-[#1B365D]/10 blur-3xl" />

        <div className="relative mx-auto grid max-w-[1440px] items-center gap-12 px-5 py-16 sm:px-8 md:py-20 lg:grid-cols-2 lg:gap-16 lg:px-12 lg:py-24">

          {/* LEFT CONTENT */}
          <div className="flex flex-col items-start animate-[fadeUp_0.8s_ease-out]">

            {/* Label */}
            <div className="mb-6 inline-flex items-center gap-3 rounded-full border border-[#F59E0B]/30 bg-white px-4 py-2.5 shadow-sm">

              <span className="flex h-8 w-8 items-center justify-center rounded-full bg-[#F59E0B]/15 text-[#F59E0B]">
                <FaCalendarAlt />
              </span>

              <span className="text-xs font-extrabold uppercase tracking-[2px] text-[#1B365D]">
                Company Events
              </span>

            </div>

            {/* Heading */}
            <h1 className="max-w-2xl text-4xl font-extrabold leading-[1.15] tracking-tight text-[#1B365D] sm:text-5xl lg:text-[58px]">
              Events That
              <span className="mt-2 block text-[#F59E0B]">
                Connect & Inspire
              </span>
            </h1>

            {/* Description */}
            <p className="mt-7 max-w-xl text-base leading-8 text-slate-600 sm:text-lg">
              Discover the latest events, corporate gatherings,
              community initiatives, and important milestones of
              Devdhunga Hydropower. Together, we move towards a
              sustainable energy future.
            </p>

            {/* Buttons */}
            <div className="mt-9 flex w-full flex-col gap-3 sm:w-auto sm:flex-row">

              <a
                href="#upcoming-events"
                className="group inline-flex items-center justify-center gap-3 rounded-lg bg-[#1B365D] px-7 py-4 text-sm font-bold text-white shadow-lg shadow-[#1B365D]/15 transition duration-300 hover:-translate-y-1 hover:bg-[#F59E0B] hover:text-[#1B365D]"
              >
                Explore Events
                <FaArrowRight className="transition-transform duration-300 group-hover:translate-x-1" />
              </a>

              <button
                type="button"
                onClick={() => {
                  changeTab("past");
                  document.getElementById("upcoming-events")?.scrollIntoView({
                    behavior: "smooth",
                    block: "start",
                  });
                }}
                className="inline-flex items-center justify-center gap-3 rounded-lg border border-[#1B365D]/20 bg-white px-7 py-4 text-sm font-bold text-[#1B365D] transition duration-300 hover:-translate-y-1 hover:border-[#F59E0B] hover:text-[#F59E0B]"
              >
                <FaHistory />
                Past Events
              </button>

            </div>

            {/* HERO INFORMATION */}
            <div className="mt-10 flex flex-wrap items-center gap-x-8 gap-y-5 border-t border-slate-200 pt-7">

              <div className="flex items-center gap-3">

                <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-[#F59E0B]/15 text-lg text-[#F59E0B]">
                  <FaCalendarCheck />
                </div>

                <div>
                  <p className="text-sm font-bold text-[#1B365D]">
                    Upcoming Programs
                  </p>
                  <p className="mt-1 text-xs text-slate-500">
                    Stay informed
                  </p>
                </div>

              </div>

              <div className="flex items-center gap-3">

                <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-[#1B365D]/10 text-lg text-[#1B365D]">
                  <FaUsers />
                </div>

                <div>
                  <p className="text-sm font-bold text-[#1B365D]">
                    Community Engagement
                  </p>
                  <p className="mt-1 text-xs text-slate-500">
                    Building connections
                  </p>
                </div>

              </div>

            </div>

          </div>

          {/* RIGHT IMAGE */}
          <div className="relative animate-[fadeUp_1s_ease-out]">

            {/* Image Border */}
            <div className="absolute -right-4 -top-4 z-0 h-full w-full rounded-2xl border-2 border-[#F59E0B]/40 sm:-right-5 sm:-top-5" />

            <div className="relative z-10 h-[320px] overflow-hidden rounded-2xl shadow-2xl sm:h-[420px] lg:h-[490px]">

              <img
                src="https://images.unsplash.com/photo-1473341304170-971dccb5ac1e?auto=format&fit=crop&w=1400&q=90"
                alt="Hydropower and renewable energy"
                className="h-full w-full object-cover transition duration-700 hover:scale-105"
              />

              <div className="absolute inset-0 bg-gradient-to-t from-[#0F172A]/90 via-[#0F172A]/10 to-transparent" />

              <div className="absolute bottom-0 left-0 right-0 p-6 sm:p-9">

                <div className="mb-5 flex h-12 w-12 items-center justify-center rounded-xl bg-[#F59E0B] text-2xl text-[#1B365D] shadow-lg">
                  <FaBolt />
                </div>

                <p className="mb-2 text-xs font-bold uppercase tracking-[3px] text-[#F59E0B]">
                  Our Commitment
                </p>

                <h2 className="text-2xl font-extrabold text-white sm:text-4xl">
                  Powering Progress
                </h2>

                <p className="mt-3 max-w-md text-sm leading-7 text-slate-200 sm:text-base">
                  Building connections and supporting a sustainable
                  energy future for Nepal.
                </p>

              </div>
            </div>

            {/* Floating Information Card */}
            <div className="absolute -bottom-5 -left-5 z-20 hidden items-center gap-3 rounded-xl border border-slate-100 bg-white p-4 shadow-xl sm:flex">

              <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-lg bg-[#1B365D] text-xl text-[#F59E0B]">
                <FaUsers />
              </div>

              <div>
                <p className="text-sm font-extrabold text-[#1B365D]">
                  Stronger Together
                </p>
                <p className="mt-1 text-xs text-slate-500">
                  Connecting people and ideas
                </p>
              </div>

            </div>

          </div>

        </div>
      </section>

      {/* =====================================================
          INTRODUCTION SECTION
      ===================================================== */}
      <section className="px-5 py-16 sm:px-8 lg:px-12 lg:py-20">

        <div className="mx-auto max-w-4xl text-center">

          <span className="inline-flex items-center gap-3 text-xs font-extrabold uppercase tracking-[3px] text-[#F59E0B]">
            <span className="h-1 w-7 rounded-full bg-[#F59E0B]" />
            Our Activities
            <span className="h-1 w-7 rounded-full bg-[#F59E0B]" />
          </span>

          <h2 className="mt-4 text-3xl font-extrabold leading-tight text-[#1B365D] sm:text-4xl lg:text-[42px]">
            Stay Connected With Our Events
          </h2>

          <p className="mx-auto mt-5 max-w-3xl text-sm leading-8 text-slate-600 sm:text-base">
            Our events provide opportunities to share knowledge,
            strengthen relationships, encourage collaboration, and
            celebrate progress. Explore our upcoming programs and
            look back at previous activities.
          </p>

          <div className="mx-auto mt-7 h-1 w-20 rounded-full bg-[#F59E0B]" />

        </div>

        {/* SUMMARY GRID */}
        <div className="mx-auto mt-12 grid max-w-5xl gap-6 sm:grid-cols-2">

          {/* UPCOMING SUMMARY */}
          <div className="group flex items-center justify-between gap-4 rounded-2xl border border-slate-200 bg-white p-6 shadow-sm transition duration-300 hover:-translate-y-1 hover:border-[#F59E0B]/50 hover:shadow-xl">

            <div className="flex min-w-0 items-center gap-5">

              <div className="flex h-16 w-16 shrink-0 items-center justify-center rounded-xl bg-[#1B365D] text-2xl text-[#F59E0B] transition duration-300 group-hover:bg-[#F59E0B] group-hover:text-[#1B365D]">
                <FaCalendarAlt />
              </div>

              <div>
                <p className="text-3xl font-extrabold text-[#1B365D]">
                  {upcomingEvents.length}
                </p>
                <p className="mt-1 text-sm font-semibold text-slate-500">
                  Upcoming Events
                </p>
              </div>

            </div>

            <FaArrowRight className="shrink-0 text-lg text-slate-300 transition duration-300 group-hover:translate-x-1 group-hover:text-[#F59E0B]" />

          </div>

          {/* PAST SUMMARY */}
          <div className="group flex items-center justify-between gap-4 rounded-2xl border border-slate-200 bg-white p-6 shadow-sm transition duration-300 hover:-translate-y-1 hover:border-[#F59E0B]/50 hover:shadow-xl">

            <div className="flex min-w-0 items-center gap-5">

              <div className="flex h-16 w-16 shrink-0 items-center justify-center rounded-xl bg-[#F59E0B]/15 text-2xl text-[#1B365D] transition duration-300 group-hover:bg-[#F59E0B]">
                <FaHistory />
              </div>

              <div>
                <p className="text-3xl font-extrabold text-[#1B365D]">
                  {pastEvents.length}
                </p>
                <p className="mt-1 text-sm font-semibold text-slate-500">
                  Past Events
                </p>
              </div>

            </div>

            <FaArrowRight className="shrink-0 text-lg text-slate-300 transition duration-300 group-hover:translate-x-1 group-hover:text-[#F59E0B]" />

          </div>

        </div>
      </section>

      {/* =====================================================
          UPCOMING AND PAST EVENTS
      ===================================================== */}
      <section
        id="upcoming-events"
        className="scroll-mt-24 bg-[#F8FAFC] px-5 py-16 sm:px-8 lg:px-12 lg:py-20"
      >

        <div className="mx-auto max-w-[1300px]">

          {/* SECTION HEADER */}
          <div className="flex flex-col justify-between gap-7 lg:flex-row lg:items-end">

            <div className="max-w-2xl">

              <span className="inline-flex items-center gap-2 text-xs font-extrabold uppercase tracking-[3px] text-[#F59E0B]">
                <FaCalendarAlt />
                Event Updates
              </span>

              <h2 className="mt-3 text-3xl font-extrabold text-[#1B365D] sm:text-4xl lg:text-[42px]">
                Explore Our Events
              </h2>

              <p className="mt-4 text-sm leading-8 text-slate-600 sm:text-base">
                Find information about our upcoming programs and
                previously organized activities.
              </p>

            </div>

            {/* TAB SWITCHER */}
            <div
              className="flex w-full items-center gap-1.5 rounded-xl border border-slate-200 bg-white p-1.5 shadow-sm sm:w-fit"
              role="tablist"
              aria-label="Event categories"
            >

              <button
                type="button"
                role="tab"
                aria-selected={activeTab === "upcoming"}
                onClick={() => changeTab("upcoming")}
                className={`flex flex-1 items-center justify-center gap-2 rounded-lg px-5 py-3.5 text-sm font-bold transition duration-300 sm:flex-none ${
                  activeTab === "upcoming"
                    ? "bg-[#1B365D] text-white shadow-md"
                    : "text-slate-600 hover:bg-slate-50 hover:text-[#F59E0B]"
                }`}
              >
                <FaCalendarCheck />
                Upcoming
              </button>

              <button
                type="button"
                role="tab"
                aria-selected={activeTab === "past"}
                onClick={() => changeTab("past")}
                className={`flex flex-1 items-center justify-center gap-2 rounded-lg px-5 py-3.5 text-sm font-bold transition duration-300 sm:flex-none ${
                  activeTab === "past"
                    ? "bg-[#1B365D] text-white shadow-md"
                    : "text-slate-600 hover:bg-slate-50 hover:text-[#F59E0B]"
                }`}
              >
                <FaHistory />
                Past Events
              </button>

            </div>

          </div>

          {/* EVENT COUNT BAR */}
          <div className="mt-9 flex flex-wrap items-center justify-between gap-3 border-b border-slate-200 pb-5">

            <p className="text-sm font-semibold text-slate-600">
              Showing{" "}
              <span className="font-extrabold text-[#1B365D]">
                {currentEvents.length}
              </span>{" "}
              {activeTab === "upcoming" ? "upcoming events" : "past events"}
            </p>

            <div className="flex items-center gap-2 text-xs font-semibold text-slate-500">
              <span className="h-2 w-2 rounded-full bg-[#F59E0B]" />
              {activeTab === "upcoming"
                ? "Scheduled Programs"
                : "Completed Activities"}
            </div>

          </div>

          {/* EVENT CARDS GRID */}
          <div className="mt-9 grid items-stretch gap-7 sm:grid-cols-2 xl:grid-cols-3">

            {currentEvents.map((event) => (
              <article
                key={event.id}
                className="group flex h-full flex-col overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-sm transition duration-500 hover:-translate-y-2 hover:border-[#F59E0B]/40 hover:shadow-2xl"
              >

                {/* EVENT IMAGE */}
                <div className="relative h-[220px] shrink-0 overflow-hidden">

                  <img
                    src={event.image}
                    alt={event.title}
                    loading="lazy"
                    className="h-full w-full object-cover transition duration-700 group-hover:scale-110"
                  />

                  <div className="absolute inset-0 bg-gradient-to-t from-[#0F172A]/60 via-transparent to-transparent" />

                  {/* CATEGORY */}
                  <span className="absolute left-4 top-4 max-w-[75%] rounded-full bg-[#F59E0B] px-4 py-2 text-[10px] font-extrabold uppercase tracking-wide text-[#1B365D] shadow-md sm:text-[11px]">
                    {event.category}
                  </span>

                  {/* COMPLETED STATUS */}
                  {activeTab === "past" && (
                    <span className="absolute right-4 top-4 inline-flex items-center gap-1.5 rounded-full bg-white px-3 py-2 text-xs font-bold text-emerald-700 shadow-md">
                      <FaCheckCircle />
                      Completed
                    </span>
                  )}

                  {/* UPCOMING STATUS */}
                  {activeTab === "upcoming" && (
                    <span className="absolute bottom-4 left-4 inline-flex items-center gap-2 rounded-lg bg-[#1B365D]/90 px-3 py-2 text-xs font-bold text-white backdrop-blur-sm">
                      <FaCalendarCheck className="text-[#F59E0B]" />
                      Upcoming Event
                    </span>
                  )}

                </div>

                {/* EVENT CONTENT */}
                <div className="flex flex-1 flex-col p-6">

                  {/* DATE AND TIME */}
                  <div className="flex flex-wrap items-center gap-x-4 gap-y-3 border-b border-slate-100 pb-4 text-xs font-semibold text-slate-500">

                    <span className="inline-flex items-center gap-2">
                      <FaCalendarAlt className="shrink-0 text-[#F59E0B]" />
                      {event.date}
                    </span>

                    {event.time && (
                      <span className="inline-flex items-center gap-2">
                        <FaRegClock className="shrink-0 text-[#F59E0B]" />
                        {event.time}
                      </span>
                    )}

                  </div>

                  {/* TITLE */}
                  <h3 className="mt-5 text-xl font-extrabold leading-snug text-[#1B365D] transition duration-300 group-hover:text-[#F59E0B]">
                    {event.title}
                  </h3>

                  {/* DESCRIPTION */}
                  <p className="mt-3 flex-1 text-sm leading-7 text-slate-600">
                    {event.description}
                  </p>

                  {/* CARD FOOTER */}
                  <div className="mt-6 flex flex-wrap items-center justify-between gap-3 border-t border-slate-100 pt-5">

                    <span className="inline-flex min-w-0 items-center gap-2 text-xs font-semibold text-slate-500">
                      <FaMapMarkerAlt className="shrink-0 text-[#F59E0B]" />
                      {event.location}
                    </span>

                    <span className="inline-flex shrink-0 items-center gap-2 text-xs font-extrabold text-[#1B365D] transition group-hover:text-[#F59E0B]">
                      {activeTab === "upcoming" ? "Upcoming" : "Past Event"}
                      <FaArrowRight className="transition-transform group-hover:translate-x-1" />
                    </span>

                  </div>

                </div>
              </article>
            ))}

          </div>

          {/* EMPTY STATE */}
          {currentEvents.length === 0 && (
            <div className="mt-10 flex flex-col items-center justify-center rounded-2xl border border-slate-200 bg-white px-6 py-20 text-center shadow-sm">

              <div className="flex h-20 w-20 items-center justify-center rounded-full bg-[#1B365D]/5 text-3xl text-[#F59E0B]">
                <FaCalendarAlt />
              </div>

              <h3 className="mt-6 text-xl font-extrabold text-[#1B365D]">
                No Events Available
              </h3>

              <p className="mt-2 max-w-md text-sm leading-7 text-slate-500">
                There are currently no events in this category.
                Please check again for future updates.
              </p>

            </div>
          )}

        </div>
      </section>

      {/* =====================================================
          FINAL CTA SECTION
      ===================================================== */}
      <section
        id="past-events"
        className="scroll-mt-24 bg-white px-5 py-16 sm:px-8 lg:px-12 lg:py-20"
      >

        <div className="mx-auto grid max-w-[1250px] overflow-hidden rounded-2xl bg-[#1B365D] shadow-2xl lg:grid-cols-[1fr_300px]">

          {/* CTA CONTENT */}
          <div className="flex flex-col items-start justify-center px-7 py-10 sm:px-10 lg:px-14 lg:py-14">

            <span className="inline-flex items-center gap-2 text-xs font-extrabold uppercase tracking-[3px] text-[#F59E0B]">
              <FaBolt />
              Stay Informed
            </span>

            <h2 className="mt-4 max-w-2xl text-3xl font-extrabold leading-tight text-white sm:text-4xl">
              Be Part of Our Journey Towards a Better Energy Future
            </h2>

            <p className="mt-5 max-w-2xl text-sm leading-8 text-slate-300 sm:text-base">
              Stay connected with Devdhunga Hydropower for the
              latest company announcements, programs, and
              important updates.
            </p>

            {/* CTA BUTTONS */}
            <div className="mt-8 flex flex-wrap gap-3">

              <Link
                to="/notices"
                className="group inline-flex items-center gap-3 rounded-lg bg-[#F59E0B] px-6 py-4 text-sm font-extrabold text-[#1B365D] shadow-lg transition duration-300 hover:-translate-y-1 hover:bg-white"
              >
                View Latest Notices
                <FaArrowRight className="transition-transform group-hover:translate-x-1" />
              </Link>

              <Link
                to="/contact"
                className="inline-flex items-center gap-3 rounded-lg border border-white/30 px-6 py-4 text-sm font-bold text-white transition duration-300 hover:border-[#F59E0B] hover:text-[#F59E0B]"
              >
                Contact Us
                <FaArrowRight />
              </Link>

            </div>

          </div>

          {/* DECORATIVE GRID PANEL */}
          <div className="relative hidden items-center justify-center overflow-hidden border-l border-white/10 bg-[#142B4B] lg:flex">

            <div className="absolute h-64 w-64 rounded-full border border-[#F59E0B]/20" />
            <div className="absolute h-48 w-48 rounded-full border border-[#F59E0B]/30" />
            <div className="absolute h-32 w-32 rounded-full border border-[#F59E0B]/40" />

            <div className="relative flex h-24 w-24 items-center justify-center rounded-2xl bg-[#F59E0B] text-5xl text-[#1B365D] shadow-2xl">
              <FaBolt />
            </div>

          </div>

        </div>
      </section>

      {/* =====================================================
          ANIMATIONS
      ===================================================== */}
      <style>{`
        @keyframes fadeUp {
          from {
            opacity: 0;
            transform: translateY(24px);
          }

          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        @media (prefers-reduced-motion: reduce) {
          *,
          *::before,
          *::after {
            animation-duration: 0.01ms !important;
            animation-iteration-count: 1 !important;
            transition-duration: 0.01ms !important;
            scroll-behavior: auto !important;
          }
        }
      `}</style>

    </main>
  );
};

export default Events;
