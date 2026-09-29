import Link from "next/link";
import Navbar from "../../../components/Navbar";

type InvitePageProps = {
  params: Promise<{ code: string }>;
};

function normalizeReferralCode(value: string) {
  const normalized = decodeURIComponent(value).trim().toUpperCase();
  return /^[A-Z0-9]{8}$/.test(normalized) ? normalized : null;
}

export default async function InvitePage({ params }: InvitePageProps) {
  const { code } = await params;
  const referralCode = normalizeReferralCode(code);

  return (
    <main className="min-h-screen bg-[#0F0F0F] text-white">
      <Navbar />

      <section className="mx-auto flex min-h-screen max-w-3xl items-center px-5 py-32">
        <div className="w-full rounded-[32px] border border-[#7C3AED]/50 bg-[#18181B] p-7 shadow-[0_0_60px_rgba(124,58,237,0.15)] sm:p-10">
          <p className="text-sm font-bold uppercase tracking-[0.28em] text-[#A78BFA]">
            ViewVault Referral
          </p>

          {referralCode ? (
            <>
              <div className="mt-6 text-5xl" aria-hidden="true">🎁</div>
              <h1 className="mt-5 text-4xl font-bold sm:text-5xl">
                Sei stato invitato su ViewVault
              </h1>
              <p className="mt-5 text-lg leading-8 text-zinc-300">
                Entra nella community e porta con te il tuo codice invito. Lo useremo
                per attribuire correttamente la registrazione al tuo amico.
              </p>

              <div className="mt-8 rounded-3xl border border-zinc-700 bg-[#101012] p-6 text-center">
                <p className="text-xs font-bold uppercase tracking-[0.22em] text-zinc-500">
                  Codice invito
                </p>
                <p className="mt-3 font-mono text-3xl font-bold tracking-[0.16em] text-[#B9A0FF]">
                  {referralCode}
                </p>
              </div>

              <div className="mt-8 grid gap-4 sm:grid-cols-2">
                <Link
                  href={`/registrazione?referral=${encodeURIComponent(referralCode)}`}
                  className="inline-flex items-center justify-center rounded-full bg-[#7C3AED] px-6 py-4 text-center font-bold text-white transition hover:bg-[#6D28D9]"
                >
                  Crea account
                </Link>
                <Link
                  href="/"
                  className="inline-flex items-center justify-center rounded-full border border-zinc-700 px-6 py-4 text-center font-bold text-zinc-200 transition hover:border-[#7C3AED] hover:text-white"
                >
                  Scopri ViewVault
                </Link>
              </div>

              <p className="mt-7 text-center text-sm leading-6 text-zinc-500">
                Il referral verrà conteggiato solo dopo una registrazione valida.
              </p>
            </>
          ) : (
            <>
              <h1 className="mt-6 text-4xl font-bold">Codice invito non valido</h1>
              <p className="mt-4 leading-7 text-zinc-400">
                Il link che hai aperto non contiene un codice ViewVault valido.
              </p>
              <Link
                href="/"
                className="mt-8 inline-flex rounded-full bg-[#7C3AED] px-6 py-3 font-bold text-white"
              >
                Vai a ViewVault
              </Link>
            </>
          )}
        </div>
      </section>
    </main>
  );
}
