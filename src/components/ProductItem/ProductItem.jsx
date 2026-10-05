import styles from './styles.module.scss'
import Hearticon from '@icons/svgs/hearticon.svg'
import Reloadicon from '@icons/svgs/realoadicon.svg'
import Carticon from '@icons/svgs/carticon.svg'

const actions = [
  { key: 'wishlist', icon: Hearticon, label: 'Add to wishlist' },
  { key: 'compare', icon: Reloadicon, label: 'Compare' },
  { key: 'cart', icon: Carticon, label: 'Add to cart' },
]

function ProductItem({ name, price, img, imgHover, onAction }) {
  const { container, boxImg, imgMain, imgSecond, boxActions, actionBtn, info, nameProduct, priceProduct } = styles

  return (
    <div className={container}>
      <div className={boxImg}>
        <img src={img} alt={name} className={imgMain} loading="lazy" />
        {imgHover && <img src={imgHover} alt="" aria-hidden="true" className={imgSecond} decoding="async" />}

        <div className={boxActions}>
          {actions.map((item) => (
            <button
              key={item.key}
              type="button"
              className={actionBtn}
              aria-label={`${item.label}: ${name}`}
              title={item.label}
              onClick={() => onAction?.(item.key)}
            >
              <img src={item.icon} alt="" />
            </button>
          ))}
        </div>
      </div>

      <div className={info}>
        <h3 className={nameProduct}>{name}</h3>
        <p className={priceProduct}>{price}</p>
      </div>
    </div>
  )
}

export default ProductItem
