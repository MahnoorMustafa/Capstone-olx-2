import React from "react";
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
// import DropDown from "./DropDown";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import axios from "axios";

function Categories() {
  const [apiData, setApiData] = useState([]);
  const [ArrowUp, setArrowUp] = useState(false);

  useEffect(() => {
    axios.get(`https://fakestoreapi.com/products/categories`).then((result) => {
      const data = result.data;
      setApiData(data);
    });
  }, []);

  const moveArrow = () => {
    if (!ArrowUp) setArrowUp(true);
    else setArrowUp(false);
  };

  const arrStyle = {
    transform: ArrowUp ? "rotate(180deg)" : "",
    transition: "transform 200ms ease",
  };

  const styleCategory = {
    display: ArrowUp ? "block" : "none",
  };

  return (
    <div className="container-fuid border-bottom mb-5 ">
      <div className="categorylist w-75 mx-auto my-3">
        <ul className=" list-inline">
          <li
            onClick={moveArrow}
            className="category-heading list-inline-item fw-bold text-dark fs-14 grayShade "
          >
            ALL CATEGORIES
            <KeyboardArrowDownIcon style={arrStyle} />
          </li>
           <li
            style={styleCategory}
            className="allCategories position-absolute left-0 bg-white shadow p-4"
          >
          <a className="dropdown-item text-decoration-none fs-14 grayShade main-category" href="/electronics">
          Electronics</a>
          <a className="dropdown-item text-decoration-none fs-14 grayShade main-category" href="/jewelery">Jewelery</a>
          <a className="dropdown-item text-decoration-none fs-14 grayShade main-category" href="/men's clothing">
          Men's Clothing</a>
          <a className="dropdown-item text-decoration-none fs-14 grayShade main-category" href="/women's clothing">
          Women's Clothing</a>
          </li> 

          {apiData.map((item, index) => {
            const itm = item;
            const arr = itm.split(" ");
            for (let i = 0; i < arr.length; i++) {
              arr[i] = arr[i].charAt(0).toUpperCase() + arr[i].slice(1);
            }
            const itm2 = arr.join(" ");
            return (
              <li key={index} className="list-inline-item ms-2 ">
                <Link
                  to={`/${item}`}
                  className="text-decoration-none fs-14 grayShade main-category"
                >
                  {itm2}
                </Link>
              </li>
            );
          })}
        </ul>
      </div>
    </div>
  );
}

export default Categories;