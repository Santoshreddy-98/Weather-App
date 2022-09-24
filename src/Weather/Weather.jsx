import React,{useState} from "react";
import "./Weather.css"
import "./img2.jpg"
const Weather = () => {
    const [city,setCity] = useState("")
    const [result,setResult]=useState("")

   const onChangeHandler = (event) =>{
        setCity(event.target.value)
    }

    const onSubmitHandler=(event)=>{
        event.preventDefault();
        fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=d885aa1d783fd13a55050afeef620fcb`).then(
            res=>res.json()).then(
                data=>{
                    const kelvin=data.main.temp;
                    const celsius=kelvin-273.5;
                    setResult("Temperature at "+city+"\n"+Math.round(celsius)+"°C");

                }
            ).catch(error => console.log(error))
            setCity("");
    }

  return (
    <div>
        <center>
        <div className="container mt-5 col-4">
            <div className="card">
                <div className="card-header" style={{backgroundColor:"skyblue"}}>
                <img src="./Logo/img1.png"/>
                    <h4 className="Card-title">Check Your City's Weather</h4>
                </div>
                <div className="card-body">
                    <form onSubmit={onSubmitHandler}>
                        <input type="text" name="city" placeholder="Enter Your City Name" onChange={onChangeHandler} value={city}/><br/>
                        <input type="submit" className="btn btn-dark mt-2" /> <br/>
                        <h6 style={{color:"white"}}>{result}</h6>
                    </form>
                </div>
                </div>
            </div>
        </center>
    </div>
  )
}

export default Weather