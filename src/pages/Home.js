import React from "react";
import {MainTitle} from "../components/MainTitle";
import TableView from "../components/TableView";
import {TableViewStore} from "../stores/TableViewStore";
import {Link} from "react-router-dom";

const tableStore = new TableViewStore();
function Home(){
    return (
        <div className="full-width">
            <TableView data = {tableStore} pageUrl={'books'} />
        </div>

    );
}

export default Home;
