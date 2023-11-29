import { useState } from "react";
import { auth } from "../../services/firebase";
import AddTransactionComponent from "./AddTransactionComponent";
import AllTransactionPage from "../all_transaction/AllTransactionPage";
import StatisticsPage from "../statistics/StatisticsPage";
import DashboardPage from "../dashboard/DashboardPage";
import SideNav from "./SideNav";

const HomePage = ({ userData, onSignOut }) => {
// console.log(userData)

  const [showAddModal, setShowAddModal] = useState(false);
  const [page, setPage] = useState("dashboard");

  const handleChangePage = (pageName) => {
    setPage(pageName);
  }

  const handleAddModalVisibility = () => {
    setShowAddModal(!showAddModal);
  }
  

  // current main body 
  const MainBody = ({pageValue}) => {
    if(pageValue == 'all_transaction') return <AllTransactionPage />
    else if(pageValue == 'statistics') return <StatisticsPage />
    else if(pageValue == 'dashboard') return <DashboardPage showAddModal={handleAddModalVisibility}/>
  }

  return <div className="flex">
    
    <SideNav signoutBtnHandler={onSignOut} changePageHandler={handleChangePage} currentPage={page}/>
    {/* main body */}
    <MainBody pageValue={page}/>
    

    
    {showAddModal && <AddTransactionComponent onClose={handleAddModalVisibility}/>}
    
    
  </div>
}
export default HomePage;





