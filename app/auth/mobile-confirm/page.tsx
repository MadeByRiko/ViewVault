"use client";

import { useEffect, useMemo, useState } from "react";

export default function MobileConfirmPage() {
  const [currentUrl, setCurrentUrl] = useState("");
  const [attempted, setAttempted] = useState(false);

  useEffect(() => {
    setCurrentUrl(window.location.href);
  }, []);

  const appUrl = useMemo(() => {
    if (!currentUrl) {
      return "";
    }

    try {
      const url = new URL(currentUrl);

      return `viewvaultmobile://auth/callback${url.search}${url.hash}`;
    } catch {
      return "";
    }
  }, [currentUrl]);

  useEffect(() => {
    if (!appUrl) {
      return;
    }

    const timer = window.setTimeout(() => {
      setAttempted(true);
      window.location.href = appUrl;
    }, 700);

    return () => {
      window.clearTimeout(timer);
    };
  }, [appUrl]);

  function openViewVault() {
    if (!appUrl) {
      return;
    }

    setAttempted(true);
    window.location.href = appUrl;
  }

  return (
    <main
      style={{
        minHeight: "100vh",
        backgroundColor: "#0F0F0F",
        color: "#F8FAFC",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        padding: "24px",
        fontFamily:
          "Arial, Helvetica, sans-serif",
      }}
    >
      <section
        style={{
          width: "100%",
          maxWidth: "520px",
          backgroundColor: "#18181B",
          border: "1px solid #27272A",
          borderRadius: "24px",
          padding: "32px",
          textAlign: "center",
          boxShadow:
            "0 24px 70px rgba(0, 0, 0, 0.35)",
        }}
      >
        <div
          style={{
            fontSize: "30px",
            fontWeight: 800,
            color: "#FFFFFF",
          }}
        >
          View
          <span style={{ color: "#8B5CF6" }}>
            Vault
          </span>
        </div>

        <p
          style={{
            marginTop: "8px",
            marginBottom: "32px",
            color: "#A1A1AA",
            fontSize: "14px",
          }}
        >
          Every Story. Every Screen. One Vault.
        </p>

        <div
          style={{
            width: "68px",
            height: "68px",
            margin: "0 auto 24px",
            borderRadius: "22px",
            backgroundColor:
              "rgba(124, 58, 237, 0.15)",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            fontSize: "32px",
          }}
        >
          🔐
        </div>

        <h1
          style={{
            margin: 0,
            fontSize: "25px",
            lineHeight: 1.3,
            color: "#FFFFFF",
          }}
        >
          Conferma account ViewVault
        </h1>

        <p
          style={{
            marginTop: "16px",
            marginBottom: 0,
            color: "#D4D4D8",
            fontSize: "16px",
            lineHeight: 1.65,
          }}
        >
          La conferma è stata ricevuta.
          Stiamo aprendo ViewVault per
          completare l&apos;accesso.
        </p>

        {attempted && (
          <p
            style={{
              marginTop: "20px",
              marginBottom: 0,
              color: "#A1A1AA",
              fontSize: "14px",
              lineHeight: 1.6,
            }}
          >
            Se l&apos;app non si è aperta
            automaticamente, usa il pulsante
            qui sotto.
          </p>
        )}

        <button
          type="button"
          onClick={openViewVault}
          disabled={!appUrl}
          style={{
            width: "100%",
            marginTop: "28px",
            padding: "15px 20px",
            border: "none",
            borderRadius: "999px",
            backgroundColor: appUrl
              ? "#7C3AED"
              : "#3F3F46",
            color: "#FFFFFF",
            fontSize: "16px",
            fontWeight: 700,
            cursor: appUrl
              ? "pointer"
              : "default",
          }}
        >
          Apri ViewVault
        </button>

        <p
          style={{
            marginTop: "28px",
            marginBottom: 0,
            color: "#71717A",
            fontSize: "12px",
            lineHeight: 1.6,
          }}
        >
          © 2026 ViewVault
        </p>
      </section>
    </main>
  );
}