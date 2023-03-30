import {createTheme} from '@material-ui/core/styles';
import MuiThemeProvider from '@material-ui/core/styles/MuiThemeProvider';

import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate
} from 'react-router-dom';

import SignUp from './pages/SignUp';
import SignIn from './pages/SignIn';

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
    <MuiThemeProvider theme={theme}>
      <Router>
        <Routes>
          <Route path="/" element={<Navigate to="/sign-in" />} />
          <Route path="/sign-up" element={<SignUp />} />
          <Route path="/sign-in" element={<SignIn />} />
          {/* <Route index path="*" element={<NotFound />} /> */}
          </Routes>
      </Router>
    </MuiThemeProvider>
  );
}
