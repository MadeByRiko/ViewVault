"use client";

import { useEffect, useMemo, useState } from "react";

type DiagnosticData = {
  tokenHash: boolean;
  type: string | null;
  error: string | null;
  errorDescription: string | null;
  hasQuery: boolean;
  hasHash: boolean;
};

export default function MobileConfirmPage() {
  const [currentUrl, setCurrentUrl] = useState("");

  useEffect(() => {
    setCurrentUrl(window.location.href);
  }, []);

  const diagnostic = useMemo<DiagnosticData>(() => {
    if (!currentUrl) {
      return {
        tokenHash: false,
        type: null,
        error: null,
        errorDescription: null,
        hasQuery: false,
        hasHash: false,
      };
    }

    try {
      const url = new URL(currentUrl);

      const queryParams = new URLSearchParams(url.search);
      const hashParams = new URLSearchParams(
        url.hash.startsWith("#")
          ? url.hash.slice(1)
          : url.hash
      );

      const getParam = (name: string) =>
        hashParams.get(name) ?? queryParams.get(name);

      return {
        tokenHash: Boolean(getParam("token_hash")),
        type: getParam("type"),
        error: getParam("error"),
        errorDescription: getParam("error_description"),
        hasQuery: Boolean(url.search),
        hasHash: Boolean(url.hash),
      };
    } catch {
      return {
        tokenHash: false,
        type: null,
        error: "invalid_url",
        errorDescription:
          "Non è stato possibile analizzare l'URL ricevuto.",
        hasQuery: false,
        hasHash: false,
      };
    }
  }, [currentUrl]);

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

  function openViewVault() {
    if (!appUrl) {
      return;
    }

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
        fontFamily: "Arial, Helvetica, sans-serif",
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
          boxShadow: "0 24px 70px rgba(0, 0, 0, 0.35)",
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
            backgroundColor: "rgba(124, 58, 237, 0.15)",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            fontSize: "32px",
          }}
        >
          🔬
        </div>

        <h1
          style={{
            margin: 0,
            fontSize: "25px",
            lineHeight: 1.3,
            color: "#FFFFFF",
          }}
        >
          Diagnostica conferma ViewVault
        </h1>

        <p
          style={{
            marginTop: "16px",
            marginBottom: "24px",
            color: "#D4D4D8",
            fontSize: "15px",
            lineHeight: 1.6,
          }}
        >
          Controlliamo quali dati sono arrivati
          dal link di conferma prima di aprire
          l&apos;app.
        </p>

        <div
          style={{
            padding: "18px",
            borderRadius: "16px",
            backgroundColor: "#0F0F0F",
            border: "1px solid #3F3F46",
            textAlign: "left",
            fontFamily: "monospace",
            fontSize: "14px",
            lineHeight: 1.8,
          }}
        >
          <div>
            token_hash:{" "}
            <strong>
              {diagnostic.tokenHash ? "SI ✅" : "NO ❌"}
            </strong>
          </div>

          <div>
            type:{" "}
            <strong>
              {diagnostic.type ?? "NO"}
            </strong>
          </div>

          <div>
            error:{" "}
            <strong>
              {diagnostic.error ?? "NO"}
            </strong>
          </div>

          <div>
            error_description:{" "}
            <strong>
              {diagnostic.errorDescription ?? "NO"}
            </strong>
          </div>

          <div>
            query params:{" "}
            <strong>
              {diagnostic.hasQuery ? "SI" : "NO"}
            </strong>
          </div>

          <div>
            hash params:{" "}
            <strong>
              {diagnostic.hasHash ? "SI" : "NO"}
            </strong>
          </div>
        </div>

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
            marginTop: "24px",
            marginBottom: 0,
            color: "#71717A",
            fontSize: "12px",
            lineHeight: 1.6,
          }}
        >
          Modalità diagnostica temporanea
        </p>
      </section>
    </main>
  );
}