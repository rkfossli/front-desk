# Gjennomgang runde 3: Danas stemme og dag 5

Dato: 2026-11-07. Grunnlag: upublisert `prototype/story.js` etter rettelsene av N1–N4 fra runde 2. Automatiske gjennomspillinger er ikke kjørt.

**Resultat: klart.** Ingen nye funn.

## Toto-testen på alle stier (`ch6_t_toto`)

Nøyaktig én variant vises på hver sti, og hver er ordrett det Dana skrev på den stien:

| Sti på dag 2 / dag 4 | Flagg | Den falske skriver | Kilde | Dag i valget |
|---|---|---|---|---|
| Henter Toto, sender bilde | `toto_pic` | «He's looking at the ceiling. He knows where I am.» | `ch2_toto_photo` | {weekday:-3d} ✓ |
| Henter Toto, skriver «Got him. He's in 11C.» | `toto_text` | «A saint in a staff residence with a no-pets clause.» | `ch2_toto_text` | {weekday:-3d} ✓ |
| Grace beholder ham, hentes etter Marjorie på dag 4 | `toto_d4` | «Grace has done enough. He's yours now.» | `ch5_marjorie_go` | {weekday:-1d} ✓ |
| Grace beholder ham, hentes aldri | `fed_toto`, ikke `toto_home` | «Grace has him. She'll say yes. She always says yes.» | `ch2_toto_later` (eneste vei til `fed_toto` uten turen) | {weekday:-3d} ✓ |
| Spilleren sier nei | ingen | «Mrs. O will manage.» | `ch2_toto_no` | {weekday:-3d} ✓ |

Sjekket også: turen (`toto_trip`) går alltid via `ch2_toto_back`, så `fed_toto` uten `toto_home` kan bare komme fra `ch2_toto_later`. Stien gjennom `ch2_wall_trip`, der Toto blir hos Grace, setter ingen Toto-flagg og havner riktig i en av de to siste radene.

## De andre rettelsene

- **N2/N3:** Linjen om deskstemmen står nå bare i `ch1_desk`, etter at spilleren har svart «This is the front desk at the Calloway. How can I help?». Der passer «and». «doug spot-checks the resident threads» åpner ikke for at Doug leser samtalene med Dana. ✓
- **N4:** `ch7_good` sier «no capitals, promise». ✓
- **N5:** Bildevarianten er nå ordrett. ✓
- Skriptet finner ingen nye linjer fra den ekte Dana med feil skrivemåte.
