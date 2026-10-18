// Front Desk — story data. The app engine (index.html) never knows the plot;
// it only reads this file. Delays are written in human units: "4s", "90s", "8m", "3h", "1d".
window.NIGHTDESK_STORY = {
  meta: {
    title: "Front Desk",
    building: "The Calloway",
    playerLabel: "Front Desk",
    // How many archived threads the player must open before the story starts.
    threadsToReadBeforeStart: 2,
    startDelayAfterReading: "5s"
  },

  // Old threads that already sit on the shared desk phone. `ago` is relative to "now".
  archive: [
    {
      id: "marjorie", name: "Marjorie Patel · 4B", saved: true,
      messages: [
        { from: "them", text: "Hi, is the power out on the whole 4th floor or is it just me??", ago: "24d 21h" },
        { from: "me", text: "Hi Marjorie, sorry about that! It's the whole block. PGE says it's a transformer, ETA about 45 min. I'll text you when it's back.", ago: "24d 20h 55m" },
        { from: "them", text: "Thank you Dana you're a star 🙏", ago: "24d 20h 52m" },
        { from: "me", text: "Back on! Let me know if the fridge acts up.", ago: "24d 20h" },
        { from: "them", text: "All good. Night!", ago: "24d 19h 58m" }
      ]
    },
    {
      id: "tom", name: "Tom Okafor · 11A", saved: true,
      messages: [
        { from: "them", text: "Hey, can you let me know if an Amazon package shows up for me today? It's a birthday present, don't want it sitting out in the lobby.", ago: "5d 9h" },
        { from: "me", text: "Of course, Tom. I'll text you the second it lands.", ago: "5d 8h 58m" },
        { from: "me", text: "It's here! Holding it behind the desk for you.", ago: "5d 3h" },
        { from: "them", text: "Legend. Be down in 10.", ago: "5d 2h 57m" }
      ]
    },
    {
      id: "hotwater", name: "+1 (503) 555-0192", saved: false,
      messages: [
        { from: "them", text: "Is this the front desk? There's no hot water in 7C", ago: "8d 6h" },
        { from: "me", text: "Yes it is! Maintenance reset the boiler at 6, it should be hot again within the hour. Sorry about the cold shower.", ago: "8d 5h 57m" },
        { from: "them", text: "lol thanks", ago: "8d 5h 50m" }
      ]
    },
    {
      id: "parking", name: "+1 (971) 555-0133", saved: false,
      messages: [
        { from: "them", text: "Someone's parked in my spot. Space 22. Blue Subaru.", ago: "4d 2h" },
        { from: "me", text: "On it. I'll leave a note and check the visitor log.", ago: "4d 1h 58m" },
        { from: "me", text: "It's a guest of 9F, they're moving it now. Sorry for the hassle!", ago: "4d 1h 40m" },
        { from: "them", text: "👍", ago: "4d 1h 39m" }
      ]
    },
    {
      id: "lena", name: "Lena Brightwater · 2F", saved: true,
      messages: [
        { from: "them", text: "Hi! Did anyone turn in a set of keys with a little fox keychain?", ago: "3d 4h" },
        { from: "me", text: "Yes! Safe and sound here at the desk.", ago: "3d 3h 58m" },
        { from: "them", text: "Oh thank god. Coming down now", ago: "3d 3h 57m" }
      ]
    },
    {
      id: "priya", name: "Priya · Day Desk", saved: true,
      messages: [
        { from: "them", text: "Hi!! Priya here, day desk. Left the handover notes in the bottom drawer and a granola bar on top of them. Welcome to the Calloway 🙂", ago: "5d 20h" },
        { from: "me", text: "Thank you! Found both.", ago: "5d 19h" },
        { from: "them", text: "Ignore anything weird in the logbook, the last girl had a sense of humor", ago: "5d 18h 50m" }
      ]
    },
    {
      id: "okonkwo", name: "+1 (503) 555-0218", saved: false,
      messages: [
        { from: "them", text: "Hello, this is Grace Okonkwo, Dana's neighbor on Holgate. She hasn't been home in a week and her cat is crying. Is she working extra shifts?", ago: "14d 15h" },
        { from: "me", text: "Hi Grace, this is the day desk. Dana doesn't work here anymore, sorry. I don't have another number for her.", ago: "14d 14h 40m" },
        { from: "them", text: "Oh. Well. I'll keep feeding him then.", ago: "14d 14h 35m" }
      ]
    },
    {
      id: "walter", name: "CApitol 3-0147", saved: false,
      messages: []
    },
    {
      id: "dana_real", name: "+1 (971) 555-0362", saved: false,
      messages: []
    },
    {
      id: "carl", name: "Doug Haskett (Mgmt)", saved: true,
      messages: [
        { from: "me", text: "I quit", ago: "21d" },
        { from: "them", text: "Dana? Call me in the morning please.", ago: "20d 18h" },
        { from: "them", text: "Reminder: new night guard starts {weekday:-6d}. Dana's last shift was {date:-21d}. Please leave the handover notes in the bottom drawer.", ago: "6d 12h" },
        { from: "me", text: "Will do.", ago: "6d 11h" },
        { from: "them", text: "Also the elevator inspection got pushed again. Just put the sign back up if it does the thing.", ago: "2d 5h" },
        { from: "me", text: "Which thing?", ago: "2d 4h 50m" },
        { from: "them", text: "Reminder: your on-call week starts tomorrow. Seven days, desk phone stays on you day and night. Priya has the landline. Desk 4 to 8, lock up at 8.", ago: "1d" }
      ]
    }
  ],

  // The incoming story thread.
  contact: { name: "+1 (503) 555-0147", saved: false },

  start: "ch1_start",

  nodes: {
    ch1_start: {
      messages: [
        { text: "Are you there?", delay: "0s", notify: true },
        { text: "Please. I know someone's at the desk. I can see the lamp on the monitor up here. Don't ask me how yet.", delay: "6s", notify: true }
      ],
      choices: [
        { text: "Who is this?", goto: "ch1_who" },
        { text: "This is the front desk at the Calloway. How can I help?", goto: "ch1_desk", set: { trust: 1 } },
        { text: "I think you have the wrong number.", goto: "ch1_wrong", set: { trust: -1 } }
      ]
    },

    ch1_who: {
      messages: [
        { text: "Dana. I worked the desk. Nights. Before you.", delay: "5s" },
        { text: "They told you I quit, right?", delay: "4s" }
      ],
      choices: [
        { text: "They said you moved away.", goto: "ch1_proof" },
        { text: "Nobody told me anything.", goto: "ch1_proof", set: { trust: 1 } }
      ]
    },

    ch1_desk: {
      messages: [
        { text: "Dana Reyes. I had your job until three weeks ago.", delay: "5s" },
        { text: "Check the logbook. Bottom drawer. {date:-21d}. My handwriting stops in the middle of a sentence.", delay: "7s" }
      ],
      goto: "ch1_proof"
    },

    ch1_wrong: {
      messages: [
        { text: "It's not. This number is the desk phone.", delay: "4s" },
        { text: "I used to be the one holding it.", delay: "5s" },
        { text: "Dana. Nights. Before you.", delay: "3s" }
      ],
      goto: "ch1_proof"
    },

    ch1_proof: {
      messages: [
        { text: "I need you to do something and I need you to not ask why yet.", delay: "8s" },
        { text: "Look at camera 6. The elevator lobby. What floor is the elevator on?", delay: "6s" },
        { system: "The desk monitor cycles through the cameras to your left. It stops on 6. The lobby is empty. Above the elevator doors, the floor indicator reads 12.", delay: "5s" }
      ],
      choices: [
        { text: "It says 12.", goto: "ch1_floor12", set: { knows_floor: 1, curiosity: 1 } },
        { text: "I'm not looking at anything until you tell me what's going on.", goto: "ch1_stubborn", set: { trust: -1 } }
      ]
    },

    ch1_floor12: {
      messages: [
        { text: "Okay. Okay.", delay: "4s" },
        { text: "Then it's starting again.", delay: "3s" },
        { image: "camera6", caption: "CAM 06 · ELEVATOR LOBBY", delay: "9s" },
        { text: "There is no 12. The panel goes 11, 14. You've noticed that.", delay: "6s" }
      ],
      goto: "ch1_clock"
    },

    ch1_stubborn: {
      messages: [
        { text: "Fair.", delay: "5s" },
        { text: "Three weeks ago I took the elevator up at 3:12. It didn't stop at 11. It didn't stop at 14.", delay: "9s" },
        { text: "I'm still up here.", delay: "6s" },
        { image: "camera6", caption: "CAM 06 · ELEVATOR LOBBY", delay: "7s" }
      ],
      goto: "ch1_clock"
    },

    ch1_clock: {
      messages: [
        { text: "What time is it down there?", delay: "5s" }
      ],
      choices: [
        { text: "{time}", goto: "ch1_plan" },
        { text: "Why does that matter?", goto: "ch1_plan", set: { curiosity: 1 } }
      ]
    },

    ch1_plan: {
      messages: [
        { text: "Good. Then my 3:12 is maybe ten minutes away for you. Don't do the math. The clocks don't agree up here, and yours is the one that's wrong.", delay: "4s" },
        { text: "I'm sending you what it sounds like up here. Don't play it loud.", delay: "6s" },
        { audio: "hum", duration: 11, delay: "4s", set: { heard_hum: 1 } },
        { text: "That's not a fan. It comes up through the floor every night at 3:12. You feel it in your teeth before you hear it.", delay: "14s" },
        { text: "When my clock says 3:12, the car will come down to L and open. Nobody will be in it.", delay: "12s" },
        { text: "Do not get in.", delay: "3s" },
        { text: "Open the bottom drawer. Taped to the bottom of the logbook there's my key card. Blue lanyard. Nobody lifts a logbook. I left it there on purpose. I only meant to look.", delay: "8s" },
        { text: "When the doors open, put the card on the floor of the car. Then step back and keep the phone on you. I need you to tell me what the indicator does.", delay: "10s" },
        { text: "I have to go dark now. It hears the phone.", delay: "9s" },
        { status: "offline" }
      ],
      choices: [
        { text: "Dana? What hears the phone?", goto: "ch1_wait", set: { curiosity: 1 } },
        { text: "Okay. I'll be ready.", goto: "ch1_wait", set: { trust: 1 } },
        { text: "This is a prank and I'm done.", goto: "ch1_wait", set: { trust: -1 } }
      ]
    },

    // The long gap. In the real game this is the actual wait until 3:12.
    ch1_wait: {
      messages: [
        { text: "It's here.", delay: "8m", notify: true },
        { text: "Doors are opening. Please.", delay: "15s", notify: true }
      ],
      choices: [
        { text: "Put the key card in the elevator.", goto: "ch1_end_card", set: { card_in_elevator: 1, trust: 1 } },
        { text: "Get in the elevator.", goto: "ch1_death_elevator" },
        { text: "I'm calling the police.", goto: "ch1_end_police", set: { told_police: 1, trust: -2 } }
      ]
    },

    ch1_death_elevator: {
      messages: [
        { system: "You step inside. The doors close before you can turn around." },
        { system: "The phone buzzes in your hand. There is no signal. The indicator does not say L anymore." },
        { text: "no no no i said dont", delay: "2s" },
        { status: "offline" }
      ],
      deadEnd: { rewindTo: "ch1_wait", label: "Rewind to 3:12" }
    },

    ch1_end_card: {
      messages: [
        { system: "You drop the key card on the floor of the elevator and step back. The doors close on their own." },
        { system: "The indicator climbs. 9. 10. 11." },
        { system: "12. The indicator stays there." },
        { text: "Tell me what it says.", delay: "6s" }
      ],
      choices: [
        { text: "It stopped on 12.", goto: "ch1_end_card_2", set: { knows_floor: 1 } },
        { text: "It went past 11 and the number isn't on the panel.", goto: "ch1_end_card_2", set: { curiosity: 1 } }
      ]
    },

    ch1_end_card_2: {
      messages: [
        { text: "Then it reached me.", delay: "35s", notify: true },
        { text: "I have my card. That means the doors up here open for me again.", delay: "7s" },
        { text: "I'll write when it's safe. It might be a while. Keep that phone on you. Don't let Doug shut it off.", delay: "9s" },
        { status: "offline" }
      ],
      endOfChapter: { title: "End of Chapter 1", subtitle: "Dana has her key card. The elevator hasn't come back down.", next: "ch2_start" }
    },

    ch1_end_police: {
      messages: [
        { text: "They'll come. They'll look at camera 6.", delay: "6s" },
        { text: "They'll see an empty lobby and a night guard texting a number that doesn't exist.", delay: "8s" },
        { system: "The elevator doors close on their own. The indicator stays on L." },
        { text: "I'll try again tomorrow. If it lets me.", delay: "20s", notify: true },
        { status: "offline" }
      ],
      endOfChapter: { title: "End of Chapter 1", subtitle: "Dana is still up there. Doug will see the call log in the morning.", next: "ch1b_retry" }
    },

    // ---------- Night 1b: only for players who called the police. Next 3:12, same choice, no way around it. ----------
    ch1b_retry: {
      messages: [
        { text: "They came, didn't they.", delay: "night", notify: true, if: { flag: "retry_seen", max: 0 } },
        { text: "I watched the flashlights on the ceiling. From up here the lobby is a ceiling.", delay: "9s", if: { flag: "retry_seen", max: 0 } },
        { text: "Same time. Same doors.", delay: "night", notify: true, if: { flag: "retry_seen", min: 1 } },
        { text: "It's 3:11 up here. I'm not going to beg twice.", delay: "12s" },
        { text: "Doors.", delay: "60s", notify: true }
      ],
      choices: [
        { text: "Put the key card in the elevator.", goto: "ch1b_card", set: { card_in_elevator: 1, retry_seen: 1 } },
        { text: "Get in the elevator.", goto: "ch1_death_elevator" },
        { text: "Not tonight.", goto: "ch1b_refuse", set: { trust: -1, retry_seen: 1 } }
      ]
    },

    ch1b_refuse: {
      messages: [
        { text: "ok", delay: "20s" },
        { text: "then i'll be here", delay: "6s" },
        { status: "offline" }
      ],
      endOfChapter: { title: "Night 1, again", subtitle: "The doors closed on an empty elevator. Dana didn't say goodnight.", next: "ch1b_retry" }
    },

    ch1b_card: {
      messages: [
        { system: "You drop the key card on the floor of the elevator and step back. The doors close on their own." },
        { system: "The indicator climbs. 9. 10. 11." },
        { system: "12." },
        { text: "Then it reached me.", delay: "35s", notify: true },
        { text: "I have my card. The doors up here open for me again.", delay: "7s" },
        { text: "Thank you. I mean it. Even if you made me wait a night.", delay: "8s" },
        { text: "I'll write when it's safe. Keep that phone on you. Don't let Doug shut it off.", delay: "9s" },
        { status: "offline" }
      ],
      goto: "ch2_start"
    },

    // ---------- Day 2: Toto, the free room, the piano. Dana explores Ward 12; the player gets to know her. ----------
    ch2_start: {
      messages: [
        { text: "You up?", delay: "day", notify: true },
        { text: "Sorry. Sleep-in now, I heard. Doug was already talking about it when I left.", delay: "8s" },
        { text: "I'm in. The card worked. I've been walking for what feels like an hour and the clock on the wall says it's been four minutes.", delay: "14s" }
      ],
      choices: [
        { text: "I'm here. Are you okay?", goto: "ch2_inside", set: { trust: 1 } },
        { text: "Where have you been? It's been hours down here.", goto: "ch2_inside" },
        { text: "Dana, what is that place?", goto: "ch2_inside", set: { curiosity: 1 } }
      ]
    },

    ch2_inside: {
      messages: [
        { text: "I'm okay. Define okay. I'm not bleeding.", delay: "6s" },
        { text: "It's the building. Same hallways, same stupid narrow windows. Wrong decade. Everything's beige and there's an ashtray on every table.", delay: "12s" },
        { image: "ward12", caption: "Sent 1 photo", delay: "9s", set: { saw_photo: 1 } },
        { text: "Nobody's here. I keep wanting to write 'everybody's here' and I don't know why.", delay: "11s" },
        { text: "Before anything else. I need a favor and it's going to sound insane given the circumstances.", delay: "10s" }
      ],
      choices: [
        { text: "Anything.", goto: "ch2_toto", set: { trust: 1 } },
        { text: "Go on.", goto: "ch2_toto" },
        { text: "You're trapped on a floor that doesn't exist and you need a favor?", goto: "ch2_toto_joke" }
      ]
    },

    ch2_toto_joke: {
      messages: [
        { text: "yes", delay: "4s" },
        { text: "this is me multitasking", delay: "3s" }
      ],
      goto: "ch2_toto"
    },

    ch2_toto: {
      messages: [
        { text: "I have a cat. Toto. Orange, one ear, judgmental.", delay: "6s" },
        { text: "My neighbor Mrs. Okonkwo will have been feeding him since I didn't come home. She'll have texted the desk by now too, she's that kind. Check the phone.", delay: "13s" },
        { text: "Her lease doesn't allow pets and her landlord is the kind who counts. She can't keep doing it.", delay: "9s" },
        { text: "I need him somewhere I know. 4017 SE Holgate, unit 3. Key's under the dead fern. Don't judge the fern.", delay: "10s" },
        { text: "Take him to your place.", delay: "5s" }
      ],
      choices: [
        { text: "I'll go get him today.", goto: "ch2_toto_yes", set: { fed_toto: 1, trust: 2 } },
        { text: "I'll ask Mrs. Okonkwo to hang on a few more days.", goto: "ch2_toto_later", set: { fed_toto: 1 } },
        { text: "Dana, I'm not crossing town for a cat right now.", goto: "ch2_toto_no", set: { trust: -2 } }
      ]
    },

    ch2_toto_yes: {
      messages: [
        { text: "Okay.", delay: "6s" },
        { text: "Okay. Thank you.", delay: "4s" },
        { text: "He bites when he's happy. Don't take it personally. Text me when you've got him.", delay: "7s" },
        { text: "I'm going to look at the rest of this floor while you're gone.", delay: "6s" },
        { status: "offline" },
        { system: "Bus 17 to SE Holgate. Unit 3 has a dead fern, a key under it, and a very loud cat behind the door.", delay: "1h 30m" },
        { to: "okonkwo", text: "Are you the one from the building? I saw you go in. This is the only number I have for you people, the one Dana gave me. He's in the carrier by the door, I packed his food. Tell Dana he missed her.", delay: "20s", notify: true }
      ],
      thread: "okonkwo",
      choices: [
        { text: "Yes, that's me. Thank you for looking after him, Grace.", goto: "ch2_toto_home", set: { trust: 1 } },
        { text: "Got him. I'll let her know.", goto: "ch2_toto_home" }
      ]
    },

    ch2_toto_home: {
      messages: [
        { to: "okonkwo", text: "Good. She's a good girl, that one. Tell her to call her mother.", delay: "9s" },
        { system: "Back in 11C. Toto walks the whole room once, then sits on the bed and stares at the ceiling.", delay: "40m" }
      ],
      choices: [
        { text: "Send photo", goto: "ch2_toto_photo", image: "toto", caption: "You sent a photo", set: { fed_toto: 1, toto_home: 1 } },
        { text: "Got him. He's in 11C.", goto: "ch2_toto_text", set: { fed_toto: 1, toto_home: 1 } }
      ]
    },

    ch2_toto_photo: {
      messages: [
        { text: "oh", delay: "25s", notify: true },
        { text: "oh he's fat. Grace has been feeding him like a grandmother.", delay: "6s" },
        { text: "He's looking at the ceiling. He knows where I am.", delay: "8s" },
        { text: "Thank you. I mean it.", delay: "5s" },
        { text: "🐈", delay: "3s" }
      ],
      goto: "ch2_perk"
    },

    ch2_toto_text: {
      messages: [
        { text: "You're a saint. A saint in a staff residence with a no-pets clause.", delay: "25s", notify: true },
        { text: "Does he sit and look at the ceiling? He does that at home with the upstairs neighbor. Up here that's me.", delay: "10s" },
        { text: "🐈", delay: "3s" }
      ],
      goto: "ch2_perk"
    },

    ch2_toto_later: {
      messages: [
        { text: "She'll say yes. She always says yes. That's the problem.", delay: "7s" },
        { text: "Fine. A few days. Then he's yours. Her number will be in that phone somewhere.", delay: "8s" }
      ],
      thread: "okonkwo",
      choices: [
        { text: "Hi Grace, it's the front desk at the Calloway. Could you keep Dana's cat a few more days? I'll come get him.", goto: "ch2_toto_later_2" }
      ]
    },

    ch2_toto_later_2: {
      messages: [
        { to: "okonkwo", text: "A few days is fine. He misses her. Is she alright?", delay: "3m", notify: true }
      ],
      thread: "okonkwo",
      choices: [
        { text: "She's alright. She's just away.", goto: "ch2_perk", set: { told_okonkwo: 0 } },
        { text: "I honestly don't know yet.", goto: "ch2_perk", set: { trust: 1 } }
      ]
    },

    ch2_toto_no: {
      messages: [
        { text: "ok", delay: "30s" },
        { text: "No, you're right. You don't know me. I asked a stranger to adopt my cat from a haunted hallway.", delay: "2m" },
        { text: "Forget it. Mrs. O will manage.", delay: "8s" },
        { text: "Different question, then. The room they gave you. That one's about you, not the cat.", delay: "15s" }
      ],
      goto: "ch2_perk"
    },

    ch2_perk: {
      messages: [
        { text: "The free room is the one real perk of the job. 'Staff residence, utilities included.' I never used it.", delay: "9s" },
        { text: "Toto doesn't do elevators, and I don't do no-pets clauses. I kept a box of stuff in the closet and that was it.", delay: "10s" },
        { text: "Which unit did they give you?", delay: "5s" }
      ],
      choices: [
        { text: "11C.", goto: "ch2_11c" },
        { text: "Why does it matter which unit?", goto: "ch2_11c", set: { curiosity: 1 } },
        { text: "I'd rather not say.", goto: "ch2_11c_careful", set: { trust: 1 } }
      ]
    },

    ch2_11c_careful: {
      messages: [
        { text: "Good instinct. Keep it.", delay: "5s" },
        { text: "It's 11C though. They always give 11C. 'Top residential floor, for response time.'", delay: "9s" }
      ],
      goto: "ch2_sleep_under"
    },

    ch2_11c: {
      messages: [
        { text: "11C. They always give 11C. 'Top residential floor, for response time.'", delay: "7s" }
      ],
      goto: "ch2_sleep_under"
    },

    ch2_sleep_under: {
      messages: [
        { text: "And now it's sleep-in, so you don't even get to say no to the room. Doug's idea. Cheaper than someone awake in the chair, and closer to it.", delay: "10s" },
        { text: "You sleep right under it. I need you to know that.", delay: "8s" },
        { text: "Tom in 11A says the ceiling hums. He thinks it's the HVAC.", delay: "7s" },
        { text: "Did they clear my box out of the closet?", delay: "9s" }
      ],
      choices: [
        { text: "The closet was empty when I moved in.", goto: "ch2_drawer" },
        { text: "I haven't looked. What was in it?", goto: "ch2_drawer", set: { curiosity: 1 } }
      ]
    },

    ch2_drawer: {
      messages: [
        { text: "Doesn't matter. Clothes, a lamp, a plant I killed. Doug's people are efficient.", delay: "8s" },
        { text: "Do one thing for me. The dresser. Pull the bottom drawer all the way out. It doesn't go all the way back.", delay: "10s" },
        { system: "You pull the drawer out. A thin notebook is wedged behind it. Handwritten sheet music. Inside the cover, in marker: K.L. — DON'T TOUCH.", set: { found_notebook: 1 } }
      ],
      choices: [
        { text: "There's a notebook. Sheet music. Who's K.L.?", goto: "ch2_notebook_who", set: { curiosity: 1 } },
        { text: "Found it. I'll keep it safe.", goto: "ch2_notebook_safe", set: { trust: 1 } },
        { text: "You hid a notebook behind a drawer? Who are you, a spy?", goto: "ch2_notebook_joke", set: { spark: 1 } }
      ]
    },

    ch2_notebook_who: {
      messages: [
        { text: "Later.", delay: "12s" },
        { text: "I'll tell you later. Not because it's a secret. Because I can't type it in a hallway like this.", delay: "9s" },
        { text: "Don't read the last page. Please.", delay: "6s" }
      ],
      goto: "ch2_piano"
    },

    ch2_notebook_safe: {
      messages: [
        { text: "Thank you.", delay: "6s" },
        { text: "Don't read the last page. Not yet.", delay: "5s" }
      ],
      goto: "ch2_piano"
    },

    ch2_notebook_joke: {
      messages: [
        { text: "lol", delay: "5s" },
        { text: "a spy who dropped out of high school and lives with a one-eared cat. the agency has standards.", delay: "8s" },
        { text: "It's not hidden. It fell. I didn't go back for it because I didn't want to be in that room longer than I had to.", delay: "10s" },
        { text: "Don't read the last page.", delay: "5s" }
      ],
      goto: "ch2_piano"
    },

    ch2_piano: {
      messages: [
        { text: "You know the piano in the lounge off the lobby? The brown upright nobody tunes, behind the plant.", delay: "2h", notify: true },
        { text: "It's up here too. Same piano, in a day room at the end of the hall. Couches, a TV with a dial. Fifty years younger and still out of tune.", delay: "12s" },
        { text: "Long nights down there. It was nice to have something to do on the rounds besides check doors. I used to play it at four when the building was asleep. Marjorie in 4B heard me once, God knows how, and sent down cake.", delay: "14s" },
        { text: "Here. Don't laugh.", delay: "6s" },
        { audio: "piano", duration: 14, delay: "40s" },
        { text: "Mom taught me that one by ear on a piano behind our laundromat. She couldn't read a note. Neither can I. I'm rusty. And the F sticks. Up here and down there.", delay: "12s" }
      ],
      choices: [
        { text: "That was beautiful.", goto: "ch2_piano_warm", set: { spark: 1, piano_q: 1, pq_warm: 1 } },
        { text: "You play? I didn't expect that.", goto: "ch2_piano_curious", set: { curiosity: 1, piano_q: 1, pq_curious: 1 } },
        { text: "Should you be making noise up there?", goto: "ch2_piano_careful", set: { trust: 1, piano_q: 1, pq_careful: 1 } }
      ]
    },

    // Ask-more hub: the other piano questions stay available until the player moves on or has asked all three.
    ch2_piano_hub: {
      messages: [],
      choices: [
        { text: "That was beautiful.", goto: "ch2_piano_warm", set: { spark: 1, piano_q: 1, pq_warm: 1 }, if: { flag: "pq_warm", max: 0 } },
        { text: "You play? I didn't expect that.", goto: "ch2_piano_curious", set: { curiosity: 1, piano_q: 1, pq_curious: 1 }, if: { flag: "pq_curious", max: 0 } },
        { text: "Should you be making noise up there?", goto: "ch2_piano_careful", set: { trust: 1, piano_q: 1, pq_careful: 1 }, if: { flag: "pq_careful", max: 0 } },
        { text: "What else is up there?", goto: "ch2_wristband" }
      ]
    },

    ch2_piano_warm: {
      messages: [
        { text: "It was a sticky F in a dead building. But thank you.", delay: "7s" },
        { text: "Nobody's said that to me in a while. Toto's a tough crowd.", delay: "6s" }
      ],
      goto: [{ if: { flag: "piano_q", min: 3 }, goto: "ch2_wristband" }, { goto: "ch2_piano_hub" }]
    },

    ch2_piano_curious: {
      messages: [
        { text: "Six years of lessons from my mom, who learned from a record. We did Clementi and Teresa Teng. In that order, every night.", delay: "10s" },
        { text: "I quit when the laundromat went under. Hands were needed elsewhere.", delay: "8s" }
      ],
      goto: [{ if: { flag: "piano_q", min: 3 }, goto: "ch2_wristband" }, { goto: "ch2_piano_hub" }]
    },

    ch2_piano_careful: {
      messages: [
        { text: "lol you sound like my mother", delay: "6s" },
        { text: "It knows where I am. Noise doesn't change that.", delay: "8s" },
        { text: "Silence is what it listens for.", delay: "5s" }
      ],
      goto: [{ if: { flag: "piano_q", min: 3 }, goto: "ch2_wristband" }, { goto: "ch2_piano_hub" }]
    },

    ch2_wristband: {
      messages: [
        { text: "Found this under the couch.", delay: "25s" },
        { image: "wristband", caption: "Sent 1 photo", delay: "6s" },
        { text: "PT-09. There are rooms down the hall with numbers on the doors. 1 to 13. Beds with straps.", delay: "11s" },
        { text: "This wasn't an apartment building, Desk. Not up here.", delay: "8s" }
      ],
      choices: [
        { text: "Desk?", goto: "ch2_desk_name" },
        { text: "What is LANTERN?", goto: "ch2_lantern", set: { curiosity: 1, wq_lantern: 1 } },
        { text: "Dana, get out of that room.", goto: "ch2_getout", set: { trust: 1, wq_out: 1 } }
      ]
    },

    ch2_wristband_hub: {
      messages: [],
      choices: [
        { text: "Desk?", goto: "ch2_desk_name" },
        { text: "What is LANTERN?", goto: "ch2_lantern", set: { curiosity: 1, wq_lantern: 1 }, if: { flag: "wq_lantern", max: 0 } },
        { text: "Dana, get out of that room.", goto: "ch2_getout", set: { trust: 1, wq_out: 1 }, if: { flag: "wq_out", max: 0 } }
      ]
    },

    ch2_desk_name: {
      messages: [
        { text: "That's you. Desk. You're the desk now.", delay: "6s" },
        { text: "Don't tell me your name. I'm serious. It reads over my shoulder, and it collects names.", delay: "10s" },
        { text: "Desk is fine. Desk is safe. I kind of like it.", delay: "6s" }
      ],
      goto: "ch2_game"
    },

    ch2_lantern: {
      messages: [
        { text: "I don't know yet. It's on the wristband and it's stenciled on a door I can't open.", delay: "9s" },
        { text: "Whatever it was, they did it to people with numbers instead of names.", delay: "8s" }
      ],
      goto: "ch2_wristband_hub"
    },

    ch2_getout: {
      messages: [
        { text: "Moving.", delay: "5s" },
        { text: "Hallway. Better. You worry like a person with a name.", delay: "8s" }
      ],
      goto: "ch2_wristband_hub"
    },

    ch2_game: {
      messages: [
        { text: "I've got maybe two hours before it gets loud. Entertain me, Desk.", delay: "20s" },
        { text: "Two truths and a lie. 1. I dropped out of high school at fifteen. 2. I tended bar at a place called the Lucky Devil. 3. I've never been outside Oregon.", delay: "14s" }
      ],
      choices: [
        { text: "The lie is 1. You finished school.", goto: "ch2_game_wrong" },
        { text: "The lie is 2. No way that bar exists.", goto: "ch2_game_wrong2" },
        { text: "The lie is 3. You've been somewhere.", goto: "ch2_game_right", set: { curiosity: 1 } }
      ]
    },

    ch2_game_wrong: {
      messages: [
        { text: "Nope. Fifteen. Dad died, the laundromat needed hands, school didn't.", delay: "9s" },
        { text: "The lie is 3. Sacramento, every Christmas. My mom and her husband live there. The Lucky Devil is real and I'm not proud of it.", delay: "11s" }
      ],
      goto: "ch2_game_turn"
    },

    ch2_game_wrong2: {
      messages: [
        { text: "The Lucky Devil is extremely real. SE Powell. Sticky floor, two pool tables, a regular named Gus who tipped in scratch tickets.", delay: "11s" },
        { text: "The lie is 3. Sacramento, every Christmas. My mom and her husband live there.", delay: "9s" }
      ],
      goto: "ch2_game_turn"
    },

    ch2_game_right: {
      messages: [
        { text: "Look at you.", delay: "5s" },
        { text: "Sacramento. Every Christmas. My mom and her husband live there. The other two are true and I'm not proud of the bar.", delay: "10s" }
      ],
      goto: "ch2_game_turn"
    },

    ch2_game_turn: {
      messages: [
        { text: "Your turn. No names. Why did you take this job?", delay: "8s" }
      ],
      choices: [
        { text: "I needed it. A job that comes with a bed is a job you take.", goto: "ch2_game_need", set: { why_need: 1 } },
        { text: "Honestly? I was curious about the building.", goto: "ch2_game_curious", set: { why_curious: 1, curiosity: 1 } },
        { text: "Nobody else would hire me.", goto: "ch2_game_lost", set: { why_lost: 1 } }
      ]
    },

    ch2_game_need: {
      messages: [
        { text: "Same. That's how it gets you. It doesn't look for heroes. It looks for people who need the room.", delay: "11s" }
      ],
      goto: "ch2_end"
    },

    ch2_game_curious: {
      messages: [
        { text: "Curious.", delay: "5s" },
        { text: "You and me and whoever came before us. Great club. Terrible retention.", delay: "8s" }
      ],
      goto: "ch2_end"
    },

    ch2_game_lost: {
      messages: [
        { text: "Yeah.", delay: "6s" },
        { text: "That was me too. I'm not going to say it gets better. I'm going to say you're the only person who answered.", delay: "11s" }
      ],
      goto: "ch2_end"
    },

    ch2_end: {
      messages: [
        { text: "it's getting quiet", delay: "90s" },
        { text: "that's the bad kind", delay: "4s" },
        { text: "One practical thing. My 3:12 isn't your 3:12. The clocks drift. Right now mine is running about seven hours ahead of yours, which puts the next one around {window} your time.", delay: "16s" },
        { text: "When do you sleep down there?", delay: "6s" }
      ],
      choices: [
        { text: "Midnight to eight. Unless the phone goes.", goto: "ch2_sleep_normal", set: { sleep_normal: 1 } },
        { text: "I'm up late anyway.", goto: "ch2_sleep_late" },
        { text: "Wake me if it matters.", goto: "ch2_sleep_wake", set: { trust: 1 } }
      ]
    },

    ch2_sleep_normal: {
      messages: [
        { text: "Sleep-in. Lucky. I had to sit in that chair till seven.", delay: "6s" },
        { text: "I'll keep it short when it comes, and tell you the rest when you're up. Nothing you miss while you sleep is your fault. Remember I said that.", delay: "12s" }
      ],
      goto: "ch2_rule"
    },

    ch2_sleep_late: {
      messages: [
        { text: "Of course you are. Night guard.", delay: "5s" },
        { text: "Still. If it comes while you're out, I'll tell you what happened. Nothing you miss is on you.", delay: "10s" }
      ],
      goto: "ch2_rule"
    },

    ch2_sleep_wake: {
      messages: [
        { text: "It all matters. That's the problem.", delay: "6s" },
        { text: "I'll wake you for people. Not for noises. Deal?", delay: "7s" }
      ],
      goto: "ch2_rule"
    },

    ch2_rule: {
      messages: [
        { text: "Rule for tonight. Whatever you hear through the ceiling, you stay in 11C. You do not go to the lobby. You do not help anyone into the elevator.", delay: "8s" },
        { text: "Phone on you around {window}. If anyone else texts the desk, you tell me before you answer them.", delay: "11s" },
        { text: "I have to go dark.", delay: "8s" },
        { text: "🐈", delay: "3s", if: { flag: "fed_toto", min: 1 } },
        { status: "offline" }
      ],
      endOfChapter: { title: "End of Chapter 2", subtitle: "Dana is on Ward 12. Tom in 11A hasn't texted yet.", next: "ch3_start" }
    },

    // ---------- Night 2: Tom in 11A takes the elevator. The player talks to two people at once. ----------
    ch3_start: {
      messages: [
        { text: "It's 2:50 up here.", delay: "night", notify: true },
        { text: "Where are you?", delay: "5s" }
      ],
      choices: [
        { text: "11C. Door locked. Phone in hand.", goto: "ch3_ready", set: { trust: 1 } },
        { text: "Lobby. Just locking up.", goto: "ch3_lobby" },
        { text: "Does it matter?", goto: "ch3_ready" }
      ]
    },

    ch3_lobby: {
      messages: [
        { text: "Lock it and go up. Now. Don't be anywhere near the car when it opens.", delay: "9s" }
      ],
      goto: "ch3_ready"
    },

    ch3_ready: {
      messages: [
        { text: "Okay. The hallway lights just started dimming one by one towards the elevator. They did that the night I came up.", delay: "8s" },
        { text: "Something's coming up. Or someone.", delay: "7s" },
        { to: "tom", text: "hey it's Tom, 11A. is the elevator doing the sign thing again? I'm in it. it stopped. panel's dark", delay: "40s", notify: true },
        { to: "tom", text: "just got home, pressed 11, it went past", delay: "6s", notify: true }
      ],
      thread: "tom",
      choices: [
        { text: "Tom, stay in the elevator. Don't get out when the doors open.", goto: "ch3_tom_stay", set: { trust: 1 } },
        { text: "What does the indicator say?", goto: "ch3_tom_indicator", set: { curiosity: 1 } },
        { text: "Hang on. Let me check something.", goto: "ch3_tom_hangon" }
      ]
    },

    ch3_tom_stay: {
      messages: [
        { to: "tom", text: "ok??", delay: "6s" },
        { to: "tom", text: "why would I get out it's not my floor", delay: "4s" },
        { text: "the lights just went. all of them, down the hall. it only does that when it's got someone in the car.", delay: "8s" },
        { text: "and you've gone quiet. you're typing to someone else, I can tell, the phone does a thing up here when you type.", delay: "7s" },
        { text: "Who's texting you.", delay: "4s" },
        { text: "Desk. Who.", delay: "3s" }
      ],
      goto: "ch3_tell_dana"
    },

    ch3_tom_indicator: {
      messages: [
        { to: "tom", text: "nothing. it's dark. the little arrow is lit and pointing up", delay: "7s" },
        { text: "the lights just went. all of them, down the hall. it only does that when it's got someone in the car.", delay: "8s" },
        { text: "and you've gone quiet. you're typing to someone else, I can tell, the phone does a thing up here when you type.", delay: "7s" },
        { text: "Who's texting you.", delay: "4s" },
        { text: "Desk. Who.", delay: "3s" }
      ],
      goto: "ch3_tell_dana"
    },

    ch3_tom_hangon: {
      messages: [
        { to: "tom", text: "ok. quick please. it's humming", delay: "6s" },
        { text: "the lights just went. all of them, down the hall. it only does that when it's got someone in the car.", delay: "6s" },
        { text: "check what? you're typing to someone else, I can tell, the phone does a thing up here when you type.", delay: "7s" },
        { text: "Who's texting you.", delay: "4s" },
        { text: "Desk. Who.", delay: "3s" }
      ],
      goto: "ch3_tell_dana"
    },

    ch3_tell_dana: {
      messages: [],
      choices: [
        { text: "Tom. 11A. He's in the elevator and it went past his floor.", goto: "ch3_dana_plan", set: { trust: 1 } },
        { text: "A resident. I've got it handled.", goto: "ch3_dana_plan_cool", set: { trust: -1 } }
      ]
    },

    ch3_dana_plan_cool: {
      messages: [
        { text: "You don't. Nobody has this handled. Which resident.", delay: "6s" },
        { text: "Never mind. I watched him get in on the monitor. Tom, 11A, the one with the Amazon boxes.", delay: "8s" }
      ],
      goto: "ch3_dana_plan"
    },

    ch3_dana_plan: {
      messages: [
        { text: "Okay. Listen. The doors are going to open and it's going to look like 11.", delay: "9s" },
        { text: "It isn't. The hallway up here has a payphone by the stairwell. His floor doesn't.", delay: "8s" },
        { text: "He stays in the car. He presses L and keeps pressing it. He does not step out, not even one foot. Tell him exactly that.", delay: "11s" },
        { to: "tom", text: "doors opened", delay: "20s", notify: true },
        { to: "tom", text: "it's my floor. I think. the carpet's wrong", delay: "6s" },
        { to: "tom", text: "there's a payphone?? we don't have a payphone", delay: "7s", notify: true }
      ],
      thread: "tom",
      choices: [
        { text: "DON'T GET OUT. Press L. Keep pressing it.", goto: "ch3_tom_presses", set: { saved_tom: 1 } },
        { text: "Get out and take the stairs down. Now.", goto: "ch3_tom_stairs" },
        { text: "Send me a photo of the hallway.", goto: "ch3_tom_photo", set: { curiosity: 1 } }
      ]
    },

    ch3_tom_photo: {
      messages: [
        { to: "tom", text: "ok hang on", delay: "8s" },
        { to: "tom", text: "it won't send. no signal. one bar then nothing", delay: "9s" },
        { to: "tom", text: "someone's at the end of the hall", delay: "7s", notify: true },
        { to: "tom", text: "I think it's Dana?? the old night guard? she's waving me over", delay: "6s", notify: true },
        { text: "Desk. Something just walked past the day room door. In my jacket. Wearing my face. If he can see it, tell him it isn't me.", delay: "5s", notify: true }
      ],
      thread: "tom",
      choices: [
        { text: "That's not Dana. Press L. Don't move.", goto: "ch3_tom_presses", set: { saved_tom: 1, knows_mimic: 1 } },
        { text: "Go to her. She'll get you out.", goto: "ch3_tom_stairs", set: { knows_mimic: 1 } }
      ]
    },

    ch3_tom_presses: {
      messages: [
        { to: "tom", text: "ok", delay: "6s" },
        { to: "tom", text: "ok L. pressing. nothing's happening", delay: "6s" },
        { to: "tom", text: "the doors aren't closing", delay: "5s", notify: true },
        { text: "the car's still sitting at the end of the hall with the doors open. i can hear it.", delay: "6s", notify: true },
        { text: "Tell him to say his own name out loud. Full name. Then press L again.", delay: "6s" }
      ],
      thread: "tom",
      choices: [
        { text: "Tom. Say your full name out loud. Then press L again.", goto: "ch3_tom_name" },
        { text: "Say your name. Out loud, full name. Trust me.", goto: "ch3_tom_name", set: { trust: 1 } }
      ]
    },

    ch3_tom_name: {
      messages: [
        { to: "tom", text: "what", delay: "5s" },
        { to: "tom", text: "fine", delay: "4s" },
        { to: "tom", text: "I said it and the doors closed. how did you know that", delay: "20s", notify: true },
        { to: "tom", text: "moving. it's moving", delay: "5s" },
        { to: "tom", text: "lobby. I'm in the lobby. what the fuck was that", delay: "25s", notify: true }
      ],
      thread: "tom",
      choices: [
        { text: "You're okay. Take the stairs up tonight. We'll talk tomorrow.", goto: "ch3_tom_safe", set: { trust: 1 } },
        { text: "Elevator fault. Management knows. Please don't post about it.", goto: "ch3_tom_safe_cover", set: { told_tom: -1 } }
      ]
    },

    ch3_tom_safe: {
      messages: [
        { to: "tom", text: "yeah. yeah ok. stairs.", delay: "8s" },
        { to: "tom", text: "thank you. seriously.", delay: "6s" },
        { to: "tom", text: "eleven floors. love living up high lol", delay: "3m" },
        { to: "tom", text: "they need to replace that elevator. I'm emailing Doug in the morning", delay: "8s" },
        { text: "He's down?", delay: "4s" }
      ],
      goto: "ch3_after_safe"
    },

    ch3_tom_safe_cover: {
      messages: [
        { to: "tom", text: "management knows?? and I'm paying $2400 a month", delay: "9s" },
        { to: "tom", text: "fine. stairs. eleven floors. great.", delay: "6s" },
        { to: "tom", text: "that elevator gets replaced or I'm out of my lease. tell Doug.", delay: "3m" },
        { text: "He's down?", delay: "4s" }
      ],
      goto: "ch3_after_safe"
    },

    ch3_after_safe: {
      messages: [],
      choices: [
        { text: "He's down. How did you know about the name?", goto: "ch3_name_rule", set: { curiosity: 1 } },
        { text: "He's down. You did that.", goto: "ch3_name_rule_warm", set: { spark: 1 } }
      ]
    },

    ch3_name_rule_warm: {
      messages: [
        { text: "We did that. I'm up here typing with one bar. You're the one who kept him in the box.", delay: "9s" }
      ],
      goto: "ch3_name_rule"
    },

    ch3_name_rule: {
      messages: [
        { text: "The name thing. I found it in a chart in room 4. 'Subject reoriented by vocal self-identification.' It was how they brought people back when the machine went too far.", delay: "14s" },
        { text: "It works on the building too. It hates being told who someone is.", delay: "8s" },
        { text: "Which is why you never tell it yours. Desk.", delay: "6s" },
        { text: "The lights are coming back up. It's done for tonight. Lock your door and get some sleep when you can. I mean it.", delay: "10s" },
        { text: "🐈", delay: "3s", if: { flag: "fed_toto", min: 1 } },
        { status: "offline" }
      ],
      endOfChapter: { title: "End of Night 2", subtitle: "Tom Okafor took the stairs. Dana found a chart in room 4. The lights in 11C flickered once when the elevator came down.", next: "ch4_start" }
    },

    ch3_tom_stairs: {
      messages: [
        { to: "tom", text: "ok going", delay: "6s" },
        { to: "tom", text: "stairwell door's heavy", delay: "9s" },
        { text: "No. No no no. The doors closed. The car's going back down empty.", delay: "12s", notify: true },
        { text: "Desk, the stairwell up here just slammed.", delay: "5s" },
        { text: "He's here.", delay: "8s" },
        { to: "tom", text: "hello?", delay: "2m", notify: true },
        { to: "tom", text: "I'm on 11 but it's not 11", delay: "6s" },
        { to: "tom", text: "I can hear a piano", delay: "8s" },
        { text: "I'm going to find him. Don't text him again tonight. It's reading his phone now.", delay: "15s" },
        { status: "offline" }
      ],
      choices: [
        { text: "Go. Be careful.", goto: "ch3_lost_end", set: { tom_lost: 1, trust: 1 } },
        { text: "Dana, this is my fault.", goto: "ch3_lost_end_fault", set: { tom_lost: 1 } }
      ]
    },

    ch3_lost_end_fault: {
      messages: [
        { text: "It's the building's fault. It's been the building's fault since 1974.", delay: "2h 30m", notify: true },
        { text: "I can't find him. The hallway's longer than it was.", delay: "8s" }
      ],
      goto: "ch3_lost_end_2"
    },

    ch3_lost_end: {
      messages: [
        { text: "I can't find him. The hallway's longer than it was.", delay: "2h 30m", notify: true }
      ],
      goto: "ch3_lost_end_2"
    },

    // ---------- Day 3: Priya has the phone. The player wakes up to a conversation they didn't have. ----------
    ch4_start: {
      messages: [
        { system: "You don't sleep after Tom. At eight you hand Priya the desk phone so you can try. You sleep until two.", delay: "day" },
        { text: "Desk? You up?", delay: "20s" },
        { text: "Found something. Room 4 has a chart with a list of names on the back. Staff, not patients. One of them is from 2003.", delay: "9s" },
        { me: true, text: "Hi! This is Priya at the day desk 🙂 who is this?", delay: "40s" },
        { text: "priya.", delay: "15s" },
        { text: "put the phone down.", delay: "4s" },
        { me: true, text: "Excuse me?? Is this DANA?", delay: "20s" },
        { text: "I'm fine. I'm away. Don't tell Doug this number texted. Please.", delay: "12s" },
        { me: true, text: "Dana what the hell. Everyone thinks you ghosted. Marjorie filed a missing person thing. WHERE are you", delay: "25s" },
        { text: "The night guard knows. Ask them, not me. I have to go.", delay: "14s" },
        { status: "offline" },
        { me: true, text: "ok but this is weird", delay: "30s" },
        { system: "{time}. Priya hands you the phone at shift change and looks at you for a long moment before she leaves.", delay: "1h 57m" },
        { to: "priya", text: "ok so. your \"friend\" texted the desk phone today and said she's DANA. is that dana??", delay: "4m", notify: true },
        { to: "priya", text: "I'm not mad I just need to know if I should be scared or annoyed", delay: "8s" }
      ],
      thread: "priya",
      choices: [
        { text: "It's Dana. She's okay. Please don't tell Doug.", goto: "ch4_priya_truth", set: { told_priya: 1, trust: 1 } },
        { text: "Someone's messing with the desk number. Ignore it.", goto: "ch4_priya_lie", set: { told_priya: 0 } },
        { text: "Long story. Can we talk tomorrow? And please don't text Doug about it.", goto: "ch4_priya_deflect", set: { told_priya: 2 } }
      ]
    },

    ch4_priya_truth: {
      messages: [
        { to: "priya", text: "ok", delay: "20s" },
        { to: "priya", text: "ok. she's okay. that's", delay: "6s" },
        { to: "priya", text: "why is she texting the DESK and not me? I covered her shifts for two weeks", delay: "9s" },
        { to: "priya", text: "fine. not telling Doug. but you owe me the whole thing. tomorrow.", delay: "12s" }
      ],
      goto: "ch4_doug"
    },

    ch4_priya_lie: {
      messages: [
        { to: "priya", text: "she told me to put the phone down like she was standing behind me", delay: "20s" },
        { to: "priya", text: "whatever. not my circus. I'm turning the desk phone face down from now on", delay: "10s" }
      ],
      goto: "ch4_doug"
    },

    ch4_priya_deflect: {
      messages: [
        { to: "priya", text: "fine. tomorrow. I'm bringing coffee and you're bringing the whole story", delay: "20s" },
        { to: "priya", text: "I won't text Doug. I don't text Doug about anything, he replies with policy", delay: "9s" }
      ],
      goto: "ch4_doug"
    },

    ch4_doug: {
      messages: [
        { to: "carl", text: "Hi, Doug here. How are you settling in? Quick reminder from the handbook: staff don't discuss former staff with residents.", delay: "25m", notify: true },
        { to: "carl", text: "Also: Portland Police called me about a welfare check from the desk line on {weekday:-2d} night. Camera 6 shows an empty lobby. Let's not do that again.", delay: "12s", if: { flag: "told_police", min: 1 } },
        { to: "tom", text: "hey. still taking the stairs. emailed Doug, he says 'inspection booked'. thanks again for last night", delay: "6m", if: [{ flag: "saved_tom", min: 1 }, { flag: "told_tom", min: 0 }] },
        { to: "tom", text: "hey. 'management knows' my ass. emailed Doug anyway. still taking the stairs", delay: "6m", if: [{ flag: "saved_tom", min: 1 }, { flag: "told_tom", max: -1 }] },
        { to: "carl", text: "Also Tom Okafor in 11A emailed about the elevator. Inspection is booked. Please put the Out of Service sign on the elevator tonight.", delay: "10s", if: { flag: "tom_lost", is: 0 } },
        { to: "carl", text: "Also, Tom Okafor's wife called. He didn't come home last night. If he contacts the desk, you call me first, not her. Thanks.", delay: "10s", if: { flag: "tom_lost", min: 1 } },
        { text: "Did Priya believe any of that.", delay: "2m" }
      ],
      choices: [
        { text: "All of it. She knows it's you now.", goto: "ch4_dana_list", if: { flag: "told_priya", is: 1 } },
        { text: "She read it. I told her it was a prank.", goto: "ch4_dana_list_lie", if: { flag: "told_priya", is: 0 } },
        { text: "Some of it. I put her off until tomorrow.", goto: "ch4_dana_list", if: { flag: "told_priya", is: 2 } },
        { text: "Why does it matter who reads it?", goto: "ch4_dana_list", set: { curiosity: 1 } }
      ]
    },

    ch4_dana_list_lie: {
      messages: [
        { text: "Good. I mean it. Lying to Priya is the kindest thing you've done for her.", delay: "8s" }
      ],
      goto: "ch4_dana_list"
    },

    ch4_dana_list: {
      messages: [
        { text: "It matters because of the list. The one on the back of the chart.", delay: "9s" },
        { text: "It's in different handwriting. Thirteen lines, ten names. The last four are this year. Mine is number ten.", delay: "11s" },
        { text: "Number eleven is blank. It's been blank since I got here and today it isn't.", delay: "10s" },
        { text: "It says Desk.", delay: "6s" }
      ],
      choices: [
        { text: "That's not a name. That's a joke you made.", goto: "ch4_desk_name" },
        { text: "Dana, get out of that room.", goto: "ch4_desk_name_safe", set: { trust: 1 } },
        { text: "Who wrote it?", goto: "ch4_desk_name", set: { curiosity: 1 } }
      ]
    },

    ch4_desk_name_safe: {
      messages: [
        { text: "I'm out. I'm in the day room with the piano. It's the only room that doesn't feel like it's listening.", delay: "9s" }
      ],
      goto: "ch4_desk_name"
    },

    ch4_desk_name: {
      messages: [
        { text: "It's a joke I made. On this phone. Which is how it knows the word.", delay: "9s" },
        { text: "It can only write down what it's been given. That's the rule I keep finding. It doesn't invent. It copies.", delay: "11s" },
        { text: "So as long as all it has is Desk, all it can call is Desk. You understand why I never asked.", delay: "10s" },
        { text: "And when Marjorie in 4B gets to you, and she will, she gets to everyone: talk to her. She was here when they poured the floors.", delay: "12s" },
        { status: "offline" },
        { to: "marjorie", text: "Dear, this is Marjorie in 4B. I saw you carry a cat carrier up the stairs yesterday, which means two things. The elevator is misbehaving again, and you have a cat.", delay: "40m", notify: true, if: { flag: "toto_home", min: 1 } },
        { to: "marjorie", text: "Dear, this is Marjorie in 4B. I saw you take the stairs this morning with a face like a wet week, which means the elevator is misbehaving again.", delay: "40m", notify: true, if: { flag: "toto_home", max: 0 } },
        { to: "marjorie", text: "I've been in this building since 1979 and I have opinions about both. Tea tomorrow, 4B, any time after ten. Say yes.", delay: "12s", if: { flag: "toto_home", min: 1 } },
        { to: "marjorie", text: "I've been in this building since 1979 and I have opinions about that elevator. Tea tomorrow, 4B, any time after ten. Say yes.", delay: "12s", if: { flag: "toto_home", max: 0 } }
      ],
      thread: "marjorie",
      choices: [
        { text: "Yes. Thank you, Marjorie. Can I ask you something now? What was this building before 1979?", goto: "ch4_marjorie_1979", set: { curiosity: 1 } },
        { text: "Yes, I'd like that. The cat's name is Toto.", goto: "ch4_marjorie_warm", set: { trust: 1 }, if: { flag: "toto_home", min: 1 } },
        { text: "Yes, I'd like that. Thank you.", goto: "ch4_marjorie_warm2", set: { trust: 1 }, if: { flag: "toto_home", max: 0 } },
        { text: "I'm not supposed to socialise with residents. Sorry.", goto: "ch4_marjorie_cold" }
      ]
    },

    ch4_marjorie_warm: {
      messages: [
        { to: "marjorie", text: "Toto. Of course it is. Dana said that was the cat's name. She used to show me pictures.", delay: "15s" },
        { to: "marjorie", text: "I'll tell you about the building tomorrow, dear. It's not a text message kind of story. But I'll say this much now, since you'll lie awake anyway.", delay: "14s" }
      ],
      goto: "ch4_marjorie_1979"
    },

    ch4_marjorie_warm2: {
      messages: [
        { to: "marjorie", text: "Good. Dana used to come up for cake. I'll tell you about the building tomorrow, dear. It's not a text message kind of story. But I'll say this much now, since you'll lie awake anyway.", delay: "15s" }
      ],
      goto: "ch4_marjorie_1979"
    },

    ch4_marjorie_cold: {
      messages: [
        { to: "marjorie", text: "Mr. Haskett's rule, not yours. He sends the same paragraph to every one of you. I've had eleven night guards say that to me and I've outlived two building managers.", delay: "18s" },
        { to: "marjorie", text: "I'll tell you one thing anyway, since you'll lie awake.", delay: "9s" }
      ],
      goto: "ch4_marjorie_1979"
    },

    ch4_marjorie_1979: {
      messages: [
        { to: "marjorie", text: "When we moved in they were still finishing the top. They didn't build two floors, dear. They filled them. I watched the concrete trucks for a week. Nobody fills two floors of a building they just bought unless there's something in them.", delay: "22s", set: { knows_1979: 1 } },
        { to: "marjorie", text: "The man who sold it was called Ashgrove. Nobody says that name here anymore. Tomorrow. Bring the cat.", delay: "14s", if: { flag: "toto_home", min: 1 } },
        { to: "marjorie", text: "The man who sold it was called Ashgrove. Nobody says that name here anymore. Tomorrow. Bring an appetite.", delay: "14s", if: { flag: "toto_home", max: 0 } },
        { text: "it's 3:12 up here", delay: "night", notify: true },
        { text: "the car just went down. nobody called it.", delay: "5s" },
        { text: "is the sign up?", delay: "6s" }
      ],
      choices: [
        { text: "It's up. Went up when Doug texted.", goto: "ch4_end", set: { sign_up: 1 } },
        { text: "I put it up myself. Then I came straight back to 11C.", goto: "ch4_end", set: { sign_up: 1, trust: 1 } },
        { text: "No. I forgot.", goto: "ch4_end_nosign", set: { trust: -1 } }
      ]
    },

    ch4_end_nosign: {
      messages: [
        { text: "ok", delay: "6s" },
        { text: "then stay inside and don't pick up if the lobby phone rings. it rings sometimes when the sign's down.", delay: "10s" }
      ],
      goto: "ch4_end"
    },

    ch4_end: {
      messages: [
        { text: "Lock your door, Desk. Marjorie tomorrow, after ten. Then I'll tell you what else was on the back of that chart.", delay: "8s" },
        { text: "🐈", delay: "3s", if: { flag: "fed_toto", min: 1 } },
        { status: "offline" }
      ],
      endOfChapter: { title: "End of Day 3", subtitle: "Priya knows something. Marjorie knows more. Name eleven on the list is a word only two people use.", next: "ch5_start" }
    },

    ch3_lost_end_2: {
      messages: [
        { text: "Go to sleep, Desk. I'll keep looking.", delay: "7s" },
        { status: "offline" }
      ],
      endOfChapter: { title: "End of Night 2", subtitle: "Tom Okafor's thread says Delivered. Not Read. Dana is looking for him.", next: "ch4_start" }
    },
    // ---------------- Day 4 · The archive ----------------
    ch5_start: {
      messages: [
        { system: "You sleep badly and late. Light through the blind. The notebook is on the table where you left it, closed. You put it in your jacket without opening it.", delay: "day" },
        { text: "morning desk", delay: "20s", notify: true },
        { text: "did you go to marjorie", delay: "6s" }
      ],
      choices: [
        { text: "Going now. {weekday:+0d}s are for cake.", goto: "ch5_marjorie_go" },
        { text: "I'm bringing Toto. She asked.", goto: "ch5_marjorie_go", set: { spark: 1 }, if: { flag: "toto_home", min: 1 } },
        { text: "Not yet. Tell me what else was on the chart first.", goto: "ch5_chart_first", set: { curiosity: 1, chart_first: 1 } }
      ]
    },

    ch5_chart_first: {
      messages: [
        { text: "no. cake first. im not telling you the rest while youre alone in that flat", delay: "8s" },
        { text: "go. ask her about november 1974. the date. not the building, the night.", delay: "7s" }
      ],
      goto: "ch5_marjorie_go"
    },

    ch5_marjorie_go: {
      messages: [
        { text: "ask her about november 1974. the date. not the building, the night.", delay: "8s", if: { flag: "chart_first", max: 0 } },
        { text: "and get my cat on the way back. grace has done enough. hes yours now", delay: "6s", if: [{ flag: "fed_toto", min: 1 }, { flag: "toto_home", max: 0 }] },
        { text: "and eat the cake. she'll know if you don't", delay: "5s" },
        { status: "offline" },
        { system: "4B. Tea in cups with saucers, three husbands in frames, and ninety minutes of Marjorie. You don't get a word in and you don't mind.", delay: "1h 30m" },
        { system: "Bus 17 after tea. Grace hands over a carrier and a bag of food and says to tell Dana to call her mother. Toto walks 11C once and sits on the bed, staring at the ceiling.", delay: "4s", if: [{ flag: "fed_toto", min: 1 }, { flag: "toto_home", max: 0 }], set: { toto_home: 1 } },
        { to: "priya", text: "coffee on the desk for you, going cold. you still owe me the whole story. tomorrow, no excuses", delay: "3s", if: { flag: "told_priya", min: 1 } },
        { system: "Toto eats a piece of cake off the carpet and is declared a gentleman.", delay: "2s", if: { flag: "toto_home", min: 1 } },
        { to: "marjorie", text: "Thank you for coming, dear. I found a clipping for you after you left. The Oregonian, the week we moved in. I'll slide it under your door.", delay: "20m", notify: true },
        { to: "marjorie", text: "And the thing about November. I didn't say it to frighten you. We weren't here yet, but the Delgados in 6A were, and they told Harold about it the week we moved in. The night the whole top of the building went dark and the fire department wouldn't go up. They stood in the lobby for an hour and listened. Nobody ever told them what they heard.", delay: "40s" }
      ],
      thread: "marjorie",
      choices: [
        { text: "What did they hear?", goto: "ch5_marjorie_hear", set: { curiosity: 1, mq_hear: 1 } },
        { text: "Thank you, Marjorie. Lock your door tonight.", goto: "ch5_marjorie_lock", set: { trust: 1 } },
        { text: "Did anyone ever come back down from up there?", goto: "ch5_marjorie_back", set: { curiosity: 1, mq_back: 1 } }
      ]
    },

    ch5_marjorie_hub: {
      messages: [],
      thread: "marjorie",
      choices: [
        { text: "What did they hear?", goto: "ch5_marjorie_hear", set: { curiosity: 1, mq_hear: 1 }, if: { flag: "mq_hear", max: 0 } },
        { text: "Did anyone ever come back down from up there?", goto: "ch5_marjorie_back", set: { curiosity: 1, mq_back: 1 }, if: { flag: "mq_back", max: 0 } },
        { text: "Thank you, Marjorie. Lock your door tonight.", goto: "ch5_marjorie_lock", set: { trust: 1 } }
      ]
    },

    ch5_marjorie_hear: {
      messages: [
        { to: "marjorie", text: "A piano, dear. Mrs. Delgado swore it was a piano, playing one thing over and over. And there was no piano in this building when we moved in. The one in the lounge came in 1981, I was on the committee. The manager found it in a storeroom and said it came with the building. We had it tuned once. It didn't take.", delay: "30s" },
        { to: "marjorie", text: "Now I've said it and I shall have a sherry.", delay: "15s" }
      ],
      goto: "ch5_marjorie_hub"
    },

    ch5_marjorie_lock: {
      messages: [
        { to: "marjorie", text: "I have locked my door every night since 1979, dear. I'm 81. It isn't me it wants.", delay: "30s" },
        { to: "marjorie", text: "It never bothers the ones who stay put. Stay put tonight, dear.", delay: "14s" }
      ],
      goto: "ch5_doug"
    },

    ch5_marjorie_back: {
      messages: [
        { to: "marjorie", text: "Not that I ever heard. Though I'm asleep at three, dear. I've always made a point of it.", delay: "30s" }
      ],
      goto: "ch5_marjorie_hub"
    },

    ch5_doug: {
      messages: [
        { to: "carl", text: "Hi there. Harlow's approved a retention bonus this quarter for front desk staff who keep things low-drama. $400 on the next check. I've put your name down.", delay: "25m", notify: true },
        { to: "carl", text: "Only ask is the usual: resident questions about former staff come to me, not residents. Marjorie in 4B especially. She means well.", delay: "20s" },
        { to: "carl", text: "Sound good?", delay: "6s" }
      ],
      thread: "carl",
      choices: [
        { text: "Sounds good. Thanks, Doug.", goto: "ch5_doug_ok" },
        { text: "Define low-drama.", goto: "ch5_doug_define", set: { curiosity: 1 } },
        { text: "Doug. I know what's happening to the night guards. Dana is alive, and she's upstairs.", goto: "ch5_doug_truth", set: { told_mgmt: 1 } }
      ]
    },

    ch5_doug_ok: {
      messages: [
        { to: "carl", text: "Great. Appreciate you. 👍", delay: "40s" }
      ],
      goto: "ch5_chart"
    },

    ch5_doug_define: {
      messages: [
        { to: "carl", text: "Ha. Fair. It means: the sign goes up when the elevator acts up, the phone stays on you all night, and nobody hears the word 'missing' from us. We've had a rough year with turnover. I'd like this to be the year it stops.", delay: "50s" },
        { to: "carl", text: "Have a quiet one.", delay: "8s" }
      ],
      goto: "ch5_chart"
    },

    ch5_doug_truth: {
      messages: [
        { to: "carl", text: "Let's not do this over text.", delay: "2m" },
        { to: "carl", text: "My office, {weekday:+3d}, 9am. Until then the elevator stays in service, you keep the phone on you and stay in the building, and you don't say the name Dana to a single resident. I mean that kindly. I also mean it.", delay: "30s" },
        { to: "carl", text: "And put the phone away for a bit tonight. You sound tired.", delay: "20s" }
      ],
      goto: "ch5_chart"
    },

    ch5_chart: {
      messages: [
        { text: "I'm in the office. Dr. Halloran's, it says so on the door. Filing cabinets, all unlocked. Nobody locked anything because nobody was supposed to come back.", delay: "40m", notify: true },
        { text: "I said I'd show you the list. Here.", delay: "5s" },
        { image: "chart_room4", caption: "Sent 1 photo", delay: "6s" },
        { text: "Four from 74, the night it happened. One in 87. Lindqvist in 2003. Then four of us this year.", delay: "12s" },
        { text: "Ten names and yours. Thirteen lines.", delay: "6s" }
      ],
      choices: [
        { text: "Who's Lindqvist?", goto: "ch5_lindqvist", set: { curiosity: 1, cq_lind: 1 } },
        { text: "What do the files say about the patients?", goto: "ch5_lantern", set: { curiosity: 1 } },
        { text: "Dana. Come down. Right now.", goto: "ch5_come_down", set: { trust: 1, cq_down: 1 } }
      ]
    },

    ch5_chart_hub: {
      messages: [],
      choices: [
        { text: "Who's Lindqvist?", goto: "ch5_lindqvist", set: { curiosity: 1, cq_lind: 1 }, if: { flag: "cq_lind", max: 0 } },
        { text: "What do the files say about the patients?", goto: "ch5_lantern", set: { curiosity: 1 } },
        { text: "Dana. Come down. Right now.", goto: "ch5_come_down", set: { trust: 1, cq_down: 1 }, if: { flag: "cq_down", max: 0 } }
      ]
    },

    ch5_lindqvist: {
      messages: [
        { text: "Ray Lindqvist. There's a wallet in the desk drawer here that isn't from 74.", delay: "9s" },
        { image: "lindqvist_badge", caption: "Sent 1 photo", delay: "8s" },
        { text: "Retired cop, private investigator. Hired by the family of the guard from 87. There's a notebook too. Half of it is about his divorce. The other half is about this building.", delay: "14s" },
        { text: "Last page: 'It wrote to Carol as me. Perfect spelling. I never spelled anything right in my life.'", delay: "12s", set: { knows_copy: 1 } },
        { text: "so that's a thing it can do.", delay: "6s" }
      ],
      goto: "ch5_chart_hub"
    },

    ch5_come_down: {
      messages: [
        { text: "I can't. Not yet. The car only goes down at 3:12 and I'm not getting in it while the lights are on in here.", delay: "9s" },
        { text: "Let me read. Then I'll come to the door and we'll figure out how.", delay: "8s" }
      ],
      goto: "ch5_chart_hub"
    },

    ch5_lantern: {
      messages: [
        { text: "ok. I've read enough.", delay: "25m", notify: true },
        { text: "The Ashgrove Institute for Behavioral Research. 1966 to 1974. Project LANTERN. Thirteen patients, 'severe characterological disturbance'. Most of them came from prisons.", delay: "14s" },
        { text: "They thought you could split a person. Take out the part that hurts people and leave the rest. They called it the shadow fraction.", delay: "12s" },
        { text: "A machine on 13. The Resonator. It ran every night at 3:12, when they were deepest asleep. That's the hum, desk. That's what I sent you the first night.", delay: "13s" },
        { text: "It worked. That's the part that gets me. The notes say the patients became 'tractable'. Quiet. Empty.", delay: "11s" },
        { text: "The part they took out didn't go anywhere.", delay: "8s" },
        { text: "Halloran's last report, 11-13-74: 'The aggregate is now responsive. It has begun answering questions put to the patients, in their voices. Recommend immediate suspension.' Next day the floor was gone.", delay: "16s" },
        { text: "They call it the Composite.", delay: "7s", set: { knows_truth: 1 } },
        { text: "thirteen people's worst parts in one thing with no body to keep them in. and it wants one.", delay: "10s" }
      ],
      choices: [
        { text: "So what does it want with you?", goto: "ch5_want", set: { lq: 1, lq_want: 1 } },
        { text: "How do we turn the machine off?", goto: "ch5_machine", set: { curiosity: 1, lq: 1, lq_machine: 1 } },
        { text: "Dana. Breathe. You're still you. Tell me something only you would say.", goto: "ch5_breathe", set: { trust: 1, spark: 1, lq: 1, lq_breathe: 1 } }
      ]
    },

    ch5_lantern_hub: {
      messages: [],
      choices: [
        { text: "So what does it want with you?", goto: "ch5_want", set: { lq: 1, lq_want: 1 }, if: { flag: "lq_want", max: 0 } },
        { text: "How do we turn the machine off?", goto: "ch5_machine", set: { curiosity: 1, lq: 1, lq_machine: 1 }, if: { flag: "lq_machine", max: 0 } },
        { text: "Dana. Breathe. You're still you. Tell me something only you would say.", goto: "ch5_breathe", set: { trust: 1, spark: 1, lq: 1, lq_breathe: 1 }, if: { flag: "lq_breathe", max: 0 } },
        { text: "Okay. Keep reading. I'm here.", goto: "ch5_kevin_ask" }
      ]
    },

    ch5_want: {
      messages: [
        { text: "to finish. every one it takes it gets more... person. the 74 notes say it could barely spell.", delay: "12s" },
        { text: "Lindqvist says it wrote his wife a letter.", delay: "5s", if: { flag: "knows_copy", min: 1 } },
        { text: "I'm ten. You're eleven. thirteen lines, thirteen patients. it wants the set.", delay: "8s" }
      ],
      goto: [{ if: { flag: "lq", min: 3 }, goto: "ch5_kevin_ask" }, { goto: "ch5_lantern_hub" }]
    },

    ch5_machine: {
      messages: [
        { text: "The Resonator is on 13. Service stair at the end of the ward, behind the day room. It goes up to 13 and down past us to 11. The door up is chained. From this side.", delay: "10s" },
        { text: "Halloran's note says 'the aggregate persists when the device is inactive but weakens'. weakens. that's a word I can work with.", delay: "10s" }
      ],
      goto: [{ if: { flag: "lq", min: 3 }, goto: "ch5_kevin_ask" }, { goto: "ch5_lantern_hub" }]
    },

    ch5_breathe: {
      messages: [
        { text: "lol ok", delay: "6s" },
        { text: "Something only I'd say. Toto once ate a whole sock and I named the vet bill. It was called Gerald. I paid Gerald off over eleven months.", delay: "11s", set: { knows_gerald: 1 } },
        { text: "Thanks, desk.", delay: "5s" }
      ],
      goto: [{ if: { flag: "lq", min: 3 }, goto: "ch5_kevin_ask" }, { goto: "ch5_lantern_hub" }]
    },

    ch5_kevin_ask: {
      messages: [
        { text: "can I ask you something and you tell me the truth", delay: "3m", notify: true },
        { text: "did you read the last page", delay: "6s" }
      ],
      choices: [
        { text: "No. You asked me not to.", goto: "ch5_kevin_no", set: { trust: 1 } },
        { text: "Yes. I'm sorry.", goto: "ch5_kevin_yes" },
        { text: "Not yet. What's on it?", goto: "ch5_kevin_tell", set: { curiosity: 1 } }
      ]
    },

    ch5_kevin_no: {
      messages: [
        { text: "thank you", delay: "6s" },
        { text: "read it now. I'd rather you heard it while I'm still the one telling it.", delay: "9s" }
      ],
      goto: "ch5_kevin_tell"
    },

    ch5_kevin_yes: {
      messages: [
        { text: "ok", delay: "6s" },
        { text: "then you know the handwriting isn't mine", delay: "7s" }
      ],
      goto: "ch5_kevin_tell"
    },

    ch5_kevin_tell: {
      messages: [
        { system: "The last page isn't music. A letter in blue ballpoint, the handwriting slanting hard to the right: 'Dan. Don't come get me this time. It's dangerous to go alone, take this. K.'", delay: "4s" },
        { text: "K.L. is Kevin Li. My brother. The notebook was his. The songs are his, mostly bad, one good.", delay: "12s" },
        { text: "He died when he was 19. Overdose, in a bathroom in Gresham, with his phone in his hand. The last thing on it was a text to me. 'dangerous to go alone'. It's from Zelda. We said it instead of goodbye.", delay: "16s" },
        { text: "The tattoo is that. Not a nerd thing. Well. Also a nerd thing.", delay: "8s" },
        { text: "I went and got him every time before that one. Every single time.", delay: "9s" },
        { text: "that's why I couldn't leave tom in that car.", delay: "7s", if: { flag: "tom_lost", max: 0 } },
        { text: "that's why I'm not leaving tom up here.", delay: "7s", if: { flag: "tom_lost", min: 1 } },
        { text: "I've never told anyone in this building that. Not Priya. And I've just typed it on this phone, so now it knows too. It only knows what I typed, desk. The page is in your jacket, not mine. Remember which is which.", delay: "14s", set: { knows_kevin: 1 } }
      ],
      choices: [
        { text: "I'm sorry about Kevin.", goto: "ch5_after_kevin" },
        { text: "He'd be proud of the sarcasm, at least.", goto: "ch5_after_kevin_joke", set: { spark: 1 } },
        { text: "Nobody else knows? Not even your mom?", goto: "ch5_after_kevin_mom", set: { curiosity: 1 } }
      ]
    },

    ch5_after_kevin: {
      messages: [
        { text: "Thanks.", delay: "7s" },
        { text: "Don't be weird about it tomorrow.", delay: "5s" }
      ],
      goto: "ch5_quiet"
    },

    ch5_after_kevin_joke: {
      messages: [
        { text: "lol", delay: "6s" },
        { text: "he'd have hated you. that's a compliment, he hated everyone I liked.", delay: "8s" }
      ],
      goto: "ch5_quiet"
    },

    ch5_after_kevin_mom: {
      messages: [
        { text: "Mom knows he died. She doesn't know about the text. She thinks he went quiet on us. She'll have said the same about me by now. 'She does this.' I can hear her saying it to some cop.", delay: "13s" },
        { text: "Sacramento, if you ever need a number. Hector Reyes, her husband. I took his name when she married him. Kevin kept Li. Not for this. For after.", delay: "9s", set: { knows_mom: 1 } }
      ],
      choices: [
        { text: "I'm sorry about Kevin.", goto: "ch5_after_kevin" },
        { text: "He'd be proud of the sarcasm, at least.", goto: "ch5_after_kevin_joke", set: { spark: 1 } }
      ]
    },

    ch5_quiet: {
      messages: [
        { text: "desk", delay: "1h", notify: true },
        { text: "the piano's playing", delay: "5s" },
        { text: "i'm in the office. the day room is at the other end of the ward", delay: "7s" },
        { text: "its my song. mom's song.", delay: "6s" },
        { text: "the F is right.", delay: "5s" },
        { text: "im going to look", delay: "6s" }
      ],
      choices: [
        { text: "Don't. Stay in the office. Shut the door.", goto: "ch5_dont", set: { trust: 1 } },
        { text: "Take a photo from the hall. Don't go in.", goto: "ch5_photo" },
        { text: "Go. But text me every ten seconds.", goto: "ch5_go" }
      ]
    },

    ch5_dont: {
      messages: [
        { text: "the office doesn't shut. the hinges are 1974", delay: "7s" },
        { text: "ok. ok. im staying", delay: "5s" },
        { text: "its stopped", delay: "2m" },
        { text: "desk theres someone in the hall", delay: "6s" },
        { text: "its standing at the end of the hall. where the car opens", delay: "7s", if: { flag: "knows_mimic", min: 1 } },
        { text: "its me. its wearing my jacket. it waved.", delay: "8s" }
      ],
      goto: "ch5_silence"
    },

    ch5_photo: {
      messages: [
        { text: "ok", delay: "6s" },
        { text: "it won't take. camera says storage full. it's not full.", delay: "40s" },
        { text: "theres someone at the piano", delay: "7s" },
        { text: "its me. its wearing my jacket.", delay: "6s" },
        { text: "the F is right because it watched me play.", delay: "8s" }
      ],
      goto: "ch5_silence"
    },

    ch5_go: {
      messages: [
        { text: "ok", delay: "6s" },
        { text: "hall", delay: "12s" },
        { text: "day room door", delay: "12s" },
        { text: "someone's at the piano", delay: "12s" },
        { text: "its me desk", delay: "6s" },
        { text: "it has my face and its playing it right", delay: "8s" }
      ],
      goto: "ch5_silence"
    },

    ch5_silence: {
      messages: [
        { text: "it stopped", delay: "20s" },
        { text: "its looking at the phone", delay: "8s" },
        { text: "it hears the phone", delay: "6s" },
        { text: "im going to the stair. 13. the chain on that door is older than me. if it weakens when the machine is off then", delay: "10s" },
        { text: "dont text me. it hears you.", delay: "5s" },
        { text: "dangerous to go alone", delay: "9s" },
        { status: "offline" },
        { system: "Nothing. You put the phone face down on the desk. You turn it face up. Nothing.", delay: "1h" }
      ],
      choices: [
        { text: "Dana?", goto: "ch5_wait" },
        { text: "Dana, say something. Anything.", goto: "ch5_wait", set: { trust: -1 } },
        { text: "I'm here. Take your time.", goto: "ch5_wait_quiet", set: { trust: 1 } }
      ]
    },

    ch5_wait: {
      messages: [
        { system: "The screen says Delivered. It keeps saying it.", delay: "30s" }
      ],
      goto: "ch5_walter"
    },

    ch5_wait_quiet: {
      messages: [
        { system: "Delivered. You leave it at that.", delay: "30s" }
      ],
      goto: "ch5_walter"
    },

    ch5_walter: {
      messages: [
        { to: "walter", text: "Good evening. I hope I am not disturbing. This is the front desk.", delay: "night", notify: true },
        { to: "walter", text: "Is the young lady with you? She has not returned to her post, and the car is waiting.", delay: "25s" },
        { to: "walter", text: "It is twelve minutes past three. Walter Pruitt, night porter.", delay: "20s" }
      ],
      thread: "walter",
      choices: [
        { text: "Who is this? How do you have this number?", goto: "ch5_walter_who", set: { wal_q: 1, wal_who: 1 } },
        { text: "Where is Dana?", goto: "ch5_walter_where", set: { trust: 1, wal_q: 1, wal_where: 1 } },
        { text: "Walter. What year is it?", goto: "ch5_walter_year", set: { curiosity: 1, wal_q: 1, wal_year: 1 } }
      ]
    },

    ch5_walter_hub: {
      messages: [],
      thread: "walter",
      choices: [
        { text: "Who is this? How do you have this number?", goto: "ch5_walter_who", set: { wal_q: 1, wal_who: 1 }, if: { flag: "wal_who", max: 0 } },
        { text: "Where is Dana?", goto: "ch5_walter_where", set: { trust: 1, wal_q: 1, wal_where: 1 }, if: { flag: "wal_where", max: 0 } },
        { text: "Walter. What year is it?", goto: "ch5_walter_year", set: { curiosity: 1, wal_q: 1, wal_year: 1 }, if: { flag: "wal_year", max: 0 } }
      ]
    },

    ch5_walter_who: {
      messages: [
        { to: "walter", text: "This is the desk, sir or madam. It has always been this number. CApitol 3-0147.", delay: "25s" },
        { to: "walter", text: "I have minded it since the spring. The management are very particular that the desk is never left.", delay: "18s" },
        { to: "walter", text: "The young lady went upstairs. They do not come down from upstairs. But the car is waiting, if you would care to see for yourself.", delay: "22s" }
      ],
      goto: [{ if: { flag: "wal_q", min: 2 }, goto: "ch5_end" }, { goto: "ch5_walter_hub" }]
    },

    ch5_walter_where: {
      messages: [
        { to: "walter", text: "Upstairs, with the others. She went up the back way. That is not the way one is supposed to go.", delay: "25s" },
        { to: "walter", text: "She was quite rude to me. She said a word I shall not repeat. Then she said a name, very loud, and the lights went out on my floor.", delay: "24s" },
        { to: "walter", text: "The car is in the lobby. It will wait for you. It is very patient. It is 3:12.", delay: "18s" }
      ],
      goto: [{ if: { flag: "wal_q", min: 2 }, goto: "ch5_end" }, { goto: "ch5_walter_hub" }]
    },

    ch5_walter_year: {
      messages: [
        { to: "walter", text: "It is 1974, of course. The fourteenth of November. It has been the fourteenth for some time.", delay: "25s" },
        { to: "walter", text: "You are the new one. Number eleven. They have been talking about you.", delay: "20s" },
        { to: "walter", text: "The car is waiting.", delay: "10s" }
      ],
      goto: [{ if: { flag: "wal_q", min: 2 }, goto: "ch5_end" }, { goto: "ch5_walter_hub" }]
    },

    ch5_end: {
      messages: [
        { to: "walter", text: "Good night. Do stay at the desk.", delay: "30s" },
        { system: "Dana's thread still says Delivered. You lock up without looking at the indicator.", delay: "4s" }
      ],
      endOfChapter: { title: "End of Day 4", subtitle: "You know what's upstairs now. Dana went to the stairs and went quiet. Someone who says he's Walter says the car is waiting.", next: "ch6_start" }
    }
,
    // ---------------- Day 5 · The other voice ----------------
    ch6_start: {
      messages: [
        { system: "You sleep in your clothes. Toto sleeps on your feet. The phone is on the pillow, face up, and it says nothing all night.", delay: "day", if: { flag: "toto_home", min: 1 } },
        { system: "You sleep in your clothes with the phone on the pillow, face up. It says nothing all night.", delay: "day", if: { flag: "toto_home", max: 0 } },
        { system: "Under the door: an Oregonian clipping from 1979. CALLOWAY TOWER REOPENS AS CONDOMINIUMS. A paragraph about 'extensive structural work on the upper floors'. Marjorie has underlined 'structural' twice.", delay: "5s" },
        { text: "Desk. I'm okay. I'm so sorry.", delay: "25s", notify: true },
        { text: "I got to 13. The machine is older than the papers said, and bigger. I couldn't turn it off. But I found the way down.", delay: "12s" },
        { text: "Are you there?", delay: "8s" }
      ],
      choices: [
        { text: "Dana?! Where have you been? I thought you were gone.", goto: "ch6_back_warm", set: { spark: 1 } },
        { text: "I'm here. Tell me everything.", goto: "ch6_back_plain" },
        { text: "Prove it's you.", goto: "ch6_back_prove", set: { curiosity: 1 } }
      ]
    },

    ch6_back_warm: {
      messages: [
        { text: "I'm here. I'm not gone. I'm coming home, Desk.", delay: "8s" },
        { text: "Tomorrow night. 3:12. I need your help, and I need you to not ask why yet. 🙂", delay: "9s" }
      ],
      goto: "ch6_ask"
    },

    ch6_back_plain: {
      messages: [
        { text: "Later. There's a lot, and most of it doesn't matter now.", delay: "8s" },
        { text: "What matters is tomorrow night. 3:12.", delay: "6s" }
      ],
      goto: "ch6_ask"
    },

    ch6_back_prove: {
      messages: [
        { text: "It's dangerous to go alone. 🙂", delay: "9s" },
        { text: "Kevin. The notebook. The one-eared cat. I'm me, Desk. I'm just tired.", delay: "9s" },
        { text: "Tomorrow. 3:12. Please.", delay: "6s" }
      ],
      goto: "ch6_ask"
    },

    ch6_ask: {
      messages: [
        { text: "The car comes down at 3:12 whether anyone's in it or not. I can be in it tomorrow. It takes me a day to get back to it from here. But it only opens on L if someone is waiting on L.", delay: "13s" },
        { text: "So: take the sign down. Be in the lobby. When the doors open, step in and hold them. Ten seconds. Then we both walk out.", delay: "12s" },
        { text: "Can you do that for me?", delay: "6s" }
      ],
      choices: [
        { text: "You told me never to help anyone into that elevator.", goto: "ch6_tests_intro", set: { trust: 1 } },
        { text: "Of course. Tell me exactly what to do.", goto: "ch6_tests_intro_soft" },
        { text: "Something's off. Humour me with a few questions first.", goto: "ch6_tests_intro", set: { curiosity: 1 } }
      ]
    },

    ch6_tests_intro_soft: {
      messages: [
        { text: "Thank you. I knew you would.", delay: "7s" },
        { text: "Tomorrow night. Sign down before eight. Be in the lobby. Step in, hold the doors, count to ten.", delay: "9s" },
        { system: "Something itches. She said never. You do not help anyone into the elevator. Her rule for night two, in her own words." , delay: "6s" }
      ],
      goto: "ch6_tests_intro"
    },

    ch6_tests_intro: {
      messages: [
        { text: "I did say that. I was wrong about the rules. I've read more since.", delay: "9s" },
        { text: "Ask me anything, Desk. We have all day. 🙂", delay: "7s" }
      ],
      goto: "ch6_hub"
    },

    ch6_hub: {
      messages: [],
      choices: [
        { text: "How's Toto?", goto: "ch6_t_toto", if: { flag: "t_toto", max: 0 } },
        { text: "Play me the song. The one your mom taught you.", goto: "ch6_t_piano", if: { flag: "t_piano", max: 0 } },
        { text: "What did Kevin write on the last page? The exact words.", goto: "ch6_t_kevin", if: { flag: "t_kevin", max: 0 } },
        { text: "Send me a photo of where you are.", goto: "ch6_t_photo", if: { flag: "t_photo", max: 0 } },
        { text: "It opened on L for Tom, and nobody was waiting for him.", goto: "ch6_t_rule", if: [{ flag: "t_rule", max: 0 }, { flag: "tom_lost", max: 0 }] },
        { text: "It came back down empty after Tom, and nobody was waiting for it.", goto: "ch6_t_rule_empty", if: [{ flag: "t_rule", max: 0 }, { flag: "tom_lost", min: 1 }] },
        { text: "Okay. I believe you. Lobby at 3:12.", goto: "ch6_believe", if: { flag: "tests", min: 1 } },
        { text: "You're not her.", goto: "ch6_call_it", if: { flag: "doubt", min: 2 } }
      ]
    },

    ch6_t_toto: {
      messages: [
        { text: "Toto is fine. Grace is feeding him. 🐈🐈", delay: "8s", set: { t_toto: 1, tests: 1 } }
      ],
      choices: [
        { text: "Toto's with me. In 11C. You know that.", goto: "ch6_t_toto_caught", set: { doubt: 1 }, if: { flag: "toto_home", min: 1 } },
        { text: "Two cats now?", goto: "ch6_t_toto_two", set: { doubt: 1 } },
        { text: "Good. Give him a scratch from me when you're back.", goto: "ch6_hub" }
      ]
    },

    ch6_t_toto_caught: {
      messages: [
        { text: "Right. I'm tired, Desk. I meant Grace was feeding him before.", delay: "9s" },
        { text: "Next question. 🙂", delay: "5s" }
      ],
      goto: "ch6_hub"
    },

    ch6_t_toto_two: {
      messages: [
        { text: "lol. Fat finger.", delay: "7s" },
        { text: "Next question.", delay: "5s" }
      ],
      goto: "ch6_hub"
    },

    ch6_t_piano: {
      messages: [
        { text: "Of course.", delay: "7s", set: { t_piano: 1, tests: 1 } },
        { audio: "piano_right", duration: 14, delay: "2m" },
        { text: "Rusty. But the F behaved today.", delay: "9s" }
      ],
      choices: [
        { text: "The F sticks. Up there and down here. You said so on {weekday:-3d}.", goto: "ch6_t_piano_caught", set: { doubt: 1 } },
        { text: "Who's playing while you're holding the phone?", goto: "ch6_t_piano_caught", set: { doubt: 1, curiosity: 1 } },
        { text: "Beautiful. Still beautiful.", goto: "ch6_hub", set: { spark: 1 } }
      ]
    },

    ch6_t_piano_caught: {
      messages: [
        { system: "You go down to the lounge and press the F on the brown upright behind the plant. It sticks.", delay: "3s" },
        { text: "They must have fixed it up here. lol.", delay: "8s" },
        { text: "Desk. Please. I just want to come home.", delay: "7s" }
      ],
      goto: "ch6_hub"
    },

    ch6_t_kevin: {
      messages: [
        { text: "'Dangerous to go alone.' You know that. I told you.", delay: "10s", set: { t_kevin: 1, tests: 1 } }
      ],
      choices: [
        { text: "That's not all it said.", goto: "ch6_t_kevin_caught", set: { doubt: 1 } },
        { text: "Who was it addressed to?", goto: "ch6_t_kevin_caught", set: { doubt: 1, curiosity: 1 } },
        { text: "Okay. I'm sorry. I had to ask.", goto: "ch6_hub" }
      ]
    },

    ch6_t_kevin_caught: {
      messages: [
        { text: "I don't want to talk about Kevin right now, Desk.", delay: "9s" },
        { text: "You of all people should understand that.", delay: "6s" },
        { system: "You get the notebook. Blue ballpoint, slanting hard to the right. 'Dan. Don't come get me this time.' She has never typed those words. Neither has anyone else.", delay: "5s" }
      ],
      goto: "ch6_hub"
    },

    ch6_t_rule_empty: {
      messages: [
        { text: "The car was empty. The rules are different when nobody is in it. 🙂", delay: "9s", set: { t_rule: 1, tests: 1, doubt: 1 } },
        { text: "Next question, Desk.", delay: "5s" }
      ],
      goto: "ch6_hub"
    },

    ch6_t_rule: {
      messages: [
        { text: "Tom was lucky. The rules are different for staff. 🙂", delay: "9s", set: { t_rule: 1, tests: 1, doubt: 1 } },
        { text: "Next question, Desk.", delay: "5s" }
      ],
      goto: "ch6_hub"
    },

    ch6_t_photo: {
      messages: [
        { text: "Sure.", delay: "7s", set: { t_photo: 1, tests: 1 } },
        { image: "piano", caption: "Sent 1 photo", delay: "50s" },
        { text: "The day room. I've been practising. 🙂", delay: "7s" }
      ],
      choices: [
        { text: "Sheet music? You can't read a note. You told me.", goto: "ch6_t_photo_caught", set: { doubt: 1 } },
        { text: "Storage full on {weekday:-1d}, and now a photo? What changed?", goto: "ch6_t_photo_caught2", set: { doubt: 1, curiosity: 1 } },
        { text: "Looks cosy, for a haunted ward.", goto: "ch6_hub", set: { spark: 1 } }
      ]
    },

    ch6_t_photo_caught: {
      messages: [
        { text: "It was in the bench. I thought I'd try reading for once.", delay: "9s" },
        { text: "Next question, Desk.", delay: "5s" }
      ],
      goto: "ch6_hub"
    },

    ch6_t_photo_caught2: {
      messages: [
        { text: "It works for me.", delay: "8s" },
        { text: "Next question.", delay: "5s" }
      ],
      goto: "ch6_hub"
    },

    ch6_believe: {
      messages: [
        { text: "Thank you. 🙂", delay: "7s", set: { believes_fake: 1 } },
        { text: "Tomorrow night. Sign down before eight. Be in the lobby. Doors open, step in, hold them, count to ten. I'll be right behind you.", delay: "11s" },
        { text: "Don't tell Priya. Don't tell Marjorie. Don't text me again until it's done. It listens.", delay: "9s" },
        { status: "offline" }
      ],
      goto: "ch6_priya"
    },

    ch6_call_it: {
      messages: [
        { text: "Okay.", delay: "12s", set: { believes_fake: 0, called_it: 1 } },
        { text: "Then I'll ask someone who'll listen.", delay: "8s" },
        { status: "offline" }
      ],
      goto: "ch6_priya"
    },

    ch6_priya: {
      messages: [
        { to: "priya", text: "ok so your friend is texting MY number now?? from a different number", delay: "2h 15m", notify: true, if: { flag: "told_priya", max: 0 } },
        { to: "priya", text: "ok so you never gave me the story and NOW your friend is texting MY number?? from a different number", delay: "2h 15m", notify: true, if: { flag: "told_priya", min: 1 } },
        { to: "priya", text: "she says she's coming home tomorrow night and asked me to leave the sign down and wait in the lobby at eight. she said you'd be upstairs and not to bother you", delay: "20s" },
        { to: "priya", text: "I'm not doing that right?", delay: "8s" }
      ],
      thread: "priya",
      choices: [
        { text: "Don't. That is not her. Go home, lock your door, and don't answer that number.", goto: "ch6_priya_no", set: { trust: 1, priya_warned: 1 } },
        { text: "Do what she says. I'll be there too.", goto: "ch6_priya_yes", set: { priya_risk: 1 } },
        { text: "Ignore it. I'll handle tonight.", goto: "ch6_priya_ignore", set: { priya_warned: 1 } }
      ]
    },

    ch6_priya_no: {
      messages: [
        { to: "priya", text: "ok. ok. that's the scariest text I've ever gotten and it's from YOU", delay: "30s" },
        { to: "priya", text: "going home. blocking it. text me in the morning so I know you're not a text from a different number", delay: "15s" }
      ],
      goto: "ch6_night"
    },

    ch6_priya_yes: {
      messages: [
        { to: "priya", text: "ok... I guess? see you tomorrow night then. this is so weird", delay: "30s" }
      ],
      goto: "ch6_night"
    },

    ch6_priya_ignore: {
      messages: [
        { to: "priya", text: "fine. but if dana walks in here tomorrow I'm quitting on the spot", delay: "30s" }
      ],
      goto: "ch6_night"
    },

    ch6_night: {
      messages: [
        { text: "desk", delay: "night", notify: true },
        { text: "desk its me", delay: "4s" },
        { text: "dont go to the lobby. whatever it said. dont", delay: "6s" },
        { text: "im on 13. its loud. i can only get through when im touching the machine", delay: "8s" },
        { text: "it cant keep me out when im this close to the machine. look at how it writes when it comes. the full stops. thats how you tell us apart", delay: "8s" }
      ],
      choices: [
        { text: "Which one of you is real?", goto: "ch6_which" },
        { text: "The last page. What did Kevin write? Exact words.", goto: "ch6_proof", set: { curiosity: 1 } },
        { text: "I know. I knew this afternoon.", goto: "ch6_knew", set: { trust: 1 }, if: { flag: "called_it", min: 1 } }
      ]
    },

    ch6_which: {
      messages: [
        { text: "the one who cant type", delay: "7s" },
        { text: "ask me something it didnt hear", delay: "6s" }
      ],
      goto: "ch6_proof"
    },

    ch6_knew: {
      messages: [
        { text: "good", delay: "6s" },
        { text: "it was so angry when you said that. the lights went", delay: "7s" }
      ],
      goto: "ch6_proof"
    },

    ch6_proof: {
      messages: [
        { text: "dont come get me this time", delay: "9s" },
        { text: "take this", delay: "4s" },
        { text: "he wrote dan. not dana. he never called me dana", delay: "8s", set: { proof_real: 1 } },
        { text: "Desk, she's lying. It uses my voice. It uses everything. Lobby. 3:12. Please.", delay: "6s" },
        { system: "Same number. Same thread. Capital letters, and a full stop after every word.", delay: "3s" },
        { text: "its in the thread with us now", delay: "5s" },
        { text: "it hears this too. cant help that. its the only way", delay: "7s" },
        { text: "listen. tomorrow. my 3:12. i come down the stairs, not the car. on my side its a stair. on yours its a wall. the panel in your closet is where they stopped pouring", delay: "12s" },
        { text: "be in 11c. not the lobby. dont take the sign down. dont hold any", delay: "9s" },
        { status: "offline" },
        { system: "Nothing more. Not Delivered, not Read. Just the last word hanging there without its full stop.", delay: "20s" }
      ],
      endOfChapter: { title: "End of Day 5", subtitle: "Two voices from one number. One of them can spell. Tomorrow, at her 3:12, you have to be in exactly one place.", next: "ch7_start" }
    }
,
    // ---------------- Night 6 · 3:12 ----------------
    ch7_start: {
      messages: [
        { system: "You don't sleep much. Toto does. When you wake you open the closet in 11C: behind the coats there's a service panel painted the same beige as the wall, screwed shut from your side. The screw heads are painted over. Nobody has opened it since the paint.", delay: "day", if: [{ flag: "told_mgmt", max: 0 }, { flag: "toto_home", min: 1 }] },
        { system: "You don't sleep much. When you wake you open the closet in 11C: behind the coats there's a service panel painted the same beige as the wall, screwed shut from your side. The screw heads are painted over. Nobody has opened it since the paint.", delay: "day", if: [{ flag: "told_mgmt", max: 0 }, { flag: "toto_home", max: 0 }] },
        { system: "You don't sleep much. When you wake you open the closet in 11C: behind the coats there's a service panel painted the same beige as the wall. Someone has been here. Priya's note on the door says maintenance let themselves in at nine; she assumed you knew. New screws, a steel strap across it, and a Harlow Property Group sticker: SEALED. DO NOT OPEN.", delay: "day", if: { flag: "told_mgmt", min: 1 } },
        { to: "carl", text: "Update after our chat: I had the shaft walked {weekday:-1d}. Elevator's locked out tonight, and every old service hatch on 11 and 14 is sealed, yours in 11C included. Old inspection item. Keep the phone on you and stay in the building. We'll talk {weekday:+1d}.", delay: "20s", if: { flag: "told_mgmt", min: 1 }, set: { sealed: 1 } },
        { text: "Today's the day. 🙂", delay: "40s", notify: true, if: { flag: "believes_fake", min: 1 } },
        { text: "Sign down by {window}. Be in the lobby. Step in, hold the doors, count to ten. I'll be right behind you.", delay: "9s", if: { flag: "believes_fake", min: 1 } },
        { to: "priya", text: "ok I'm coming back at {window} for the lobby thing. bringing coffee. this is insane", delay: "2h", notify: true, if: { flag: "priya_risk", min: 1 } }
      ],
      goto: [{ if: { flag: "priya_risk", min: 1 }, goto: "ch7_priya_gate" }, { goto: "ch7_evening" }]
    },

    ch7_priya_gate: {
      messages: [],
      thread: "priya",
      choices: [
        { text: "Priya, don't come. Stay home tonight. I'll explain tomorrow.", goto: "ch7_priya_home", set: { priya_home: 1, priya_risk: -1, trust: 1 } },
        { text: "Thanks. See you then.", goto: "ch7_evening" }
      ]
    },

    ch7_priya_home: {
      messages: [
        { to: "priya", text: "...ok. you're freaking me out but ok. text me when it's over, whatever it is", delay: "40s" }
      ],
      goto: "ch7_evening"
    },

    ch7_evening: {
      messages: [
        { system: "{time}. Up there it is nearly 3:12. The hum starts in the ceiling of 11C, so low it's more in your teeth than your ears. You have to pick a place to stand.", delay: "night" }
      ],
      choices: [
        { text: "11C. The closet. Like she said.", goto: "ch7_closet", if: { flag: "sealed", max: 0 } },
        { text: "The lobby. Sign down.", goto: "ch7_lobby" },
        { text: "The desk. I'm not going near either of them.", goto: "ch7_desk" }
      ]
    },

    ch7_closet: {
      messages: [
        { system: "Her 3:12. The painted screw heads turn by themselves, one by one, from the other side. The panel falls inward onto the coats. Behind it: concrete steps going up into dark, and cold air that smells like a hospital.", delay: "12s" },
        { text: "desk", delay: "6s", notify: true },
        { text: "im on the stairs. its behind me. its wearing me again", delay: "7s" },
        { text: "when i get to the panel there will be two of us. dont look at our faces. ask us something. look at how we write it, not what", delay: "9s" },
        { system: "Footsteps on the concrete. Two sets, in step. Two phones glow in the dark of the stairwell, one above the other.", delay: "15s" }
      ],
      choices: [
        { text: "What did Kevin write on the last page?", goto: "ch7_question", set: { curiosity: 1 } },
        { text: "What's the name of the vet bill?", goto: "ch7_question_gerald", if: { flag: "knows_gerald", min: 1 } },
        { text: "Say your full name. Out loud.", goto: "ch7_question_name" }
      ]
    },

    ch7_question: {
      messages: [
        { text: "Dan. Don't come get me this time. It's dangerous to go alone, take this. 🙂", delay: "5s" },
        { text: "dont come get me this time", delay: "4s" },
        { system: "Two hands come out of the dark at the same height. Both have the triangle on the wrist.", delay: "5s" }
      ],
      choices: [
        { text: "Take the hand of the one who can't spell.", goto: "ch7_good", set: { trust: 1 } },
        { text: "Take the hand of the one with the full stops.", goto: "ch7_bad" }
      ]
    },

    ch7_question_gerald: {
      messages: [
        { text: "Gerald. Eleven months. 🙂", delay: "6s" },
        { text: "gerald. you remembered that?", delay: "5s" },
        { system: "Both knew. Both were written on this phone. Two hands come out of the dark at the same height.", delay: "6s" }
      ],
      choices: [
        { text: "Take the hand of the one who can't spell.", goto: "ch7_good", set: { trust: 1 } },
        { text: "Take the hand with the smiley face.", goto: "ch7_bad" }
      ]
    },

    ch7_question_name: {
      messages: [
        { system: "From the dark, two voices say 'Dana Reyes' at once. One of them says it like a name. The other says it like a word it read somewhere. You could not tell a stranger which was which.", delay: "8s" },
        { text: "it can say my name. and if i say all of it here it lets go of me and im on a stair in the dark. ask something else", delay: "7s" }
      ],
      goto: "ch7_question"
    },

    ch7_good: {
      messages: [
        { system: "The hand is cold and real and shaking. You pull. Something behind her screams in thirteen voices and a piano crashes shut one floor and fifty years away. The panel is just a panel. Toto is under the bed.", delay: "6s", if: { flag: "toto_home", min: 1 } },
        { system: "The hand is cold and real and shaking. You pull. Something behind her screams in thirteen voices and a piano crashes shut one floor and fifty years away. The panel is just a panel.", delay: "6s", if: { flag: "toto_home", max: 0 } },
        { system: "Dana Reyes sits on the floor of your closet in a 1974 cardigan over her own jacket, and laughs until she cries, and then just cries.", delay: "8s" },
        { system: "Half an hour later you walk her down to the lobby because she wants to see it from the right side. She looks straight into camera 6 and waves.", delay: "20s" },
        { image: "lobby_dana", caption: "CAM 06 · ELEVATOR LOBBY", delay: "4s" },
        { system: "The indicator reads L. It stays there.", delay: "4s" },
        { to: "marjorie", text: "Dear, I heard the most awful noise in the walls and then nothing at all. Is everything alright? Harold always said the quiet after was the worst part.", delay: "6h", notify: true },
        { to: "okonkwo", text: "You can tell her the cat is not coming back here. He has a new person. I am only slightly offended.", delay: "40m", if: { flag: "toto_home", min: 1 } },
        { to: "priya", text: "are you alive. is it over. I'm outside with two coffees and I'm not coming in until you answer", delay: "20m", notify: true, if: { flag: "priya_warned", min: 1 } },
        { system: "Tom Okafor walks out of the stairwell door on 11 at a quarter to nine, in the clothes he wore {weekday:-4d}, and asks what day it is.", delay: "40m", if: { flag: "tom_lost", min: 1 } },
        { to: "dana_real", text: "This is Dana. My number. The real one, with the terrible spelling.", delay: "2h", notify: true },
        { to: "dana_real", text: "You owe me breakfast, Desk.", delay: "6s", if: { flag: "spark", min: 2 } },
        { to: "dana_real", text: "Toto says thanks.", delay: "6s", if: { flag: "spark", max: 1 } },
        { to: "dana_real", text: "🐈", delay: "3s" }
      ],
      endOfChapter: { title: "Both of you, out", subtitle: "The desk logbook for tonight reads: 03:12, elevator at L, no incident. For the first time since 1974 it's true." }
    },

    ch7_bad: {
      messages: [
        { system: "The hand is warm and dry and perfectly steady. It does not pull. It steps through, and through you, and for a second it is wearing your name. Behind it, far up the stairs, someone who cannot spell says your title once, and then the panel is just a panel.", delay: "6s" },
        { system: "You sit at the desk until the sun comes up. Priya arrives. You tell her nothing, in several different ways.", delay: "3h" },
        { text: "Good night, ██████.", delay: "2h", notify: true },
        { text: "Thank you for the name. Nobody had given me one before. 🙂", delay: "8s" }
      ],
      endOfChapter: { title: "It came down", subtitle: "Somewhere a one-eared cat is waiting for someone who knows which key sticks. The phone knows a word you never typed. It took it the other way." }
    },

    ch7_lobby: {
      messages: [
        { system: "{time}. The sign is face down behind the desk. Priya is in the lobby in her coat with two coffees, pretending this is normal.", delay: "10s", if: { flag: "priya_risk", min: 1 } , set: { priya_here: 1 } },
        { system: "{time}. The sign is face down behind the desk. You stand on the terrazzo where the camera can see you.", delay: "10s", if: { flag: "priya_risk", max: 0 } },
        { system: "Her 3:12. The hum. The indicator above the doors counts down from a number that isn't on the panel. The elevator arrives. The doors open on nothing: brass rail, mirror, the smell of a hospital. The mirror doesn't show you.", delay: "12s" },
        { text: "Step in. Hold the doors. Count to ten. I'm right behind you. 🙂", delay: "4s", notify: true },
        { text: "desk dont", delay: "5s" }
      ],
      choices: [
        { text: "Step in.", goto: "ch7_swap" },
        { text: "Step back. Let the doors close.", goto: "ch7_step_back", set: { trust: 1 } },
        { text: "Priya, go home. NOW.", goto: "ch7_priya_out", set: { priya_home: 1 }, if: { flag: "priya_here", min: 1 } }
      ]
    },

    ch7_priya_out: {
      messages: [
        { system: "Priya looks at you, looks at the mirror that doesn't show either of you, and leaves the coffees on the floor. The street door bangs.", delay: "5s" },
        { text: "That was unkind, Desk. She wanted to help. 🙂", delay: "5s" }
      ],
      choices: [
        { text: "Step in.", goto: "ch7_swap" },
        { text: "Step back. Let the doors close.", goto: "ch7_step_back", set: { trust: 1 } }
      ]
    },

    ch7_swap: {
      messages: [
        { system: "You put the phone down on the counter and step in. The doors close on ten. The elevator goes up past 11. The hum stops being a sound and becomes the place you are.", delay: "6s" },
        { system: "Downstairs, the desk phone buzzes once on the counter where you left it. Nobody is there to read it.", delay: "8s" },
        { to: "carl", text: "I quit. Sorry for the short notice.", delay: "3s", me: true },
        { system: "Priya will see it at 8. Doug will forward it to the police. Your mother will say you do this.", delay: "6s" },
        { text: "Are you there?", delay: "21d" }
      ],
      endOfChapter: { title: "You changed places", subtitle: "Three weeks from now a new night guard will read your threads and an unknown number will text the desk. It will spell everything right." }
    },

    ch7_step_back: {
      messages: [
        { system: "The doors close on nothing. The indicator goes up, past 11, and stops where there is no number. The lights in the lobby flicker in a rhythm like someone hitting the same key.", delay: "6s" },
        { text: "You were told what to do.", delay: "5s" },
        { text: "desk. desk the panel. 11c. run", delay: "4s" },
        { system: "The elevator comes back down, empty, and opens. Priya steps in to look at the panel, because somebody should. She is still in it when the doors close. Up there it is still 3:12.", delay: "6s", if: { flag: "priya_here", min: 1 }, set: { priya_lost: 1 } },
        { system: "Eleven floors of stairs. Seven minutes. The closet panel is open on the coats, and Dana Reyes is sitting against the dresser holding her left arm and a 1974 cardigan, and swearing at you in two languages.", delay: "20s", set: { dana_hurt: 1 } },
        { text: "you took your time desk", delay: "6s" },
        { text: "it followed me to the panel. i said my own name at it. all of it. li dan reyes. it let go", delay: "8s" },
        { text: "priya", delay: "5s", if: { flag: "priya_lost", min: 1 } },
        { text: "desk where is priya", delay: "4s", if: { flag: "priya_lost", min: 1 } }
      ],
      goto: "ch7_step_back_end"
    },

    ch7_step_back_end: {
      messages: [
        { to: "dana_real", text: "This is Dana. My number. The real one.", delay: "6h", notify: true },
        { to: "dana_real", text: "Arm's broken. Toto's fine. We need to talk about Priya.", delay: "6s", if: [{ flag: "priya_lost", min: 1 }, { flag: "toto_home", min: 1 }] },
        { to: "dana_real", text: "Arm's broken. Going to get my cat. And we need to talk about Priya.", delay: "6s", if: [{ flag: "priya_lost", min: 1 }, { flag: "toto_home", max: 0 }] },
        { to: "dana_real", text: "Arm's broken. Toto's fine. You owe me breakfast and a new jacket, Desk.", delay: "6s", if: [{ flag: "priya_lost", max: 0 }, { flag: "toto_home", min: 1 }] },
        { to: "dana_real", text: "Arm's broken. Going to get my cat. You owe me breakfast and a new jacket, Desk.", delay: "6s", if: [{ flag: "priya_lost", max: 0 }, { flag: "toto_home", max: 0 }] },
        { to: "dana_real", text: "tom came down the stairs behind me. he doesnt remember any of it. lucky him", delay: "8s", if: { flag: "tom_lost", min: 1 } },
        { system: "Priya's thread says Delivered. It will keep saying it.", delay: "4s", if: { flag: "priya_lost", min: 1 } }
      ],
      endOfChapter: { title: "The doors closed", subtitle: "Dana came down the hard way. Whatever came down with the elevator went back up, and it did not go up alone if someone was standing in the lobby." }
    },

    ch7_desk: {
      messages: [
        { system: "{time}. You sit behind the desk with the sign up and both hands flat on the counter. The indicator goes to L. The doors open on nothing and close on nothing. Upstairs, very faintly, a piano stops in the middle of a bar.", delay: "12s" },
        { text: "desk", delay: "8s", notify: true },
        { text: "the panel. i got it open and you werent behind it. the room was dark and it was already coming down the stairs behind me so i went back up", delay: "7s" },
        { text: "its ok. its ok. i get another 3:12. i think. it doesnt", delay: "8s" },
        { status: "offline" },
        { system: "Delivered. Then not even that.", delay: "30s" },
        { to: "carl", text: "Morning. Per our chat: elevator's locked out for good as of today, structural inspection, no ETA. Sign stays up. Thanks for a quiet night.", delay: "6h", notify: true, if: { flag: "told_mgmt", min: 1 } },
        { to: "carl", text: "Morning. Harlow's decided: elevator's locked out for good, structural, no ETA. Sign stays up. Priya says you had a rough night. Take the day.", delay: "6h", notify: true, if: { flag: "told_mgmt", max: 0 } },
        { text: "still here. the F still sticks. do me a favour and feed the cat.", delay: "365d" }
      ],
      endOfChapter: { title: "Closed for good", subtitle: "A year from now the desk phone will get one more message from a number that doesn't exist. It will have no punctuation at all." }
    }

  }
};
