import Banner from "../Components/Banner"
import VitrineButton from "../Components/Buttons/VitrineButton"

function Home() {
  
  return (
    
    <Banner>
      <VitrineButton to={'/vitrine'} />
    </Banner>
  )
}

export default Home;