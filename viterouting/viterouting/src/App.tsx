import { RouterProvider } from "react-router-dom"
import appRouter from "./routes"
function App() {
 
  return (
   <>
   <div>
    <RouterProvider router={appRouter} />
   </div>
   </>
  )
}

export default App
