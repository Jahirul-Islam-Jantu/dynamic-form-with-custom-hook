export const mapValuesToState = (values) => {
    return Object.keys(values).reduce((acc, key) => {
        acc[key] = {
            value: values[key],
            error: "",
            focused: false,
            touched: false,
        }

        return acc
    }, {})
}

export const mapStateToKeys = (state) => {
    return Object.keys(state).reduce((acc, cur) => {
        acc[cur] = state[cur].value;

        return acc;
    },{})
}