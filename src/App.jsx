import UserContextWrapper from "./component/context/UserContextWrapper"
import Layout from "./component/layout/Layout"
import { BrowserRouter } from "react-router-dom"

function App() {

  return (
    <UserContextWrapper>
      <Layout />
    </UserContextWrapper>
  )
}

export default App
