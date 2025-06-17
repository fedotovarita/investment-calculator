import { formatter } from "../util/investment.js";

export default function Table({ data }) {
  return (
    <table id="result">
      <thead>
        <tr>
          <th>Year</th>
          <th>Investment Value</th>
          <th>Interest (Year)</th>
          <th>Total Interest</th>
          <th>Invested Capital</th>
        </tr>
      </thead>
      <tbody>
        {data.map((dataPerYear, index) => {
          return (
            <tr key={index}>
              <td>{dataPerYear.year}</td>
              <td>{formatter.format(dataPerYear.valueEndOfYear)}</td>
              <td>{formatter.format(dataPerYear.interest)}</td>
              <td>{formatter.format(dataPerYear.totalInterest)}</td>
              <td>{formatter.format(dataPerYear.investedCapital)}</td>
            </tr>
          );
        })}
      </tbody>
    </table>
  );
}
