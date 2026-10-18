# Logikkrapport: vaktordning, søvn og telefon (versjon 2)

18.10.2026, tråden «Logikk: vakt, hybel og desk-telefon». Sjekket mot prototype/story.js slik den var 18.10 kl. 00:53 (med de nye spørsmålshubene) og motoren i prototype/index.html. Ingen prototypfiler er endret; tråden «Historien videre med Dana» eier dem. Versjon 1 (vaktmobil, nattevakt ved disken 00–08) er erstattet av denne.

## 1. Kjernen: spilleren sover om natta, så rollen må gjøre det også

Motoren sender aldri noe mellom ca. kl. 23 og 14. Nattscenene kommer kl. 20 (`night`) og dagscenene kl. 14 (`day`). Ward-klokka driver, så Danas 3:12 lander om kvelden. Den virkelige spilleren er altså våken på kvelden og sover om natta. Hvis rollen er en vanlig våken nattevakt, stemmer ingenting: Dana spør når du sover, og svaret blir løgn.

**Ja, det finnes en nattevakt som sover.** På norsk heter det **hvilende (sovende) nattevakt**. Det er vanlig i omsorgsboliger: vakten har et rom på stedet, legger seg, og står opp hvis noen trenger hjelp. I amerikanske boligbygg heter det *sleep-in* eller *live-in on-call* (resident manager, overnight on-call porter). Det er nesten nøyaktig det spillet allerede beskriver: en gratis hybel «for response time».

### Forslag til vaktordning («sleep-in» + bakvaktuke)

| Tid | Hvem | Hvor er desk-telefonen |
|---|---|---|
| 08–16 | Priya ved disken (fasttelefonen) | Hos spilleren (bakvakt) |
| 16–20 | Spilleren ved disken: kveldsdisk, pakker, skiltet | Hos spilleren |
| 20:00 | Spilleren låser gatedøra, disken stenger | Hos spilleren |
| 20–08 | Spilleren er **hvilende nattevakt i 11C**: legger seg når hen vil, står opp hvis telefonen ringer | På nattbordet |

- **Bakvaktuke:** spilleren har desk-telefonen døgnet rundt i sju dager, fra samme dag som spillet starter. Én linje fra Doug i arkivet sier det.
- **Dana hadde den gamle ordningen:** våken nattevakt ved disken hele natta. Derfor trengte hun aldri hybelen, og derfor spilte hun piano «at four when the building was asleep». Etter fire «oppsigelser» har Doug gjort stillingen om til sleep-in: billigere, og ingen vil sitte i den stolen. Det bevarer Danas historie (§1 i bibelen: hun brukte aldri hybelen), og det gjør det obligatorisk for spilleren å bo i 11C.
- **Dag 3:** etter Tom-natten gir spilleren telefonen til Priya kl. 8 for å få sove. Det er lov på bakvakt, og det er grunnen til at Priya svarer Dana den dagen.

Dette passer med nesten alt som står i manuset fra før: «stay in 11C» om kvelden, «Go to sleep» kl. 20–21, «You sleep until two» etter Tom-natten, «it says nothing all night» (dag 5), «face down on the desk» kl. 19:35 (dag 4), «Priya hands you the phone at shift change», «Priya will see it at 8».

## 2. Funn, sortert etter alvor

Nodenavn står i `kode`. «Nå» er dagens replikk, «Ny» er forslaget. Spillreplikker er på engelsk.

### A. Søvn og vaktordning

**A1. Dana spør når du sover** (`ch2_end`). «Normal hours. Nights are for sleeping, Dana.» er feil for en nattevakt i dag, men riktig for en sleep-in.
- Valg 1 ny: "Midnight to eight. Unless the phone goes." (beholder `sleep_normal`)
- `ch2_sleep_normal` ny første linje: "Sleep-in. Lucky. I had to sit in that chair till seven." Andre linje beholdes.
- `ch2_sleep_late` «Of course you are. Night guard.» kan stå.

**A2. Hvorfor bor spilleren i bygget og har telefonen hele tiden?** Det står ikke noe sted. Ny linje først i `ch2_sleep_under` (felles node etter 11C-valget):
"And now it's sleep-in, so you don't even get to say no to the room. Doug's idea. Cheaper than someone awake in the chair, and closer to it."

**A3. Arkivet sier ikke at bakvakta begynner nå.** Ny melding i Doug-tråden, `ago: "1d"`, etter «Which thing?»:
"Reminder: your on-call week starts tomorrow. Seven days, desk phone stays on you day and night. Priya has the landline. Desk 4 to 8, lock up at 8."
(Ingen svar fra spilleren, slik «Which thing?» heller ikke fikk svar.)

**A4. Dag 3: hvorfor har Priya telefonen?** `ch4_start` systemlinje 1.
- Nå: "You sleep until two. The desk phone is downstairs with Priya, where it belongs during the day."
- Ny: "At eight you hand Priya the desk phone so you can sleep. You sleep until two."
- Vaktskiftet i samme node: delay "4h" → "1h 30m", slik at det lander rundt kl. 16. Teksten kan stå.

**A5. Spilleren straffes for å være i lobbyen natt 2** (`ch3_start` valg 2, `trust −1`). Kl. 20 er det tid for å låse.
- Nå: "Lobby. I'm on shift, Dana." / `ch3_lobby`: "I know you're on shift. That's what the desk is for. Just don't go near the car when it opens."
- Ny: "Lobby. Just locking up." / "Lock it and go up. Now. Don't be anywhere near the car when it opens." Fjern `trust −1`.
- Dette retter også en ny brist: i dag står spilleren i lobbyen når Tom kommer ned og skriver «lobby. I'm in the lobby. what the fuck was that» som om ingen var der. Når Dana sender spilleren opp, stemmer det.

**A6. Dougs regel «you're at the desk 3 to 3:30 per the handbook»** (`ch5_doug_define`). En sleep-in sover kl. 3.
- Ny: "…the sign goes up when the elevator acts up, the phone stays on you all night, and nobody hears the word 'missing' from us."
- Regelen om 03:00–03:30 kan leve videre i bibelen som den gamle ordningen fra 1979 som Dana fulgte.

**A7. Dag 2 starter på et tilfeldig tidspunkt** (`ch2_start` delay "7h"). Starter man kl. 21, kommer dag 2 kl. 4 om natta: varsel midt i søvnen, og Toto-bussen går før det er lyst.
- Ny delay: "day" (kl. 14 neste dag). Dag 2 blir en ettermiddag, og natt 2 kommer samme kveld kl. 20.
- Toto-ærendet må være ferdig før kveldsdisken kl. 16: `ch2_toto_yes` "2h" → "1h 30m", `ch2_toto_home` "40m" → "20m". Pianoet («the lounge off the lobby») kommer da kl. 18 mens spilleren sitter ved disken, og det passer fint.
- Åpningsreplikken: "You still there?" / "Of course you are. Where else would the desk be." → "You up?" / "Sorry. Sleep-in now, I heard. Doug was already talking about it when I left."

**A8. Meldinger som lander mens spilleren sover.** Faste pauser etter en kveldsscene havner om natta. Bibelen §7b lover at det aldri skjer mellom 00 og 08.
- `ch7_good`: Marjorie "6h", Grace "40m", Dana "2h" → ca. kl. 02–05
- `ch7_bad`: "3h" og "2h" → ca. kl. 01
- `ch7_step_back_end`: Dana "6h" → ca. kl. 02
- `ch7_desk`: Doug "6h" "Morning. …" → ca. kl. 02, med «Morning»
- `ch3_lost_end` / `ch3_lost_end_fault`: "3h" → ca. kl. 23–24
- Rett det i motoren: **stille timer 23–08**. En melding som ville landet da, flyttes til kl. 08. Da trenger ingen replikker endres, og Dougs «Morning» blir riktig.

**A9. «At noon you open the closet»** (`ch7_start`), men meldingen kommer kl. 14. Ny: "When you wake you open the closet…". I samme node sier Doug «sealed … this afternoon» kl. 14 → "this morning". Og «We'll talk Monday» er en hardkodet ukedag; dag 4 satte møtet til `{weekday:+3d}`, som er i morgen sett fra dag 6 → "We'll talk {weekday:+1d}."

### B. Klokkeslett i fortellerstemmen (natt 6)

Systemlinjene er spillerens virkelighet, men de bruker Danas Ward-tid. Telefonen viser ca. 20:00 mens teksten sier 3:10.

| Node | Nå | Ny |
|---|---|---|
| `ch7_lobby` | "3:10. The sign is face down…" / "3:12. The hum." | "{time}. The sign is face down…" / "Her 3:12. The hum." |
| `ch7_closet` | "3:12. The painted screw heads…" | "Her 3:12. The painted screw heads…" |
| `ch7_desk` | "3:12. You sit behind the desk…" | "{time}. You sit behind the desk…" |
| `ch7_good` | "3:41. You walk her down…" | "Half an hour later you walk her down…" |
| `ch7_step_back` | "Eleven floors of stairs. 3:19." | "Eleven floors of stairs. Seven minutes." |

Den falske Dana og Priya avtaler også klokkeslett i Ward-tid. Priya ville kommet seks timer for sent:

| Node | Nå | Ny |
|---|---|---|
| `ch6_tests_intro_soft`, `ch6_believe`, `ch7_start` | "Sign down at 3. Lobby by 3:10." | "Sign down by {window}. Be in the lobby." |
| `ch6_priya` | "…wait in the lobby at 3. she said you'd be asleep and not to wake you" | "…wait in the lobby at {window}. she said you'd be upstairs and not to bother you" |
| `ch7_start` Priya | "coming back at 2:30 for the lobby thing" | "coming back at {window} for the lobby thing" |
| `ch7_priya_gate` | "Thanks. See you at 2:30." | "Thanks. See you then." |

Slutteksten i `ch7_good` («03:12, elevator at L, no incident») kan stå som Danas tid.

### C. Motoren

**C1. Dag 4 hopper et døgn.** Pausene i ch5 summerer seg til ca. 7,5 timer fra kl. 14. `ch5_silence` "3h" ender ca. 21:35, og `ch5_walter` (`night`) hopper da til kl. 20 **neste dag**. Resten av spillet forskyves, og `{weekday:-3d}` i `ch6_t_piano` peker på feil dag. Rett med `ch5_silence` "3h" → "1h", og i motoren: `night` etter 21:30 men før 23 kommer om 15 min, ikke neste dag.

**C2.** `day` kan gi 25 timers stillhet hvis et kapittel ender mellom kl. 12 og 14. Det bryter «maks ett døgn». Gi `day` minst 6 timers pause, ellers neste dag.

**C3.** `ch1b_retry` har "1d", altså nøyaktig samme klokkeslett neste dag, kanskje midt på natta. Bytt til "night".

### D. Andre logiske brister i manuset

**D1. Testen med regelen dag 5 holder ikke** (`ch6_hub`). Valget er «It opened on L for Tom with nobody in the lobby. And the first night.» Første natt **sto** spilleren i lobbyen, så den støtter faktisk det den falske påstår («it only opens on L if someone is waiting»). Hvis spilleren var i lobbyen natt 2, stemmer heller ikke Tom-delen. Ny tekst: "It opened on L for Tom, and nobody was waiting for him." Med A5 er spilleren alltid oppe i 11C natt 2, så det holder.

**D2. Feil valg vises etter Priya-samtalen** (`ch4_doug`). «She read it. I told her it was a prank.» krever `told_priya` = 0, men utsett-grenen (`ch4_priya_deflect`) setter aldri flagget. Spillere som utsatte, får derfor tilbud om å si at de løy. «Some of it. I put her off until tomorrow.» vises dessuten for alle. Rett: sett `told_priya: 2` i deflect-grenen, og vis «Some of it…» bare med `told_priya: 2`.

**D3. Marjorie, dag 3:** «I saw you carry a cat carrier up the stairs this morning». Toto ble hentet dagen før → "yesterday".

**D4. Marjorie sier «Goodnight, dear» ca. kl. 16** (`ch5_marjorie_lock`: «It never bothers the ones who stay put. Stay put. Goodnight, dear.»). Ny: "…Stay put tonight, dear."

**D5. «don't answer the desk line if it rings»** (`ch4_end_nosign`). Spilleren holder desk-telefonen i 11C, så det er uklart hvilken telefon Dana mener → "don't pick up if the lobby phone rings. it rings sometimes when the sign's down." (fasttelefonen i lobbyen, som spilleren hører gjennom gulvet eller ikke.)

**D6. Tom: «came home late»** kl. 20 (`ch3_ready`) → "just got home".

**D7. Kap. 1 kan startes når som helst**, også kl. 10 mens Priya sitter ved disken. Det kan stå: bibelen §7b sier kap. 1 er fiksjonell tid, og med bakvakt kan spilleren være ved disken når som helst. Ønsker du det helt tett, kan første systemlinje i `ch1_proof` begynne med "{time}. You're minding the desk." Det er nøytralt uansett klokkeslett.

## 3. Hva Dana spør om etter lengre pauser (Rubens idé)

Med vaktordningen vet Dana hvor spilleren er, og kan spørre deretter:
- kl. 14: «You up?» (`ch2_start`, ny), «Desk? You up?» (`ch4_start`, finnes), «morning desk» (`ch5_start`, finnes, og blir en spøk om sleep-in-morgen)
- kl. 20: «You locked up yet?» eller «Where are you?» (`ch3_start` har det allerede)
- «Are you there?» bør holdes for kap. 1, den falske Dana (`ch6_start`) og slutten `ch7_swap`. Den gjentakelsen er et poeng.

## 4. Alternativer som er vurdert

1. **Sleep-in + bakvaktuke (anbefalt).** Ca. 35 småendringer, ingen nye grener, ingen nye flagg utenom `told_priya: 2`. Rollen sover når spilleren sover.
2. **Våken nattevakt ved disken 00–08** (versjon 1 av rapporten). Logisk for telefonen, men løgn i det øyeblikket Dana spør når du sover, og natta skjer alltid utenfor skjermen.
3. **Priya har telefonen hver dag**, slik bibelen sier nå. Krever omskriving av dag 4–6 på ettermiddagen.
4. **Samme nummer på to enheter.** Da leser Priya alt Dana skriver, og «don't tell Priya» mister poenget.

## 5. Det som må oppdateres i historie.md når dette er valgt

- §1: «Vaktene bor i bygget» får tillegg om sleep-in og at Dana hadde den gamle våkne ordningen.
- §5 «Telefonen og dagen»: erstattes av vaktordningen i §1 her.
- §4 og §5 om 03:00–03:30-instruksen: gjelder den gamle ordningen.
- §7b: legg til stille timer 23–08 i motoren.
