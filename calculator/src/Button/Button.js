import './Button.css';

const Button=(props)=>
{

var btnval=props.currentval;

const buttonClick = (input) =>
{
	var newval="";
	if(input==="/" || input==="*" || input==="+" ||input==="-")
	{
		if(btnval.length>=1)
		{
			var preval1=btnval;
			var lastval1=preval1.charAt(preval1.length-1);
			if(lastval1==="." || lastval1==="/" || lastval1==="*" || lastval1==="+" || lastval1==="-")
			{
				newval=btnval;
				 
			}
			if(lastval1==="1" || lastval1==="2" || lastval1==="3" || lastval1==="4" || lastval1==="5" || lastval1==="6" || lastval1==="7" || lastval1==="8" || lastval1==="9" || lastval1==="0" )
			{
				newval=btnval+input;
			}
			 
		}
		else
		{
			 newval=btnval;
		}
	}
	
	if(input===".")
	{	
		if(btnval.length>=1)
		{
			var preval=btnval;
			var lastval=preval.charAt(preval.length-1);
			if(lastval==="/" || lastval==="*" || lastval==="+" ||lastval==="-")
			{
				 newval=btnval+"0.";
			}
			else
			{
				 newval=btnval+".";
			}
		}
		else
		{
			 newval=btnval+"0.";
		}
		
	}
	
	if(input==="1" || input==="2" || input==="3" || input==="4" || input==="5" || input==="6" || input==="7" || input==="8" || input==="9" || input==="0" )
	{	
		newval=btnval+input;
	
	}
	props.changeVal(newval);
}

const allClear=()=>
{
	var newval="";
	props.changeVal(newval);
}
const clear=()=>
{
	var clear=btnval.slice(0,btnval.length-1);
	props.changeVal(clear);
}
const evaluateExpresion=()=>
{
	var dumstring=props.currentval;
	var finalString=dumstring.charAt(0);
	 
	for(let i=1; i<dumstring.length; i++)
	{
		if((dumstring[i]==="0") && (dumstring[i-1]==="+" || dumstring[i-1]==="-" || dumstring[i-1]==="*" || dumstring[i-1]==="/" ) )
		{
			continue;
		}
		if((i===dumstring.length-1) && (dumstring[i]==="+" || dumstring[i]==="-" || dumstring[i]==="*" || dumstring[i]==="/" ) )
		{
			continue;
		}
		finalString=finalString+dumstring[i];
	}
	try
	{
		var result=String(eval(finalString));
		props.changeVal(result);
	}
	catch(e)
	{
		alert(e);
	}
}

  return (
	<div className="buttoncontainer">
		<div className="buttoncontainer1">
			<button type="button" className="Button" id="button1" onClick={allClear}>AC</button>
			<button type="button" className="Button" id="button2" onClick={clear}>C</button>
		</div>
		<div className="buttoncontainer2">
			<button type="button" className="Button"  id="button3" onClick={()=>buttonClick("7")}>7</button>
			<button type="button" className="Button"  id="button4" onClick={()=>buttonClick("8")}>8</button>
			<button type="button" className="Button"  id="button5"  onClick={()=>buttonClick("9")}>9</button>
			<button type="button" className="Button"  id="button6"  onClick={()=>buttonClick("/")}>/</button>
			
			<button type="button" className="Button"  id="button7"  onClick={()=>buttonClick("4")}>4</button>
			<button type="button" className="Button"  id="button8"  onClick={()=>buttonClick("5")}>5</button>
			<button type="button" className="Button"  id="button9"  onClick={()=>buttonClick("6")}>6</button>
			<button type="button" className="Button"  id="button10"  onClick={()=>buttonClick("*")}>*</button>
			
			<button type="button" className="Button"  id="button11"  onClick={()=>buttonClick("1")}>1</button>
			<button type="button" className="Button"  id="button12"  onClick={()=>buttonClick("2")}>2</button>
			<button type="button" className="Button"  id="button13"  onClick={()=>buttonClick("3")}>3</button>
			<button type="button" className="Button"  id="button14"  onClick={()=>buttonClick("-")}>-</button>
			
			<button type="button" className="Button"  id="button15"  onClick={()=>buttonClick("0")}>0</button>
			<button type="button" className="Button"  id="button16"  onClick={()=>buttonClick(".")}>.</button>
			<button type="button" className="Button"  id="button17"  onClick={()=>evaluateExpresion("=")}>=</button>
			<button type="button" className="Button"  id="button18"  onClick={()=>buttonClick("+")}>+</button> 
		</div>
		 
	</div>
		 
	  
  );
	
}
export default Button;