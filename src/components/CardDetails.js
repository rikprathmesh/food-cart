import React, { useEffect, useState } from "react";
import Table from "react-bootstrap/Table";
import { useNavigate, useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { DELETE_ITEM } from "../redux/actions/action";
import { ADD_CART, REMOVE_INDIVIDUAL_ITEM } from "../redux/actions/action";

const CardDetails = () => {

  const history = useNavigate()

  const [data, setData] = useState([]);
  // console.log("data bhetla!", data);

  const getData = useSelector((state) => state.cartTrolly.carts);
  // console.log("accessing global state:", getData);
  const dispatch = useDispatch()

  const { id } = useParams();
  console.log(id);

  const compare = () => {
    let compareData = getData.filter((elem) => {
      return elem.id == id;
    });
    // console.log("comparing data:",compareData);
    setData(compareData);
  };

  useEffect(() => {
    compare();
  }, [id]);

  // add data on click of + button
  const addItemHandler = (e) => {
    // console.log(e);
    dispatch(ADD_CART(e))
  }

  const deleteId = (id) => {
    dispatch(DELETE_ITEM(id))
    history("/")
  }

  // remove individual on - button click
  const removeOne = (item) => {
    dispatch(REMOVE_INDIVIDUAL_ITEM(item))
  }

  return (
    <>
      <div className="container mt-2">
        <h2 className="text-center">Items Detail</h2>
        <section className="container mt-3">
          <div className="itemsdetails d-flex justify-content-center">
            {data.map((elem) => {
              return (
                <>
                  <div className="items_img">
                    <img
                      src={elem.imgdata}
                      alt=""
                    />
                  </div>
                  <div className="details">
                    <Table>
                      <tr>
                        <td>
                          <p>
                            <strong>Restaurant</strong> : {elem.rname}
                          </p>
                          <p>
                            <strong>Price</strong> : &#8377; {elem.price}
                          </p>
                          <p>
                            <strong>Dishes</strong> : {elem.address}
                          </p>
                          <p>
                            <strong>Total</strong> : &#8377; {elem.price * elem.qnty}
                          </p>
                          <div className="mt-5 d-flex justify-content-between align-items-center" style={{width: 100, cursor: "pointer", background: "#ddd", color: "#111"}}>
                            <span style={{fontSize: 24}} onClick={elem.qnty <= 1 ? ()=>deleteId(elem.id) : ()=>removeOne(elem)}>-</span>
                            <span style={{fontSize: 22}}>{elem.qnty}</span>
                            <span style={{fontSize: 24}} onClick={() => addItemHandler(elem)}>+</span>
                          </div>
                        </td>
                        <td>
                          <p>
                            <strong>Rating</strong>:
                            <span
                              style={{
                                background: "green",
                                color: "white",
                                padding: "2px 5px",
                                borderRadius: "5px",
                              }}
                            >
                              {elem.rating} &#9733;
                            </span>
                          </p>
                          <p>
                            <strong>Order Review</strong>:
                            <span>{elem.somedata}</span>
                          </p>
                          <p>
                            <strong>Remove </strong>:
                            <span>
                              <i
                                className="fas fa-trash"
                                style={{
                                  color: "red",
                                  fontSize: 20,
                                  cursor: "pointer",
                                }}
                                onClick={() => deleteId(elem.id)}
                              ></i>
                            </span>
                          </p>
                        </td>
                      </tr>
                    </Table>
                  </div>
                </>
              );
            })}
          </div>
        </section>
      </div>
    </>
  );
};

export default CardDetails;
