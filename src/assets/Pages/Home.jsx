
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

import {
  FaArrowRight,
  FaArrowUp,
  FaWater,
  FaBolt,
  FaLeaf,
  FaHardHat,
  FaShieldAlt,
  FaCheckCircle,
  FaLightbulb,
  FaChartLine,
  FaChevronRight,
  FaChevronLeft,
  FaPhoneAlt,
  FaEnvelope,
  FaMapMarkerAlt,
  FaTools,
  FaExternalLinkAlt,
} from "react-icons/fa";

/* =========================================
   PROFESSIONAL HERO SLIDER IMAGES
========================================= */

const slides = [
  {
    image:
      "https://images.unsplash.com/photo-1705747894609-6a7d17a8cfb7?auto=format&fit=crop&w=2200&q=90",
    eyebrow: "Renewable Energy • Sustainable Development",
    title: "Harnessing Water.",
    highlight: "Empowering The Future.",
    description:
      "Building a sustainable future through hydropower development, engineering excellence, and responsible energy solutions in Nepal.",
    button: "Explore Our Projects",
    link: "/projects",
    position: "center",
  },
  {
    image:
      "https://images.unsplash.com/photo-1742206595592-d51e1a26ef2a?auto=format&fit=crop&w=2200&q=90",
    eyebrow: "Engineering • Innovation • Progress",
    title: "Engineering Progress.",
    highlight: "Building A Better Tomorrow.",
    description:
      "Committed to quality infrastructure, innovative engineering, and responsible development for generations to come.",
    button: "Discover Our Company",
    link: "/about",
    position: "center",
  },
  {
    image:
      "https://images.unsplash.com/photo-1470770841072-f978cf4d019e?auto=format&fit=crop&w=2200&q=90",
    eyebrow: "Clean Energy • Green Future",
    title: "Powering Nepal.",
    highlight: "Creating Sustainable Growth.",
    description:
      "Supporting Nepal's renewable energy vision through sustainable practices and a long-term commitment to development.",
    button: "Contact Our Team",
    link: "/contact",
    position: "center",
  },
];

/* =========================================
   EXPERTISE DATA
========================================= */

const expertise = [
  {
    icon: FaWater,
    number: "01",
    title: "Hydropower Development",
    description:
      "Developing sustainable hydropower solutions through careful planning, technical expertise, and responsible resource management.",
  },
  {
    icon: FaHardHat,
    number: "02",
    title: "Engineering Excellence",
    description:
      "Applying engineering knowledge and professional standards to deliver reliable infrastructure and energy solutions.",
  },
  {
    icon: FaLeaf,
    number: "03",
    title: "Renewable Energy",
    description:
      "Supporting a cleaner energy future through renewable resources and environmentally responsible development.",
  },
  {
    icon: FaTools,
    number: "04",
    title: "Infrastructure Development",
    description:
      "Building the foundations for long-term progress through quality construction and infrastructure development.",
  },
];

/* =========================================
   PROJECT DATA
========================================= */

const projects = [
  {
    category: "Hydropower Development",
    title: "Renewable Energy Development",
    location: "Nepal",
    image:
      "https://images.unsplash.com/photo-1705747894609-6a7d17a8cfb7?auto=format&fit=crop&w=1000&q=85",
    description:
      "Exploring sustainable opportunities in renewable energy and hydropower development.",
  },
  {
    category: "Engineering & Infrastructure",
    title: "Engineering Infrastructure",
    location: "Nepal",
    image:
      "https://images.unsplash.com/photo-1742206595592-d51e1a26ef2a?auto=format&fit=crop&w=1000&q=85",
    description:
      "Supporting infrastructure development through engineering knowledge and quality practices.",
  },
  {
    category: "Water Resources",
    title: "Water Resource Development",
    location: "Nepal",
    image:
      "https://images.unsplash.com/photo-1501785888041-af3ef285b470?auto=format&fit=crop&w=1000&q=85",
    description:
      "Recognizing the importance of responsible water resource management for future generations.",
  },
];

/* =========================================
   COMPANY VALUES
========================================= */

const values = [
  {
    icon: FaShieldAlt,
    title: "Safety First",
    description:
      "We value safety, responsibility, and professional standards throughout every stage of our work.",
  },
  {
    icon: FaLeaf,
    title: "Sustainability",
    description:
      "We believe responsible development and environmental awareness are essential for the future.",
  },
  {
    icon: FaLightbulb,
    title: "Innovation",
    description:
      "We embrace practical ideas, modern approaches, and continuous improvement.",
  },
  {
    icon: FaChartLine,
    title: "Long-Term Vision",
    description:
      "We focus on creating lasting value through reliable and sustainable energy development.",
  },
];

/* =========================================
   REUSABLE SECTION HEADING
========================================= */

function SectionHeading({
  eyebrow,
  title,
  description,
  light = false,
}) {
  return (
    <div className="mx-auto mb-14 flex max-w-3xl flex-col items-center text-center">

      <div
        className={`mb-5 flex items-center gap-3 text-[11px] font-extrabold uppercase tracking-[0.24em] sm:text-xs ${
          light ? "text-amber-400" : "text-amber-600"
        }`}
      >
        <span className="h-[2px] w-8 bg-amber-500" />
        {eyebrow}
        <span className="h-[2px] w-8 bg-amber-500" />
      </div>

      <h2
        className={`text-3xl font-extrabold leading-tight tracking-tight sm:text-4xl lg:text-[46px] ${
          light ? "text-white" : "text-[#0F172A]"
        }`}
      >
        {title}
      </h2>

      {description && (
        <p
          className={`mt-5 max-w-2xl text-sm leading-8 sm:text-base ${
            light ? "text-slate-300" : "text-slate-600"
          }`}
        >
          {description}
        </p>
      )}

    </div>
  );
}

/* =========================================
   HOME COMPONENT
========================================= */

function Home() {
  const [activeSlide, setActiveSlide] = useState(0);
  const [isPaused, setIsPaused] = useState(false);

  const nextSlide = () => {
    setActiveSlide((prev) => (prev + 1) % slides.length);
  };

  const previousSlide = () => {
    setActiveSlide(
      (prev) => (prev - 1 + slides.length) % slides.length
    );
  };

  /* AUTOMATIC SLIDER */

  useEffect(() => {
    if (isPaused) return;

    const interval = setInterval(() => {
      setActiveSlide((prev) => (prev + 1) % slides.length);
    }, 6500);

    return () => clearInterval(interval);
  }, [isPaused]);

  const currentSlide = slides[activeSlide];

  return (
    <main className="overflow-hidden bg-white text-slate-900">

      {/* =========================================
          HERO SLIDER
      ========================================= */}

      <section
        className="relative flex min-h-[570px] flex-col justify-center overflow-hidden bg-[#1B365D] sm:min-h-[650px] lg:min-h-[730px]"
        onMouseEnter={() => setIsPaused(true)}
        onMouseLeave={() => setIsPaused(false)}
        onFocus={() => setIsPaused(true)}
        onBlur={(e) => {
          if (!e.currentTarget.contains(e.relatedTarget)) {
            setIsPaused(false);
          }
        }}
      >

        {/* SLIDER IMAGES */}

        {slides.map((slide, index) => (
          <div
            key={index}
            className={`absolute inset-0 overflow-hidden transition-opacity duration-[1200ms] ease-in-out ${
              activeSlide === index
                ? "z-10 opacity-100"
                : "z-0 opacity-0"
            }`}
          >

            <img
              src={slide.image}
              alt={`${slide.title} ${slide.highlight}`}
              className={`hero-zoom h-full w-full object-cover ${
                activeSlide === index ? "hero-zoom-active" : ""
              }`}
              style={{
                objectPosition: slide.position,
              }}
              loading={index === 0 ? "eager" : "lazy"}
              fetchPriority={index === 0 ? "high" : "auto"}
            />

          </div>
        ))}

        {/* LIGHTER IMAGE OVERLAYS */}

        <div className="absolute inset-0 z-10 bg-gradient-to-r from-[#0B1930]/50 via-[#1B365D]/30 to-[#1B365D]/10" />

        <div className="absolute inset-0 z-10 bg-gradient-to-t from-[#0F172A]/35 via-transparent to-[#0F172A]/5" />

        {/* HERO CONTENT */}

        <div className="relative z-20 mx-auto flex w-full max-w-[1440px] flex-1 items-center justify-center px-5 py-24 sm:px-10 lg:px-16">

          <div className="flex w-full max-w-5xl flex-col items-center text-center">

            <div
              key={`eyebrow-${activeSlide}`}
              className="mb-7 inline-flex max-w-full animate-[fadeUp_0.7s_ease-out] items-center gap-3 rounded-full border border-white/30 bg-white/10 px-4 py-3 text-[9px] font-bold uppercase tracking-[0.16em] text-white shadow-lg backdrop-blur-md sm:px-6 sm:text-xs sm:tracking-[0.2em]"
            >
              <span className="h-2 w-2 shrink-0 animate-pulse rounded-full bg-amber-400" />
              <span>{currentSlide.eyebrow}</span>
            </div>

            <h1
              key={`title-${activeSlide}`}
              className="animate-[fadeUp_0.8s_ease-out] text-4xl font-black leading-[1.13] tracking-tight text-white drop-shadow-lg sm:text-5xl md:text-6xl lg:text-7xl xl:text-[78px]"
            >
              {currentSlide.title}

              <span className="mt-3 block text-amber-400">
                {currentSlide.highlight}
              </span>
            </h1>

            <p
              key={`description-${activeSlide}`}
              className="mx-auto mt-7 max-w-2xl animate-[fadeUp_1s_ease-out] text-sm leading-8 text-slate-100 drop-shadow-md sm:mt-8 sm:text-base lg:text-lg"
            >
              {currentSlide.description}
            </p>

            {/* HERO BUTTONS */}

            <div className="mt-9 flex w-full flex-col items-center justify-center gap-4 sm:mt-10 sm:w-auto sm:flex-row">

              <Link
                to={currentSlide.link}
                className="group flex w-full items-center justify-center gap-3 rounded-lg bg-amber-500 px-7 py-4 text-sm font-extrabold text-[#0F172A] shadow-xl transition duration-300 hover:-translate-y-1 hover:bg-amber-400 sm:w-auto sm:px-9"
              >
                {currentSlide.button}

                <FaArrowRight className="transition duration-300 group-hover:translate-x-1" />
              </Link>

              <Link
                to="/about"
                className="flex w-full items-center justify-center gap-3 rounded-lg border border-white/60 bg-white/10 px-7 py-4 text-sm font-bold text-white shadow-lg backdrop-blur-md transition duration-300 hover:-translate-y-1 hover:bg-white/20 sm:w-auto sm:px-9"
              >
                Discover Our Company

                <FaExternalLinkAlt className="text-xs" />
              </Link>

            </div>

            {/* SLIDE INDICATORS */}

            <div className="mt-12 flex items-center justify-center gap-3 sm:mt-16">

              {slides.map((slide, index) => (
                <button
                  key={index}
                  type="button"
                  onClick={() => setActiveSlide(index)}
                  aria-label={`Go to slide ${index + 1}`}
                  aria-current={activeSlide === index ? "true" : undefined}
                  className={`h-2.5 rounded-full transition-all duration-300 ${
                    activeSlide === index
                      ? "w-10 bg-amber-400"
                      : "w-2.5 bg-white/70 hover:bg-white"
                  }`}
                />
              ))}

            </div>

          </div>
        </div>

        {/* LEFT ARROW */}

        <button
          type="button"
          onClick={previousSlide}
          aria-label="Previous slide"
          className="absolute left-2 top-1/2 z-30 flex h-9 w-9 -translate-y-1/2 items-center justify-center rounded-full border border-white/50 bg-[#0F172A]/40 text-white shadow-lg backdrop-blur-md transition duration-300 hover:border-amber-400 hover:bg-amber-500 hover:text-[#0F172A] sm:left-5 sm:h-12 sm:w-12 lg:left-8 lg:h-14 lg:w-14"
        >
          <FaChevronLeft className="text-xs sm:text-base" />
        </button>

        {/* RIGHT ARROW */}

        <button
          type="button"
          onClick={nextSlide}
          aria-label="Next slide"
          className="absolute right-2 top-1/2 z-30 flex h-9 w-9 -translate-y-1/2 items-center justify-center rounded-full border border-white/50 bg-[#0F172A]/40 text-white shadow-lg backdrop-blur-md transition duration-300 hover:border-amber-400 hover:bg-amber-500 hover:text-[#0F172A] sm:right-5 sm:h-12 sm:w-12 lg:right-8 lg:h-14 lg:w-14"
        >
          <FaChevronRight className="text-xs sm:text-base" />
        </button>

        {/* BOTTOM ACCENT */}

        <div className="absolute bottom-0 left-0 z-30 h-1 w-full bg-gradient-to-r from-amber-600 via-amber-400 to-transparent" />

      </section>

      {/* =========================================
          INTRODUCTION / HIGHLIGHTS
      ========================================= */}

      <section className="relative z-20 bg-white shadow-sm">

        <div className="mx-auto grid max-w-[1440px] grid-cols-1 gap-0 px-5 py-8 sm:px-10 md:grid-cols-3 lg:px-16">

          <div className="flex items-center justify-center gap-4 border-b border-slate-200 px-4 py-6 md:border-b-0 md:border-r md:py-4">

            <div className="flex h-14 w-14 shrink-0 items-center justify-center rounded-xl bg-blue-50 text-2xl text-[#1B365D]">
              <FaWater />
            </div>

            <div>
              <h3 className="text-sm font-extrabold text-[#1B365D] sm:text-base">
                Hydropower Expertise
              </h3>

              <p className="mt-1 text-xs leading-6 text-slate-500 sm:text-sm">
                Focused on energy development
              </p>
            </div>

          </div>

          <div className="flex items-center justify-center gap-4 border-b border-slate-200 px-4 py-6 md:border-b-0 md:border-r md:py-4">

            <div className="flex h-14 w-14 shrink-0 items-center justify-center rounded-xl bg-amber-50 text-2xl text-amber-600">
              <FaHardHat />
            </div>

            <div>
              <h3 className="text-sm font-extrabold text-[#1B365D] sm:text-base">
                Engineering Quality
              </h3>

              <p className="mt-1 text-xs leading-6 text-slate-500 sm:text-sm">
                Professional approach
              </p>
            </div>

          </div>

          <div className="flex items-center justify-center gap-4 px-4 py-6 md:py-4">

            <div className="flex h-14 w-14 shrink-0 items-center justify-center rounded-xl bg-emerald-50 text-2xl text-emerald-700">
              <FaLeaf />
            </div>

            <div>
              <h3 className="text-sm font-extrabold text-[#1B365D] sm:text-base">
                Sustainable Growth
              </h3>

              <p className="mt-1 text-xs leading-6 text-slate-500 sm:text-sm">
                Committed to tomorrow
              </p>
            </div>

          </div>

        </div>
      </section>

      {/* =========================================
          ABOUT SECTION
      ========================================= */}

      <section className="bg-[#F1F5F9] py-20 sm:py-24 lg:py-28">

        <div className="mx-auto grid max-w-[1440px] grid-cols-1 items-center gap-14 px-5 sm:px-10 lg:grid-cols-2 lg:gap-20 lg:px-16">

          {/* ABOUT IMAGE */}

          <div className="relative mx-auto flex w-full max-w-xl flex-col">

            <div className="absolute -left-4 -top-4 h-28 w-28 rounded-tl-3xl border-l-4 border-t-4 border-amber-500 sm:h-36 sm:w-36" />

            <div className="image-clip relative overflow-hidden rounded-2xl shadow-xl">

              <img
                src="https://images.unsplash.com/photo-1705747894609-6a7d17a8cfb7?auto=format&fit=crop&w=1100&q=85"
                alt="Hydroelectric dam and water resources"
                className="slow-image h-[330px] w-full object-cover sm:h-[450px] lg:h-[510px]"
                loading="lazy"
              />

              <div className="absolute inset-0 bg-gradient-to-t from-[#0F172A]/55 via-transparent to-transparent" />

              <div className="absolute bottom-7 left-6 right-6 sm:bottom-9 sm:left-9">

                <p className="text-xs font-bold uppercase tracking-[0.2em] text-amber-300">
                  Sustainable Energy
                </p>

                <h3 className="mt-3 text-2xl font-extrabold text-white sm:text-3xl">
                  Building Tomorrow, Today.
                </h3>

              </div>

            </div>

            <div className="absolute -bottom-7 -right-3 hidden flex-col rounded-xl bg-[#1B365D] p-6 text-white shadow-xl sm:flex md:-right-7">

              <FaBolt className="mb-3 text-3xl text-amber-400" />

              <p className="text-lg font-extrabold">
                Clean Energy
              </p>

              <p className="mt-1 text-xs text-slate-300">
                A sustainable direction
              </p>

            </div>

          </div>

          {/* ABOUT CONTENT */}

          <div className="flex flex-col pt-3 lg:pl-4">

            <div className="mb-5 flex items-center gap-3 text-xs font-extrabold uppercase tracking-[0.2em] text-amber-600">
              <span className="h-[2px] w-9 bg-amber-500" />
              About Devdhunga Hydro
            </div>

            <h2 className="text-3xl font-extrabold leading-tight tracking-tight text-[#0F172A] sm:text-4xl lg:text-5xl">
              Driving Nepal's

              <span className="mt-2 block text-[#1B365D]">
                Energy Development
              </span>
            </h2>

            <p className="mt-7 text-sm leading-8 text-slate-600 sm:text-base">
              Devdhunga Hydro is focused on the potential of hydropower
              and renewable energy development. We believe that
              responsible infrastructure, sound engineering, and
              sustainable practices can contribute to Nepal's energy
              future.
            </p>

            <p className="mt-4 text-sm leading-8 text-slate-600 sm:text-base">
              Our approach emphasizes quality, safety, environmental
              responsibility, and a long-term vision for meaningful
              progress.
            </p>

            <div className="mt-7 grid grid-cols-1 gap-x-5 gap-y-4 sm:grid-cols-2">

              {[
                "Responsible development",
                "Engineering and quality",
                "Sustainable energy vision",
                "Long-term infrastructure",
              ].map((point, index) => (
                <div key={index} className="flex items-center gap-3">

                  <FaCheckCircle className="shrink-0 text-amber-500" />

                  <span className="text-sm font-semibold text-slate-700">
                    {point}
                  </span>

                </div>
              ))}

            </div>

            <div className="mt-9 flex flex-wrap items-center gap-4">

              <Link
                to="/about"
                className="group flex items-center gap-3 rounded-lg bg-[#1B365D] px-7 py-4 text-sm font-bold text-white transition duration-300 hover:bg-[#0F172A]"
              >
                Learn More About Us

                <FaArrowRight className="transition group-hover:translate-x-1" />
              </Link>

              <Link
                to="/projects"
                className="flex items-center gap-2 text-sm font-bold text-[#1B365D] transition hover:text-amber-600"
              >
                Our Projects

                <FaChevronRight className="text-xs" />
              </Link>

            </div>

          </div>
        </div>
      </section>

      {/* =========================================
          EXPERTISE SECTION
      ========================================= */}

      <section className="bg-white py-20 sm:py-24 lg:py-28">

        <div className="mx-auto max-w-[1440px] px-5 sm:px-10 lg:px-16">

          <SectionHeading
            eyebrow="What We Do"
            title="Our Expertise & Capabilities"
            description="Combining technical knowledge, responsible practices, and a forward-thinking approach to support sustainable energy and infrastructure development."
          />

          <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">

            {expertise.map((item) => (
              <article
                key={item.number}
                className="group relative flex flex-col overflow-hidden rounded-2xl border border-slate-200 bg-white p-7 shadow-sm transition duration-300 hover:-translate-y-2 hover:border-amber-400 hover:shadow-xl"
              >

                <div className="absolute right-0 top-0 h-28 w-28 -translate-y-8 translate-x-8 rounded-full bg-[#F1F5F9] transition duration-300 group-hover:bg-amber-100" />

                <div className="relative flex items-center justify-between">

                  <div className="flex h-16 w-16 items-center justify-center rounded-xl bg-[#1B365D] text-2xl text-amber-400 transition duration-300 group-hover:bg-amber-500 group-hover:text-[#0F172A]">
                    <item.icon />
                  </div>

                  <span className="text-3xl font-black text-slate-100 transition group-hover:text-amber-100">
                    {item.number}
                  </span>

                </div>

                <h3 className="relative mt-7 text-lg font-extrabold leading-snug text-[#1B365D] sm:text-xl">
                  {item.title}
                </h3>

                <p className="mt-4 flex-1 text-sm leading-7 text-slate-600">
                  {item.description}
                </p>

                <div className="mt-7 h-1 w-12 rounded-full bg-amber-500 transition-all duration-300 group-hover:w-20" />

              </article>
            ))}

          </div>
        </div>
      </section>

      {/* =========================================
          PROJECTS SECTION
      ========================================= */}

      <section className="bg-[#F1F5F9] py-20 sm:py-24 lg:py-28">

        <div className="mx-auto max-w-[1440px] px-5 sm:px-10 lg:px-16">

          <SectionHeading
            eyebrow="Our Work"
            title="Projects & Developments"
            description="Explore the areas of development that reflect our commitment to engineering, renewable energy, and sustainable infrastructure."
          />

          <div className="grid grid-cols-1 gap-7 sm:grid-cols-2 lg:grid-cols-3">

            {projects.map((project, index) => (
              <article
                key={index}
                className="group flex flex-col overflow-hidden rounded-2xl bg-white shadow-md transition duration-300 hover:-translate-y-2 hover:shadow-2xl"
              >

                <div className="image-clip relative h-60 shrink-0 overflow-hidden sm:h-64">

                  <img
                    src={project.image}
                    alt={project.title}
                    className="slow-image h-full w-full object-cover transition duration-700 group-hover:scale-110"
                    loading="lazy"
                  />

                  <div className="absolute inset-0 bg-gradient-to-t from-[#0F172A]/75 via-transparent to-transparent" />

                  <span className="absolute bottom-5 left-5 max-w-[85%] rounded-md bg-amber-500 px-4 py-2 text-[10px] font-extrabold uppercase tracking-wide text-[#0F172A] sm:text-xs">
                    {project.category}
                  </span>

                </div>

                <div className="flex flex-1 flex-col p-7">

                  <div className="mb-3 flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-slate-500">
                    <FaMapMarkerAlt className="text-amber-500" />
                    {project.location}
                  </div>

                  <h3 className="text-xl font-extrabold text-[#1B365D] transition group-hover:text-amber-600">
                    {project.title}
                  </h3>

                  <p className="mt-4 flex-1 text-sm leading-7 text-slate-600">
                    {project.description}
                  </p>

                  <div className="mt-6 border-t border-slate-100 pt-5">

                    <Link
                      to="/projects"
                      className="inline-flex items-center gap-2 text-sm font-extrabold text-[#1B365D] transition hover:text-amber-600"
                    >
                      Explore Projects

                      <FaArrowRight className="transition group-hover:translate-x-1" />
                    </Link>

                  </div>

                </div>

              </article>
            ))}

          </div>

          <div className="mt-12 flex justify-center">

            <Link
              to="/projects"
              className="group flex items-center gap-3 rounded-lg border-2 border-[#1B365D] px-8 py-4 text-sm font-extrabold text-[#1B365D] transition duration-300 hover:bg-[#1B365D] hover:text-white"
            >
              View All Projects

              <FaArrowRight className="transition group-hover:translate-x-1" />
            </Link>

          </div>

        </div>
      </section>

      {/* =========================================
          COMPANY VALUES
      ========================================= */}

      <section className="relative overflow-hidden bg-[#1B365D] py-20 sm:py-24 lg:py-28">

        <div className="pointer-events-none absolute -right-40 -top-40 h-96 w-96 rounded-full border border-white/10" />

        <div className="pointer-events-none absolute -bottom-48 -left-40 h-[500px] w-[500px] rounded-full border border-white/10" />

        <div className="relative mx-auto max-w-[1440px] px-5 sm:px-10 lg:px-16">

          <SectionHeading
            eyebrow="Our Commitment"
            title="The Values That Drive Us"
            description="Our principles shape how we approach development, work with partners, and contribute to a sustainable energy future."
            light
          />

          <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">

            {values.map((item, index) => (
              <article
                key={index}
                className="group flex flex-col rounded-2xl border border-white/15 bg-white/[0.07] p-7 backdrop-blur-sm transition duration-300 hover:-translate-y-2 hover:border-amber-400 hover:bg-white/[0.12]"
              >

                <div className="flex h-14 w-14 items-center justify-center rounded-xl bg-amber-500 text-2xl text-[#0F172A] transition duration-300 group-hover:rotate-6">
                  <item.icon />
                </div>

                <h3 className="mt-6 text-xl font-extrabold text-white">
                  {item.title}
                </h3>

                <p className="mt-4 flex-1 text-sm leading-7 text-slate-300">
                  {item.description}
                </p>

                <div className="mt-6 h-[3px] w-10 rounded-full bg-amber-400 transition-all duration-300 group-hover:w-16" />

              </article>
            ))}

          </div>
        </div>
      </section>

      {/* =========================================
          WHY CHOOSE US
      ========================================= */}

      <section className="bg-white py-20 sm:py-24 lg:py-28">

        <div className="mx-auto grid max-w-[1440px] grid-cols-1 items-center gap-12 px-5 sm:px-10 lg:grid-cols-2 lg:gap-20 lg:px-16">

          {/* LEFT CONTENT */}

          <div className="flex flex-col">

            <div className="mb-5 flex items-center gap-3 text-xs font-extrabold uppercase tracking-[0.2em] text-amber-600">
              <span className="h-[2px] w-9 bg-amber-500" />
              Why Choose Us
            </div>

            <h2 className="text-3xl font-extrabold leading-tight text-[#0F172A] sm:text-4xl lg:text-5xl">
              Building With Purpose.

              <span className="mt-2 block text-[#1B365D]">
                Growing With Responsibility.
              </span>
            </h2>

            <p className="mt-6 text-sm leading-8 text-slate-600 sm:text-base">
              Sustainable energy development requires a thoughtful
              approach, strong technical foundations, and a commitment
              to responsible practices. These principles guide our
              approach to every opportunity.
            </p>

            <div className="mt-9 flex flex-col gap-6">

              <div className="flex items-start gap-4">

                <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-blue-50 text-xl text-[#1B365D]">
                  <FaHardHat />
                </div>

                <div>
                  <h3 className="font-extrabold text-[#1B365D]">
                    Professional Approach
                  </h3>

                  <p className="mt-2 text-sm leading-7 text-slate-600">
                    Emphasizing technical knowledge, careful planning,
                    and quality-oriented work.
                  </p>
                </div>

              </div>

              <div className="flex items-start gap-4">

                <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-amber-50 text-xl text-amber-600">
                  <FaLeaf />
                </div>

                <div>
                  <h3 className="font-extrabold text-[#1B365D]">
                    Environmental Responsibility
                  </h3>

                  <p className="mt-2 text-sm leading-7 text-slate-600">
                    Recognizing the importance of sustainable
                    development and responsible resource use.
                  </p>
                </div>

              </div>

              <div className="flex items-start gap-4">

                <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-emerald-50 text-xl text-emerald-700">
                  <FaShieldAlt />
                </div>

                <div>
                  <h3 className="font-extrabold text-[#1B365D]">
                    Commitment to Quality
                  </h3>

                  <p className="mt-2 text-sm leading-7 text-slate-600">
                    Valuing safety, consistency, and responsible
                    project development.
                  </p>
                </div>

              </div>

            </div>

            <div className="mt-9">

              <Link
                to="/about"
                className="group inline-flex items-center gap-3 rounded-lg bg-[#1B365D] px-7 py-4 text-sm font-bold text-white transition hover:bg-[#0F172A]"
              >
                Discover Our Approach

                <FaArrowRight className="transition group-hover:translate-x-1" />
              </Link>

            </div>

          </div>

          {/* RIGHT IMAGE GRID */}

          <div className="grid grid-cols-2 gap-4 sm:gap-5">

            <div className="flex flex-col gap-4 sm:gap-5">

              <div className="image-clip overflow-hidden rounded-2xl">

                <img
                  src="https://images.unsplash.com/photo-1511497584788-876760111969?auto=format&fit=crop&w=700&q=85"
                  alt="Green forest landscape"
                  className="slow-image h-48 w-full object-cover transition duration-700 hover:scale-110 sm:h-64"
                  loading="lazy"
                />

              </div>

              <div className="flex flex-col justify-center rounded-2xl bg-[#1B365D] p-5 text-white sm:p-7">

                <FaBolt className="text-3xl text-amber-400" />

                <h3 className="mt-4 text-lg font-extrabold sm:text-xl">
                  Energy For Tomorrow
                </h3>

                <p className="mt-2 text-xs leading-6 text-slate-300 sm:text-sm">
                  Supporting a sustainable energy future.
                </p>

              </div>

            </div>

            <div className="mt-9 flex flex-col gap-4 sm:mt-12 sm:gap-5">

              <div className="flex flex-col justify-center rounded-2xl bg-[#F1F5F9] p-5 sm:p-7">

                <FaWater className="text-3xl text-[#1B365D]" />

                <h3 className="mt-4 text-lg font-extrabold text-[#1B365D] sm:text-xl">
                  Water Resources
                </h3>

                <p className="mt-2 text-xs leading-6 text-slate-600 sm:text-sm">
                  Recognizing the value of natural resources.
                </p>

              </div>

              <div className="image-clip overflow-hidden rounded-2xl">

                <img
                  src="https://images.unsplash.com/photo-1501785888041-af3ef285b470?auto=format&fit=crop&w=700&q=85"
                  alt="Mountain water and natural environment"
                  className="slow-image h-48 w-full object-cover transition duration-700 hover:scale-110 sm:h-64"
                  loading="lazy"
                />

              </div>

            </div>

          </div>

        </div>
      </section>

      {/* =========================================
          CONTACT CTA
      ========================================= */}

      <section className="bg-[#F1F5F9] py-20 sm:py-24">

        <div className="mx-auto max-w-[1440px] px-5 sm:px-10 lg:px-16">

          <div className="relative grid grid-cols-1 overflow-hidden rounded-2xl bg-[#0F172A] px-6 py-14 shadow-2xl sm:px-12 sm:py-20 lg:grid-cols-[1fr_240px] lg:items-center lg:gap-10 lg:px-16">

            <div className="absolute inset-0 overflow-hidden">

              <img
                src="https://images.unsplash.com/photo-1705747894609-6a7d17a8cfb7?auto=format&fit=crop&w=1600&q=85"
                alt=""
                className="cta-zoom h-full w-full object-cover"
              />

            </div>

            <div className="absolute inset-0 bg-gradient-to-r from-[#0F172A]/75 via-[#1B365D]/65 to-[#0F172A]/70" />

            <div className="relative flex flex-col items-center text-center lg:items-start lg:text-left">

              <span className="flex items-center gap-3 text-xs font-extrabold uppercase tracking-[0.2em] text-amber-400">

                <span className="h-[2px] w-8 bg-amber-400" />

                Let's Build The Future

                <span className="h-[2px] w-8 bg-amber-400 lg:hidden" />

              </span>

              <h2 className="mt-6 text-3xl font-extrabold leading-tight text-white sm:text-4xl lg:text-5xl">

                Together, Let's Power

                <span className="mt-2 block text-amber-400">
                  A Sustainable Tomorrow.
                </span>

              </h2>

              <p className="mt-6 max-w-2xl text-sm leading-8 text-slate-200 sm:text-base">
                Have a question, business inquiry, or want to learn
                more about our work? Connect with our team.
              </p>

            </div>

            <div className="relative mt-9 flex flex-col items-center gap-4 lg:mt-0">

              <Link
                to="/contact"
                className="group flex w-full items-center justify-center gap-3 rounded-lg bg-amber-500 px-7 py-4 text-sm font-extrabold text-[#0F172A] transition hover:bg-amber-400"
              >
                Get In Touch

                <FaArrowRight className="transition group-hover:translate-x-1" />
              </Link>

              <Link
                to="/about"
                className="flex w-full items-center justify-center gap-3 rounded-lg border border-white/40 px-7 py-4 text-sm font-bold text-white transition hover:bg-white/10"
              >
                About Our Company

                <FaChevronRight />
              </Link>

            </div>

          </div>
        </div>
      </section>

      {/* =========================================
          CONTACT INFORMATION
      ========================================= */}

      <section className="border-t border-slate-200 bg-white py-12 sm:py-14">

        <div className="mx-auto grid max-w-[1440px] grid-cols-1 gap-8 px-5 sm:px-10 md:grid-cols-3 lg:px-16">

          <a
            href="tel:+9770000000000"
            className="group flex items-center justify-center gap-4"
          >

            <div className="flex h-14 w-14 shrink-0 items-center justify-center rounded-full bg-blue-50 text-xl text-[#1B365D] transition group-hover:bg-[#1B365D] group-hover:text-white">
              <FaPhoneAlt />
            </div>

            <div>
              <p className="text-xs font-bold uppercase tracking-wider text-slate-500">
                Call Us
              </p>

              <p className="mt-1 font-extrabold text-[#1B365D] transition group-hover:text-amber-600">
                +977-XXXXXXXXXX
              </p>
            </div>

          </a>

          <a
            href="mailto:info@devdhungahydro.com"
            className="group flex items-center justify-center gap-4"
          >

            <div className="flex h-14 w-14 shrink-0 items-center justify-center rounded-full bg-amber-50 text-xl text-amber-600 transition group-hover:bg-amber-500 group-hover:text-[#0F172A]">
              <FaEnvelope />
            </div>

            <div>
              <p className="text-xs font-bold uppercase tracking-wider text-slate-500">
                Email Us
              </p>

              <p className="mt-1 font-extrabold text-[#1B365D] transition group-hover:text-amber-600">
                info@devdhungahydro.com
              </p>
            </div>

          </a>

          <div className="flex items-center justify-center gap-4">

            <div className="flex h-14 w-14 shrink-0 items-center justify-center rounded-full bg-emerald-50 text-xl text-emerald-700">
              <FaMapMarkerAlt />
            </div>

            <div>
              <p className="text-xs font-bold uppercase tracking-wider text-slate-500">
                Location
              </p>

              <p className="mt-1 font-extrabold text-[#1B365D]">
                Nepal
              </p>
            </div>

          </div>

        </div>
      </section>

      {/* =========================================
          BACK TO TOP BUTTON
      ========================================= */}

      <button
        type="button"
        onClick={() =>
          window.scrollTo({
            top: 0,
            behavior: "smooth",
          })
        }
        aria-label="Back to top"
        className="fixed bottom-6 right-5 z-40 flex h-12 w-12 items-center justify-center rounded-full bg-amber-500 text-lg text-[#0F172A] shadow-lg transition duration-300 hover:-translate-y-1 hover:bg-amber-400 sm:right-8"
      >
        <FaArrowUp />
      </button>

      {/* =========================================
          IMAGE AND TEXT ANIMATIONS
      ========================================= */}

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

        /* HERO SLIDER IMAGE MOVEMENT */

        @keyframes heroZoom {
          from {
            transform: scale(1);
          }

          to {
            transform: scale(1.13);
          }
        }

        .hero-zoom {
          transform: scale(1);
          filter: brightness(1.22) contrast(0.96) saturate(1.04);
          will-change: transform;
        }

        .hero-zoom-active {
          animation: heroZoom 7s ease-out forwards;
        }

        /* OTHER IMAGE MOVEMENT */

        @keyframes gentleZoom {
          0%, 100% {
            transform: scale(1);
          }

          50% {
            transform: scale(1.07);
          }
        }

        .slow-image {
          filter: brightness(1.13) contrast(0.96) saturate(1.04);
          animation: gentleZoom 18s ease-in-out infinite;
          will-change: transform;
        }

        .image-clip:hover .slow-image {
          animation-play-state: paused;
          transform: scale(1.1);
        }

        /* CTA IMAGE MOVEMENT */

        @keyframes ctaZoom {
          from {
            transform: scale(1);
          }

          to {
            transform: scale(1.14);
          }
        }

        .cta-zoom {
          filter: brightness(1.22) contrast(0.96) saturate(1.05);
          animation: ctaZoom 24s ease-in-out infinite alternate;
          will-change: transform;
        }

        /* MOBILE RESPONSIVENESS */

        @media (max-width: 640px) {
          .hero-zoom {
            filter: brightness(1.17) contrast(0.96) saturate(1.03);
          }

          .hero-zoom-active {
            animation-duration: 7s;
          }

          .slow-image {
            filter: brightness(1.1) contrast(0.96) saturate(1.03);
            animation-duration: 22s;
          }

          .cta-zoom {
            filter: brightness(1.18) contrast(0.96) saturate(1.04);
            animation-duration: 28s;
          }
        }

        /* REDUCED MOTION ACCESSIBILITY */

        @media (prefers-reduced-motion: reduce) {
          .hero-zoom,
          .hero-zoom-active,
          .slow-image,
          .cta-zoom {
            animation: none !important;
            transform: none !important;
          }

          *,
          *::before,
          *::after {
            scroll-behavior: auto !important;
            transition-duration: 0.01ms !important;
          }
        }
      `}</style>

    </main>
  );
}

export default Home;
