import React from "react";
import Link from "next/link";
import { UserProvider } from "../context/UserContext";
import { useUser } from "../hooks/useUser";

type Props = { children: React.ReactNode };

function LayoutContent({ children }: Props) {
  const { userName } = useUser();

  return (
    <div
      style={{ display: "flex", flexDirection: "column", minHeight: "100vh" }}
    >
      <header
        style={{
          padding: "1rem",
          background: "#f5f5f5",
          borderBottom: "1px solid #eaeaea",
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
        }}
      >
        <h1 style={{ margin: 0 }}>Título de la página</h1>
        {userName && (
          <span style={{ fontSize: "0.9rem", color: "#666" }}>
            Usuario: {userName}
          </span>
        )}
      </header>

      <main style={{ flex: 1, padding: "1rem" }}>{children}</main>

      <footer
        style={{
          padding: "1rem",
          background: "#f5f5f5",
          borderTop: "1px solid #eaeaea",
          textAlign: "center",
        }}
      >
        <nav
          style={{
            display: "flex",
            gap: "0.5rem",
            justifyContent: "center",
            alignItems: "center",
            marginBottom: "0.5rem",
          }}
        >
          <Link href="/jca">jca</Link>
          <span>·</span>
          <Link href="/clones/clon1">clon1</Link>
          <span>·</span>
          <Link href="/clones/clon2">clon2</Link>
          <span>·</span>
          <Link href="/clones/clon3">clon3</Link>
        </nav>
        <div>
          <small>
            © {new Date().getFullYear()} — Todos los derechos reservados.
          </small>
        </div>
      </footer>
    </div>
  );
}

export default function Layout({ children }: Props) {
  return (
    <UserProvider>
      <LayoutContent>{children}</LayoutContent>
    </UserProvider>
  );
}
