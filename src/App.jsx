import React from "react";
import routes from "./routes";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import { CodeSnippets, Home, TodoList } from "./screens";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

function App() {
  return (
    <Router>
      <Navbar />
      <Switch>
        <Route component={Home} path={routes.home} exact />
        <Route component={CodeSnippets} path={routes.snippets} exact />
        <Route component={TodoList} path={routes.todoList} exact />
      </Switch>
      <Footer />
    </Router>
  );
}

export default App;
