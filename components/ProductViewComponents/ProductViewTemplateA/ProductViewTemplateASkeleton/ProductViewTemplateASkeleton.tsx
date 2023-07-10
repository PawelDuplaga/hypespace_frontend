import { Skeleton } from '@mui/material'
import styles from './Skeleton.module.scss'

const ProductViewTemplateASkeleton = () => {

    return (
        <div className={styles.skeletonFlexBox}>
        <Skeleton variant='rectangular' animation="wave" width={340} height={340} />
        <Skeleton variant='rounded' animation="wave" width={240} height={16} /> 
    </div>
    )
}

export default ProductViewTemplateASkeleton