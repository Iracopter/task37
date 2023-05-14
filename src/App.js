import './App.css';
import { My_Photo } from './components/My_Photo';
import {Contact_Info} from './components/Contact_Info';
import {Work_Experience} from './components/Work_Experience';
import photo from './components/0000.jpg';

const imgLink=photo;

function App() {
  return (
    <div className='wrapper'>
        <My_Photo path={imgLink}/>
        <Contact_Info/>
        <Work_Experience/>
    </div>
  );
}

export default App;
