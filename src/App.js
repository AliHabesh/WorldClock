import './App.css';
import MainPage from './components/MainPage';

function App() {
  return (
    
    <div className=" w-screen h-screen" style={{backgroundImage: `url(${"https://res.cloudinary.com/divyeb9ec/image/upload/v1656582596/planet_earth_ohdmdj.jpg"})`, height:'1080px' }}>
   
   <div className='flex flex-col justify-center items-center' >
   <h1 className='text-white text-8xl font-semibold pt-5'>World Clock</h1>
   </div>

     <div className='items-center justify-center' >
        <MainPage/>
     </div>
      
     
   
    </div>
  );
}

export default App;
