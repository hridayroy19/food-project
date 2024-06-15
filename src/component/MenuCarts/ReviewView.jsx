import { useEffect, useState } from "react";
import { Navigation, Pagination, Scrollbar, A11y } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";
import Star from "./Start";

const Review = () => {
  const [reviews, setReviews] = useState([]);
  console.log(reviews, "data get");

  useEffect(() => {
    fetch("/review.json")
      .then((res) => {
        if (!res.ok) {
          throw new Error("Network response was not ok");
        }
        return res.json();
      })
      .then((data) => setReviews(data))
      .catch((error) => console.error("Error fetching the data:", error));
  }, []);

  return (
    <div className="mt-8 mb-7  md:mx-5">
      <h2 className="text-center font-semibold text-3xl">Latest User Review</h2>
      <Swiper
        className="w-full mx-auto mt-8"
        modules={[Navigation, Pagination, Scrollbar, A11y]}
        spaceBetween={50}
        navigation
        pagination={{ clickable: true }}
        scrollbar={{ draggable: true }}
        breakpoints={{
          1024: {
            slidesPerView: 4,
          },
          768: {
            slidesPerView: 2,
          },
          640: {
            slidesPerView: 1,
          },
        }}
        onSwiper={(swiper) => console.log(swiper)}
        onSlideChange={() => console.log("slide change")}
      >
        {reviews?.map((review) => (
          <SwiperSlide key={review?.id}>
            <div className="w-[330px] lg:w-[240px]  mx-auto rounded-md md:w-[300px] h-auto lg:h-[250px] flex flex-col justify-between bg-[#FFFFFF] px-5 py-4 shadow-xl">
              <div className="flex items-center mb-4">
                <div>
                  <img
                    className="w-[60px] h-[60px] rounded-full"
                    src="https://i.ibb.co/FnkqcTc/cute-boy-working-on-computer-cartoon-icon-illustration-people-technology-icon-concept-isolated-premi.jpg"
                    alt=""
                  />
                </div>
                <div className="pl-3">
                  <h2 className="font-bold">{review?.name}</h2>
                  <p>{review?.date}</p>
                </div>
              </div>

              <div className="pb-3 mt-3 text-center">
                <p className="text-justify">{review?.comment}</p>
              </div>

              <div className="h-[130px] flex  justify-start mb-1">
                <Star stars={review?.rating}></Star>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default Review;
