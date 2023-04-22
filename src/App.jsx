import Header from "./assets/Components/Header"
import Banner from "./assets/Components/Banner"
import VitrineButton from "./assets/Components/Buttons/VitrineButton"
import { useState } from "react"
import VitrineSection from "./assets/Components/VitrineSection";
import DisplayContainer from "./assets/Components/DisplayContainer";
import { useEffect } from "react";

function App() {

  const [scroll, setScroll] = useState(0);

  return (
    <>
      <Header />

      <DisplayContainer scroll={scroll}>

        <Banner>
          <VitrineButton 
            text={'vitrine →'} 
            onClick={() => setScroll(100)}
          />
        </Banner>

        <VitrineSection>
          <VitrineButton 
            text={'banner →'} 
            onClick={() => setScroll(-100)}
          />
        </VitrineSection>

      </DisplayContainer>
    </>
  )
}

export default App
