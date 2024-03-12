import React from "react";
import "./style.css";
const BuyCourse = () => {
  return (
    <div className="Join-course" id="pricing">
      <div className="join-text">
        <h4 className="header">Join us and scale up</h4>
        <h4 className="header">your skill with your friends</h4>
        <p className="txtt">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed et sapien
          eu mi tincidunt feugiat. Nulla facilisi. Morbi dignissim neque non dui
          fermentum, sit amet cursus felis malesuada. Cras eget libero libero.
          Duis nec dolor fermentum, viverra odio nec.
        </p>
      </div>

      <div className="card-user">
        <div className="user">
          <h3 className="label">Standard User</h3>
          <span className="span">$200</span>

          <ul className="card-content">
            <li className="li">Links to free resources.</li>
            <li className="li">Basic educational content.</li>
            <li className="li">General promotional offers.</li>
            <li className="li">Advertisements for new products.</li>

            <li className="li">Articles and blogs on general topics</li>
          </ul>
          <button className="btnn">BUY NOW</button>
        </div>
        <div className="user">
          <h3 className="label">Premium User</h3>
          <span className="span">$900</span>
          <ul className="card-content">
            <li className="li">Exclusive content </li>
            <li className="li">Customized technical support</li>
            <li className="li">Advanced educational content </li>
            <li className="li">Exclusive discounts and offers.</li>

            <li className="li">Access to premium features not available</li>
          </ul>
          <button className="btnn2">BUY NOW</button>
        </div>
      </div>
    </div>
  );
};

export default BuyCourse;
