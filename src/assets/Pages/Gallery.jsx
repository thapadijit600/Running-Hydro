
import { useEffect, useMemo, useState, useCallback } from "react";
import { Link } from "react-router-dom";

import {
  FaArrowRight,
  FaTimes,
  FaChevronLeft,
  FaChevronRight,
  FaExpand,
  FaImages,
  FaWater,
  FaLeaf,
  FaHardHat,
  FaBuilding,
  FaCamera,
} from "react-icons/fa";

const galleryImages = [
  {
    id: 1,
    title: "Hydropower Development",
    category: "Hydropower",
    location: "Nepal",
    image:
      "https://images.unsplash.com/photo-1432405972618-c60b0225b8f9?auto=format&fit=crop&w=1200&q=95",
  },
  {
    id: 2,
    title: "Mountain Water Resources",
    category: "Nature",
    location: "Nepal",
    image:
      "https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?auto=format&fit=crop&w=1000&q=95",
  },
  {
    id: 3,
    title: "Modern Infrastructure",
    category: "Infrastructure",
    location: "Nepal",
    image:
      "https://images.unsplash.com/photo-1518005020951-eccb494ad742?auto=format&fit=crop&w=1000&q=95",
  },
  {
    id: 4,
    title: "River and Natural Landscape",
    category: "Nature",
    location: "Nepal",
    image:
      "https://images.unsplash.com/photo-1501785888041-af3ef285b470?auto=format&fit=crop&w=1200&q=95",
  },
  {
    id: 5,
    title: "Engineering and Construction",
    category: "Projects",
    location: "Nepal",
    image:
      "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&w=1000&q=95",
  },
  {
    id: 6,
    title: "Clean Energy Development",
    category: "Hydropower",
    location: "Nepal",
    image:
      "https://images.unsplash.com/photo-1473341304170-971dccb5ac1e?auto=format&fit=crop&w=1200&q=95",
  },
  {
    id: 7,
    title: "Sustainable Mountain Environment",
    category: "Nature",
    location: "Nepal",
    image:
      "https://images.unsplash.com/photo-1470770841072-f978cf4d019e?auto=format&fit=crop&w=1000&q=95",
  },
  {
    id: 8,
    title: "Infrastructure Development",
    category: "Infrastructure",
    location: "Nepal",
    image:
      "https://images.unsplash.com/photo-1541888946425-d81bb19240f5?auto=format&fit=crop&w=1000&q=95",
  },
  {
    id: 9,
    title: "Renewable Energy Landscape",
    category: "Projects",
    location: "Nepal",
    image:
      "https://images.unsplash.com/photo-1466611653911-95081537e5b7?auto=format&fit=crop&w=1200&q=95",
  },
  {
    id: 10,
    title: "Solar Energy Infrastructure",
    category: "Projects",
    location: "Nepal",
    image:
      "https://images.unsplash.com/photo-1509391366360-2e959784a276?auto=format&fit=crop&w=1200&q=95",
  },
];

const categories = [
  "All",
  "Projects",
  "Hydropower",
  "Infrastructure",
  "Nature",
];

const categoryIcons = {
  Projects: FaImages,
  Hydropower: FaWater,
  Infrastructure: FaHardHat,
  Nature: FaLeaf,
};

const SectionHeading = ({ eyebrow, title, description }) => (
  <div className="mx-auto mb-10 text-center">
    <div className="mb-4 flex items-center justify-center gap-3">
      <span className="h-[2px] w-9 bg-[#F59E0B]" />

      <span className="text-xs font-bold uppercase tracking-[3px] text-[#F59E0B]">
        {eyebrow}
      </span>

      <span className="h-[2px] w-9 bg-[#F59E0B]" />
    </div>

    <h2 className="text-3xl font-extrabold leading-tight text-[#1B365D] sm:text-4xl lg:text-[42px]">
      {title}
    </h2>

    {description && (
      <p className="mx-auto mt-4 max-w-2xl text-sm leading-7 text-slate-500 sm:text-base">
        {description}
      </p>
    )}
  </div>
);

const Gallery = () => {
  const [activeCategory, setActiveCategory] = useState("All");
  const [selectedImage, setSelectedImage] = useState(null);

  const filteredImages = useMemo(() => {
    if (activeCategory === "All") return galleryImages;

    return galleryImages.filter(
      (image) => image.category === activeCategory
    );
  }, [activeCategory]);

  const selectedIndex = filteredImages.findIndex(
    (image) => image.id === selectedImage?.id
  );

  const showNextImage = useCallback(() => {
    if (!filteredImages.length) return;

    const nextIndex =
      selectedIndex === filteredImages.length - 1
        ? 0
        : selectedIndex + 1;

    setSelectedImage(filteredImages[nextIndex]);
  }, [filteredImages, selectedIndex]);

  const showPreviousImage = useCallback(() => {
    if (!filteredImages.length) return;

    const previousIndex =
      selectedIndex <= 0
        ? filteredImages.length - 1
        : selectedIndex - 1;

    setSelectedImage(filteredImages[previousIndex]);
  }, [filteredImages, selectedIndex]);

  const closeLightbox = useCallback(() => {
    setSelectedImage(null);
  }, []);

  useEffect(() => {
    if (!selectedImage) return;

    const handleKeyDown = (event) => {
      if (event.key === "Escape") closeLightbox();
      if (event.key === "ArrowRight") showNextImage();
      if (event.key === "ArrowLeft") showPreviousImage();
    };

    const previousOverflow = document.body.style.overflow;

    document.addEventListener("keydown", handleKeyDown);
    document.body.style.overflow = "hidden";

    return () => {
      document.removeEventListener("keydown", handleKeyDown);
      document.body.style.overflow = previousOverflow;
    };
  }, [
    selectedImage,
    closeLightbox,
    showNextImage,
    showPreviousImage,
  ]);

  useEffect(() => {
    closeLightbox();
  }, [activeCategory, closeLightbox]);

  return (
    <main className="gallery-page min-h-screen overflow-hidden bg-white">

      <style>{`
        /* HERO IMAGE MOVEMENT */

        @keyframes galleryHeroMovement {
          0% {
            transform: scale(1.05) translate3d(0, 0, 0);
          }

          50% {
            transform: scale(1.15) translate3d(-1%, -1%, 0);
          }

          100% {
            transform: scale(1.05) translate3d(0, 0, 0);
          }
        }

        /* GALLERY IMAGE MOVEMENT */

        @keyframes galleryImageMovement {
          0% {
            transform: scale(1.03) translate3d(0, 0, 0);
          }

          50% {
            transform: scale(1.09) translate3d(-0.6%, -0.5%, 0);
          }

          100% {
            transform: scale(1.03) translate3d(0, 0, 0);
          }
        }

        /* TEXT ANIMATION */

        @keyframes galleryFadeUp {
          from {
            opacity: 0;
            transform: translateY(25px);
          }

          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        /* LIGHTBOX ANIMATION */

        @keyframes galleryLightboxIn {
          from {
            opacity: 0;
            transform: translateY(20px) scale(0.97);
          }

          to {
            opacity: 1;
            transform: translateY(0) scale(1);
          }
        }

        @keyframes galleryImageReveal {
          from {
            opacity: 0;
            transform: scale(0.94);
          }

          to {
            opacity: 1;
            transform: scale(1);
          }
        }

        .gallery-fade-up {
          animation: galleryFadeUp 0.8s ease-out both;
        }

        .gallery-fade-up-delay-1 {
          animation: galleryFadeUp 0.8s ease-out 0.12s both;
        }

        .gallery-fade-up-delay-2 {
          animation: galleryFadeUp 0.8s ease-out 0.24s both;
        }

        /* BRIGHTER HERO IMAGE */

        .gallery-hero-image {
          opacity: 0.88;
          filter: brightness(1.18) saturate(1.1);
          animation: galleryHeroMovement 24s ease-in-out infinite;
          will-change: transform;
        }

        /* BRIGHTER GALLERY IMAGES */

        .gallery-image {
          opacity: 0.9;
          filter: brightness(1.13) contrast(1.03) saturate(1.1);
          animation: galleryImageMovement 16s ease-in-out infinite;
          will-change: transform, opacity;
        }

        .gallery-card:hover .gallery-image,
        .gallery-card:focus-visible .gallery-image {
          opacity: 1;
          animation-play-state: paused;
          transform: scale(1.12);
          filter: brightness(1.2) saturate(1.12);
        }

        .gallery-lightbox-in {
          animation: galleryLightboxIn 0.4s ease-out both;
        }

        .gallery-lightbox-image {
          animation: galleryImageReveal 0.55s ease-out both;
          filter: brightness(1.08) saturate(1.06);
        }

        .gallery-card {
          transform: translateZ(0);
          transition:
            box-shadow 0.4s ease,
            border-color 0.4s ease;
        }

        .gallery-card:hover {
          box-shadow: 0 18px 40px rgba(15, 23, 42, 0.18);
        }

        .gallery-filter {
          transition:
            background 0.3s ease,
            color 0.3s ease,
            border-color 0.3s ease,
            transform 0.3s ease;
        }

        .gallery-filter:hover {
          transform: translateY(-2px);
        }

        @media (max-width: 640px) {
          .gallery-hero-image {
            animation-duration: 30s;
          }

          .gallery-image {
            animation-duration: 20s;
          }
        }

        @media (prefers-reduced-motion: reduce) {
          .gallery-page *,
          .gallery-page *::before,
          .gallery-page *::after {
            animation: none !important;
            transition-duration: 0.01ms !important;
          }

          .gallery-image,
          .gallery-hero-image {
            transform: none !important;
          }
        }
      `}</style>

      {/* HERO SECTION */}

      <section className="relative flex min-h-[390px] items-center justify-center overflow-hidden bg-[#102744] sm:min-h-[450px] lg:min-h-[500px]">

        <div
          className="gallery-hero-image absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage:
              "url('https://images.unsplash.com/photo-1509391366360-2e959784a276?auto=format&fit=crop&w=2000&q=95')",
          }}
        />

        <div className="absolute inset-0 bg-gradient-to-r from-[#102744]/50 via-[#1B365D]/25 to-[#102744]/5" />

        <div className="absolute inset-0 bg-gradient-to-t from-[#102744]/25 via-transparent to-[#102744]/5" />

        <div className="relative z-10 mx-auto w-full max-w-5xl px-5 py-20 text-center sm:px-8 lg:px-10">

          <div className="gallery-fade-up mb-6 flex items-center justify-center gap-3">

            <span className="h-[2px] w-10 bg-[#F59E0B]" />

            <span className="text-xs font-bold uppercase tracking-[3px] text-[#FBBF24] sm:text-sm">
              Our Gallery
            </span>

            <span className="h-[2px] w-10 bg-[#F59E0B]" />

          </div>

          <h1 className="gallery-fade-up-delay-1 text-4xl font-extrabold leading-tight text-white sm:text-5xl lg:text-6xl">
            Moments That

            <span className="block text-[#F59E0B]">
              Build Our Future.
            </span>
          </h1>

          <p className="gallery-fade-up-delay-2 mx-auto mt-6 max-w-2xl text-sm leading-7 text-white sm:text-base sm:leading-8">
            Explore our collection of project inspiration, engineering,
            infrastructure, hydropower development, and the natural beauty
            that motivates our commitment to a sustainable future.
          </p>

          <div className="gallery-fade-up-delay-2 mt-8 flex flex-wrap items-center justify-center gap-4">

            <a
              href="#gallery-content"
              className="inline-flex items-center gap-3 rounded-lg bg-[#F59E0B] px-6 py-3.5 text-sm font-bold text-[#102744] shadow-lg transition duration-300 hover:-translate-y-1 hover:bg-white"
            >
              Explore Gallery
              <FaArrowRight />
            </a>

            <Link
              to="/projects"
              className="inline-flex items-center gap-2 rounded-lg border border-white/60 px-6 py-3.5 text-sm font-semibold text-white transition duration-300 hover:border-[#F59E0B] hover:bg-white/15"
            >
              Our Projects
            </Link>

          </div>
        </div>

        <div className="absolute bottom-0 left-0 h-1 w-full bg-white/20">
          <div className="h-full w-28 bg-[#F59E0B]" />
        </div>

      </section>

      {/* INTRODUCTION */}

      <section className="border-b border-slate-100 bg-[#F8FAFC]">

        <div className="mx-auto grid max-w-7xl grid-cols-1 divide-y divide-slate-200 px-5 py-7 sm:grid-cols-3 sm:divide-x sm:divide-y-0 sm:px-8 lg:px-10">

          {[
            {
              icon: FaCamera,
              title: "Our Journey",
              subtitle: "Capturing every milestone",
            },
            {
              icon: FaWater,
              title: "Clean Energy",
              subtitle: "Inspired by natural resources",
            },
            {
              icon: FaBuilding,
              title: "Development",
              subtitle: "Building for generations",
            },
          ].map((item) => (
            <div
              key={item.title}
              className="flex items-center justify-center gap-4 px-4 py-5 sm:py-2"
            >

              <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-[#1B365D] text-lg text-[#F59E0B]">
                <item.icon />
              </div>

              <div>
                <h3 className="text-sm font-bold text-[#1B365D]">
                  {item.title}
                </h3>

                <p className="mt-1 text-xs text-slate-500">
                  {item.subtitle}
                </p>
              </div>

            </div>
          ))}

        </div>
      </section>

      {/* GALLERY SECTION */}

      <section
        id="gallery-content"
        className="scroll-mt-24 px-5 py-16 sm:px-8 sm:py-20 lg:px-10 lg:py-24"
      >

        <div className="mx-auto max-w-7xl">

          <SectionHeading
            eyebrow="Visual Stories"
            title="Explore Our Gallery"
            description="A closer look at the places, ideas, and development that inspire our vision for sustainable energy and infrastructure."
          />

          {/* CATEGORY FILTERS */}

          <div className="mb-10 flex flex-wrap items-center justify-center gap-2.5 sm:gap-3">

            {categories.map((category) => {
              const Icon = categoryIcons[category];

              return (
                <button
                  key={category}
                  type="button"
                  onClick={() => setActiveCategory(category)}
                  aria-pressed={activeCategory === category}
                  className={`gallery-filter inline-flex items-center gap-2 rounded-lg border px-4 py-2.5 text-xs font-bold sm:px-5 sm:text-sm ${
                    activeCategory === category
                      ? "border-[#1B365D] bg-[#1B365D] text-white shadow-md"
                      : "border-slate-200 bg-white text-slate-600 hover:border-[#F59E0B] hover:text-[#1B365D]"
                  }`}
                >
                  {Icon && (
                    <Icon className="text-sm text-[#F59E0B]" />
                  )}

                  {category}
                </button>
              );
            })}

          </div>

          {/* IMAGE COUNT */}

          <div className="mb-5 flex flex-wrap items-center justify-between gap-3">

            <div>
              <h3 className="text-lg font-bold text-[#1B365D]">
                {activeCategory === "All"
                  ? "All Photographs"
                  : `${activeCategory} Collection`}
              </h3>

              <p className="mt-1 text-xs text-slate-500">
                Discover our visual collection
              </p>
            </div>

            <span className="rounded-full bg-[#F1F5F9] px-4 py-2 text-xs font-bold text-[#1B365D]">
              {filteredImages.length} Images
            </span>

          </div>

          {/* RESPONSIVE GALLERY GRID */}

          <div className="grid auto-rows-[220px] grid-cols-1 gap-4 sm:auto-rows-[230px] sm:grid-cols-2 lg:auto-rows-[250px] lg:grid-cols-3 xl:gap-5">

            {filteredImages.map((item, index) => (
              <button
                key={item.id}
                type="button"
                onClick={() => setSelectedImage(item)}
                aria-label={`Open image: ${item.title}`}
                className={`gallery-card group relative min-h-0 overflow-hidden rounded-xl bg-slate-200 text-left outline-none focus-visible:ring-4 focus-visible:ring-[#F59E0B]/60 ${
                  activeCategory === "All" &&
                  (index === 0 || index === 5)
                    ? "sm:col-span-2"
                    : ""
                }`}
              >

                <img
                  src={item.image}
                  alt={item.title}
                  loading="lazy"
                  decoding="async"
                  className="gallery-image h-full w-full object-cover transition duration-700"
                />

                <div className="absolute inset-0 bg-gradient-to-t from-[#0F172A]/50 via-[#0F172A]/0 to-transparent transition duration-300 group-hover:from-[#0F172A]/65" />

                <div className="absolute left-5 top-5">

                  <span className="rounded-md border border-white/30 bg-[#1B365D]/65 px-3 py-1.5 text-[10px] font-bold uppercase tracking-wider text-[#FBBF24] backdrop-blur-sm">
                    {item.category}
                  </span>

                </div>

                <div className="absolute bottom-0 left-0 flex w-full items-end justify-between gap-3 p-5">

                  <div className="min-w-0">

                    <p className="mb-2 flex items-center gap-2 text-xs font-medium text-white">
                      <span className="h-1.5 w-1.5 rounded-full bg-[#F59E0B]" />
                      {item.location}
                    </p>

                    <h3 className="text-lg font-bold text-white sm:text-xl">
                      {item.title}
                    </h3>

                  </div>

                  <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-[#F59E0B] text-[#1B365D] transition duration-300 group-hover:rotate-45 group-hover:bg-white">
                    <FaExpand />
                  </span>

                </div>

              </button>
            ))}

          </div>

          {filteredImages.length === 0 && (
            <div className="rounded-xl border border-slate-200 bg-slate-50 py-16 text-center">

              <FaImages className="mx-auto mb-4 text-4xl text-slate-300" />

              <h3 className="text-lg font-bold text-[#1B365D]">
                No Images Found
              </h3>

              <p className="mt-2 text-sm text-slate-500">
                Please select another category.
              </p>

            </div>
          )}

        </div>
      </section>

      {/* CTA SECTION */}

      <section className="relative overflow-hidden bg-[#1B365D] px-5 py-16 sm:px-8 lg:px-10 lg:py-20">

        <div className="absolute -right-24 -top-24 h-72 w-72 rounded-full border-[35px] border-white/5" />

        <div className="absolute -bottom-28 -left-20 h-72 w-72 rounded-full border-[35px] border-[#F59E0B]/10" />

        <div className="relative z-10 mx-auto flex max-w-7xl flex-col items-center justify-between gap-8 text-center lg:flex-row lg:text-left">

          <div className="max-w-2xl">

            <span className="text-xs font-bold uppercase tracking-[3px] text-[#FBBF24]">
              Building A Better Tomorrow
            </span>

            <h2 className="mt-4 text-3xl font-extrabold leading-tight text-white sm:text-4xl">
              Inspired By Progress.

              <span className="block text-[#F59E0B]">
                Committed To Sustainability.
              </span>
            </h2>

            <p className="mt-4 text-sm leading-7 text-slate-300 sm:text-base">
              Discover more about our company, our projects, and our vision
              for sustainable energy development.
            </p>

          </div>

          <div className="flex w-full flex-col gap-3 sm:w-auto sm:flex-row">

            <Link
              to="/about"
              className="inline-flex items-center justify-center gap-3 rounded-lg bg-[#F59E0B] px-7 py-4 text-sm font-bold text-[#102744] transition duration-300 hover:-translate-y-1 hover:bg-white"
            >
              About Our Company
              <FaArrowRight />
            </Link>

            <Link
              to="/contact"
              className="inline-flex items-center justify-center rounded-lg border border-white/30 px-7 py-4 text-sm font-bold text-white transition duration-300 hover:border-[#F59E0B] hover:bg-white/10"
            >
              Contact Us
            </Link>

          </div>

        </div>
      </section>

      {/* LIGHTBOX */}

      {selectedImage && (
        <div
          className="fixed inset-0 z-[100] flex items-center justify-center bg-[#020617]/95 p-3 backdrop-blur-sm sm:p-6"
          role="dialog"
          aria-modal="true"
          aria-label="Gallery image viewer"
          onMouseDown={(event) => {
            if (event.target === event.currentTarget) {
              closeLightbox();
            }
          }}
        >

          {/* CLOSE BUTTON */}

          <button
            type="button"
            onClick={closeLightbox}
            aria-label="Close image viewer"
            className="absolute right-4 top-4 z-30 flex h-11 w-11 items-center justify-center rounded-full border border-white/20 bg-white/10 text-xl text-white transition hover:bg-[#F59E0B] hover:text-[#1B365D] sm:right-8 sm:top-8"
          >
            <FaTimes />
          </button>

          {/* IMAGE COUNTER */}

          <div className="absolute left-4 top-5 z-20 text-xs font-semibold text-white/80 sm:left-8 sm:top-8">
            {selectedIndex + 1} / {filteredImages.length}
          </div>

          {/* PREVIOUS BUTTON */}

          {filteredImages.length > 1 && (
            <button
              type="button"
              onClick={showPreviousImage}
              aria-label="Previous image"
              className="absolute left-2 z-20 flex h-10 w-10 items-center justify-center rounded-full bg-white/10 text-white transition hover:bg-[#F59E0B] hover:text-[#1B365D] sm:left-6 sm:h-12 sm:w-12"
            >
              <FaChevronLeft />
            </button>
          )}

          {/* IMAGE AND DETAILS */}

          <div
            key={selectedImage.id}
            className="gallery-lightbox-in flex max-h-[90vh] w-full max-w-5xl flex-col items-center justify-center"
          >

            <div className="flex min-h-0 w-full flex-1 items-center justify-center">

              <img
                src={selectedImage.image}
                alt={selectedImage.title}
                className="gallery-lightbox-image max-h-[72vh] max-w-full rounded-lg object-contain shadow-2xl"
              />

            </div>

            {/* BOTTOM TO TOP TEXT ANIMATION */}

            <div className="mt-5 flex w-full flex-col items-center justify-between gap-3 text-center sm:flex-row sm:text-left">

              <div className="overflow-hidden">

                <span className="gallery-fade-up block text-[10px] font-bold uppercase tracking-[2px] text-[#F59E0B]">
                  {selectedImage.category} · {selectedImage.location}
                </span>

                <h3 className="gallery-fade-up-delay-1 mt-2 text-xl font-bold text-white sm:text-2xl">
                  {selectedImage.title}
                </h3>

              </div>

              <span className="gallery-fade-up-delay-2 text-xs text-slate-400">
                Use your arrow keys to navigate
              </span>

            </div>

          </div>

          {/* NEXT BUTTON */}

          {filteredImages.length > 1 && (
            <button
              type="button"
              onClick={showNextImage}
              aria-label="Next image"
              className="absolute right-2 z-20 flex h-10 w-10 items-center justify-center rounded-full bg-white/10 text-white transition hover:bg-[#F59E0B] hover:text-[#1B365D] sm:right-6 sm:h-12 sm:w-12"
            >
              <FaChevronRight />
            </button>
          )}

        </div>
      )}

    </main>
  );
};

export default Gallery;
