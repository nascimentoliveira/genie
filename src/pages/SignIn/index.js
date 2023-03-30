import { useState } from 'react';
import { toast } from 'react-toastify';

import AuthLayout from '../../layouts/Auth';
import Input from '../../components/Form/Input';
import Button from '../../components/Form/Button';
import Link from '../../components/Link';
import { Row, Title, Label } from '../../components/Auth';
import logo from "../../assets/images/logo.svg"
import useSignIn from '../../hooks/api/useSignIn';

export default function SignIn() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const { loadingSignIn, signIn } = useSignIn();
  
  async function submit(event) {
    event.preventDefault();

    try {
      await signIn(email, password);
      toast('Successfully!');
    } catch (error) {
      toast('Unable to access your account!');
    }
  } 

  return (
    <AuthLayout>
      <Row>
        <img src={logo} alt="genie" width="250px" />
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
