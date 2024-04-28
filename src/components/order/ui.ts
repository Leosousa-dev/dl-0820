import styled from "styled-components";


const OrderBtn = styled.div`
    display: flex;
    gap: 14px;
    background-color: #270C0F;
    cursor: pointer;
    align-items: center;
    justify-content: center;
    color: #F3F3F3;
    font-weight: 500;
    border: none;
    width: 100%;
    padding: 8px 24px;
    border-radius: 12px;
`
const ReserveBtn = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 14px;
    cursor: pointer;
    color: #52525B;
    border: 1px solid #938587;
    font-weight: 500;
    width: 100%;
    padding: 5px 24px;
    border-radius: 12px;
`

const Container = styled.div`
    display: flex;
    margin-top: 48px;
    flex-direction: column;
    gap: 12px;
    width: 100%;
    height: 100%;
    max-width: 300px;
`

export {OrderBtn, Container, ReserveBtn};