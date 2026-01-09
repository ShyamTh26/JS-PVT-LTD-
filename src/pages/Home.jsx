import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
import Testimonials from "../components/Testimonials";
import TechVideo from "../assets/JSTechHub.mp4";
import "./styles/Home.css";

const Home = () => {
    return (
        <>
            <Navbar />

            {/* Video Section */}
            <div className="video-container">
                <video className="tech-video" autoPlay loop muted playsInline>
                    <source src={TechVideo} type="video/mp4" />
                    Your browser does not support the video tag.
                </video>
            </div>

            {/* Services Section */}
            <hr />
            <section id="services">
                <section className="services-section">
                    <div className="service-header">
                        <h1>SERVICES</h1>
                        <p className="service-description">
                            Result-Driven Solutions! <br />
                            What We Provide To Our Valued Customers
                        </p>
                    </div>

                    <div className="services-container">
                        {/* Project Development */}
                        <div className="service-card-01">
                            <div className="service-icon-01">
                                <img className="main-img-01" src="./img/02.png" alt="Project Development" />
                                <img className="hover-im-01" src="./img/01.png" alt="Hover Project Development" />
                            </div>
                            <div className="service-text-01">
                                <h3 className="service-title">Project Development</h3>
                                <p className="service-info-01">Build and manage real-world projects with expert guidance, using the latest industry standards.</p>
                                <a className="service-btn" href="/projectd">Know More</a>
                            </div>
                            <div className="serial_number-01">01</div>
                        </div>

                        {/* Java Internship */}
                        <div className="service-card-02">
                            <div className="service-icon-02">
                                <img className="main-img-02" src="https://cdn-icons-png.flaticon.com/512/226/226777.png" alt="Java Internship" />
                                <img className="hover-im-02" src="https://cdn-icons-png.flaticon.com/512/5968/5968282.png" alt="Hover Java Internship" />
                            </div>
                            <div className="service-text-02">
                                <h3 className="service-title">Java Internship</h3>
                                <p className="service-info-02">Gain hands-on experience in Java, Spring Boot, REST APIs, and database integration.</p>
                                <a className="service-btn" href="/javai">Know More</a>
                            </div>
                            <div className="serial_number-02">02</div>
                        </div>

                        {/* Python Internship */}
                        <div className="service-card-03">
                            <div className="service-icon-03">
                                <img className="main-img-03" src="./img/07.png" alt="Python Internship" />
                                <img className="hover-im-03" src="./img/08.png" alt="Hover Python Internship" />
                            </div>
                            <div className="service-text-03">
                                <h3 className="service-title">Python Internship</h3>
                                <p className="service-info-03">Learn Python with Django, Flask, and real-world applications.</p>
                                <a className="service-btn" href="/pythoni">Know More</a>
                            </div>
                            <div className="serial_number-03">03</div>
                        </div>

                        {/* Full Stack Development */}
                        <div className="service-card-04">
                            <div className="service-icon-04">
                                <img className="main-img-04" src="./img/19.png" alt="Full Stack" />
                                <img className="hover-im-04" src="./img/22.png" alt="Hover Full Stack" />
                            </div>
                            <div className="service-text-04">
                                <h3 className="service-title">Full Stack Development</h3>
                                <p className="service-info-04">Master both frontend & backend technologies with hands-on MERN/MEAN projects.</p>
                                <a className="service-btn" href="/fsd">Know More</a>
                            </div>
                            <div className="serial_number-04">04</div>
                        </div>

                        {/* Frontend Development */}
                        <div className="service-card-05">
                            <div className="service-icon-05">
                                <img className="main-img-05" src="./img/20.png" alt="Frontend Development" />
                                <img className="hover-im-05" src="./img/21.png" alt="Hover Frontend Development" />
                            </div>
                            <div className="service-text-05">
                                <h3 className="service-title">Frontend Development</h3>
                                <p className="service-info-05">Develop dynamic and responsive UIs using React, Angular, and Vue.js.</p>
                                <a className="service-btn" href="/fed">Know More</a>
                            </div>
                            <div className="serial_number-05">05</div>
                        </div>

                        {/* Backend Development */}
                        <div className="service-card-06">
                            <div className="service-icon-06">
                                <img className="main-img-06" src="./img/09.png" alt="Backend Development" />
                                <img className="hover-im-06" src="./img/10.png" alt="Hover Backend Development" />
                            </div>
                            <div className="service-text-06">
                                <h3 className="service-title">Backend Development</h3>
                                <p className="service-info-06">Learn backend development using Node.js, Java Spring Boot, and databases.</p>
                                <a className="service-btn" href="/bed">Know More</a>
                            </div>
                            <div className="serial_number-06">06</div>
                        </div>

                        {/* Placement Assistance */}
                        <div className="service-card-07">
                            <div className="service-icon-07">
                                <img className="main-img-07" src="./img/11.png" alt="Placement Assistance" />
                                <img className="hover-im-07" src="./img/12.png" alt="Hover Placement Assistance" />
                            </div>
                            <div className="service-text-07">
                                <h3 className="service-title">Placement Assistance</h3>
                                <p className="service-info-07">Get career guidance, resume building, and interview preparation.</p>
                                <a className="service-btn" href="/pa">Know More</a>
                            </div>
                            <div className="serial_number-07">07</div>
                        </div>

                        {/* Personality Development */}
                        <div className="service-card-08">
                            <div className="service-icon-08">
                                <img className="main-img-08" src="./img/13.png" alt="Personality Development" />
                                <img className="hover-im-08" src="./img/14.png" alt="Hover Personality Development" />
                            </div>
                            <div className="service-text-08">
                                <h3 className="service-title">Personality Development</h3>
                                <p className="service-info-08">Enhance your confidence, communication, and leadership skills.</p>
                                <a className="service-btn" href="/pd">Know More</a>
                            </div>
                            <div className="serial_number-08">08</div>
                        </div>

                        {/* Interactive Sessions */}
                        <div className="service-card-09">
                            <div className="service-icon-09">
                                <img className="main-img-09" src="./img/15.png" alt="Interactive Sessions" />
                                <img className="hover-im-09" src="./img/16.png" alt="Hover Interactive Sessions" />

                            </div>
                            <div className="service-text-09">
                                <h3 className="service-title">Interactive Sessions</h3>
                                <p className="service-info-09">Join live Q&A, doubt clearing, and expert mentoring sessions.</p>
                                <a className="service-btn" href="/is">Know More</a>
                            </div>
                            <div className="serial_number-09">09</div>
                        </div>

                        {/* Project Management */}
                        <div className="service-card-010">
                            <div className="service-icon-010">
                                <img className="main-img-010" src="./img/17.png" alt="Project Management" />
                                <img className="hover-im-010" src="./img/18.png" alt="Hover Project Management" />
                            </div>
                            <div className="service-text-010">
                                <h3 className="service-title">Project Management</h3>
                                <p className="service-info-010">Learn agile methodologies and project planning.</p>
                                <a className="service-btn" href="/projectm">Know More</a>
                            </div>
                            <div className="serial_number-010">10</div>
                        </div>
                    </div>
                </section>
            </section>
            <hr />
            <Testimonials />
            <Footer />
        </>
    );
};

export default Home;

