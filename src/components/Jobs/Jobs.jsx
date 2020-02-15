import React from "react";
import scss from "./style/Jobs.module.scss";
import Item from "./Item";
import Navbar from "../Resources/Navbar";

const Jobs = ({ jobs }) => {
  return (
    <div>
      <Navbar />
      <div className={scss.container}>
        <Item jobs={jobs} />
      </div>
    </div>
  );
};

export default Jobs;
