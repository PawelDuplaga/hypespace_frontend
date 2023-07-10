'use client'

import styles from './page.module.scss'
import { Grid } from "@mui/material"
import ProductViewTemplateB from "@/components/ProductViewComponents/ProductViewTemplateB/ProductViewTemplateB"
import { useProducts } from "medusa-react"
const gridUItest = () => {

    const {products, isLoading } = useProducts()


    return (
        <div className={styles.mainContainer}>
            {products  &&
            //idk how to make it space-between
            <Grid container columnSpacing={0}>
            {Array.from(Array(4*4)).map((_, index) => (
                <Grid item md={3} key={index}>
                <ProductViewTemplateB product={products[0]}/>
                </Grid>
            ))}
            </Grid>}
        </div>
    )
    
}

export default gridUItest