import React from "react";
import {MainTitle} from "../components/MainTitle";
import TableView from "../components/TableView";
import {TableViewStore} from "../stores/TableViewStore";
import {Link} from "react-router-dom";

const tableStore = new TableViewStore();
function Home(){
    return (
        <div className="App">
            <MainTitle title={'The Great Library'}/>
            <Link to={'/libraries'}><button className="green-button">Libraries</button></Link>
            <TableView data = {tableStore} pageUrl={'books'} />

        </div>

    );
}

export default Home;
