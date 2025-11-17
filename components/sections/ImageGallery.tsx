"use client";

import { useState } from 'react';
import Image from 'next/image';
import { motion, AnimatePresence } from 'framer-motion';
import { HiChevronLeft, HiChevronRight, HiX } from 'react-icons/hi';

type ImageGalleryProps = {
  images: string[];
  title?: string;
};

export const ImageGallery = ({ images, title = 'Gallery' }: ImageGalleryProps) => {
  const [selectedIndex, setSelectedIndex] = useState<number | null>(null);
  const [direction, setDirection] = useState(0);

  if (!images || images.length === 0) return null;

  const goToPrevious = () => {
    setDirection(-1);
    setSelectedIndex((prev) =>
      prev === null ? 0 : prev === 0 ? images.length - 1 : prev - 1
    );
  };

  const goToNext = () => {
    setDirection(1);
    setSelectedIndex((prev) =>
      prev === null ? 0 : prev === images.length - 1 ? 0 : prev + 1
    );
  };

  const openModal = (index: number) => {
    setSelectedIndex(index);
    setDirection(0);
  };

  const closeModal = () => {
    setSelectedIndex(null);
  };

  return (
    <section className="space-y-4">
      <h2 className="text-3xl font-bold border-b pb-2">{title}</h2>

      {/* Thumbnail Grid */}
      <div className="grid grid-cols-2 gap-4 sm:grid-cols-3 md:grid-cols-4">
        {images.map((image, index) => (
          <motion.button
            key={index}
            onClick={() => openModal(index)}
            className="relative h-24 overflow-hidden rounded-lg border border-border bg-secondary shadow-sm transition hover:shadow-md focus:outline-none focus:ring-2 focus:ring-primary"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <Image
              src={image}
              alt={`Gallery image ${index + 1}`}
              fill
              className="object-cover"
              sizes="(max-width: 640px) 50vw, (max-width: 768px) 33vw, 25vw"
            />
          </motion.button>
        ))}
      </div>

      {/* Modal */}
      <AnimatePresence>
        {selectedIndex !== null && (
          <motion.div
            key="modal-backdrop"
            className="fixed inset-0 z-50 flex items-center justify-center bg-black/80 backdrop-blur-sm"
            onClick={closeModal}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          >
            {/* Modal Content */}
            <motion.div
              className="relative max-h-[90vh] max-w-4xl w-full mx-4"
              onClick={(e) => e.stopPropagation()}
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              transition={{ type: 'spring', damping: 25, stiffness: 300 }}
            >
              {/* Image */}
              <div className="relative h-[60vh] overflow-hidden rounded-lg">
                <AnimatePresence mode="wait">
                  <motion.div
                    key={selectedIndex}
                    initial={{ opacity: 0, x: direction * 100 }}
                    animate={{ opacity: 1, x: 0 }}
                    exit={{ opacity: 0, x: -direction * 100 }}
                    transition={{ duration: 0.3 }}
                    className="absolute inset-0"
                  >
                    <Image
                      src={images[selectedIndex]}
                      alt={`Gallery preview ${selectedIndex + 1}`}
                      fill
                      className="object-contain"
                      priority
                      sizes="100vw"
                    />
                  </motion.div>
                </AnimatePresence>
              </div>

              {/* Navigation Buttons */}
              <button
                onClick={goToPrevious}
                className="absolute left-2 top-1/2 z-10 -translate-y-1/2 rounded-full bg-white/20 p-2 transition hover:bg-white/40 focus:outline-none focus:ring-2 focus:ring-primary"
                aria-label="Previous image"
              >
                <HiChevronLeft className="h-6 w-6 text-white" />
              </button>

              <button
                onClick={goToNext}
                className="absolute right-2 top-1/2 z-10 -translate-y-1/2 rounded-full bg-white/20 p-2 transition hover:bg-white/40 focus:outline-none focus:ring-2 focus:ring-primary"
                aria-label="Next image"
              >
                <HiChevronRight className="h-6 w-6 text-white" />
              </button>

              {/* Close Button */}
              <button
                onClick={closeModal}
                className="absolute right-2 top-2 z-10 rounded-full bg-white/20 p-2 transition hover:bg-white/40 focus:outline-none focus:ring-2 focus:ring-primary"
                aria-label="Close modal"
              >
                <HiX className="h-6 w-6 text-white" />
              </button>

              {/* Image Counter */}
              <div className="absolute bottom-2 left-1/2 -translate-x-1/2 rounded-full bg-black/50 px-4 py-2 text-sm text-white">
                {selectedIndex + 1} / {images.length}
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
};
