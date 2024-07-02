import {useState} from "react";
import {mapStateToKeys, mapValuesToState} from "../utils/helperFunction.js";
import {deepClone, isObjEmpty} from "../utils/object-utils.js";

const useForm = ({init, validate}) => {
 const [state, setState] = useState(mapValuesToState(init));

const handleChange = (e) => {
 const {name: key, value} = e.target;

 const oldState = deepClone(state)
 oldState[key].value = value

 const values = mapStateToKeys(oldState)
 const { errors } = getErrors();

 if (oldState[key].touched && errors[key]) {
  oldState[key].error = errors[key];
 } else {
  oldState[key].error = '';
 }
 setState(oldState);
}

 const handleFocus = (e) => {
  const { name } = e.target;

  const oldState = deepClone(state);
  oldState[name].focused = true;

  if (!oldState[name].touched) {
   oldState[name].touched = true;
  }

  setState(oldState);
 };

 const handleBlur = (e) => {
  const key = e.target.name;

  const { errors } = getErrors();
  const oldState = deepClone(state);

  if (oldState[key].touched && errors[key]) {
   oldState[key].error = errors[key];
  } else {
   oldState[key].error = '';
  }

  oldState[key].focused = false;
  setState(oldState);
 };

 const handleSubmit = (e, cb) => {
  e.preventDefault();
  const { errors, hasError, values } = getErrors();

  cb({
   hasError,
   errors,
   values,
   touched: mapStateToKeys(state, 'touched'),
   focused: mapStateToKeys(state, 'focused'),
  });
 };

 const clear = () => {
  const newState = mapValuesToState(init, true);
  setState(newState);
 };

 const getErrors = () => {
  let hasError = null,
      errors = null;

  const values = mapStateToKeys(state, 'value');

  if (typeof validate === 'boolean') {
   hasError = validate;
   errors = mapStateToKeys(state, 'error');
  } else if (typeof validate === 'function') {
   const errorsFromCb = validate(values);
   hasError = !isObjEmpty(errorsFromCb);
   errors = errorsFromCb;
  } else {
   throw new Error('validate property must be boolean or function');
  }

  return {
   hasError,
   errors,
   values,
  };
 };

 return {
  formState: state,
  handleChange,
  handleFocus,
  handleBlur,
  handleSubmit,
  clear,
 };
}
export default useForm