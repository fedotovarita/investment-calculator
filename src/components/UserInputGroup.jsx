import Input from "./Input";

export default function UserInputGroup({ value, onEnter, defaultValues }) {
  return (
    <section id="user-input">
      <div className="input-group">
        <Input
          defaultValues={defaultValues}
          label="initial investment"
          name="initialInvestment"
          value={value}
          onEnter={onEnter}
        />
        <Input
          defaultValues={defaultValues}
          label="annual investment"
          name="annualInvestment"
          value={value}
          onEnter={onEnter}
        />
      </div>
      <div className="input-group">
        <Input
          defaultValues={defaultValues}
          label="expected return"
          name="expectedReturn"
          value={value}
          onEnter={onEnter}
        />
        <Input
          defaultValues={defaultValues}
          label="duration"
          name="duration"
          value={value}
          onEnter={onEnter}
        />
      </div>
    </section>
  );
}
