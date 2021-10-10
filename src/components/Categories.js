import React, { useState } from "react";
import CategoriesCard from "./CategoriesCard";
import Button from "react-bootstrap/Button";
import data from "./Data";

const Categories = () => {
  const [dataItems, setDataItems] = useState(data);
  const filterItem = (categoryItem) => {
    const updatedItem = data.filter((currentElement) => {
      console.log(currentElement);
      return currentElement.tag === categoryItem;
    });
    console.log(updatedItem);
    setDataItems(updatedItem);
  };
  return (
    <>
      <div className=" d-flex justify-content-center">
        <Button
          className="filter-btn"
          onClick={() => {
            filterItem("cylinder");
          }}
        >
          {" "}
          Cylinder
        </Button>{" "}
        <Button
          className="filter-btn"
          onClick={() => {
            filterItem("fryer");
          }}
        >
          {" "}
          Fryer
        </Button>{" "}
        <Button
          className="filter-btn"
          onClick={() => {
            setDataItems(data);
          }}
        >
          {" "}
          All
        </Button>
      </div>
      <div className="wrapper">
        <div className="row justify-content-center">
          {dataItems.map((item, index) => {
            return (
              <CategoriesCard
                key={item.productId}
                image={item.image}
                tag={item.tag}
                name={item.productName}
                price={item.price}
                description={item.description}
              />
            );
          })}
        </div>
      </div>
    </>
  );
};
export default Categories;
