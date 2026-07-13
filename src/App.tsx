import './styles/theme.css';
import './styles/global.css';

import { Container } from './components/Container';
import { Logo } from './components/Logo';
import { Menu } from './components/Menu';
import { CountDown } from './components/CountDown';

export function App() {
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
          <div className='form-row'>
            <label htmlFor='input'>task</label>
            <input id='input' type='text' />
          </div>

          <div className='form-row'>
            <p>Lorem ipsum dolor sit amet.</p>
          </div>

          <div className='form-row'>
            <p>Ciclos</p>
            <p>0 0 0 0 0 0 0 </p>
          </div>

          <div className='form-row'>
            <button>Enviar</button>
          </div>
        </form>
      </Container>
    </>
  );
}
