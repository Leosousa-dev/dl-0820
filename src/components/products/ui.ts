import styled from "styled-components";


const Availability = styled.div`
    display: flex;
    justify-content: center;
    gap: 14px;
    width: 100%;
    color: #A1A1AA;
    margin: 20px 0px;
`
const Signal = styled.span`
    color: #17C514;
    font-weight: 600;
`

const List = styled.ul`
    width: 100%;
    max-width: 265px;
    margin-top: 24px;
`

const ItemList = styled.div`
    display: flex;
    gap: 14px;
    border-bottom: 1px dashed #E4E4E7;
    padding: 6px 12px;
    color: #52525B;
`
const Option = styled.span`
    color: #A1A1AA;
`

const ProductListUi = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 100%;
`

export {Availability, ProductListUi, Signal, List, ItemList, Option};