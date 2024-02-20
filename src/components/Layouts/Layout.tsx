import { ReactElement } from "react"
import { Nav } from "./components/Nav"
import backGroundImg from "../../../public/images/marbre.jpg"
import { Footer } from "./components/Footer"


interface LayoutProps {
    children: ReactElement
}

export const Layout = ({children}: LayoutProps) => {
    return (
        <div 
        style={{
            backgroundImage: `url(${backGroundImg.src})`,
          }}
        >
            <Nav />
            {children}
            <Footer />
        </div>
    )
}