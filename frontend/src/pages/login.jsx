import { Heading } from "../components/heading"
import { InputBox } from "../components/inputbox"

export const LoginComp = ()=>{
    
    return(
            <div className="flex items-center justify-center h-screen bg-slate-300">
                <div className="bg-white w-96 flex flex-col p-8">
                    <Heading label={"Login"}/>
                    <InputBox label={"Email"}/>
                    <InputBox label={"Password"}/>
                    <button className="rounded-lg bg-gray-800 mt-5 p-2 text-white font-bold 
                        hover:ring-4 hover:ring-gray-400 active:bg-gray-600 hover:scale-105">
                        Login
                    </button>
                </div>

            </div>
        );

}