// src/components/KanbanColumn.tsx
import React from "react"
import TicketCard from "./TicketCard"
import { Status, Ticket, User } from "../utils/types"
import { getUserById } from "../utils/helpers"
import AddIcon from "../assets/icons_FEtask/add.svg"
import MenuIcon from "../assets/icons_FEtask/3 dot menu.svg"

import NoPriority from "../assets/icons_FEtask/No-priority.svg"
import LowPriority from "../assets/icons_FEtask/Img - Low Priority.svg"
import MediumPriority from "../assets/icons_FEtask/Img - Medium Priority.svg"
import HighPriority from "../assets/icons_FEtask/Img - High Priority.svg"
import UrgentGrey from "../assets/icons_FEtask/SVG - Urgent Priority grey.svg"
import UrgentColored from "../assets/icons_FEtask/SVG - Urgent Priority colour.svg"
import ToDo from "../assets/icons_FEtask/To-do.svg"
import InProgress from "../assets/icons_FEtask/in-progress.svg"
import Done from "../assets/icons_FEtask/Done.svg"
import Backlog from "../assets/icons_FEtask/Backlog.svg"
import Cancelled from "../assets/icons_FEtask/Cancelled.svg"
import Avatar from "./Avatar"

interface Props {
  title: string
  tickets: Ticket[]
  users: User[]
  grouping: "status" | "userId" | "priority"
}
const priorityIcons = [
  NoPriority,
  LowPriority,
  MediumPriority,
  HighPriority,
  UrgentColored,
]
const priorityText = [
  "No Priority",
  "Low Priority",
  "Medium Priority",
  "High Priority",
  "Urgent",
]
const progressIcons = [ToDo, InProgress, Done, Backlog, Cancelled]
const progressMap = {
  Todo: 0,
  "In progress": 1,
  Done: 2,
  Backlog: 3,
  Cancelled: 4,
}

const KanbanColumn: React.FC<Props> = ({ title, tickets, users, grouping }) => {
  return (
    <div>
      <div
        style={{ display: "flex", padding: "1.5rem 0", alignItems: "center" }}
      >
        <div style={{ display: "flex", alignItems: "center" }}>
          {grouping === "priority" ? (
            <img src={priorityIcons[Number(title)]} alt={title} />
          ) : grouping === "status" ? (
            <img
              src={progressIcons[progressMap[title as Status]]}
              alt={title}
            />
          ) : grouping === "userId" ? (
            <Avatar name={getUserById(users, title)?.name || "User"} />
          ) : null}
          <span
            style={{ fontSize: "1.25rem", fontWeight: 500, marginLeft: "1rem" }}
          >
            {grouping === "priority" ? priorityText[Number(title)] : title}
          </span>
          <span
            style={{
              fontSize: "1rem",
              fontWeight: 500,
              color: "rgba(0, 0, 0, 0.5)",
              marginLeft: "1rem",
            }}
          >
            {tickets.length}
          </span>
        </div>
        <img src={AddIcon} alt="Add Icon" style={{ marginLeft: "auto" }} />
        <img src={MenuIcon} alt="Menu Icon" style={{ marginLeft: "1rem" }} />
      </div>
      <div style={{ display: "flex", flexDirection: "column", gap: "15px" }}>
        {tickets.map((ticket) => (
          <TicketCard
            key={ticket.id}
            ticket={ticket}
            user={getUserById(users, ticket.userId)}
          />
        ))}
      </div>
    </div>
  )
}

export default KanbanColumn
