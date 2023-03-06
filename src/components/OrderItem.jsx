import React,{useContext} from 'react';
import AppContext from '@context/AppContext';
import icon_close from '@icons/icon_close.png';
import Image from 'next/image';
import styles from '@styles/OrderItem.module.scss';


const OrderItem = (props) => {
	const {product,indexValue} = props;
	const {removeFromCart}= useContext(AppContext);

	const handleRemove = (index) =>{
		removeFromCart(index);
	};
	return (
		<div className={styles.OrderItem}>
			<figure>
			<Image
        loader={() => product?.images[0]}
        src={product?.images[0]}
        alt={product?.title}
        width={100}
        height={100}
        layout="responsive"
      />
			</figure>
			<p>{product?.title}</p>
			<p>${product?.price}</p>
			<Image src={icon_close} alt="close" onClick={()=>handleRemove(indexValue)}/>
		</div>
	);
};

export default OrderItem;