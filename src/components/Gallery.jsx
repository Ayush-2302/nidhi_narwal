import React from "react";
import { Autoplay, Pagination, Navigation } from 'swiper/modules';
import { Swiper, SwiperSlide } from "swiper/react";

const Gallery = () => {
  const images = [
    { src: "/n1.jpg", alt: "Image 1" },
    { src: "/n2.jpg", alt: "Image 1" },
    { src: "/n3.jpg", alt: "Image 1" },
    { src: "/n4.jpg", alt: "Image 1" },
    { src: "/n5.jpg", alt: "Image 1" },
  ];

  return (
    <section id="gallery" className="">
      <div className="container mx-auto text-center">
        <h2 className="text-3xl font-semibold mb-6">Gallery</h2>

        <Swiper
          spaceBetween={10}
          modules={[Autoplay]}
          slidesPerView={1}
          breakpoints={{
            640: {
              slidesPerView: 2,
            },
            1024: {
              slidesPerView: 3,
            },
          }}
          autoplay={{
            delay: 2000,
            disableOnInteraction: false,
          }}

          className="swiper-container"
        >
          {images.map((image, index) => (
            <SwiperSlide key={index} className="relative">
              <img
                src={image.src}
                alt={image.alt}
                className="w-full h-80 object-cover rounded-lg"
              />
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
};

export default Gallery;
