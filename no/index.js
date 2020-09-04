export default {
  lang: 'Norsk',
  failed: 'Handlingen mislyktes',
  success: 'Handlingen var vellykket',
  RPCCheck: 'Alle systemer er online',
  RPCCheck_fail: 'Det ser ut til at RPC for øyeblikket ikke er synkronisert, saldoen kan være feil og TX-er vil ikke fungere. Funksjonaliteten blir gjenopprettet så snart som mulig.',
  // Routes
  routes: {
    config: 'Konfigurasjon',
    settings: 'Innstillinger',
    send: 'Sende',
    txs: 'Transaksjoner',
    receive: 'Motta',
    home: 'Hjem',
    supcurr: 'Støttede valutaer',
    suplang: 'Støttede språk',
    keystore: 'Eksporter Keystore',
    supnet: 'Støttede nettverk',
  },
  // About Component
  about: {
    version: 'Versjon:',
    author: 'Utviklere:',
    funded: 'Finansiert av:',
    contact: 'Kontakt Oss:',
    translators: 'Oversetter:',
  },
  // Cordova Component
  cordova: {
    signin: 'Logg Inn',
    error_screenlock: 'Aktiver skjermlåsen på enheten din. Denne appen kan ikke fungere uten den.',
    error_sec_storage: 'Appen kunne ikke konfigurere sikker lagring på grunn av ukjent feil. Appen kan ikke fungere uten den.',
    title: 'Logg deg på lommeboken din med biometrisk autentisering',
    error_screenlock_changed: 'Det ser ut som du har endret/slettet skjermlås. Sett opp en skjermlås og installer appen på nytt.',
  },
  // Nav Drawer component
  nav: {
    about: 'Om',
    signout: 'Logg Ut',
  },
  // Manin layout
  main: {
    cache: 'Dataene er ikke bufret ennå. Prøv på nytt når du er online',
  },
  // 404 Page
  error_404: {
    sorry: 'Beklager, det er ingenting her...',
  },
  // Keystore
  keystore: {
    fail: 'Kunne ikke generere Keystore, vennligst kontakt oss.',
    success: 'Keystore ble vellykket opprettet .',
    message: 'Bare kopier den genererte keystore og lim inn en fil som heter keystore.json - Du kan deretter bruke din mobile lommebok på MyEtherWallet eller MyCrypto. Når du blir bedt om passordet ditt, bruker du app-knappen.',
  },
  // Home Page
  home: {
    balance: 'Saldo',
    mcap: 'Markedsverdi:',
    volume: 'Volum (USD): $',
    mdata_error: 'Kan ikke hente forespurte markedsdata',
    last_tx_in: 'Siste TX inn:',
    last_tx_out: 'Siste TX ut:',
    receive: 'Motta',
    send: 'Sende',
    website: 'Ether-1 Hjemmeside',
    settings: 'App Innstillinger',
    txs: 'Transaksjoner',
    error_getting_txs: 'Feil ved henting av transaksjoner',
    copied: 'Teksten er kopiert',
    not_signed_in: 'Vennligst logg inn',
    markets_not_supported: 'Markeds statistikk støttes ikke på:',
    conv_not_supported: 'Priskonvertering støttes ikke på:',
    transactions_not_supported: 'TX Sporing er ikke tilgjengelig på:',
  },
  // User Index (Wallet Setup)
  index: {
    welcome: 'Velkommen til',
    name: 'Ether-1 Mobil Lommebok !',
    before: 'Før du starter, har vi noen viktige steg du skal gjennom først.',
    attention: 'Venligst forstå følgende:',
    access: 'Vi har ikke tilgang til lommeboken din.',
    reset: 'Vi kan ikke tilbakestille pinkoden din.',
    backup: 'Ta sikkerhetskopi av din private nøkkel.',
    client: 'Du er ansvarlig for lommeboken, appen bruker bare vår RPC til å kringkaste transaksjoner.',
    pin: 'Hvis du deaktiverer telefonens Pin, Face eller Touch ID, mister du tilgang til lommeboken og midlene, det er grunnen til at du bør sikkerhetskopiere din private nøkkel.',
    understand: 'Jeg forstår',
    setting: 'Vi jobber med å sette opp din',
    wallet: 'Ether-1 Lommebok',
    address: 'Nedenfor er din unike lommebokadresse:',
    pkey: 'Nedenfor er din private nøkkel:',
    backup_pkey: 'Husk å ta sikkerhetskopi av din private nøkkel!',
    got_it: 'Jeg har det!',
    set: 'Alt er klart, din',
    ready: 'klar!',
    by: 'av:',
    funded: 'finansiert',
    developed: 'utviklet',
    the_wallet: 'Ether-1 lommeboken var',
    secure: 'Sikre lommeboken mi',
    encrypt: 'Krypter lommeboken:',
    wallet_name: 'Brukernavn',
    use_pin: 'Legg inn en unik pin',
    confirm: 'Bekreft din pin',
    required_name: 'Navn på lommeboken er påkrevd',
    required_pin: 'Pinkode er påkrevd',
    retype_pin: 'Skriv inn PIN-koden din på nytt for å bekrefte',
    no_match: 'Pinkodene stemmer ikke overens',
    weak_pin: 'Den valgte koden er veldig svak. Den må være minst 10 tegn lang og ha et tall.',
    copied: 'Teksten er kopiert',
    language: 'Velg ønsket språk:',
    unreg: 'Hei! Vi har lagt merke til at kontoen din er uregistrert. For å få tilgang til og bruke skykontakter, krever vi at du bekrefter brukernavnet ditt. Når du har trykket på bekreft, KAN IKKE endres brukernavnet ditt. Ingen personlige opplysninger lagres i skyen.',
  },
  // Receive Page
  receive: {
    scan: 'Skann QR-koden for å motta',
    address: 'Adresse',
    warning: 'Du kan kun motta ETHO til denne adressen!',
    current_price: 'Nåværende pris på',
    wallet_addr: 'Lommebok Adresse',
    copied: 'Teksten er kopiert',
  },
  // Send Page
  send: {
    recent: 'Nylig:',
    no_recent: 'Ingen nylige transaksjoner',
    no_contacts: 'Ingen kontakter er lagt til',
    send_to: 'Hvor mye vil du sende til',
    add_contact: 'Legg til kontakt',
    name: 'Navn:',
    address: 'Adresse:',
    save: 'Lagre',
    delete: 'Slett Kontakt',
    copy_address: 'Kopier adresse',
    invalid_address: 'Ugyldig Adresse',
    not_pasted: 'Kan ikke lime inn',
    cancelled_scan: 'Skanning Avbrutt',
    unable_scan: 'Kan ikke skanne',
    scan_prompt: 'Skann adresse QR-kode',
    contact_added: 'Kontakt er lagt til',
    enter_name: 'Skriv inn navn:',
    enter_address: 'Angi adresse:',
    exists: 'har allerede denne adressen',
    copied: 'Adressen er kopiert',
    sending: 'Sender mynter',
    app_error: 'Uventet feil. Installer appen på nytt',
    tx_success: 'TRANSAKSJON FULLFØRT',
    tx_failed: 'TRANSAKSJON FEILET',
    online: 'Skykontakt',
    no_online: 'Vennligst søk etter et brukernavn, hvis ingen vises her, finnes de ikke i databasen vår.',
    add: 'Last ned kontakt',
  },
  // Settings Page
  settings: {
    node_stats: 'Node Statistikk:',
    chain_id: 'ChainID:',
    Blockheight: 'Nåværende Blokkhøyde:',
    version: 'Node Versjon:',
    sync_status: 'Synk Status:',
    app: 'App Innstillinger',
    select_currency: 'VELG DIN VALUTA:',
    select_language: 'VELG DITT SPRÅK:',
    about: 'Om Black Wallet:',
    about_etho: 'Om Ether-1',
    error_offline: 'Frakoblet',
    keystore: 'GENERER KEYSTORE',
    about_black: 'Om etho.black',
    about_ncr: 'Om tredjepartsutvikler (newCodeRunner)',
    stats: 'Ether-1 Nettverks Statistikk',
    git: 'Ether-1 Github',
    select_network: 'Velg Blockchain',
  },
  // SupportedCurrencies Page
  SupportedCurrencies: {
    changed: 'Valuta endret til: ',
  },
  // SupportedLanguages
  SupportedLanguages: {
    changed: 'Språk endret til: ',
  },
  // Transactions
  txs: {
    recent_txs: 'Nylige Transaksjoner',
    no_txs: 'Ingen overføringer gjort i løpet av de siste 1000 blokkene.',
    retrieved: 'Hentet transaksjoner',
    error: 'Feil ved henting av transaksjoner',
  },
  // Currency Symbols - Do Not Change.
  etho: 'ETHO',
  zar: 'R',
  usd: '$',
  eur: '€',
  ltc: 'Ł',
  btc: '₿',
  eth: 'Ξ',
  bch: 'BCH',
  bnb: 'BNB',
  eos: 'EOS',
  xrp: 'XRP',
  xlm: 'XLM',
  aed: 'د.إ',
  ars: '$',
  aud: '$',
  bdt: '৳',
  bhd: '.د.ب',
  bmd: '$',
  brl: 'R$',
  cad: '$',
  chf: 'Fr',
  clp: '$',
  cny: '¥',
  czk: 'Kč',
  dkk: 'Kr.',
  gbp: '£',
  hkd: '$',
  huf: 'Ft',
  idr: 'Rp',
  ils: '₪',
  inr: '₹',
  jpy: '¥',
  krw: '₩',
  kwd: 'د.ك',
  lkr: 'Rs',
  mmk: 'K',
  mxn: '$',
  myr: 'RM',
  nok: 'kr',
  nzd: '$',
  php: '₱',
  pkr: '₱',
  pln: 'zł',
  rub: '₽',
  sar: '﷼‎,',
  sek: 'kr',
  sgd: '$',
  thb: '฿',
  try: '₺',
  twd: '$',
  uah: '₴',
  vef: 'Bs.',
  vnd: '₫',
  xdr: 'SDR.',
  xag: 'XAG',
  xau: 'XAU',
};
