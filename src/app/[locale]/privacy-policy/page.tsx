import React from 'react';
import { Link } from '@/i18n/routing';

interface PrivacyPolicyProps {
  params: Promise<{ locale: string }>;
}

export default async function PrivacyPolicy({ params }: PrivacyPolicyProps) {
  const { locale } = await params;

  return (
    <div className="bg-[#030712] min-h-screen pt-32 pb-20">
      <div className="container mx-auto px-6 md:px-16 lg:px-24 max-w-4xl">
        {/* BACK BUTTON */}
        <Link 
          href="/" 
          className="inline-flex items-center gap-2 text-white/40 hover:text-white transition-colors mb-12 group font-mono text-xs uppercase tracking-widest"
        >
          <span className="group-hover:-translate-x-1 transition-transform">←</span>
          Back to the website
        </Link>

        <h1 className="text-4xl md:text-6xl font-black text-white uppercase tracking-tighter mb-12">
          Privacy Policy
        </h1>
        
        <div className="space-y-8 text-white/70 leading-relaxed font-mono text-sm md:text-base">
          <p className="text-white font-bold">
            Il Titolare del trattamento dei dati personali degli utenti del Sito è Aventus Global S.R.L (di seguito, anche il “Titolare”)
          </p>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 border-l-2 border-accent pl-6 py-2 my-8">
            <div>
              <p><span className="text-white/40 uppercase text-[10px] block mb-1">CUI</span> 47539878</p>
              <p><span className="text-white/40 uppercase text-[10px] block mb-1 mt-4">VIES</span> RO47690977</p>
              <p><span className="text-white/40 uppercase text-[10px] block mb-1 mt-4">Reg. Com.</span> J40/1609/31.01.2023</p>
            </div>
            <div>
              <p><span className="text-white/40 uppercase text-[10px] block mb-1">Indirizzo</span> Bucureşti Sectorul 3, Strada ROTUNDĂ, Nr. 4, Bloc Y1A, Scara 1, Etaj 8, Ap. 43</p>
              <p><span className="text-white/40 uppercase text-[10px] block mb-1 mt-4">Email</span> matteo.arnaboldi12@gmail.com</p>
            </div>
          </div>

          <section className="space-y-4">
            <h2 className="text-xl text-white font-bold uppercase tracking-wider">A – Tipologia di dati trattati</h2>
            
            <div className="space-y-4">
              <h3 className="text-lg text-white/90">1. Dati identificativi</h3>
              <p>
                In accordo con la nuova normativa europea introdotta dal Regolamento UE 679/2016 e con la normativa italiana (D.lgs. n. 196/2003), la consultazione del Sito può comportare il trattamento di dati idonei a identificare direttamente o indirettamente una persona fisica quali: nome, cognome, indirizzo e-mail, numero di telefono, indirizzo IP.
              </p>
              <p>
                Il Sito non richiede all’Interessato di fornire dati c.d. “particolari”, ovvero, secondo quanto previsto dal GDPR (art. 9), i dati personali che rivelino l’origine razziale o etnica, le opinioni politiche, le convinzioni religiose o filosofiche, o l’appartenenza sindacale, nonché dati genetici, dati biometrici intesi a identificare in modo univoco una persona fisica, dati relativi alla salute o alla vita sessuale o all’orientamento sessuale della persona. Nel caso in cui la prestazione richiesta imponesse il trattamento di tali dati, l’Interessato riceverà preventivamente apposita informativa e gli sarà richiesto di prestare consenso esplicito.
              </p>
            </div>

            <div className="space-y-4 pt-4">
              <h3 className="text-lg text-white/90">II. Dati di navigazione</h3>
              <p>
                I dati di navigazione sono dati acquisiti automaticamente dai sistemi e dai programmi preposti al funzionamento del Sito e sono necessari per la fruizione dei servizi web (es. indirizzi IP, browser utilizzato, nome del sito tramite il quale è stato effettuato l’accesso).
              </p>
              <p>
                Tali dati vengono acquisiti anche in mancanza di registrazione al Sito o richiesta di informazioni.
              </p>
              <p>
                I dati di navigazione vengono utilizzati esclusivamente in maniera aggregata per elaborare statistiche anonime sulla consultazione del Sito e per controllarne il corretto funzionamento e non consentono di identificare gli utenti interessati, venendo, inoltre, cancellati subito dopo l’elaborazione in forma anonima.
              </p>
              <p>
                Possono, tuttavia, essere utilizzate per l’accertamento di responsabilità in caso di reati informatici compiuti ai danni del sito web.
              </p>
            </div>

            <div className="space-y-4 pt-4">
              <h3 className="text-lg text-white/90">III. Dati forniti volontariamente dall’utente</h3>
              <p>
                I dati personali forniti volontariamente dall’utente (come ad esempio nome, cognome, indirizzo e-mail) allo scopo di contattare i membri del Sito o per iscriversi a tornei ed alla mailing list, sono utilizzati al solo fine di rispondere alle richieste formulate dall’interessato e per ottemperare agli obblighi di legge.
              </p>
              <p>
                La base giuridica di tali trattamenti è l’adempimento delle prestazioni inerenti alla richiesta di informazioni e di contatto e/o di invio di materiale informativo ed il rispetto di obblighi di legge.
              </p>
            </div>
          </section>
        </div>
      </div>
    </div>
  );
}
