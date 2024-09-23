import { useNavigate } from "react-router-dom"
import { Appbar } from "../components/appbar"
import { BalanceComp } from "../components/balance"
import { UserComponent } from "../components/usersComp"
export const Dashboard = ()=>{
    return(
        <div className="flex items-center flex-col mt-10 w-screen h-screen">
            <Appbar></Appbar>
            <BalanceComp balance={"10000"}></BalanceComp>
            <UserComponent label={"Users"} placeholder={"Search users..."} Name={"Sourabh"}></UserComponent>
        </div>
    )
}