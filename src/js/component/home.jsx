import React, {useState} from "react";


const Home = () => {
const [selectedColor, setselectedColor] = useState ("");

return (

<div className= "d-flex">

	<div className = "trafficlight mx-auto">

<div 
onClick={() => setselectedColor("red")}

className= {
	"light red "  +(selectedColor === "red" ?  "glowing-circle" : "")
	}></div>
<div 
onClick={() => setselectedColor("yellow")}className ={
	"light yellow " + (selectedColor === "yellow" ? "glowing-circle" : "")
	} ></div>
<div
onClick={() => setselectedColor("green")}
 className ={"light green " + (selectedColor === "green" ? "glowing-circle" : "")}></div>



	</div>
	
	</div>
)

}



export default Home;
