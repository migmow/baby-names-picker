import React from "react";
import "../../styles.css/favourites.css";

const Favourites = ({ fav, setFav, arr, setArr }) => {
  return (
    <>
      <p className="favourites_container">
        Favourites:
        {fav.map((obj, index) => {
          return (
            <span
              className="fav_btn"
              key={index}
              onClick={() => {
                setFav(fav.filter((item) => item.name !== obj.name));
                setArr([...arr, obj]);
              }}
            >
              {obj.name}
            </span>
          );
        })}
      </p>
    </>
  );
};

export default Favourites;
