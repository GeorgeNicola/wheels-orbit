import { useRef, useState } from 'react';
import './Wheel.css';
import wheelImg from '../../assets/images/wheel.png';
import spinImg from '../../assets/images/spin.png';
import loadingImg from '../../assets/images/loading.gif';
import MessagesContainer from '../MessagesContainer/MessagesContainer';

function Wheel({params}) {
    const [messageStatus, setMessageStatus] = useState("none")
    const [loaded, setLoaded] = useState(true) 
    const wheel = useRef(null);


    const startWheel = () => {
        let deg = 720; //Rotate the wheel at least 2 times
        console.log(params.randomChosenPackage)
        deg += params.randomChosenPackage * 72;

        wheel.current.style.transition = `transform 5s ease-out 0s`;
        wheel.current.style.transform = `rotate(${deg}deg)`;

        setTimeout(function(){
            setMessageStatus("Congrats")
        }, 5000)
    }

    const requestClaim = () => {
        setLoaded(false)

        setTimeout(function(){
            console.log("Success")
            setLoaded(true)
            startWheel()
        }, 1000)
    }

    const play = () => { requestClaim() }

    return(
        <div className="wheel-container">
            {(messageStatus === "none") ? "" : <MessagesContainer messageStatus={messageStatus}/>}
            {(loaded) ? "" : <img className="loading" src={loadingImg} alt="loading"/>}

            <img className="wheel" src={wheelImg} alt="wheel" ref={wheel}/>
            <img className="spin" src={spinImg} alt="spin" onClick={play}/>
        </div>
    )
}

export default Wheel