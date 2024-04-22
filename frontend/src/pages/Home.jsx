import Navbar from '../components/Navbar';
import '../global.css';
import img1 from '../assets/blood-img1.avif';
import img2 from '../assets/blood-img2.webp';
import img3 from '../assets/blood-img1.jpg';
import {useState, useEffect } from 'react';
import Content from '../components/Content';
import Footer from '../components/Footer';

export default function Home()
{
    const [currentSlide, setCurrentSlide] = useState(0);
     const slides = [
    {
      imageUrl: img1,
      text: 'Blood can save life'
    },
    {
      imageUrl: img2,
      text: 'Donate blood today and save life'
    },
    {
      imageUrl: img3,
      text: ''
    }
    
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prevSlide) => (prevSlide === slides.length - 1 ? 0 : prevSlide + 1));
    }, 5000); // Change slide every 5 seconds

    const handleDotClick = (index) => {
    setCurrentSlide(index);
  };

    return () => clearInterval(interval);
  }, [slides.length]);


    return(
        <>
        <Navbar/>
        <div className="slider-container">
      {slides.map((slide, index) => (
        <div
          key={index}
          className={index === currentSlide ? 'slide active' : 'slide'}
          style={{ backgroundImage: `url(${slide.imageUrl})` }}
        >
        <div className="text">{slide.text}</div>
        </div>
      ))}
      <div className="dots">
        {slides.map((_, index) => (
          <span
            key={index}
            className={index === currentSlide ? 'dot active' : 'dot'}
            onClick={() => handleDotClick(index)}
          />
        ))}
      </div>
    </div>
         <Content/>
         <Footer/>
        </>
    )
}