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
        <div style={{display: "flex", alignItems: "center", justifyContent: "space-between", width : widthSpan}}>
            <div>
                <button className={styles.clearButton} onClick={() => callbackFunction(value - 1)}>
                    <Image 
                        src="/icons/NCounter/minusIcon.svg"
                        alt="minus-icon"
                        width={parseInt(iconSize)}
                        height={parseInt(iconSize)}
                    />
                </button>
            </div>
            <div style={{fontSize: fontSize}}>{value}</div>
            <div>
                <button className={styles.clearButton} onClick={() => callbackFunction(value + 1)}>
                    <Image 
                        src="/icons/NCounter/plusIcon.svg"
                        alt="plus-icon"
                        width={parseInt(iconSize)}
                        height={parseInt(iconSize)}
                    />
                </button>
            </div>
        </div>
    )
}

export default NCounter