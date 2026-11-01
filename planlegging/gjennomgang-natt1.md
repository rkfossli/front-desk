# Gjennomgang av natt 1 (kald lesning som spiller)

Dato: 2026-11-01. Grunnlag: story.js slik det ligger publisert (commit 561b4de, identisk med index.html på main), motoren i index.html, fakta.md og historie.md.
Kun rapport. Ingen filer er endret. Fiksene skal gjøres av tråden «Historien videre med Dana».

**Det som holder:** Alle grener er sporet (4 608 veier inkl. død og natt 1b-løkka). Ingen kode som {date} står igjen rått, kunnskapsmerkene (k_floor12, k_quits_seen, k_fourth_told, k_card) gir null feil, ingen «guard» i dialog, Dana bruker «the car» riktig, ingen smilefjes, og spørsmålshuben kan ikke hoppes over.

---

## HØY: hull spilleren vil legge merke til

**H1. Dana ber spilleren lese av indikatoren hun selv ser** (`ch1_plan` «I need you to tell me what the indicator does», `ch1_end_card` «Tell me what it says.»)
Hun har nettopp sagt at monitoren hennes viser samme lobby. Det bryter faktabokens regel om at hun må si hvorfor.
*Fiks:* Bruk trappen hun allerede har nevnt. I `ch1_plan`: «When the hum starts I have to be in the stairwell. There's no monitor in there. So you're my eyes.» Da henger også «It's here» (sett før hun går) og «Tell me what it says» (sagt fra trappen) sammen.

**H2. «Doug never asked a single question»** (`ch1_a_fourth`)
Spilleren har Dougs tråd åpen og ser svaret på den fjerde: «Dana? Call me in the morning please.» Dana kan heller ikke vite hva Doug svarte på den fjerde.
*Fiks:* «And Doug just said okay. Three times. Nobody came looking.» Eventuelt et spillervalg: «He asked you to call him.» → «And when I didn't, he hired you.»

**H3. Lydopptaket kan ikke være tatt** (`ch1_a_where` mot `ch1_plan`)
Hun er i trappen fordi «the hum doesn't reach» der, og klokka hennes er ennå ikke 3:12. Likevel sender hun summingen «what it sounds like up here».
*Fiks:* «Recorded it last night with the stairwell door open. Don't play it loud.»

**H4. «They told you I quit, right?»** (`ch1_who`)
Her vet hun sikkert at hun er meldt som sluttet. Seinere spør hun «How many are there now?» og reagerer på den fjerde som noe nytt.
*Fiks:* «What did they tell you? That I quit?» (en gjetning, ikke kunnskap).

**H5. «a number that was disconnected three weeks ago»** (`ch1_end_police`)
Hvordan vet Dana at nummeret hun skriver fra er koblet fra?
*Fiks:* «...and you texting a number nobody can call back.» Eller la spilleren oppdage det selv (for eksempel en systemlinje om at det ikke går an å ringe nummeret).

**H6. Tre uker uten mat og vann**
Det første spilleren lurer på etter «I'm still up here». Ingenting forklarer det.
*Fiks:* én linje i `ch1_a_where`: «My phone says three weeks. My body says one night. I haven't been hungry once.» Det støtter også «the clock on the wall says four minutes» i ch2.

**H7. Nøkkelkortet: hvorfor la det igjen, og hvorfor virker det i 1974?** (logboka i `ch1_a_believe`, `ch1_plan`)
«Card's under this book in case I need someone to send it up» forutsetter at hun visste hun ville bli sittende fast, og at dørene der oppe krever kort. Hvorfor tok hun det ikke med? Og kortlesere i et sykehus fra 1974 virker rart. historie.md §79 har svaret («hun skulle bare se og holde døren», «kortet er kodet til bygget, ikke til året»), men spilleren får det aldri.
*Fiks:* Loggboka: «Going up to look. Just look. Card's under this book so whoever's next can find it if I'm stupid.» I `ch1_plan`: «Same readers as ours, bolted onto 1974 doors. The card's coded to the building, not the year.»

**H8. Handlingsvalg sendes som tekstmeldinger** (`ch1_wait`, `ch1b_retry`)
«Put the key card in the elevator.» / «Get in the elevator.» blir boblene spilleren sender til Dana. Det leses som om spilleren kommanderer henne, og i «skriv for å sende» skriver spilleren det selv.
*Fiks (enklest):* skriv dem som ekte tekster: «Card's in. Stepping back.», «I'm getting in.», «I'm calling the police.» *Alternativ:* en `action: true`-type valg i motoren som ikke lager boble, bare en systemlinje.

**H9. Stille timer ødelegger natt 1 i ekte tid** (motoren: `avoidQuiet`, `delayMs`)
Starter spilleren mellom 23 og 08 (veldig sannsynlig for et skrekkspill), kommer «Are you there?» med en gang, men neste melding venter til 08:00. Starter de 22:55, kommer heisen («It's here») først 08:00. Gjelder bare ekte-tid-modus, ikke testmodus.
*Fiks:* stille timer gjelder bare pauser over ca. 30 min (altså ikke midt i en samtale), eller natt 1 unntas helt.

---

## MIDDELS

**M1. Loggboka: «same as the other three nights»** (`ch1_a_believe`). Dana begynte etter den tredje oppsigelsen og kan ikke ha sett indikatoren de nettene. *Fiks:* «Indicator on 12 again. Third time this month.»

**M2. «I watched the flashlights on the ceiling. From up here the lobby is a ceiling.»** (`ch1b_retry`). Hun ser lobbyen gjennom monitoren, ikke gjennom gulvet, og lobbyen er opplyst. *Fiks:* «I watched them on the monitor. Two of them. One pressed every button. There's no 12.»

**M3. Politigrenen og kalenderen.** Undertittelen lover «Doug will see the call log in the morning», men Doug sier ingenting før dag 3 (`ch4_doug`). Der står «{weekday:-2d} night», som blir feil når politigrenen har lagt inn natt 1b (og én dag til for hvert «Not tonight»). Beredskapsuka på sju dager forskyves på samme måte. *Fiks:* lagre datoen for politinatten i et flagg og bruk den i ch4, eller la Doug sende en kort melding morgenen etter (08:00) så løftet holdes.

**M4. Klokkespørsmålet betyr ingenting** (`ch1_clock` → `ch1_plan`). Uansett om spilleren svarer 14:10 eller 01:30 sier hun «maybe ten minutes away». *Fiks:* la svaret brukes: «{time}. Okay. Mine says 3:02. Same gap as before.» «Good.» som svar på et klokkeslett leses også rart.

**M5. «This is a prank and I'm done.» → neste linje er at du løfter loggboka** (`ch1_wait`). *Fiks:* egen systemlinje på det valget: «You tell yourself it's a prank. You lift the logbook anyway.»

**M6. Danas stemme natt 1 (trenger Rubens avgjørelse).** Den ekte Dana skriver store bokstaver og perfekt tegnsetting hele natt 1, også når hun er livredd («Doors are opening. Please.»). Bare død og «Not tonight» er i små bokstaver. Senere er perfekt tegnsetting kjennetegnet på den falske. Spillerens første inntrykk av Dana er altså det samme som den falske. Dette er stilrevisjonen fra 18.10 som fortsatt ikke er avgjort. Anbefaling: Dana skriver små bokstaver og få punktum fra første melding.

**M7. Arkivtrådene får rare klokkeslett.** Bare Dougs tråd har faste klokkeslett (`@`). De andre regnes fra når spillet startes. Starter man kl. 20 får man: Priyas «Welcome» ved midnatt og spillerens svar kl. 01, Grace kl. 05 besvart av «the day desk», og «Maintenance reset the boiler at 6... within the hour» sendt kl. 14. *Fiks:* gi alle arkivmeldinger `@`-tider.

**M8. Indikatoren viser 12, og spilleren har jobbet seks kvelder ved desken.** Hvorfor har de aldri sett det? *Fiks:* systemlinjen i `ch1_proof` får en halvsetning: «It did that once on your second night. You thought it was a glitch.» Det knytter også Dougs «if it does the thing».

**M9. Dørene åpner seg, men spilleren ser aldri inn** (`ch1_wait`). Det mangler en systemlinje om at man går bort fra desken og at heisen er tom, slik Dana sa. *Fiks:* «You walk to the elevator. The doors stand open on an empty car.»

**M10. «Two minutes later» med `delay: "40s"`** (`ch1_end_card_2`, `ch1b_card`). Sett 2m. Følelse: «I q» blir sterkere hvis det faktisk står i skrivefeltet i Dougs tråd (eventuelt med en varsling som åpner den), ikke bare som beskrivelse.

**M11. Tempo.** `ch1_plan` er ni meldinger fra Dana uten at spilleren kan svare (tid, lyd, regel, kort, instruks, går mørk). Huben gir tre svar uten mulighet til å reagere, også etter «That's my night. I didn't send that.» *Fiks:* ett reaksjonsvalg etter `ch1_a_fourth` («Then who did?» → «I don't know. Ask me tomorrow.») og ett etter lydklippet.

---

## LAV

- **L1.** fakta.md §1 sier at trappen går «opp til 13 … ned forbi 12 til 11», mens §2 og `ch1_a_where` sier at den bare går opp. Rett §1.
- **L2.** `ch1_desk` nevner loggboka og datoen før `ch1_a_believe` gjør det samme. Det blir dobbelt på den veien. Kutt linja i ch1_desk.
- **L3.** «I read three of those every night I had that phone» bør være «Every night I had that phone, I read those three.»
- **L4.** Den sta veien (`ch1_stubborn`): kamerabildet kommer uten kommentar og kan leses som spillerens egen monitor. Legg til «That's mine. Up here.»
- **L5.** Loggboka er datert «3:12», men klokka 3:12 er det heisen kommer. Hun skrev før. Bruk spillerens klokke eller ingen klokkeslett.
- **L6.** Hovedveien (`ch1_end_card_2`) har ingen takk, mens politiveien har «Thank you. I mean it.» «Don't let Doug shut it off» er ikke forberedt; spilleren har ikke grunn til å tro at Doug vil det.
- **L7.** Doug: «Dana's last shift was {date:-21d}», men vakta begynte kvelden før (dag −22). Bruk {date:-22d}, eller la det stå (få vil merke det).
- **L8.** Overgang til dag 2: `ch2_inside` beskriver 1974-etasjen som nytt («Same hallways… Wrong decade… ashtray») selv om spilleren fikk det i `ch1_a_where`. `ch2_start` sier «the flat», som er britisk; amerikanere sier «the apartment».
- **L9.** Tom: «Legend.» er mer britisk/australsk enn amerikansk. «You're the best.» er tryggere.
- **L10.** Kamerabildet `camera6` viser «03:0x:41 REC» med rød prikk. Det er moderne overvåkingsgrafikk på det som skal være Danas 1974-monitor. Det er valgfritt å endre.
