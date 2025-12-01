import './styles/theme.css';
import './styles/global.css';

import { Heading } from './components/heading';
import { Container } from './components/container';
import { Logo } from './components/Logo';

function App() {
  return (
    <>
      <Container>
        <Logo />
      </Container>
      <Container>
        <Heading>MENU</Heading>
      </Container>
      <Container>
        <Heading>FORM</Heading>
      </Container>
    </>
  );
}

export { App };
