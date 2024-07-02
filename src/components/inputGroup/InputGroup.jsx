import React from 'react';
import InputForm from "../ui/inputForms/InputForm.jsx";
import Label from "../ui/inputForms/Label.jsx";

const InputGroup = ({
label, onchange, type, onFocus, onBlur, onSubmit, placeholder, name, value
                    }) => {
    return (
        <div className="input-group">
            <Label htmlFor={name} >{label}</Label>
            <InputForm onChange={onchange} onFocus={onFocus} type={type} name={name} onBlur={onBlur} onSubmit={onSubmit} placeholder={placeholder} value={value} />
        </div>
    );
};

export default InputGroup;