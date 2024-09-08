import './App.css';
import { Route, Routes } from 'react-router-dom';
import Login from './pages/login';
import Register from './pages/register';
import Layout from './pages/components/layout';
import Project from './pages/project';
import Billboard from './pages/billboard';
import Epic from './pages/epic';

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route element={<Layout />}>
          <Route path="/project" element={<Project />} />
          <Route path="/project/:id/billboard" element={<Billboard />} />
          <Route path="/project/:id/epic" element={<Epic />} />
        </Route>
      </Routes>
    </div>
  );
}

export default App;
