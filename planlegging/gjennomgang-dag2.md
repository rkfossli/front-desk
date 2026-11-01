# Gjennomgang av dag 2 (kald lesning som spiller)

Dato: 2026-11-01. Grunnlag: utkastet i /mnt/project-files/prototype/story.js, nodene ch2_start til ch2_rule, bildene wall_list, wall_clipping og wall_plan i index.html, og fakta.md («Dag 2 etter omarbeidingen»). Lest som en spiller som har spilt natt 1 og arkivet.
Kun rapport. Ingen filer er endret, og Danas stemme er holdt utenfor.

**Maskinsjekk:** 72 019 tilstander er sporet fra ch2_start til ch3_start (alle hubrekkefølger og alle Toto-veier). Ingen brudd på kunnskapsmerkene, ingen blindveier, ingen flagg som brukes uten å bli satt, og ingen «guard» eller britiske former.

---

## HØY

**D1. Dana vet om mannen hos Grace, men har aldri hørt om ham** (`ch2_wall_done`)
«If somebody comes **back** for it» forutsetter at noen har vært der. Det vet bare spilleren, fra Graces tråd (`ch2_toto_home`), og Dana ser ikke hva spilleren skriver til andre. Spilleren får heller aldri sagt det til henne, selv om det er dagens største ledetråd.
*Fiks:* Endre til «If somebody comes for it». Legg til et valg i `ch2_wall_hub` når `grace_man` er satt: «A man from the building came for your things on {weekday:-3d}. Grace didn't let him in.» Dana svarer for eksempel: «Doug doesn't do house calls. Take the note.» Da gir «comes back» mening etterpå.

**D2. Grace har pakket katten før noen har sagt at han skal hentes** (`ch2_toto_yes`)
På denne veien har ingen skrevet til Grace. Likevel står Toto «in the carrier by the door, I packed his food» tjue sekunder etter at spilleren gikk inn. Hun sier også «Tell Dana he missed her» og «Tell her to call her mother» (`ch2_toto_home`), som om desken har kontakt med Dana. Priya har jo sagt til henne at Dana ikke jobber der og at de ikke har noe nummer.
*Fiks:* «If you're here for Toto, his carrier's in the hall closet and his food's under the sink.» Og i stedet for «Tell Dana…»: «Have you heard from her? Anything?» Den siste kan spilleren svare på.

**D3. Klokka 3:12 er rundt 20:00, men Dana snakker om søvn og om å holde seg unna lobbyen** (`ch2_end`, `ch2_sleep_*`, `ch2_rule`)
`{window}` blir ca. 8:00 PM, altså akkurat når spilleren låser desken i lobbyen. Likevel spør Dana «When do you sleep down there?», og svarene handler om natt («Nothing you miss while you sleep…»). Regelen sier «you stay in 11C. You do not go to the lobby», men spilleren sitter i lobbyen til kl. 20. Natt 2 (`ch3_lobby`) løser dette i etterkant, men dag 2 gir spilleren en regel de ikke kan følge.
*Fiks:* Bytt spørsmålet til «When are you off the desk?», med svarene «Eight. I lock up at eight.» / «Whenever I want, nobody checks.» / «Tell me when to be done.» Regelen blir da: «Lock up early tonight. Be in 11C by {window}, door locked.»

**D4. Dag 2 kan begynne på feil tidspunkt i ekte tid** (motoren `nextDay`)
`nextDay` gir kl. 14 eller minst seks timer fram. Ender natt 1 kl. 13:30, kommer «You up?» først 19:30. Da skjer bussturen til Holgate når spilleren skal være på desken. «Evening desk, four to eight» lander etter kl. 23 og blir skjøvet til 08:00 neste dag.
*Fiks:* Dag 2 starter alltid kl. 14 (neste dag hvis klokka allerede er over ca. 10), eller stryk minstekravet på seks timer for `day`. Alternativt kan dag 2 hoppe over turen hvis den starter etter 15.

**D5. LANTERN-døren «I can't open», men kortet åpner alle dører** (`ch2_lantern`, `ch2_rule`)
Natt 1 slo fast at kortet er «coded to the building» og at alle dører har samme leser. Hun har kortet nå.
*Fiks:* «It's the only door up here my card doesn't work on. No reader. Just a keyhole.»

---

## MIDDELS

**D6. Hun sender etterforskningen sin gjennom telefonen hun selv sier at «it» leser** (`ch2_toto_yes`/`ch2_wall_ask` mot `ch2_desk_name`, «It reads over my shoulder»). En oppmerksom spiller spør hvorfor hun vil ha alt på linja. *Fiks:* én setning i `ch2_wall_done`: «Yes, it reads this too. It already knows what's on that wall. Doug's people don't.»

**D7. Marjorie tilbød å fortelle «everything», og Dana gikk aldri** (`ch2_w_plan`). Hun etterforsket i en måned, men takket nei til den eneste som hadde svar. *Fiks:* «She said Sunday. I went up on the Saturday.»

**D8. «renumbered the buttons»** (`ch2_w_plan`). Panelet går 11, 14, så knappene ble ikke nummerert om, de ble tatt bort. *Fiks:* «…and took two buttons off the panel.»

**D9. «The doors open on a floor that looks like home»** (`ch2_rule`). Det hun beskrev i natt 1 og i dag var en beige avdeling fra 1974 med askebegre, ikke noe som ligner hjem. *Fiks:* «The doors open on a floor that looks like yours. Same carpet, same light. It isn't.» (Da må ch3 også stemme med dette.)

**D10. Gjentatte avsløringer.** «This wasn't an apartment building, Desk. Not up here» (`ch2_wristband`) kommer etter at hun allerede har sagt «An institute. It wasn't apartments then» (`ch2_w_clip`). LANTERN-døren presenteres som ny i `ch2_rule` («One more thing. There's a door…»), selv om hun nevnte den i `ch2_lantern`, som alle må gjennom. *Fiks:* «Ashgrove again. It's on the wristband too. Your clipping was right, Desk.» I ch2_rule: «That LANTERN door. I knocked on it.»

**D11. Pianoet og vaskeriet.** «I quit when the laundromat went under» (`ch2_piano_curious`) motsier «Dad died, the laundromat needed hands» (`ch2_game_wrong`). *Fiks:* «I quit when Dad died. Hands were needed elsewhere.»

**D12. «Last night»** (`ch2_w_list` «the three texts you counted last night», `ch2_evening` «wind camera 6 back to last night»). Natt 1 kan ha vært spilt midt på dagen. På politiveien er det to eller flere netter siden. *Fiks:* «the three texts you counted» og «wind camera 6 back to when the car came».

**D13. Danas klokke på dag 2.** Kl. 14 hos spilleren har det gått «four minutes» hos henne (`ch2_start`, rundt 3:16). Fire timer senere er hun «about seven hours ahead» med neste 3:12 kl. 20 (`ch2_end`). Det betyr at klokka hennes har gått nesten et døgn på fire timer. «The clocks drift» dekker det delvis, men «seven hours ahead» høres ut som en fast avstand. *Fiks:* «Right now mine says about one. If it keeps running like this, the next one lands around {window} your time.»

**D14. Bildet `wall_list` har «NIGHTS. 2026» hardkodet,** mens datoene regnes fra ekte klokke. Spilles det i 2027, blir det feil. *Fiks:* bare «NIGHTS», eller regn ut året.

---

## LAV

- **D15.** «I started the week after Ferreira» (`ch2_w_list`) gir tre uker før hun gikk opp, mens natt 1 sier «I spent a month». fakta.md sier ca. dag −48. Velg én: «a few days after Ferreira».
- **D16.** Byggetegninger fra 1979 ligger i byens arkiv, ikke på biblioteket. «The city keeps them. Three dollars a page.»
- **D17.** «let them think I never got past three names and a newspaper», men tegningen blir også hengende. Legg til «and a drawing».
- **D18.** `ch2_w_clip` merker datoen på monitoren med `knows: ["k_floor12"]`. Datoen kommer fra kamerabildet, ikke fra indikatoren. Begge veier ser bildet, så det virker, men et eget merke (`k_monitor_date`, satt på camera6-bildet) er riktigere.
- **D19.** Klokkeslettet `{window}` regnes ut på nytt når natt 2 starter. Ender dag 2 etter kl. 20, kan natt 2 komme senere enn klokkeslettet Dana sa.
- **D20.** `ch2_toto_home` åpner med «Good.» også etter «I'll only be a few minutes.», og der blir det rart. Bruk «All right.»
- **D21.** Hvorfor lå Kevins notatbok i en kasse i en personalleilighet hun aldri brukte? Det løses fint hvis dag 4 forklarer det (for eksempel at hun ikke tålte å ha den hjemme), men det bør stå i fakta.md.

---

## Det som fungerer godt

- Veggen som hub med bilder spilleren selv sender er sterk. Den knytter de fire oppsigelsene, avisa fra 14.11.74 (som stemmer med monitoren hennes, og 15. november 1974 var faktisk en fredag) og betongen sammen.
- Hullet i kamera 6-opptaket er spillerens egen oppdagelse og gir dagen et «jeg undersøker selv»-øyeblikk, slik Ruben ba om.
- Toto-veiene ender alle hos Danas vegg uten å straffe dem som sier nei.
