import { useRef, useState, useEffect } from 'react';
import './Wheel.css';
import anime from 'animejs/lib/anime.es.js';

//Assets
import wheelImg from '../../assets/images/wheel.png';
import spinImg from '../../assets/images/spin.png';
import loadingImg from '../../assets/images/loading.gif';
import ticker from '../../assets/images/tiker.png';
import tickSound from '../../assets/sounds/tick.mp3';

//Components
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
            startWheel3()
        }, 1000)
    }

    const play = () => { 
        requestClaim() 
    }







    const startWheel = () => {
        let deg = 720; //Rotate the wheel at least 2 times
        let range = 360/CONFIG.PRIZES_COUNTER;
        // console.log(params.randomChosenPackage)
        // deg += params.randomChosenPackage * 72;

        wheel.current.style.transition = `transform 10s ease-out 0s`;
        wheel.current.style.transform = `rotate(${deg}deg)`;


        setTimeout(function(){
            setMessageStatus("Congrats")
        }, 10000)
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

    const getCurrentRotation = (el) => {
        var st = window.getComputedStyle(el, null);
        var tm = st.getPropertyValue("-webkit-transform") ||
                 st.getPropertyValue("-moz-transform") ||
                 st.getPropertyValue("-ms-transform") ||
                 st.getPropertyValue("-o-transform") ||
                 st.getPropertyValue("transform") ||
                 "none";
        if (tm != "none") {
          var values = tm.split('(')[1].split(')')[0].split(',');
          /*
          a = values[0];
          b = values[1];
          angle = Math.round(Math.atan2(b,a) * (180/Math.PI));
          */
          //return Math.round(Math.atan2(values[1],values[0]) * (180/Math.PI)); //this would return negative values the OP doesn't wants so it got commented and the next lines of code added
          var angle = Math.round(Math.atan2(values[1],values[0]) * (180/Math.PI));
          return (angle < 0 ? angle + 360 : angle); //adding 360 degrees here when angle < 0 is equivalent to adding (2 * Math.PI) radians before
        }
        return 0;
      }

    const startWheel3 = () => {
        //TO DO: initiate css animation
        //Listen for the position of the wheel (setInterval)
        //Trigger events when rotation = x deg

        let stopDeg = 720; //Rotate the wheel at least 2 times
        let range = 360/CONFIG.PRIZES_COUNTER;
        stopDeg += params.randomChosenPackage * 72;


        wheel.current.style.transition = `transform 7s ease-out 0s`;
        wheel.current.style.transform = `rotate(${stopDeg}deg)`;


        const tickTrigger = setInterval(function() {
            let angle = getCurrentRotation(wheel.current)
            console.log("Angle: ", angle)
            console.log("angle%range", angle%range)
            console.log("range/2", range/2)
            


            //Increase range for faster speed
            if( angle%range === range/2 ||
                angle%range === range/2 - 1 ||
                angle%range === range/2 + 1
            ) {
                tick();
            }
        }, 1);


        setTimeout(function(){
            setMessageStatus("Congrats")
            window.clearInterval(tickTrigger);
        }, 7000)

    }

    const startWheel4 = () => {
        let stopDeg = 720;
        let tickRange = 360/CONFIG.PRIZES_COUNTER;



        const anim = anime({
            targets: wheel.current,
            rotate: '720deg',
            duration: 5000,
            easing: "easeOutQuad",
            update: function(anim) {
                console.log("Animation progress: ",anim.progress)
                console.log("Current angle: ", anim.progress*720/100)


                // let currentDeg = anim.progress*720/100;
                // console.log(Math.round(currentDeg % tickRange))
                // console.log(tickRange/2 - 3)

                // if(Math.round(currentDeg % tickRange) === tickRange/2 - 3){
                //     console.log("TICK")
                //     tick();
                // }

              }
        });
    

    }

    const startWheel5 = () => {
        //TO DO: setInterval for rotation
        //TO DO: slow down motion with recursive function
        console.log("Wheel try 5")

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


        // setTimeout(function(){
        //     setMessageStatus("Congrats")
        //     window.clearInterval(tickTrigger);
        // }, 7000)
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