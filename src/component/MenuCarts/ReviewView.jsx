import { useEffect, useState } from "react";
import { Navigation, Pagination, Scrollbar, A11y } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";

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
    <div className="mt-8 mb-7 md:mx-5">
      <h2 className="text-center font-semibold text-3xl">Latest User Review</h2>
      <Swiper
        className="lg:max-w-7xl lg:mx-auto mt-8"
        modules={[Navigation, Pagination, Scrollbar, A11y]}
        spaceBetween={50}
        navigation
        pagination={{ clickable: true }}
        scrollbar={{ draggable: true }}
        breakpoints={{
          1024: {
            slidesPerView: 3,
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
            <div className="w-[375px] mx-auto rounded-md md:w-[360px] h-[300px] lg:h-[350px] flex flex-col justify-between bg-[#FFFFFF] px-5 py-4 shadow-xl">
              {/* icon and text  */}
              <div className="pb-3">
                <p className="text-justify">{review?.comment}</p>
              </div>

              {/* star and data  */}
              <div className=" h-[130px]">
                <div className="py-2 ">
                  <p> start</p>
                </div>

                <div className="border-b-2 mb-4"></div>

                <div className="flex items-center">
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
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default Review;
