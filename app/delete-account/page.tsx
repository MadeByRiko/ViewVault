import Navbar from "../../components/Navbar";

export default function DeleteAccountPage() {
  return (
    <main className="min-h-screen bg-[#121212] text-[#F8FAFC]">
      <Navbar />

      <section className="mx-auto max-w-4xl px-6 pb-24 pt-32">
        <div className="mb-12">
          <p className="text-sm font-bold uppercase tracking-[0.25em] text-[#8B5CF6]">
            Gestione account
          </p>

          <h1 className="mt-3 text-4xl font-bold md:text-5xl">
            Eliminazione account ViewVault
          </h1>

          <p className="mt-5 text-lg leading-8 text-zinc-400">
            In questa pagina puoi trovare le informazioni necessarie
            per richiedere l&apos;eliminazione del tuo account ViewVault
            e dei dati personali ad esso associati.
          </p>

          <p className="mt-3 text-sm text-zinc-500">
            Ultimo aggiornamento: 17 settembre 2026
          </p>
        </div>

        <div className="space-y-12 leading-8 text-zinc-300">
          <section>
            <h2 className="text-2xl font-bold text-white">
              1. Come richiedere l&apos;eliminazione
            </h2>

            <p className="mt-4">
              Per richiedere l&apos;eliminazione del tuo account
              ViewVault e dei dati ad esso associati, invia una
              richiesta all&apos;indirizzo:
            </p>

            <div className="mt-5 rounded-2xl border border-[#7C3AED]/30 bg-[#7C3AED]/10 p-5">
              <p className="font-bold text-white">
                ViewVault
              </p>

              <p className="mt-2">
                Email:{" "}
                <a
                  href="mailto:info@viewvault.it?subject=Richiesta%20eliminazione%20account%20ViewVault"
                  className="font-semibold text-[#A78BFA] hover:text-white"
                >
                  info@viewvault.it
                </a>
              </p>
            </div>

            <p className="mt-5">
              Nella richiesta indica l&apos;indirizzo email associato
              all&apos;account ViewVault che desideri eliminare.
              Potremmo richiedere una verifica ragionevole
              dell&apos;identità o della titolarità dell&apos;account
              prima di procedere, esclusivamente per evitare
              cancellazioni non autorizzate.
            </p>

            <p className="mt-4">
              Non inviare la password del tuo account o altre
              credenziali di accesso.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-white">
              2. Dati interessati dalla cancellazione
            </h2>

            <p className="mt-4">
              Una volta verificata e accolta la richiesta,
              l&apos;eliminazione dell&apos;account riguarda i dati
              personali e i dati associati all&apos;utilizzo di
              ViewVault, ove applicabile, tra cui:
            </p>

            <ul className="mt-4 list-disc space-y-3 pl-6">
              <li>
                account e informazioni necessarie
                all&apos;autenticazione;
              </li>

              <li>
                dati del profilo, come username, nome visualizzato,
                bio, nazione, avatar e immagine di copertina;
              </li>

              <li>
                film e serie TV salvati nel Vault personale;
              </li>

              <li>
                watchlist, preferiti, stati di visione e progressi
                relativi a serie ed episodi;
              </li>

              <li>
                voti, recensioni e altre attività associate
                all&apos;account;
              </li>

              <li>
                relazioni sociali, come richieste di amicizia e
                amicizie;
              </li>

              <li>
                contenuti e informazioni associati alle funzionalità
                social e Community, nella misura in cui risultino
                collegati all&apos;account e possano essere eliminati
                secondo il funzionamento del servizio.
              </li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-white">
              3. Dati che potrebbero essere conservati
            </h2>

            <p className="mt-4">
              Alcune informazioni potrebbero essere conservate per
              il periodo strettamente necessario quando ciò sia
              richiesto dalla legge, necessario per adempiere a
              obblighi legali o per la tutela da abusi, frodi,
              contestazioni o richieste delle autorità competenti.
            </p>

            <p className="mt-4">
              Eventuali dati conservati per tali finalità non
              verranno utilizzati per continuare a fornire il
              normale servizio associato all&apos;account eliminato
              e saranno conservati solo per il periodo necessario
              alla finalità applicabile.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-white">
              4. Effetti dell&apos;eliminazione
            </h2>

            <p className="mt-4">
              L&apos;eliminazione dell&apos;account è definitiva.
              Dopo il completamento della procedura non sarà più
              possibile accedere all&apos;account né recuperare i
              dati eliminati attraverso ViewVault.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-white">
              5. Informazioni sulla privacy
            </h2>

            <p className="mt-4">
              Per maggiori informazioni sul trattamento dei dati
              personali puoi consultare la{" "}
              <a
                href="/privacy"
                className="font-semibold text-[#8B5CF6] transition hover:text-[#A78BFA]"
              >
                Privacy Policy di ViewVault
              </a>
              .
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-white">
              6. Contatti
            </h2>

            <p className="mt-4">
              Per domande relative alla cancellazione
              dell&apos;account o dei dati personali:
            </p>

            <div className="mt-5 rounded-2xl border border-[#7C3AED]/30 bg-[#7C3AED]/10 p-5">
              <p className="font-bold text-white">
                ViewVault
              </p>

              <p className="mt-2">
                Titolare: Emanuele Starnoni
              </p>

              <p className="mt-2">
                Email:{" "}
                <a
                  href="mailto:info@viewvault.it"
                  className="font-semibold text-[#A78BFA] hover:text-white"
                >
                  info@viewvault.it
                </a>
              </p>
            </div>
          </section>
        </div>
      </section>
    </main>
  );
}