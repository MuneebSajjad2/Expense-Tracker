import './App.css';
import Header from "./Components/Header/Header";
import Balance from "./Components/Balance/Balance";
import IncomeExp from "./Components/Income&Exp/Income&Exp";
import TransactionHistory from "./Components/TransactionHistory/TransactionHistory";
import NewTransaction from "./Components/NewTransaction/NewTransaction";
import {GlobalProvider} from "./Context/GlobalState"
function App() {
  return (
    <div className="main-container">
    <div className="container">
      <GlobalProvider> 
        <Header />
        <Balance/>
        <IncomeExp/>
        <TransactionHistory />
        <NewTransaction />
    </GlobalProvider>
    </div>
    </div>
  );
}

export default App;
