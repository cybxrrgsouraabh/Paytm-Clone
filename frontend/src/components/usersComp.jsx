import { InputBox } from "./inputbox"
import { ButtonComponent } from "./button"
import { useState } from "react"
import { useNavigate } from "react-router-dom"

export const UserComponent = ({label,placeholder, Name})=>{
    const [users, setUsers] = useState([{
        "firstName": "Sourabh",
        "lastName": "Bisht",
        "id": 1
    }])

    return(
        <div className="flex flex-col justify-start w-[90%]">
            <InputBox label={label} placeholder={placeholder}/>

            <div className="flex justify-between">
                {console.log(users)}
               {users.map(e=>{
                return <User user={e} key={e.id} btnText={"Send Money"} userData={users}/>
               })}
            </div>
            
        </div>
    )
}

function User({user, btnText, userData}){
    const navigate = useNavigate();
    const data = userData

    const clickHandler = ()=>{
        console.log("helo you click something??")
        navigate("/sendmoney", {state: data});
    }
    return(
        <>
             <div className="flex items-center content-center">
                    <div className="rounded-full p-2 w-10 h-10 mr-2 text-center bg-gray-300">{user.firstName[0]}</div>
                    <p>{user.firstName} {user.lastName}</p>
                </div>
                <div className="w-[13%]">
                    <div className="w-[100%] flex justify-center mt-3">
                        <button 
                            type="button" 
                            className="text-white bg-gray-800 hover:bg-gray-900 focus:outline-none 
                            focus:ring-4 focus:ring-gray-300 font-medium rounded-lg text-sm px-5 py-2.5 
                            me-2 mb-2 dark:bg-gray-800 dark:hover:bg-gray-700 dark:focus:ring-gray-700
                            dark:border-gray-700 w-[80%] transition ease-in-out hover:scale-105"
                            onClick={clickHandler}
                        >{btnText}</button>
                    </div>
                </div>
        </>
    )
}