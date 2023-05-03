import Banner from "../../Components/Banner/Banner"
import BotaoDaVitrine from "../../Components/Botoes/BotaoDaVitrine"

function Home() {
  
  return (
    <Banner>
      <BotaoDaVitrine to={'/vitrine'} />
    </Banner>
  )
}

export default Home;