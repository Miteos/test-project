import './App.css';
import React from "react";
import {BrowserRouter as Router, Switch, Route} from "react-router-dom";
import EditBook from "./pages/EditBook";
import AddBook from "./pages/AddBook";
import BookDetails from "./pages/BookDetails";
import Home from "./pages/Home";
import Libraries from "./pages/Libraries";
import AddLibrary from "./pages/AddLibrary";
import LibraryDetails from "./pages/LibraryDetails";
import NavView from "./components/NavView";

function App() {
  return (
      <Router>
          <NavView/>
        <div className="App">
            <Switch>
                <Route path="/" exact component={Home}/>
                <Route path="/add-book" component={AddBook}/>
                <Route path="/edit-book/:id" component ={EditBook}/>
                <Route path="/book-details/:id" component ={BookDetails}/>
                <Route path="/libraries" component ={Libraries}/>
                <Route path="/library-details/:id"  component ={LibraryDetails}/>
                <Route path="/add-library" component ={AddLibrary}/>
            </Switch>
        </div>
      </Router>
  );
}

export default App;
