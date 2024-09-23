export const InputBox = ({label,placeholder})=>{
    
    return(
        <div className="flex flex-col p-2">
            <p className="font-semibold text-left"> 
                {label}
            </p> 
            <input 
                type="text" 
                className="mt-2 rounded-sm ring-1 ring-gray-300 hover:bg-gray-100 focus:bg-gray-100 p-1" 
                placeholder={placeholder}
            />  
        </div>
    )
}