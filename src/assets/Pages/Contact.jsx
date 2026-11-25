
import React, { useState } from "react";

import {
  FaMapMarkerAlt,
  FaPhoneAlt,
  FaEnvelope,
  FaClock,
  FaArrowRight,
  FaPaperPlane,
  FaBuilding,
  FaCheckCircle,
  FaBolt,
  FaFacebookF,
  FaLinkedinIn,
  FaInstagram,
  FaWater,
  FaMountain,
} from "react-icons/fa";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    subject: "",
    message: "",
  });

  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;

    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));

    if (submitted) setSubmitted(false);
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    setSubmitted(true);

    setFormData({
      name: "",
      email: "",
      phone: "",
      subject: "",
      message: "",
    });

    setTimeout(() => setSubmitted(false), 5000);
  };

  // Professional hydropower-focused images
  const images = {
    hero:
      "https://images.pexels.com/photos/35516917/pexels-photo-35516917.jpeg?auto=compress&cs=tinysrgb&w=2200",

    water:
      "https://images.pexels.com/photos/31462132/pexels-photo-31462132.jpeg?auto=compress&cs=tinysrgb&w=2200",

    panel:
      "https://images.unsplash.com/photo-1432405972618-c60b0225b8f9?auto=format&fit=crop&w=1400&q=90",
  };

  const contactDetails = [
    {
      icon: <FaMapMarkerAlt />,
      title: "Our Location",
      details: "Kathmandu, Nepal",
      description: "Visit our corporate office",
    },
    {
      icon: <FaPhoneAlt />,
      title: "Call Us",
      details: "+977 9800000000",
      description: "Monday – Friday, 9 AM – 5 PM",
      link: "tel:+9779800000000",
    },
    {
      icon: <FaEnvelope />,
      title: "Email Address",
      details: "info@devdhungahydro.com",
      description: "We are happy to assist you",
      link: "mailto:info@devdhungahydro.com",
    },
    {
      icon: <FaClock />,
      title: "Office Hours",
      details: "9:00 AM – 5:00 PM",
      description: "Sunday – Friday",
    },
  ];

  const socialLinks = [
    {
      icon: <FaFacebookF />,
      link: "https://www.facebook.com/",
      label: "Facebook",
    },
    {
      icon: <FaInstagram />,
      link: "https://www.instagram.com/",
      label: "Instagram",
    },
    {
      icon: <FaLinkedinIn />,
      link: "https://www.linkedin.com/",
      label: "LinkedIn",
    },
  ];

  const benefits = [
    {
      title: "Professional Support",
      text: "Get assistance from our dedicated team.",
    },
    {
      title: "Business Opportunities",
      text: "Discuss partnerships and collaborations.",
    },
    {
      title: "Quick Communication",
      text: "We aim to respond to inquiries promptly.",
    },
  ];

  return (
    <main className="overflow-hidden bg-white text-slate-700">

      <style>{`
        /* =====================================
           IMAGE MOVEMENT ANIMATIONS
        ===================================== */

        @keyframes hydroImageMovement {
          0% {
            transform: scale(1.02) translate3d(-1%, 0, 0);
          }

          50% {
            transform: scale(1.10) translate3d(1%, -1%, 0);
          }

          100% {
            transform: scale(1.06) translate3d(-1%, 1%, 0);
          }
        }

        @keyframes contactReveal {
          from {
            opacity: 0;
            transform: translateY(35px);
          }

          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        @keyframes contactFloat {
          0%, 100% {
            transform: translateY(0);
          }

          50% {
            transform: translateY(-13px);
          }
        }

        @keyframes contactLine {
          from {
            width: 0;
          }

          to {
            width: 65px;
          }
        }

        @keyframes contactPulse {
          0%, 100% {
            box-shadow: 0 0 0 0 rgba(245, 158, 11, 0.2);
          }

          50% {
            box-shadow: 0 0 0 12px rgba(245, 158, 11, 0);
          }
        }

        /* LIGHTER IMAGE STYLE */

        .hydro-image {
          opacity: 0.92;
          filter: brightness(1.18) saturate(1.1) contrast(1.02);
          animation: hydroImageMovement 24s ease-in-out infinite alternate;
          will-change: transform;
          transition: opacity 1s ease, filter 0.8s ease;
        }

        .hydro-image-container:hover .hydro-image {
          opacity: 1;
          filter: brightness(1.22) saturate(1.12);
        }

        .contact-reveal {
          animation: contactReveal 0.9s ease-out both;
        }

        .contact-reveal-delay {
          animation: contactReveal 0.9s 0.2s ease-out both;
        }

        .contact-float {
          animation: contactFloat 5s ease-in-out infinite;
        }

        .contact-line {
          animation: contactLine 1.2s 0.4s ease-out both;
        }

        .contact-pulse {
          animation: contactPulse 2.5s infinite;
        }

        .contact-card {
          transition:
            transform 0.4s ease,
            box-shadow 0.4s ease,
            border-color 0.4s ease;
        }

        .contact-card:hover {
          transform: translateY(-9px);
        }

        .contact-input {
          transition:
            border-color 0.3s ease,
            box-shadow 0.3s ease,
            background 0.3s ease;
        }

        .contact-input:focus {
          border-color: #F59E0B;
          background: white;
          box-shadow: 0 0 0 3px rgba(245, 158, 11, 0.13);
        }

        .contact-panel-image {
          filter: brightness(1.2) saturate(1.08);
        }

        @media (max-width: 640px) {
          .hydro-image {
            animation-duration: 30s;
          }
        }

        @media (prefers-reduced-motion: reduce) {
          .hydro-image,
          .contact-reveal,
          .contact-reveal-delay,
          .contact-float,
          .contact-line,
          .contact-pulse {
            animation: none !important;
          }

          .contact-card,
          .hydro-image {
            transition: none !important;
          }
        }
      `}</style>

      {/* =====================================
          HERO SECTION
      ===================================== */}

      <section className="hydro-image-container relative flex min-h-[420px] items-center justify-center overflow-hidden bg-[#102746] text-center sm:min-h-[490px] lg:min-h-[70vh]">

        <img
          src={images.hero}
          alt="Hydroelectric dam and reservoir infrastructure"
          className="hydro-image absolute inset-0 h-full w-full object-cover object-center"
        />

        <div className="absolute inset-0 bg-gradient-to-b from-[#102746]/50 via-[#102746]/45 to-[#102746]/75" />

        <div className="absolute inset-0 bg-gradient-to-r from-[#102746]/35 via-transparent to-[#102746]/35" />

        {/* Decorative circles */}

        <div className="contact-float pointer-events-none absolute -right-20 top-16 h-72 w-72 rounded-full border border-white/10 sm:h-96 sm:w-96" />

        <div className="contact-float pointer-events-none absolute -left-24 bottom-10 h-64 w-64 rounded-full border border-[#F59E0B]/15" />

        <div className="absolute bottom-0 left-0 h-1 w-full bg-gradient-to-r from-transparent via-[#F59E0B] to-transparent" />

        {/* Hero content */}

        <div className="relative z-10 mx-auto w-full max-w-[1440px] px-5 py-20 sm:px-10 sm:py-24 lg:px-16">

          <div className="mx-auto max-w-4xl">

            <div className="contact-reveal mb-7 inline-flex items-center justify-center gap-3 rounded-full border border-white/25 bg-white/10 px-5 py-3 text-[10px] font-bold uppercase tracking-[3px] text-[#F59E0B] backdrop-blur-md sm:text-xs">
              <FaBolt />
              Get In Touch With Us
            </div>

            <h1 className="contact-reveal text-4xl font-extrabold leading-tight text-white sm:text-6xl lg:text-7xl">
              Let's Connect
              <span className="mt-2 block text-[#F59E0B]">
                With Us.
              </span>
            </h1>

            <div className="contact-line mx-auto mt-7 h-[3px] bg-[#F59E0B]" />

            <p className="contact-reveal-delay mx-auto mt-7 max-w-2xl text-sm leading-8 text-white sm:text-base lg:text-lg">
              Have questions about our company, projects, or business
              opportunities? Our team is ready to assist you.
              Let's build a brighter future together.
            </p>

            <div className="contact-reveal-delay mt-9 flex items-center justify-center gap-3 text-sm font-semibold text-white">
              <span>Home</span>
              <FaArrowRight className="text-xs text-[#F59E0B]" />
              <span className="text-[#F59E0B]">Contact Us</span>
            </div>

          </div>
        </div>

        {/* Scroll indicator */}

        <div className="absolute bottom-7 left-1/2 -translate-x-1/2">
          <div className="flex h-10 w-6 justify-center rounded-full border border-white/50 p-1">
            <div className="h-2 w-1 animate-bounce rounded-full bg-[#F59E0B]" />
          </div>
        </div>

      </section>

      {/* =====================================
          CONTACT INTRODUCTION
      ===================================== */}

      <section className="bg-[#F8FAFC] px-5 py-20 sm:px-10 lg:px-16">

        <div className="mx-auto max-w-[1440px]">

          <div className="mx-auto max-w-3xl text-center">

            <span className="text-xs font-extrabold uppercase tracking-[3px] text-[#F59E0B]">
              Contact Information
            </span>

            <h2 className="mt-4 text-3xl font-extrabold text-[#1B365D] sm:text-4xl lg:text-5xl">
              We're Here To Help You
            </h2>

            <div className="mx-auto mt-5 h-[3px] w-16 rounded-full bg-[#F59E0B]" />

            <p className="mx-auto mt-6 max-w-2xl text-sm leading-8 text-slate-500 sm:text-base">
              Whether you have a general inquiry, partnership proposal,
              or project-related question, feel free to reach out.
              We would love to hear from you.
            </p>

          </div>

          {/* Contact cards */}

          <div className="mt-14 grid gap-6 sm:grid-cols-2 xl:grid-cols-4">

            {contactDetails.map((item, index) => (
              <div
                key={index}
                className="contact-card group flex flex-col items-center rounded-2xl border border-slate-200 bg-white p-7 text-center shadow-sm hover:border-[#F59E0B]/60 hover:shadow-[0_20px_45px_rgba(27,54,93,0.12)] sm:p-8"
              >

                <div className="flex h-16 w-16 items-center justify-center rounded-2xl bg-[#1B365D] text-2xl text-[#F59E0B] transition-all duration-500 group-hover:rotate-6 group-hover:bg-[#F59E0B] group-hover:text-[#1B365D]">
                  {item.icon}
                </div>

                <h3 className="mt-6 text-lg font-bold text-[#1B365D]">
                  {item.title}
                </h3>

                {item.link ? (
                  <a
                    href={item.link}
                    className="mt-3 break-words text-sm font-bold text-[#F59E0B] transition hover:text-[#1B365D]"
                  >
                    {item.details}
                  </a>
                ) : (
                  <p className="mt-3 text-sm font-bold text-[#F59E0B]">
                    {item.details}
                  </p>
                )}

                <p className="mt-3 text-xs leading-6 text-slate-500">
                  {item.description}
                </p>

              </div>
            ))}

          </div>
        </div>
      </section>

      {/* =====================================
          HYDROPOWER IMAGE BANNER
      ===================================== */}

      <section className="hydro-image-container relative h-[300px] overflow-hidden bg-[#102746] sm:h-[380px] lg:h-[450px]">

        <img
          src={images.water}
          alt="Hydroelectric dam releasing water through its spillway"
          className="hydro-image absolute inset-0 h-full w-full object-cover object-center"
        />

        <div className="absolute inset-0 bg-gradient-to-r from-[#102746]/65 via-[#102746]/30 to-[#102746]/60" />

        <div className="absolute inset-0 flex items-center justify-center px-5 text-center">

          <div className="relative max-w-3xl text-white">

            <div className="contact-float contact-pulse mx-auto flex h-16 w-16 items-center justify-center rounded-2xl border border-white/30 bg-white/10 text-3xl text-[#F59E0B] backdrop-blur-md">
              <FaWater />
            </div>

            <h2 className="mt-7 text-3xl font-extrabold sm:text-4xl lg:text-5xl">
              Powering Progress,
              <span className="block text-[#F59E0B]">
                Connecting Futures.
              </span>
            </h2>

            <p className="mx-auto mt-5 max-w-2xl text-sm leading-8 text-white sm:text-base">
              Building meaningful connections and creating opportunities
              for a sustainable energy future.
            </p>

          </div>

        </div>

      </section>

      {/* =====================================
          CONTACT FORM SECTION
      ===================================== */}

      <section className="bg-white px-5 py-20 sm:px-10 lg:px-16">

        <div className="mx-auto max-w-[1440px]">

          {/* Heading */}

          <div className="mx-auto mb-14 max-w-3xl text-center">

            <span className="text-xs font-extrabold uppercase tracking-[3px] text-[#F59E0B]">
              Send Us A Message
            </span>

            <h2 className="mt-4 text-3xl font-extrabold leading-tight text-[#1B365D] sm:text-4xl lg:text-5xl">
              Let's Discuss Your
              <span className="block text-[#F59E0B]">
                Next Opportunity.
              </span>
            </h2>

            <div className="mx-auto mt-5 h-[3px] w-16 rounded-full bg-[#F59E0B]" />

            <p className="mx-auto mt-6 max-w-2xl text-sm leading-8 text-slate-500 sm:text-base">
              We value every inquiry and believe that great relationships
              begin with communication. Fill out the form and our team
              will get back to you.
            </p>

          </div>

          {/* Two column layout */}

          <div className="mx-auto grid max-w-6xl items-stretch gap-8 lg:grid-cols-2 lg:gap-12">

            {/* LEFT INFORMATION PANEL */}

            <div className="relative flex flex-col justify-between overflow-hidden rounded-2xl bg-[#1B365D] p-7 text-center shadow-xl sm:p-10">

              <img
                src={images.panel}
                alt="Natural flowing water"
                className="contact-panel-image absolute inset-0 h-full w-full object-cover opacity-30"
              />

              <div className="absolute inset-0 bg-gradient-to-b from-[#1B365D]/85 to-[#102746]/90" />

              <div className="relative z-10">

                <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-2xl bg-[#F59E0B] text-2xl text-[#1B365D] shadow-lg">
                  <FaBuilding />
                </div>

                <h3 className="mt-7 text-2xl font-extrabold text-white sm:text-3xl">
                  Get In Touch With Our Team
                </h3>

                <p className="mx-auto mt-5 max-w-md text-sm leading-8 text-slate-300">
                  We are always open to new ideas, meaningful
                  conversations, business opportunities, and
                  professional collaborations.
                </p>

                <div className="mt-10 space-y-8">

                  {benefits.map((item, index) => (
                    <div
                      key={index}
                      className="flex flex-col items-center"
                    >

                      <div className="flex h-11 w-11 items-center justify-center rounded-full border border-[#F59E0B]/30 bg-white/10 text-[#F59E0B]">
                        <FaCheckCircle />
                      </div>

                      <h4 className="mt-3 font-bold text-white">
                        {item.title}
                      </h4>

                      <p className="mt-2 text-sm leading-6 text-slate-300">
                        {item.text}
                      </p>

                    </div>
                  ))}

                </div>

              </div>

              {/* Social media */}

              <div className="relative z-10 mt-12 border-t border-white/20 pt-8">

                <p className="text-sm font-bold text-white">
                  Connect With Us
                </p>

                <div className="mt-5 flex justify-center gap-4">

                  {socialLinks.map((item, index) => (
                    <a
                      key={index}
                      href={item.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label={item.label}
                      className="flex h-12 w-12 items-center justify-center rounded-xl border border-white/20 text-white transition-all duration-300 hover:-translate-y-2 hover:border-[#F59E0B] hover:bg-[#F59E0B] hover:text-[#1B365D]"
                    >
                      {item.icon}
                    </a>
                  ))}

                </div>

              </div>

            </div>

            {/* RIGHT FORM PANEL */}

            <div className="rounded-2xl border border-slate-200 bg-white p-6 shadow-[0_15px_60px_rgba(15,23,42,0.08)] sm:p-9">

              <div className="mb-8 border-b border-slate-100 pb-6 text-center">

                <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-xl bg-[#1B365D] text-xl text-[#F59E0B]">
                  <FaPaperPlane />
                </div>

                <h3 className="mt-5 text-xl font-extrabold text-[#1B365D]">
                  Send An Inquiry
                </h3>

                <p className="mt-2 text-xs text-slate-500">
                  Fill in the details below.
                </p>

              </div>

              {submitted && (
                <div
                  role="status"
                  aria-live="polite"
                  className="mb-6 flex items-center justify-center gap-3 rounded-xl border border-emerald-200 bg-emerald-50 p-4 text-center text-sm font-semibold text-emerald-700"
                >
                  <FaCheckCircle className="shrink-0" />
                  Your message has been submitted successfully!
                </div>
              )}

              <form onSubmit={handleSubmit} className="space-y-5">

                {/* Name and email */}

                <div className="grid gap-5 sm:grid-cols-2">

                  <div>
                    <label
                      htmlFor="contact-name"
                      className="mb-2 block text-sm font-semibold text-[#1B365D]"
                    >
                      Full Name <span className="text-red-500">*</span>
                    </label>

                    <input
                      id="contact-name"
                      type="text"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      placeholder="Enter your full name"
                      autoComplete="name"
                      required
                      className="contact-input w-full rounded-lg border border-slate-200 bg-[#F8FAFC] px-4 py-3 text-sm outline-none"
                    />
                  </div>

                  <div>
                    <label
                      htmlFor="contact-email"
                      className="mb-2 block text-sm font-semibold text-[#1B365D]"
                    >
                      Email Address <span className="text-red-500">*</span>
                    </label>

                    <input
                      id="contact-email"
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      placeholder="Enter your email"
                      autoComplete="email"
                      required
                      className="contact-input w-full rounded-lg border border-slate-200 bg-[#F8FAFC] px-4 py-3 text-sm outline-none"
                    />
                  </div>

                </div>

                {/* Phone and subject */}

                <div className="grid gap-5 sm:grid-cols-2">

                  <div>
                    <label
                      htmlFor="contact-phone"
                      className="mb-2 block text-sm font-semibold text-[#1B365D]"
                    >
                      Phone Number
                    </label>

                    <input
                      id="contact-phone"
                      type="tel"
                      name="phone"
                      value={formData.phone}
                      onChange={handleChange}
                      placeholder="+977 98XXXXXXXX"
                      autoComplete="tel"
                      className="contact-input w-full rounded-lg border border-slate-200 bg-[#F8FAFC] px-4 py-3 text-sm outline-none"
                    />
                  </div>

                  <div>
                    <label
                      htmlFor="contact-subject"
                      className="mb-2 block text-sm font-semibold text-[#1B365D]"
                    >
                      Subject <span className="text-red-500">*</span>
                    </label>

                    <select
                      id="contact-subject"
                      name="subject"
                      value={formData.subject}
                      onChange={handleChange}
                      required
                      className="contact-input w-full rounded-lg border border-slate-200 bg-[#F8FAFC] px-4 py-3 text-sm text-slate-600 outline-none"
                    >
                      <option value="">Select a subject</option>
                      <option value="General Inquiry">General Inquiry</option>
                      <option value="Project Information">Project Information</option>
                      <option value="Business Partnership">Business Partnership</option>
                      <option value="Investment Inquiry">Investment Inquiry</option>
                      <option value="Career Opportunity">Career Opportunity</option>
                      <option value="Other">Other</option>
                    </select>
                  </div>

                </div>

                {/* Message */}

                <div>
                  <label
                    htmlFor="contact-message"
                    className="mb-2 block text-sm font-semibold text-[#1B365D]"
                  >
                    Your Message <span className="text-red-500">*</span>
                  </label>

                  <textarea
                    id="contact-message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    rows={5}
                    placeholder="Write your message here..."
                    required
                    className="contact-input w-full resize-y rounded-lg border border-slate-200 bg-[#F8FAFC] px-4 py-3 text-sm outline-none"
                  />
                </div>

                {/* Submit button */}

                <button
                  type="submit"
                  className="group flex w-full items-center justify-center gap-3 rounded-lg bg-[#1B365D] px-6 py-4 text-sm font-bold text-white shadow-md transition-all duration-300 hover:-translate-y-1 hover:bg-[#F59E0B] hover:text-[#1B365D]"
                >
                  Submit Message

                  <FaArrowRight className="transition-transform duration-300 group-hover:translate-x-2" />
                </button>

                <p className="text-center text-xs leading-6 text-slate-400">
                  Your information will be used only to respond to your inquiry.
                </p>

              </form>

            </div>

          </div>
        </div>
      </section>

      {/* =====================================
          LOCATION SECTION
      ===================================== */}

      <section className="bg-[#F8FAFC] px-5 py-20 sm:px-10 lg:px-16">

        <div className="mx-auto max-w-[1440px]">

          <div className="mb-10 text-center">

            <span className="text-xs font-extrabold uppercase tracking-[3px] text-[#F59E0B]">
              Find Us
            </span>

            <h2 className="mt-4 text-3xl font-extrabold text-[#1B365D] sm:text-4xl lg:text-5xl">
              Visit Our Office
            </h2>

            <div className="mx-auto mt-5 h-[3px] w-16 rounded-full bg-[#F59E0B]" />

            <p className="mx-auto mt-5 max-w-xl text-sm leading-8 text-slate-500">
              We would be delighted to welcome you.
              Find our location and plan your visit.
            </p>

            <div className="mt-5 flex items-center justify-center gap-3 text-sm font-semibold text-[#1B365D]">
              <FaMapMarkerAlt className="text-[#F59E0B]" />
              Kathmandu, Nepal
            </div>

          </div>

          <div className="overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-lg">

            <iframe
              title="Kathmandu Nepal Map"
              src="https://maps.google.com/maps?q=Kathmandu%2C%20Nepal&t=&z=13&ie=UTF8&iwloc=&output=embed"
              width="100%"
              height="420"
              style={{ border: 0 }}
              loading="lazy"
              allowFullScreen
              referrerPolicy="no-referrer-when-downgrade"
            />

          </div>

        </div>
      </section>

      {/* =====================================
          FINAL CALL TO ACTION
      ===================================== */}

      <section className="relative overflow-hidden bg-[#1B365D] px-5 py-20 text-center sm:px-10 lg:px-16">

        <div className="pointer-events-none absolute -right-20 -top-28 h-72 w-72 rounded-full border-[35px] border-white/5" />

        <div className="pointer-events-none absolute -bottom-32 -left-20 h-72 w-72 rounded-full border-[35px] border-white/5" />

        <div className="relative mx-auto flex max-w-4xl flex-col items-center justify-center">

          <div className="flex items-center justify-center gap-3">
            <FaMountain className="text-[#F59E0B]" />

            <span className="text-xs font-bold uppercase tracking-[3px] text-[#F59E0B]">
              Devdhunga Hydro
            </span>
          </div>

          <h2 className="mt-5 text-2xl font-extrabold text-white sm:text-3xl lg:text-4xl">
            Have Something In Mind?
          </h2>

          <p className="mx-auto mt-4 max-w-xl text-sm leading-8 text-slate-300">
            We welcome your questions, ideas, and opportunities.
            Let's start a conversation today.
          </p>

          <a
            href="mailto:info@devdhungahydro.com"
            className="mt-8 flex items-center justify-center gap-3 rounded-lg bg-[#F59E0B] px-8 py-4 text-sm font-bold text-[#1B365D] transition duration-300 hover:-translate-y-1 hover:bg-white"
          >
            Contact Our Team
            <FaArrowRight />
          </a>

        </div>
      </section>

    </main>
  );
};

export default Contact;
