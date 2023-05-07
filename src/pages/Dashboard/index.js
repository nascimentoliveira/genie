import styled from "styled-components";
import { Outlet } from "react-router-dom";

import DashboardLayout from "../../layouts/Dashboard";

export default function Dashboard() {
  return (
    <DashboardLayout>
      <Container>
        <Outlet />
      </Container>
    </DashboardLayout>
  );
}

const Container = styled.div`
  padding: 30px;
  height: 100%;
  width: 100%;
  overflow-y: auto;

  @media (max-width: 600px) {
    height: calc(100vh - 80px);
    padding: 20px;
  }
`;
