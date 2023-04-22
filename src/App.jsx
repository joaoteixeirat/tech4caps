import Header from "./assets/Components/Header"
import Banner from "./assets/Components/Banner"
import VitrineButton from "./assets/Components/Buttons/VitrineButton"

function App() {

  return (
    <>
      <Header />
      <Banner>
        <VitrineButton text={'vitrine →'}/>
      </Banner>
    </>
  )
}

export default App
