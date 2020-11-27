import React from "react";
import DataTable from "./components/DataTable";
import './App.css';
import NewBook from "./components/NewBook";

function App(){
        return (
                <div className="App">
                      <DataTable/>
                      <NewBook/>
                </div>

        );
}

export default App;
