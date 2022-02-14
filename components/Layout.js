import Header from './Header';
import Footer from './Footer';

const Layout = ({ children }) => {
    return (
        <div className="flex flex-col h-screen justify-between">
            <Header />
            <main className='mx-auto my-0 bg-white'>
                {children}
            </main>
            <Footer />
        </div>
    )
}

export default Layout;