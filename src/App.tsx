import './styles/theme.css';
import './styles/global.css';
import { Container } from './components/container/Container';
import { Heading } from './components/heading/Heading';

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
