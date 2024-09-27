import { Heading } from "./heading"
import { InputBox } from "./inputbox"
import { ButtonComponent } from "./button"
import { useLocation } from "react-router-dom"
import { useState } from "react"
import axios from "axios"
export const SendMoneyComp = ({userName})=>{
    const [amount, setAmount] = useState();
    const location = useLocation();
    const data = location.state;

    const onChangeHandler = (e)=>{
        setAmount(e.target.value)
    }

    const onClickTransfer = async()=>{

        // const res = await axios.get("http://localhost:3000/api/vi/accounts/balance")
        // console.log("your balance before transaction is: "+res.data)
        console.log(data.userId)
        console.log(localStorage.getItem("token"))

        await axios.post("http://localhost:3000/api/vi/account/transfer",
            {
                to: data.userId,
                amount
            },
            {
                headers: {
                    Authorization: "Bearer " + localStorage.getItem("token")
                }
            }
        );

        console.log("your transaction is completed")
        // const res2 = await axios.get("http://localhost:3000/api/vi/accounts/balance")
        // console.log("your balance after transaction is: "+res2.data)
    }

    return(
        <div className="w-screen h-screen flex justify-center items-center bg-gray-200">
            <div className="flex rounded-md flex-col w-[30%] h-[60%] bg-white p-4 shadow-xl">
                <div className="mb-10 p-4">
                    <Heading label={"Send Money"}/>
                </div>

                <div className="flex items-center">
                    <div className="rounded-full p-2 w-10 h-10 mr-2 text-center bg-green-400">
                        {data.firstName[0]}
                    </div>
                    
                    <div className="font-semibold text-xl">{data.firstName} {" "} {data.lastName}</div>
                </div>

                <div className="">
                    <InputBox placeholder={"Enter Amount"} label={"Amount (in Rs)"} type={"number"} onChange={onChangeHandler}/>
                </div>

                <div className="w-[100%] flex justify-center mt-3">
                    <button 
                        type="button" 
                        className="text-white bg-green-500 hover:bg-green-600 focus:outline-none 
                        focus:ring-4 focus:ring-green-300 font-medium rounded-lg text-sm px-5 py-2.5 
                        w-[97%] ml-1 transition ease-in-out hover:scale-105"
                        onClick={onClickTransfer}
                    >Initiate Transfer</button>
                </div>

            </div>
        </div>
    )
}