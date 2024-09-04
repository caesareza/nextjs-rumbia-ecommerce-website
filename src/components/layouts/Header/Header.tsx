import { FC } from 'react'

import NavMenu from './components/NavMenu'
import Cart from './components/Cart'
import Favourite from './components/Favourite'
import Ribbon from './components/Ribbon'

import { Container } from '@/components/ui'
import { Logo } from '@/components/common'

const Header: FC = () => {
    return (
        <header className="border-b-[1px] bg-white">
            <Ribbon />
            <Container className="flex items-center py-5">
                <Logo />
                <NavMenu />
                <div className="ml-auto flex space-x-7">
                    <Favourite />
                    <Cart />
                </div>
            </Container>
        </header>
    )
}

export default Header
