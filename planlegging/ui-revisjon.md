# UI-revisjon av prototypen (17. okt 2026)

Visuell versjon med side-om-side-eksempler: se artifact «Front Desk UI-revisjon» (lenket i tråden «UI-revisjon»).
**Status: alle punktene er gjennomført i prototypen 17. okt 2026 (punkt 12: «Report Junk»/spam-kort lagt inn; «Unknown Senders»-mappen er ikke brukt).**

Rangert etter hvor mye det bryter illusjonen av ekte Google Messages / iMessage (iOS 26). Gjelder `prototype/index.html`.

1. **iOS: bobler uten hale.** Fjern 4px-hjørnene (`--tail`) i iOS-skinnet; helt runde bobler, hale bare på siste boble i en gruppe. Android-formen er riktig.
2. **Begge: ingen Delivered/Read.** Vis status under siste utgående melding («Delivered» / «Read 3:14 AM»). Foreslått story-hendelse `{ read: "3:14" }`.
3. **Begge: statuslinje.** Legg til signalstreker og Wi-Fi; iOS uten «PM» og med Dynamic Island. (Forsvinner i Flutter-appen, som bruker telefonens egen.)
4. **Begge: svart ring rundt mikrofonknappen.** Bug: `.field .icon` mangler `border: 0; background: transparent` på `<button>`. iOS 26: grå glass-pluss, mikrofon inne i feltet. Android: emoji/galleri inne i feltet, farget mikrofonsirkel, plassholder «RCS message».
5. **Begge: varselbanner** er alltid mørkt og likt. iOS: lyst glasskort, kontaktbilde med lite Meldinger-merke, «now». Android: følger tema, linje «Messages · now», Reply / Mark as read.
6. **iOS: toppfelt.** Navn i glass-pille med «›», rund tilbakeknapp, videoknapp til høyre, ingen undertittel (`cSub`). Doug merkes i dag «Resident».
7. **Begge: «next reply in about … · Skip wait»** er synlig i chatten. Flytt til test-arket.
8. **iOS: alt er blått/iMessage.** Foreslått `service: "sms"` per kontakt (grønne bobler, plassholder «Text Message · SMS»); Dana/nummeret på SMS.
9. **Begge: bildemeldinger** ligger i boble med monospace-bildetekst. Ekte: frittstående bilde med runde hjørner, tekst som egen boble.
10. **Svarvalg.** Kladder i chatten er OK; på iOS uten avkuttet hjørne, ev. svak fylling i stedet for stiplet. «Type to send»: vis tastatur mens teksten skrives; på iOS legg valgene i QuickType-linjen (trenger korte etiketter).
11. **Innboks.** iOS: ulest-prikk til venstre, innrykkede skillestreker, «›» etter tid, ny-melding-knapp (og søk nederst i iOS 26). Android: ulest = halvfet (antatt, ingen prikk), ulike avatarfarger, profilbilde øverst til høyre.
12. **Ukjent nummer:** «Report Junk» (iOS) / «Block & report spam» (Android) under første melding. iOS 26 legger ukjente i «Unknown Senders» uten varsel; kan brukes som fortellergrep.
13. **Småting:** iOS-tidsstempel «**Today** 11:24 PM» / «Fri, Sep 26 at 11:24 PM»; iOS skriftstørrelse 17 pt (nå 15,5 px); iOS skrive-indikator med hale. Kursive systemlinjer beholdes bevisst.

Det som stemmer: Android-farger og boblegruppering, Android-toppfelt, Start chat-knapp, silhuett for ukjente, iOS stor tittel og to-linjers forhåndsvisning.
