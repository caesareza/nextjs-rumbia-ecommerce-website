import FavouriteIcon from '@/components/icons/FavouriteIcon'
import Link from 'next/link'

export default function Favourite() {
    return (
        <div className="relative">
            {/*<span className="counter absolute bg-red-400 rounded-full p-1 px-2 -top-2 -right-3 text-center text-[10px] text-white">2</span>*/}
            <Link href="/">
                <FavouriteIcon fontSize="25" />
            </Link>
        </div>
    )
}
