import logo from './logo.svg';
import characters from './data/berlin.json';
import './App.css';
import IdCard from './components/IdCard';
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  return (
    <div className="App">
      {characters.map((el) => {
        return <IdCard users={el} />;
      })}
    </div>
  );
}

export default App;
