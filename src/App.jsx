import UserContextWrapper from "./component/context/UserContextWrapper"
import Layout from "./component/layout/Layout"


function App() {
 

  return (
    <UserContextWrapper>
      <Layout />
    </UserContextWrapper>
  )
}

export default App
