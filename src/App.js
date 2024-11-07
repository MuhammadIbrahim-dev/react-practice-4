import logo from "./logo.svg";
import "./App.css";
import { useState } from "react";
import { click } from "@testing-library/user-event/dist/click";
import { questions } from "./data/list";
function App() {
  let [istatus, setistatus] = useState(false);
  let [menuStatus, setmenuStatus] = useState(false);
  let [popupStatus, setpopupStatus] = useState(false);
  let [faqstatus, setfaqstatus] = useState(questions.id);

  return (

    <div className="App">
          <simple></simple>
      <div className="faQbox">
        <h1>welcom faQs</h1>
        <div className="faqouter">
          {questions.map((faqitems)=>{
            return(
              <div className="faqitem">
                <h3 onClick={()=>{setfaqstatus(faqitems.id)}}>{faqitems.ques}</h3>
                <p className={faqstatus==faqitems.id?'faqitemactive':''}>{faqitems.answer}</p>
              </div>
            )
          })}
        </div>
      </div>
      <button
        className="btnpopup"
        onClick={() => {
          setpopupStatus(!popupStatus);
        }}
      >
        click me
      </button>
      <div
        className={`popuplayer ${popupStatus ? "popuplayeractive" : ""}`}
      ></div>
      <div className={`popup ${popupStatus ? "popupactive" : ""}`}>
        <button
          className="cross"
          onClick={() => {
            setpopupStatus(!popupStatus);
          }}
        >
          &times;
        </button>
      </div>
      <button
        className="micon"
        onClick={() => {
          setmenuStatus(!menuStatus);
        }}
      >
        {menuStatus ? <span>&times;</span> : <span> &#9776; </span>}
      </button>
      <div className={`menu ${menuStatus ? "activeMenu" : ""}`}>
        <ul>
          <li onClick={() => setmenuStatus()}>Home</li>
          <li onClick={() => setmenuStatus()}>about</li>
          <li onClick={() => setmenuStatus()}>Blog</li>
          <li onClick={() => setmenuStatus()}>contact</li>
          <li onClick={() => setmenuStatus()}>projects</li>
          <li onClick={() => setmenuStatus()}>product</li>
        </ul>
      </div>

      <input
        className="input___page"
        type={istatus ? "text" : "password"}
        placeholder="Enter your password"
      />
      <button
        onClick={() => {
          setistatus(!istatus);
        }}
      >
        {istatus ? "hide" : "show"}
      </button>
    </div>
  );
}

export default App;
