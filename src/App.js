import logo from './logo.svg';
import './App.css';

import { Outlet } from 'react-router-dom';
import Menu from './components/header/menu';

function App() {
  return (
    <div>
      <Menu/>

      <Outlet/>

    </div>


  );
}

export default App;
