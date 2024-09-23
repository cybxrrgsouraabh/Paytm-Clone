import React, { Suspense } from "react"
import {BrowserRouter, Routes, Route} from "react-router-dom"
import { SignUp } from "./pages/signup"
import { Dashboard } from "./pages/dashboard"
import { SendMoney } from "./pages/sendMoney"
React.lazy(()=> import("./pages/signup"))
React.lazy(()=>import("./pages/dashboard"))
function App() {
  return (
    <div>
      <BrowserRouter>
          <Routes>

            <Route 
              path="/signup" 
              element={
                <Suspense fallback="loading.....">
                  <SignUp />
                </Suspense> }>
            </Route>

                
            <Route path="/dashboard" element={
                <Suspense fallback="loading.....">
                  <Dashboard />
                </Suspense> }>
            </Route>
            
            
            <Route path="/sendmoney" element={
              <Suspense fallback="loading.....">
                <SendMoney/>
              </Suspense> }>
            </Route>

            {/* <Route path="/login" element={<Login/>}></Route> */}

          </Routes>
      </BrowserRouter>
    </div>
  )
}

export default App
