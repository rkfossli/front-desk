# Endringsliste manus v21 (18.10.2026) – logikkrevisjon

Grunnlag: faktaboka (fakta.md), egen gjennomgang av alle noder, og den uavhengige rapporten logikk-manus-v1.md (61 funn). 101 endringer i story.js, 2 i motoren (index.html). Testet med ti automatiske gjennomspillinger med ulike flagg; alle kapitler går gjennom.

## Hva Dana kan vite (de alvorligste)
- Dana svarer ikke lenger på ting som bare står i Toms tråd. I stedet ser hun det selv oppe: kopien går forbi dagromsdøra i jakka hennes; hun hører heisen stå med åpne dører i enden av gangen. (ch3_tom_photo, ch3_tom_presses, ch5_dont)
- Dana vet ikke lenger hva Grace og Priya skrev til hverandre («She'll have texted the desk by now, she's that kind. Check the phone»), eller hva moren sa til politiet («She'll have said the same about me by now»).
- Dana nevner ikke «a cop in 2003» dag 2 eller «Ashgrove» dag 4 før hun har lest arkivet.
- Dana spår ikke at Marjorie tekster i kveld; hun sier «when Marjorie gets to you, and she will».
- Hun vet hvem Tom er fordi hun så ham gå inn på monitoren.

## Testene dag 4–6
- Kevin-testen: Dana sier nå selv at telefonen vet alt hun har skrevet, og at *siden* i spillerens jakke er beviset («Remember which is which»). Spilleren tar notatboken med seg dag 4.
- Pianotest: det er sagt i klartekst dag 2 at Dana ikke kan lese noter; valget dag 5 viser til det.
- «Tom»-testen finnes nå i to varianter: en for reddet Tom og en for tapt Tom («It came back down empty after Tom»).
- Natt 6: begge siterer samme setning; bare skriften skiller («Take the hand of the one with the full stops»). Danas forklaring på hvorfor hun ikke sier navnet sitt i trappa.
- Falsk Danas plan gjelder «tomorrow night», ikke «tonight» (den sa før «tonight», men ingenting skjedde den kvelden).
- Ekte Dana sier «the full stops. thats how you tell us apart» og innrømmer at Det hører skapplanen («it hears this too. cant help that»).

## Klokke og sted
- Ingen «Go to sleep» kl. 20 lenger; Dana sier «lock your door».
- Dag 3: spilleren sov ikke etter Tom-natta, gir Priya telefonen kl. 08; Priya gir den tilbake kl. 16 (ikke 15:35).
- Dana er «about seven hours ahead» (ikke åtte). Natt 1: «maybe ten minutes away» (pausen er 8 min).
- Skiltet: «It's up. Went up when Doug texted» (Priya kunne ikke ha satt det opp). Doug sier «Out of Service sign» første gang.
- Dag 4 slutter med «You lock up without looking at the indicator» (spilleren står i lobbyen kl. 20).
- Natt 6: «Up there it is nearly 3:12. The hum starts in the ceiling of 11C». Pianoet smeller «one floor and fifty years away». Marjorie hørte lyden «in the walls».
- Priya går inn i heisen som kommer ned igjen, ikke i en tom sjakt.
- tom_lost: Dana sier «Go to sleep» ved 23:40, ikke 08:00 neste morgen.

## Grener som ikke fulgte flaggene
- Priya sendt hjem natt 6 står ikke lenger i lobbyen (priya_risk nulles).
- Toto-linjer er gatet overalt: natt 6-morgen, Marjories «Bring the cat»/«Bring an appetite», valget «The cat's name is Toto», Danas sluttmelding («Going to get my cat»).
- Doug i «Closed for good» har to varianter avhengig av om spilleren sa sannheten.
- Doug vet ikke om panelet i skapet uten grunn: han «had the shaft walked» og forseglet alle gamle luker på 11 og 14. Priya slapp vedlikeholdet inn kl. 09.
- Dana motsier seg ikke om panelet: i desk-slutten fikk hun det opp, men spilleren var ikke der.

## Løfter som nå innfris
- Politibesøket natt 1: Doug nevner det dag 3.
- Tom tekster dag 3 (to varianter etter hva spilleren sa til ham).
- Priyas «you owe me the story»: hun minner om det dag 4 og åpner med det dag 5.
- Marjories utklipp ligger under døra dag 5.
- Toto hentes dag 4 på «vent noen dager»-grenen.
- Tom får en slutt på tom_lost-grenen (kommer ut av trappesjakten i den gode slutten / «tom came down the stairs behind me»).
- Natt 1 på nytt (politigrenen) gjentar ikke politilinjene.

## Verden
- Listen har tretten linjer (én per pasient), ti navn før spilleren. Bildet og bilder.md oppdatert. «thirteen lines, thirteen patients. it wants the set».
- Dana er født Li Dan; mor giftet seg igjen med Hector Reyes, Dana tok navnet, Kevin beholdt Li.
- Pianoet: ingen piano i bygget da Marjorie flyttet inn; loungepianoet kom fra et lager i 1981 og «came with the building» (forklarer at F-en henger på begge).
- Dana skriver etter redningen fra et nytt nummer (egen tråd). «I quit» går til Doug-tråden, og spilleren legger telefonen på disken før hun går inn.
- Nøkkelkortet var teipet under loggboka («Nobody lifts a logbook»).
- Dana kaller heiskupeen «the car» (vaktsjargong fra håndboka); alle andre sier «elevator». Dette er nå en bevisst regel i faktaboka.
- Småting: Priya «I did two weeks», «she told me to put the phone down like she was standing behind me», «Did Priya believe any of that», Doug «keep the phone on you and stay in the building», kjettingen på 13-døra nevnes, undertitler uten Ward-tid og uten hardkodet «fifty-two years».

## Motor
- `if` kan nå være en liste av betingelser (alle må passere), både på meldinger og valg.
- Journalbildet tegner tretten linjer.

## Bevisst ikke endret
- Danas veksling mellom små bokstaver og vanlig tegnsetting i rolige stunder: den ekte Dana er uformell; det entydige kjennetegnet på den falske er smilefjes og punktum etter hvert ord, og det sier Dana selv natt 5.
- Flagg som settes uten å leses (why_*, sleep_normal, knows_truth, knows_mom, proof_real, dana_hurt): ufarlige, kan brukes senere.
- Arkivets klokkeslett (ago regnes fra starttidspunkt): krever `at:`-format i motoren; står på lista.
