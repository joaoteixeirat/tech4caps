import { useState } from "react"
import Header from "../Components/Header"
import Banner from "../Components/Banner"
import VitrineButton from "../Components/Buttons/VitrineButton"
import VitrineSection from "../Components/VitrineSection";
import DisplayContainer from "../Components/DisplayContainer";
import { Outlet } from "react-router-dom";

function Home() {
  
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
          <Outlet />
        </VitrineSection>

      </DisplayContainer>
    </>
  )
}

export default Home;