import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";

import "swiper/css";

const HeroSwiper = () => {
  const SwiperInfo = [
    {
      id: 1,
      text: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Totam, expedita!",
      image:
        "https://images.unsplash.com/photo-1519205971325-7f26dd6e78b0?q=80&w=2581&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    },
    {
      id: 2,
      text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Saepe corporis reiciendis optio, enim ut alias.",
      image:
        "https://images.unsplash.com/photo-1453284441168-8780c9f52097?q=80&w=2670&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    },
    {
      id: 3,
      text: "Lorem ipsum dolor sit amet.",
      image:
        "https://images.unsplash.com/photo-1485368647436-ff0fb9990605?q=80&w=2669&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    },
    {
      id: 4,
      text: "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
      image:
        "https://images.unsplash.com/photo-1490351267196-b7a67e26e41b?q=80&w=1281&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    },
    {
      id: 5,
      text: "Lorem ipsum dolor sit.",
      image:
        "https://images.unsplash.com/photo-1511527661048-7fe73d85e9a4?q=80&w=1365&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    },
    {
      id: 6,
      text: "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
      image:
        "https://images.unsplash.com/photo-1534239697798-120952b76f2b?q=80&w=1289&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    },
    {
      id: 7,
      text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Totam dolor reprehenderit soluta tempore.",
      image:
        "https://images.unsplash.com/photo-1496851473196-e26508c21494?q=80&w=1335&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    },
    {
      id: 8,
      text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatem odit rerum culpa.",
      image:
        "https://images.unsplash.com/photo-1461638189575-2a947ecbf2cb?q=80&w=1306&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    },
    {
      id: 9,
      text: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ipsam, laboriosam.",
      image:
        "https://images.unsplash.com/photo-1522069365959-25716fb5001a?q=80&w=1288&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    },
    {
      id: 10,
      text: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ullam perferendis distinctio.",
      image:
        "https://images.unsplash.com/photo-1535444933152-4c53d0667616?q=80&w=1287&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    },
  ];
  return (
    <Swiper
      spaceBetween={50}
      slidesPerView={1}
      breakpoints={{
        720: {
          slidesPerView: 2,
        },
        1024: {
          slidesPerView: 3,
        },
        1500: {
          slidesPerView: 4,
        },
        2000: {
          slidesPerView: 5,
        },
        2500: {
          slidesPerView: 6,
        },
      }}
      autoplay={{ delay: 3500, disableOnInteraction: false }}
      modules={[Autoplay]}
      className="text-white h-full lg:full flex justify-center items-center text-center"
    >
      {SwiperInfo.map((item) => (
        <SwiperSlide
          key={item.id}
          className="flex hover:border-2 border-amber-400 rounded-sm transition-all duration-200 ease-in-out"
        >
          {/* Container */}
          <div className="h-full group flex flex-col relative">
            <div className="flex flex-col relative h-3/4 group-hover:border-b-2 border-amber-400">
              <Image
                src={item.image}
                alt=""
                fill
                className="object-fit:cover p-[2px] group-hover:p-0 rounded-[8px]"
              />
            </div>
            {/* Text */}
            <p className="flex h-0 group-hover:h-1/4 text-transparent group-hover:text-amber-400 bg-black group-hover:p-2 rounded-b-[8px] justify-center items-center transition-all duration-300 ease-in-out font-bold text-lg">
              {item.text}
            </p>
          </div>
        </SwiperSlide>
      ))}
    </Swiper>
  );
};

export default HeroSwiper;
