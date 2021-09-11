import CakeContainer from './components/CakeContainer';
import { Provider } from 'react-redux'
import store from './redux/store';
import { HooksContainer } from './components/HooksContainer';
import { IcecreamReducer } from './components/IcecreamContainer';
function App() {
  return (
    <Provider store={store}>
    <div className="App">
      <IcecreamReducer /> 
      <HooksContainer />
      <CakeContainer />
      <h1>My Changes more  Example testing</h1>
    </div>
    </Provider>
  );
}

export default App;
