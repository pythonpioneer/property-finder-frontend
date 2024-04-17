import React from 'react';
import ReactDOM from 'react-dom/client';
import 'react-toastify/dist/ReactToastify.css';
import { ToastContainer } from "react-toastify";
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { Provider } from 'react-redux';
import store from './store';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
	<React.StrictMode>
		<Provider store={store}>
			<App />
			<ToastContainer
					role="alert"
					position="bottom-right"
					autoClose={1300}
					hideProgressBar={false}
					newestOnTop={true}
					pauseOnHover={false}
					pauseOnFocusLoss={false}
					closeOnClick
					draggable
					toastClassName={'toast-color'}
				/>
		</Provider>
	</React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
