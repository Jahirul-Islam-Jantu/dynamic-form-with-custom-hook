import React from 'react';
import Menu from "../components/ui/menus/Menu.jsx";
import InputGroup from "../components/inputGroup/InputGroup.jsx";
import Button from "../components/ui/buttons/Button.jsx";
import useForm from "../hooks/useForm.js";

const init = {
    firstName: '',
    lastName: '',
    email: '',
    password: '',
};

const validate = (values) => {
    const errors = {};

    if (!values.firstName) {
        errors.firstName = 'First Name is Required';
    }

    if (!values.lastName) {
        errors.lastName = 'Last Name is Required';
    }

    if (!values.email) {
        errors.email = 'Email is Required';
    }

    if (!values.password) {
        errors.password = 'Password is Required';
    } else if (values.password.length < 6) {
        errors.password = 'Password length must be 6 character';
    }

    return errors;
};


const DynamicForm = () => {
    const {
        formState: state,
        handleBlur,
        handleChange,
        handleFocus,
        handleSubmit,
        clear,
    } = useForm({ init, validate });

    const cb = ({ hasError, values, errors }) => {
        if (hasError) {
            alert('[ERROR]' + JSON.stringify(errors));
        } else {
            alert('[SUCCESS]' + JSON.stringify(values));
        }
    };


    return (
        <div className="dynamic-form">
            <Menu/>
            <form onSubmit={(e) => handleSubmit(e, cb)}>
                <div style={{display: 'flex', flexDirection: 'column', gap: '1rem'}}>
                    <InputGroup
                        value={state.firstName.value}
                        label={'First Name:'}
                        name={'firstName'}
                        placeholder={'John'}
                        type={'text'}
                        error={state.firstName.error}
                        onChange={handleChange}
                        onFocus={handleFocus}
                        onBlur={handleBlur}
                    />
                    <InputGroup
                        value={state.lastName.value}
                        label={'Last Name:'}
                        name={'lastName'}
                        type={'text'}
                        placeholder={'Doe'}
                        error={state.lastName.error}
                        onChange={handleChange}
                        onFocus={handleFocus}
                        onBlur={handleBlur}
                    />
                    <InputGroup
                        value={state.email.value}
                        label={'Email:'}
                        name={'email'}
                        type={'email'}
                        placeholder={'john@test.com'}
                        error={state.email.error}
                        onChange={handleChange}
                        onFocus={handleFocus}
                        onBlur={handleBlur}
                    />
                    <InputGroup
                        value={state.password.value}
                        label={'password:'}
                        name={'password'}
                        type={'password'}
                        placeholder={'*****'}
                        error={state.password.error}
                        onChange={handleChange}
                        onFocus={handleFocus}
                        onBlur={handleBlur}
                    />

                    <div>
                        <Button type="reset" onClick={clear}>
                            Clear
                        </Button>
                        <Button type="submit">Submit</Button>
                    </div>
                </div>
            </form>
            
        </div>
    );
};

export default DynamicForm;