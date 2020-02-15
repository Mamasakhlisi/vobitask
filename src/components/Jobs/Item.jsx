import React from "react";
import scss from "./style/Item.module.scss";
import { Link } from "react-router-dom";

const Item = ({ jobs }) => {
  return jobs.map(item => {
    return (
      <div className={scss.item} key={item.id}>
        <h4 className={scss.item__title}>
          <Link to={`/resume/${item.id}`}>{item.title}</Link>
        </h4>
        <div className={scss.item__description}>
          <h5>{item.region}</h5>
          <i className="fas fa-circle"></i>
          <h5>{item.worktime}</h5>
        </div>
      </div>
    );
  });
};

export default Item;
