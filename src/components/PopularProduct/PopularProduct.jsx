import React from 'react'
import styles from './styles.module.scss'
import ProductItem from '@components/ProductItem/ProductItem'
import MainLayout from '@components/Layout/Layout'

function PopularProduct({ data = [] }) {
  return (
    <MainLayout>
    <div className={styles.container}>
      {data.map((item) => (
        <ProductItem
          key={item.id}
          img={item.img ?? item.images?.[0]}
          imgHover={item.imgHover ?? item.images?.[1]}
          name={item.name}
          price={item.price}
        />
      ))}
    </div>
    </MainLayout>
  )
}

export default PopularProduct
