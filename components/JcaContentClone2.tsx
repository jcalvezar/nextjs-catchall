import React, { useEffect } from "react";
import { useUser } from "../hooks/useUser";

export default function JcaContentClone2() {
  const { setUserName } = useUser();

  useEffect(() => {
    setUserName("Ferta");
  }, []);
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
      <h1>/jca — Clon 2</h1>
      <p>Este es clon 2.</p>
      <a href="/jca">Volver a /jca</a>
    </main>
  );
}
