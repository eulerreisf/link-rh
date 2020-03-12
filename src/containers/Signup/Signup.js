import React from 'react';
import { useHistory, withRouter } from 'react-router-dom';
import { useForm } from 'react-hook-form';
import api from 'services/api';
//  Styled Components
import { SigninContainer, Form, GroupButtons, Title } from './styles';

//  Components
import Button from 'components/Button';
import Input from 'components/Input';

const Signup = () => {
  const { register, handleSubmit } = useForm();

  const history = useHistory();

  const handleSave = async e => {
    const { firstName, lastName, email, password } = e;
    try {
      await api.post("/users", { firstName, lastName, email, password });
      history.push("/");
    } catch (err) {
      console.log(err);
      // this.setState({ error: "Ocorreu um erro ao registrar sua conta. T.T" });
    }

  };

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

export default withRouter(Signup);