import { useState } from "react"
import DisplayIcon from "../assets/icons_FEtask/Display.svg"
import DownIcon from "../assets/icons_FEtask/down.svg"
import Modal from "./Modal"
import GroupingOptions from "./GroupingOptions"
import SortingOptions from "./SortingOptions"

interface NavBarProps {
  grouping: string
  setGrouping: (grouping: "status" | "userId" | "priority") => void
  sorting: string
  setSorting: (sorting: "priority" | "title") => void
}

export default function NavBar({
  grouping,
  setGrouping,
  sorting,
  setSorting,
}: NavBarProps) {
  const [isModalOpen, setIsModalOpen] = useState(false)

  return (
    <nav
      style={{
        boxShadow: "2px 2px 4px rgba(0, 0, 0, 0.1)",
        padding: "1rem 2rem",
        backgroundColor: "white",
      }}
    >
      <div
        style={{
          display: "flex",
          gap: "0.5rem",
          border: "1px solid #E0E0E0",
          borderRadius: "4px",
          padding: "0.25rem 0.5rem",
          width: "fit-content",
        }}
        onClick={() => setIsModalOpen(true)}
      >
        <img src={DisplayIcon} alt="Display Icon" />
        Display
        <img src={DownIcon} alt="Down Icon" />
      </div>
      <Modal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        sx={{
          background: "rgb(250, 250, 250)",
          border: "1px solid #ccc",
        }}
      >
        <div
          style={{
            display: "flex",
            flexDirection: "row",
            justifyContent: "space-between",
          }}
        >
          Grouping
          <GroupingOptions grouping={grouping} setGrouping={setGrouping} />
        </div>
        <div
          style={{
            display: "flex",
            flexDirection: "row",
            justifyContent: "space-between",
            marginTop: "1rem",
          }}
        >
          Ordering
          <SortingOptions sorting={sorting} setSorting={setSorting} />
        </div>
      </Modal>
    </nav>
  )
}
