// src/components/SortingOptions.tsx
import React from "react"

interface Props {
  sorting: string
  setSorting: (sorting: "priority" | "title") => void
}

const SortingOptions: React.FC<Props> = ({ sorting, setSorting }) => {
  return (
    <select
      value={sorting}
      onChange={(e) => setSorting(e.target.value as any)}
      style={{
        padding: "0.25rem",
        border: "1px solid rgba(0, 0, 0, 0.3)",
        borderRadius: "4px",
        width: "7.5rem",
      }}
    >
      <option value="priority">Priority</option>
      <option value="title">Title</option>
    </select>
  )
}

export default SortingOptions
