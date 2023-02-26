import Footer from "@/components/footer";
import Navbar from "@/components/navbar";


const Layout = ({ children }) => {

  return (
  <>
    <Navbar />
    {children}
    <Footer />
  </>
  )
}

export default Layout;
