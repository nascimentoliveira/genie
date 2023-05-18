import { useState, useContext } from "react";
import styled from "styled-components";
import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";
import { Visibility, VisibilityOff } from '@mui/icons-material';
import MuiButton from "@mui/material/Button";
import { 
  IconButton, 
  OutlinedInput, 
  TextField,
  InputLabel,
  InputAdornment, 
  FormControl } from '@mui/material';

import AuthLayout from "../../layouts/Auth";
import Link from "../../components/Link";
import { Row, Title, Label } from "../../components/Auth";
import logo from "../../assets/images/logo.svg"
import useSignIn from "../../hooks/api/useSignIn";
import UserContext from "../../contexts/UserContext";

export default function SignIn() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const { loadingSignIn, signIn } = useSignIn();
  const { setUserData } = useContext(UserContext);
  const navigate = useNavigate();

  const handleClickShowPassword = () => setShowPassword((show) => !show);

  const handleMouseDownPassword = (e) => e.preventDefault();
  
  async function submit(event) {
    event.preventDefault();

    try {
      const userData = await signIn(email, password);
      toast("Successfully!");
      setUserData(userData);
      navigate("/accounts/overview");
    } catch (error) {
      toast("Unable to access your account! " + (error.response?.data.message || ""));
    }
  } 

  return (
    <AuthLayout>
      <Row>
        <img src={logo} alt="genie" width="200px" />
        <Title>may your wish come true</Title>
      </Row>
      <Row>
        <Label>Sign in</Label>
        <form onSubmit={submit}>
          <StyledEmailField
            required 
            label="E-mail" 
            type="text" 
            fullWidth 
            value={email} 
            onChange={e => setEmail(e.target.value)} 
          />

          <FormControl sx={{ marginTop: "8px" }} variant="outlined" required fullWidth>
            <InputLabel htmlFor="outlined-adornment-password">Password</InputLabel>
            <OutlinedInput
              id="outlined-adornment-password"
              type={showPassword ? 'text' : 'password'}
              value={password}
              onChange={e => setPassword(e.target.value)}
              label="Password"
              endAdornment={
                <InputAdornment position="end" >
                  <IconButton
                    onClick={handleClickShowPassword}
                    onMouseDown={handleMouseDownPassword}
                    edge="end"
                  >
                    {showPassword ? <VisibilityOff /> : <Visibility />}
                  </IconButton>
                </InputAdornment>
              }
            />
          </FormControl>
        
          <SendButton 
            type="submit" 
            color="primary" 
            fullWidth
            variant="contained" 
            disabled={loadingSignIn}
          >
            Sign in
          </SendButton>

        </form>
      </Row>
      <Row>
        <Link to="/users/new">New to genie? Create an account.</Link>
      </Row>
    </AuthLayout>
  );
}

const SendButton = styled(MuiButton)`
  margin-top: 8px !important;
`;

const StyledEmailField = styled(TextField)`
  margin-top: 8px !important;
`;
