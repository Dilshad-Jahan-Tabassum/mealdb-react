import { Outlet } from 'react-router-dom';
import Nav from '../Components/Nav'
import Footer from '../Components/Footer';

const MainLayout = () => {
    return (
        <div>
            <div className='h-18'>
                <Nav></Nav>
            </div>
            <div className="min-h-[calc(100vh-175px)]">
                <Outlet></Outlet>
            </div>
            
            <Footer></Footer>
        </div>
    )
}

export default MainLayout;