

const DashboardPage = ({showAddModal}) => {
    return <div>
        <h2>Dashboard page</h2>
        <div>
<button onClick={showAddModal} className="rounded-lg border-[3px] border-slate-900 px-5 py-2 text-center text-sm font-bold text-white bg-slate-900">Add New Transaction</button>
</div>
    </div>
}

export default DashboardPage;


