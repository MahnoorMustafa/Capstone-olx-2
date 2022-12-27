import React from "react";
import { useState } from "react";
import axios from "axios";
import { useParams } from "react-router-dom";
import Card_prices from "./Card_prices";
import Card_Carousel from "./Card_Carousel";
import Card_Description from "./Card_Description";
import Card_Details from "./Card_Details";
import Card_Locations from "./Card_Locations";




function Articleinfo() {
  const [apiData, setApiData] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const { id } = useParams();

  axios.get(`https://fakestoreapi.com/products/${id}`).then((res) => {
    const data = res.data;
    setApiData(data);
    setIsLoading(false);
  });

  return (
    <div>
      {isLoading ? (
        <div className=" text-center w-100">
          <p>Processing</p>
        </div>
      ) : (
        <div className="product-wrapper my-5 container px-5">
          <div className="product row w-100">
            <div className="col-lg-7">
              <Card_Carousel imgPath={apiData.image} />
              <Card_Details
                brand={apiData.brand}
                price={apiData.price}
                condition={apiData.condition}
                description={apiData.description}
              />
            </div>
            <div className="col-lg-5">
              <Card_prices
                price={apiData.price}
                title={apiData.title}
                location={apiData.location}
              />
              <Card_Description
                name={apiData.name}
                phoneNumber={apiData.phoneNumber}
              />
              <Card_Locations location={apiData.location} />
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default Articleinfo;