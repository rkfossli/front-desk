# Meldingsspillet: gjennomførbarhet og struktur

Kort svar: **Ja, alt dette lar seg gjøre**, og det finnes kommersielle spill som gjør nesten nøyaktig det samme (f.eks. *Lifeline*, *Mr. Robot:1.51exfiltrati0n*, *Bury Me, My Love*, *Simulacra*, *Duskwood*). Ingen av kravene dine krever spesielle tillatelser eller triks.

---

## 1. Gjennomførbarhet per krav

| Krav | Lar seg gjøre? | Hvordan |
|---|---|---|
| Ser ut som Android Messages på Android og iMessage på iPhone | Ja | Appen sjekker plattformen og bytter "skin" (farger, bobler, fonter, topplinje). Samme logikk under, to utseender. |
| Melding kommer inn når man åpner appen | Ja | Første node i historien har null forsinkelse. |
| Velge mellom forhåndsdefinerte svar | Ja | Svarknapper der tastaturet vanligvis er. Gjerne vist som "forslag" over et falskt tekstfelt, så det føles som å skrive. |
| Personen svarer etter timer eller en dag | Ja | Hver melding har et tidspunkt. Appen lagrer "neste melding kommer kl. X" og regner ut ved oppstart hva som har skjedd mens appen var lukket. |
| Notifikasjoner som vanlige meldinger | Ja | **Lokale planlagte notifikasjoner**. Appen planlegger dem selv når spilleren gjør et valg. Ingen server trengs. Spilleren må godta notifikasjoner første gang (begge plattformer krever dette). |
| Bilder, lydfiler, video | Ja | Medie-filene ligger i appen. Historien refererer til dem med filnavn. Lyd vises som talemelding med avspillingsknapp. |
| "Skriver..."-indikator, lest/levert | Ja | Ren UI-animasjon før meldingen vises. |

### Ting å være klar over
- **Appen trenger ikke kjøre i bakgrunnen.** Trikset er at alt er forhåndsbestemt: når spilleren velger et svar, vet appen allerede hvilke meldinger som kommer og når. Den legger dem inn som planlagte notifikasjoner, og når appen åpnes igjen spoler den frem til "nå".
- **iOS-grense:** maks 64 ventende lokale notifikasjoner om gangen. Ikke et problem, siden man bare trenger å planlegge frem til neste valg.
- **Android:** fra Android 12+ må man bruke riktig API for eksakte alarmer, og noen produsenter (Samsung, Xiaomi) kan forsinke notifikasjoner noen minutter. For en historie med timers forsinkelse spiller det ingen rolle.
- **Spilleren endrer klokka på telefonen** for å jukse. Bestem selv om det er greit (de fleste slike spill lar det passere), ellers kan man sjekke mot nettverkstid.
- **"Hopp over ventetid"-knapp** er lurt å ha som valg (og er også en vanlig måte å tjene penger på).

### Butikk-regler
- Det er helt greit å lage et spill-UI som *ligner* en meldingsapp. Det man ikke må gjøre er å bruke Apples/Googles logoer, kalle appen "Messages"/"iMessage", eller late som appen faktisk er systemets meldingsapp. Appikonet må være ditt eget.
- Lag gjerne et eget fiktivt navn på "meldingsappen" inne i spillet, men med kjent utseende.
- Notifikasjoner må gjelde spillet. Apple avviser apper som spammer, men meldinger i historien er innenfor.

---

## 2. Anbefalt teknologi

**Anbefaling: Flutter** (ett språk, Dart, én kodebase for både Android og iPhone).

Hvorfor Flutter passer godt her:
- Har ferdige widget-sett i begge stiler: *Material* (Android) og *Cupertino* (iOS), så å bytte utseende per plattform er naturlig.
- Pakken `flutter_local_notifications` dekker planlagte notifikasjoner på begge plattformer.
- `just_audio` / `audioplayers` for lyd, innebygd bildevisning.
- Pikselkontroll over alt, som trengs for å etterligne bobler nøyaktig.

Gode alternativer:
- **React Native (med Expo)** hvis du heller kan JavaScript/TypeScript. `expo-notifications` gjør det samme. Like godt egnet.
- **Unity** fungerer, men er tyngre enn nødvendig for et spill som i praksis er et chat-grensesnitt.

Du trenger ingen server i første versjon. Alt (historie, medier, lagring av fremgang) ligger lokalt på telefonen.

---

## 3. Hvordan historien bør modelleres

Den viktigste beslutningen: **historien skal være data, ikke kode.** Appen er en "motor" som leser en historiefil og spiller den av. Da kan historien skrives, endres og testes uten å røre appen.

### Grunnbegreper
- **Node** – et stykke av samtalen: én eller flere meldinger fra kontakten, etterfulgt av et valg eller et hopp videre.
- **Melding** – tekst, bilde, lyd eller video, med en forsinkelse før den sendes.
- **Valg** – svarene spilleren kan velge, hver peker til neste node.
- **Variabler/flagg** – husker ting spilleren har gjort (`tillit = 3`, `fortalte_om_nøkkelen = true`).
- **Betingelser** – et valg eller en melding vises bare hvis et flagg er satt.

### Eksempel på format (forenklet)

```yaml
start:
  messages:
    - text: "Hei? Er dette nummeret til Ruben?"
      delay: 0s
    - text: "Sorry, fikk nummeret ditt av en venn. Trenger hjelp."
      delay: 4s
  choices:
    - text: "Hvem er du?"
      goto: hvem_er_du
    - text: "Hva slags hjelp?"
      goto: hjelp
      set: { tillit: +1 }

hjelp:
  messages:
    - text: "Jeg er utenfor huset. Det står en bil der."
      delay: 20s
    - image: bil_utenfor.jpg
      delay: 10s
  choices:
    - text: "Gå inn igjen!"
      goto: gaar_inn
    - text: "Gå og sjekk bilen"
      goto: sjekker_bilen

sjekker_bilen:
  messages:
    - text: "Ok. Gir lyd når jeg vet mer."
      delay: 15s
    - status: offline          # kontakten "forsvinner"
    - audio: hvisking.m4a
      delay: 3h                # neste melding kommer om 3 timer
      notify: true
  goto: etter_bilen
```

Motoren gjør så dette: viser meldingene med "skriver..."-animasjon og forsinkelse, lagrer hvor spilleren er og når neste melding skal komme, planlegger notifikasjoner, og venter på valg.

---

## 4. Verktøy for å skrive historien

Ikke skriv rå JSON/YAML for hånd når historien blir stor. Bruk et verktøy for forgrenet dialog og eksporter derfra.

| Verktøy | Fordeler | Ulemper |
|---|---|---|
| **ink** (Inkle, laget for *80 Days*) | Skrives som vanlig tekst med enkle symboler, svært god på variabler og sammenflettede grener, gratis editor (Inky), offisielle kjøremotorer. | Ikke visuelt flytskjema. Ingen offisiell Dart-motor (finnes for JS, så React Native er enklere). |
| **Yarn Spinner** | Lettlest skriptformat, visuell nodevisning i VS Code. | Tettest knyttet til Unity. |
| **Twine** | Visuelt flytskjema, veldig enkelt å komme i gang, gratis. | Blir rotete når historien blir stor. Krever eget eksportformat. |
| **Arcweave / articy:draft** | Profesjonelle visuelle verktøy med eksport til JSON. | Koster penger for større prosjekter. |

**Anbefaling:**
- Start med **Twine** eller penn og papir for å skissere hovedhandlingen visuelt.
- Skriv selve dialogen i **ink** (eller et eget enkelt YAML-format som over), og legg forsinkelser og medier inn som *tags*, f.eks. `#delay:3h #image:bil.jpg`.
- Hvis du velger Flutter + ink, kan man enten kjøre inkjs i appen eller konvertere ink-eksporten til eget format. Hvis du velger eget YAML-format, lager man et lite skript som tegner flytskjemaet automatisk (Graphviz/Mermaid) så du alltid ser helheten.

---

## 5. Holde forgreningene under kontroll

Uten struktur vokser antall grener eksponentielt (3 valg × 10 steg = 59 000 veier). Profesjonelle forfattere bruker disse teknikkene:

1. **Perlekjede-struktur ("string of pearls").** Hovedhandlingen går gjennom faste *kapitler/knutepunkter*. Mellom knutepunktene kan samtalen forgrene seg fritt, men alle grenene samles igjen ved neste knutepunkt.
2. **Flagg i stedet for nye grener.** I stedet for å lage en helt ny gren fordi spilleren var frekk, sett `tillit -1` og fortsett samme vei. Senere kan én linje variere: "Du var ikke akkurat hyggelig i går, men ok."
3. **Få valg som virkelig betyr noe.** De fleste valg endrer tone og flagg. Bare noen få valg per kapittel endrer retning. Sistnevnte bør føles tydelig.
4. **Slutt bestemmes av flagg.** I stedet for at hver gren har egen slutt, regnes slutten ut fra variabler (f.eks. tillit + hva spilleren oppdaget). Typisk 3–6 slutter.
5. **Dødsgrener er lov,** men korte. "Game over" som raskt lar spilleren spole tilbake til siste knutepunkt (som *Lifeline* gjør).
6. **Navngi noder etter kapittel:** `k2_bilen_sjekker`, `k2_bilen_gaar_inn`, `k3_start`. Gjør filen lett å navigere.
7. **Én fil per kapittel**, og automatisk sjekk som finner noder ingen peker til eller `goto` som peker til noe som ikke finnes.

### Foreslått arbeidsrekkefølge
1. Skriv hovedhandlingen som 5–10 knutepunkter på ett ark (start, hendelser, mulige slutter).
2. Bestem hvilke variabler som finnes (tillit, ting spilleren vet, hvor kontakten er).
3. Skriv kapittel 1 ferdig i valgt format.
4. Bygg en minimal prototype: chat-UI, én skin, forsinkelser og notifikasjoner, som spiller av kapittel 1.
5. Spilltest, så resten av kapitlene og den andre skinnen.

---

## 6. Oppbygging av appen (oversikt)

```
app/
  motor/          leser historien, holder styr på tilstand, flagg og tid
  ui/
    android_skin/ Material-stil bobler, topplinje, tastatur
    ios_skin/     iMessage-stil bobler, topplinje, tastatur
  varsler/        planlegger og avbryter lokale notifikasjoner
  lagring/        lagrer node, flagg, meldingshistorikk, tidsstempler
historie/
  kapittel1.ink (eller .yaml)
  ...
media/
  bilder/  lyd/  video/
```

Motoren skal ikke vite hvilken skin som brukes, og UI-et skal ikke vite noe om historien. Da kan begge byttes og utvides hver for seg.
