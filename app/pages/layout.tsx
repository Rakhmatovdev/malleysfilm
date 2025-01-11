
import "../globals.css"

interface LayoutProps {
  children: React.ReactNode;
}

const Layout: React.FC<LayoutProps> = ({ children }) => {
  return (
    <>
      <div className="Gradient">
        {children}
        </div>
    </>
  )
}
export default Layout;