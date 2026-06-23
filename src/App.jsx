import { useState } from 'react';
import About from './components/About';
import Navbar from './components/Navbar';
import TextForm from './components/TextForm';
import 'bootstrap/dist/css/bootstrap.min.css';
import  Alert from './components/Alert';
import './App.css'
import  {BrowserRouter as Router,Routes,Route} from "react-router-dom"

function App() {

const [mode,setMode]=useState('light');  
const [text,setText]= useState("Enable Dark Mode");
const [alert,setAlert]=useState(null);
const [active,setActive]=useState('Home');

const showAlert=(message,type)=>{
setAlert({
 msg:message,
 type:type});

setTimeout(() => {
setAlert(null)
}, 1500);}

const toggleMode=()=>{
if(mode==='light'){
setMode('dark'); 
document.body.style.backgroundColor='black';
setText("Enable Light mode");
showAlert("Dark Mode has been enable","success");}

else{
setMode('light');
document.body.style.backgroundColor='white';
setText("Enable Dark mode"); 
showAlert("Light Mode has been enable","success"); } }

return (
<Router>
<Navbar mode={mode} toggleMode={toggleMode} text={text} active={active} setActive={setActive}></Navbar>
<Alert alert={alert}></Alert>
<Routes>
 <Route path='/' element={<TextForm mode={mode}></TextForm>} />
<Route path='/about' element={<About mode={mode}></About> }/>
</Routes>
</Router>
)}

export default App;