import Link from 'next/link'

const MenuCategory = () => (
    <aside className="hidden flex-none w-[250px] md:flex flex-col items-end text-2xl mr-10">
        <Link href="/">Americano</Link>
        <Link href="/">Coffee</Link>
        <Link href="/">Coffee of the Day</Link>
    </aside>
)

export default MenuCategory
