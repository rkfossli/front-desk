# Gjennomgang av natt 1, runde 2

Dato: 2026-11-01. Grunnlag: commit d2f98eb (story.js, index.html og frontdesk.html er identiske med main), arkivtrådene, ch1_start til ch1b_card, de nye nodene og motorendringene.
Kun rapport. Ingen filer er endret.

**Maskinsjekk:** 16 128 veier er sporet (alle rekkefølger i huben, alle nye valg, død med tilbakespoling, og politiløkka). Ingen rå koder, og null brudd på kunnskapsmerkene.

## Status for fiksene fra runde 1

| Punkt | Status |
|---|---|
| H1 indikatoren / «you're my eyes» | Fikset, men har skapt et nytt hull om monitoren (N1) |
| H2 Doug svarte | Fikset. Det nye valget `ch1_a_doug_call` fungerer |
| H3 lydopptaket | Fikset, men har skapt et lite nytt hull (N4) |
| H4 «What did they tell you?» | Fikset |
| H5 «nobody can call back» | Fikset |
| H6 tre uker uten sult | Fikset |
| H7 kortet (motiv og kortlesere) | Fikset, og forklaringen henger nå sammen |
| H8 handlinger som ekte tekst | Fikset |
| H9 stille timer | Fikset. Pauser under 30 min går gjennom om natta, «night» og «day» holdes fortsatt |
| M1 loggboka | Fikset («Third time this month», 3:05) |
| M2 politiet på monitoren | Fikset, men se N1 og N7 |
| M3 Doug og politiet | Delvis fikset. Doug skriver dagen etter, men se N6 |
| M4 klokkespørsmålet | Ikke løst. Se N3 |
| M5 «prank» | Fikset, men nå mangler linja for alle andre (N2) |
| M7 arkivtider | Fikset. Alle tider er rimelige for hvem som har telefonen da |
| M8 «second night» | Fikset |
| M9 tom heis | Fikset |
| M10 «Two minutes» / 2m | Fikset |
| M11 tempo | Fikset. Det er nå reaksjonsvalg etter den fjerde oppsigelsen og etter lydklippet |
| L-punktene | L2, L3, L4, L5, L6, L7, L9 og «flat» er fikset |

---

## Nye hull og gjenstående punkter, i prioritert rekkefølge

### HØY

**N1. Hvor står monitoren?** (`ch1_plan_2` mot `ch1_proof`, `ch1_floor12`, `ch1b_retry`)
«Without it I'm locked in a stairwell» og «There's no monitor in there» betyr at Dana ikke kommer seg til monitoren uten kort. Likevel har hun fulgt med på den i tre uker («Mine has said 12 for three weeks»), sendt bilde av den («That's my screen»), og hun ser politiet på den i 1b.
*Fiks:* Gjør geografien tydelig. Monitoren står i heislobbyen på 12, ved trappedøren, og det er avdelingsdørene som krever kort. I `ch1_plan_2`: «Without it all I've got is the elevator lobby and the stairwell. Every other door is locked.» Før fakta.md oppdateres, bør linja om den gamle kameramonitoren få en plassering.

**N2. Linja «You lift the logbook» finnes nå bare på prank-veien** (`ch1_wait`)
Alle andre spillere får rett på «A blue lanyard is taped underneath…» uten å ha løftet noe.
*Fiks:* Legg til `{ system: "You lift the logbook.", if: { flag: "prank", max: 0 } }` før lanyard-linja.

### MIDDELS

**N3. «Same gap as the last three weeks»** (`ch1_plan`, når spilleren har gitt klokkeslettet)
Svaret betyr fortsatt ingenting, for hun sier «ten minutes» uansett hva spilleren skrev. Nå påstår hun i tillegg at hun har målt avstanden i tre uker. Det kan hun ikke: monitoren hennes viser 1974-tid, og kroppen hennes sier «one night». Linja sier også både «Same gap» og «Don't do the math».
*Fiks:* «{time}. Okay. Mine says 3:02. Doesn't matter what yours says. When mine says 3:12, the car comes. Ten minutes, maybe.»

**N4. «I recorded it last night»** (`ch1_plan`) mot «My body says one night» (`ch1_a_where`). Hvis det bare har vært én natt for henne, finnes ikke «last night».
*Fiks:* «I recorded the last one with the stairwell door open.»

**N5. Kamerabildet viser et klokkeslett som kan være senere enn 3:02** (motoren `camera6`)
Overlegget er `03:0${minutt % 10}`, så bildet kan vise 03:08 rett før Dana sier «Mine says 3:02». Det regnes også ut på nytt ved hver visning, så tiden endrer seg når tråden åpnes igjen.
*Fiks:* fast «02:58» (eller tidligere). Datoen 11-14-74 fungerer fint og er en god krok.

**N6. Politigrenen og kalenderen**
- Dougs melding sier «last night». Hvis natt 1 ble spilt kl. 10 om formiddagen, kommer meldingen kl. 16 samme dag og «last night» blir feil. *Fiks:* «about a welfare check from the desk line» uten tidspunkt.
- Natt 1b legger til én dag (pluss én for hvert «Not tonight»). Da passer ikke resten av uka lenger: Dougs «Seven days», og «{weekday:-2d}»-type referanser senere. Dette bør sjekkes når dag 3 til 6 gjennomgås. Alternativt kan 1b skrive et flagg med antall ekstra dager.

**N7. «One pressed every button»** (`ch1b_retry`). Kamera 6 ser heislobbyen, ikke panelet inne i heisen. *Fiks:* «One of them stood in the car a long time with the doors open.»

### LAV

- **N8.** `ch1_desk`: «Same desk. Same phone. Different century, for me.» Hun har ikke desktelefonen, hun skriver fra sin egen. «Different century» avslører 1974 før hun har bedt spilleren om ikke å spørre ennå, og før `ch1_a_where`. *Fiks:* «Same desk. I sat where you're sitting.»
- **N9.** Hovedtrappen «only go up». Spilleren vil spørre hva som er der oppe. En halv setning holder: «Up ends at a door I can't open.» (Den må ikke røpe servicetrappen fra dag 4.)
- **N10.** Doug skriver «Call me in the morning please» kl. 07:40, altså allerede om morgenen. Bruk «Call me when you see this.»
- **N11.** Politiundertittelen «The police found an empty lobby.» slår fast det som skjer etter at kapitlet slutter. Det er greit som oppsummering, men «The police are on their way.» er mer i nåtid.
- **N12.** Kortet ligger i heisen på 12 mens summingen går, og Dana står i trappen. 35 sekunder senere har hun det. Vurder en kort linje: «Hum's dropping. Going out.» Det er valgfritt.

### Fortsatt åpent

- **M6. Danas stemme** (store bokstaver og perfekt tegnsetting hele natt 1) venter på Ruben.
