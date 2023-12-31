import { Html, Head, Main, NextScript } from 'next/document'

export default function Document() {

  const iubendaImplementation = `
  <script type="text/javascript">
  var _iub = _iub || [];
  _iub.csConfiguration = {"askConsentAtCookiePolicyUpdate":true,"enableFadp":true,"enableLgpd":true,"enableTcf":true,"fadpApplies":true,"floatingPreferencesButtonDisplay":"bottom-right","googleAdditionalConsentMode":true,"perPurposeConsent":true,"siteId":3256308,"tcfPurposes":{"2":"consent_only","3":"consent_only","4":"consent_only","5":"consent_only","6":"consent_only","7":"consent_only","8":"consent_only","9":"consent_only","10":"consent_only"},"whitelabel":false,"cookiePolicyId":75516337,"lang":"it", "banner":{ "acceptButtonDisplay":true,"backgroundOverlay":true,"closeButtonRejects":true,"customizeButtonDisplay":true,"explicitWithdrawal":true,"listPurposes":true,"position":"bottom" }};
  </script>
  <script type="text/javascript" src="https://cs.iubenda.com/autoblocking/3256308.js"></script>
  <script type="text/javascript" src="//cdn.iubenda.com/cs/tcf/stable/stub-v2.js"></script>
  <script type="text/javascript" src="//cdn.iubenda.com/cs/tcf/stable/safe-tcf-v2.js"></script>
  <script type="text/javascript" src="//cdn.iubenda.com/cs/stable/iubenda_cs.js" charset="UTF-8" async></script>  `

  return (
    <Html lang='en'>
      <Head>
        <meta name="google-site-verification" content="0QIGlW3WY9G5hrHC1O0Gbxfgq60RyBE_fuFkn4Q4ll4" />
        <link rel='preconnect' href='https://fonts.googleapis.com' />
        <link rel='preconnect' href='https://fonts.gstatic.com' />
        <link href='https://fonts.googleapis.com/css2?family=Inter:wght@400;600&family=Volkhov:wght@400;700&display=swap' rel='stylesheet' />
        
        {/* favicon */}
        <link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png"/>
        <link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png"/>
        <link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png"/>
        <link rel="manifest" href="/site.webmanifest"/>
        <link rel="mask-icon" href="/safari-pinned-tab.svg" color="#5bbad5"/>
        <meta name="msapplication-TileColor" content="#da532c"/>
        <meta name="theme-color" content="#ffffff"/>
        {/* Metatag */}
        <meta name="title" content="Azienda Agricola | La Passione Della Terra" />
        <meta name="description"
          content="Specializzati nella vendita di Frutta e Verdura al dettaglio, Legna da ardere, Servizi di Pulizia campi e Manutenzione del verde" />
        <meta name="keywords" content="frutta, verdura, legna da ardere, azienda agricola, agricoltura, piemonte, campi, coltivazione, manutenzione verde" />
        <meta name="keywords"
          content="pulizia campi, frutta e verdura, legna, manutenzione, verde, campagna, italia, Rivalta, azienda, agri, bio" />
        <meta name="robots" content="index, follow" />
        <meta httpEquiv="Content-Type" content="text/html; charset=utf-8" />
        <meta name="language" content="Italian" />
        <meta name="author" content="Alberto Ottenga, Vittorio Gioda design" />
      </Head>
      <body>
        <Main />
        <NextScript />
        <div dangerouslySetInnerHTML={{ __html: iubendaImplementation }}></div>
      </body>
    </Html>
  )
}
