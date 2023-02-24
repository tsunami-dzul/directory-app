import { BrowserRouter } from 'react-router-dom';
import Content from './components/layout/Content';
import './App.css';

function App() {
  return (
    <BrowserRouter>
      <Content />
    </BrowserRouter>
  );
}

export default App;
