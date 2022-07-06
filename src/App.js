import './App.css';
import MainPage from './components/MainPage';

function App() {
  return (
    <div className="App" style={{backgroundImage: `url(${"https://res.cloudinary.com/divyeb9ec/image/upload/v1656582596/planet_earth_ohdmdj.jpg"})`, height:'1080px' }}>
  
      <MainPage className=''/>
   
    </div>
  );
}

export default App;
