import { BrowserRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import AppRouter from './routes/AppRouter';
import { personStore } from './store/personStore';
import './App.css';

function App() {
  return (
    <BrowserRouter>
      <Provider store={personStore}>
        <AppRouter />
      </Provider>
    </BrowserRouter>
  );
}

export default App;
