
import styles from './PageIndexer.module.scss'


interface IndexerProps {
    currentPage: number
    numberOfPages: number
    setPageCallback(chosenPage: number): void
}

interface IndexerElemProps {
    index: number
    marked: boolean
}



const PageIndexer = ({ numberOfPages, currentPage, setPageCallback }: IndexerProps) => {




    const IndexerElem = ({ index, marked }: IndexerElemProps) => {
        return (
            <button 
                className={marked ? styles.indexerElemMarked : styles.indexerElemDefault}
                onClick={() => setPageCallback(index)}
            >
                {index}
            </button>
        )
    }

    function fillArrayFrom1ToN(N: number) {
        const array = [];
        for (let i = 1; i <= N; i++) {
            array.push(i);
        }
        return array;
    }


    function mapIndexer() {
        return fillArrayFrom1ToN(9).map((index) => (
            <IndexerElem
                key={index}
                index={index}
                marked={index === currentPage ? true : false}
            />
        ))
    }


    return (
        <div className={styles.indexerMainContainer}>
            {mapIndexer()}
        </div>
    )



}


export default PageIndexer