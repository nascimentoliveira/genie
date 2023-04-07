import Page from '../components/Page';
import { StyledContainer } from '../components/Auth';

export default function AuthLayout({ children }) {
  return (
    <Page>
      <StyledContainer width="400px" height="550px">
        {children}
      </StyledContainer>
    </Page>
  );
}
