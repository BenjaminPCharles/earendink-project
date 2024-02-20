import Link from "next/link"
import { useRouter } from "next/router"

export const Nav = () => {
    const router = useRouter()
    return (
            <Link style={{  textDecoration: "none", color: "#fff", textAlign: 'center', fontFamily: 'Bilbo-hand-Bold'}} href="/" passHref>
                <p style={{fontSize: 54, paddingTop:20 }}  onClick={() =>  router.push('/')}>eArendink</p>
            </Link>
    )
}