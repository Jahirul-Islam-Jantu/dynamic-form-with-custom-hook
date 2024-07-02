import React from 'react';
import {HashRouter, Route, Routes} from "react-router-dom";
import DynamicForm from "./pages/DynamicForm.jsx";
import "./assets/css/style.css"

const App = () => {
    return (
        <HashRouter>
            <Routes>
                <Route path="/" component={<DynamicForm />} />
            </Routes>
        </HashRouter>
    );
};

export default App;