// import React, { useState } from "react";

// function Card(props) {
//   let options = props.options;
//   let priceOptions = Object.keys(options);
//   console.log(options);
//   return (
//     <div>
//       <div className="card mt-3" style={{ width: "18rem", maxHeight: "360px" }}>
//         <img src={props.foodImg} className="card-img-top" alt="..." />
//         <div className="card-body">
//           <h5 className="card-title">{props.foodName}</h5>
//           {/* <p className="card-text">{props.foodDescription}</p> */}
//           <div className="container w-100">
//             <select className="m-2 h-100 bg-success rounded">
//               {Array.from(Array(6), (e, i) => {
//                 return (
//                   <option key={i + 1} value={i + 1}>
//                     {i + 1}
//                   </option>
//                 );
//               })}
//             </select>

//             <select className="m-2 h-100 bg-success rounded">
//               {priceOptions.map((size) => {
//                 return (
//                   <option key={size} value={size}>
//                     {size}
//                   </option>
//                 );
//               })}
//             </select>

//             <div className="d-inline fs-5">Price :</div>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// }

// export default Card;

import React, { useState } from "react";

function Card(props) {
  const options = props.options; // Prices for different sizes
  const priceOptions = Object.keys(options); // Get size options (e.g., ["half", "full"])

  const [selectedSize, setSelectedSize] = useState(priceOptions[0]); // Default to the first option
  const [quantity, setQuantity] = useState(1); // Default quantity

  // Handler to update the selected size
  const handleSizeChange = (e) => {
    setSelectedSize(e.target.value);
  };

  // Handler to update the quantity
  const handleQuantityChange = (e) => {
    setQuantity(Number(e.target.value));
  };

  return (
    <div>
      <div className="card mt-3" style={{ width: "18rem", maxHeight: "360px" }}>
        <img
          src={props.foodImg}
          className="card-img-top"
          alt={props.foodName}
          style={{ height: "200px", objectFit: "fill" }}
        />
        <div className="card-body">
          <h5 className="card-title">{props.foodName}</h5>

          <div className="container w-100">
            {/* Quantity Selector */}
            <select
              className="m-2 h-100 bg-success rounded"
              onChange={handleQuantityChange}
              value={quantity}
            >
              {Array.from(Array(6), (_, i) => (
                <option key={i + 1} value={i + 1}>
                  {i + 1}
                </option>
              ))}
            </select>

            {/* Size Selector */}
            <select
              className="m-2 h-100 bg-success rounded"
              onChange={handleSizeChange}
              value={selectedSize}
            >
              {priceOptions.map((size) => (
                <option key={size} value={size}>
                  {size}
                </option>
              ))}
            </select>

            {/* Display Price */}
            <div className="d-inline fs-5">
              Price: <strong>${options[selectedSize] * quantity}</strong>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Card;
