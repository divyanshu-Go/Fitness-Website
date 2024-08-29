import React, { useEffect, useState } from "react";
import "./CenterMain.css";

const CenterMain = () => {

  const [slideIndex, setSlideIndex] = useState(1);

  useEffect(() => {
    const interval = setInterval(() => {
      showSlides(slideIndex + 1);
    }, 5000);

    return () => clearInterval(interval);
  }, [slideIndex]);

  const showSlides = (n) => {
    let slides = document.getElementsByClassName("center-slide");
    let dots = document.getElementsByClassName("dot");

    if (n > slides.length) {
      setSlideIndex(1);
    } else if (n < 1) {
      setSlideIndex(slides.length);
    } else {
      setSlideIndex(n);
    }

    Array.from(slides).forEach((slide) => {
      slide.style.display = "none";
    });

    Array.from(dots).forEach((dot) => {
      dot.className = dot.className.replace(" active", "");
    });

    if (slides[slideIndex - 1]) {
      slides[slideIndex - 1].style.display = "block";
      dots[slideIndex - 1].className += " active";
    }
  };

  const plusSlides = (n) => {
    showSlides(slideIndex + n);
  };

  const currentSlide = (n) => {
    showSlides(n);
  };


  return (
    <>
      {/* Main Start */}
      <main className="centerMain-main">
        <div className="center-slideshow-container ">
          <div className="center-slide fade ">
            <img
              src="https://www.sydney.edu.au/content/dam/corporate/images/news-and-opinion/news/2017/june/Yoga_class.jpg"
              alt="Slide 1"
              className="centermain-img  "
            />
          </div>
          <div className="center-slide fade">
            <img
              src="https://images.huffingtonpost.com/2016-06-23-1466709798-3861111-FITNESSWOMAN.jpg"
              alt="Slide 2"
              className="centermain-img"
            />
          </div>
          <div className="center-slide fade">
            <img
              src="https://wallpapercave.com/wp/wp2483009.jpg"
              alt="Slide 3"
              className="centermain-img"
            />
          </div>
          <div className="center-slide fade">
            <img
              src="https://www.verywellfit.com/thmb/UDWaETBO7y23kfCUtmlTLHecvmo=/2669x2002/smart/filters:no_upscale()/cardiovascular-endurance-59f7fc2faad52b00100156aa.jpg"
              alt="Slide 4"
              className="centermain-img"
            />
          </div>

          {/* Navigation arrows */}
          <a className="prev" onClick={() => plusSlides(-1)}>
            &#10094;
          </a>
          <a className="next" onClick={() => plusSlides(1)}>
            &#10094;
          </a>
        </div>

        <br />

        {/* The dots/circles */}
        <div style={{ textAlign: "center" }}>
          <span className="dot" onClick={() => currentSlide(1)}></span>
          <span className="dot" onClick={() => currentSlide(2)}></span>
          <span className="dot" onClick={() => currentSlide(3)}></span>
          <span className="dot" onClick={() => currentSlide(4)}></span>
        </div>

        {/* Cards Start */}
        <div className="card-container">
          <div className="card">
            <div className="icon">
              <span className="material-symbols-outlined">cardiology</span>
            </div>
            <h3>Cardiologist</h3>
            <p>
              Objectively integrate enterprise-wide strategic theme areas with
              functionalized infrastructures.
            </p>
            <a href="#" className="read-more">
              + READMORE
            </a>
          </div>
          <div className="card">
            <div className="icon">
              <span className="material-symbols-outlined">pulmonology</span>
            </div>
            <h3>Pulmonary</h3>
            <p>
              Interactively productize premium technologies where interdependent
              quality vectors are available.
            </p>
            <a href="#" className="read-more">
              + READMORE
            </a>
          </div>
          <div className="card">
            <div className="icon">
              <span className="material-symbols-outlined">neurology</span>
            </div>
            <h3>Neurology</h3>
            <p>
              Quickly communicate enabled technology and turnkey leadership
              skills.
            </p>
            <a href="#" className="read-more">
              + READMORE
            </a>
          </div>
          <div className="card">
            <div className="icon">
              <span className="material-symbols-outlined">
                sports_gymnastics
              </span>
            </div>
            <h3>Gymnastics</h3>
            <p>
              Services and helps to complete and file the necessary paperwork
              with county.
            </p>
            <a href="#" className="read-more">
              + READMORE
            </a>
          </div>
        </div>
      </main>
      {/* Main End */}
    </>
  );
};

export default CenterMain;
