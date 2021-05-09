import './App.css';
import './index';
import Title from './components/title.js';
import Textarea from './components/textarea.js';
import Image from './components/image.js';

function App() {
  return (
    <div className="container">
      <Title/>
      <Textarea />
      <Image/>
    </div>
  );
}

export default App;
