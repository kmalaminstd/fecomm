
import { Outlet, RouterProvider, ScrollRestoration, createBrowserRouter } from "react-router-dom"
import Footer from "./components/Footer"
import Header from "./components/Header"
import Home from "./pages/Home"
import Cart from "./pages/Cart"
import { productData } from "./api/api"
import Product from "./components/Product"
import { ToastContainer } from 'react-toastify';
import Login from "./pages/Login"


const Layout = ()=>{
    return(
        <>  
            <Header />
            <ScrollRestoration />
            <Outlet />
            <Footer />

        </>
    )
}

const router = createBrowserRouter([
    {
        path: '/',
        element: <Layout />,
        children: [
            {
                path: '/',
                element: <Home />,
                loader: productData
            },
            {
                path: 'cart',
                element: <Cart />
            },
            {
                path:'product/:id',
                element: <Product />
            },
            {
                path:'login',
                element: <Login />
            }
        ]
    }
])

function App() {

    return(
        <>  
            <ToastContainer
                position="top-left"
                autoClose={2000}
                hideProgressBar={false}
                newestOnTop={false}
                closeOnClick
                rtl={false}
                pauseOnFocusLoss
                draggable
                pauseOnHover
                theme="light"
            />

            <div className="font-bodyFont">
                <RouterProvider router={router} />
            </div>
        </>
        
    )
  
}

export default App
