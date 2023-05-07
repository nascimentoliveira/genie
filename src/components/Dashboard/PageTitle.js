import styled from "styled-components";

export default function PageTitle({ title }) { 
  return <TitleStyle>{`${title}`}</TitleStyle>;
}

const TitleStyle = styled.p`
  text-align: center;
  font-family: "Kaushan Script", cursive; 
  font-size: 40px;
  margin-bottom: 20px;
  color: #995889;

  &:hover {
    cursor: default;
  }
`;

