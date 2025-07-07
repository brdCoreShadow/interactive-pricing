import * as SC from "./AppStyled"
import Billing from "./components/PricingDashboard/Billing/Billing"
import PricingDashboard from "./components/PricingDashboard/PricingDashboard"

import Header from "./layout/Header/Header"
import SharedLayout from "./layout/SharedLayout/SharedLayout"
function App() {

  return (
    <SC.AppCon>
    <Header/>
    <SharedLayout>
      <PricingDashboard>
        <Billing/>
      </PricingDashboard>
    </SharedLayout>
    </SC.AppCon>
  )
}

export default App
