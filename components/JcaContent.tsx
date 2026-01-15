import React from "react"

export default function JcaContent() {
  return (
    <main
      style={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        minHeight: "60vh",
        gap: "1rem",
      }}
    >
      <h1>/jca</h1>
      <p>
        Esta es la página index servida por el router de <strong>pages</strong>.
      </p>
      <a href="/">Ir al inicio</a>
    </main>
  )
}
