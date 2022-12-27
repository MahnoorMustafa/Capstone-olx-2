import React from "react";
import { useState } from "react";
import axios from "axios";
import { useParams } from "react-router-dom";
import CardPrices from "./CardPrices";
import CardLocations from "./CardLocations";
import CardDetails from "./CardDetails";
import CardDescription from "./CardDescription";
import CardCarousel from "./CardCarousel";




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
              <CardCarousel imgPath={apiData.image} />
              <CardDetails
                brand={apiData.brand}
                price={apiData.price}
                condition={apiData.condition}
                description={apiData.description}
              />
            </div>
            <div className="col-lg-5">
              <CardPrices
                price={apiData.price}
                title={apiData.title}
                location={apiData.location}
              />
              <CardDescription
                name={apiData.name}
                phoneNumber={apiData.phoneNumber}
              />
              <CardLocations location={apiData.location} />
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default Articleinfo;