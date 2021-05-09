
import './App.css';
import Dashboard from "./Components/Dashboard";
import {BrowserRouter} from "react-router-dom";
import React from "react";

function App() {
    return (

        <div className="App">
            <BrowserRouter>
                <Dashboard/>
            </BrowserRouter>
        </div>
    );
}

export default App;
