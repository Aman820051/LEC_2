import './App.css';
import Employee from './State_Props/Employee';
import Input from './InputBox/Input';
function App() {
  return (
    <div className="App">
      <h1>WELCOME</h1>
      <br/>
      <Employee name="ALEX"/>
      <br/>
      <Input/>
    </div>
  );
}

export default App;
