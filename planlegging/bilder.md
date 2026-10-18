# Bilder i «Front Desk»

Alle bilder som sendes i spillet står her, ett oppslag per bilde. Filen oppdateres hver gang et nytt bilde planlegges i story.js, før eller samtidig med at noden skrives. Prototypen tegner foreløpig enkle SVG-plassholdere med samme id; når et bilde er generert, legges filen i `prototype/img/<id>.jpg` og motoren bruker den i stedet.

## Tre kilder, tre utseender (18.10)

Alle bilder i spillet kommer fra én av tre kilder, og det er kilden som bestemmer kvaliteten, ikke «stemningen». Moderne mobilkameraer er skarpe; korn hører bare hjemme der det faktisk oppstår.

1. **Spillerens desk-mobil (2026).** Tatt på vår side: 11C, lobbyen, byen. Skarpt, rent, HDR, naturlige farger. I svakt lys: nattmodus, det vil si glattede skygger og svak, myk støy, eventuelt litt bevegelsesuskarphet fordi det er tatt fort. Aldri filmkorn. Bilder: `toto`, planlagt `clipping_1979`, `sign`.
2. **Danas egen mobil (2026) på Ward 12.** Samme kameraklasse som spillerens, men to ting trekker ned: hun tar bildene i et mørkt 1974-miljø (blits med hard lysflekk og bratt fall mot svart, eller nattmodus uten blits), og bildene sendes over **én strek** dekning, så de kommer frem nedskalert med svak JPEG-kompresjon. Det er den realistiske grunnen til at bildene hennes ser litt «dårligere» ut, ikke korn. Bilder: `ward12`, `wristband`, `chart_room4`, `lindqvist_badge`, `piano` (sendt av den falske, som sender «for godt»: ingen kompresjon, se oppslaget).
3. **Ikke kamerabilder.** Overvåkingsstillbilder og dokumenter. `camera6` er det analoge 1974-kameraet på Danas side: svart-hvitt, scan-linjer, analog støy er riktig her. `lobby_dana` er vårt moderne kamera 6: farger, 1080p, kompresjonsartefakter, ikke korn. Avisutklippet (`clipping_1979`) er trykt papir fotografert med spillerens mobil, altså kilde 1 med raster fra trykken.

## Felles stil (limes inn først i hver prompt)

> Photo taken with a current flagship smartphone (2026), vertical 3:4, computational photography look: sharp, clean, HDR, natural colours, no film grain. In low light: night-mode smoothing, soft luminance noise only in deep shadows, slight hand-held motion blur acceptable. With flash: hard central hotspot and steep falloff to black. Realistic, documentary, unstaged. No people unless stated. No text or watermarks except what is described.

Bilder fra **vår side** (resepsjonen, 11C, byen) er i farger, skarpe og moderne; palett som rommet faktisk har. Bilder fra **Danas side** (Ward 12, 1974) legger til: *«1970s interior frozen in time, ashtrays, wood paneling, a faint green cast from old fluorescent tubes; everything intact but abandoned. Received over a weak signal: slightly downscaled with mild JPEG compression, no grain. Muted palette: beige, institutional green, dark wood, dust.»* Overvåkingsbilder bruker egen stil, se `camera6` og `lobby_dana`.

## Mal

```
### <id>            (samme id som i story.js: image: "<id>")
Hvor:      kapittel/node, hvem sender, hvilken side
Hensikt:   hva bildet skal gjøre med spilleren (én setning)
Må vise:   det historien er avhengig av at man ser
Må ikke:   det som ville avsløre for mye, eller bryte fiksjonen
Caption:   teksten under bildet i appen
Format:    3:4 vertikal (standard) / 4:3 / 16:9 (overvåking)
Prompt:    [felles stil] + motivbeskrivelse, lys, kamera, stemning
Negativ:   det generatoren skal unngå
Status:    planlagt / generert / godkjent
```

---

### camera6
Hvor:      Kap. 1, `ch1_floor12` / `ch1_stubborn`. Sendt av Dana. Egentlig fra 1974-kameraet på hennes side (bibelen §4), men skal se ut som vårt kamera 6.
Hensikt:   Første bevis. Spilleren ser en etasje som ikke finnes.
Må vise:   Tom heislobby ovenfra, heisdører lukket, indikator over døren som lyser «12». Stempel øverst «CAM 06 ELEVATOR LOBBY», tidskode «03:12:41». Tidskoden kan ha år «74» i hjørnet som skjult detalj.
Må ikke:   Vise mennesker eller skygger. Ikke moderne LED-panel; indikatoren er gamle lysende tall.
Caption:   CAM 06 · ELEVATOR LOBBY
Format:    16:9 (overvåking)
Prompt:    Black-and-white CCTV still from a ceiling-mounted security camera, wide-angle lens with barrel distortion, heavy analog noise, horizontal scan lines, slight vignette. Empty apartment-building elevator lobby at night, 1970s decor: terrazzo floor, wood-paneled walls, a single brass ashtray stand. Closed elevator doors in the center; above them a small illuminated floor indicator reading "12" in warm orange segments. Timestamp text in the top left in blocky monospace: "CAM 06  ELEVATOR LOBBY  03:12:41". A small red REC dot top right. No people.
Negativ:   color, people, modern elevator panel, clean image, HDR, text other than described
Status:    planlagt (prototypen tegner SVG)

### ward12
Hvor:      Kap. 2, `ch2_inside`. Danas første bilde fra den andre Calloway. Kilde 2: Danas mobil med blits, sendt over én strek.
Hensikt:   Vise at hun er et sted som er bygget, men feil tiår. Skal føles «stille på feil måte».
Må vise:   Lang sykehuskorridor tatt med mobilblits, dører med små vinduer på begge sider, et skilt på veggen «WARD 12», tapetet/malingen 70-talls. Lyset fra blitsen når ikke enden av korridoren.
Må ikke:   Skitt, forfall, blod. Alt er intakt, bare gammelt. Ingen mennesker, ingen skygger som ligner mennesker.
Caption:   Sent 1 photo
Format:    3:4
Prompt:    [felles stil] [Danas side] Smartphone flash photo down a long hospital ward corridor, linoleum floor in two-tone green, wood-veneer doors with small wired-glass windows on both sides, a white enamel sign on the wall reading "WARD 12" in black sans-serif capitals. Ceiling fluorescent tubes off except one flickering far away. The flash lights the first ten meters sharply; the far end falls off to black. Mild JPEG compression from a weak-signal upload. A wheeled cart with a folded blanket by one door. 1974, pristine but abandoned. No people.
Negativ:   decay, graffiti, horror gore, people, modern signage, daylight, film grain
Status:    planlagt (prototypen tegner SVG)

### wristband
Hvor:      Kap. 2, `ch2_wristband`. Dana finner det under sofaen i dagligstuen. Kilde 2: Danas mobil med blits.
Hensikt:   Første harde bevis på at dette var en institusjon, og første gang ordet LANTERN dukker opp.
Må vise:   Et gulnet pasientarmbånd i plast på et flislagt gulv, fotografert ovenfra med blits. Lesbar tekst: «PT-09 · LANTERN · ASHGROVE». Et lite hull/knekk der det ble klippet av.
Må ikke:   Navn på person. Ikke sykehuslogoer som ligner ekte sykehus.
Caption:   Sent 1 photo
Format:    3:4
Prompt:    [felles stil] [Danas side] Top-down smartphone flash photo of a yellowed 1970s plastic hospital patient wristband lying on a dusty institutional tile floor (small square tiles, grey-green). The band is cracked and curled, printed in faded typewriter-style capitals: "PT-09   LANTERN   ASHGROVE". A snipped end where it was cut off. Harsh flash hotspot, dark edges. Macro, tack sharp on the printed text, slightly soft at the corners. Mild compression. No hands, no people.
Negativ:   real hospital logos, patient name, blood, modern barcode wristband
Status:    planlagt (prototypen tegner SVG)

### toto
Hvor:      Kap. 2, `ch2_toto_home`. Sendt av **spilleren** til Dana. Vår side, kilde 1: spillerens desk-mobil, kveld, lampelys.
Hensikt:   Bevis på at ærendet skjedde, og første varme bilde i spillet. Dana kommenterer at han er feit og at han ser i taket.
Må vise:   En oransje katt med bare ett øre, sittende på en naken madrass i et lite, nakent rom (personalhybel 11C), hodet vendt oppover mot taket. Tydelig at han er litt for rund. Kveldslys fra en enkel lampe.
Må ikke:   Hyggelig innredning (rommet er tomt, spilleren flyttet nettopp inn). Ikke begge ørene.
Caption:   You sent a photo
Format:    3:4
Prompt:    [felles stil] Smartphone snapshot in a small bare bedroom: a plump orange tabby cat with only one ear, sitting upright on a bare mattress on a metal bed frame, head tilted up, staring intently at the ceiling. White walls, one cardboard box, a cheap floor lamp giving warm light, dark window. Modern phone night-mode look: sharp on the cat, smooth shadows, warm cast from the lamp, taken quickly so the tail may be slightly blurred. No people.
Negativ:   two ears, kitten, decorated room, daylight, cat looking at camera, grain, noise
Status:    planlagt (prototypen tegner SVG)

### chart_room4
Hvor:      Dag 4, `ch5_chart`. Sendt av Dana fra legekontoret (Dr. Halloran) på Ward 12. Danas side, kilde 2: mobil med blits, over én strek.
Hensikt:   Spilleren ser med egne øyne at ordet «Desk» står på listen. Beviset for at det andre vet om spilleren.
Må vise:   Baksiden av en gulnet pasientjournal, fotografert ovenfra med blits. En håndskrevet nummerert liste med tretten linjer (én per pasient) i flere ulike håndskrifter og pennetyper (blått og svart blekk, en i blyant), med årstall i margen: 1–4 «74», 5 «87», 6 «03», 7–10 uten år. Nr. 10 «D. Reyes». Nr. 11 «DESK» i blokkbokstaver, tydelig annerledes penn, nesten innrisset. Linje 12 og 13 tomme.
Må ikke:   Lesbare fulle navn på moderne personer utover «D. Reyes». Ikke blod, ikke «skummel» skrift; det uhyggelige er at listen er ordentlig.
Caption:   Sent 1 photo
Format:    3:4
Prompt:    [felles stil] [Danas side] Top-down smartphone flash photo of the back of a yellowed 1970s medical chart lying on a dark wooden desk. A hand-numbered list of thirteen ruled lines, eleven filled in with names written over decades in different pens and handwriting styles (fountain pen, ballpoint, pencil), with small year notes in the margin: "74" beside the first four, "87", "03", then none. Line 10 reads "D. Reyes" in neat ballpoint. Line 11 reads "DESK" in heavy block capitals pressed hard into the paper, a different ink. Lines 12 and 13 are empty. Harsh flash glare on the paper, dark vignette, slight tilt. The handwriting is sharp and legible; mild compression from a weak-signal upload.
Negativ:   full modern names, blood, horror fonts, typed text, clean studio lighting, hands
Status:    planlagt (prototypen tegner SVG)

### lindqvist_badge
Hvor:      Dag 4, `ch5_lindqvist` (valgfri gren, «Who's Lindqvist?»). Sendt av Dana. Danas side, kilde 2: mobil med blits.
Hensikt:   Første bevis på at noen fra vår tid har vært der oppe og ikke kom ned. Og det første hintet om at det andre kan skrive som folk (Lindqvists siste notat).
Må vise:   Et falmet visittkort på et skrivebord: «R. LINDQVIST · Investigations · Portland», liten linje «Ret. PPB», og et telefonnummer. Håndskrevet med penn på kortet: «3:12 · Oct 2003». Ved siden av kanten på en slitt lommebok og et spiralnotathefte.
Må ikke:   Ekte politilogo eller ekte telefonnummer (bruk 555). Ikke bilde av Lindqvist selv.
Caption:   Sent 1 photo
Format:    3:4
Prompt:    [felles stil] [Danas side] Smartphone flash photo, close-up on a dark wooden desk: a faded cream business card reading "R. LINDQVIST" in serif capitals, "INVESTIGATIONS · PORTLAND" beneath, a small line "(503) 555-0199 · ret. PPB", and a handwritten note in blue ballpoint in the corner: "3:12 · Oct 2003". Beside it the edge of a worn brown leather wallet and a cheap spiral notebook. Dust on the desk, flash hotspot, dark corners. Sharp, legible card text. Early-2000s objects on 1970s furniture.
Negativ:   real police badge, real logos, people, photo ID portrait, clean lighting
Status:    planlagt (prototypen tegner SVG)

### piano
Hvor:      Dag 5, `ch6_t_photo` (valgfri test, «Send me a photo of where you are»). Sendt av **den falske Dana**. Danas side, men merk: dette bildet kommer frem i full kvalitet, uten kompresjonen Danas ekte bilder har. Det er det «litt for gode» beviset.
Hensikt:   Bevis som er litt for godt. Det står trykte noter på stativet, men Danas mor lærte henne å spille etter gehør («from a record», dag 2). Spilleren som husker det, avslører stemmen.
Må vise:   Et gammelt, mørkt piano (upright) i en halvmørk dagligstue, lokket åpent, tangentene lyse mot alt det mørke. På notestativet ett trykt noteark fra 1970-tallet, gulnet, med institusjonens stempel nederst. Stolen trukket ut som om noen nettopp reiste seg.
Må ikke:   Mennesker, hender, speilbilder. Ikke støv på tangentene (de er brukt). Ingen moderne gjenstander.
Caption:   Sent 1 photo
Format:    3:4
Prompt:    [felles stil] [Danas side] Smartphone photo without flash in a dim 1970s hospital day room: an old dark-wood upright piano against a wood-paneled wall, lid open, ivory keys catching the only light from a single flickering ceiling tube. On the music stand one yellowed sheet of printed 1970s sheet music with a small institutional rubber stamp at the bottom. The piano stool pushed back as if someone just stood up. A couch and a dial television in the shadows behind. Night-mode look without flash: smoothed shadows, soft warm cast, no grain, perfectly steady and perfectly exposed, as if taken on a tripod. Full resolution, no compression.
Negativ:   people, hands, reflections of a person, dust on keys, modern objects, handwritten music, grain, blur
Status:    planlagt (prototypen tegner SVG)

### lobby_dana
Hvor:      Natt 6, `ch7_good` (den gode slutten). Vises som systembilde i Dana-tråden etter at hun er ute: «She looks straight into camera 6 and waves.» Vår side, ekte kamera 6, i farger.
Hensikt:   Eneste gang spilleren ser Dana. Speiler `camera6` fra kapittel 1: samme vinkel, men farger, indikator «L», og et menneske i bildet.
Må vise:   Samme lobby som `camera6`, nå i farger fra et moderne kamera: terrazzo, treverk, lukkede heisdører, indikator «L» i grønt. En kvinne i slutten av tjueårene, krøllete brunt hår, en for stor strikkejakke fra 70-tallet over sin egen mørke jakke, står midt på gulvet, ser rett opp i kameraet og vinker med den ene hånden. Tidsstempel «CAM 06 ELEVATOR LOBBY L 03:41:07».
Må ikke:   Ansiktet skal være lite og litt uskarpt (overvåkingskamera), ikke et portrett. Ikke skade synlig. Ikke svart-hvitt.
Caption:   CAM 06 · ELEVATOR LOBBY
Format:    16:9 (overvåking)
Prompt:    Colour CCTV still from a ceiling-mounted security camera, wide-angle with barrel distortion, mild compression artefacts, modern 1080p look. An apartment-building elevator lobby at night: terrazzo floor, wood-paneled walls, closed brass elevator doors with a small green floor indicator reading "L". A woman in her late twenties with curly dark hair, wearing an oversized beige 1970s cardigan over a black jacket, stands in the middle of the floor looking straight up into the camera, one hand raised in a small wave. Her face is small in frame and slightly soft. Timestamp top left in blocky monospace: "CAM 06  ELEVATOR LOBBY L  03:41:07". Red REC dot top right.
Negativ:   black and white, close-up portrait, blood, other people, 1970s decor beyond the cardigan, cinematic lighting
Status:    planlagt (prototypen tegner SVG)

---

## Planlagte bilder (ikke skrevet ennå)

- **clipping_1979** (dag 5, systemlinje i `ch6_start`; bilde ikke skrevet ennå): Marjories avisutklipp fra The Oregonian 1979, «CALLOWAY TOWER REOPENS AS CONDOMINIUMS», skjøvet under døren til 11C. Vår side, kilde 1: spillerens mobil i dagslys, skarpt; det eneste «kornet» er trykkrasteret i avispapiret.
- **sign** (dag 3, ikke brukt ennå): skiltet «ELEVATOR OUT OF SERVICE – USE STAIRS» foran heisdørene i lobbyen, vår side, kilde 1: spillerens mobil under lobbyens lysrør, skarpt.
