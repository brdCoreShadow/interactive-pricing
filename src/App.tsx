import * as SC from "./AppStyled"
import Benefits from "./components/PricingDashboard/Benefits/Benefits"
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
        <Benefits/>
      </PricingDashboard>
    </SharedLayout>
    </SC.AppCon>
  )
}

export default App
