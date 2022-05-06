import React from "react";
import "../../styles.css/names.css";

const Names = ({ arr, setArr, setFav, fav }) => {
  return (
    <div className="names_container">
      {arr
        .sort((a, b) => a.name.localeCompare(b.name))
        .map((item) => (
          <span
            className="name_btn"
            key={item.id}
            onClick={() => {
              setArr(arr.filter((obj) => item.id !== obj.id));
              setFav([...fav, item]);
            }}
          >
            {item.name}{" "}
          </span>
        ))}
    </div>
  );
};
export default Names;
