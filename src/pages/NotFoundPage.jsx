import React from 'react'
import { Link } from 'react-router-dom';
import img1 from "../assets/img/oops.jpg";

const NotFoundPage = () => {
  return (
    <>
      <div className="d-flex align-items center justify-content-center">
        <Link to=".">
          <img
            src={img1}
            alt="err"
          />
        </Link>
      </div>
      ;
    </>
  );
}

export default NotFoundPage