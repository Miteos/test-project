import React from "react";
import {MainTitle} from "../components/MainTitle";
import TableView from "../components/TableView";
import {TableViewStore} from "../stores/TableViewStore";

const tableStore = new TableViewStore();
function Home(){
    return (
        <div className="App">
            <MainTitle title={'The Great Library'}/>
            <TableView data = {tableStore}  />
        </div>

    );
}

export default Home;
