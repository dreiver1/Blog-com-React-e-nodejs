import Routes  from './Routes';
import './app.css'
import Navbar from './Components/Navbar';
import { Authprovider } from "./context/AuthContext"

function App() {
  return (
    <Authprovider>
      <Navbar />
      <Routes/>
    </Authprovider>
  );
}

export default App;
