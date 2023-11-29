


const SideNav = ({ signoutBtnHandler, changePageHandler, currentPage }) => (
    <aside className="flex flex-col justify-between sticky top-0 left-0 h-screen w-52 border-r-2 border-slate-900 shadow-[0_0px_10px_0px_rgba(0,0,0,0.3)] ">

        <div className="mt-10">
            <ul>
                <NavTile
                    onClick={e => changePageHandler("dashboard")}
                    icon={<DashboardIcon />}
                    name="Dashboard"
                    isActive={currentPage=='dashboard'}
                />

                <NavTile
                    onClick={e => changePageHandler("all_transaction")}
                    icon={<AllTransactionIcon />}
                    name="All Tranactions"
                    isActive={currentPage=='all_transaction'}
                />

                <NavTile
                    onClick={e => changePageHandler("statistics")}
                    icon={<StatisticsIcon />}
                    name="Statistics"
                    isActive={currentPage=='statistics'}
                />
            </ul>
        </div>
        <div className="mb-5 flex items-center ">
            <button
                type="button"
                onClick={signoutBtnHandler}
                className="rounded-lg border-[3px] border-slate-900 px-5 py-2 text-center text-sm font-bold text-white bg-slate-900 hover:bg-slate-300 hover:text-slate-900 focus:outline-none mx-auto"
            >
                Logout
            </button>
        </div>

    </aside>
)

export default SideNav;


const NavTile = ({ onClick, icon, name, isActive }) => {

    const conditionalStyles =  isActive ? "text-white bg-slate-900" : "text-slate-900 hover:bg-slate-200"
    return <li>
        <span
            onClick={onClick}
            className={`group flex items-center  p-2 font-serif text-lg font-medium ${conditionalStyles}`}
        >
            {icon}
            <span className="ms-2">{name}</span>
        </span>
    </li>
}


const DashboardIcon = () => <svg
    className="ml-2 h-5 w-5 text-current transition duration-75  "
    aria-hidden="true"
    xmlns="http://www.w3.org/2000/svg"
    fill="currentColor"
    viewBox="0 0 22 21"
>
    <path d="M16.975 11H10V4.025a1 1 0 0 0-1.066-.998 8.5 8.5 0 1 0 9.039 9.039.999.999 0 0 0-1-1.066h.002Z" />
    <path d="M12.5 0c-.157 0-.311.01-.565.027A1 1 0 0 0 11 1.02V10h8.975a1 1 0 0 0 1-.935c.013-.188.028-.374.028-.565A8.51 8.51 0 0 0 12.5 0Z" />
</svg>

const AllTransactionIcon = () => <svg
    className="ml-2 h-5 w-5 text-current transition duration-75 "
    xmlns="http://www.w3.org/2000/svg"
    fill="none"
    viewBox="0 0 24 24"
    strokeWidth={3.0}
    stroke="currentColor"
>
    <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M8.25 6.75h12M8.25 12h12m-12 5.25h12M3.75 6.75h.007v.008H3.75V6.75zm.375 0a.375.375 0 11-.75 0 .375.375 0 01.75 0zM3.75 12h.007v.008H3.75V12zm.375 0a.375.375 0 11-.75 0 .375.375 0 01.75 0zm-.375 5.25h.007v.008H3.75v-.008zm.375 0a.375.375 0 11-.75 0 .375.375 0 01.75 0z"
    />
</svg>

const StatisticsIcon = () => <svg
    className="ml-2 h-5 w-5 text-current transition duration-75 "
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 24 24"
    fill="currentColor"
>
    <path d="M18.375 2.25c-1.035 0-1.875.84-1.875 1.875v15.75c0 1.035.84 1.875 1.875 1.875h.75c1.035 0 1.875-.84 1.875-1.875V4.125c0-1.036-.84-1.875-1.875-1.875h-.75zM9.75 8.625c0-1.036.84-1.875 1.875-1.875h.75c1.036 0 1.875.84 1.875 1.875v11.25c0 1.035-.84 1.875-1.875 1.875h-.75a1.875 1.875 0 01-1.875-1.875V8.625zM3 13.125c0-1.036.84-1.875 1.875-1.875h.75c1.036 0 1.875.84 1.875 1.875v6.75c0 1.035-.84 1.875-1.875 1.875h-.75A1.875 1.875 0 013 19.875v-6.75z" />
</svg>