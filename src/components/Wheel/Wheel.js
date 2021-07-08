import { useRef, useState } from 'react';
import './Wheel.css';
import wheelImg from '../../assets/images/wheel.png';
import spinImg from '../../assets/images/spin.png';
import MessagesContainer from '../MessagesContainer/MessagesContainer';

function Wheel() {
    const wheel = useRef(null);
    const [messageStatus, setMessageStatus] = useState("none")

    const rotate = (deg) => {
        console.log("test")
        deg += 720; //Rotate the wheel at least 2 times

        wheel.current.style.transition = `transform 5s ease-out 0s`;
        wheel.current.style.transform = `rotate(${deg}deg)`;
    }

    return(
        <div className="wheel-container">
            <MessagesContainer messageStatus={messageStatus}/>
            <img className="wheel" ref={wheel} src={wheelImg}/>
            <img className="spin" src={spinImg } onClick={() => rotate(720)}/>
        </div>
    )
}

export default Wheel