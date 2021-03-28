import react, { useState } from "react";
import data from "../data";
import Fetchdata from "./fetchdata";

const Filter = () => {
  const [state, setState] = useState("All");
  const pushCat = (e) => {
    setState(e.target.textContent);
  };
  return (
    <>
      <div className="filter-menu">
        <ul>
          <li onClick={pushCat}>All</li>
          <li onClick={pushCat}>Breakfast</li>
          <li onClick={pushCat}>Lunch</li>
          <li onClick={pushCat}>Dinner</li>
        </ul>
      </div>

      <div className="item-content">
        <Fetchdata state={state} />
      </div>
    </>
  );
};

export default Filter;
