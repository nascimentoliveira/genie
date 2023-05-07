import styled from "styled-components";
import Fab from "@mui/material/Fab";
import RemoveIcon from "@mui/icons-material/Remove";
import AddIcon from "@mui/icons-material/Add";

export default function Balance() {
  return (
    <BalanceContainer>
      <WelcomeMessage>Hi, Thiago</WelcomeMessage>
      <BalanceStatus>
        <Title>Your balance</Title>
        <Fab size="small" color="secondary" aria-label="Remove" style={{"margin": " 0 10px"}}>
          <RemoveIcon />
        </Fab>
          R$ 500,00
        <Fab size="small" color="secondary" aria-label="Add" style={{"margin": " 0 10px"}}>
          <AddIcon />
        </Fab>
      </BalanceStatus>
    </BalanceContainer>
  );
}

const BalanceContainer = styled.div`
  width: 100%;
  height: 100px;
  display: flex;
  justify-content: space-between;
  font-family: "Lexend Deca", sans-serif;
  color: #768BAF;
`;

const WelcomeMessage = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  font-size: 30px;
`;

const Title = styled.p`
  text-align: center;
  font-size: 20px;
  margin: 10px 0;
`;

const BalanceStatus = styled.div`
  text-align: center;
  font-size: 40px;
`;