import Cycles from '../Cycles';
import { DefaultInput } from '../DefaultInput';
import { DefaultButton } from '../DefaultButton';
import { PlayCircleIcon } from 'lucide-react';

export default function MainForm() {
  return (
    <form className='form' action=''>
      <div className='form-row'>
        <DefaultInput labelText='task' id='my-input' type='text' />
      </div>

      <div className='form-row'>
        <p>Lorem ipsum dolor sit amet.</p>
      </div>

      <div className='form-row'>
        <Cycles />
      </div>

      <div className='form-row'>
        <DefaultButton icon={<PlayCircleIcon />} />
      </div>
    </form>
  );
}
