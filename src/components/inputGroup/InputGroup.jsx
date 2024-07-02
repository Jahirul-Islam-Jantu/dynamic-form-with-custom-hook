import React from 'react';
import InputForm from "../ui/inputForms/InputForm.jsx";
import Label from "../ui/inputForms/Label.jsx";
import ErrorMessage from "../ui/ErrorMessage.jsx";

const InputGroup = ({
                        label,
                        name,
                        value,
                        type,
                        placeholder,
                        error,
                        onChange,
                        onFocus,
                        onBlur,
                        onSubmit
                    }) => {
    return (
        <div className="input-group">
            <Label htmlFor={name} >{label}</Label>
            <InputForm onChange={onChange} onFocus={onFocus} type={type} name={name} onBlur={onBlur} onSubmit={onSubmit} error={error} placeholder={placeholder} value={value} />
            {error && <ErrorMessage>{error}</ErrorMessage>}
        </div>
    );
};

export default InputGroup;