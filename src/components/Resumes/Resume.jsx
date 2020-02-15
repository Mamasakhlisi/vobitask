import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import grid from "./style/Grid.module.scss";
import Item from "./Item";
import Form from "./Form";
import Navbar from "../Resources/Navbar";

const Resume = ({ resumeFormHandler, resumeFormSubmit }) => {
  const { resume_id } = useParams();
  const [state, setState] = useState({
    customItem: []
  });
  useEffect(() => {
    axios.get(`http://localhost:3004/jobs/${resume_id}`).then(res =>
      setState({
        customItem: [res.data]
      })
    );
  }, []);
  return (
    <div>
      <Navbar />
      <div className={grid.container}>
        <div className={grid.item__description}>
          <Item items={state.customItem} />
        </div>
        <div className={grid.item__form}>
          <Form
            resumeFormHandler={resumeFormHandler}
            resumeFormSubmit={resumeFormSubmit}
          />
        </div>
      </div>
    </div>
  );
};

export default Resume;
