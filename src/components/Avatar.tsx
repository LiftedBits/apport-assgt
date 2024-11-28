import React from "react"

export default function Avatar({ name }: { name: string }) {
  return (
    <span
      style={{
        width: "20px",
        height: "20px",
        borderRadius: "50%",
        backgroundColor: "gray",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      {name[0].toUpperCase()}
    </span>
  )
}
