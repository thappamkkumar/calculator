import './App.css';

 import Wrapper from './Wrapper/Wrapper';
 import Screen from './Screen/Screen';
 import Button from './Button/Button';
 import {useState} from "react";
function App() {
	
	const [val, setVal]=useState("");
	
	 
  return (
	 
	 <>
		<Wrapper >
			<h2 style={{width:'100%', height:'auto', color:'#fff', textAlign:'center', paddingBottom:'15px' }}>Calculator</h2>
			<Screen changeVal={setVal} exp={val}/>
			<Button  changeVal={setVal}  currentval={val}/>
		</Wrapper>
		<div   style={{  padding:'30px 10px 30px 10px', display:'flex', flexDirection:'column', justifyContent:'center', alignItems:'center',}}>
			<h2>Developer Contact</h2> 
			<p style={{padding:'10px 10px 10px 10px', display:'flex',  flexWrap:'wrap', justifyContent:'center', alignItems:'center',}}>
				<a href="tel:6005819576" style={{textDecoration:'none',}}>6005819576  </a>, <a  href="mailto:thappamkkumar@gmail.com" style={{textDecoration:'none', paddingLeft:'10px',}}> thappamkkumar@gmail.com</a>
			</p>
		</div>
	 </>
  );
}

export default App;
