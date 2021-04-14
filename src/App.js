import * as React from "react";
import { AnimatePresence } from "framer-motion";
import { Switch, Route, NavLink, useLocation } from "react-router-dom";

import { library } from "@fortawesome/fontawesome-svg-core";
import { fas } from "@fortawesome/free-solid-svg-icons";

import "./styles.css";

import About from "./pages/about";
import Home from "./pages/home";
import Settings from "./pages/settings";

library.add(fas);

function App() {
  const location = useLocation();

  return (
    <div className="container-fluid">
      <div className="row">
        <nav
          className="col-6 col-sm-4 col-md-2 px-10 mr-10"
          style={{ height: "100vh", zIndex: 1000 }}
        >
          <ul className="nav nav-pills flex-column">
            <li className="nav-item">
              <NavLink
                to="/"
                exact
                className="nav-link"
                activeStyle={{ color: "white", backgroundColor: "gray" }}
              >
                Dashboard
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink
                to="/about"
                className="nav-link"
                activeStyle={{ color: "white", backgroundColor: "gray" }}
              >
                About
              </NavLink>
            </li>

            <li className="nav-item">
              <NavLink
                to="/settings"
                className="nav-link"
                activeStyle={{ color: "white", backgroundColor: "gray" }}
              >
                Settings
              </NavLink>
            </li>
          </ul>
        </nav>
        <main
          className="col-6 col-sm-8 col-md-10"
          style={{ overflowX: "hidden", position: "relative" }}
        >
          <AnimatePresence>
            <Switch location={location} key={location.pathname}>
              <Route path="/about" component={About} />
              <Route path="/settings" component={Settings} />
              <Route path="/" component={Home} />
            </Switch>
          </AnimatePresence>
        </main>
      </div>
    </div>
  );
}

export default App;
