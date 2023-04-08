import styled from "styled-components";
import { useNavigate } from "react-router-dom";

import Text from "../../../components/Text";
import Button from "../../../components/Dashboard/Button";
import PageTitle from "../../../components/Dashboard/PageTitle";
import Balance from "../../../components/Dashboard/Balance";

export default function Overview() {
  const wishes = [];
  const navigate = useNavigate();

  if (wishes.length === 0) {
    return (
      <>
        <PageTitle title={"overview"} />
        <Balance />
        <AlignBox>
          <TextBox>
            <Text text={"No wish. Start now!"} />
          </TextBox>
          <Button size="large" color="primary" onClick={()=> navigate("/dashboard/new-wish")}>NEW WISH</Button>
        </AlignBox>
      </>
    );
  }

  return (
    <>
      <PageTitle title={"overview"} />
    </>
  );
}

const TextBox = styled.div`
  text-align: center;
  margin: 50px;
`;

const AlignBox = styled.div`
  height: calc(100% - 170px);
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;