import {deepClone} from "./object-utils.js";

export const  handleChange = (e) => {
    const { name: key, value, type } = e.target;

    const oldState = deepClone(state);
    if (type === 'checkbox') {
        oldState[key].value = 'checked';
    } else {
        oldState[key].value = value;
    }

    const { errors } = getErrors();

    if (oldState[key].touched && errors[key]) {
        oldState[key].error = errors[key];
    } else {
        oldState[key].error = '';
    }
    setState(oldState);
}

export const handleSubmit = (e) => {
    e.preventDefault()
}

export const handleReset = (e) => {
    e.preventDefault()
}
export const handleFocused = () => {

}
export const handleBlur = () => {

}

