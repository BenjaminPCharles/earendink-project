import Link from "next/link"
import Image from 'next/image'
import logo from '../../../../public/images/instagramLogo.svg'
import { FlexBox } from "@/shared/components/flexbox/Flexbox"


export const Footer = () => {
    return (
        <FlexBox>
         <Link style={{  textDecoration: "none"}} href="https://www.instagram.com/earendink/" passHref>
            <p style={{ textAlign: "center", color: "#fff", fontSize: 34, paddingBottom: 6}}>INSTAGRAM</p>
         </Link>
        </FlexBox>
    )
}