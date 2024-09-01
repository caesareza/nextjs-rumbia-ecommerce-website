import { FC } from 'react'
import NavMenu from './components/NavMenu'
import Logo from './components/Logo'
import Cart from './components/Cart'
import Ribbon from './components/Ribbon'

import { Container } from '@/components/ui'

const Header: FC = () => {
    return (
        <header className="border-b-[1px] border-slate-200">
            <Ribbon />
            <Container className="flex items-center">
                <div className="flex items-center space-x-5 py-5">
                    <Logo />
                    <NavMenu />
                </div>
                <div className="ml-auto">
                    <Cart />
                </div>
            </Container>
        </header>
    )
}

export default Header
