// src/components/GroupingOptions.tsx
import React from "react"

interface Props {
  grouping: string
  setGrouping: (grouping: "status" | "userId" | "priority") => void
}

const GroupingOptions: React.FC<Props> = ({ grouping, setGrouping }) => {
  return (
    <select
      value={grouping}
      onChange={(e) => setGrouping(e.target.value as any)}
      style={{
        padding: "0.25rem",
        border: "1px solid rgba(0, 0, 0, 0.3)",
        borderRadius: "4px",
        width: "7.5rem",
      }}
    >
      <option value="status">Status</option>
      <option value="userId">User</option>
      <option value="priority">Priority</option>
    </select>
  )
}

export default GroupingOptions
