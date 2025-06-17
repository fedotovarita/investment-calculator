import UserInputGroup from "./components/UserInputGroup";
import Header from "./components/Header";
import Table from "./components/Table";
import { useState } from "react";
import { calculateInvestmentResults } from "./util/investment.js";

const DEFAULT_VALUES = {
  initialInvestment: 10000,
  annualInvestment: 1200,
  expectedReturn: 6,
  duration: 10,
};

function App() {
  const [insertedValues, setInsertedValues] = useState(DEFAULT_VALUES);
  const investmentResults = calculateInvestmentResults(insertedValues);

  function handleChange(event) {
    const { name, value } = event.target;

    const updatedValues = {
      ...insertedValues,
      [name]: Number(value),
    };

    setInsertedValues(updatedValues);
  }

  return (
    <>
      <Header />
      <UserInputGroup defaultValues={insertedValues} onEnter={handleChange} />
      <Table data={investmentResults} />
    </>
  );
}

export default App;
