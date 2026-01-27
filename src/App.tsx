import './styles/theme.css';
import './styles/global.css';

import { Container } from './components/container';
import { Logo } from './components/Logo';
import { Menu } from './components/Menu';
import { CountDown } from './components/CountDown';

function App() {
  return (
    <>
      <Container>
        <Logo />
      </Container>
      <Container>
        <Menu />
      </Container>
      <Container>
        <CountDown />
      </Container>
      <Container>
        <form className='form' action=''>
          <div className='formRow'>
            <label htmlFor='inputTask'>task</label>
            <input type='text' id='inputTask' />
          </div>

          <div className='formRow'>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam,
              quod.
            </p>
          </div>

          <div className='formRow'>
            <p>Ciclos</p>
            <p>0000</p>
          </div>

          <div className='formRow'>
            <button>Click</button>
          </div>
        </form>
      </Container>
    </>
  );
}

export { App };
