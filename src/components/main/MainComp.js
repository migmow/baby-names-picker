import React, { useState } from "react";
import Favourites from "../general/Favourites";
import Names from "../general/Names";
import Search from "../general/Search";
import names from "../../data/babyNamesData.json";

function MainComp() {
  const [searchValue, setSeacrhValue] = useState("");
  const [arr, setArr] = useState(names);
  const [fav, setFav] = useState([]);
  const [gender, setGender] = useState({
    boys: false,
    girls: false,
    both: true,
  });

  const handleChange = (e) => {
    setSeacrhValue(e.target.value);
    const myArray = names.filter((obj) => {
      return obj.name.toLowerCase().includes(e.target.value.toLowerCase());
    });
    setArr(myArray);
  };
  return (
    <>
      <Search
        searchValue={searchValue}
        handleChange={handleChange}
        names={names}
        gender={gender}
        setGender={setGender}
        setArr={setArr}
        arr={arr}
      />
      <Favourites fav={fav} arr={arr} setFav={setFav} setArr={setArr} />
      <Names arr={arr} setArr={setArr} setFav={setFav} fav={fav} />
    </>
  );
}

export default MainComp;
