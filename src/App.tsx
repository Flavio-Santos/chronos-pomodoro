import './styles/theme.css';
import './styles/global.css';
import { Heading } from './components/heading/Heading';
import { TimerIcon } from 'lucide-react';

function App() {
  console.log('opa');

  return (
    <>
      <Heading>
        Ola mundo
        <button>
          <TimerIcon />
        </button>
      </Heading>

      <p>
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sunt iusto
        neque libero dolores suscipit ullam odit, optio animi dolorem amet autem
        a repellendus ex sit repellat cupiditate quae voluptas officia?
      </p>
    </>
  );
}

export { App };
