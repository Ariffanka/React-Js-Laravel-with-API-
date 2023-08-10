import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css'
import '.././src/App.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import FormInput from './pages/FormInput';
import ShowD from './pages/show';
import Nothing from './pages/Nothing';
import UpdateD from './pages/EditD';

function App() {

  return (
    <Router>
      <Routes>
        <Route path='/create' element={<FormInput />} />
        <Route path='/' element={<ShowD />} />
        <Route path='/edit/:id' element={<UpdateD />} />
        <Route path='*' element={<Nothing />} />
      </Routes>
    </Router>
  )
}

export default App
