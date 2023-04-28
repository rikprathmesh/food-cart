import React, { useState } from "react";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import { useDispatch } from "react-redux";
import CardsData from "./CardsData";
import "./style.css";
import { ADD_CART } from "../redux/actions/action";

const Cards = () => {
  const [data, setData] = useState(CardsData);
  // console.log(data);

  const dispatch = useDispatch()

  const addItemHandler = (e) => {
    // console.log(e);
    dispatch(ADD_CART(e))
  }

  return (
    <div className="container mt-3">
      <h2 className="text-center">Add To Cart</h2>
      <div className="row d-flex justify-content-center align-items-center">
        {data.map((item, id) => {
          return (
            <>
              <Card
                style={{ width: "22rem", border: "none" }}
                className="mx-2 mt-4 card_style"
              >
                <Card.Img
                  variant="top"
                  src={item.imgdata}
                  style={{ height: "16rem" }}
                  className="mt-3"
                />
                <Card.Body>
                  <Card.Title>{item.rname}</Card.Title>
                  <Card.Text>Price : &#8377; {item.price}</Card.Text>
                  <div className="button_div d-flex justify-content-center">
                    <Button variant="primary" className="col-lg-12" onClick={() => addItemHandler(item)}>Add To Cart</Button>
                  </div>
                </Card.Body>
              </Card>
            </>
          );
        })}
      </div>
    </div>
  );
};

export default Cards;
