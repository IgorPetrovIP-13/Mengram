import React from 'react'
import Plus from './Actions/Plus.tsx'
import Search from './Actions/Search.tsx'
import Home from './Actions/Home.tsx'
import styles from './IHeader.module.scss'
import HeaderButton from './HeaderButton/HeaderButton.tsx'
import {Link} from 'react-router-dom'

const Header: React.FC = () => {

    return (
    <header className={styles.header}>
        <Link className={styles.logo} to={'/'}>
            <img src="/title.png" alt="Mengram" />
        </Link>
        <Link to={'/'}>
            <HeaderButton
                text={'home'}
                func={() => {}}
            >
                <Home fill={'white'} style={{width: '30px', height: '30px', marginRight: '-6px'}}/>
            </HeaderButton>
        </Link>
        <HeaderButton
            text={'search'}
            func={() => {}}
        >
            <Search fill={'white'}/>
        </HeaderButton>
        <HeaderButton
            text={'create'}
            func={() => {}}
        >
            <Plus fill={'white'}/>
        </HeaderButton>
    </header>
    )
}

export default Header