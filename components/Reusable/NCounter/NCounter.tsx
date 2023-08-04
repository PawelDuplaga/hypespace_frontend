import Image from "next/image"
import styles from './NCounter.module.scss'

interface NCounterProps {
    iconSize : string,
    widthSpan : string,
    fontSize : string,
    value : number,
    callbackFunction : Function
}


const NCounter = ({iconSize, widthSpan, fontSize, value, callbackFunction}: NCounterProps) => {


    return (
        <div style={{
            display: "flex", 
            alignItems: "center", 
            justifyContent: "space-between",
            margin : "1px 1px", 
            width : widthSpan, 
            height: iconSize }}>
            <div>
                <button className={styles.clearButton} onClick={() => callbackFunction(value - 1)}>
                    <Image 
                        src="/icons/NCounter/minusIcon.svg"
                        alt="minus-icon"
                        width={50}
                        height={50}
                        style={{height: iconSize, width: iconSize}}
                    />
                </button>
            </div>
            <div style={{fontSize: fontSize}}>{value}</div>
            <div>
                <button className={styles.clearButton} onClick={() => callbackFunction(value + 1)}>
                    <Image 
                        src="/icons/NCounter/plusIcon.svg"
                        alt="plus-icon"
                        width={50}
                        height={50}
                        style={{height: iconSize, width: iconSize}}
                    />
                </button>
            </div>
        </div>
    )
}

export default NCounter