import { TimerIcon } from 'lucide-react';
import './assets/styles/global.css';
import './assets/styles/theme.css';
import { Heading } from './components/Heading';

export function App() {
  return (
    <Heading>
      Ola
      <button>
        <TimerIcon />
      </button>
    </Heading>
  );
}
