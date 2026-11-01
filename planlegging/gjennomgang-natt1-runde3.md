# Gjennomgang av natt 1, runde 3

Dato: 2026-11-01. Grunnlag: commit b7276c7 (v38). story.js, index.html og frontdesk.html er identiske med main.
Kun rapport. Danas stemme (M6) er holdt utenfor.

**Maskinsjekk:** 16 128 veier er sporet. Ingen rå koder og null brudd på kunnskapsmerkene.

## N1–N12 fra runde 2

| Punkt | Holder? |
|---|---|
| N1 monitoren | Ja. Den står i heislobbyen på 12 ved trappedøren, og fakta.md er oppdatert. |
| N2 «You lift the logbook» | Ja. Linja vises nå på alle veier, med egen variant for prank. |
| N3 klokkespørsmålet | Ja. «Doesn't matter what yours says» fjerner påstanden om målt avstand. |
| N4 «the last one» | Ja (se liten rest under). |
| N5 kamerabildet | Ja. Fast 02:58, før «Mine says 3:02». |
| N6 politiet | Ja for Dougs ordlyd. Kalenderforskyvningen er notert i fakta.md til dag 3–6. |
| N7 politiet i heisen | Ja. |
| N8 ch1_desk | Ja. |
| N9 trappen opp | Ja. «up ends at a door I can't open». |
| N10 Doug kl. 07:40 | Ja, og spillerens valg i `ch1_a_fourth` er oppdatert så det passer. |
| N11 undertittel | Ja. |
| N12 «Hum's dropping. Going out.» | Ja, både i hovedveien og i 1b. |

## Nye punkter

### MIDDELS

**R1. «Hvorfor går du ikke bare inn i heisen?»**
Nå som det er klart at Dana sitter i heislobbyen på 12, og at monitoren hennes har vist 12 i tre uker, er dette det første en spiller spør om. Heisen står jo der hun er, og den åpner seg for kortet hos henne. Natt 1 forklarer ikke hvorfor hun ikke kan ta den ned. Regelen «Do not get in» gjelder spilleren, og stay-regelen kommer først i dag 2.
*Fiks:* én linje i `ch1_plan_2`, rett etter «Do not get in.»: «And no, I can't ride it back. Its doors don't open for me up here, only for what's inside. Mine opened once. I stepped out. That was the mistake.» Linja må stemme med stay-regelen i ch2 («if someone's already in it at my 3:12, they stay in it…»). Det kan også gjøres som et fjerde huspørsmål, men en linje holder.

### LAV

**R2. «Every night» mot «my body says one night».** `ch1_plan_2` sier «It comes up through the floor every night at 3:12», og opptaket er nå «the last one». Det betyr flere 3:12 for henne, mens `ch1_a_where` sier at kroppen kjenner én natt. Det er lett å leve med (klokka går i ring), men det blir helt rent hvis hun sier «My phone says three weeks. My body says one long night that keeps restarting.»

**R3. Hun spør hva klokka er og sier at det ikke betyr noe.** «Doesn't matter what yours says» etter «What time is it down there?» kan få spilleren til å lure på hvorfor hun spurte. Det fikses med et halvt ord om motivet: «{time}. Okay. Just wanted to know you're real. Mine says 3:02…»

## Konklusjon

Natt 1 er logisk tett nok til å spilles når R1 er fikset. R2 og R3 er pussearbeid. Det eneste som står åpent etter det, er Rubens avgjørelse om Danas stemme.
