import AppRouter from "./routes/AppRouter"
import { ToastContainer } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css';
// Import Bootstrap first
import 'bootstrap/dist/css/bootstrap.min.css';

// Import DaisyUI after Bootstrap
import './index.css';

function App() {

  return (
    <div>
      <ToastContainer />
      <AppRouter />
    </div>
   )
}

export default App
