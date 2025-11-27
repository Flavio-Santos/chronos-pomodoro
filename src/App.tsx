import './styles/theme.css';
import './styles/global.css';
import { Heading } from './components/heading/Heading';

function App() {
  console.log('opa');

  return (
    <>
      <Heading attr={123} attr2='asdasd'>
        Ola mundo
      </Heading>
      <Heading>Ola mundo5555</Heading>
      <Heading>Ola mundo6666</Heading>
      <h1>Opa</h1>
      <h1>Opa</h1>
      <h1>Opa</h1>
    </>
  );
}

export { App };
