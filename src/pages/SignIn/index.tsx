import React, { useCallback } from 'react';
import { Form } from '@unform/web';

import Input from '../../components/Input';

import { Container, Background, Content, Footer } from './styles';

const SignIn: React.FC = () => {
  const handleSubmit = useCallback((data: object) => {
    console.log(data);
  }, []);

  return (
    <Container>
      <Background />

      <Content>
        <Form onSubmit={handleSubmit}>
          <h1>Fazer Login </h1>

          <Input name="email" placeholder="E-Mail" />

          <Input name="password" type="password" placeholder="Senha" />

          <div>
            <p>Lembrar-me</p>
            <a href="aa">Esquice minha senha</a>
          </div>

          <button type="submit">Entrar</button>
        </Form>

        <Footer>
          <p>
            Não tem conta ? <a href="aaa">Criar conta</a>
          </p>

          <span>É de graça</span>
        </Footer>
      </Content>
    </Container>
  );
};

export default SignIn;
