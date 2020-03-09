import React from 'react';
import { useHistory } from 'react-router-dom';
import { useForm } from 'react-hook-form';

//  Styled Components
import { SigninContainer, Form, GroupButtons, Title } from './styles';

//  Components
import Button from 'components/Button';
import Input from 'components/Input';

const Signin = () => {
  const { register, handleSubmit } = useForm();

  const history = useHistory();

  const handleSignup = () => history.push('./signup');

  const handleSignin = () => history.push('./dashboard');

  return (
    <SigninContainer >
      <Form onSubmit={handleSubmit(handleSignin)}>
        <Title>Login</Title>
        <Input label='Email' name='email' register={register} />
        <Input label='Senha' name='password' register={register} type='password' />
        <GroupButtons>
          <Button name='Cadastro' onClick={handleSignup} />
          <Button name='Logar' />
        </GroupButtons>
      </Form>
    </SigninContainer>
  );

};

export default Signin;