const MenuLoader = () =>
    Array.from(Array(10).keys()).map((_, i) => (
        <div className="flex gap-5 animate-pulse" key={i}>
            <div className="w-36 h-36 bg-slate-200 rounded"></div>
            <div className="w-full md:w-1/2 space-y-2">
                <h3 className="font-bold bg-slate-200 h-3 rounded"></h3>
                <div className="pt-1 pb-3 bg-slate-200 h-3 rounded"></div>
                <p className="font-light break-all bg-slate-200 h-24 rounded"></p>
            </div>
        </div>
    ))

export default MenuLoader
