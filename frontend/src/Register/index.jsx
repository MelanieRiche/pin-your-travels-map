import { Cancel, Room } from "@material-ui/icons";
import axios from "axios";
import { useRef, useState } from "react";
import "./style.css";

export default function Register() {


  return (
    <div className="registerContainer">
      <div className="logo">
        <Room className="logoIcon" />
        <span>LogoName</span>
      </div>
      <form>
        <input autoFocus placeholder="username" />
        <input
          type="password"
          min="6"
          placeholder="password"
        />
        <button className="loginBtn" type="submit">
          Login
        </button>
        <span className="success">Successfull. You can login now!</span>
        <span className="failure">Something went wrong!</span>
      </form>
      <Cancel className="loginCancel" />
    </div>
  );
};