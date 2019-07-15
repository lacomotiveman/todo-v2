import React from 'react';
import './app.scss';
import { Provider } from 'react-redux';
import { PersistGate } from 'redux-persist/lib/integration/react';
import persistedStore from '../../store/store';
let { store, persistor } = persistedStore();

const App = ( ) =>{
  return(
    <div className="App">
		<h1 className="App-header">TODO List v2</h1>
		<div className="container-fluid">
			<div className="row content">
				<div className="col-sm-2">
					ФИЛЬТР
				</div>
				<div className="sol-sm-8 text-left">
					<div> НОВАЯ ЗАДАЧА </div>	
					<div> СПИСОК ЗАДАЧ </div>	
				</div>
			</div>
		</div>
    </div>
  );
}

export default App;