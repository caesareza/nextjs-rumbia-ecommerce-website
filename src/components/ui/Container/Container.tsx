import { ReactNode } from 'react'
import { clsx } from 'clsx'

interface ContainerProps {
    children: ReactNode
    className?: string
}

// web content container width is 1230px and center position
// with no padding and margin, you can add those inside className props.
const WEB_CONTENT_WIDTH = 'w-[1230px] mx-auto'

const Container = ({ children, className = '' }: ContainerProps) => {
    const style = clsx(WEB_CONTENT_WIDTH, className)

    return <div className={style}>{children}</div>
}

export default Container
