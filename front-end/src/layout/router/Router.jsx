import { Route, Routes } from "react-router-dom"
    import Home from "../../pages/home"
import Detail from "../../pages/detail"
import AdminLayout from "../../adminLayout/adminLayout"

const Router = () => {
    return (
        <Routes>
               <Route index element={<Home />} />
               <Route path="/admin" element={<AdminLayout/>}></Route>

            <Route path="/detail/:id" element={<Detail/>}></Route>

            <Route path="*" element={<div>Not Found</div>} />

        </Routes>
    )
}

export default Router