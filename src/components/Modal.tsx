import React, { useEffect, useRef } from "react"
import "./Modal.css" // Add your styles here

interface ModalProps {
  isOpen: boolean
  onClose: () => void
  children: React.ReactNode
  sx: React.CSSProperties
}

const Modal: React.FC<ModalProps> = ({ isOpen, onClose, children, sx }) => {
  const modalRef = useRef<HTMLDivElement>(null)

  // Close modal on clicking outside
  const handleOutsideClick = (event: MouseEvent) => {
    if (modalRef.current && !modalRef.current.contains(event.target as Node)) {
      onClose()
    }
  }

  // Add event listener for outside clicks when modal is open
  useEffect(() => {
    if (isOpen) {
      document.addEventListener("mousedown", handleOutsideClick)
    } else {
      document.removeEventListener("mousedown", handleOutsideClick)
    }

    return () => {
      document.removeEventListener("mousedown", handleOutsideClick)
    }
  }, [isOpen])

  if (!isOpen) return null

  return (
    <div className="modal-content" ref={modalRef} style={sx}>
      {children}
    </div>
  )
}

export default Modal
