import React,{useContext} from 'react';
import AppContext from '../context/AppContext';
import Image from 'next/image';
import icon_to_cart from '@icons/bt_add_to_cart.svg';
import styles from '@styles/ProductItem.module.scss';

const ProductItem = ({product}) => {
	const { addToCart } = useContext(AppContext);

	const handleClick = item => {
		addToCart(item);
	};
	return (
		<div className={styles.ProductItem}>
			
			<Image
        loader={() => product.images[0]}
        src={product.images[0]}
        alt={product.title}
        width={100}
        height={100}
        layout="responsive"
      />
			<div className={styles["product-info"]}>
				<div>
					<p>${product.price}</p>
					<p>{product.title}</p>
				</div>
				<button className={styles.buttonAddToCart} onClick={()=>handleClick(product)} onKeyDown={()=>handleClick(product)}>
				<figure >
					<Image src={icon_to_cart} alt="" />
				</figure>
				</button>
				
			</div>
		</div>
	);
};

export default ProductItem;