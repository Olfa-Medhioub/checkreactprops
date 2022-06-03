
import './App.css';
import Profile from './profile/Profile';

function App() {
  var fullName = 'Olfa Médhioub'
  var bio = 'I am a developper full stack js'
  var profession ='Computer Engineer'
  const handleNAlert=(a)=>{
    return alert(`Hello ${a}`)
  }
  return (
    <div>
     <h1> Profile Olfa</h1>
     <Profile fullName={fullName} bio={bio}  profession={profession} handleNAlert={handleNAlert}>
       <img src='/imageReact.png' alt='Not Found'/>
     </Profile>
   </div>
  );
}

export default App;
