"use client";

import { useEffect, useMemo, useState } from "react";

import { createClient } from "../../../lib/supabase/client";

type ConfirmStatus =
  | "loading"
  | "success"
  | "error";

export default function MobileConfirmPage() {
  const supabase = useMemo(() => createClient(), []);

  const [status, setStatus] =
    useState<ConfirmStatus>("loading");

  const [message, setMessage] = useState(
    "Stiamo verificando il tuo indirizzo email..."
  );

  useEffect(() => {
    let active = true;

    async function confirmEmail() {
      const params = new URLSearchParams(
        window.location.search
      );

      const tokenHash = params.get("token_hash");
      const type = params.get("type");

      if (!tokenHash) {
        if (!active) return;

        setStatus("error");
        setMessage(
          "Il link di conferma non contiene un token valido."
        );
        return;
      }

      if (type !== "signup") {
        if (!active) return;

        setStatus("error");
        setMessage(
          "Questo link non è una conferma di registrazione valida."
        );
        return;
      }

      const { error } = await supabase.auth.verifyOtp({
        token_hash: tokenHash,
        type: "signup",
      });

      if (!active) return;

      if (error) {
        console.error(
          "Errore conferma account:",
          error
        );

        setStatus("error");
        setMessage(
          error.message ||
            "Non è stato possibile confermare l'account."
        );
        return;
      }

      setStatus("success");
      setMessage(
        "Il tuo indirizzo email è stato confermato correttamente. Ora puoi aprire ViewVault e accedere."
      );
    }

    confirmEmail();

    return () => {
      active = false;
    };
  }, [supabase]);

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
          boxShadow:
            "0 24px 70px rgba(0, 0, 0, 0.35)",
        }}
      >
        <div
          style={{
            fontSize: "30px",
            fontWeight: 800,
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
            width: "72px",
            height: "72px",
            margin: "0 auto 24px",
            borderRadius: "22px",
            backgroundColor:
              "rgba(124, 58, 237, 0.15)",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            fontSize: "34px",
          }}
        >
          {status === "loading"
            ? "⏳"
            : status === "success"
              ? "✓"
              : "!"}
        </div>

        <h1
          style={{
            margin: 0,
            fontSize: "27px",
            lineHeight: 1.3,
          }}
        >
          {status === "loading"
            ? "Conferma in corso..."
            : status === "success"
              ? "Account confermato"
              : "Conferma non riuscita"}
        </h1>

        <p
          style={{
            marginTop: "18px",
            marginBottom: 0,
            color: "#A1A1AA",
            fontSize: "16px",
            lineHeight: 1.65,
          }}
        >
          {message}
        </p>

        {status === "success" && (
          <a
            href="viewvaultmobile://"
            style={{
              display: "block",
              marginTop: "28px",
              padding: "15px 20px",
              borderRadius: "999px",
              backgroundColor: "#7C3AED",
              color: "#FFFFFF",
              textDecoration: "none",
              fontSize: "16px",
              fontWeight: 700,
            }}
          >
            Apri ViewVault
          </a>
        )}

        {status === "error" && (
          <a
            href="/"
            style={{
              display: "block",
              marginTop: "28px",
              padding: "15px 20px",
              borderRadius: "999px",
              backgroundColor: "#7C3AED",
              color: "#FFFFFF",
              textDecoration: "none",
              fontSize: "16px",
              fontWeight: 700,
            }}
          >
            Torna all'accesso
          </a>
        )}

        <p
          style={{
            marginTop: "28px",
            marginBottom: 0,
            color: "#71717A",
            fontSize: "12px",
          }}
        >
          © 2026 ViewVault
        </p>
      </section>
    </main>
  );
}