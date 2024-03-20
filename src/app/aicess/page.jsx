import ConferenceHero from "@/components/hero/conference";
import HeroImg from "../../../public/images/aicess/aicess_hero.png"
import aicessImg from "../../../public/images/aicess/aicess_aicess.png"

function Aicess() {
    const title = "Africa International Conference on Clean Energy & Energy Storage"
    const description = "AICCEES 2024"
    return (
        <main>
           <ConferenceHero HeroImg={HeroImg} image={aicessImg} title={title} description={description} />
        </main>
    );
}

export default Aicess;