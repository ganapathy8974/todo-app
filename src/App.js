import './App.css';
import FirstComponent from './component/learn/FirstComponent';
import SecComponent from './component/learn/SecComponent';
import TherdComponent from './component/learn/ThredComponent';
import Counter from './component/counter/Counter';
import TodoApp from './component/todo/TodoApp';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.min.js';

function App() {
  return (
    <div className="App">
      <TodoApp/>
    </div>
  );
}


function Learn(){
  return(
    <div className="Learn">
      <FirstComponent/>
      <SecComponent></SecComponent>
      <TherdComponent/>
    </div>
  );
}

export default App;

