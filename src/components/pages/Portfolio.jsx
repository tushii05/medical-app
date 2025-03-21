// import React from 'react';

// const Portfolio = () => {
//     return (
//         <section className="portfolio section">
//             <div className="container">
//                 <div className="row">
//                     <div className="col-lg-12">
//                         <div className="section-title">
//                             <h2>We Maintain Cleanliness Rules Inside Our Hospital</h2>
//                             <img src="src/assets/images/section-img.png" alt="#" />
//                             <p>Lorem ipsum dolor sit amet consectetur adipiscing elit praesent aliquet. pretiumts</p>
//                         </div>
//                     </div>
//                 </div>
//             </div>
//             <div className="container-fluid">
//                 <div className="row">
//                     <div className="col-lg-12 col-12">
//                         <div className="owl-carousel portfolio-slider">
//                             <div className="single-pf">
//                                 <img src="/src/assets/images/pf1.jpg" alt="#" />
//                                 <a href="portfolio-details.html" className="btn">View Details</a>
//                             </div>
//                             <div className="single-pf">
//                                 <img src="/src/assets/images/pf2.jpg" alt="#" />
//                                 <a href="portfolio-details.html" className="btn">View Details</a>
//                             </div>
//                             <div className="single-pf">
//                                 <img src="src/assets/images/pf3.jpg" alt="#" />
//                                 <a href="portfolio-details.html" className="btn">View Details</a>
//                             </div>
//                             <div className="single-pf">
//                                 <img src="src/assets/images/pf4.jpg" alt="#" />
//                                 <a href="portfolio-details.html" className="btn">View Details</a>
//                             </div>
//                             <div className="single-pf">
//                                 <img src="src/assets/images/pf1.jpg" alt="#" />
//                                 <a href="portfolio-details.html" className="btn">View Details</a>
//                             </div>
//                             <div className="single-pf">
//                                 <img src="src/assets/images/pf2.jpg" alt="#" />
//                                 <a href="portfolio-details.html" className="btn">View Details</a>
//                             </div>
//                             <div className="single-pf">
//                                 <img src="src/assets/images/pf3.jpg" alt="#" />
//                                 <a href="portfolio-details.html" className="btn">View Details</a>
//                             </div>
//                             <div className="single-pf">
//                                 <img src="src/assets/images/pf4.jpg" alt="#" />
//                                 <a href="portfolio-details.html" className="btn">View Details</a>
//                             </div>
//                         </div>
//                     </div>
//                 </div>
//             </div>
//         </section>

//     );
// };

// export default Portfolio;



import React from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css'; 
import 'slick-carousel/slick/slick-theme.css';

const Portfolio = () => {
    const settings = {
        // dots: true,
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

    const portfolioItems = [
        { id: 1, image: '/src/assets/images/pf1.jpg', link: '/' },
        { id: 2, image: '/src/assets/images/pf2.jpg', link: '/' },
        { id: 3, image: '/src/assets/images/pf3.jpg', link: '/' },
        { id: 4, image: '/src/assets/images/pf4.jpg', link: '/' },
        { id: 5, image: '/src/assets/images/pf1.jpg', link: '/' },
        { id: 6, image: '/src/assets/images/pf2.jpg', link: '/' },
        { id: 7, image: '/src/assets/images/pf3.jpg', link: '/' },
        { id: 8, image: '/src/assets/images/pf4.jpg', link: '/' },
    ];

    return (
        <section className="portfolio section">
            <div className="container">
                <div className="row">
                    <div className="col-lg-12">
                        <div className="section-title">
                            <h2>We Maintain Cleanliness Rules Inside Our Hospital</h2>
                            <img src="/src/assets/images/section-img.png" alt="Section Image" />
                            <p>Lorem ipsum dolor sit amet consectetur adipiscing elit praesent aliquet. pretiumts</p>
                        </div>
                    </div>
                </div>
            </div>
            <div className="container-fluid">
                <div className="row">
                    <div className="col-lg-12 col-12">
                        <Slider {...settings}>
                            {portfolioItems.map((item) => (
                                <div key={item.id} className="single-pf">
                                    <img src={item.image} alt={`Portfolio ${item.id}`} />
                                    <a href={item.link} className="btn">
                                        View Details
                                    </a>
                                </div>
                            ))}
                        </Slider>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Portfolio;