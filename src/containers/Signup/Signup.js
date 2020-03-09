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

  const handleSave = () => history.push('./sigin');

  return (
    <SigninContainer >
      <Form onSubmit={handleSubmit(handleSave)}>
        <Title>Cadastro</Title>
        <Input label='Nome' name='firstName' register={register} />
        <Input label='Sobrenome' name='lastName' register={register} />
        <Input label='Email' name='email' register={register} />
        <Input label='Senha' name='password' register={register} type='password' />
        <GroupButtons>
          <Button name='Salvar' />
        </GroupButtons>
      </Form>
    </SigninContainer>
  );

};

export default Signin;