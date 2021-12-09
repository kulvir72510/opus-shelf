import React, { useState } from 'react';
import { setAppElement } from 'react-modal';
import { Props } from 'react-modal';
import ReactDOM from 'react-dom';
import Modal from 'react-modal';
import { Link } from 'react-router-dom';
import img from '../opss.png';
import { useNavigate } from 'react-router';
import '../stylesheets/Register.css';

const customStyles = {
  content: {

    top: '4%',
    left: '30%',
    right: '30%',
    bottom: '4%',

    //marginRight: '-50%',
    //transform: 'translate(-50%, -50%)',

  },
};

// Make sure to bind modal to your appElement (https://reactcommunity.org/react-modal/accessibility/)
setAppElement(document.getElementById('root'));

function Register(props) {

  let subtitle;
  const [modalIsOpen, setIsOpen] = useState(true);
  

  function openModal() {
    
    //setIsOpen(true);
  }

  function afterOpenModal() {
    // references are now sync'd and can be accessed.
    // subtitle.style.color = '#f00';
  }
  const navigate = useNavigate();
  function closeModal() {
    props.setIsShown(false);
    //setIsOpen(false);
    // alert("Modal is Closed");
    //navigate("/");
  }

  const registerUser = (e) =>{

  }

  const [userData, setUserData] = useState(
    {
      name: "",
      email: "",
      phone: "",
      branch: "",
      year: "",
      password: "",
      confpassword:""
    }
  );

  const handleInputChange = (event) => {
    const name = event.target.name;
    const value = event.target.value;
    setUserData({ ...userData, [name]: value });
  }
  
  return (
    
    <div>

      {/* <div>
        name : {userData.name}<br />
        email : {userData.email}<br />
        phone : {userData.phone}<br />
        branch : {userData.branch} <br />
        year : {userData.year} <br />
        password : {userData.password}<br/>
        Confirm Password : {userData.confpassword}
      </div> */}

      {/* <button onClick={openModal}>Open Modal</button> */}
      <Modal
        isOpen={modalIsOpen}
        onAfterOpen={afterOpenModal}
        onRequestClose={closeModal}
        style={customStyles}
        contentLabel="Example Modal"
      >
        <img className="register-img" src={img} alt="logo" />
        <form method="POST" >
          <div className="form-input">
            <input type="text"
              name="name"
              value={userData.name}
              onChange={handleInputChange}
              placeholder="Name"
              required />
          </div>

          <div className="form-input">
            <input type="email"
              name="email"
              value={userData.email}
              onChange={handleInputChange}
              placeholder="Email" 
              required/>
          </div>

          <div className="form-input">
            <input type="tel"
              name="phone"
              value={userData.phone}
              onChange={handleInputChange}
              placeholder="Mobile"
              required />
          </div>

          <div className="form-input">
            <input type="text"
              name="branch"
              value={userData.branch}
              onChange={handleInputChange}
              placeholder="Branch"
              required />
          </div>

          <div className="form-input">
            <input type="number"
              name="year"
              min="1"
              max="4"
              onChange={handleInputChange}
              placeholder="Year"
              required />
          </div>

          <div className="form-input">
            <input type="password"
              name="password"
              value={userData.password}
              onChange={handleInputChange}
              placeholder="Password"
              minLength="8" 
              required/>
          </div>

          <div className="form-input"> 
          <input type="password"
            name="confpassword"
            value={userData.confpassword}
            onChange={handleInputChange}
            placeholder="Confirm Passsword"
            required />
          </div>

          <div className="form-input">
            <button
              type="submit"
              onClick={registerUser} >
              Register
            </button>
          </div>

        </form>
        <div className="form-input logbtn">
         <button onClick={closeModal}>Login</button>
        </div>
      </Modal>
    </div>
  );
}


export default Register;

