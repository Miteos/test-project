import './App.css';
import React from "react";
import TableView from "./components/TableView";
import {TableViewStore} from "./stores/TableViewStore";
import SelectInputView from "./components/inputs/SelectInputView";
import {SelectInputViewStore} from "./stores/SelectInputViewStore";
import {MainTitle} from "./components/MainTitle";


const tableStore = new TableViewStore();
function App() {
  return (
    <div className="App">
      <MainTitle title={'Lord of the Rings Characters'}/>
      <TableView data = {tableStore}/>
    </div>
  );
}

export default App;
