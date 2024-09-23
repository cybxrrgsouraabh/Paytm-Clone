import react from "react"
import { Heading } from "../components/heading"
import { ButtonComponent } from "../components/button"
import { SubHeading } from "../components/subHeading"
import { InputBox } from "../components/inputbox"
import { BottomWarning } from "../components/bottomWarning"


export const SignUp = ()=>{

    return(
        <div className="w-screen h-screen flex items-center justify-center bg-slate-300 ">
            <div className="w-[25%] h-[90%] flex flex-col items-center  bg-white rounded-lg shadow-sm">

                <Heading label={"Sign Up"}></Heading>
                <SubHeading label={"Enter your information to create an account"}/>
                <InputBox label={"First Name"} placeholder={""}></InputBox>
                <InputBox label={"Last Name"} placeholder={""}></InputBox>
                <InputBox label={"Email"}></InputBox>
                <InputBox label={"Password"}></InputBox>
                <ButtonComponent label={"Sign Up"}></ButtonComponent>
                <BottomWarning label={"Login"}></BottomWarning>
                
            </div>
        </div>
    )

}