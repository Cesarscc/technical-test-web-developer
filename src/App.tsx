import {
  BrowserRouter as Router,
  Routes,
  Route
} from 'react-router-dom';
import Index from '../src/Components/Index';
import User from '../src/Components/User';



function App() {

  return (
    <Router>
      <Routes>
        <Route path="/" element={<Index />} />
        <Route path="/user/:path" element={<User />} />
      </Routes>
    </Router>

  )
}

export default App
