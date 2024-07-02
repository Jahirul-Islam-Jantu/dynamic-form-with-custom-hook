import React from 'react';
import {BrowserRouter, Route, Routes} from "react-router-dom";
import DynamicForm from "./pages/DynamicForm.jsx";
import "./assets/css/style.css"

const App = () => {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<DynamicForm />} />
                <Route path="/test" element={<DynamicForm />} />
            </Routes>
        </BrowserRouter
        >
    );
};

export default App;