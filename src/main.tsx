import ReactDOM from 'react-dom/client'
import App from './app/App.tsx'
import './app/styles/index.scss';
import {Provider} from "react-redux";
import {store} from "./redux/store.ts";

ReactDOM.createRoot(document.getElementById('root')!).render(
    <Provider store={store}>
        <App/>
    </Provider>
)
