
import { useEffect } from "react";
import { Link, useLocation } from "react-router-dom";

import {
  FaArrowRight,
  FaBolt,
  FaLeaf,
  FaEye,
  FaBullseye,
  FaShieldAlt,
  FaLightbulb,
  FaChartLine,
  FaUsers,
  FaCheckCircle,
  FaPhoneAlt,
  FaEnvelope,
  FaMapMarkerAlt,
  FaBuilding,
  FaHardHat,
} from "react-icons/fa";

const About = () => {
  const location = useLocation();

  useEffect(() => {
    if (location.pathname !== "/about") return;

    const timer = setTimeout(() => {
      if (!location.hash) {
        window.scrollTo({ top: 0, behavior: "smooth" });
        return;
      }

      const sectionId = decodeURIComponent(location.hash.substring(1));
      const section = document.getElementById(sectionId);

      if (section) {
        const sectionTop =
          section.getBoundingClientRect().top +
          window.scrollY -
          100;

        window.scrollTo({
          top: Math.max(0, sectionTop),
          behavior: "smooth",
        });
      }
    }, 200);

    return () => clearTimeout(timer);
  }, [location.pathname, location.hash]);

  const companyHighlights = [
    "Commitment to sustainable energy development",
    "Focus on responsible project planning",
    "Professional and quality-driven approach",
    "Long-term value for communities",
  ];

  const values = [
    {
      icon: <FaShieldAlt />,
      title: "Integrity",
      description:
        "We value honesty, transparency, accountability, and responsible business practices.",
    },
    {
      icon: <FaLightbulb />,
      title: "Innovation",
      description:
        "We encourage new ideas and practical solutions for sustainable energy development.",
    },
    {
      icon: <FaLeaf />,
      title: "Sustainability",
      description:
        "We recognize the importance of responsible development and environmental care.",
    },
    {
      icon: <FaChartLine />,
      title: "Excellence",
      description:
        "We aim for quality, efficiency, and continuous improvement in everything we do.",
    },
  ];

  const leadership = [
    {
      icon: <FaBuilding />,
      title: "Chairperson",
      description:
        "Strategic guidance and leadership in supporting the company's long-term direction.",
    },
    {
      icon: <FaUsers />,
      title: "Managing Director",
      description:
        "Leadership in organizational management, operations, and business development.",
    },
    {
      icon: <FaHardHat />,
      title: "Board of Directors",
      description:
        "Corporate governance, oversight, and support for important organizational decisions.",
    },
  ];

  return (
    <main className="about-page overflow-hidden bg-white text-[#0F172A]">

      <style>{`
        @keyframes imageFloat {
          0% {
            transform: scale(1.05) translate3d(0, 0, 0);
          }
          50% {
            transform: scale(1.13) translate3d(-1%, -1%, 0);
          }
          100% {
            transform: scale(1.05) translate3d(0, 0, 0);
          }
        }

        @keyframes imageReveal {
          from {
            opacity: 0;
            transform: scale(1.08) translateY(25px);
          }
          to {
            opacity: 0.7;
            transform: scale(1) translateY(0);
          }
        }

        @keyframes aboutTextRise {
          from {
            opacity: 0;
            transform: translateY(25px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        @keyframes slowBackground {
          0% {
            transform: scale(1.05) translateX(0);
          }
          50% {
            transform: scale(1.13) translateX(-1%);
          }
          100% {
            transform: scale(1.05) translateX(0);
          }
        }

        .about-page h1,
        .about-page h2,
        .about-page h3,
        .about-page p,
        .about-page a {
          animation: aboutTextRise 0.8s ease-out both;
        }

        .about-page h1 { animation-delay: 0.1s; }
        .about-page h2 { animation-delay: 0.15s; }
        .about-page h3 { animation-delay: 0.2s; }
        .about-page p { animation-delay: 0.25s; }
        .about-page a { animation-delay: 0.3s; }

        .about-hero-image {
          animation: slowBackground 22s ease-in-out infinite;
          filter: brightness(1.25) saturate(1.08);
        }

        .about-main-image {
          opacity: 0.9;
          filter: brightness(1.2) saturate(1.08);
          animation: imageFloat 12s ease-in-out infinite;
          transition: opacity 0.5s ease, filter 0.5s ease;
        }

        .about-image-container:hover .about-main-image {
          opacity: 1;
          filter: brightness(1.28) saturate(1.1);
        }

        .about-card {
          transition:
            transform 0.4s ease,
            box-shadow 0.4s ease,
            border-color 0.4s ease;
        }

        .about-card:hover {
          transform: translateY(-9px);
          box-shadow: 0 20px 45px rgba(15, 23, 42, 0.12);
          border-color: #F59E0B;
        }

        @media (prefers-reduced-motion: reduce) {
          .about-page *,
          .about-page *::before,
          .about-page *::after {
            animation-duration: 0.01ms !important;
            animation-iteration-count: 1 !important;
            transition-duration: 0.01ms !important;
          }
        }
      `}</style>

      {/* HERO SECTION */}

      <section className="relative flex min-h-[390px] items-center justify-center overflow-hidden bg-[#1B365D] sm:min-h-[440px] lg:min-h-[500px]">

        <div
          className="about-hero-image absolute inset-0 bg-cover bg-center opacity-85"
          style={{
            backgroundImage:
              "url('https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?auto=format&fit=crop&w=2000&q=90')",
          }}
        />

        <div className="absolute inset-0 bg-gradient-to-r from-[#0F172A]/55 via-[#1B365D]/30 to-[#1B365D]/10" />

        <div className="absolute inset-0 bg-gradient-to-t from-[#0F172A]/25 via-transparent to-[#0F172A]/5" />

        <div className="relative z-10 mx-auto flex w-full max-w-[1440px] flex-col items-center px-5 py-24 text-center sm:px-8 lg:px-12">

          <p className="mb-4 text-xs font-bold uppercase tracking-[3px] text-[#FBBF24] sm:text-sm sm:tracking-[4px]">
            Discover Our Company
          </p>

          <h1 className="text-4xl font-extrabold leading-tight text-white sm:text-5xl md:text-6xl lg:text-7xl">
            About
            <span className="block text-[#F59E0B]">
              Devdhunga Hydro
            </span>
          </h1>

          <p className="mx-auto mt-6 max-w-2xl text-sm leading-7 text-white sm:text-base sm:leading-8 lg:text-lg">
            Learn about our company, our vision, and the leadership
            that guides our journey toward sustainable energy development.
          </p>

          <div className="mt-8 flex items-center justify-center gap-3 text-sm text-white">
            <Link to="/" className="transition hover:text-[#F59E0B]">
              Home
            </Link>

            <FaArrowRight className="text-xs text-[#F59E0B]" />

            <span className="font-semibold text-[#FBBF24]">
              About Us
            </span>
          </div>

        </div>
      </section>

      {/* COMPANY OVERVIEW */}

      <section
        id="company-overview"
        className="scroll-mt-28 py-16 sm:py-20 lg:py-24"
      >
        <div className="mx-auto grid max-w-[1440px] items-center gap-14 px-5 sm:px-8 lg:grid-cols-2 lg:gap-16 lg:px-12">

          {/* IMAGE */}

          <div className="relative mx-auto w-full max-w-[600px] pb-8">

            <div className="about-image-container overflow-hidden rounded-2xl shadow-xl">

              <img
                src="https://images.unsplash.com/photo-1473341304170-971dccb5ac1e?auto=format&fit=crop&w=1100&q=95"
                alt="Hydroelectric power and energy infrastructure"
                loading="lazy"
                decoding="async"
                className="about-main-image h-[300px] w-full object-cover sm:h-[400px] lg:h-[480px]"
              />

            </div>

            <div className="absolute -bottom-1 left-1/2 flex w-max max-w-[95%] -translate-x-1/2 items-center gap-3 rounded-xl bg-[#1B365D] p-4 text-white shadow-xl sm:gap-4 sm:p-6">

              <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-lg bg-[#F59E0B] text-xl text-[#0F172A] sm:h-12 sm:w-12 sm:text-2xl">
                <FaBolt />
              </div>

              <div>
                <p className="text-xs text-slate-300 sm:text-sm">
                  Our Commitment
                </p>

                <h3 className="text-sm font-bold sm:text-lg">
                  Sustainable Energy
                </h3>
              </div>

            </div>
          </div>

          {/* CONTENT */}

          <div className="flex flex-col items-center pt-5 text-center lg:pt-0">

            <p className="mb-3 text-xs font-bold uppercase tracking-[3px] text-[#F59E0B] sm:text-sm">
              Company Overview
            </p>

            <h2 className="text-3xl font-extrabold leading-tight text-[#1B365D] sm:text-4xl lg:text-[42px]">
              Building A Better Future Through Hydropower
            </h2>

            <div className="mt-5 h-1 w-20 rounded-full bg-[#F59E0B]" />

            <p className="mt-7 text-sm leading-8 text-[#475569] sm:text-base">
              Devdhunga Hydro is focused on the potential of
              hydropower and sustainable energy development in Nepal.
              We recognize the importance of responsible planning,
              professional execution, and long-term value creation.
            </p>

            <p className="mt-4 text-sm leading-8 text-[#475569] sm:text-base">
              Our approach is guided by a commitment to quality,
              sustainability, and the positive role that energy
              development can play in supporting communities and
              the country's future.
            </p>

            <div className="mt-7 flex w-full max-w-xl flex-col items-center gap-4">

              {companyHighlights.map((item) => (
                <div
                  key={item}
                  className="flex items-start justify-center gap-3 text-center"
                >
                  <FaCheckCircle className="mt-1 shrink-0 text-[#F59E0B]" />

                  <p className="text-sm font-medium leading-6 text-[#475569]">
                    {item}
                  </p>
                </div>
              ))}

            </div>

            <Link
              to="/projects"
              className="mt-9 inline-flex items-center gap-3 rounded-lg bg-[#1B365D] px-6 py-3.5 text-sm font-bold text-white transition duration-300 hover:-translate-y-1 hover:bg-[#F59E0B] hover:text-[#0F172A]"
            >
              Explore Our Projects
              <FaArrowRight />
            </Link>

          </div>
        </div>
      </section>

      {/* VISION AND MISSION */}

      <section
        id="vision-mission"
        className="scroll-mt-28 bg-[#F1F5F9] py-16 sm:py-20 lg:py-24"
      >
        <div className="mx-auto max-w-[1440px] px-5 sm:px-8 lg:px-12">

          <div className="mx-auto mb-12 flex max-w-2xl flex-col items-center text-center sm:mb-14">

            <p className="mb-3 text-xs font-bold uppercase tracking-[3px] text-[#F59E0B] sm:text-sm">
              Our Direction
            </p>

            <h2 className="text-3xl font-extrabold text-[#1B365D] sm:text-4xl">
              Vision & Mission
            </h2>

            <div className="mt-5 h-1 w-20 rounded-full bg-[#F59E0B]" />

            <p className="mt-5 text-sm leading-8 text-[#475569] sm:text-base">
              Our vision and mission reflect our commitment to
              responsible growth and sustainable energy development.
            </p>

          </div>

          <div className="grid gap-7 md:grid-cols-2 md:gap-8">

            <div className="about-card flex flex-col items-center rounded-2xl border border-slate-200 bg-white p-7 text-center shadow-sm sm:p-10">

              <div className="mb-6 flex h-16 w-16 items-center justify-center rounded-xl bg-[#1B365D] text-3xl text-[#F59E0B]">
                <FaEye />
              </div>

              <h3 className="text-2xl font-bold text-[#1B365D]">
                Our Vision
              </h3>

              <div className="mt-4 h-1 w-12 rounded-full bg-[#F59E0B]" />

              <p className="mt-5 max-w-lg text-sm leading-8 text-[#475569] sm:text-base">
                To contribute to a sustainable and energy-secure
                future through responsible hydropower development
                and meaningful contributions to Nepal's progress.
              </p>

            </div>

            <div className="about-card flex flex-col items-center rounded-2xl border border-slate-200 bg-white p-7 text-center shadow-sm sm:p-10">

              <div className="mb-6 flex h-16 w-16 items-center justify-center rounded-xl bg-[#1B365D] text-3xl text-[#F59E0B]">
                <FaBullseye />
              </div>

              <h3 className="text-2xl font-bold text-[#1B365D]">
                Our Mission
              </h3>

              <div className="mt-4 h-1 w-12 rounded-full bg-[#F59E0B]" />

              <p className="mt-5 max-w-lg text-sm leading-8 text-[#475569] sm:text-base">
                To pursue responsible energy development through
                professional practices, thoughtful planning,
                operational excellence, and a focus on long-term
                sustainability.
              </p>

            </div>
          </div>
        </div>
      </section>

      {/* BOARD OF DIRECTORS */}

      <section
        id="board-leadership"
        className="scroll-mt-28 py-16 sm:py-20 lg:py-24"
      >
        <div className="mx-auto max-w-[1440px] px-5 sm:px-8 lg:px-12">

          <div className="mx-auto mb-12 flex max-w-3xl flex-col items-center text-center sm:mb-14">

            <p className="mb-3 text-xs font-bold uppercase tracking-[3px] text-[#F59E0B] sm:text-sm">
              Our Leadership
            </p>

            <h2 className="text-3xl font-extrabold leading-tight text-[#1B365D] sm:text-4xl">
              Board of Directors & Leadership
            </h2>

            <div className="mt-5 h-1 w-20 rounded-full bg-[#F59E0B]" />

            <p className="mt-5 text-sm leading-8 text-[#475569] sm:text-base">
              Effective leadership and responsible governance
              play an important role in guiding an organization
              toward its long-term objectives.
            </p>

          </div>

          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">

            {leadership.map((person) => (
              <div
                key={person.title}
                className="about-card flex flex-col items-center rounded-2xl border border-slate-200 bg-white p-7 text-center shadow-sm sm:p-8"
              >

                <div className="mb-6 flex h-20 w-20 items-center justify-center rounded-full bg-[#F1F5F9] text-3xl text-[#1B365D] transition duration-300 hover:bg-[#1B365D] hover:text-[#F59E0B]">
                  {person.icon}
                </div>

                <h3 className="text-xl font-bold text-[#1B365D]">
                  {person.title}
                </h3>

                <div className="my-4 h-1 w-12 rounded-full bg-[#F59E0B]" />

                <p className="max-w-sm text-sm leading-7 text-[#475569]">
                  {person.description}
                </p>

              </div>
            ))}

          </div>

          <p className="mt-9 text-center text-xs leading-7 text-[#64748B] sm:text-sm">
            Official names, photographs, and designations should
            be added using verified company information.
          </p>

        </div>
      </section>

      {/* CORE VALUES */}

      <section
        id="our-values"
        className="scroll-mt-28 bg-[#F1F5F9] py-16 sm:py-20 lg:py-24"
      >
        <div className="mx-auto max-w-[1440px] px-5 sm:px-8 lg:px-12">

          <div className="mx-auto mb-12 flex max-w-2xl flex-col items-center text-center sm:mb-14">

            <p className="mb-3 text-xs font-bold uppercase tracking-[3px] text-[#F59E0B] sm:text-sm">
              What Guides Us
            </p>

            <h2 className="text-3xl font-extrabold text-[#1B365D] sm:text-4xl">
              Our Core Values
            </h2>

            <div className="mt-5 h-1 w-20 rounded-full bg-[#F59E0B]" />

            <p className="mt-5 text-sm leading-8 text-[#475569] sm:text-base">
              The principles that guide our decisions,
              our work, and our commitment to the future.
            </p>

          </div>

          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">

            {values.map((value) => (
              <div
                key={value.title}
                className="about-card flex flex-col items-center rounded-2xl border border-slate-200 bg-white p-7 text-center shadow-sm"
              >

                <div className="mb-6 flex h-14 w-14 items-center justify-center rounded-xl bg-[#1B365D] text-2xl text-[#F59E0B]">
                  {value.icon}
                </div>

                <h3 className="text-lg font-bold text-[#1B365D]">
                  {value.title}
                </h3>

                <p className="mt-3 text-sm leading-7 text-[#475569]">
                  {value.description}
                </p>

              </div>
            ))}

          </div>
        </div>
      </section>

      {/* CONTACT CTA */}

      <section className="relative overflow-hidden bg-[#1B365D] py-16 sm:py-20">

        <div className="absolute -right-20 -top-20 h-64 w-64 rounded-full border-[35px] border-white/5" />

        <div className="absolute -bottom-24 -left-20 h-64 w-64 rounded-full border-[35px] border-[#F59E0B]/10" />

        <div className="relative z-10 mx-auto flex max-w-[1440px] flex-col items-center justify-center gap-8 px-5 text-center sm:px-8 lg:px-12">

          <div className="flex flex-col items-center">

            <p className="mb-3 text-xs font-bold uppercase tracking-[3px] text-[#F59E0B] sm:text-sm">
              Let's Connect
            </p>

            <h2 className="max-w-3xl text-3xl font-extrabold leading-tight text-white sm:text-4xl">
              Let's Build A Sustainable Future Together
            </h2>

            <p className="mt-4 max-w-2xl text-sm leading-7 text-slate-300 sm:text-base">
              Get in touch with our team to learn more about
              Devdhunga Hydro and our work.
            </p>

          </div>

          <Link
            to="/contact"
            className="inline-flex items-center gap-3 rounded-lg bg-[#F59E0B] px-7 py-4 text-sm font-bold text-[#0F172A] transition duration-300 hover:-translate-y-1 hover:bg-white"
          >
            Contact Us
            <FaArrowRight />
          </Link>

        </div>
      </section>

      {/* CONTACT INFORMATION */}

      <section className="bg-white py-12 sm:py-16">

        <div className="mx-auto grid max-w-[1440px] gap-10 px-5 sm:grid-cols-2 sm:px-8 lg:grid-cols-3 lg:px-12">

          <div className="flex flex-col items-center text-center">

            <div className="mb-4 flex h-14 w-14 items-center justify-center rounded-xl bg-[#F1F5F9] text-xl text-[#F59E0B]">
              <FaPhoneAlt />
            </div>

            <h3 className="text-sm font-bold text-[#1B365D]">
              Phone
            </h3>

            <p className="mt-2 text-sm text-[#475569]">
              +977-XXXXXXXXXX
            </p>

          </div>

          <div className="flex flex-col items-center text-center">

            <div className="mb-4 flex h-14 w-14 items-center justify-center rounded-xl bg-[#F1F5F9] text-xl text-[#F59E0B]">
              <FaEnvelope />
            </div>

            <h3 className="text-sm font-bold text-[#1B365D]">
              Email
            </h3>

            <p className="mt-2 text-sm text-[#475569]">
              info@devdhungahydro.com
            </p>

          </div>

          <div className="flex flex-col items-center text-center sm:col-span-2 lg:col-span-1">

            <div className="mb-4 flex h-14 w-14 items-center justify-center rounded-xl bg-[#F1F5F9] text-xl text-[#F59E0B]">
              <FaMapMarkerAlt />
            </div>

            <h3 className="text-sm font-bold text-[#1B365D]">
              Location
            </h3>

            <p className="mt-2 text-sm text-[#475569]">
              Nepal
            </p>

          </div>

        </div>
      </section>

    </main>
  );
};

export default About;
