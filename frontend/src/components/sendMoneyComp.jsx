import { Heading } from "./heading"
import { InputBox } from "./inputbox"
import { ButtonComponent } from "./button"
import { useLocation } from "react-router-dom"

export const SendMoneyComp = ({userName})=>{
    

    const location = useLocation();
    const data = location.state;
    return(
        <div className="w-screen h-screen flex justify-center items-center bg-gray-200">
            <div className="flex rounded-md flex-col w-[30%] h-[60%] bg-white p-4 shadow-xl">
                <div className="mb-10 p-4">
                    <Heading label={"Send Money"}/>
                </div>

                <div className="flex items-center">
                    <div className="rounded-full p-2 w-10 h-10 mr-2 text-center bg-green-400">
                        S
                    </div>
                    {console.log(data)}
                    <div className="font-semibold text-xl">Friend's Name</div>
                </div>

                <div className="">
                    <InputBox placeholder={"Enter Amount"} label={"Amount (in Rs)"} type={"number"} />
                </div>

                <div className="w-[100%] flex justify-center mt-3">
                    <button 
                        type="button" 
                        className="text-white bg-green-500 hover:bg-green-600 focus:outline-none 
                        focus:ring-4 focus:ring-green-300 font-medium rounded-lg text-sm px-5 py-2.5 
                        w-[97%] ml-1 transition ease-in-out hover:scale-105"

                    >Initiate Transfer</button>
                </div>

            </div>
        </div>
    )
}