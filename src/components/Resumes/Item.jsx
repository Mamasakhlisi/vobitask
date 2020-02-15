import React from "react";
import scss from './style/Item.module.scss';
const Item = ({ items }) => {
  console.log(items);
  return items.length
    ? items.map(item => (
        <div key={item.id} className={scss.item}>
          <h3 className={scss.title}>{item.title}</h3>
          <div className={scss.description}><p>{item.description}</p></div>
        </div>
      ))
    : "შეცდომა";
};

export default Item;
