import { createRoot } from 'react-dom/client';
import { HashRouter } from 'react-router-dom';

// third-party
import { Provider as ReduxProvider } from 'react-redux';

// scroll bar
import 'simplebar/src/simplebar.css';

// project import
import App from './App';
import { store } from 'store';
import { ConfigProvider } from 'contexts/ConfigContext';
import reportWebVitals from './reportWebVitals';

const container = document.getElementById('root');
const root = createRoot(container!);

// ==============================|| MAIN - REACT DOM RENDER  ||============================== //

root.render(
  <ReduxProvider store={store}>
    <ConfigProvider>
      <HashRouter>
        <App />
      </HashRouter>
    </ConfigProvider>
  </ReduxProvider>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
