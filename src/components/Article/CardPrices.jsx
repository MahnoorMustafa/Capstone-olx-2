import React from "react";
import ShareOutlinedIcon from "@mui/icons-material/ShareOutlined";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";

function CardPrices(props) {
  return (
    <div>
      <div className="container border pt-4 px-3 rounded-2">
        <div className="priceRow d-flex justify-content-between">
          <h2 className="priceRowPrice fw-bold">Rs. {props.price}</h2>
          <div className="priceRowIcons">
            <ShareOutlinedIcon className="shareNode fs-2 curserPointer" />
            <FavoriteBorderIcon className="fs-2 ms-3 curserPointer" />
          </div>
        </div>
        <p className="grayShade">{props.title}</p>
        <div className="productPriceFooter d-flex justify-content-between">
          <p className="fs-12 text-black">Lahore</p>
          <p className="fs-12 grayShade">23 hrs ago</p>
        </div>
      </div>
    </div>
  );
}

export default CardPrices;