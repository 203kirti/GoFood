import React, { useEffect, useState } from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import Card from "../components/Card";

function Home() {
  const [Search, setSearch] = useState("");
  const [foodCat, setfoodCat] = useState([]);
  const [foodItems, setfoodItems] = useState([]);
  const loadData = async () => {
    let response = await fetch("http://localhost:5000/api/foodData", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
    });

    response = await response.json();
    setfoodItems(response[0]);
    setfoodCat(response[1]);
    x;
  };

  useEffect(() => {
    loadData();
  }, []);
  return (
    <>
      <div>
        <Navbar />
      </div>

      <div>
        <div
          id="carouselExampleControls"
          className="carousel slide"
          data-bs-ride="carousel"
          style={{ objectFit: "contain !important" }}
        >
          <div className="carousel-inner" id="carousel">
            <div className="carousel-caption" style={{ zIndex: "10" }}>
              <div className="d-flex justify-content-center">
                <input
                  className="form-control me-2"
                  type="search"
                  placeholder="Search"
                  aria-label="Search"
                  value={Search}
                  onChange={(e) => setSearch(e.target.value)}
                />
                {/* <button
                  className="btn btn-outline-success text-white bg-success"
                  type="submit"
                >
                  Search
                </button> */}
              </div>
            </div>
            <div className="carousel-item active">
              <img
                src="https://picsum.photos/id/1/900/700"
                className="d-block w-100"
                style={{ filter: "brightness(30%)" }}
                alt="..."
              />
            </div>
            <div className="carousel-item">
              <img
                src="https://picsum.photos/id/3/200/300"
                className="d-block w-100"
                style={{ filter: "brightness(30%)" }}
                alt="..."
              />
            </div>
            <div className="carousel-item">
              <img
                src="https://picsum.photos/id/5/900/700"
                className="d-block w-100"
                style={{ filter: "brightness(30%)" }}
                alt="..."
              />
            </div>
          </div>
          <button
            className="carousel-control-prev"
            type="button"
            data-bs-target="#carouselExampleControls"
            data-bs-slide="prev"
          >
            <span
              className="carousel-control-prev-icon"
              aria-hidden="true"
            ></span>
            <span className="visually-hidden">Previous</span>
          </button>
          <button
            className="carousel-control-next"
            type="button"
            data-bs-target="#carouselExampleControls"
            data-bs-slide="next"
          >
            <span
              className="carousel-control-next-icon"
              aria-hidden="true"
            ></span>
            <span className="visually-hidden">Next</span>
          </button>
        </div>
      </div>

      <div className="container">
        {foodCat.length > 0
          ? foodCat.map((data) => {
              return (
                <div className="row mb-3">
                  <div className="fs-3 m-3" key={data._id}>
                    {data.CategoryName}
                  </div>
                  <hr />
                  {foodItems.length > 0
                    ? foodItems
                        .filter(
                          (foodData) =>
                            foodData.CategoryName === data.CategoryName &&
                            foodData.name
                              .toLowerCase()
                              .includes(Search.toLocaleLowerCase())
                        )
                        .map((filterItems) => {
                          return (
                            <div
                              key={filterItems._id}
                              className="col-12 col-mb-6 col-lg-3"
                            >
                              <Card
                                foodName={filterItems.name}
                                foodImg={filterItems.img}
                                options={filterItems.options[0]}
                                foodDescription={filterItems.description}
                              ></Card>
                            </div>
                          );
                        })
                    : ""}
                </div>
              );
            })
          : ""}
      </div>

      <div>
        <Footer />
      </div>
    </>
  );
}

export default Home;
