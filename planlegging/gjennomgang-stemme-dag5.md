# Gjennomgang: Danas stemme og dag 5

Dato: 2026-11-07. Grunnlag: upublisert `prototype/story.js` (2455 linjer), regler i `fakta.md` («Danas stemme og tegnene på den falske»), `navneregelen.md`. Lest kaldt som en spiller. Ingen spillfiler er endret. Automatiske gjennomspillinger er ikke kjørt i denne gjennomgangen; alt under er funnet ved lesing og et skript som lister alle Dana-linjer med store bokstaver, punktum på slutten eller 🙂.

**Kort sagt:** Stemmen sitter nesten overalt. Fire små skrivefeil i koder, og avslutningsmeldingene fra den ekte Dana (`dana_real`) er fortsatt skrevet med store bokstaver og punktum. Dag 5 har to tester som bryter spillets egen regel om at den falske bare vet det som er skrevet på telefonen (Toto og «I did say that»), én test som viser et valg spilleren ikke har grunnlag for (minnekortet), og skrivemåten avslører den falske allerede i første boble, ikke til slutt.

## Høy

**H1. Toto-testen bryter regel 2** (`ch6_t_toto`, `ch6_t_toto_caught`, når `toto_home` = 1)
Den falske sier «Grace is feeding him». Men spilleren har selv skrevet til Dana på telefonen at Toto er i 11C: enten et bilde av ham eller «Got him. He's in 11C.» (`ch2_toto_back`), og Dana svarte på det. Dag 2 sier Dana rett ut at «it's read everything we've sent today» (`ch2_desk_name`), og dag 5 bruker den falske selv ting fra telefonen («The one-eared cat»). Etter spillets egen regel ville den visst hvor Toto er. Testen lærer spilleren feil regel rett før finalen.
*Forslag:* La den falske svare riktig, men med Danas egne ord, ordrett. Det er tegnet «gjentar Danas linjer» fra planen. For eksempel: «He's in 11C with you. Grace fed him like a grandmother. 🙂». Spillerens valg: «You said that on {weekday:-3d}. Word for word.» → doubt. På stien uten Toto: «Grace has him. She always says yes. 🙂» (ordrett fra `ch2_toto_later`, hvis den stien er gått; ellers en annen ordrett Toto-linje). Dropp de to katteemojiene, eller behold dem bare som et ekstra lite tegn.

**H2. «I did say that» svarer på noe som ikke er skrevet** (`ch6_tests_intro`, `ch6_tests_intro_soft`)
Alle tre valgene i `ch6_ask` fører til linjen «I did say that. I was wrong about the rules.»
- Etter «Something's off. Humor me with a few questions first.» har ingen sagt noe den kan svare «I did say that» på.
- Etter «Of course. Tell me exactly what to do.» kommer en systemlinje med spillerens egne tanker («Something itches. She said never…»), og den falske svarer på tanken. Da hører den tanker, ikke bare telefonen. Det bryter regel 2.
*Forslag:* Del noden. Valg 1 → «I did say that…». Valg 3 → «Questions? Of course. 🙂». Myk sti: gjør systemlinjen om til et valg spilleren sender («Wait. You said never help anyone into that elevator.»), og la «I did say that» komme etter det. Gi også valg 1 `doubt: 1`, ikke bare `trust`, siden det er det tydeligste regelbruddet på hele dagen.

**H3. Den ekte Dana skriver med store bokstaver i to av sluttene** (`ch7_good`, `ch7_step_back_end`, tråden `dana_real`)
«This is Dana. My number. The real one, with the terrible spelling.», «You owe me breakfast, Desk.», «Toto says thanks.», «Arm's broken. Toto's fine. …». Alt med store bokstaver og punktum. `fakta.md` sier at regelen gjelder `dana_real` også. Akkurat her, der spilleren nettopp har lært at punktum betyr den falske, leser en spiller den gode slutten som om det andre slapp ut.
*Forslag:* Små bokstaver uten punktum på slutten: «this is dana. my number. the real one. no full stops, promise», «you owe me breakfast desk», «toto says thanks», «arms broken. totos fine. we need to talk about priya». Hvis store bokstaver her er ment som en vri, må Ruben ta det valget, og da må slutten si det.

**H4. Minnekortvalget dukker opp uten grunnlag** (`ch6_t_photo`, valg 2)
«Storage full on {weekday:-1d}, and now a photo?» vises på alle stier. Men «camera says storage full» står bare i `ch5_photo`. Velger spilleren «Don't. Stay in the office» (`ch5_dont`) eller «Go. But text me every ten seconds» (`ch5_go`), har de aldri hørt om det.
*Forslag:* Sett et flagg i `ch5_photo` (f.eks. `k_storage`) og vis valget bare med det (`knows: ["k_storage"]`).

## Middels

**M1. Arkivet viser Dana med store bokstaver** (`archive`: Marjorie-tråden)
De to første trådene spilleren må lese, er Danas jobbmeldinger: «Hi Marjorie, sorry about that! It's the whole block…», «Back on! Let me know if the fridge acts up.». Altså store bokstaver, punktum og utropstegn. En nøye spiller vet dermed at Dana *kan* skrive slik, og da er skrivemåten ikke noe sikkert bevis.
*Forslag:* Gjør det til en del av historien. Én linje fra Dana natt 1 eller dag 2, for eksempel når spilleren svarer formelt: «you can drop the front desk voice. capital letters were for residents. doug reads those». Da forklarer det også hvor den falske har lært stemmen sin: den skriver som desktelefonen, fordi den har lest arkivet.

**M2. Den falske avslører seg i første boble, ikke til slutt** (`ch6_start`)
Etter over 300 bobler i små bokstaver, og Lindqvists «It wrote to Carol as me. Perfect spelling» (`ch5_lindqvist`, som alle stier går gjennom), kommer «Desk. I'm okay. I'm so sorry.» med store bokstaver, punktum og etterpå 🙂. Spilleren ser det med en gang. Men spilleren kan ikke si det: «You're not her.» krever `doubt` ≥ 2, og ingen av de første valgene peker på skrivemåten. Det føles som å bli holdt igjen, og planen om at skrivemåten bare skal være *den siste bekreftelsen* holder ikke i praksis.
*Forslag:* Legg til et valg i `ch6_start`: «Since when do you use capital letters?» → den falske: «New phone habits. Autocorrect. 🙂» (`doubt: 1`). Da får spilleren gjøre noe med det de har sett, og testene blir bevisene. Alternativt kan Ruben bestemme at det skal være dramatisk ironi, men da bør «You're not her.» kunne velges tidligere.

**M3. Tegnet «går ikke i mørket» kan ikke brukes** (`ch6_hub`)
Planen sier at den falske ignorerer at Dana alltid går i mørket. Spilleren har fått det mange ganger («i have to go dark now. it hears the phone» `ch1_plan_2`, «dont text me. it hears you» `ch5_silence`), og den falske skriver «We have all day. 🙂». Men det finnes ikke noe valg i huben for å påpeke det.
*Forslag:* Nytt hub-valg: «You always go dark. It hears the phone. Now you have all day?» → «It's quiet today, Desk. 🙂» (`doubt: 1`).

**M4. Dana sier ikke hele navnet sitt når spilleren ber om det** (`ch7_question_name`)
Spilleren skriver «Say your full name. Out loud.» Begge stemmene sier «Dana Reyes». Men på en annen sti (`ch7_step_back`) slipper hun ved å si «li dan reyes» høyt, og spilleren vet fra dag 4 at «li is our real family name». Hvorfor sier hun det ikke her, når hun blir bedt om det?
*Forslag:* La én stemme si «Li Dan Reyes» og den andre «Dana Reyes». Systemlinje: «One of them says all of it. The other stops where the phone stopped.» Da lønner navneregelen seg i finalen. Hvis hun ikke kan si det her, må teksten si hvorfor.

**M5. Rådet om å si navnet høyt kan aldri brukes** (`ch6_night` med `told_name`)
«if it touches you tomorrow, say your name out loud. all of it.» Men ingen node i ch7 gir et slikt valg. Spilleren som har gitt bort navnet, får et råd som ikke kan følges.
*Forslag:* Et handlingsvalg «Say your full name. Out loud.» i `ch7_swap` (før dørene lukkes) eller i `ch7_bad` når `told_name` = 1, med en egen variant av slutten. Eller fjern rådet og behold bare advarselen.

**M6. Fire koder ble gjort små ved en feil**
- `ch5_kevin_tell`: «K.l. is kevin li» → «K.L.»
- `ch2_rule`: «keep pressing l» → «L»
- `ch6_proof`: «be in 11c» → «11C»
- `ch7_step_back`: «desk. desk the panel. 11c. run» → «11C»

## Lav

**L1. «Can't spell» betyr feil ting** (`ch6_which` «the one who cant type», `ch7_question` og `ch7_question_gerald` «the one who can't spell», `ch7_bad` «someone who cannot spell», `ch7_good` «terrible spelling», undertittel dag 5 «One of them can spell.»)
Den ekte Dana staver riktig hele veien («judgmental», «characterological»). Det som skiller dem, er store bokstaver og punktum. I det siste valget i spillet kan spilleren lure på hvem som «can't spell».
*Forslag:* «the one without full stops» / «the one who doesn't capitalize». Lindqvists linje om staving kan stå, den handler om Ray.

**L2. Pianovalg 2 avslører ingenting** (`ch6_t_piano`, «Who's playing while you're holding the phone?»)
Dag 2 tok Dana selv opp og sendte etterpå, på samme måte. Valget fører likevel til «caught», og systemlinjen «You go down to the lounge and press the F» følger ikke av spørsmålet.
*Forslag:* Bytt til «Your recording on {weekday:-3d} had the F sticking. This one doesn't.»

**L3. Dana vet ting hun «kjenner»** (`ch6_night` «you gave it your name. i felt it take it»; `ch6_knew` «it was so angry when you said that»)
Det kan godtas, siden hun holder i maskinen, men det går på tvers av regelen i `fakta.md` om at hun bare vet det hun ser eller blir fortalt.
*Forslag:* «it said your name up here. in my voice. i heard it» gjør det til noe hun hører.

**L4. Dana svarer før spilleren har spurt** (`ch6_which` → `ch6_proof`)
«ask me something it didnt hear», og så svarer hun på Kevin-spørsmålet uten at det er stilt.
*Forslag:* «ill tell you something it didnt hear», eller et valg «The last page.» imellom.

**L5. Når skal spilleren være i lobbyen?** (`ch6_believe`, valget «Lobby at 3:12.»)
Den falske sier «Sign down before eight», Priya hører «at eight», og det skjer på spillerens kveld. «Lobby at 3:12» får spilleren til å tro at det gjelder 03:12 på sin egen klokke.
*Forslag:* Valget «Okay. I believe you. Lobby at eight.»

**L6. Klokketesten trenger en forklaring etterpå** (`ch6_t_clock`)
Testen er rettferdig: spilleren har hørt «the clocks don't agree» (`ch1_plan`), «my clock doesn't keep yours» (`ch2_end`) og «it's 2:50 up here» (`ch3_start`). Men den falske har også lest «my clock doesn't keep yours» på telefonen, så en nøye spiller lurer på hvorfor den ikke later som.
*Forslag:* Én linje i `ch6_night`: «it only has the phones clock. yours. it cant keep mine».

**L7. «The rules are different for staff»** (`ch6_t_rule`)
Tom bor i 11A, han er ikke ansatt. Leses som at den falske tar feil, men det er uklart om det er meningen.
*Forslag:* «Tom was lucky. Residents are different. 🙂», eller behold det hvis det er et bevisst tegn.

**L8. Bildeteksten i prototypen sier håndskrevne noter** (`index.html`, `piano()` aria-label «a handwritten sheet of music»)
`bilder.md` sier trykte noter, og håndskrevne noter peker mot Kevins notatbok. Bytt til «a printed sheet of music».

**L9. «Go home, lock your door»** (`ch6_priya`, valg 1)
Meldingen kommer rundt kvart på fem, etter at Priya er ferdig 16. Hun er kanskje allerede hjemme. «Stay home tonight, lock your door» passer bedre.

## Er testene på dag 5 rettferdige?

| Tegn | Node | Har spilleren fått vite nok? | Vurdering |
|---|---|---|---|
| Hjelpe noen inn i heisen | `ch6_ask` | Ja: «you don't help anyone into the elevator» (`ch2_rule`, alle stier) | Rettferdig, men gir ikke `doubt` (H2) |
| Spør etter navnet | `ch6_tests_intro` → `ch6_name_*` | Ja: `ch2_desk_name` (obligatorisk) og eventuelt `ch1_noname` | Rettferdig og sterkt |
| Vet bare det som er skrevet: Kevins side | `ch6_t_kevin` | Ja: hele siden vises i `ch5_kevin_tell`, og Dana sier «it hasn't seen that. remember that» | Det beste beviset på dagen |
| Klokka | `ch6_t_clock` | Ja, tre ganger (L6) | Rettferdig |
| F-en sitter ikke | `ch6_t_piano` | Ja: `ch2_piano` og «the F is right» i `ch5_quiet` (alle stier) | Rettferdig; valg 2 er svakt (L2) |
| For perfekt bilde, noteark | `ch6_t_photo` | Ja: «she couldn't read a note. neither can i» (`ch2_piano`) | Rettferdig hvis notearket synes i bildet; valg 2 mangler grunnlag (H4) |
| Toto | `ch6_t_toto` | Spilleren *har* skrevet hvor Toto er | Bryter regelen (H1) |
| Går ikke i mørket | finnes ikke | Ja, mange ganger | Mangler et valg (M3) |
| Skrivemåten | `ch6_night`, `ch7_closet` | Ja, men arkivet sier noe annet (M1) | Synes fra første boble (M2) |

## Ting som holder

- `ch7_question`: den falske gjengir hele Kevins side riktig i finalen. Det stemmer, fordi den ekte Dana skrev «dont come get me this time», «take this» og «he wrote dan» i `ch6_proof`, og «It's dangerous to go alone, take this» i `ch5_kevin_tell`. Godt gjort, og en nøye spiller kan merke det.
- `ch6_back_prove`: alt den falske bruker som «bevis», er skrevet på telefonen før.
- `ch7_swap`: oppsigelsen er skrevet perfekt, akkurat som de gamle.
- Navneregelen og `told_name` henger sammen fra `ch6_name_told` til «Good night, ██████.».
- Åpningen av natt 1 («are you there?») og Danas bruk av apostrofer, rolig og redd, leser naturlig i små bokstaver. Sitater i '…' har beholdt store bokstaver overalt.
