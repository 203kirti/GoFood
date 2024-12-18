import React from "react";

function Card() {
  return (
    <div>
      <div className="card mt-3" style={{ width: "18rem" }}>
        <img
          src="https://picsum.photos/id/1/900/700"
          class="card-img-top"
          alt="..."
        />
        <div className="card-body">
          <h5 className="card-title">Card title</h5>
          <p className="card-text">about the food content</p>
          <div className="container w-100">
            <select className="m-2 h-100 bg-success">
              {Array.from(Array(6), (e, i) => {
                return (
                  <option key={i + 1} value={i + 1}>
                    {i + 1}
                  </option>
                );
              })}
            </select>

            <select className="m-2 h-100 bg-success">
              <option value="half">Half</option>
              <option value="full">Full</option>
            </select>

            <div className="d-inline fs-5">Price :</div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Card;
