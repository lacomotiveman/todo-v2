import React, { Component } from 'react';
import './app.scss';
import { Provider } from 'react-redux';
import { PersistGate } from 'redux-persist/lib/integration/react';
import persistedStore from '../../store/store';
import AppTodo from '../app-todo';
import Loader from '../loader/loader';



let { store, persistor } = persistedStore();

export default class App extends Component{

	render(){
		return(
			<Provider store={store}>
				<PersistGate loading={<Loader/>} persistor={persistor}>
					<AppTodo/>
		    	</PersistGate>
			</Provider>
		);
  	};
}

