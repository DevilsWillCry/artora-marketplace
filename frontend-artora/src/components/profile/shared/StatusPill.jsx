// src/components/profile/shared/StatusPill.jsx

const styles = {
  Delivered: `
    bg-green-100
    text-green-700
  `,

  "In transit": `
    bg-orange-100
    text-orange-700
  `,
};

export default function StatusPill({
  status,
}) {
  return (
    <span
      className={`
        rounded-full
        px-3
        py-1
        text-xs
        font-medium

        ${styles[status]}
      `}
    >
      {status}
    </span>
  );
}