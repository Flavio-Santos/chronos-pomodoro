import './styles/theme.css';
import './styles/global.css';

import { Heading } from './components/heading';
import { Container } from './components/container';

function App() {
  return (
    <>
      <Container>
        <Heading>LOGO</Heading>
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
