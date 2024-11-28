// src/components/TicketCard.tsx
import React from "react"
import { Ticket, User } from "../utils/types"
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
  ticket: Ticket
  user: User | undefined
}

const TicketCard: React.FC<Props> = ({ ticket, user }) => {
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
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        width: "300px",
        border: "1px solid #E0E0E0",
        borderRadius: "10px",
        boxShadow: "2px 2px 4px rgba(0, 0, 0, 0.1)",
        height: "125px",
        padding: "1rem",
      }}
    >
      <div
        style={{
          display: "flex",
          flexDirection: "row",
          justifyContent: "space-between",
          alignItems: "center",
          marginBottom: "0.5rem",
        }}
      >
        <span style={{ opacity: 0.5 }}>{ticket.id}</span>
        {/* user image */}
        <Avatar name={user?.name || "User"} />
      </div>
      <div
        style={{
          display: "flex",
          gap: "0.5rem",
          alignItems: "center",
          marginBottom: "1rem",
        }}
      >
        <img src={progressIcons[progressMap[ticket.status]]} alt={"Progress"} />
        <span
          style={{
            padding: "0.25rem 0.5rem",
            fontSize: "1rem",
            fontWeight: 500,
            display: "-webkit-box",
            WebkitLineClamp: 2,
            WebkitBoxOrient: "vertical",
            overflow: "hidden",
            textOverflow: "ellipsis",
          }}
        >
          {ticket.title}
        </span>
      </div>
      <div style={{ display: "flex", gap: "0.5rem", alignItems: "center" }}>
        <div
          style={{
            border: "1px solid rgba(0, 0, 0, 0.2)",
            borderRadius: "4px",
            padding: "0.25rem",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <img
            src={priorityIcons[ticket.priority]}
            alt={priorityText[ticket.priority]}
            style={{ width: "20px", height: "20px" }}
          />
        </div>
        <div
          style={{
            display: "flex",
            flexDirection: "row",
            flexWrap: "wrap",
            gap: "0.5rem",
          }}
        >
          {ticket.tag.map((tag) => (
            <span
              key={tag}
              style={{
                padding: "0.25rem 0.5rem",
                border: "1px solid rgba(0, 0, 0, 0.2)",
                borderRadius: "4px",
              }}
            >
              {tag}
            </span>
          ))}
        </div>
      </div>
    </div>
  )
}

export default TicketCard
