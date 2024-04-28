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
    background-color: #fff;
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


const WhatsAppButtonContainer = styled.button`
  background-color: #25D366; /* Verde do WhatsApp */
  color: #fff;
  border: none;
  padding: 10px 20px;
  border-radius: 5px;
  cursor: pointer;
  display: flex;
  align-items: center;
  transition: background-color 0.3s ease; /* Efeito de hover */
  
  &:hover {
    background-color: #1DA15A; /* Verde escuro do WhatsApp */
  }
`;

export {OrderBtn, Container, ReserveBtn, WhatsAppButtonContainer};