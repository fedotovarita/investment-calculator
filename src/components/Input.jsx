export default function Input({
  type = "number",
  label,
  onEnter,
  name,
  defaultValues,
}) {
  return (
    <div>
      <label htmlFor={label}>{label}</label>
      <input
        min="1"
        type={type}
        name={name}
        required
        onChange={onEnter}
        value={defaultValues[name] || ""}
      />
    </div>
  );
}
