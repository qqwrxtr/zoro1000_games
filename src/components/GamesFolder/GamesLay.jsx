import React, { useState } from "react";
import GamesBlock from "./GamesBlock/GamesBlock.jsx";
import ZoroForm from "./../ZoroForm/ZoroForm.jsx";
import "./GamesLay.css";

const Games = () => {
  const [clickCount, setClickCount] = useState(0);
  const [isFormVisible, setIsFormVisible] = useState(false); 

  const handleLoadMoreClick = () => {
    setClickCount((prevCount) => prevCount + 1);
    if (clickCount >= 1) {
      setIsFormVisible(true);
    }
  };

  const handleCloseForm = () => {
    setIsFormVisible(false);
  };

  return (
    <div className="container pt-5 bg_games">
      <div className="row d-flex mx-lg-5 mx-sm-0 justify-content-center row_games">
        <GamesBlock show={clickCount >= 1 ? 1 : 0} />
      </div>
      <div className="row d-flex justify-content-center dada">
        <div className="col-12 d-flex justify-content-center">
          <div className="shadow_down_load_more">
            <button className="btn" onClick={handleLoadMoreClick}>
                משחקים נוספים   
            </button>
          </div>
        </div>
      </div>

      {isFormVisible && <ZoroForm onClose={handleCloseForm} />}
    </div>
  );
};

export default Games;
