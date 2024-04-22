import HeroSection from "./heroSection"
import Advantages from "./advantages"
import OurStory from "./story"
import OurServices from "./ourServices"
export default function HomePage(){
    return(
        <>
        <main>
            <HeroSection />
            <Advantages />
            <OurStory />
            <OurServices />
        </main>
        </>
    )
}