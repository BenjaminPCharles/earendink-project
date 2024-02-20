import { Card } from "./components/Card"
import cardFlash from "../../../public/images/cardBackgroundFlash.jpg"
import cardIllu from "../../../public/images/cardBackgroundIllu.jpg"
import { useRouter } from "next/router"
import { FlexBox } from "@/shared/components/flexbox/Flexbox"

export const HomeScreen = ()=>  {
    const router = useRouter()
    return (
        <FlexBox styleProps={{color: "#fff"}} around wrap view>
             <Card onClick={() =>  router.push('/illustration')} imgSrc={cardIllu.src} label="Illustration"/>
             <Card onClick={() =>  router.push('/flash')} imgSrc={cardFlash.src} label="Flash"/>
        </FlexBox>
    )
}