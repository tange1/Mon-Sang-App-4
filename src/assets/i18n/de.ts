export default {
  common: {
    maleGender: 'männlich',
    femaleGender: 'weiblich',
    otherGender: 'andere',
    unknownGender: 'unbekannt',
    cancel: 'Abbrechen',
    back: 'zurück',
    continue: 'weiter',
    save: 'Speichern',
    loadDefault: 'Standardwerte laden',
    error: 'Ups. Da ist leider etwas schiefgegangen.',
    givenName: 'Vorname',
    familyName: 'Name',
    gender: 'Geschlecht',
    address: 'Adresse',
    canton: 'Kanton',
    search: 'suchen',
    birthdate: 'Geburtsdatum',
    eprSpid: 'EPR SPID',
    localPid: 'Lokale PID',
    kiloByte: 'Kb',
    megaByte: 'Mb',
    identifier: 'Identifier',
    logout: 'Ausloggen',
    yes: 'ja',
    no: 'nein',
    ahv: 'AHV-Nummer',
    author: 'Autor',
    date: 'Datum',
    description: 'Beschreibung',
    class: 'Klasse',
    type: 'Typ',
    fileType: 'Dateityp',
    fileSize: 'Dateigrösse',
    language: 'Sprache'
  },
  index: {
    epdTileTitle: 'EPD Playground',
    epdTileDescription: 'Suchen und bearbeiten Sie Patient•innen auf dem EPD Playground.',
    localTileTitle: 'Lokale Patient•innen',
    localTileDescription: 'Zeigen Sie Ihre lokalen Patient•innen an und registrieren Sie diese auf dem EPD Playground.'
  },
  documents: {
    uploadFile: 'Datei hochladen für: ',
    selectFile: 'Datei auswählen',
    selectFileText: 'Wählen Sie eine Datei aus, die Sie hochladen möchten:',
    metadata: 'Metadaten',
    metadataText: 'Ergänzen Sie die Metadaten zur Datei.',
    fileTypeCategory: 'Kategorie des Dateityps',
    jsonFhir: 'JSON-Datei mit FHIR-Inhalt',
    fileType: 'Typ der Datei',
    fileTypeText: 'Geben Sie den Typ der Datei an.',
    titleLabel: 'Titel',
    titleInput: 'Titel der Datei',
    descriptionText: 'Ergänzen Sie die Beschreibung zur Datei.',
    descriptionInput: 'Beschreiben Sie den Inhalt der Datei',
    titleAndDescription: 'Titel & Beschreibung',
    languageText: 'Geben Sie die Sprache des Dateiinhalts an.',
    typeNotSufficient: 'Bei nicht näher bezeichneten Dateitypen ist die Kategorie der Datei erforderlich.',
    creatingInstitution: 'Erstellende Institution',
    creatingInstitutionText: 'Geben Sie den Typ der Institution an, die die Datei erstellt hat.',
    institution: 'Institution',
    specialisation: 'Fachrichtung',
    specialisationText: 'Geben Sie den Fachrichtung der Institution an, die die Datei erstellt hat.',
    uploadSuccessful: 'Der Upload war erfolgreich.',
    uploadUnsuccessful: 'Der Upload war nicht erfolgreich.'
  },
  about: {
    title: 'Über den mHealth Prototypen',
    aboutText: 'Dieser mHealth Prototyp entstand im Rahmen eines Projektes von eHealth Suisse und dem Institut für Medizininformatik I4MI der Berner Fachhochschule. Er soll als Anschauungsobjekt und Beispielimplementierung eines Zugangs zum EPD Playground dienen, einer bewusst niederschwellig erstellten Test-Instanz des eidgenössischen Patientendossiers EPD. ',
    readMore: 'Unter den folgenden Links erfahren Sie mehr zu den Projektpartnern, zum elektronischen Patientendossier und zum EPD Playground:',
    version: 'Version:'
  },
  layout: {
    title: 'mHealth Prototyp',
    subtitle: 'GFP-Ansicht',
    logoutPrompt: 'Möchten Sie sich wirklich ausloggen?',
    menu: {
      title: 'Menü',
      home: 'Startseite',
      patients: 'EPD-Patient•innen',
      add_patient: 'Patient•in hinzufügen',
      settings: 'Einstellungen',
      about: 'Über den mHealth Prototyp',
      privacy: 'Datenschutz'

    }
  },
  login: {
    welcome1: 'Willkommen zum Gesundheitsfachpersonen-Bereich des EPD Use Case Prototyps.',
    welcome2: 'Loggen Sie sich mit Ihrer EPD-UC eID ein, um auf die Dossiers Ihrer Patient•innen zugreifen zu können.',
    eid_label: 'EPD-UC eID',
    password_label: 'Passwort',
    login_label: 'Login',
    invalid_password: 'Die eingegebene eID oder das Passwort ist ungültig.',
    enter_code1: 'Bitte geben Sie den Code ein, der an ',
    enter_code2: ' gesendet wurde.',
    resend: 'Code erneut senden',
    code_label: 'Code',
    check_label: 'Prüfen',
    invalid_code: 'Der eingegebene Code ist nicht korrekt.'
  },
  patients: {
    title: 'Patientenstamm durchsuchen (EPD Playground)',
    localId: 'lokaler Patient Identifier',
    system: 'System: ',
    city: 'Ort',
    missingParameter: 'Es sind nicht genug Suchparameter vorhanden.',
    notFound: 'Leider wurde zu den eingegebenen Daten kein•e Patient•in gefunden.',
    foundPatients: 'Gefundene Patient•innen',
    nameLabel: 'Name:',
    givenLabel: 'Vorname(n):',
    genderLabel: 'Admin. Geschlecht:',
    birthdateLabel: 'Geburtsdatum:',
    addressLabel: 'Adresse(n):',
    identifiersLabel: 'Identifier:',
    localIdLabel: 'Lokale PID:',
    mpiIdLabel: 'MPI ID:',
    eprSpidLabel: 'EPR SPID:',
    editButtonLabel: 'Daten bearbeiten',
    streetLabel: 'Strasse',
    zipLabel: 'Postleitzahl',
    cityLabel: 'Ort',
    addToFavorites: 'Zu Favoriten hinzufügen',
    success: 'Die Patientendaten wurden erfolgreich aktualisiert.',
    newSearch: 'Neue•n Patient•in suchen',
    documentTableLabel: 'Dokumente für MPI ID: ',
    fetchMpi: 'Lade Master Patient Index ID...',
    fetchedMpi: 'Master Patient Index ID geladen: ',
    fetchMetadata: 'Lade Dokument-Metadaten...',
    fetchingError: 'Die Metadaten konnten leider nicht geladen werden.',
    openPrompt1: 'Möchten Sie das Dokument "',
    openPrompt2: '" wirklich laden?',
    addDocument: 'Dokument hinzufügen'
  },
  settings: {
    'de-CH': 'Deutsch (Schweiz)',
    en: 'Englisch',
    fr: 'Französisch',
    it: 'Italienisch',
    languageText: 'Wählen Sie die Sprache für die EPD Playground Demo App (zurzeit nur Deutsch verfügbar).',
    logoutText: 'Loggen Sie sich aus oder wechseln Sie den/die Benutzer•in.',
    organizationTitle: 'Organisation',
    organizationText: 'Beschreiben Sie hier die Organisation, mit der Sie die Patient•innen verwalten und die in den auf dem EPD Playground gespeicherten Daten aufscheint. ' +
                      'Gewisse Einstellungen könnten zu fehlerhaftem Verhalten auf dem EPD Playground führen.',
    organizationTypeText: 'Sie können auch Standardwerte für die Art der Organisation und der Fachrichtung eingeben',
    organizationFacilityType: 'Art der Organisation',
    organizationPracticeSetting: 'Fachrichtung der Organisation',
    organizationName: 'Name der Organisation',
    organizationOid: 'OID des ID-Systems der Organisation',
    organizationGiven: 'Vorname der verantwortlichen Person',
    organizationFamily: 'Nachname der verantwortlichen Person',
    oidsTitle: 'OID / Systemidentifier',
    oidsText: 'Hier können Sie die OIDs der verschiedenen Code-Systeme einsehen. Die OIDs sind fest vergeben und können deshalb nicht geändert werden.',
    oidsMpi: 'OID für das System der Master Patient Index ID',
    oidsSpid: 'OID für das System der EPR SPID',
    oidsAhv: 'OID für das System der AHV-Nummern',
    oidsApp: 'OID für diese App (mHealth Prototyp)'
  },
  register: {
    localPatients: 'Lokale Patient•innen',
    hasEpr: 'hat EPD',
    registerPatient: 'Patient•in im EPD registrieren',
    selectLocal: 'Wählen Sie eine•n lokale•n Patient•in aus, den / die Sie auf dem EPD registrieren möchten.',
    registerLocal: 'Geben Sie die Stammdaten der Person ein, die Sie auf dem EPD Playground registieren möchten.',
    queryEprSpid: 'Frage EPR SPID mit AHV-Nummer ab ',
    gotEprSpid: 'EPR SPID gefunden: ',
    registering: 'Registriere Patient•in mit lokaler ID / EPR SPID: ',
    doneRegistering: 'Patient•in erfolgreich registriert',
    errorRegistering: 'Es ist leider zu einem Fehler gekommen'
  },
  e404: {
    title: '404',
    text: 'Ooops. Hier gibt es nichts zu sehen.',
    goHome: 'Zurück zum Hauptbildschirm'
  }
};
