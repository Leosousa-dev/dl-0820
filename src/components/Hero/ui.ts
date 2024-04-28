import styled from "styled-components";

const HeroUI = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  max-width: 600px;
  text-align: center;
  margin-top: 64px;
  padding: 0px 16px;
`

const Headline = styled.h1`
  color: #FF626E;
  font-family: "Pacifico", cursive;
`
const About = styled.p`
  color: #A1A1AA;
  margin-top: 16px;
`

export {HeroUI, Headline, About};