
import './app.css'
import Navbar from './Components/Navbar';
import { AuthProvider } from "./context/AuthContext"
import Routers from './Routes/index'
function App( {children} ) {
  return (
    <>
      <Navbar />
      <Routers/>
    </>
  );
}

export default App;
