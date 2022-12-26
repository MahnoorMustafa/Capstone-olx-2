import React from "react";
import KeyboardArrowRightOutlinedIcon from "@mui/icons-material/KeyboardArrowRightOutlined";

function Locations(props) {
  return (
    <div>
      <div className="container border rounded-2 p-3">
        <h2 className="productLocationTitle">Posted in</h2>
        <p className="fs-12 grayShade">{props.location}</p>
        <div className="productLocationBox">
          <div className="location w-100 border rounded-2 shadow-sm">
          <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d27229.74794816291!2d74.29070833476706!3d31.449415970594934!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3919014ca50af181%3A0x6630f48affe03d5d!2sTownship%20Lahore%2C%20Punjab%2C%20Pakistan!5e0!3m2!1sen!2s!4v1671984487854!5m2!1sen!2s" 
           allowfullscreen=""
            loading="lazy" 
            referrerpolicy="no-referrer-when-downgrade"
            className="w-100">
            </iframe>
            <div className="d-flex justify-content-between px-3 py-2">
              <p className="text-uppercase fw-bold fs-14 my-auto">
                see location
              </p>
              <KeyboardArrowRightOutlinedIcon
                role="button"
                className="ms-auto max-height my-auto fs-4"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Locations;