import { useState } from 'react';
import { toast } from 'react-toastify';
import { useNavigate } from 'react-router-dom';

import logo from "../../assets/images/logo.svg"
import AuthLayout from '../../layouts/Auth';
import Input from '../../components/Form/Input';
import Button from '../../components/Form/Button';
import { Row, Title, Label } from '../../components/Auth';
import Link from '../../components/Link';
import useSignUp from '../../hooks/api/useSignUp';

export default function SignUp() {
  const [email, setEmail] = useState('');
  const [name, setName] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');

  const { loadingSignUp, signUp } = useSignUp();

  const navigate = useNavigate();

  async function submit(event) {
    event.preventDefault();

    if (password !== confirmPassword) {
      toast('Passwords must be the same!');
    } else {
      try {
        await signUp(email, name, password);
        toast('Successfully enrolled! Please login.');
        navigate('/sign-in');
      } catch (error) {
        toast('Could not register! ' + (error.response?.data.message || ''));
      }
    }
  }

  return (
    <AuthLayout>
      <Row>
        <img src={logo} alt="genie" width="200px" />
        <Title>may your wish come true</Title>
      </Row>
      <Row>
        <Label>Sign up</Label>
        <form onSubmit={submit}>
          <Input label="E-mail" type="text" fullWidth value={email} onChange={e => setEmail(e.target.value)} />
          <Input label="Name" type="text" fullWidth value={name} onChange={e => setName(e.target.value)} />
          <Input label="Password" type="password" fullWidth value={password} onChange={e => setPassword(e.target.value)} />
          <Input label="Repeat your password" type="password" fullWidth value={confirmPassword} onChange={e => setConfirmPassword(e.target.value)} />
          <Button type="submit" color="primary" fullWidth disabled={loadingSignUp}>Sign up</Button>
        </form>
      </Row>
      <Row>
        <Link to="/sign-in">Already have an account? Sign In</Link>
      </Row>
    </AuthLayout>
  );
}
