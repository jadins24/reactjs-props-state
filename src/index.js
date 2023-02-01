import React ,{useState} from 'react';
import ReactDOM from 'react-dom/client';
 import './index.css';
// import App from './App';
import reportWebVitals from './reportWebVitals';
import Header from './header/header.js';
import Home from './home/home.js';
 
import Footer from './footer/footer.js';



function Main(){
    const data="dinesh"  ;
    const details={
        name:"DiNESH"
      
    }
    const getData =(param)=>{
        console.log("called",param);
    }
    const [myname,setName]=useState("DiNESH")
   

    return <div>
        <Header name={data} get={getData}/>
        <Home name={details.name} myName={myname} changeName={setName}/>
        <Footer />
    </div>
}


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<Main/>);

 
// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();

