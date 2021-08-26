import { useRef, useState, useEffect } from 'react';
import './Wheel.css';

import wheelImg from '../../assets/images/wheel.png';
import spinImg from '../../assets/images/spin.png';
import loadingImg from '../../assets/images/loading.gif';
import ticker from '../../assets/images/tiker.png';
import tickSound from '../../assets/sounds/tick.mp3';

import MessagesContainer from '../MessagesContainer/MessagesContainer';

import { CONFIG } from '../../common/configuration';


function Wheel({params}) {
    const [messageStatus, setMessageStatus] = useState("none")
    const [loaded, setLoaded] = useState(true) 
    const wheel = useRef(null);
    const tickTrigger = new Audio(tickSound);
    
    
    useEffect(function(){
        //Removes the ticker's animation when it ends, so it can be triggered again
        document.querySelector(".ticker").addEventListener("animationend", function () {
            document.querySelector(".ticker").classList.remove("ticker-animation")
        })
    }, [])

    const tick = () => {
        console.log("Tick");
        tickTrigger.play()
        document.querySelector(".ticker").classList.add("ticker-animation")
    }

    const requestClaim = () => {
        setLoaded(false)

        setTimeout(function(){
            setLoaded(true)
            startWheel()
        }, 1000)
    }

    const play = () => { 
        requestClaim() 
    }







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

    const startWheel2 = () => {
        let deg = 0;
        let stopDeg = 720;
        stopDeg += params.randomChosenPackage * 360/CONFIG.PRIZES_COUNTER;

        const rotationAnimation = setInterval(function() {
            let range = 360/CONFIG.PRIZES_COUNTER;

            if(deg%range === range/2 - 3) {
                tick();
            }

            if(deg < stopDeg) { 
                deg += 1;
            }
            else {
              setMessageStatus("Congrats");
              window.clearInterval(rotationAnimation);
            }
        
            console.log(deg);
            wheel.current.style.transform = `rotate(${deg}deg)`;
        }, 7.5);
    }

    const startWheel3 = () => {
        //TO DO: initiate css animation
        //Listen for the position of the wheel (setInterval)
        //Trigger events when rotation = x deg
    }
    

    return(
        <div className="wheel-container">
            {(messageStatus === "none") ? "" : <MessagesContainer messageStatus={messageStatus}/>}
            {(loaded) ? "" : <img className="loading" src={loadingImg} alt="loading"/>}

            <img className="wheel" src={wheelImg} alt="wheel" ref={wheel}/>
            <img className="spin" src={spinImg} alt="spin" onClick={play}/>
            <div className="ticker-container">
                <img className="ticker" src={ticker} alt="ticker"/>
            </div>
        </div>
    )
}

export default Wheel