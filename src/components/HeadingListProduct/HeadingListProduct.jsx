import MainLayout from '@components/Layout/Layout.jsx'
import AdvanceHeadling from '@components/AdvanceHeadling/AdvanceHeadling.jsx'
import ProductItem from '@components/ProductItem/ProductItem.jsx'
import CountdownBanner from '@components/CountdownBanner/CountdownBanner.jsx'
import { dataProducts } from './constants.jsx'
import styles from './styles.module.scss'

function HeadingListProduct({
  data = dataProducts,
  isLoading = false,
  error = '',
}) {
  return (
    <MainLayout>
      <div className={styles.container}>
        <AdvanceHeadling
          headline="DON'T MISS SUPER OFFERS"
          title="OUR PRODUCTS"
        />

        <div className={styles.containerListProduct}>
          <div className={styles.banner}>
            <CountdownBanner />
          </div>

          {isLoading && (
            <p className={styles.message} role="status">
              Loading products...
            </p>
          )}
          {!isLoading && error && (
            <p className={styles.message} role="alert">
              Unable to load products: {error}
            </p>
          )}
          {!isLoading && !error && data.length === 0 && (
            <p className={styles.message} role="status">
              No products found.
            </p>
          )}
          {!isLoading &&
            !error &&
            data.map((item) => (
              <ProductItem
                key={item.id}
                name={item.name}
                price={item.price}
                img={item.img}
                imgHover={item.imgHover}
              />
            ))}
        </div>
      </div>
    </MainLayout>
  )
}

export default HeadingListProduct
