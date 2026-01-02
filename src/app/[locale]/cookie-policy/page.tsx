import React from 'react';
import { Link } from '@/i18n/routing';

interface CookiePolicyProps {
  params: Promise<{ locale: string }>;
}

export default async function CookiePolicy({ params }: CookiePolicyProps) {
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
          Cookie Policy
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

          <section className="space-y-6">
            <h2 className="text-xl text-white font-bold uppercase tracking-wider">Cookie</h2>
            <p>
              I cookie sono piccoli file di testo che vengono memorizzati sul dispositivo dell’utente quando questo naviga su determinati siti web tramite l’utilizzo del proprio browser preferito e vengono memorizzati nella directory dei file del browser. Essi sono utilizzati dalle applicazioni web lato server per archiviare e reperire informazioni sul lato cliente.
            </p>
            <p>
              I cookie si distinguono in “tecnici”, “analitici” e “di profilazione”. A loro volta, poi, i cookie possono essere divisi in cookie di “prima” e di “terza parte”.
            </p>
            <p>
              L’utilizzo di cookie e di tecnologie affini da parte del Sito avviene in conformità alla normativa nazionale ed europea, nonché nel rispetto del Provvedimento dell’8 maggio 2014, intitolato “Individuazione delle modalità semplificate per l’informativa e l’acquisizione del consenso per l’uso dei cookie” del Garante Privacy Italiano.
            </p>
            <p>
              Il Sito è creato con wordpress.com, per approfondimenti circa i cookie utilizzati da tale piattaforma e per disattivare gli stessi, si rinvia al seguente link: <a href="https://automattic.com/privacy/" className="text-accent hover:underline">https://automattic.com/privacy/</a>. Ed è ospitato su siteground.com per approfondimenti circa i cookie utilizzati da tale piattaforma e per disattivare gli stessi, si rinvia al seguente link: <a href="https://www.siteground.com/privacy.htm" className="text-accent hover:underline">https://www.siteground.com/privacy.htm</a>
            </p>
          </section>

          <section className="space-y-6 pt-6">
            <h2 className="text-xl text-white font-bold uppercase tracking-wider">Il Sito utilizza i seguenti cookie:</h2>
            
            <div className="space-y-4">
              <h3 className="text-lg text-white/90">I. Cookie Tecnici</h3>
              <p>
                I cookie tecnici hanno la finalità principale di rendere più agevole la navigazione del Sito. Quasi tutti i browser sono impostati per accettare i cookie, tuttavia l’utente può autonomamente modificare la configurazione del proprio browser o avvalersi di specifici componenti aggiuntivi e bloccarli: in tal caso, la fruizione del portale web e l’utilizzo di alcuni servizi possono risultare limitati.
              </p>
              <p>
                I cookie tecnici si distinguono a loro volta in cookie “di sessione” e “persistenti”: entrambi vengono memorizzati sul dispositivo dell’utente ma i primi vengono eliminati alla chiusura del browser, mentre i secondi restano memorizzati fino alla loro scadenza.
              </p>
              <p>
                Il Sito utilizza cookie tecnici “di sessione” per il funzionamento della navigazione all’interno delle pagine, come per esempio permettere l’autenticazione ad aree riservate o memorizzare preferenze temporanee dell’utente; questi cookie sono cancellati una volta chiuso il browser.
              </p>
              <p>
                L’uso dei cookie di sessione (che, in ogni caso, non vengono memorizzati in modo persistente sul computer dell’utente e sono cancellati automaticamente non appena il browser viene chiuso) è strettamente limitato ai fini della trasmissione di dati (costituito da numeri casuali generati dal server) che identificano la sessione specifica e sono necessari per consentire l’esplorazione sicura ed efficiente.
              </p>
              <p>
                Il Sito in alcuni casi utilizza anche cookie tecnici “persistenti”, per memorizzare le scelte dell’utente relative ad esempio alla lingua o al tipo di dispositivo.
              </p>
              <p>
                I cookie persistenti vengono memorizzati sul dispositivo degli utenti tra distinte sessioni del browser e consentono di ricordare le azioni dell’utente in un sito. I cookie persistenti possono essere utilizzati per una varietà di scopi, tra cui ricordare le preferenze dell’utente (es. la lingua del sito) quando si utilizza un sito.
              </p>
            </div>

            <div className="space-y-4 pt-4">
              <h3 className="text-lg text-white/90">1. Cookie Analitici</h3>
              <p>
                Tali cookie sono utilizzati per tracciare le preferenze di navigazione dell’utente e per la raccolta di dati statistici in forma anonima.
              </p>
              <p>
                Il Sito utilizza cookie Analitici solo di terze parti, provenienti da altri siti web.
              </p>
              <p>
                L’utente può disattivare tali cookie accedendo alle impostazioni del proprio browser.
              </p>
              <p>
                Si rinvia ai link dei singoli browser:
              </p>
              <ul className="list-disc pl-6 space-y-2">
                <li>Internet Explorer: <a href="https://support.microsoft.com/it-it/help/17442/windows-internet-explorer-delete-manage-cookies" className="text-accent hover:underline">link</a></li>
                <li>Firefox: <a href="https://support.mozilla.org/en-US/kb/enable-and-disable-cookies-website-preferences?redirect=no" className="text-accent hover:underline">link</a></li>
                <li>Safari: <a href="https://www.apple.com/legal/privacy/it/" className="text-accent hover:underline">link</a></li>
                <li>Chrome: <a href="https://support.google.com/accounts/answer/61416?co=GENIE.Platform%3DDesktop&hl=en" className="text-accent hover:underline">link</a></li>
                <li>Opera: <a href="https://blogs.opera.com/news/2015/08/how-to-manage-cookies-in-opera/" className="text-accent hover:underline">link</a></li>
              </ul>
              <p>
                Inoltre, è possibile disattivare i cookies presenti sui siti web scaricando appositi software (quali Ghostery http://www.ghostery.com) oppure attivare la modalità di “navigazione anonima”: si tratta di una funzione che consente di navigare senza lasciare traccia nel browser dei dati di navigazione. Tale funzione consente unicamente di non mantenere i dati di navigazione nel browser.
              </p>
            </div>

            <div className="space-y-4 pt-4">
              <h3 className="text-lg text-white/90">Cookie Analitici utilizzati dal Sito</h3>
              <p>
                Si comunica che il Sito utilizza i seguenti servizi di analisi per ottenere dati statistici in relazione all’utilizzo del sito web:
              </p>
              <ul className="list-disc pl-6 space-y-2">
                <li>“Google Analytics” fornito dalla società Google Inc. Per maggiori informazioni v. <a href="https://support.google.com/analytics/topic/2919631?hl=it&ref%5Ftopic=1008008" className="text-accent hover:underline">link</a></li>
              </ul>
            </div>

            <div className="space-y-4 pt-4">
              <h3 className="text-lg text-white/90">Cookie di plug in di social network</h3>
              <p>
                Il Sito potrebbe utilizzare, inoltre, cookie di plug in di social network di terze parti, al fine di consentirti di condividere i contenuti su diversi social network. Essi permettono all’utente di interagire tramite le reti sociali (es. funzione condividi su Facebook, Twitter, YouTube o LinkedIn). Tali cookie possono essere disattivati tramite le opzioni del proprio browser (v. i link riportati sopra).
              </p>
              <p>
                I cookie di social network non sono necessari alla navigazione. Per ulteriori informazioni sulle politiche di utilizzo dei cookie da parte dei Social Network, è possibile consultare le rispettive privacy e cookie policy:
              </p>
              <ul className="list-disc pl-6 space-y-2 grid grid-cols-1 md:grid-cols-2 gap-2">
                <li>Facebook: <a href="https://it-it.facebook.com/about/privacy/" className="text-accent hover:underline">Privacy Link</a></li>
                <li>Google: <a href="http://www.google.com/intl/it/policies/privacy/" className="text-accent hover:underline">Privacy Link</a></li>
                <li>Twitter: <a href="https://twitter.com/it/privacy" className="text-accent hover:underline">Privacy Link</a></li>
                <li>Instagram: <a href="https://help.instagram.com/1896641480634370?ref=ig" className="text-accent hover:underline">Privacy Link</a></li>
                <li>LinkedIn: <a href="https://www.linkedin.com/legal/cookie-policy" className="text-accent hover:underline">Privacy Link</a></li>
                <li>ShareThis: <a href="https://sharethis.com/privacy/#sthash.oNiQUPLd.dpbs" className="text-accent hover:underline">Privacy Link</a></li>
                <li>YouTube: <a href="https://support.google.com/youtube/answer/7671399?p=privacy%5Fguidelines&hl=it" className="text-accent hover:underline">Privacy Link</a></li>
              </ul>
            </div>
          </section>
        </div>
      </div>
    </div>
  );
}
