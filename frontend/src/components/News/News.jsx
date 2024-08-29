import React from "react";
import "./News.css"; // Assuming you have a separate CSS file

const News = () => {
  return (
    <div className="news">
      <header>
        <div>
          <img
            id="news-logo"
            className="news-logo"
            src="https://cdn.pixabay.com/photo/2015/02/15/09/33/news-636978_1280.jpg"
            alt="News"
          />
        </div>
        <br />
        <br />
        <h2>News related to fitness, sports, and health</h2>
      </header>
      <main className="news-main">
        <br />
        <br />
        <h3 className="news-title">Cricket News</h3>
        <br />
        <br />
        <iframe
          className="news-iframe"
          width="800"
          height="500"
          src="https://www.mid-day.com/sports/cricket/"
        ></iframe>
        <br />
        <br />
        <iframe
          className="news-iframe"
          width="560"
          height="315"
          src="https://www.youtube.com/embed/-Kc8njxtbLE?si=el85tP-R--3aEaqN"
          title="YouTube video player"
          frameBorder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          referrerPolicy="strict-origin-when-cross-origin"
          allowFullScreen
        ></iframe>
        <iframe
          className="news-iframe"
          width="560"
          height="315"
          src="https://www.youtube.com/embed/h4HYX8sMaQs?si=RvBSaWrpHUCF50fK"
          title="YouTube video player"
          frameBorder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          referrerPolicy="strict-origin-when-cross-origin"
          allowFullScreen
        ></iframe>
        <br />
        <br />
        <br />
        <h3 className="news-title">Health &#38; diet plan</h3>
        <br />
        <br />
        <iframe
          className="news-iframe"
          width="700"
          height="500"
          src="https://www.healthandme.com/"
        ></iframe>
        <br />
        <br />
        <iframe
          className="news-iframe"
          width="560"
          height="315"
          src="https://www.youtube.com/embed/mv8by-mSB_s?si=hbtaPQBoLE8uVhwQ"
          title="YouTube video player"
          frameBorder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          referrerPolicy="strict-origin-when-cross-origin"
          allowFullScreen
        ></iframe>
        <iframe
          className="news-iframe"
          width="560"
          height="315"
          src="https://www.youtube.com/embed/3WZVl5rT8z8?si=35JmGe5IDBtSMuhm"
          title="YouTube video player"
          frameBorder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          referrerPolicy="strict-origin-when-cross-origin"
          allowFullScreen
        ></iframe>
        <br />
        <br />
        <br />
        <h3 className="news-title">Sports news</h3>
        <br />
        <br />
        <iframe
          className="news-iframe"
          width="600"
          height="500"
          src="https://www.mid-day.com/sports/other-sports/"
        ></iframe>
        <br />
        <br />
        <iframe
          className="news-iframe"
          width="560"
          height="315"
          src="https://www.youtube.com/embed/1OsqDEyXckk?si=MXM2kyJkODcbnHz5"
          title="YouTube video player"
          frameBorder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          referrerPolicy="strict-origin-when-cross-origin"
          allowFullScreen
        ></iframe>
        <iframe
          className="news-iframe"
          width="560"
          height="315"
          src="https://www.youtube.com/embed/VgX2xHEWbdQ?si=H-gTev6jlBYkwwJ-"
          title="YouTube video player"
          frameBorder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          referrerPolicy="strict-origin-when-cross-origin"
          allowFullScreen
        ></iframe>
        <br />
        <br />
        <br />
        <h3 className="news-title">Motivational Weight loss journey</h3>
        <br />
        <br />
        <iframe
          className="news-iframe"
          width="600"
          height="500"
          src="https://www.timesnownews.com/health/weight-loss/real-life-weight-loss-story-virat-kohlis-workout-diet-and-fitness-regime-inspired-this-35-year-old-man-to-shed-over-40kgs-article-112586540"
        ></iframe>
        <br />
        <br />
        <iframe
          className="news-iframe"
          width="560"
          height="315"
          src="https://www.youtube.com/embed/PsFXybgykxw?si=o6VAvy0qkoMUWcRg"
          title="YouTube video player"
          frameBorder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          referrerPolicy="strict-origin-when-cross-origin"
          allowFullScreen
        ></iframe>
        <iframe
          className="news-iframe"
          width="560"
          height="315"
          src="https://www.youtube.com/embed/27N0RbO_i1I?si=kvQoZiNuba1JvpyB"
          title="YouTube video player"
          frameBorder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          referrerPolicy="strict-origin-when-cross-origin"
          allowFullScreen
        ></iframe>
      </main>
    </div>
  );
};

export default News;
