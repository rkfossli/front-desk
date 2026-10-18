# Logikkrapport: manus v1 (kap. 1–7)

18.10.2026. Gjennomgang av `prototype/story.js` (alle noder, arkivet inkludert) mot `historie.md` (§1, 4, 5, 7, 7b, 7e, 8) og motoren i `prototype/index.html` (`nextNight`, `nextDay`, `avoidQuiet`, `fill`, `passes`, `applySet`). Ingen filer er endret.

Rettelsene fra `logikk-vakt-og-telefon.md` er kontrollert: A1–A9, B, C1–C3 og D1–D7 er alle på plass i manuset og motoren (stille timer 23–08, `night` 21:30–23 → +15 min, `day` ≥ 6 t, `told_priya: 2`, `{window}` i stedet for «3», «Her 3:12» i systemlinjer, «yesterday», «just got home», «Lobby. Just locking up» uten straff). Ett sted glapp (se 6.4). Denne rapporten gjentar ikke de punktene.

Motorfakta som ligger til grunn: `set` **adderer** (så `set: { x: 0 }` gjør ingenting), `if` kan bare ha ett flagg, `{weekday}`/`{date}`/`{time}`/`{window}` fylles ut i leveringsøyeblikket, `endOfChapter.subtitle` fylles ikke ut, og en melding uten `to` lander i Dana-tråden selv om noden har `thread: "tom"`.

Alvor: **høy** = bryter historien eller en test · **middels** = en oppmerksom spiller merker det · **lav** = polish.

---

## Arkivet

1. **`archive.priya`** · «Ignore anything weird in the notes, the last girl had a sense of humor» · Doug ba om overleveringsnotater 6 dager siden («Please leave the handover notes in the bottom drawer»), og «Will do.» er Priyas svar (Dana var borte for lengst). Priya skrev altså notatene selv, men skylder på Dana. · **lav** · Priya: "Ignore anything weird in the logbook, the last girl had a sense of humor."

2. **`archive.carl` / `archive.priya`** · «I quit» (`ago: "21d"`), «Welcome to the Calloway» (`ago: "5d 20h"`) · `ago` regnes fra klokkeslettet spilleren starter. Starter man kl. 20, står «I quit» kl. 20 (skal være 03:14, bibelen §5/§10) og Priyas velkomst kl. 00:00, midt på natta for en dagvakt. Bibelen vet at `at:`-formatet ikke er laget; dette er påminnelsen om at det trengs før testing. · **lav** · Motor: `at: "{date:-21d} 03:14"` for arkivet, og legg Priyas velkomst og Toms pakke på dagtid.

---

## Kapittel 1 · Natt 1

3. **`ch1_plan`** · «my 3:12 is about forty minutes away for you» · `ch1_wait` leverer «It's here.» etter `8m`. En spiller som ser på klokka får heisen 32 minutter for tidlig. Bibelen §7b sier ventetiden i kap. 1 er fiksjonell, men da må replikken og pausen si det samme. · **middels** · Dana: "Then my 3:12 is maybe ten minutes away for you. Don't do the math." (eller `delay: "40m"`).

4. **`ch1_end_police`** · «a number that was disconnected three weeks ago» · Bibelen §3: nummeret er 1974-linjen som ble koblet ut for lenge siden; Walter skriver fra samme linje natt 4. Dana kan heller ikke vite hva telefonselskapet sier om nummeret. · **middels** · Dana: "They'll see an empty lobby and a night guard texting a number the phone company says hasn't existed since 1974."

5. **`ch1_end_police`** · undertittel «Doug will see the call log in the morning.» og `set: { told_police: 1 }` · Loves, men betales aldri: `told_police` leses ingen steder, Doug nevner aldri politiet, og dag 2 er identisk for politigrenen. · **middels** · Legg én linje i `ch4_doug` med `if: { flag: "told_police", min: 1 }`: Doug: "Also: PPB called me about a welfare check from the desk line {weekday:-2d} night. Camera 6 shows an empty lobby. Let's not do that again."

6. **`ch1b_retry`** · «They came, didn't they.» / «I watched the flashlights on the ceiling.» · `ch1b_refuse` går tilbake til `ch1b_retry`, så en spiller som sier «Not tonight» får politilinjene igjen neste kveld, uten at politiet kom igjen. · **middels** · Sett `retry_seen: 1` i `ch1b_retry`-valgene og gi de to første linjene `if: { flag: "retry_seen", max: 0 }`; legg til en linje med `min: 1`: Dana: "Same time. Same doors. I'm still not begging."

7. **`ch1_plan`** · «Open the bottom drawer. Under the logbook there's my key card. Blue lanyard.» · Spilleren har brukt den skuffen i seks dager (Priyas notater og granolabar lå der) uten å se et nøkkelkort med blå snor under loggboka. · **lav** · Dana: "Under the logbook. Taped to the bottom of it. Blue lanyard. Nobody lifts a logbook."

---

## Kapittel 2 · Dag 2

8. **`ch2_toto`** og **`ch2_toto_later`** · «She texted the desk the first week asking where I was. Priya told her I quit.» / «Her number's in this phone, she texted the desk the first week.» · Grace skrev til disken 14 dager siden; Dana har vært oppe i 21. Dana kan se lobbyen på kameraet og merke telefonen, men hun kan ikke lese trådene på den. Hun gjengir en samtale hun ikke kan ha sett. · **middels** · Dana: "She'll have texted the desk by now. She's that kind. Check the phone, her number's in there somewhere." (Grace: "Oh. Well. I'll keep feeding him then." blir da spillerens funn.)

9. **`ch2_game_curious`** · «You and me and a cop in 2003. Great club.» · Dag 3 (`ch4_start`) presenterer listen som ny: «Found something. Room 4 has a chart with a list of names on the back. One of them is from 2003.» Og hun får navnet Lindqvist først dag 4. Dag 2 vet hun ikke om noen politimann. · **middels** · Dana: "You and me and whoever came before us. Great club. Terrible retention."

10. **`ch2_piano`** · «Marjorie heard me through the floor once and sent down cake.» · Marjorie bor i 4B; pianoet står i stua ved lobbyen. Hun kan ikke høre det «gjennom gulvet» tre etasjer ned. Samme mønster i `ch7_good` («I heard the most awful noise through the ceiling», fra 4B om 11/12). · **lav** · Dana: "Marjorie came down in her dressing gown once to tell me the F was flat, and brought cake." / Marjorie natt 6: "Dear, the whole stairwell shook and then nothing at all."

11. **`ch2_rule`** · undertittel «Toto has a new address.» · Vises også når spilleren valgte «ask Mrs. Okonkwo» eller «not crossing town» (`toto_home` = 0). · **middels** · Undertittel kan ikke gates; gjør den nøytral: "Dana is on Ward 12. Tom in 11A hasn't texted yet." (eller la motoren støtte `subtitleIf`).

12. **`ch2_toto_later` → resten av spillet** · «Fine. A few days. Then he's yours.» · Spilleren lover Grace å hente katten «in a few days». Det skjer aldri; Toto er hos Grace til siste melding. Konsekvenser: dag 5 er den falskes «Grace is feeding him» *sann* for denne grenen (testen virker bare via 🐈🐈), og `ch7_desk` «feed the cat» er et ærend spilleren aldri fikk. · **middels** · Enten en kort hentescene dag 4 (`ch5_start`, `if toto_home max 0`: Dana: "and get my cat on the way back. grace has done enough") med systemlinje og `set: { toto_home: 1 }`, eller la Grace skrive natt 5 at hun beholder ham, så løftet lukkes.

---

## Kapittel 3 · Natt 2

13. **`ch3_ready` → `ch3_tom_stay`/`_indicator`/`_hangon`** · «The hallway lights just did the thing where they dim one by one towards the elevator. That's new.» og 40 sekunder senere «it only does that when it's got someone in the car.» · Først er fenomenet nytt, så er det en regel hun kjenner. · **middels** · Dana: "The hallway lights just started dimming one by one towards the elevator. They did that the night I came up. Something's coming up. Or someone."

14. **`ch3_dana_plan_cool`** · «Never mind. It's Tom. The lights only do that for someone it knows.» · Motsier «it only does that when it's got someone in the car» fra samme minutt, og forklarer ikke hvordan hun vet at det er Tom. Hun ser faktisk lobbyen på kamera 6. · **middels** · Dana: "You don't. Nobody has this handled. Never mind. I watched him get in on the monitor. Tom, 11A, the one with the Amazon boxes."

15. **`ch3_tom_photo`**, **`ch3_tom_presses`**, **`ch5_dont`** · «I'm not in the hallway. Desk. I'm in the day room. Whatever he sees isn't me.» / «Tell him to say his own name out loud.» / «its standing where tom said he saw me» · Dana svarer direkte på Toms meldinger («she's waving me over», «the doors aren't closing») som ligger i Toms tråd og aldri er videreformidlet. Hvis Dana kan lese alle trådene på telefonen, er «Who's texting you. Desk. Who.» meningsløst, og hele premisset om at hun bare *merker* telefonen faller. · **høy** · Gi henne egne sanser i stedet: `ch3_tom_photo`: "Desk. Something just walked past the day room door. In my jacket. If he can see it, tell him it isn't me." · `ch3_tom_presses`: "the car's still sitting at the end of the hall with the doors open. i can hear it. Tell him to say his own name out loud. Full name. Then press L again." · `ch5_dont`: "its standing at the end of the hall. where the car opens."

16. **`ch3_name_rule`** · undertittel «The lights in 11C flickered once at 3:12, your time.» · Ward-tid i fortellerstemmen, og «your time» påstår at spilleren opplevde noe kl. 03:12 virkelig tid, mens hele poenget (§7b) er at hennes 3:12 lander i spillerens kveld. · **middels** · "The lights in 11C flickered once when the car came down."

17. **`ch3_lost_end` / `ch3_lost_end_fault`** · `delay: "3h"` → «Go to sleep, Desk. I'll keep looking.» · Natt 2 starter kl. 20, Tom-scenen tar ~10 min, 3 t senere er det ~23:10 → stille timer flytter alt til **08:00**. Dana sier «Go to sleep» kl. 8 om morgenen, og `ch4_start` («At eight you hand Priya the desk phone») lander kl. 14 samme dag. · **middels** · `delay: "2h 30m"` på begge (lander ~22:45), eller skriv om til morgen: "its light down there now isnt it. i still cant find him. go hand priya the phone and sleep."

18. **`ch3_tom_name`** · valget «We'll talk tomorrow.» · Tom skriver aldri igjen på reddet-grenen; samtalen skjer ikke. · **lav** · Enten én Tom-linje dag 3 i `ch4_doug`-tiden ("hey. still taking the stairs. did Doug say anything?") eller endre valget til "You're okay. Take the stairs up tonight."

19. **`ch3_name_rule`**, **`ch4_end`** · «Go to sleep. I mean it.» / «Go to sleep, Desk.» · Begge lander ~20:30. Spilleren sa «Midnight to eight» (`ch2_end`). · **lav** · Dana: "Stay in. Sleep when you can." / "Lock the door, Desk. Marjorie first thing."

---

## Kapittel 4 · Dag 3

20. **`ch4_priya_lie`** · Priya: «she knew my name» · Priya skrev selv «This is Priya at the day desk» før Dana svarte «priya.». · **lav** · Priya: "she told me to put the phone down like she was standing behind me"

21. **`ch4_priya_truth` / `ch4_priya_deflect` → dag 4** · «you owe me the whole thing. tomorrow.» / «I'm bringing coffee and you're bringing the whole story» · Dag 4 har ingen Priya-scene; neste gang hun skriver (`ch6_priya`, dag 5) nevner hun ikke den avtalte samtalen. · **middels** · Én Priya-linje i `ch5_start`-tiden, `if told_priya is 1` / `is 2`: "coffee's on the desk. story's overdue. tonight?" og la `ch6_priya` åpne med "ok so you never gave me the story and NOW your friend is texting MY number??"

22. **`ch4_doug`** · Dana: «Did Priya read any of that.» · Priya svarte på meldingene, så hun har lest dem. Spørsmålet Dana egentlig stiller er om Priya forsto/trodde det. · **lav** · Dana: "Did Priya believe any of that."

23. **`ch4_marjorie_1979`** · valget «Priya put it up before she left.» · Dougs «Please put the sign up tonight» kom ~25 min *etter* at Priya gikk (`ch4_start` 1h30 + `ch4_doug` 25m). På `tom_lost`-grenen ber Doug dessuten ikke om skiltet i det hele tatt. «I put it up myself» har ingen scene (bibelen §7c). · **middels** · Valg 1: "It's been up since this morning. Priya never took it down." Valg 2: "I put it up on my way to lock up. Then straight back to 11C." og legg én systemlinje før Danas «it's 3:12 up here»: "Lock-up. The A-frame sign goes in front of the doors, OUT OF SERVICE, like it's a normal thing to write."

24. **`ch4_desk_name`** · «Someone's going to text you tonight. An old lady from 4B.» · Marjories melding utløses av at hun så spilleren på trappa i 2026. Dana kan ikke vite at det skjer i kveld. · **middels** · Dana: "If an old lady from 4B texts you, talk to her. Marjorie. She's the one who told me to start counting night guards. She was here when they poured the floors."

25. **`ch4_marjorie_1979`** og **`ch4_desk_name`-valgene** · «Tomorrow. Bring the cat.» (ugatet) og valget «Yes, I'd like that. The cat's name is Toto.» (ugatet) · Med `toto_home` = 0 har Marjorie bare sett «a face like a wet week» og vet ikke om noen katt; spilleren kan likevel påstå å ha en. · **middels** · Gate valget på `toto_home min 1`, og del siste linje: `if toto_home min 1`: "Tomorrow. Bring the cat." / `max 0`: "Tomorrow. Bring an appetite."

26. **`ch4_end`** · «Good. Go to sleep, Desk.» · Kommer også etter `ch4_end_nosign` («No. I forgot.» → «then stay inside…»). «Good.» etter at spilleren glemte skiltet leser feil. · **lav** · Flytt «Good.» inn i de to skilt-grenene, eller start `ch4_end` med "Either way." 

27. **`ch4_priya_truth`** · «I covered her shifts for a month» · Dana forsvant for 21 dager siden, spilleren begynte for 6; gapet er ~15 dager, og Priya er dagvakt. · **lav** · Priya: "I did doubles for two weeks."

---

## Kapittel 5 · Dag 4

28. **`ch5_chart_first` / `ch5_marjorie_go`** · «ask her about november 1974. not ashgrove. the date.» · Dana bruker navnet Ashgrove *før* hun leser arkivet (`ch5_lantern`, tre timer senere, er der hun lærer «The Ashgrove Institute»). Marjories «The man who sold it was called Ashgrove» ligger i Marjories tråd, som Dana ikke kan lese. · **middels** · Dana: "ask her about november 1974. the date. not the building, the night." Eller gi henne kilden: "its on the letterhead in every drawer up here. ashgrove. dont ask her about that. ask her about the date."

29. **`ch5_marjorie_go`** · «I found a clipping for you after you left. The Oregonian, the week we moved in. I'll slide it under your door.» · Utklippet dukker aldri opp. · **middels** · Enten en systemlinje i `ch5_start`-området dag 5 ("An Oregonian clipping under the door, 1979: CALLOWAY TOWER REOPENS AS CONDOMINIUMS. A paragraph about 'extensive structural work on the upper floors'.") eller stryk løftet.

30. **`ch5_kevin_tell`** · systemlinje «The last page isn't music. A letter in blue ballpoint…» · Klokka er ~17:30; spilleren sitter ved disken (16–20). Noteboken ligger «on the table where you left it» i 11C (`ch5_start`). Spilleren leser en side som er elleve etasjer unna. · **middels** · `ch5_start`: "The notebook is on the table where you left it. You put it in your jacket without opening it." Da virker også `ch6_t_kevin_caught` ("You get the notebook").

31. **`ch5_kevin_tell`** · «I've never told anyone in this building that. Not Priya. You're the only one who knows it, desk. So if anything ever texts you about Kevin and it isn't me, you'll know.» · Hun har akkurat skrevet navnet Kevin, historien og «dangerous to go alone» på telefonen som «hears the phone» (regel 4; hun sier det selv to timer senere). Testen hun setter opp er dermed falsk, og den falske består den i `ch6_back_prove` («Kevin. The notebook. The one-eared cat.»). Spilleren får ingen mulighet til å påpeke det. Dag 5-testen hviler på at spilleren skjønner at *siden* (systemlinjen) er beviset, men Dana sier det motsatte. · **høy** · Dana: "I've never told anyone in this building that. Not Priya. And I've just typed it on this phone, so now it knows too. It only knows what I typed, desk. The page is in your hands, not mine. Remember which is which."

32. **`ch5_after_kevin_mom`** · «That's what she told the police about me too. 'She does this.'» · Politiet snakket med moren etter Marjories savnetmelding, mens Dana var på Ward 12. Dana kan ikke vite hva moren sa. · **høy** · Dana: "She thinks he went quiet on us. She'll have said the same about me by now. 'She does this.' I can hear her saying it to some cop."

33. **`ch5_machine` → `ch5_silence` / `ch6_night`** · «The door up is chained. From this side.» → «im going to the stair. 13.» → «im on 13.» · Kjettingen forsvinner uten forklaring. · **lav** · Dana i `ch5_silence`: "im going to the stair. 13. theres a fire axe in the hall for a reason."

34. **`ch5_chart`** · «You wanted to see the list. Here.» · Spilleren har ikke bedt om å se den; Dana lovte selv i `ch4_end` å fortelle «what else was on the back of that chart». · **lav** · Dana: "I said I'd show you the list. Here."

35. **`ch5_doug_truth` → `ch7_start`** · «Until then the elevator stays in service» → «Per our chat: elevator's locked out tonight for inspection, and maintenance sealed the old service hatch in 11C this morning.» · Doug snur uten grunn, og vet om et servicepanel i spillerens skap som spilleren selv først hørte om natt 5 og aldri har nevnt for noen. · **middels** · Doug: "Update after our chat: I had the shaft walked {weekday:-1d}. Elevator's locked out tonight, and every old service hatch on 11 and 14 is sealed, yours in 11C included. Old inspection item. Stay at the desk. We'll talk {weekday:+1d}."

36. **`ch5_doug_truth`**, **`ch7_start`** · «you stay at the desk» / «Stay at the desk.» · Samme brist som A6: en sleep-in er ikke ved disken om natta. · **lav** · Doug: "you keep the phone on you and you stay in the building"

37. **`ch5_marjorie_hear`** vs. **`ch2_piano`** · «The one in the lounge didn't come until 1981, I was on the committee.» / «Same piano… Fifty years younger» · Hvordan pianoet kom fra en igjenstøpt avdeling til stua i 1981 forklares aldri; Marjories «The man who sold it was called Ashgrove» er dessuten feil (institutt), uten at noen retter det. Begge kan være Marjories halvsannheter, men en nysgjerrig spiller sitter igjen med spørsmålet. · **lav** · Marjorie: "The one in the lounge came in 1981, I was on the committee. The management had it 'in storage'. They never said where."

38. **`ch5_chart_first`, `ch5_lindqvist`, `ch5_want`** · «no. cake first. im not telling you the rest while youre alone in that flat» / «so that's a thing it can do.» / «to finish. every one it takes it gets more... person.» · Dana veksler mellom små bokstaver og korrekt tegnsetting fra melding til melding midt på dagen, uten at hun er redd. Det svekker dag 5-testen, der spilleren skal lære at små bokstaver = ekte/redd og perfekt = falsk. · **lav** · Hold dag 4 ettermiddag korrekt til og med `ch5_kevin_tell`; la bruddet komme i `ch5_quiet` («desk / the piano's playing»), der hun faktisk blir redd.

---

## Kapittel 6 · Dag 5

39. **`ch6_tests_intro_soft`** · systemlinje «She said never. Never help anyone into the car. Night two, in capital letters.» · Regelen kom dag 2 ettermiddag (`ch2_rule`), i vanlig skrift. De store bokstavene natt 2 var spillerens egne («DON'T GET OUT»). · **middels** · "Something itches. She said never. You do not help anyone into the elevator. Her rule for night two, in her own words."

40. **`ch6_hub` / `ch6_t_rule`** · valget «It opened on L for Tom, and nobody was waiting for him.» og svaret «Tom was lucky. The rules are different for staff. 🙂» · På `tom_lost`-grenen kom Tom aldri ned; «the car's going back down empty» (`ch3_tom_stairs`). Spilleren påstår noe som ikke skjedde, og den falske kaller en tatt mann «lucky». · **høy** · Gate valget på `saved_tom min 1`, og legg til en variant med `tom_lost min 1`: "It came back down empty after Tom, and nobody was waiting for it." → den falske: "The car was empty. The rules are different when nobody is in it. 🙂" (samme `set`).

41. **`ch6_t_photo`** · valget «Sheet music? Your mom taught you by ear. From a record.» · «From a record» er bare sagt på `pq_curious`-stien («a woman who learned from a record», om *moren*). At Dana selv ikke leser noter er aldri sagt noe sted; `ch2_piano_curious` nevner Clementi (noteundervisning), og Kevins notebok er «handwritten sheet music» hun tar vare på. Testen hviler på en opplysning spillet ikke har gitt. · **middels** · Legg i `ch2_piano` (ugatet): "Mom taught me that one by ear on a piano behind our laundromat. She couldn't read a note. Neither can I." og endre valget til "Sheet music? You can't read a note. You told me."

42. **`ch6_priya_yes`** · Priya: «see you at 3 then.» · Ward-tid som B-rettelsene skulle ha tatt; Priya fikk `{window}` i meldingen hun svarer på. · **middels** · Priya: "ok... I guess? see you tonight then. this is so weird"

43. **`ch6_night`** · «it cant spell when its this close to me. look at it. look at how it writes» · Tretti sekunder senere skriver det «Desk, she's lying. It uses my voice.» med perfekt tegnsetting i samme tråd, og systemlinjen påpeker det. Danas påstand motsies umiddelbart. · **middels** · Dana: "it cant keep me out when im this close to the machine. look at how it writes when it comes. the full stops. thats how you tell us apart"

44. **`ch6_proof` → `ch7_question`** · Dana skriver «dont come get me this time» på telefonen natt 5; natt 6 sier den falske «Dangerous to go alone. Take this. 🙂» og den ekte «dont come get me this time». · Etter regel 3/4 har det andre nå hørt hele siden, så at det *ikke* gjenbruker setningen natt 6 er umotivert; testen virker bare fordi det velger å feile. Valget «Take the hand of the one who quoted Kevin properly» er dessuten tvetydig (begge siterer riktig, forskjellige setninger). · **middels** · La begge sitere det samme og la bare skriften skille: falsk: "Dan. Don't come get me this time. It's dangerous to go alone, take this. 🙂" · ekte: "dont come get me this time" · valg 2: "Take the hand of the one with the full stops."

45. **`ch6_proof`** · undertittel «Tomorrow at 3:12 you have to be in exactly one place.» · Ward-tid i fortellerstemmen (B-mønsteret). · **lav** · "Tomorrow, at her 3:12, you have to be in exactly one place."

46. **`ch6_t_photo`** · valget «The camera works now?» · Dana sendte bilder dag 2 og dag 4 (ward12, wristband, chart_room4, lindqvist_badge); kameraet sviktet bare én gang («storage full»). Spørsmålet er et svakt bevis, og svaret «It works for me.» er sant. · **lav** · "Storage full yesterday, and now a photo? What changed?"

---

## Kapittel 7 · Natt 6

47. **`ch7_start`** · «You don't sleep much. Toto does.» (`if told_mgmt max 0`) · Ikke gatet på `toto_home`; Toto ligger i 11C selv når han er hos Grace. · **middels** · Del linjen i to med `toto_home` (motoren tillater bare ett flagg per `if`, så det blir fire varianter) eller stryk «Toto does.».

48. **`ch7_start`** (`told_mgmt`) · «Someone has been here while you slept.» · Harlows folk har skrudd stålbånd i skapet mens spilleren sov i samme rom. · **lav** · "Someone has been here. Priya says maintenance let themselves in at nine while you were dead to the world; she assumed you knew."

49. **`ch7_evening`** · «Up here it is nearly 3:12. The hum starts under the floor of 11C» · Fortelleren sier «Up here» om Ward (skal være «up there»), og summingen kommer «under the floor» selv om alt annet («You sleep right under it», «Whatever you hear through the ceiling») legger den i taket. · **middels** · "{time}. Up there it is nearly 3:12. The hum starts in the ceiling of 11C, so low it's more in your teeth than your ears."

50. **`ch7_lobby`** · «Priya is in the lobby in her coat with two coffees» (`if priya_risk min 1`) · Gates på `priya_risk`, ikke `priya_home`. Spilleren som sa «Priya, don't come. Stay home tonight» og fikk «...ok» (`ch7_priya_home`) finner henne likevel i lobbyen, og hun kan bli tatt i `ch7_step_back`. · **høy** · Siden `set` adderer: `ch7_priya_home` → `set: { priya_home: 1, priya_risk: -1, trust: 1 }`. Da er `priya_risk` 0 og begge systemlinjer stemmer.

51. **`ch7_question_name`** vs. **`ch7_step_back`** · «two voices say 'Dana Reyes' at once… it can say my name. it heard tom say his. ask something else» / «i said my own name at it. all of it. li dan reyes. it let go» · I skapet er navnet verdiløst; på trappa er fullt navn våpenet som får det til å slippe. Og «Dana Reyes» er ikke «all of it». Natt 2 var regelen at *den som sier sitt eget navn* reorienteres, så den ekte Dana burde kunne bruke det her også. · **middels** · Enten gjør navnet til en gyldig test (falsk: "Dana Reyes." · ekte: "li dan reyes" · system: "One of them says all of it.") eller la Dana forklare hvorfor hun ikke kan: "if i say it here it lets go of me and i fall. ask something else"

52. **`ch7_good`** · «a piano crashes shut eleven floors of concrete away» · Pianoet står på 12, én etasje over 11C. Elleve etasjer er avstanden fra lobbyen. · **middels** · "a piano crashes shut one floor and fifty years away"

53. **`ch7_bad`** · «Good night, ██████.» (`if told_name max 0`) og «Thank you for the name. Nobody had given me one before.» · (a) `told_name` leses her men settes ingen steder; «Tell her your name»-valget fra bibelen §3 er ikke skrevet. (b) Med `told_name` = 0 kjenner det andre et navn det aldri har fått, mot regel 3 («kan ikke finne på, bare gjenbruke»), som hele dag 5 bygger på. Undertittelen («a word you never typed») gjør bruddet til poenget, men spillet har brukt fire dager på å lære spilleren det motsatte. · **høy** · Enten skriv «Tell her your name»-valget (f.eks. i `ch6_proof` eller `ch5_after_kevin`, `set: { told_name: 1 }`) og la 0-varianten være "Good night, Desk. For now. 🙂" · eller gjør det eksplisitt at spilleren *ble tatt* i skapet (regel 3: det lærer av sjelen det tar): "The hand is warm and dry. It does not pull. It steps through you." og la sluttmeldingene gå til en tom disk.

54. **`ch7_swap`** · «I quit. Sorry for the short notice.» (`me: true`, uten `to`) og «the desk phone buzzes once on the counter where you left it» · Meldingen lander i Dana-tråden (nummer 0147), men bibelen §5 og arkivet (`archive.carl`: Danas «I quit») legger oppsigelsene i Doug-tråden; det er der neste vakt skal finne den. Og spilleren har «phone on you» hele spillet; ingen scene legger den på disken. · **middels** · `to: "carl"` på meldingen; systemlinje: "You put the phone down on the counter to free both hands for the doors. The doors close on ten."

55. **`ch7_step_back`** · «Priya steps into the space where the car was, to look up the shaft. The doors open again. She is in it when they close.» · Heisen har alt gått opp; dørene åpner på en tom sjakt som Priya går inn i, så er hun «i den». Regel 1 sier dessuten at det bare tar den som er i heisen kl. 3:12, og 3:12 er passert. · **middels** · "The car comes back down, empty, and opens. Priya steps in to look at the panel, because somebody should. She is still in it when the doors close. Up there it is still 3:12. It has been for some time."

56. **`ch7_desk`** vs. **`ch7_step_back`** · «the panel. you werent there. i couldnt open it from this side» / «The closet panel is open on the coats, and Dana Reyes is sitting against the dresser» · På trappe-slutten åpner Dana panelet alene (med brukket arm); på disk-slutten kan hun ikke. · **middels** · `ch7_desk`: "the panel. i got it open and you werent behind it. the room was dark and it was already coming down the stairs behind me so i went back up. it doesnt let me through alone"

57. **`ch7_desk`** · Doug: «Elevator's being locked out for good as of today, structural inspection, no ETA.» · Uten `told_mgmt` har Doug ingen grunn til å stenge for godt akkurat denne morgenen. · **middels** · Systemlinje før Doug: "You write it in the logbook. All of it, in order, with times. Priya reads it at eight and calls Doug before she calls you." · eller gate teksten: `told_mgmt min 1`: "Per our chat…", `max 0`: "Morning. Harlow's decided: elevator's locked out for good, structural, no ETA. Priya says you had a rough night. Take the day."

58. **`ch7_closet`** · «when i get to the panel there will be two of us. dont look at our faces. ask the question» · Ingen «the question» er avtalt; `ch6_proof` sluttet midt i «dont hold any». · **lav** · Dana: "ask us something. look at how we write it, not what"

59. **`ch7_good`** · undertittel «For the first time in fifty-two years it's true.» · 2026 − 1974 er hardkodet; bibelen §10 sier at relative uttrykk skal brukes. · **lav** · "For the first time since 1974 it's true."

60. **`ch7_step_back_end`** · «Arm's broken. Toto's fine.» · Ugatet; med `toto_home` = 0 er Toto hos Grace og Dana har ikke sett ham. · **lav** · `if toto_home min 1`: "Arm's broken. Toto's fine." · `max 0`: "Arm's broken. Going to get my cat."

---

## Flagg (på tvers)

61. Flagg som settes og aldri leses, selv om bibelen lover en virkning: `why_need` / `why_curious` / `why_lost` (§8: «farge Danas replikker senere»), `sleep_normal`, `sign_up`, `told_police` (se 5), `saved_tom` / `told_tom` (−1 hvis spilleren dekket over; ingen konsekvens), `priya_warned`, `knows_truth`, `knows_mom` («for after», ingen etter), `proof_real`, `dana_hurt`. `told_name` leses men settes aldri (se 53). `told_okonkwo: 0` og `believes_fake: 0` er no-ops fordi `set` adderer. `fed_toto` settes to ganger på hentegrenen (blir 2; ufarlig). · **lav** · Enten bruk dem (én farget Dana-linje per `why_*` dag 4, én Tom-linje for `told_tom`) eller fjern dem så ingen leter etter konsekvensen.

---

## Gjennomgående mønstre

- **Dana vet ting hun bare kunne vite ved å lese telefonen.** Grace↔Priya-tråden (8), Toms meldinger (15), Marjories tekst om Ashgrove (28), morens svar til politiet (32), at Marjorie vil skrive i kveld (24). Bibelen gir henne to sanser: kamera 6 og «telefonen gjør noe når du skriver». Hver gang hun trenger mer, bør det komme fra noe hun ser *oppe* (mimikken i gangen, heisdørene, lysene) eller fra at spilleren faktisk videreformidler.
- **Testene dag 5/6 hviler på informasjon som også er skrevet på telefonen.** Dana sier selv at «it hears the phone», men setter opp Kevin som hemmelighet etter å ha skrevet den (31), og natt 5 skriver hun selve siden (44). Prinsippet fra §7 («bare systemlinjer og virkelighet») må håndheves i Danas egne replikker, ikke bare i knutepunktet.
- **Grener som ikke følger flaggene.** `toto_home` (11, 25, 47, 60), `tom_lost` (40), `priya_home` (50), `told_mgmt` (57). Rotårsak: linjer skrevet for hovedstien og aldri lest med det andre flagget satt. En rask test: spill hver slutt med `toto_home` 0, `tom_lost` 1 og `priya_home` 1.
- **Løfter uten utbetaling.** Politiets besøk (5), Priyas «tomorrow» (21), Marjories utklipp (29), Toms «we'll talk» (18), henting av Toto (12), `why_*`-farging (61). Hvert løfte i en tråd bør ha en node der det innfris eller nevnes som brutt.
- **Ward-tid og romlige avstander i fortellerstemmen.** «3:12, your time» (16), «Tomorrow at 3:12» (45), «eleven floors away» (52), «under the floor» (49), Marjorie som hører alt gjennom tak og gulv fra 4B (10). Systemlinjene er spillerens kropp; de må bruke spillerens klokke og spillerens geografi.
- **Danas stemme på dag 4 undergraver dag 5.** Vekslingen mellom små bokstaver og perfekt tegnsetting midt på en rolig ettermiddag (38) gjør at den falskes perfekte skrift ikke stikker like tydelig ut. Hold henne korrekt til hun blir redd, og la bruddet være informasjon.
