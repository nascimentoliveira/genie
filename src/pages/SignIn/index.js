import { useState, useContext } from "react";
import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";

import AuthLayout from "../../layouts/Auth";
import Input from "../../components/Form/Input";
import Button from "../../components/Form/Button";
import Link from "../../components/Link";
import { Row, Title, Label } from "../../components/Auth";
import logo from "../../assets/images/logo.svg"
import useSignIn from "../../hooks/api/useSignIn";
import UserContext from "../../contexts/UserContext";

export default function SignIn() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const { loadingSignIn, signIn } = useSignIn();
  const { setUserData } = useContext(UserContext);
  const navigate = useNavigate();
  
  async function submit(event) {
    event.preventDefault();

    try {
      const userData = await signIn(email, password);
      toast("Successfully!");
      setUserData(userData);
      navigate("/dashboard");
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
          <Input label="E-mail" type="text" fullWidth value={email} onChange={e => setEmail(e.target.value)} />
          <Input label="Password" type="password" fullWidth value={password} onChange={e => setPassword(e.target.value)} />
          <Button type="submit" color="primary" fullWidth disabled={loadingSignIn}>Sign in</Button>
        </form>
      </Row>
      <Row>
        <Link to="/sign-up">New to genie? Create an account.</Link>
      </Row>
    </AuthLayout>
  );
}
