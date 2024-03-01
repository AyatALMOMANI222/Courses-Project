import React from "react";
import "./style.css";
const Courses = () => {
  return (
    <div className="courses-container" id="courses">
      <div>
        <div className="popular-course">
          <h3 className="popular">Our Popular Courses</h3>
        </div>
        <div className="card">
          <div className="card-container">
            <img
              className="image"
              src="https://img.freepik.com/free-vector/graphic-design-geometric-wallpaper_52683-34399.jpg"
            />
            <span>UI design Basic</span>
          </div>
          <div className="card-container">
            <img
              className="image"
              src="https://a.storyblok.com/f/262429/1280x1920/07372621d1/digital-design.jpg"
            />

            <span>Busniess Marketing</span>
          </div>
          <div className="card-container">
            <img
              className="image"
              src="https://akm-img-a-in.tosshub.com/indiatoday/images/media_bank/202307/why-design-thinking-is-important-in-todays-job-industries-132433-16x9.jpg?VersionId=r3DkuIlkjSZI0KClaN79ksVBKui34xNG"
            />

            <span>Website Development</span>
          </div>
          <div className="card-container">
            <img
              className="image"
              src="https://en.idei.club/uploads/posts/2023-06/1685780825_en-idei-club-p-design-graphique-dizain-krasivo-1.jpg"
            />

            <span>Article Writting</span>
          </div>
          <div className="card-container">
            <img
              className="image"
              src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQviFFFxf8JShW6YkVWO0CE_bf5TpPkTSZcsZZmKmczgLPfpONb3CbbOlexr1EpsgEiF7M&usqp=CAU"
            />

            <span>Storage Managment</span>
          </div>
        </div>

        <div className="img-text">
          <img
            className="imag"
            src="https://e7.pngegg.com/pngimages/118/111/png-clipart-bar-chart-graph-theory-line-chart-information-three-dimensional-mathematics-learning-template-happy-birthday-vector-images.png"
          />
          <div className="text">
            <h3>Various types of courses</h3>
            <h3>will scale up your skill</h3>
            <p className="paragraph">
              Welcome to our new website! We're here to serve you and provide
              the best services and courses for you.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Courses;
