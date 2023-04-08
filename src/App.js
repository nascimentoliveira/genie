import {createTheme} from '@material-ui/core/styles';
import { ThemeProvider as MuiThemeProvider } from '@material-ui/core/styles'
import { ToastContainer } from 'react-toastify';

import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate
} from 'react-router-dom';

import SignUp from './pages/SignUp';
import SignIn from './pages/SignIn';
import Dashboard from './pages/Dashboard';
import { UserProvider } from './contexts/UserContext';
import useToken from './hooks/useToken';
import Overview from './pages/Dashboard/Overview';

const theme = createTheme({
  palette: {
      primary: {
          main: '#768BAF',
      },
      secondary: {
          main: '#995BA3',
      },
  },
});

export default function App() {
  return (
    <>
      <ToastContainer />
      <MuiThemeProvider theme={theme}>
        <UserProvider>
          <Router>
            <Routes>
              <Route path="/" element={<Navigate to="/sign-in" />} />
              <Route path="/sign-up" element={<SignUp />} />
              <Route path="/sign-in" element={<SignIn />} />
              <Route
                path="/dashboard"
                element={
                  <ProtectedRouteGuard>
                    <Dashboard />
                  </ProtectedRouteGuard>
                }
              >
                <Route path="overview" element={<Overview />} />              
                <Route index path="*" element={<Navigate to="/dashboard/overview" />} />
              </Route>
            </Routes>
          </Router>
        </UserProvider>
      </MuiThemeProvider>
    </>
  );
}

function ProtectedRouteGuard({ children }) {
  const token = useToken();
  if (!token) {
    return <Navigate to="/sign-in" />;
  }
  return <>
    {children}
  </>;
}
