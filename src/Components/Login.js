import React, { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import Register from './Register';
import "../stylesheets/Login.css";
import opusshelf from "../opusshelf.png";
import opss from "../opss.png";

function Login() {
  const navigate = useNavigate();
  const [isLoading, setLoading] = useState(false);
  const [email, setEmail] = useState("");
  const [password, setPasssword] = useState("");
  const [isShown, setIsShown] = useState(false);


  const loginUser = async (e) => {
    e.preventDefault();
    const res = await fetch("/signin", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        email,
        password,
      }),
    });
    setLoading(true);
    console.log(res);
    const data = await res.json();
    // console.log(data);
    if (res.status === 400 || !data) {
      setLoading(false);
      window.alert("invalid data");
    } else {
      setLoading(false);
      window.alert("successfull");
      navigate("/home");
    }
  };

  //   let name, value;
  //   const handleSubmit = (e) => {
  //     name = e.target.name;
  //     value = e.target.value;

  //     const user = "UserName is: " + email + "\n" + "Password is: " + password;
  //     alert(user);
  //     navigate("/home");
  //   };

  // if (isLoading) {
  //   return (
  //     <div>
  //       <h1>Loading...</h1>
  //     </div>
  //   );
  // }
  return (
    <>{isShown && (
      <Register setIsShown={setIsShown} />)}
      <div className="login-page">
        <div className="row">
          <div className="column">
            <img src={opusshelf} alt="" width="100%" class="leftImg" />
          </div>
          <div className="column">
            <div className="center">
              <img src={opss} alt="" width="100%" />
            </div>

            <form method="POST">
              <div className="form-group">
                <input
                  type="email"
                  id="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="Email"
                  required
                />
              </div>
              <div className="form-group">
                <input
                  id="password"
                  type="password"
                  value={password}
                  onChange={(e) => setPasssword(e.target.value)}
                  placeholder="Password"
                  required
                />
              </div>
                <button
                  type="submit"
                  className="btn0"
                  id="signin"
                  value="Log In"
                  onClick={loginUser}
                >
                  Log In
                </button>

            </form>
            <div className="forgotpass">
              <a href="#">Forgot Password ?</a>
            </div>

            <div className="buttondiv">
              <button className="gbtn">Google</button>
              <button className="fbtn">Facebook</button>
            </div>
            <button className="reg-btn"
                  onClick={() => setIsShown(true)}>
                  Sign Up
                </button>
          </div>
        </div>
      </div>
    </>
  );
}

export default Login;
