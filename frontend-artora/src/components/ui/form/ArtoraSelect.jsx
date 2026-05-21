import { cn } from "@/lib/utils";
function ArtoraSelect({
  options = [],
  name,
  id,
  className = "",
  hint,
  value,
  onChange,
}) {
  return (
    <select
      name={name}
      id={id}
      className={cn(
        "h-11 w-full rounded-md border border-rule bg-paper px-4 text-[15px] text-ink",
        className,
      )}
      value={value}
      onChange={(e) => onChange?.(e.target.value)}
    >
      <option value="null">{hint}</option>
      {options.map((option, index) => (
        <option key={index} value={option.code || option}>
          {option.name || option} 
        </option>
      ))}
    </select>
  );
}

export default ArtoraSelect;
