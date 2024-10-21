import AppRouter from "./routes/AppRouter"
import { ToastContainer } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css';
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {

  return (
    <div>
      <ToastContainer />
      <AppRouter />
    </div>
   )
}

export default App
