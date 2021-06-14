import React from "react";
import './App.scss';
import { Switch, Route } from 'react-router-dom';
import Home from '../../Component/Home/home'
import SignIn from "../Sign-in/sign-in";
import SignUp from "../Sign-up/sign-up";
import Header from "../../Component/Menu/header";
import Body from "../Body/body";
import DiseaseDetail from "../Diseases/disease-details";


class App extends React.Component {
  render() {
    return (
      <div className="App">
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/sign-in" component={SignIn} />
          <Route exact path="/sign-up" component={SignUp} />
          <Route exact path="/body" component={Body} />
          <Route exact path="/d-details/:id" component={DiseaseDetail} />
        </Switch>
      </div>
    );
  }
}

export default App;
