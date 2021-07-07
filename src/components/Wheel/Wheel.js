import {useRef} from 'react';
import './Wheel.css';
import wheelImg from '../../assets/images/wheel.png';
import TechnicalError from '../Message/TechnicalError';

function Wheel() {
    const wheel = useRef(null);

    const rotate = (deg) => {
        deg += 720; //Rotate the wheel at least 2 times

        wheel.current.style.transition = `transform 5s ease-out 0s`;
        wheel.current.style.transform = `rotate(${deg}deg)`;
    }

    return(
        <div className="wheel-container">
            {/* <TechnicalError/> */}
            <img className="wheel" ref={wheel} src={wheelImg} onClick={() => rotate(720)}/>
        </div>
    )
}

export default Wheel