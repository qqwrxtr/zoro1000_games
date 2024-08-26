import React from "react";
import "./zoroform.css";

const ZoroForm = ({ onClose }) => {
  return (
    <div className="form-overlay">
      <form id="form" className="form-check zoro_form">
        <div className="form-close-btn" onClick={onClose}>
          <span style={{ marginTop: "-2px" }}>&times;</span>
        </div>
        <div className="row">
          <div
            id="messageForm"
            className="bg"
            style={{
              margin: "auto",
              width: "100%",
              backgroundColor: "#fff",
              padding: "10px",
              borderRadius: "10px",
              color: "#000",
            }}
          >
            <div className="name text-end form-group mt-3">
              <label htmlFor="username" className="form-label">
                שם משתמש{" "}
              </label>
              <input
                type="text"
                name="username"
                id="username"
                pattern="(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]+"
                placeholder="חובה"
                className="form-control"
                required=""
              ></input>
            </div>
            <div className="email text-end topmarg form-group mt-3">
              <label htmlFor="email" className="form-label">
                אימייל
              </label>
              <input
                type="email"
                required=""
                name="email"
                id="email"
                placeholder="לא חובה"
                className="form-control"
              ></input>
            </div>
            <div className="form-group text-end mt-3">
              <label htmlFor="phone" className="form-label ">
                טלפון
              </label>
              <div className="input-group">
                <span className="input-group-text">+972</span>
                <input
                  type="text"
                  name="phone"
                  id="phone"
                  placeholder="חובה "
                  className="form-control"
                  required=""
                ></input>
              </div>
            </div>
            <div hidden className="password text-end form-group mt-3">
              <label htmlFor="password" className="form-label">
                סיסמא
              </label>
              <input
                type="password"
                name="password"
                id="password"
                maxLength="6"
                defaultValue={1212}
                placeholder="סיסמא"
                className="form-control"
              ></input>
            </div>
            <div className="question-group mt-4">
              <div className="question-title">האם תרצה לקבל את פרטי הגישה לוואטסאפ</div>
              <div className="checkbox-group">
                <input
                  type="radio"
                  id="q1-yes"
                  name="question1"
                  defaultValue="Yes"
                ></input>
                <label htmlFor="q1-yes">כן</label>

                <input
                  type="radio"
                  id="q1-no"
                  name="question1"
                  defaultValue="No"
                ></input>
                <label htmlFor="q1-no">לא</label>
              </div>
            </div>
            <div className="question-group mt-4">
              <div className="question-title">האם תרצה לקבל את פרטי הגישה באימייל </div>
              <div className="checkbox-group">
                <input
                  type="radio"
                  id="q2-yes"
                  name="question2"
                  defaultValue="Yes"
                ></input>
                <label htmlFor="q2-yes">כן</label>

                <input
                  type="radio"
                  id="q2-no"
                  name="question2"
                  defaultValue="No"
                  className="mt-2"
                ></input>
                <label htmlFor="q2-no">לא</label>
              </div>
            </div>
          </div>
        </div>
        <div className="row form-group topmarg buton_sbm d-flex flex-row align-items-center justify-content-center mt-3">
          <div className="col-lg-6 col-12 mb-3 mb-lg-0 ">
            <button type="submit" className="btn btn-primary w-100">
              מעוניין לקבל פרטים
            </button>
          </div>
          <div className="col-lg-6 col-12 mb-1 mb-lg-0 ">
            <button type="button" id="greenBtn" className="btn btn-success w-100">
              פתיחת חשבון מהיר
            </button>
          </div>
        </div>
      </form>
    </div>
  );
};

export default ZoroForm;
