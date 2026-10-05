import MyHeader from '@components/Header/Header.jsx'
import Banner from '@components/Banner/Banner.jsx'
import Info from '@components/Info/Info.jsx'
import HeadingListProduct from '@components/HeadingListProduct/HeadingListProduct.jsx'
import MyFooter from '@components/Footer/Footer.jsx'
import styles from './styles.module.scss'
import { useEffect, useState } from 'react'
import { getProducts } from '../../apis/productsService'
import PopularProduct from '../PopularProduct/PopularProduct'

const priceFormatter = new Intl.NumberFormat('en-US', {
  style: 'currency',
  currency: 'USD',
})

function HomePage() {
  const [listProduct, setListProduct] = useState([])
  const [isLoading, setIsLoading] = useState(true)
  const [error, setError] = useState('')

  useEffect(() => {
    const controller = new AbortController()

    const loadProducts = async () => {
      try {
        const products = await getProducts({ signal: controller.signal })
        setListProduct(
          products.map((product) => ({
            id: product._id,
            name: product.name,
            price: priceFormatter.format(product.price),
            img: product.images?.[0],
            imgHover: product.images?.[1],
          })),
        )
      } catch (requestError) {
        if (!controller.signal.aborted) {
          setError(
            requestError instanceof Error
              ? requestError.message
              : 'An unexpected error occurred while loading products.',
          )
        }
      } finally {
        if (!controller.signal.aborted) {
          setIsLoading(false)
        }
      }
    }

    loadProducts()

    return () => controller.abort()
  }, [])

  return (
    <div className={styles.container}>
      <MyHeader />
      <Banner />
      <Info />
      <HeadingListProduct
        data={listProduct.slice(0, 2)}
        isLoading={isLoading}
        error={error}
      />
      <PopularProduct data={listProduct.slice(2)} />
      <MyFooter />
    </div>
  )
}

export default HomePage
