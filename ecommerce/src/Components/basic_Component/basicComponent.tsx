import React from "react";
import "./style.css";
import img1 from "../material/image/TIDE.jpg";
import { TiShoppingCart } from "react-icons/ti";

const productData = [
    
  {
    id: 1,
    name: "Tide Powder",
    description:
      "Washing powder Tide is an Amercian brand of laundry.Tide Original Scent Powder Laundry Detergent is concentrated with even more stain fighting power packed into a smaller box, so you can use 1/3 less.",
    image: img1
  },
  {
    id:2,
    name: "Tide Powder",
    description:
      "Washing powder Tide is an Amercian brand of laundry.Tide Original Scent Powder Laundry Detergent is concentrated with even more stain fighting power packed into a smaller box, so you can use 1/3 less.",
    image: img1
  }
  
];

const ReusableComponent = () => {
  return (
    <div className="Container">
      <h1>E-Commerce</h1>
      {productData.map((product) => (
        <div key={product.id} className="item1">
          <img src={product.image} alt={product.name} />
          <div className="discription">
            <h3>{product.name}</h3>
            <p>{product.description}</p>
            <TiShoppingCart />
          </div>
        </div>
      ))}
    </div>
  );
};

export default ReusableComponent;