import { Route,createBrowserRouter,createRoutesFromElements } from "react-router-dom";
import Home from './pages/Home'
import Contact from './pages/Contact'
import About from "./pages/About";
const appRouter = createBrowserRouter(
    createRoutesFromElements(
        <Route path="" >
        <Route path="/" element={<Home/>} />
        <Route path="/contact" element={<Contact/>} />
        <Route path="/about" element={<About/>} />
        </Route>
    )

)

export default appRouter