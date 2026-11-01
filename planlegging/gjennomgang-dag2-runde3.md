# Gjennomgang av dag 2, runde 3

Dato: 2026-11-01. Grunnlag: det upubliserte utkastet i /mnt/project-files/prototype/story.js. Det er sammenlignet linje for linje med versjonen fra runde 2, og bare de åtte endrede linjene er nye.
Kun rapport. Danas stemme er holdt utenfor.

**Maskinsjekk:** 144 374 tilstander fra ch2_start til ch3_start. Ingen brudd på kunnskapsmerkene, ingen blindveier og ingen rå koder.

## R1–R5

| Punkt | Holder? |
|---|---|
| R1 låsetid | Ja ved normal spillgang. Regelen, `ch2_sleep_normal` og `ch2_sleep_late` sier nå alle at desken låses tidlig. Se S1 for et unntak. |
| R2 ukedagen | Ja. «that weekend … before the weekend came» er uavhengig av når man spiller. |
| R3 Grace | Ja. `grace_away` settes bare av «She's just away», og Grace svarer med «If she's just away…». «You came sooner than you said» passer. |
| R4 døren øverst i trappen | Ja. Spørsmålet fra natt 1 er besvart. |
| R5 frivillige hubvalg | Står som notat til dag 3–4. Ingen endring er nødvendig nå. |

## Nye punkter

### LAV

**S1. «quarter to eight» kan allerede være passert** (`ch2_rule`). {window} kan bli 8:45 PM hvis spilleren kommer til slutten av dag 2 mellom 20:00 og 21:30 (sen leser, eller dag 2 tatt igjen etter jobb). Da ber Dana spilleren låse et klokkeslett som er passert. *Fiks:* en ordlyd som virker uansett klokkeslett: «Lock up as soon as we're done here. Be in 11C by {window} with the door locked.» Det samme gjelder «Eight's too close» i `ch2_sleep_normal`: «Lock up early tonight» holder.

**S2. Døren øverst i hovedtrappen mangler i fakta.md.** Den har nå nøkkelhull og ingen kortleser, akkurat som LANTERN-døren. Den må føres inn i §1 (Etasje 12), så dag 4 ikke gjør den til servicetrappen eller lar kortet åpne den.

**S3. Setningen «the one door up here my card doesn't work on. Two, counting the one at the top of the stairs.»** retter seg selv midt i setningen. Det kan godt være Danas stemme, men leser man den raskt, ser den ut som en skrivefeil. Valgfritt: «…stenciled on a door my card doesn't work on. That one and the one at the top of the stairs. No reader. Just a keyhole.»

## Konklusjon

Dag 2 er klar til publisering. S1 er en rask ordendring, og S2 er bare oppdatering av faktaboka. Jeg fant ingen nye logikkhull.
