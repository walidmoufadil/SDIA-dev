import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import { AuthProvider } from './context/AuthContext';
import Login from './Pages/Login';
import Register from './Pages/Register';
import Navbar from "./components/Navbar"
import Dashboard from './Pages/Dashboard';
import ProtectedRoute from './components/ProtectedRoute';
import Products from './Pages/Products';
import UploadFile from './Pages/UploadFile';


function App() {
  return (
    <AuthProvider>
      <Router>
        <Routes>

          <Route path="/" element={<Navigate to="/login" />} />
          <Route path="/logout" element={<Navigate to="/login" />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path="/Navbar" element={<Navbar />}/>
          
          <Route 
            path="/dashboard" 
            element={
              <ProtectedRoute>
                <>
                  <Navbar />
                  <Dashboard />
                </>
              </ProtectedRoute>
            } 
          />

          <Route 
            path="/products" 
            element={
              <ProtectedRoute>
                <>
                  <Navbar />
                  <Products />
                </>
              </ProtectedRoute>
            } 
          />
        
          <Route 
              path="/uploadfile" 
              element={
                <ProtectedRoute>
                  <>
                    <Navbar />
                    <UploadFile />
                  </>
                </ProtectedRoute>
              } 
            />

            
        </Routes>
      </Router>
    </AuthProvider>
  );
}

export default App;