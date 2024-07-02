import styled from "styled-components";

const Button = styled.button`
    padding: 10px 12px;
    background-color: transparent;
    color: #333;
    box-shadow: 1px 1px 1px #ddd;
    border: 1px solid #999999;
    border-radius: 0.8rem;
    cursor: pointer;
    transition: 1s;

    &:hover {
        color: #1d68f8;
        border: 0.075rem solid #1d68f8;
        transition: 1s;
    }

    &:focus {
        color: #9af85d;
        border: 0.090rem solid #9af85d;
        transition: 1s;
    }

`
export default Button