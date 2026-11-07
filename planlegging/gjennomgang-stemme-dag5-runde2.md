# Gjennomgang runde 2: Danas stemme og dag 5

Dato: 2026-11-07. Grunnlag: upublisert `prototype/story.js` etter Dana-trådens rettelser av de 19 funnene i `gjennomgang-stemme-dag5.md`, pluss bildeteksten i `index.html`. Lest kaldt på nytt, med det samme skriptet som lister alle Dana-linjer med store bokstaver, punktum på slutten eller 🙂. Automatiske gjennomspillinger er ikke kjørt.

**Kort sagt:** 17 av 19 rettelser holder. Én rettelse har laget et nytt hull (Toto-testen på én sti), og én ny linje passer bare på én av stiene i natt 1. Ellers er det noen få småting. Skriptet finner ingen linjer fra den ekte Dana med feil skrivemåte lenger. De som står igjen, er sitater, koder og Priya som skriver fra desktelefonen.

## Nye funn

**N1 (høy). Toto-testen siterer noe spilleren aldri så** (`ch6_t_toto`, sti der Toto hentes på dag 4)
Velger spilleren «I'll ask Mrs. Okonkwo to hang on a few more days» på dag 2 og går til Marjorie på dag 4, får de Toto i `ch5_marjorie_go` (`toto_home` = 1, men ikke `toto_pic`). Da svarer den falske «He's in 11C with you. A saint in a staff residence with a no-pets clause. 🙂». Men den «saint»-linjen står bare i `ch2_toto_text`, som spilleren aldri har vært innom på denne stien. Valget «That's what you wrote on {weekday:-3d}. Word for word.» er dermed feil på to måter: Dana skrev det aldri, og dagen stemmer ikke.
*Forslag:* Sett et eget flagg i `ch2_toto_text` (f.eks. `toto_text`) og bruk «saint»-linjen bare med det. Bruk Danas ord fra dag 4 på stien der Toto hentes da: «He's yours now. Grace has done enough. 🙂» (ordrett fra `ch5_marjorie_go`). Gi den varianten et eget valg med {weekday:-1d}, eller skriv valget uten dag: «That's what you wrote. Word for word. Except now it has capitals.»

**N2 (middels). «Drop the front desk voice» passer bare på én sti** (`ch1_proof`, første linje)
Linjen «and you can drop the front desk voice. capital letters were for residents. doug reads those» kommer på alle stier inn i `ch1_proof`. Den passer etter «This is the front desk at the Calloway. How can I help?» (`ch1_desk`). Etter «Who is this?», «I think you have the wrong number» eller navnestoppet i `ch1_noname` har spilleren ikke brukt noen deskstemme, og «and» henger i løse luften.
*Forslag:* Flytt linjen inn i `ch1_desk`. På de andre stiene kan den bare tas bort. M1 er fortsatt dekket av den ene stien. Vil Dana-tråden ha forklaringen på alle stier, kan den komme et annet sted der spilleren har skrevet formelt.

**N3 (lav). «doug reads those» kan misforstås**
Det kan leses som at Doug leser alt på desktelefonen, også samtalene med Dana. Det ville gitt nye spørsmål på dag 3 og 4 (hvorfor reagerer han ikke på dem?).
*Forslag:* «doug spot-checks the resident threads».

**N4 (lav). «No full stops, promise» inneholder punktum** (`ch7_good`)
«this is dana. my number. the real one. no full stops, promise». Det følger regelen, siden det ikke er punktum på slutten av boblen. Men en spiller som teller punktum, ser tre. Det kan godt være ment som en spøk.
*Forslag:* «no capitals, promise», eller la det stå hvis spøken er meningen.

**N5 (lav). «He's looking at the ceiling» er nesten ordrett** (`ch6_t_toto`, bildestien)
Dana skrev «he's looking at the ceiling. he knows where i am». Den falske legger til «He's in 11C.» foran. Det er greit at den vet det, for spilleren bor i 11C. Men valget sier «Word for word». Det holder, men er litt løst.

## Sjekk av rettelsene fra runde 1

| Funn | Rettelse | Holder? |
|---|---|---|
| H1 Toto bryter regel 2 | Den falske siterer Danas ord ordrett | Ja på tre stier. Nytt hull på dag 4-stien (N1) |
| H2 «I did say that» | Delt i `ch6_tests_intro` / `ch6_tests_questions` → `ch6_tests_q`; myk sti har nå et valg i stedet for systemlinjen; valg 1 gir `doubt` | Ja |
| H3 `dana_real` med store bokstaver | Små bokstaver i `ch7_good` og `ch7_step_back_end` | Ja (se N4) |
| H4 minnekortvalget | `k_storage` i `ch5_photo`, valget betinget | Ja |
| M1 arkivet viser Dana med store bokstaver | Linje i `ch1_proof` | Ja, men bare på én sti (N2) |
| M2 avslørt i første boble | Valget «Since when do you use capital letters?» → `ch6_back_caps` | Ja. Spilleren kan nå si «You're not her.» etter én test til |
| M3 tegnet «går i mørket» | `ch6_t_dark` i huben | Ja |
| M4 hele navnet | `ch7_question_name`: «Dana Reyes» mot «Li Dan Reyes», egne håndvalg | Ja. Godt grunnlag: «li» er fra dag 4, og «Li Dan Reyes» som helhet har aldri stått på telefonen |
| M5 rådet om navnet | Rådet er tatt bort; Dana sier bare at hun hørte det si navnet | Ja |
| M6 koder skrevet små | K.L., L, 11C, 11C | Ja |
| L1 «can't spell» | «without the full stops» i `ch6_which`, `ch7_question`, `ch7_question_gerald`, `ch7_bad`, undertittelen dag 5 og `ch7_swap` | Ja |
| L2 pianovalg 2 | «Your recording on {weekday:-3d} had the F sticking. This one doesn't.» | Ja |
| L3 Dana «kjenner» | «it said it up here. in my voice. i heard it» og «it heard you. the lights up here went out» | Ja |
| L4 svarer før spørsmålet | «ill tell you something it didnt hear» | Ja |
| L5 lobby når | «Lobby at eight.» | Ja |
| L6 klokka | «and it only has the phones clock. yours. it cant keep mine» (bare med `t_clock`) | Ja |
| L7 «staff» | «Residents are different. 🙂» | Ja |
| L8 bildeteksten | «a printed sheet of music» | Ja |
| L9 Priya | «Stay home tonight, lock your door…» | Ja |

## Ting jeg sjekket som holder

- De andre Toto-stiene er ordrette: bildestien siterer `ch2_toto_photo`, stien der Grace beholder ham siterer `ch2_toto_later` («she'll say yes. she always says yes»), og stien uten Toto siterer `ch2_toto_no` («mrs. O will manage»). Dagen {weekday:-3d} stemmer for alle tre.
- `ch7_question` gjengir fortsatt hele Kevins side riktig fra den falske, og det er dekket av det den ekte Dana skrev i `ch6_proof`.
- `doubt` kan nå samles fra ti kilder (store bokstaver, regelbrudd, navn, Toto, piano, Kevin, klokka, mørket, Tom, bildet), så «You're not her.» kommer tidlig nok for en spiller som har sett det med en gang.
- `ch6_night` gir ikke lenger noe løfte som ch7 ikke holder.
