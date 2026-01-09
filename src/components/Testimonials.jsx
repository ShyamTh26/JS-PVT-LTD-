import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import "./css/Testimonials.css";
import { useRef } from "react";

const Testimonials = () => {
    const swiperRef = useRef(null); // Store Swiper instance
    return (
        <section className="test-section">
            {/* Header */}
            <div className="test-header text-center my-6">
                <h1 className="text-3xl font-bold">TESTIMONIALS</h1>
                <p className="test-description text-gray-600">
                    Build Trust And Credibility For A Brand
                </p>
            </div>

            {/* Background & Carousel Container */}
            <div className="test-bg">
                {/* Cards Carousel (Overlay) */}
                <div className="test-carousel">
                    <Swiper
                        modules={[Pagination, Autoplay]}
                        spaceBetween={20}
                        slidesPerView={1}
                        autoplay={{ delay: 3000, disableOnInteraction: false }}
                        pagination={{ clickable: true }}
                        onSwiper={(swiper) => (swiperRef.current = swiper)}
                        className="p-6"
                    >
                        {/* Testimonial Card 1 */}
                        <SwiperSlide>
                            <div
                                className="test-card"
                                onMouseEnter={() => swiperRef.current?.autoplay.stop()}
                                onMouseLeave={() => swiperRef.current?.autoplay.start()}
                            >
                                <div className="test-card-inner">
                                    <p>
                                        "The mentorship and projects here helped me crack my MS interview with confidence!"
                                    </p>
                                    <h3>Aditya Lande</h3>
                                    <p className="test-role">Software Engineer, MS</p>
                                </div>
                            </div>
                        </SwiperSlide>

                        <SwiperSlide>
                            <div
                                className="test-card"
                                onMouseEnter={() => swiperRef.current?.autoplay.stop()}
                                onMouseLeave={() => swiperRef.current?.autoplay.start()}
                            >
                                <div className="test-card-inner">
                                    <p>
                                        "Joining this program was the best decision—I got placed at Turing as a developer!"
                                    </p>
                                    <h3>Yogesh Limbore</h3>
                                    <p className="test-role">Developer, Turing</p>
                                </div>
                            </div>
                        </SwiperSlide>

                        <SwiperSlide>
                            <div
                                className="test-card"
                                onMouseEnter={() => swiperRef.current?.autoplay.stop()}
                                onMouseLeave={() => swiperRef.current?.autoplay.start()}
                            >
                                <div className="test-card-inner">
                                    <p>
                                        "Real-world project exposure made my Accenture technical rounds smooth and easy to clear."
                                    </p>
                                    <h3>Saloni Patale</h3>
                                    <p className="test-role">System Engineer, Accenture</p>
                                </div>
                            </div>
                        </SwiperSlide>

                        <SwiperSlide>
                            <div
                                className="test-card"
                                onMouseEnter={() => swiperRef.current?.autoplay.stop()}
                                onMouseLeave={() => swiperRef.current?.autoplay.start()}
                            >
                                <div className="test-card-inner">
                                    <p>
                                        "I’m thankful for the interview prep sessions—they were crucial in landing my Wipro job!"
                                    </p>
                                    <h3>Yash Adagale</h3>
                                    <p className="test-role">Software Analyst, Wipro</p>
                                </div>
                            </div>
                        </SwiperSlide>

                        <SwiperSlide>
                            <div
                                className="test-card"
                                onMouseEnter={() => swiperRef.current?.autoplay.stop()}
                                onMouseLeave={() => swiperRef.current?.autoplay.start()}
                            >
                                <div className="test-card-inner">
                                    <p>
                                        "The hands-on learning and doubt-clearing sessions helped me get selected at Google."
                                    </p>
                                    <h3>Vishnukant Thakur</h3>
                                    <p className="test-role">Programmer Analyst, Google</p>
                                </div>
                            </div>
                        </SwiperSlide>

                    </Swiper>
                </div>
            </div>
        </section>
    );
};

export default Testimonials;
