import React from 'react';
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: false,
};

function Home() {
    return(
        <section className='position-relative home'>
            <Slider {...settings}>
                <div className="home_home home_home-first">
                    <div className="container">                
                        <div className="m-text-color home_number">01</div>
                        <div className='home_sub'>
                            <div className="home_noted">business value</div>
                            <div className="d-flex flex-wrap home_title">
                                <div className='text-capitalize' >technology</div>
                                <div className='ml-2 font-weight-bolder'>under control ?</div>
                            </div>
                            <span className='d-block bg-white mb-4 mt-2'></span>
                        </div>
                        <div className="home_description">Developing software is developing
                            knowledge, the more you try, the more you learn.
                            As a result, one of the elusive things in software
                            development is how to measure business value.
                        </div>
                        <div className="d-flex mt-3 home_button">
                            <div className="px-3 py-2 m-bg-color button_contact">
                                contact us
                            </div>
                            <div className="px-3 py-2 ml-3 text-dark bg-white button_portfolio">
                                portfolio
                            </div>
                        </div>
                    </div>
                </div>
                <div className="home_home home_home-second">
                    <div className="container">                
                        <div className="m-text-color home_number">02</div>
                        <div className='home_sub'>
                            <div className="home_noted">don't plan unplanable</div>
                            <div className="d-flex flex-wrap home_title">
                                <div className='text-capitalize'>change-driven</div>
                                <div className='ml-2 font-weight-bolder'>or plan-driven</div>
                            </div>
                            <span className='d-block bg-white mb-4 mt-2'></span>
                        </div>
                        <div className="home_description">Have you ever think about 
                            planning for the whole detail things completely vs planning 
                            for short reality reachable future and always ready to change? 
                            We call it Change-Driven development process here.
                        </div>
                        <div className="d-flex mt-3 home_button">
                            <div className="px-3 py-2 m-bg-color button_contact">
                                contact us
                            </div>
                            <div className="px-3 py-2 ml-3 text-dark bg-white button_portfolio">
                                portfolio
                            </div>
                        </div>
                    </div>
                </div>
                <div className="home_home home_home-third">
                    <div className="container">                
                        <div className="m-text-color home_number">03</div>
                        <div className='home_sub'>
                            <div className="home_noted">customer collaboration over contract negotiation</div>
                            <div className="d-flex flex-wrap home_title">
                                <div className='text-capitalize'>agile</div>
                                <div className='ml-2 font-weight-bolder'>process</div>
                            </div>
                            <span className='d-block bg-white mb-4 mt-2'></span>
                        </div>
                        <div className="home_description">The agile approach to prioritization 
                            is that user stories of higher business value should be 
                            implemented before ones of lower business value.
                        </div>
                        <div className="d-flex mt-3 home_button">
                            <div className="px-3 py-2 m-bg-color button_contact">
                                contact us
                            </div>
                            <div className="px-3 py-2 ml-3 text-dark bg-white button_portfolio">
                                portfolio
                            </div>
                        </div>
                    </div>
                </div>
            </Slider>
            <div className='w-100 flex-wrap justify-content-center position-absolute home_animation-button'>
                <div className='rounded-circle p-2 d-flex justify-content-center align-items-center animation-button_cover'>
                    <i class="h1 font-weight-lighter text-white fas fa-angle-down"></i>
                </div>
                <div className='text-white text-uppercase w-100 text-center'>Continue</div>
            </div>
        </section>
    );
}

export default Home;