import Plus from "./Actions/Plus"
import Search from "./Actions/Seach"
import Home from "./Actions/Home"
import styles from "./IHeader.module.scss"
import HeaderButton from "./HeaderButton/HeaderButton"
import {Link} from 'react-router-dom'
import AddPost from "../AddPost/AddPost"

const Header = () => {

    return (
    <header className={styles.header}>
        <Link className={styles.logo} to={'/'}>
            <img src="/title.png" alt="Mengram" />
        </Link>
        <Link to={'/'}>
            <HeaderButton
                text={'home'}
            >
                <Home fill={'white'} style={{width: '30px', height: '30px', marginRight: '-6px'}}/>
            </HeaderButton>
        </Link>
        <HeaderButton
            text={'search'}
        >
            <Search fill={'white'}/>
        </HeaderButton>
        <HeaderButton
            text={'create'}
        >
            <Plus fill={'white'}/>
        </HeaderButton>
        <AddPost />
    </header>
    )
}

export default Header