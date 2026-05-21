// src/components/profile/shared/StatusPill.jsx

const styles = {
  delivered: `
    bg-green-100
    text-green-700
  `,

  "In transit": `
    bg-orange-100
    text-orange-700
  `,
  cancelled: `
    bg-red-100
    text-red-700
  `,

  pending: `
    bg-yellow-100
    text-yellow-700
  `,  

  active: `
    bg-blue-100
    text-blue-700
  `,

  inactive: `
    bg-gray-100
    text-gray-700
  `,

  sold: `
    bg-purple-100
    text-purple-700
  `,

  draft: `
    bg-gray-100
    text-gray-700
  `  
};

export default function StatusPill({
  status,
  nameStatus
}) {
  return (
    <span
      className={`
        rounded-full
        px-3
        py-1
        text-xs
        font-medium
        uppercase
        tracking-wider
        ${styles[status]}
      `}
    >
      {nameStatus || status}
    </span>
  );
}