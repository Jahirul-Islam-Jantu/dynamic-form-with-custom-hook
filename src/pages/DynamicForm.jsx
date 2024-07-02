import React from 'react';
import Menu from "../components/ui/menus/Menu.jsx";
import InputGroup from "../components/inputGroup/InputGroup.jsx";
import Button from "../components/ui/buttons/Button.jsx";

const DynamicForm = () => {
    return (
        <div className="dynamic-form">
            <Menu/>
        <div className="dynamic-form">
            <InputGroup name = {"name"} label = {"Name: "} placeholder={"example: John Doe"} type = {"text"} />
            <InputGroup name = {"name"} label = {"Email: "} placeholder={"example: john@example.com"} type = {"email"} />
            <InputGroup name={"name"} label={"Password: "} placeholder={"********"} type={"password"}/>
        </div>

        <div>
           <Button>Submit</Button>
        </div>
        </div>
    );
};

export default DynamicForm;