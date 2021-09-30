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

//Configuration
import { CONFIG } from '../../common/configuration';



function Wheel({params}) {
    const [messageStatus, setMessageStatus] = useState("none");
    const [loading, setLoading] = useState(false);
    const wheel = useRef(null);
    const tickTrigger = new Audio(tickSound);

    console.log("Parameters: ", params);
    
    
    useEffect(function(){
        //Removes the ticker's animation when it ends, so it can be triggered again
        document.querySelector(".ticker").addEventListener("animationend", function () {
            document.querySelector(".ticker").classList.remove("ticker-animation")
        });
    }, [])

    const tick = () => {
        // console.log("Tick");
        tickTrigger.play();
        document.querySelector(".ticker").classList.add("ticker-animation");
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

    const startWheel = () => {
        const range = 360/CONFIG.PRIZES_COUNTER; 
        const ANIMATION_DURATION = 8; 
        const ANIMATION_ROTATION = 720 + params.randomChosenPackage * range;


        wheel.current.style.transition = `transform ${ANIMATION_DURATION}s ease-out 0s`;
        wheel.current.style.transform = `rotate(${ANIMATION_ROTATION}deg)`;


        const tickTrigger = setInterval(function() {
            let angle = getCurrentRotation(wheel.current)
            // console.log("Angle: ", angle)
            // console.log("angle%range", angle%range)
            // console.log("range/2", range/2)
            
            let bottomRange = range/2 - 4;
            let topRange = range/2 + 4;
            let rest = angle%range;

            if( bottomRange <= rest && rest <= topRange ) {
                tick();
            }
        }, 10);


        setTimeout(function(){
            setMessageStatus("Congrats");
            window.clearInterval(tickTrigger);
        }, ANIMATION_DURATION*1000);

    }

    const requestClaim = () => {
        setLoading(true)

        setTimeout(function(){
            setLoading(false)
            startWheel()
        }, 1000);
    }

    const play = () => { 
        requestClaim();
    } 



    const startWheelAnimeJS = () => {
    //     let stopDeg = 720;
    //     let tickRange = 360/CONFIG.PRIZES_COUNTER;

    //     let range = 360/CONFIG.PRIZES_COUNTER;


    //     const anim = anime({
    //         targets: wheel.current,
    //         rotate: '1080deg',
    //         duration: 8000,
    //         easing: "easeOutQuad",
    //         update: function(anim) {
    //             let angle = anim.progress*1080/100;
    //             angle = Math.trunc(angle)
    //             console.log("Animation progress: ",anim.progress)
    //             console.log("Current angle: ", anim.progress*720/100)
                

    //             if( range/2 - 2 <= angle%range && angle%range <= range/2 + 2) {
    //                 tick();
    //             }
    //             // let currentDeg = anim.progress*720/100;
    //             // console.log(Math.round(currentDeg % tickRange))
    //             // console.log(tickRange/2 - 3)

    //             // if(Math.round(currentDeg % tickRange) === tickRange/2 - 3){
    //             //     console.log("TICK")
    //             //     tick();
    //             // }

    //           }
    //     });
    

    }

    return(
        <div className="wheel-container">
            {(messageStatus === "none") ? "" : <MessagesContainer messageStatus={messageStatus}/>}
            {(loading) ? <img className="loading" src={loadingImg} alt="loading"/> : "" }

            <img className="wheel" src={wheelImg} alt="wheel" ref={wheel}/>
            <img className="spin" src={spinImg} alt="spin" onClick={play}/>
            <div className="ticker-container">
                <img className="ticker" src={ticker} alt="ticker"/>
            </div>
        </div>
    )
}

export default Wheel