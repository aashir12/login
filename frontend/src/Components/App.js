import { Route,Routes } from 'react-router-dom';
import '../App.css';
import Login from './login';
import Sign from './sign';
import Land from './land';

function App() {
  return (
<>
<Routes>
  <Route path='/' element={<Land/>}/>
  <Route path='/login' element={<Login/>}/>
  <Route path='sign'  element={<Sign/>}/>
</Routes>
</>
  
  );
}

export default App;
