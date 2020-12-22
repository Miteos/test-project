import './App.css';
import React from "react";
import {BrowserRouter as Router, Switch, Route} from "react-router-dom";
import EditBook from "./pages/EditBook";
import AddBook from "./pages/AddBook";
import BookDetails from "./pages/BookDetails";
import Home from "./pages/Home";

function App() {
  return (
      <Router>
        <div className="App">
            <Switch>
                <Route path="/" exact component={Home}/>
                <Route path="/add-book" component={AddBook}/>
                <Route path="/edit-book/:id" component ={EditBook}/>
                <Route path="/book-details/:id" component ={BookDetails}/>
            </Switch>
        </div>
      </Router>
  );
}

export default App;
