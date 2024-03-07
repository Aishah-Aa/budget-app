import { Button } from "./Button";

export function IncomeForm({
  handleChangeSource,
  handleSubmit,
  handleChangeAmount,
  amount,
  source,
}: any) {
  return (
    <form onSubmit={handleSubmit}>
      <div>
        <label htmlFor="resource">Income Source</label>
        <input
          type="text"
          name="resource"
          id="resource"
          value={source}
          placeholder="Salary, Allowence, etc.."
          onChange={handleChangeSource}
        />
      </div>

      <div>
        <label htmlFor="amount">Income amount</label>
        <input
          type="text"
          id="amount"
          name="amount"
          placeholder="Enter Amount here"
          value={amount}
          onChange={handleChangeAmount}
        />
      </div>

      <div>
        <label htmlFor="date">Date of income</label>
        <input type="date" id="date" name="date" title="date" />
      </div>
      <Button label="add income" />
    </form>
  );
}
