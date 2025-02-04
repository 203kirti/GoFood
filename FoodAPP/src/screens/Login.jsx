import React from "react";
import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import Navbar from "../components/Navbar";

function Login() {
  const [details, setdetails] = useState({ email: "", password: "" });
  const navigate = useNavigate();
  const handleSubmit = async (e) => {
    e.preventDefault();

    // Basic validation
    if (!details.email || !details.password) {
      alert("Please enter both email and password.");
      return;
    }
    try {
      const response = await fetch("http://localhost:5000/api/loginuser", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          email: details.email,
          password: details.password,
        }),
      });

      const json = await response.json();
      console.log(json);

      if (json.success) {
        //this the authtoken which is check the authanticity of user and everytime authtoken generate diff.

        localStorage.setItem("userEmail", details.email);
        localStorage.setItem("authToken", json.authTken);
        navigate("/");
      } else {
        alert("Invalid login credentials. Please try again.");
      }
    } catch (error) {
      console.error("Error:", error);
      alert("An error occurred during login.");
    }
  };

  //when we are type something in the input field
  const onChange = (event) => {
    setdetails({ ...details, [event.target.name]: event.target.value });
  };
  return (
    <div
      style={{
        backgroundImage:
          'url("https://images.pexels.com/photos/326278/pexels-photo-326278.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1")',
        height: "100vh",
        backgroundSize: "cover",
      }}
    >
      <div>
        <Navbar />
      </div>

      <div className="container">
        <form
          className="w-50 m-auto mt-5 border bg-dark border-success rounded"
          onSubmit={handleSubmit}
        >
          <div className="mb-3">
            <label htmlFor="exampleInputEmail1" className="form-label">
              Email address
            </label>
            <input
              type="email"
              className="form-control"
              name="email"
              value={details.email}
              onChange={onChange}
            />
          </div>
          <div className="mb-3">
            <label htmlFor="exampleInputPassword1" className="form-label">
              Password
            </label>
            <input
              type="password"
              className="form-control"
              name="password"
              value={details.password}
              onChange={onChange}
            />
          </div>

          <button type="submit" className=" m-3 btn btn-success">
            Submit
          </button>

          <Link to="/createuser" className="m-3 btn btn-danger">
            I'm a new user
          </Link>
        </form>
      </div>
    </div>
  );
}

export default Login;
