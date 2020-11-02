import React from 'react';
import './App.css';
import {Header} from "./containers/header/Header";
import {MainPage} from "./containers/MainPage/MainPage";
import {Footer} from "./containers/Footer/Footer";

function App() {
    return (
        <div className="App">
            <Header/>
            <MainPage/>
            <Footer />
        </div>
    );
}

export default App;
