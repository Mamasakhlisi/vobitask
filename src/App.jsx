import React, { useState, useEffect } from "react";
import axios from "axios";
import { HashRouter as Router, Switch, Route } from "react-router-dom";
import Jobs from "./components/Jobs/Jobs";
import Resume from "./components/Resumes/Resume";
import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
  * {
    margin:0;
    padding:0;
  } 
`;
function App() {
  const [state, setState] = useState({
    jobs: [],
    resume: {
      name: "",
      lastname: "",
      employer: "",
      position: "",
      email: "",
      phone: "",
      file: "",
      motivation: ""
    }
  });

  // რეზიუმეს გასაგზავნი ინპუტების ჩეინჯერი
  const resumeFormHandler = e => {
    setState({
      ...state,
      resume: {
        ...state.resume,
        [e.target.name]: e.target.value
      }
    });
  };
  // რეზიუმეს დასაბმიტება
  const resumeFormSubmit = e => {
    e.preventDefault();
    console.log(state.resume);
  };
  useEffect(() => {
    axios
      .get("http://localhost:3004/jobs")
      .then(res => setState({ ...state, jobs: res.data }));
  }, []);
  return (
    <div className="App">
      <GlobalStyle />
      <Router>
        <Switch>
          <Route exact path="/">
            <Jobs jobs={state.jobs} />
          </Route>
          <Route path="/resume/:resume_id">
            <Resume
              resumeFormHandler={resumeFormHandler}
              resumeFormSubmit={resumeFormSubmit}
            />
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
