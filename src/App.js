import React from 'react';
import './App.css';
import {
  Route,
  HashRouter as Router,
  Switch

} from "react-router-dom"

import { TopNav } from "./components/navigation/TopNav"
import { ViewProfileLayout } from "./layouts/viewprofile/ViewProfile"
import { EditProfileLayout } from "./layouts/editprofile/EditProfile"
import { ReadArticleLayout } from "./layouts/readarticle/ReadArticle"

function App() {
  return (

    <div id="app-container">
      <Router>
        <div className="top-nav-container" width='100vh'>
          <TopNav />
        </div>

          <div className="main-content ">
            <div role="main">
              <Switch>
                <Route path="/viewprofile" component={ViewProfileLayout} />
                <Route path="/editprofile" component={EditProfileLayout} />
                <Route path="/editprofile" component={EditProfileLayout} />
                <Route path="/readarticle" component={ReadArticleLayout}/>
              </Switch>
            </div>
          </div>

      </Router>
    </div>
  );
}

export default App;
