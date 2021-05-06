import React from "react";
import './App.scss';
import SignIn from "../Sign-in/sign-in";
import SignUp from "../Sign-up/sign-up";
import Menu from '../../Component/Menu/menu';
import Header from "../../Component/Menu/header";
import Banner from "../../Component/Banner/banner";
import Body from "../Body/body";


class App extends React.Component {
  render() {
    return (
      <div className="App">
        {/* <SignIn/> */}
        {/* <SignUp/> */}
        <Header/>
        <Body/>
      </div>
    );
  }
}

export default App;
