import React, { useEffect } from "react";
import { useUser } from "../hooks/useUser";

export default function JcaContentClone1() {
  const { setUserName } = useUser();

  useEffect(() => {
    setUserName("JCA");
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
      <h1>/jca — Clon 1</h1>
      <p>Este es clon 1.</p>
      <a href="/jca">Volver a /jca</a>
    </main>
  );
}
