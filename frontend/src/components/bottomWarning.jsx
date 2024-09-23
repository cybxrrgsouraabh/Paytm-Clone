import { useEffect } from "react"
import { useNavigate } from "react-router-dom"
export const BottomWarning = ({label})=>{
    const navigate = useNavigate()

    const clickHandler=()=>{
        navigate("/dashboard")
    }
    
    return(
        <div className="mt-1">
            <p>
                Already have an account ?{" "} 
                <a  className=" underline hover:cursor-pointer text-blue-700"
                onClick={clickHandler}
                >{label}</a>
            
            </p>
        </div>
    )
}