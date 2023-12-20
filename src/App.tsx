
import styled from 'styled-components'

import SignIn from './features/SignIn'
import SuccessMessage from './features/SuccessMessage'
import { Container } from './components/styledComponents'
import { useState } from 'react'

function App() {
  const [submited, setSubmited] = useState(false)

  return (<div>

    <Container>
      {/*  Sign-up form start  */}
      {!submited ?
        <SignIn setSubmited={setSubmited} />
        :
        <SuccessMessage />
      }

    </Container>
    <div className="attribution">
      Challenge by <a href="https://www.frontendmentor.io?ref=challenge" target="_blank">Frontend Mentor</a>.
      Coded by <a href="#">Mekki Fayssal</a>.
    </div>
  </div>
  )
}

export default App
