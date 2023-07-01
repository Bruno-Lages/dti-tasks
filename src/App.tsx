import { Provider } from "react-redux";

import store from './store'

import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

import { Home } from './pages/Home/Home'


function App() {
    return (
        <Provider store={store}>
            <ToastContainer position="top-center" theme="dark"/>
            <Home />
        </Provider>
    );
}

export default App;
