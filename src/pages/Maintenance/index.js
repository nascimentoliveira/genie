import React from "react";
import styled from "styled-components";

import PageTitle from "../../components/Dashboard/PageTitle";
import Text from "../../components/Text";

const MaintenancePage = () => {
  return (
    <>
      <PageTitle title={"overview"} />
      <AlignBox>
        <TextBox>
          <Text text={"Página em construção!"} />
        </TextBox>
        <TextBox>
          <Text text={"Esta página está momentaneamente em manutenção para a implementação de novas funcionalidades!"} />
        </TextBox>
      </AlignBox>
    </>
  );
};

export default MaintenancePage;

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