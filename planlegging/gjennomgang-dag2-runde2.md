# Gjennomgang av dag 2, runde 2

Dato: 2026-11-01. Grunnlag: det upubliserte utkastet i /mnt/project-files/prototype/story.js og index.html. Natt 1 er uendret bortsett fra at begge kamerabildene setter `k_monitor_date`.
Kun rapport. Danas stemme er holdt utenfor.

**Maskinsjekk:** 144 374 tilstander er sporet fra ch2_start til ch3_start. Ingen brudd på kunnskapsmerkene, ingen blindveier og ingen rå koder. `k_monitor_date` settes på begge veier i natt 1, så merket i `ch2_w_clip` holder.

## D1–D21

| Punkt | Holder? |
|---|---|
| D1 mannen hos Grace | Ja. `ch2_w_man` finnes, og «If he comes back» / «If somebody comes» velges riktig. Valget er frivillig og kan hoppes over hvis man tar de tre bildene først, men da brukes den nøytrale linja, så det henger sammen. |
| D2 Grace og buret | Ja. Hun sier hvor buret er og spør «Have you heard from her?». Se R3 for en liten rest. |
| D3 kveldens regel | Delvis. Søvnspørsmålet er erstattet med «When are you off the desk?», men se R1. |
| D4 nextDay | Ja. Dag 2 starter alltid kl. 14 (i dag før kl. 10, ellers i morgen). Turen og kveldsdesken havner riktig. |
| D5 LANTERN-døren | Ja. Det er den eneste døren uten leser, med bare et nøkkelhull. Se R4. |
| D6 linja «it reads» | Ja (`ch2_desk_name`). |
| D7 te hos Marjorie | Delvis. Se R2. |
| D8 knappene | Ja. |
| D9 «looks like yours» | Ja. |
| D10 gjentakelser | Ja. |
| D11 vaskeriet | Ja. |
| D12 «last night» | Ja. |
| D13 Danas klokke | Ja. «mine says about one» gir riktig regnestykke mot {window} ved normal fart. |
| D14 årstallet | Ja. |
| D15–D18 | Ja. |
| D19 promisedNight | Ja. Klokkeslettet Dana nevner, holdes til natten kommer. |
| D20 «Good.» | Ja. |
| D21 notatboken | Notert som åpent i fakta.md til dag 4. |

---

## Nye og gjenstående punkter

### MIDDELS

**R1. «Lock up at eight. Be in 11C by {window}»** (`ch2_rule`, også `ch2_sleep_normal` «Then you're upstairs before it starts» og `ch2_sleep_late` «Lock up at eight like a good employee»)
Ved normal spillgang blir {window} 8:00 PM. Da sier regelen at spilleren skal låse i lobbyen kl. 20 og samtidig være i 11C kl. 20 med døra låst. Det går ikke, og «upstairs before it starts» stemmer ikke.
*Fiks:* «Lock up early tonight, quarter to. Be in 11C by {window} with the door locked.» `ch2_sleep_normal` blir da: «Eight's too close. Lock up early tonight.» `ch2_sleep_late` blir: «…Lock up a little early, he won't notice ten minutes.» (Natt 2-valget «Lobby. Just locking up.» fungerer fortsatt for den som ikke gjør det.)

**R2. «come up for tea on Sunday… I went up on the Saturday»** (`ch2_w_plan`, fakta.md)
Datoen hun gikk opp, regnes fra ekte klokke ({date:-21d}), så ukedagen varierer med når man spiller. Spiller man en onsdag, gikk hun opp en torsdag, ikke en lørdag. Den som har sett datoen i loggboka kan legge merke til det.
*Fiks:* ingen ukedag. «She said come up for tea that weekend and she'd tell me everything. I went up before the weekend came.» Eller bruk `{weekday:-21d}`: «She said {weekday:-20d}. I went up on {weekday:-21d}.»

### LAV

- **R3.** På Toto-senere-veien har spilleren sagt til Grace «She's alright. She's just away.» (`ch2_toto_later_2`). Litt senere sier Grace «If you do hear from her, tell her to call her mother» (`ch2_grace_man`), som om spilleren ikke har kontakt. Grace burde svare på det spilleren sa: «If she's just away, tell her to call her mother.» Bruk `told_okonkwo` eller et eget flagg for å velge linje. «You came after all» (`ch2_wall_trip`) er også litt rart når spilleren selv sa «I'll come get him», bare noen dager tidligere enn lovet. «You came sooner than you said.» er bedre.
- **R4.** I natt 1 sa Dana at trappen «ends at a door I can't open». Nå har hun kortet, men nevner ikke den døren. Spilleren vil spørre om den. *Fiks:* et halvt ord i `ch2_lantern`: «…the one door up here my card doesn't work on. Two, counting the one at the top of the stairs. Same keyhole.» (Det må ikke røpe servicetrappen fra dag 4.)
- **R5.** `ch2_w_man` og `ch2_w_why` kan hoppes over hvis man tar de tre bildene først. Det er greit så lenge ingen senere dag forutsetter at Dana vet om mannen. Når dag 3–4 skrives om, bør `w_man` brukes som betingelse dersom Dana nevner ham.

## Konklusjon

Dag 2 er logisk tett med to små rettelser: R1 (låse tidlig) og R2 (ukedagen). Resten er puss.
