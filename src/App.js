import 'bootstrap/dist/css/bootstrap.min.css';

import NavBar from './component/NavBar';
import './App.css';
import MainContainer from './component/MainContainer';

function App() {
  return (
    <div className="App">
      <NavBar />
      <MainContainer />
    </div>
  );
}

export default App;
