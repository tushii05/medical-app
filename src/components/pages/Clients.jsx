import React from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

const Clients = () => {
    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 4,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 3000,
        arrows: false,
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 1,
                },
            },
            {
                breakpoint: 768,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 1,
                },
            },
            {
                breakpoint: 480,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                },
            },
        ],
    };

    const clients = [
        { id: 1, image: '/src/assets/images/client1.png' },
        { id: 2, image: '/src/assets/images/client2.png' },
        { id: 3, image: '/src/assets/images/client3.png' },
        { id: 4, image: '/src/assets/images/client4.png' },
        { id: 5, image: '/src/assets/images/client5.png' },
    ];

    return (
        <div className="clients overlay">
            <div className="container">
                <div className="row">
                    <div className="col-lg-12 col-md-12 col-12">
                        <Slider {...settings}>
                            {clients.map((client) => (
                                <div key={client.id} className="single-clients">
                                    <img src={client.image} alt={`Client ${client.id}`} />
                                </div>
                            ))}
                        </Slider>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Clients;