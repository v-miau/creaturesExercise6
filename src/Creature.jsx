import { useState } from "react";

function Creature(props) {

    const [isAwake, setIsAwake] = useState(false)
    const [xCoord, setXCoord] = useState(props.x)
    const [yCoord, setYCoord] = useState(props.y)

    const style = {
        position: 'absolute',
        left: xCoord + 'px',
        top: yCoord + 'px',
        textAlign: 'center',
        imageRendering: 'pixelated'
    };

    const handleClick = event =>{
        if (isAwake === false) {
            setIsAwake(true);
            setXCoord(Math.floor(Math.random() * 681))
            setYCoord(Math.floor(Math.random() * 681))
        }
        else {
            setIsAwake(false);
        }
    }

    return (
        <div style={style} onClick={handleClick}>
            <img src={isAwake ? props.awakeImageUrl : props.sleepImageUrl} alt={props.name} width="120" />
            <p>{props.name}, age {props.age}</p>
        </div>
    );
}

export default Creature;
