import Button from '../../components/Dashboard/Button';
import styled from 'styled-components';

import DashboardLayout from '../../layouts/Dashboard';

export default function Dashboard() {
  return (
    <DashboardLayout>
      <Container>
        <Button size="large" color="primary">NEW WISH</Button>
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
