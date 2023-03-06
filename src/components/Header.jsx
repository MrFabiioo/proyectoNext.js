import React,{useState, useContext} from "react";
import Link from "next/link";
import Image from "next/image";
import Menu from '@components/Menu';
import MobileMenu from '@components/MobileMenu';
import menu from '@icons/icon_menu.svg';
import logo from '@logos/logo_yard_sale.svg';
import shoppingCard from '@icons/icon_shopping_cart.svg';
import AppContext  from '@context/AppContext';
import MyOrder from '@containers/MyOrder';
import styles from '@styles/Header.module.scss';


const Header = () => {
    const [toggleDesktop,setToggleDesktop]=useState(false);
    const [toggleOrders, setToggleOrders] = useState(false);
    const [toggleMobile,setToggleMobile]=useState(false);
    const {state} = useContext(AppContext);

    const handleToggleDesktop = ()=>{
        setToggleDesktop(!toggleDesktop);
    };

    const handleToggleMobile = ()=>{
        setToggleMobile(!toggleMobile);
    };

    /*const handleToggleOrder = ()=>{
        setToggleOrders(!toggleOrders);
    };*/
    return (
        <nav className={styles.Nav} >
            <Image src={menu} alt="menu" className={styles.menu} onClick={handleToggleMobile}/>
            <div className={styles["navbar-left"]}>
                <div className={styles.iconContainer}>
                <Link href='/'>
                <Image src={logo} alt="logo" className={styles['nav-logo']} />
                </Link>
                </div>
                <ul>
                    <li>
                        <Link href="/">All</Link>
                    </li>
                    <li>
                        <Link href="/">Clothes</Link>
                    </li>
                    <li>
                        <Link href="/">Electronics</Link>
                    </li>
                    <li>
                        <Link href="/">Furnitures</Link>
                    </li>
                    <li>
                        <Link href="/">Toys</Link>
                    </li>
                    <li>
                        <Link href="/">Others</Link>
                    </li>
                </ul>
            </div>
            {toggleMobile && <MobileMenu/>}
            <div className={styles["navbar-right"]}>
                <ul>
                    <button onClick={handleToggleDesktop} onKeyDown={handleToggleDesktop}className={styles.buttonEmail}>
                    <li className={styles["navbar-email"]} >platzi@example.com</li>
                    </button>
                    <li className={styles["navbar-shopping-cart"]}>
                        <Image src={shoppingCard} alt="shopping cart" onClick={() => setToggleOrders(!toggleOrders)}/>
                        {state.cart.length > 0 ? <div>{state.cart.length}</div> : null}
                    </li>
                </ul>
            </div>
            {toggleDesktop && <Menu/>}
            {toggleOrders && <MyOrder />}
        </nav>
    );
};

export default Header;