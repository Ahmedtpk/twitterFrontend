import React from "react";
import { HashRouter, Switch, Route } from "react-router-dom";
import "./App.css"

import Overview from "./Overview";
import login from "./login";
import details from "./details";
import Logout from "./Logout";
import UserFeed from "./UserFeed";

class App extends React.Component {
 
  render(){
    return(
    <HashRouter>
        <div>
          <h1 className="headerContainer">Twatter Tweets</h1>
          <Switch>
            <Route path="/" exact component={Overview} />
            <Route path="/user/:username" component={UserFeed} />
            <Route path="/login" component={login} />
            <Route path="/details/:id" component={details}/>
            <Route path="/logout" component={Logout} />
          </Switch>
        </div>
      </HashRouter>
    )
  }
}

export default App;


