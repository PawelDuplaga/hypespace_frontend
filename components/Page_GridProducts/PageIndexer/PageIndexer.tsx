
import Image from 'next/image'
import styles from './PageIndexer.module.scss'
import Link from 'next/link'

interface IndexerProps {
    currentPage: number
    numberOfPages: number
    mainRoute: string
    setPageCallback(chosenPage: number): void
}

interface IndexerElemProps {
    index: number
    marked: boolean
}


function fillArrayFromXToY(startIndex: number, endIndex : number) {
    const array :number[] = [];
    for (let i = startIndex; i <= endIndex; i++) {
        array.push(i);
    }
    return array;
}


// Strasznie skomplikowany komponent. Nie czaje o co w nim chodzi XD
const PageIndexer = ({ numberOfPages, currentPage, setPageCallback, mainRoute }: IndexerProps) => {


    const IndexerElem = ({ index, marked }: IndexerElemProps) => {
        return (
            <Link className={styles.indexerLink} href={`/Products/${index}`}>
                <button 
                    className={marked ? styles.indexerElemMarked : styles.indexerElemDefault}
                    onClick={() => setPageCallback(index)}
                >
                    {index}
                </button>
            </Link>
        )
    }


    function mapIndexerStart() {
        return fillArrayFromXToY(currentPage - 2, currentPage + 1).map((index) => (
            <IndexerElem
                key={index}
                index={index}
                marked={index === currentPage ? true : false}
            />
        ))
    }

    function mapIndexerEnd() {
        return fillArrayFromXToY(numberOfPages-3, numberOfPages).map((index) => (
            <IndexerElem
                key={index}
                index={index}
                marked={index === currentPage ? true : false}
            />
        ))
    }

    function mapIndexer() {
        if (numberOfPages <= 9) {
            return fillArrayFromXToY(1, numberOfPages).map((index) => (
                <IndexerElem
                    key={index}
                    index={index}
                    marked={index === currentPage ? true : false}
                />
            ))
        }
        else if (currentPage >= 1 && currentPage <= 3 ) {
            return fillArrayFromXToY(1, 4).map((index) =>(
                <IndexerElem
                    key={index}
                    index={index}
                    marked={index === currentPage ? true : false}
                />
            ))
        }
        else if (currentPage <= numberOfPages && currentPage >= numberOfPages - 8) {
            return fillArrayFromXToY(numberOfPages-8, numberOfPages).map((index) =>(
                <IndexerElem
                    key={index}
                    index={index}
                    marked={index === currentPage ? true : false}
                />
            ))
        }
        else {
            return [
                mapIndexerStart(),
                <div className={styles.indexerDots}>
                    <div>...</div>
                </div>,
                mapIndexerEnd()
            ]
        }

        

    }


    return (
        <div className={styles.indexerMainContainer}>
            <Image
                src="/icons/ProductGridPage/arrowPageIndexer.svg"
                alt='arrowPageIndexer.svg'
                width={20}
                height={20}
                style={{transform: 'rotate(180deg)'}}            
            />
            {mapIndexer()}
            <Image 
                src="/icons/ProductGridPage/arrowPageIndexer.svg"
                alt='arrowPageIndexer.svg'
                width={20}
                height={20}   
            />
        </div>
    )



}


export default PageIndexer