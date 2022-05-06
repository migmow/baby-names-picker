import React from "react";

const Search = ({
  searchValue,
  setArr,
  handleChange,
  gender,
  setGender,
  names,
  arr,
}) => {
  return (
    <div className="header_container">
      <input
        type="text"
        placeholder="Type a name.."
        value={searchValue}
        onChange={handleChange}
      />
      <button
        className="girls_filtered"
        onClick={() => {
          if (!gender.girls) {
            setGender({
              boys: false,
              girls: true,
              both: false,
            });
            setArr(names.filter((name) => name.sex === "f"));
          }
        }}
      >
        Girls
      </button>
      <button
        className="boys_filtered"
        onClick={() => {
          if (!gender.boys) {
            setGender({
              boys: true,
              girls: false,
              both: false,
            });
            setArr(names.filter((name) => name.sex === "m"));
          }
        }}
      >
        Boys
      </button>
      <button
        className="both_gender_names"
        onClick={() => {
          if (!gender.both) {
            setGender({
              boys: false,
              girls: false,
              both: true,
            });
            setArr(names);
          }
        }}
      >
        All
      </button>
    </div>
  );
};

export default Search;
