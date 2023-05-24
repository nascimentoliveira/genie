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
          <Text text={"Page under maintenance!"} />
        </TextBox>
        <TextBox>
          <Text text={"This page is currently under maintenance for the implementation of new features!"} />
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