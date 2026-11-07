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
        { from: "them", text: "Hi, is the power out on the whole 4th floor or is it just me??", ago: "25d@23:40" },
        { from: "me", text: "Hi Marjorie, sorry about that! It's the whole block. PGE says it's a transformer, ETA about 45 min. I'll text you when it's back.", ago: "25d@23:45" },
        { from: "them", text: "Thank you Dana you're a star 🙏", ago: "25d@23:48" },
        { from: "me", text: "Back on! Let me know if the fridge acts up.", ago: "24d@0:31" },
        { from: "them", text: "All good. Night!", ago: "24d@0:33" }
      ]
    },
    {
      id: "tom", name: "Tom Okafor · 11A", saved: true,
      messages: [
        { from: "them", text: "Hey, can you let me know if an Amazon package shows up for me today? It's a birthday present, don't want it sitting out in the lobby.", ago: "5d@9:10" },
        { from: "me", text: "Of course, Tom. I'll text you the second it lands.", ago: "5d@9:12" },
        { from: "me", text: "It's here! Holding it behind the desk for you.", ago: "5d@15:05" },
        { from: "them", text: "You're the best. Be down in 10.", ago: "5d@15:08" }
      ]
    },
    {
      id: "hotwater", name: "+1 (503) 555-0192", saved: false,
      messages: [
        { from: "them", text: "Is this the front desk? There's no hot water in 7C", ago: "8d@8:05" },
        { from: "me", text: "Yes it is! Maintenance reset the boiler at 7:30, it should be hot again within the hour. Sorry about the cold shower.", ago: "8d@8:08" },
        { from: "them", text: "lol thanks", ago: "8d@8:15" }
      ]
    },
    {
      id: "parking", name: "+1 (971) 555-0133", saved: false,
      messages: [
        { from: "them", text: "Someone's parked in my spot. Space 22. Blue Subaru.", ago: "4d@17:20" },
        { from: "me", text: "On it. I'll leave a note and check the visitor log.", ago: "4d@17:22" },
        { from: "me", text: "It's a guest of 9F, they're moving it now. Sorry for the hassle!", ago: "4d@17:40" },
        { from: "them", text: "👍", ago: "4d@17:41" }
      ]
    },
    {
      id: "lena", name: "Lena Brightwater · 2F", saved: true,
      messages: [
        { from: "them", text: "Hi! Did anyone turn in a set of keys with a little fox keychain?", ago: "3d@18:05" },
        { from: "me", text: "Yes! Safe and sound here at the desk.", ago: "3d@18:07" },
        { from: "them", text: "Oh thank god. Coming down now", ago: "3d@18:08" }
      ]
    },
    {
      id: "priya", name: "Priya · Day Desk", saved: true,
      messages: [
        { from: "them", text: "Hi!! Priya here, day desk. Left the handover notes in the bottom drawer and a granola bar on top of them. Welcome to the Calloway 🙂", ago: "6d@15:50" },
        { from: "me", text: "Thank you! Found both.", ago: "6d@16:10" },
        { from: "them", text: "Ignore anything weird in the logbook, the last girl had a sense of humor", ago: "6d@16:20" }
      ]
    },
    {
      id: "okonkwo", name: "+1 (503) 555-0218", saved: false,
      messages: [
        { from: "them", text: "Hello, this is Grace Okonkwo, Dana's neighbor on Holgate. She hasn't been home in a week and her cat is crying. Is she working extra shifts?", ago: "14d@10:15" },
        { from: "me", text: "Hi Grace, this is the day desk. Dana doesn't work here anymore, sorry. I don't have another number for her.", ago: "14d@10:35" },
        { from: "them", text: "Oh. Well. I'll keep feeding him then.", ago: "14d@10:40" }
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
        { from: "me", text: "I quit. Sorry for the short notice.", ago: "158d@3:14" },
        { from: "them", text: "Sorry to hear that. Please leave the desk phone on the counter for Priya.", ago: "158d@8:02" },
        { from: "me", text: "I quit. Sorry for the short notice.", ago: "103d@3:14" },
        { from: "them", text: "Understood. Phone on the counter please.", ago: "103d@7:55" },
        { from: "me", text: "I quit. Sorry for the short notice.", ago: "49d@3:14" },
        { from: "them", text: "Ok.", ago: "49d@9:31" },
        { from: "me", text: "I quit. Sorry for the short notice.", ago: "21d@3:14" },
        { from: "them", text: "Dana? Call me when you see this.", ago: "21d@7:40" },
        { from: "them", text: "Reminder: new night attendant starts {weekday:-6d}. Dana's last shift was {date:-22d}. Please leave the handover notes in the bottom drawer.", ago: "7d@16:05" },
        { from: "me", text: "Will do.", ago: "7d@16:40" },
        { from: "them", text: "Also the elevator inspection got pushed again. Just put the sign back up if it does the thing.", ago: "2d@10:12" },
        { from: "me", text: "Which thing?", ago: "2d@16:20" },
        { from: "them", text: "Reminder: your on-call week starts tomorrow. Seven days, desk phone stays on you day and night. Priya has the landline. Desk 4 to 8, lock up at 8.", ago: "1d@11:30" }
      ]
    }
  ],

  // The incoming story thread.
  contact: { name: "+1 (503) 555-0147", saved: false },

  start: "ch1_start",

  nodes: {
    ch1_start: {
      messages: [
        { text: "are you there?", delay: "0s", notify: true },
        { text: "please. i know someone has the desk phone. it's the only number that reaches down there. don't ask me how yet", delay: "6s", notify: true }
      ],
      choices: [
        { text: "Who is this?", goto: "ch1_who" },
        { text: "This is the front desk at the Calloway. How can I help?", goto: "ch1_desk", set: { trust: 1 } },
        { text: "I think you have the wrong number.", goto: "ch1_wrong", set: { trust: -1 } }
      ]
    },

    ch1_who: {
      messages: [
        { text: "dana. i worked the desk. nights. before you", delay: "5s" },
        { text: "what did they tell you? that i quit?", delay: "4s" }
      ],
      choices: [
        { text: "I heard you don't work here anymore.", goto: "ch1_proof" },
        { text: "Nobody told me anything.", goto: "ch1_proof", set: { trust: 1 } },
        { text: "I'm the new night person. My name's", goto: "ch1_noname", set: { curiosity: 1 } }
      ]
    },

    // The player's first instinct is to introduce themselves. Dana stops it before the name is typed.
    ch1_noname: {
      messages: [
        { text: "don't", delay: "3s" },
        { text: "no names on this phone. not yours, not anyone's", delay: "5s" },
        { text: "i'll tell you why when i can", delay: "5s" }
      ],
      goto: "ch1_proof"
    },

    ch1_desk: {
      messages: [
        { text: "dana reyes. i had your job until three weeks ago", delay: "5s" },
        { text: "same desk. i sat where you're sitting", delay: "7s" },
        { text: "and you can drop the front desk voice. capital letters were for residents. doug spot-checks the resident threads", delay: "5s" }
      ],
      goto: "ch1_proof"
    },

    ch1_wrong: {
      messages: [
        { text: "it's not. this number is the desk phone", delay: "4s" },
        { text: "i used to be the one holding it", delay: "5s" },
        { text: "dana. nights. before you", delay: "3s" }
      ],
      goto: "ch1_proof"
    },

    ch1_proof: {
      messages: [
        { text: "i need you to do something and i need you to not ask why yet", delay: "8s" },
        { text: "go down to the desk if you're not there. sit where the lamp is. then look at camera 6, the elevator lobby. what floor is the elevator on?", delay: "8s" },
        { text: "i've got an old monitor up here that shows me the same lobby. mine has said 12 for three weeks. i need to know if yours does too", delay: "9s" },
        { system: "The desk lamp is on, the way it always is. The monitor cycles through the cameras to your left and stops on 6. The lobby is empty. Above the elevator doors, the floor indicator reads 12. It did that once on your second night. You thought it was a glitch.", delay: "1m", set: { k_floor12: 1, at_desk: 1 } }
      ],
      choices: [
        { text: "It says 12.", goto: "ch1_floor12", set: { knows_floor: 1, curiosity: 1 }, knows: ["k_floor12"] },
        { text: "I'm not looking at anything until you tell me what's going on.", goto: "ch1_stubborn", set: { trust: -1 } }
      ]
    },

    ch1_floor12: {
      messages: [
        { text: "okay. okay", delay: "4s" },
        { text: "then yours sees it too. it isn't just me up here", delay: "5s" },
        { image: "camera6", caption: "CAM 06 · ELEVATOR LOBBY", delay: "9s", set: { k_monitor_date: 1 } },
        { text: "that's my screen. same camera, same 12", delay: "5s" },
        { text: "there is no 12. the panel inside goes 11, 14. look next time you're in there", delay: "6s" }
      ],
      goto: "ch1_ask"
    },

    ch1_stubborn: {
      messages: [
        { text: "fair", delay: "5s" },
        { text: "three weeks ago i took the elevator up at 3:12. it didn't stop at 11. it didn't stop at 14", delay: "9s" },
        { text: "i'm still up here", delay: "6s" },
        { image: "camera6", caption: "CAM 06 · ELEVATOR LOBBY", delay: "7s", set: { k_monitor_date: 1 } },
        { text: "that's mine. up here", delay: "4s" }
      ],
      goto: "ch1_ask"
    },

    // The player is holding a building's desk phone; they get to demand answers before doing anything for her.
    ch1_ask: {
      messages: [
        { text: "i know. you've got questions. ask. fast", delay: "6s" }
      ],
      choices: [
        { text: "Where are you, exactly?", goto: "ch1_a_where", set: { a1_where: 1 } },
        { text: "What happened to the night staff before you?", goto: "ch1_a_guards", set: { a1_guards: 1, curiosity: 1 } },
        { text: "Why should I believe any of this?", goto: "ch1_a_believe", set: { a1_believe: 1 } }
      ]
    },

    ch1_ask_hub: {
      messages: [],
      choices: [
        { text: "Where are you, exactly?", goto: "ch1_a_where", set: { a1_where: 1 }, if: { flag: "a1_where", max: 0 } },
        { text: "What happened to the night staff before you?", goto: "ch1_a_guards", set: { a1_guards: 1, curiosity: 1 }, if: { flag: "a1_guards", max: 0 } },
        { text: "Why should I believe any of this?", goto: "ch1_a_believe", set: { a1_believe: 1 }, if: { flag: "a1_believe", max: 0 } }
      ]
    },

    ch1_a_where: {
      messages: [
        { text: "same building. between 11 and 14, where the panel says there's nothing", delay: "8s" },
        { text: "same hallways, wrong decade. ashtrays. a calendar on the wall that says 1974", delay: "8s" },
        { text: "i'm in a stairwell. it's the only place the hum doesn't reach", delay: "6s" },
        { text: "and before you ask: the stairs here only go up, and up ends at a door i can't open. i've tried down. every landing is 12 again", delay: "8s" },
        { text: "my phone says three weeks. my body says one long night that keeps restarting. i haven't been hungry once. i'm trying not to think about what that means", delay: "10s" }
      ],
      goto: [{ if: [{ flag: "a1_where", min: 1 }, { flag: "a1_guards", min: 1 }, { flag: "a1_believe", min: 1 }], goto: "ch1_clock" }, { goto: "ch1_ask_hub" }]
    },

    ch1_a_guards: {
      messages: [
        { text: "open doug's thread on that phone. scroll up. count the 'i quit's", delay: "6s" },
        { system: "You open it. Messages sent from this phone, all with the same words: I quit. Sorry for the short notice. All of them at 3:14 in the morning.", delay: "6s", set: { k_quits_seen: 1 } },
        { text: "every night i had that phone, i read those three. {month:-158d}, {month:-103d}, {month:-49d}. three of us on nights, gone, same words, same minute", delay: "10s" },
        { text: "i spent a month trying to find out where they went", delay: "6s" },
        { text: "how many are there now?", delay: "5s" }
      ],
      choices: [
        { text: "Four. The last one is from {date:-21d}.", goto: "ch1_a_fourth", set: { k_fourth_told: 1 }, knows: ["k_quits_seen"] }
      ]
    },

    ch1_a_fourth: {
      messages: [
        { text: "{date:-21d}", delay: "8s" },
        { text: "that's my night. i didn't send that. i was already up here", delay: "7s", knows: ["k_fourth_told"] },
        { text: "and doug just said okay. three times. nobody came looking", delay: "8s" }
      ],
      choices: [
        { text: "Then who sent yours?", goto: "ch1_a_who_sent" },
        { text: "Doug asked you to call him. It's right under it.", goto: "ch1_a_doug_call", knows: ["k_quits_seen"] }
      ]
    },

    ch1_a_who_sent: {
      messages: [
        { text: "i don't know yet. the same thing that sent the other three, from the same phone you're holding", delay: "9s" }
      ],
      goto: [{ if: [{ flag: "a1_where", min: 1 }, { flag: "a1_guards", min: 1 }, { flag: "a1_believe", min: 1 }], goto: "ch1_clock" }, { goto: "ch1_ask_hub" }]
    },

    ch1_a_doug_call: {
      messages: [
        { text: "and when i didn't call, he hired you", delay: "7s" }
      ],
      goto: [{ if: [{ flag: "a1_where", min: 1 }, { flag: "a1_guards", min: 1 }, { flag: "a1_believe", min: 1 }], goto: "ch1_clock" }, { goto: "ch1_ask_hub" }]
    },

    ch1_a_believe: {
      messages: [
        { text: "you shouldn't. not yet. open the bottom drawer. the logbook. my last entry", delay: "8s" },
        { system: "The logbook's last page, in fast handwriting: '{date:-21d}. 3:05. Indicator on 12 again. Third time this month. Going up to look. Just look, doors held. Card's under this book so whoever's next can find it if I'm stupid. If I'm not back by'", delay: "6s" },
        { text: "that's where i stopped. i meant to finish that sentence", delay: "7s" }
      ],
      goto: [{ if: [{ flag: "a1_where", min: 1 }, { flag: "a1_guards", min: 1 }, { flag: "a1_believe", min: 1 }], goto: "ch1_clock" }, { goto: "ch1_ask_hub" }]
    },

    ch1_clock: {
      messages: [
        { text: "what time is it down there?", delay: "5s" }
      ],
      choices: [
        { text: "{time}", goto: "ch1_plan", set: { gave_time: 1 } },
        { text: "Why does that matter?", goto: "ch1_plan", set: { curiosity: 1 } }
      ]
    },

    ch1_plan: {
      messages: [
        { text: "{time}. okay. just wanted to know you're real. mine says 3:02. doesn't matter what yours says. when mine says 3:12, the car comes. ten minutes, maybe", delay: "6s", if: { flag: "gave_time", min: 1 } },
        { text: "because it's 3:02 up here, and the clocks don't agree. for you it's maybe ten minutes away. don't do the math", delay: "6s", if: { flag: "gave_time", max: 0 } },
        { text: "this is what it sounds like at 3:12. i recorded the last one with the stairwell door open. don't play it loud", delay: "8s" },
        { audio: "hum", duration: 11, delay: "4s", set: { heard_hum: 1 } }
      ],
      choices: [
        { text: "What is that?", goto: "ch1_plan_2", set: { curiosity: 1 } },
        { text: "I can feel it in my teeth.", goto: "ch1_plan_2", set: { trust: 1 } }
      ]
    },

    ch1_plan_2: {
      messages: [
        { text: "that's not a fan. it comes up through the floor every night at 3:12. teeth first, then ears", delay: "10s" },
        { text: "when my clock says 3:12, the car will come down to L and open. nobody will be in it", delay: "10s" },
        { text: "do not get in", delay: "3s" },
        { text: "and no, i can't ride it back. up here its doors don't open for me, only for whatever's inside. they opened once, the night i came up", delay: "10s" },
        { text: "lift the logbook. my key card is taped underneath. blue lanyard. i meant to hold the doors and look. i stepped out", delay: "10s" },
        { text: "every door up here has the same card readers as ours, bolted onto 1974 doors. the card's coded to the building, not the year. without it all i've got is the elevator lobby up here and the stairwell. the monitor's in the lobby, by the stairwell door. every other door is locked", delay: "11s" },
        { text: "when the doors open, put the card on the floor of the car and step back", delay: "7s" },
        { text: "when the hum starts i have to be in the stairwell. there's no monitor in there. so you're my eyes. tell me what the indicator does", delay: "11s" },
        { text: "i have to go dark now. it hears the phone", delay: "7s" },
        { status: "offline" }
      ],
      choices: [
        { text: "Dana? What hears the phone?", goto: "ch1_wait", set: { curiosity: 1 } },
        { text: "Okay. I'll be ready.", goto: "ch1_wait", set: { trust: 1 } },
        { text: "This is a prank and I'm done.", goto: "ch1_wait", set: { trust: -1, prank: 1 } }
      ]
    },

    // The long gap. In the real game this is the actual wait until 3:12.
    ch1_wait: {
      messages: [
        { system: "You tell yourself it's a prank. You lift the logbook anyway.", delay: "20s", if: { flag: "prank", min: 1 } },
        { system: "You lift the logbook.", delay: "20s", if: { flag: "prank", max: 0 } },
        { system: "A blue lanyard is taped underneath, a key card on the end of it: DANA R., NIGHTS.", delay: "5s", set: { k_card: 1 } },
        { system: "On camera 6 the indicator starts to drop. 12. 11. 10. All the way to L.", delay: "8m", notify: true },
        { text: "i can hear it in the shaft. it's going down", delay: "6s", notify: true },
        { system: "You walk to the elevator, the card in your hand. The doors stand open on an empty car.", delay: "20s" },
        { text: "please", delay: "8s", notify: true }
      ],
      choices: [
        { text: "Card's in. Stepping back.", goto: "ch1_end_card", set: { card_in_elevator: 1, trust: 1 }, knows: ["k_card"] },
        { text: "I'm getting in.", goto: "ch1_death_elevator" },
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
        { text: "tell me what it says", delay: "6s" }
      ],
      choices: [
        { text: "It stopped on 12.", goto: "ch1_end_card_2", set: { knows_floor: 1 } },
        { text: "It went past 11 and the number isn't on the panel.", goto: "ch1_end_card_2", set: { curiosity: 1 } }
      ]
    },

    ch1_end_card_2: {
      messages: [
        { text: "hum's dropping. going out", delay: "25s", notify: true },
        { text: "then it reached me", delay: "35s", notify: true },
        { text: "i have my card. that means the doors up here open for me again", delay: "7s" },
        { text: "thank you. i mean it", delay: "5s" },
        { text: "i'll write when it's safe. it might be a while. keep that phone on you. it's the only line i've got", delay: "9s" },
        { status: "offline" },
        { system: "Two minutes later the desk phone lights up on its own. Doug's thread is open. In the text field, letters you didn't type: I q", delay: "2m", notify: true },
        { system: "They delete themselves, one by one, until the field is empty.", delay: "5s" }
      ],
      endOfChapter: { title: "End of Chapter 1", subtitle: "Dana has her key card. Something else tried to use your phone.", next: "ch2_start" }
    },

    ch1_end_police: {
      messages: [
        { text: "they'll come. they'll look at camera 6", delay: "6s" },
        { text: "they'll see an empty lobby, and you texting a number nobody can call back", delay: "8s" },
        { system: "The elevator doors close on their own. The indicator stays on L." },
        { text: "i'll try again tomorrow. if it lets me", delay: "20s", notify: true },
        { status: "offline" }
      ],
      endOfChapter: { title: "End of Chapter 1", subtitle: "Dana is still up there. The police are on their way.", next: "ch1b_retry" }
    },

    // ---------- Night 1b: only for players who called the police. Next 3:12, same choice, no way around it. ----------
    ch1b_retry: {
      messages: [
        { to: "carl", text: "Portland Police called me about a welfare check from the desk line. Camera 6 shows an empty lobby. Let's not do that again, please.", delay: "day", notify: true, if: { flag: "retry_seen", max: 0 } },
        { text: "they came, didn't they", delay: "night", notify: true, if: { flag: "retry_seen", max: 0 } },
        { text: "i watched them on the monitor. two of them. one stood in the car a long time with the doors open", delay: "9s", if: { flag: "retry_seen", max: 0 } },
        { text: "same time. same doors", delay: "night", notify: true, if: { flag: "retry_seen", min: 1 } },
        { text: "it's 3:11 up here. i'm not going to beg twice", delay: "12s" },
        { system: "On camera 6 the indicator drops. 12. 11. 10. All the way to L.", delay: "50s" },
        { system: "You walk to the elevator. The doors stand open on an empty car.", delay: "15s" },
        { text: "doors", delay: "6s", notify: true }
      ],
      choices: [
        { text: "Card's in. Stepping back.", goto: "ch1b_card", set: { card_in_elevator: 1, retry_seen: 1 }, knows: ["k_card"] },
        { text: "I'm getting in.", goto: "ch1_death_elevator" },
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
        { text: "hum's dropping. going out", delay: "25s", notify: true },
        { text: "then it reached me", delay: "35s", notify: true },
        { text: "i have my card. the doors up here open for me again", delay: "7s" },
        { text: "thank you. i mean it. even if you made me wait a night", delay: "8s", if: { flag: "retry_seen", max: 1 } },
        { text: "thank you. i mean it. even if you made me wait", delay: "8s", if: { flag: "retry_seen", min: 2 } },
        { text: "i'll write when it's safe. keep that phone on you. it's the only line i've got", delay: "9s" },
        { status: "offline" },
        { system: "Two minutes later the desk phone lights up on its own. Doug's thread is open. In the text field, letters you didn't type: I q", delay: "2m", notify: true },
        { system: "They delete themselves, one by one, until the field is empty.", delay: "5s" }
      ],
      goto: "ch2_start"
    },

    // ---------- Day 2: Toto, the free room, the piano. Dana explores Ward 12; the player gets to know her. ----------
    ch2_start: {
      messages: [
        { text: "you up?", delay: "day", notify: true },
        { text: "sorry. old habit. when i had your job i'd sleep till two after a night like that", delay: "8s" },
        { text: "i know it's different now. you get the apartment and a bed, and the phone on the nightstand. doug was already talking about changing it before i left. cheaper than paying someone to stay awake", delay: "12s" },
        { text: "i'm in. the card worked. i've been walking for what feels like an hour and the clock on the wall says it's been four minutes", delay: "14s" }
      ],
      choices: [
        { text: "I'm here. Are you okay?", goto: "ch2_inside", set: { trust: 1 } },
        { text: "Where have you been? It's been hours down here.", goto: "ch2_inside" },
        { text: "Dana, what is that place?", goto: "ch2_inside", set: { curiosity: 1 } }
      ]
    },

    ch2_inside: {
      messages: [
        { text: "i'm okay. define okay. i'm not bleeding", delay: "6s" },
        { text: "walking it is worse than describing it. same hallways, same stupid narrow windows, an ashtray on every table. everything's beige", delay: "12s" },
        { image: "ward12", caption: "Sent 1 photo", delay: "9s", set: { saw_photo: 1 } },
        { text: "nobody's here. i keep wanting to write 'everybody's here' and i don't know why", delay: "11s" },
        { text: "before anything else. i need a favor and it's going to sound insane given the circumstances", delay: "10s" }
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
        { text: "i have a cat. toto. orange, one ear, judgmental", delay: "6s" },
        { text: "my neighbor mrs. okonkwo will have been feeding him since i didn't come home. she'll have texted the desk by now too, she's that kind. check the phone", delay: "13s" },
        { text: "her lease doesn't allow pets and her landlord is the kind who counts. she can't keep doing it", delay: "9s" },
        { text: "i need him somewhere i know. 4017 SE holgate, unit 3. key's under the dead fern. don't judge the fern", delay: "10s", set: { k_dana_home: 1 } },
        { text: "take him to your place", delay: "5s" }
      ],
      choices: [
        { text: "I'll go get him today.", goto: "ch2_toto_yes", set: { fed_toto: 1, trust: 2, toto_trip: 1 } },
        { text: "I'll ask Mrs. Okonkwo to hang on a few more days.", goto: "ch2_toto_later", set: { fed_toto: 1 } },
        { text: "Dana, I'm not crossing town for a cat right now.", goto: "ch2_toto_no", set: { trust: -2 } }
      ]
    },

    ch2_toto_yes: {
      messages: [
        { text: "okay", delay: "6s" },
        { text: "okay. thank you", delay: "4s" },
        { text: "he bites when he's happy. don't take it personally. text me when you've got him", delay: "7s" },
        { text: "and while you're there. behind my bedroom door there's a wall of paper. everything i found out about the three before me, before i went up", delay: "12s", set: { k_wall_told: 1 } },
        { text: "photograph it and send it to me, one piece at a time. i'll tell you what each one means. then it's on two phones and not just one wall somebody can tidy away", delay: "11s" },
        { text: "i'm going to look at the rest of this floor while you're gone", delay: "6s" },
        { status: "offline" },
        { system: "Bus 17 to SE Holgate. Unit 3 has a dead fern, a key under it, and a very loud cat behind the door.", delay: "50m" },
        { to: "okonkwo", text: "Are you the one from the building? I saw you go in. This is the only number I have for you people, the one Dana gave me. If you're here for Toto, his carrier's in the hall closet and his food's under the sink.", delay: "20s", notify: true }
      ],
      thread: "okonkwo",
      choices: [
        { text: "Yes, that's me. Thank you for looking after him, Grace.", goto: "ch2_toto_home", set: { trust: 1 } },
        { text: "That's me. Thank you.", goto: "ch2_toto_home" }
      ]
    },

    ch2_toto_home: {
      messages: [
        { to: "okonkwo", text: "Have you heard from her? Anything?", delay: "9s", if: { flag: "grace_texted", max: 0 } },
        { to: "okonkwo", text: "All right. Be quick, he gets ideas about the door.", delay: "9s", if: { flag: "grace_texted", min: 1 } }
      ],
      thread: "okonkwo",
      choices: [
        { text: "I'm trying to find out.", goto: "ch2_grace_man", set: { trust: 1 }, if: { flag: "grace_texted", max: 0 } },
        { text: "Nothing I can explain yet.", goto: "ch2_grace_man", if: { flag: "grace_texted", max: 0 } },
        { text: "I will.", goto: "ch2_grace_man", if: { flag: "grace_texted", min: 1 } }
      ]
    },

    ch2_grace_man: {
      messages: [
        { to: "okonkwo", text: "If you do hear from her, tell her to call her mother.", delay: "8s", if: { flag: "grace_away", max: 0 } },
        { to: "okonkwo", text: "If she's just away, tell her to call her mother.", delay: "8s", if: { flag: "grace_away", min: 1 } },
        { to: "okonkwo", text: "A man came on {weekday:-3d} asking for her things. Said he was from the building. I didn't let him in. Was that right?", delay: "12s" }
      ],
      thread: "okonkwo",
      choices: [
        { text: "That was right. Please don't let anyone in.", goto: "ch2_wall", set: { grace_man: 1, trust: 1 } },
        { text: "Probably my manager. You did the right thing.", goto: "ch2_wall", set: { grace_man: 1 } }
      ]
    },

    // Dana's own investigation. The player sees it before she explains it, and sends it to her photo by photo.
    ch2_wall: {
      messages: [
        { to: "okonkwo", text: "Good. Lock the door behind you, dear.", delay: "8s" },
        { system: "Dana's bedroom door. Behind it the whole wall is paper: a handwritten list of names and dates, a photocopied newspaper clipping, and a floor plan of the Calloway with two floors crossed out. A yellow sticky note on the plan.", delay: "1m", set: { k_wall: 1 } }
      ],
      choices: [
        { text: "The list", goto: "ch2_w_list", image: "wall_list", caption: "You sent a photo", set: { w_list: 1 }, knows: ["k_wall"] },
        { text: "The clipping", goto: "ch2_w_clip", image: "wall_clipping", caption: "You sent a photo", set: { w_clip: 1 }, knows: ["k_wall"] },
        { text: "The floor plan", goto: "ch2_w_plan", image: "wall_plan", caption: "You sent a photo", set: { w_plan: 1 }, knows: ["k_wall"] }
      ]
    },

    ch2_wall_hub: {
      messages: [],
      choices: [
        { text: "The list", goto: "ch2_w_list", image: "wall_list", caption: "You sent a photo", set: { w_list: 1 }, if: { flag: "w_list", max: 0 } },
        { text: "The clipping", goto: "ch2_w_clip", image: "wall_clipping", caption: "You sent a photo", set: { w_clip: 1 }, if: { flag: "w_clip", max: 0 } },
        { text: "The floor plan", goto: "ch2_w_plan", image: "wall_plan", caption: "You sent a photo", set: { w_plan: 1 }, if: { flag: "w_plan", max: 0 } },
        { text: "Dana, why didn't you tell anyone about this?", goto: "ch2_w_why", set: { w_why: 1 }, if: { flag: "w_why", max: 0 } },
        { text: "A man from the building came for your things on {weekday:-3d}. Grace didn't let him in.", goto: "ch2_w_man", set: { w_man: 1 }, if: [{ flag: "w_man", max: 0 }, { flag: "grace_man", min: 1 }] }
      ]
    },

    ch2_w_list: {
      messages: [
        { text: "you're in. good", delay: "40s", notify: true, if: { flag: "w_first", max: 0 }, set: { w_first: 1 } },
        { text: "those are the three texts you counted. with names. m. okeke, b. tran, a. ferreira. on nights, all three", delay: "10s", knows: ["k_quits_seen"] },
        { text: "i kept their names on paper, not on this phone. i know, i just typed them. it already has those three", delay: "9s" },
        { text: "nobody overlapped. each one started a few days after the last one quit. doug hires fast", delay: "8s" },
        { text: "i started a few days after ferreira. marjorie in 4B counted them before i did. she keeps track of the night clerks like other people watch birds", delay: "10s", set: { k_marjorie_counts: 1 } },
        { text: "the question mark at the bottom was going to be me. i just didn't know it yet", delay: "8s" }
      ],
      goto: [{ if: [{ flag: "w_list", min: 1 }, { flag: "w_clip", min: 1 }, { flag: "w_plan", min: 1 }], goto: "ch2_wall_done" }, { goto: "ch2_wall_hub" }]
    },

    ch2_w_clip: {
      messages: [
        { text: "you're in. good", delay: "40s", notify: true, if: { flag: "w_first", max: 0 }, set: { w_first: 1 } },
        { text: "the oregonian, november 15, 1974. a power failure on the upper floors. fire crews in the lobby for an hour, nobody hurt", delay: "11s" },
        { text: "read the last line. 'The building's owner, the Ashgrove Institute, declined to comment.'", delay: "7s", set: { k_ashgrove: 1 } },
        { text: "an institute. it wasn't apartments then. not the top of it", delay: "7s" },
        { text: "and the date on my monitor up here says 11-14-74. the night that paper is about", delay: "9s", knows: ["k_monitor_date"] }
      ],
      goto: [{ if: [{ flag: "w_list", min: 1 }, { flag: "w_clip", min: 1 }, { flag: "w_plan", min: 1 }], goto: "ch2_wall_done" }, { goto: "ch2_wall_hub" }]
    },

    ch2_w_plan: {
      messages: [
        { text: "you're in. good", delay: "40s", notify: true, if: { flag: "w_first", max: 0 }, set: { w_first: 1 } },
        { text: "1979 renovation drawings. the city keeps them on microfiche. three dollars a page", delay: "8s" },
        { text: "look at 12 and 13. 'Infill, solid.' they didn't take two floors out. they filled them with concrete and took two buttons off the panel", delay: "10s", set: { k_infill: 1 } },
        { text: "so yes, i know. i'm standing in concrete. don't ask me how that works, i'm in a hallway with carpet", delay: "9s" },
        { text: "the sticky note says ASHGROVE?? ask marjorie. i did ask her. she said come up for tea that weekend and she'd tell me everything. i went up before the weekend came", delay: "10s", set: { k_marjorie_tea: 1 } }
      ],
      goto: [{ if: [{ flag: "w_list", min: 1 }, { flag: "w_clip", min: 1 }, { flag: "w_plan", min: 1 }], goto: "ch2_wall_done" }, { goto: "ch2_wall_hub" }]
    },

    ch2_w_why: {
      messages: [
        { text: "i did. i told doug about the three. he said turnover is the nature of nights", delay: "9s" },
        { text: "then i told the police. they read the three texts and said people quit", delay: "8s" },
        { text: "so i stopped telling and started looking", delay: "5s" }
      ],
      goto: [{ if: [{ flag: "w_list", min: 1 }, { flag: "w_clip", min: 1 }, { flag: "w_plan", min: 1 }], goto: "ch2_wall_done" }, { goto: "ch2_wall_hub" }]
    },

    ch2_w_man: {
      messages: [
        { text: "doug doesn't do house calls", delay: "8s" },
        { text: "so somebody sent him. somebody who thinks there's something here worth taking. good for grace", delay: "9s" }
      ],
      goto: [{ if: [{ flag: "w_list", min: 1 }, { flag: "w_clip", min: 1 }, { flag: "w_plan", min: 1 }], goto: "ch2_wall_done" }, { goto: "ch2_wall_hub" }]
    },

    ch2_wall_done: {
      messages: [
        { text: "so now you know what i knew when i went up. it's not much. it was enough to get me here", delay: "10s" },
        { text: "take the sticky note. leave the rest. if he comes back for it, let him think i never got past three names, a newspaper and a drawing", delay: "9s", set: { has_note: 1 }, if: { flag: "w_man", min: 1 } },
        { text: "take the sticky note. leave the rest. if somebody comes for it, let them think i never got past three names, a newspaper and a drawing", delay: "9s", set: { has_note: 1 }, if: { flag: "w_man", max: 0 } },
        { system: "Back in 11C. Toto walks the whole room once, then sits on the bed and stares at the ceiling.", delay: "40m", if: { flag: "toto_trip", min: 1 } },
        { system: "Bus 17 back to the Calloway and up to 11C, the yellow note in your pocket. Toto stays behind with Grace.", delay: "40m", if: { flag: "toto_trip", max: 0 } }
      ],
      goto: [{ if: { flag: "toto_trip", min: 1 }, goto: "ch2_toto_back" }, { goto: "ch2_perk" }]
    },

    ch2_toto_back: {
      messages: [],
      choices: [
        { text: "Send photo", goto: "ch2_toto_photo", image: "toto", caption: "You sent a photo", set: { fed_toto: 1, toto_home: 1, toto_pic: 1 } },
        { text: "Got him. He's in 11C.", goto: "ch2_toto_text", set: { fed_toto: 1, toto_home: 1 } }
      ]
    },

    ch2_toto_photo: {
      messages: [
        { text: "oh", delay: "25s", notify: true },
        { text: "oh he's fat. grace has been feeding him like a grandmother", delay: "6s" },
        { text: "he's looking at the ceiling. he knows where i am", delay: "8s" },
        { text: "thank you. i mean it", delay: "5s" },
        { text: "🐈", delay: "3s" }
      ],
      goto: "ch2_perk"
    },

    ch2_toto_text: {
      messages: [
        { text: "you're a saint. a saint in a staff residence with a no-pets clause", delay: "25s", notify: true, set: { toto_text: 1 } },
        { text: "does he sit and look at the ceiling? he does that at home with the upstairs neighbor. up here that's me", delay: "10s" },
        { text: "🐈", delay: "3s" }
      ],
      goto: "ch2_perk"
    },

    ch2_toto_later: {
      messages: [
        { text: "she'll say yes. she always says yes. that's the problem", delay: "7s" },
        { text: "fine. a few days. then he's yours. her number will be in that phone somewhere", delay: "8s" }
      ],
      thread: "okonkwo",
      choices: [
        { text: "Hi Grace, it's the front desk at the Calloway. Could you keep Dana's cat a few more days? I'll come get him.", goto: "ch2_toto_later_2", set: { grace_texted: 1 } }
      ]
    },

    ch2_toto_later_2: {
      messages: [
        { to: "okonkwo", text: "A few days is fine. He misses her. Is she alright?", delay: "3m", notify: true }
      ],
      thread: "okonkwo",
      choices: [
        { text: "She's alright. She's just away.", goto: "ch2_wall_ask", set: { told_okonkwo: 0, grace_away: 1 } },
        { text: "I honestly don't know yet.", goto: "ch2_wall_ask", set: { trust: 1 } }
      ]
    },

    ch2_toto_no: {
      messages: [
        { text: "ok", delay: "30s" },
        { text: "no, you're right. you don't know me. i asked a stranger to adopt my cat from a haunted hallway", delay: "2m" },
        { text: "forget it. mrs. O will manage", delay: "8s" }
      ],
      goto: "ch2_wall_ask"
    },

    // Players who don't fetch the cat still go for the wall: it's the investigation, not a favor.
    ch2_wall_ask: {
      messages: [
        { text: "one thing i do need, and it isn't the cat. behind my bedroom door at home there's a wall of paper. everything i found out about the three before me, before i went up", delay: "12s", set: { k_wall_told: 1 } },
        { text: "photograph it and send it to me, one piece at a time. i'll tell you what each one means. then it's on two phones and not just one wall somebody can tidy away", delay: "11s" },
        { text: "key's under the fern. i'll be walking the floor. text me from my bedroom", delay: "8s" }
      ],
      choices: [
        { text: "Okay. I'll go now.", goto: "ch2_wall_trip", set: { trust: 1 } },
        { text: "Not for the cat. For the wall. Fine.", goto: "ch2_wall_trip" }
      ]
    },

    ch2_wall_trip: {
      messages: [
        { status: "offline" },
        { system: "Bus 17 to SE Holgate. Unit 3 has a dead fern and a key under it. Toto shouts at you from the kitchen.", delay: "50m" },
        { to: "okonkwo", text: "I saw you go in. You came sooner than you said. He's fed, I was just there. Don't let him out.", delay: "20s", notify: true, if: { flag: "grace_texted", min: 1 } },
        { to: "okonkwo", text: "Are you the one from the building? I saw you go in. This is the only number I have for you people, the one Dana gave me. I'm still feeding him in there. Don't let him out.", delay: "20s", notify: true, if: { flag: "grace_texted", max: 0 } }
      ],
      thread: "okonkwo",
      choices: [
        { text: "It's me. I won't. Thank you, Grace.", goto: "ch2_toto_home", set: { trust: 1 } },
        { text: "I'll only be a few minutes.", goto: "ch2_toto_home" }
      ]
    },

    ch2_perk: {
      messages: [
        { text: "different question. the room they gave you. that one's about you", delay: "15s", if: { flag: "toto_trip", max: 0 } },
        { text: "the free room is the one real perk of the job. 'Staff residence, utilities included.' i never used it", delay: "9s" },
        { text: "toto doesn't do elevators, and i don't do no-pets clauses. i kept a box of stuff in the closet and that was it", delay: "10s" },
        { text: "which unit did they give you?", delay: "5s" }
      ],
      choices: [
        { text: "11C.", goto: "ch2_11c" },
        { text: "Why does it matter which unit?", goto: "ch2_11c", set: { curiosity: 1 } },
        { text: "I'd rather not say.", goto: "ch2_11c_careful", set: { trust: 1 } }
      ]
    },

    ch2_11c_careful: {
      messages: [
        { text: "good instinct. keep it", delay: "5s" },
        { text: "it's 11C though. they always give 11C. 'Top residential floor, for response time.'", delay: "9s" }
      ],
      goto: "ch2_sleep_under"
    },

    ch2_11c: {
      messages: [
        { text: "11C. they always give 11C. 'Top residential floor, for response time.'", delay: "7s" }
      ],
      goto: "ch2_sleep_under"
    },

    ch2_sleep_under: {
      messages: [
        { text: "and now it's sleep-in, so you don't even get to say no to the room. doug's idea. cheaper than someone awake in the chair, and closer to it", delay: "10s" },
        { text: "you sleep right under it. i need you to know that", delay: "8s" },
        { text: "tom in 11A says the ceiling hums. he thinks it's the HVAC", delay: "7s" },
        { text: "did they clear my box out of the closet?", delay: "9s" }
      ],
      choices: [
        { text: "The closet was empty when I moved in.", goto: "ch2_drawer" },
        { text: "I haven't looked. What was in it?", goto: "ch2_drawer", set: { curiosity: 1 } }
      ]
    },

    ch2_drawer: {
      messages: [
        { text: "doesn't matter. clothes, a lamp, a plant i killed. doug's people are efficient", delay: "8s" },
        { text: "do one thing for me. the dresser. pull the bottom drawer all the way out. it doesn't go all the way back", delay: "10s" },
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
        { text: "later", delay: "12s" },
        { text: "i'll tell you later. not because it's a secret. because i can't type it in a hallway like this", delay: "9s" },
        { text: "don't read the last page. please", delay: "6s" }
      ],
      goto: "ch2_evening"
    },

    ch2_notebook_safe: {
      messages: [
        { text: "thank you", delay: "6s" },
        { text: "don't read the last page. not yet", delay: "5s" }
      ],
      goto: "ch2_evening"
    },

    ch2_notebook_joke: {
      messages: [
        { text: "lol", delay: "5s" },
        { text: "a spy who dropped out of high school and lives with a one-eared cat. the agency has standards", delay: "8s" },
        { text: "it's not hidden. it fell. i didn't go back for it because i didn't want to be in that room longer than i had to", delay: "10s" },
        { text: "don't read the last page", delay: "5s" }
      ],
      goto: "ch2_evening"
    },

    // Evening desk. The player finds something on their own before Dana's next message.
    ch2_evening: {
      messages: [
        { system: "Evening desk, four to eight. Between a parcel and a lost key you wind camera 6 back to when the car came. Empty lobby, 12 above the doors the way you saw it, and then a hole: the timestamp jumps a quarter of an hour, right before the doors opened. No open car, no you walking over.", delay: "1h 30m", set: { k_tape: 1 } }
      ],
      choices: [
        { text: "Dana. The camera 6 recording has a hole in it. Right when the car came.", goto: "ch2_evening_dana", set: { knows_tape: 1, k_tape_told: 1 }, knows: ["k_tape"] },
        { text: "Say nothing. Keep watching the lobby.", action: "You say nothing and keep watching the lobby.", goto: "ch2_piano" }
      ]
    },

    ch2_evening_dana: {
      messages: [
        { text: "it always has a hole. every time it comes. i used to rewind it in the mornings", delay: "20s", notify: true, knows: ["k_tape_told"] },
        { text: "i showed doug once. he said the recorder's old. that was the whole conversation", delay: "8s" }
      ],
      goto: "ch2_piano"
    },

    ch2_piano: {
      messages: [
        { text: "you know the piano in the lounge off the lobby? the brown upright nobody tunes, behind the plant", delay: "20m", notify: true },
        { text: "it's up here too. same piano, in a day room at the end of the hall. couches, a TV with a dial. fifty years younger and still out of tune", delay: "12s" },
        { text: "long nights down there. it was nice to have something to do on the rounds besides check doors. i used to play it at four when the building was asleep. marjorie in 4B heard me once, god knows how, and sent down cake", delay: "14s" },
        { text: "here. don't laugh", delay: "6s" },
        { audio: "piano", duration: 14, delay: "40s" },
        { text: "mom taught me that one by ear on a piano behind our laundromat. she couldn't read a note. neither can i. i'm rusty. and the F sticks. up here and down there", delay: "12s" }
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
        { text: "Still. That was beautiful.", goto: "ch2_piano_warm", set: { spark: 1, piano_q: 1, pq_warm: 1 }, if: { flag: "pq_warm", max: 0 } },
        { text: "Where did you learn?", goto: "ch2_piano_curious", set: { curiosity: 1, piano_q: 1, pq_curious: 1 }, if: { flag: "pq_curious", max: 0 } },
        { text: "And the noise? Should you be playing up there at all?", goto: "ch2_piano_careful", set: { trust: 1, piano_q: 1, pq_careful: 1 }, if: { flag: "pq_careful", max: 0 } },
        { text: "What else is up there?", goto: "ch2_wristband" }
      ]
    },

    ch2_piano_warm: {
      messages: [
        { text: "it was a sticky F in a dead building. but thank you", delay: "7s" },
        { text: "nobody's said that to me in a while. toto's a tough crowd", delay: "6s" }
      ],
      goto: [{ if: { flag: "piano_q", min: 3 }, goto: "ch2_wristband" }, { goto: "ch2_piano_hub" }]
    },

    ch2_piano_curious: {
      messages: [
        { text: "six years of lessons from my mom, who learned from a record. we did clementi and teresa teng. in that order, every night", delay: "10s" },
        { text: "i quit when dad died. hands were needed elsewhere", delay: "8s" }
      ],
      goto: [{ if: { flag: "piano_q", min: 3 }, goto: "ch2_wristband" }, { goto: "ch2_piano_hub" }]
    },

    ch2_piano_careful: {
      messages: [
        { text: "lol you sound like my mother", delay: "6s" },
        { text: "it knows where i am. noise doesn't change that", delay: "8s" },
        { text: "silence is what it listens for", delay: "5s" }
      ],
      goto: [{ if: { flag: "piano_q", min: 3 }, goto: "ch2_wristband" }, { goto: "ch2_piano_hub" }]
    },

    ch2_wristband: {
      messages: [
        { text: "found this under the couch", delay: "25s" },
        { image: "wristband", caption: "Sent 1 photo", delay: "6s", set: { k_wristband: 1 } },
        { text: "PT-09. there are rooms down the hall with numbers on the doors. 1 to 13. beds with straps", delay: "11s" },
        { text: "ashgrove again. your clipping was right, desk", delay: "8s" }
      ],
      choices: [
        { text: "Desk?", goto: "ch2_desk_name", set: { wq_desk: 1 } },
        { text: "What is LANTERN?", goto: "ch2_lantern", set: { curiosity: 1, wq_lantern: 1 } },
        { text: "Dana, get out of that room.", goto: "ch2_getout", set: { trust: 1, wq_out: 1 } },
        { text: "Is that a tattoo on your wrist?", goto: "ch2_tattoo", set: { wq_tattoo: 1 } }
      ]
    },

    ch2_wristband_hub: {
      messages: [],
      choices: [
        { text: "Desk?", goto: "ch2_desk_name", set: { wq_desk: 1 }, if: { flag: "wq_desk", max: 0 } },
        { text: "What is LANTERN?", goto: "ch2_lantern", set: { curiosity: 1, wq_lantern: 1 }, if: { flag: "wq_lantern", max: 0 } },
        { text: "Dana, get out of that room.", goto: "ch2_getout", set: { trust: 1, wq_out: 1 }, if: { flag: "wq_out", max: 0 } },
        { text: "Is that a tattoo on your wrist?", goto: "ch2_tattoo", set: { wq_tattoo: 1 }, if: { flag: "wq_tattoo", max: 0 } }
      ]
    },

    ch2_tattoo: {
      messages: [
        { text: "three triangles. yes", delay: "6s" },
        { text: "long story. not today. today i'm busy being a ghost", delay: "7s", set: { k_tattoo: 1 } }
      ],
      goto: [{ if: [{ flag: "wq_desk", min: 1 }, { flag: "wq_lantern", min: 1 }, { flag: "wq_out", min: 1 }], goto: "ch2_game" }, { goto: "ch2_wristband_hub" }]
    },

    ch2_desk_name: {
      messages: [
        { text: "that's you. desk. you're the desk now", delay: "6s" },
        { text: "don't tell me your name. i'm serious. it reads over my shoulder, and it collects names", delay: "10s" },
        { text: "it's read everything we've sent today. the wall too. that's fine. it already knows what's on that wall. doug's people don't", delay: "9s" },
        { text: "desk is fine. desk is safe. i kind of like it", delay: "6s" }
      ],
      goto: [{ if: [{ flag: "wq_desk", min: 1 }, { flag: "wq_lantern", min: 1 }, { flag: "wq_out", min: 1 }], goto: "ch2_game" }, { goto: "ch2_wristband_hub" }]
    },

    ch2_lantern: {
      messages: [
        { text: "i don't know yet. it's on the wristband, and it's stenciled on a door my card doesn't work on. that one and the one at the top of the stairs. no reader. just a keyhole", delay: "9s" },
        { text: "whatever it was, they did it to people with numbers instead of names", delay: "8s" }
      ],
      goto: [{ if: [{ flag: "wq_desk", min: 1 }, { flag: "wq_lantern", min: 1 }, { flag: "wq_out", min: 1 }], goto: "ch2_game" }, { goto: "ch2_wristband_hub" }]
    },

    ch2_getout: {
      messages: [
        { text: "moving", delay: "5s" },
        { text: "hallway. better. you worry like a person with a name", delay: "8s" }
      ],
      goto: [{ if: [{ flag: "wq_desk", min: 1 }, { flag: "wq_lantern", min: 1 }, { flag: "wq_out", min: 1 }], goto: "ch2_game" }, { goto: "ch2_wristband_hub" }]
    },

    ch2_game: {
      messages: [
        { text: "i've got maybe two hours before it gets loud. entertain me, desk", delay: "20s" },
        { text: "two truths and a lie. 1. i dropped out of high school at fifteen. 2. i tended bar at a place called the lucky devil. 3. i've never been outside oregon", delay: "14s" }
      ],
      choices: [
        { text: "The lie is 1. You finished school.", goto: "ch2_game_wrong" },
        { text: "The lie is 2. No way that bar exists.", goto: "ch2_game_wrong2" },
        { text: "The lie is 3. You've been somewhere.", goto: "ch2_game_right", set: { curiosity: 1 } }
      ]
    },

    ch2_game_wrong: {
      messages: [
        { text: "nope. fifteen. dad died, the laundromat needed hands, school didn't", delay: "9s" },
        { text: "the lie is 3. sacramento, every christmas. my mom and her husband live there. the lucky devil is real and i'm not proud of it", delay: "11s" }
      ],
      goto: "ch2_game_turn"
    },

    ch2_game_wrong2: {
      messages: [
        { text: "the lucky devil is extremely real. SE powell. sticky floor, two pool tables, a regular named gus who tipped in scratch tickets", delay: "11s" },
        { text: "the lie is 3. sacramento, every christmas. my mom and her husband live there", delay: "9s" }
      ],
      goto: "ch2_game_turn"
    },

    ch2_game_right: {
      messages: [
        { text: "look at you", delay: "5s" },
        { text: "sacramento. every christmas. my mom and her husband live there. the other two are true and i'm not proud of the bar", delay: "10s" }
      ],
      goto: "ch2_game_turn"
    },

    ch2_game_turn: {
      messages: [
        { text: "your turn. no names. why did you take this job?", delay: "8s" }
      ],
      choices: [
        { text: "I needed it. A job that comes with a bed is a job you take.", goto: "ch2_game_need", set: { why_need: 1 } },
        { text: "Honestly? I was curious about the building.", goto: "ch2_game_curious", set: { why_curious: 1, curiosity: 1 } },
        { text: "Nobody else would hire me.", goto: "ch2_game_lost", set: { why_lost: 1 } }
      ]
    },

    ch2_game_need: {
      messages: [
        { text: "same. that's how this place gets you. it doesn't look for heroes. it looks for people who need the room. nobody comes looking for them", delay: "11s" }
      ],
      goto: "ch2_end"
    },

    ch2_game_curious: {
      messages: [
        { text: "curious", delay: "5s" },
        { text: "you and me and whoever came before us. great club. terrible retention", delay: "8s" }
      ],
      goto: "ch2_end"
    },

    ch2_game_lost: {
      messages: [
        { text: "yeah", delay: "6s" },
        { text: "that was me too. i'm not going to say it gets better. i'm going to say you're the only person who answered", delay: "11s" }
      ],
      goto: "ch2_end"
    },

    ch2_end: {
      messages: [
        { text: "it's getting quiet", delay: "90s" },
        { text: "that's the bad kind", delay: "4s" },
        { text: "one practical thing. my clock doesn't keep yours. right now mine says about one. if it keeps running like this, the next 3:12 lands around {window} your time", delay: "16s" },
        { text: "when are you off the desk?", delay: "6s" }
      ],
      choices: [
        { text: "Eight. I lock up at eight.", goto: "ch2_sleep_normal", set: { sleep_normal: 1 } },
        { text: "Whenever I want. Nobody checks.", goto: "ch2_sleep_late" },
        { text: "Tell me when to be done.", goto: "ch2_sleep_wake", set: { trust: 1 } }
      ]
    },

    ch2_sleep_normal: {
      messages: [
        { text: "lock up early tonight. then it's sleep-in after. lucky. i had to sit in that chair till seven", delay: "8s" },
        { text: "if anything happens while you're asleep later, i'll keep it short and tell you the rest when you're up. nothing you miss while you sleep is your fault. remember i said that", delay: "12s" }
      ],
      goto: "ch2_rule"
    },

    ch2_sleep_late: {
      messages: [
        { text: "doug checks. he watches camera 6 like it's cable. lock up a little early tonight. he won't notice fifteen minutes", delay: "7s" },
        { text: "and if it comes while you're not looking, i'll tell you what happened. nothing you miss is on you", delay: "10s" }
      ],
      goto: "ch2_rule"
    },

    ch2_sleep_wake: {
      messages: [
        { text: "before {window}. lock up, go up, lock your door", delay: "6s" },
        { text: "after that i'll wake you for people. not for noises. deal?", delay: "7s" }
      ],
      goto: "ch2_rule"
    },

    ch2_rule: {
      messages: [
        { text: "rule for tonight. lock up as soon as we're done here. be in 11C by {window} with the door locked. whatever you hear through the ceiling, you stay there. you don't come back down to the lobby. you don't help anyone into the elevator", delay: "10s" },
        { set: { k_stay_rule: 1 }, text: "and if someone's already in it at my 3:12, they stay in it. the doors open on a floor that looks like yours. same carpet, same light. it isn't. i stepped out. that's the whole story of how i got here", delay: "13s" },
        { text: "stay in the car, keep pressing L. that's all i know so far. it's more than i knew", delay: "8s" },
        { text: "phone on you around {window}. if anyone else texts the desk, you tell me before you answer them", delay: "11s" },
        { text: "one more thing. that LANTERN door. i knocked on it", delay: "10s", knows: ["k_wristband"] },
        { text: "something knocked back. twice. like it was counting", delay: "7s" },
        { text: "i have to go dark", delay: "8s" },
        { text: "🐈", delay: "3s", if: { flag: "fed_toto", min: 1 } },
        { status: "offline" }
      ],
      endOfChapter: { title: "End of Chapter 2", subtitle: "You've seen Dana's wall. Something behind the LANTERN door knocked back.", next: "ch3_start" }
    },

    // ---------- Night 2: Tom in 11A takes the elevator. The player talks to two people at once. ----------
    ch3_start: {
      messages: [
        { text: "it's 2:50 up here", delay: "night", notify: true },
        { text: "where are you?", delay: "5s" }
      ],
      choices: [
        { text: "11C. Door locked. Phone in hand.", goto: "ch3_ready", set: { trust: 1 } },
        { text: "Lobby. Just locking up.", goto: "ch3_lobby" },
        { text: "Does it matter?", goto: "ch3_ready" }
      ]
    },

    ch3_lobby: {
      messages: [
        { text: "lock it and go up. now. don't be anywhere near the car when it opens", delay: "9s" }
      ],
      goto: "ch3_ready"
    },

    ch3_ready: {
      messages: [
        { text: "okay. the hallway lights just started dimming one by one towards the elevator. they did that the night i came up", delay: "8s" },
        { text: "something's coming up. or someone", delay: "7s" },
        { to: "tom", text: "hey it's Tom, 11A. is the elevator doing the sign thing again? I'm in it. it stopped. panel's dark", delay: "40s", notify: true },
        { to: "tom", text: "just got home, pressed 11, it went past", delay: "6s", notify: true }
      ],
      thread: "tom",
      choices: [
        { text: "Tom, stay in the elevator. Don't get out when the doors open.", goto: "ch3_tom_stay", set: { trust: 1 }, knows: ["k_stay_rule"] },
        { text: "What does the indicator say?", goto: "ch3_tom_indicator", set: { curiosity: 1 } },
        { text: "Hang on. Let me check something.", goto: "ch3_tom_hangon" }
      ]
    },

    ch3_tom_stay: {
      messages: [
        { to: "tom", text: "ok??", delay: "6s" },
        { to: "tom", text: "why would I get out it's not my floor", delay: "4s" },
        { text: "the lights just went. all of them, down the hall. it only does that when it's got someone in the car", delay: "8s" },
        { text: "and you've gone quiet. is someone texting the desk? whoever's in that car, that's who they'd text. it's the only number in the building", delay: "7s" },
        { text: "who's texting you", delay: "4s" },
        { text: "desk. who", delay: "3s" }
      ],
      goto: "ch3_tell_dana"
    },

    ch3_tom_indicator: {
      messages: [
        { to: "tom", text: "nothing. it's dark. the little arrow is lit and pointing up", delay: "7s" },
        { text: "the lights just went. all of them, down the hall. it only does that when it's got someone in the car", delay: "8s" },
        { text: "and you've gone quiet. is someone texting the desk? whoever's in that car, that's who they'd text. it's the only number in the building", delay: "7s" },
        { text: "who's texting you", delay: "4s" },
        { text: "desk. who", delay: "3s" }
      ],
      goto: "ch3_tell_dana"
    },

    ch3_tom_hangon: {
      messages: [
        { to: "tom", text: "ok. quick please. it's humming", delay: "6s" },
        { text: "the lights just went. all of them, down the hall. it only does that when it's got someone in the car", delay: "6s" },
        { text: "and you've gone quiet. is someone texting the desk? whoever's in that car, that's who they'd text. it's the only number in the building", delay: "7s" },
        { text: "who's texting you", delay: "4s" },
        { text: "desk. who", delay: "3s" }
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
        { text: "you don't. nobody has this handled. which resident", delay: "6s" },
        { text: "never mind. i watched him get in on the monitor. tom, 11A, the one with the amazon boxes", delay: "8s" }
      ],
      goto: "ch3_dana_plan"
    },

    ch3_dana_plan: {
      messages: [
        { text: "okay. listen. the doors are going to open and it's going to look like 11", delay: "9s" },
        { text: "it isn't. the hallway up here has a payphone by the stairwell. his floor doesn't", delay: "8s" },
        { text: "he stays in the car. he presses L and keeps pressing it. he does not step out, not even one foot. tell him exactly that", delay: "11s" },
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
        { to: "tom", text: "I think it's Dana?? the woman from the night desk? she's waving me over", delay: "6s", notify: true },
        { text: "desk. something just walked past the day room door. in my jacket. wearing my face. if he can see it, tell him it isn't me", delay: "5s", notify: true }
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
        { text: "the car's still sitting at the end of the hall with the doors open. i can hear it", delay: "6s", notify: true },
        { text: "tell him to say his own name out loud. full name. out loud, not in a text. then press L again. i'll explain after", delay: "7s" }
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
        { to: "tom", text: "lobby. I'm in the lobby. what the fuck was that", delay: "25s", notify: true },
        { to: "tom", text: "that's the weirdest way I've ever seen an elevator get fixed", delay: "9s" },
        { to: "tom", text: "the name thing was a coincidence. it has to be", delay: "6s" },
        { to: "tom", text: "and if this is some kind of prank, there will be consequences. I'm not joking", delay: "7s" }
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
        { text: "he's down?", delay: "4s" }
      ],
      goto: "ch3_after_safe"
    },

    ch3_tom_safe_cover: {
      messages: [
        { to: "tom", text: "management knows?? and I'm paying $2400 a month", delay: "9s" },
        { to: "tom", text: "fine. stairs. eleven floors. great.", delay: "6s" },
        { to: "tom", text: "that elevator gets replaced or I'm out of my lease. tell Doug.", delay: "3m" },
        { text: "he's down?", delay: "4s" }
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
        { text: "we did that. i'm up here typing with one bar. you're the one who kept him in the box", delay: "9s" }
      ],
      goto: "ch3_name_rule"
    },

    ch3_name_rule: {
      messages: [
        { text: "the name thing. i found it in a chart in room 4 tonight. 'Subject reoriented by vocal self-identification.' it was how they brought people back when the machine went too far", delay: "14s" },
        { text: "here's how i read it. every name that goes over this phone, it keeps. it can't make anything up, so it collects. but your own name, out loud, in your own mouth, it can't hold on to", delay: "12s", set: { k_name_rule: 1 } },
        { text: "that's why tom had to say his. and that's why you never type yours. desk", delay: "7s" },
        { text: "the lights are coming back up. it's done for tonight. lock your door and get some sleep when you can. i mean it", delay: "10s" },
        { text: "🐈", delay: "3s", if: { flag: "fed_toto", min: 1 } },
        { status: "offline" }
      ],
      endOfChapter: { title: "End of Night 2", subtitle: "Tom Okafor took the stairs. Dana found a chart in room 4. The lights in 11C flickered once when the elevator came down.", next: "ch4_start" }
    },

    ch3_tom_stairs: {
      messages: [
        { to: "tom", text: "ok going", delay: "6s" },
        { to: "tom", text: "stairwell door's heavy", delay: "9s" },
        { text: "no. no no no. the doors closed. the car's going back down empty", delay: "12s", notify: true },
        { text: "desk, the stairwell up here just slammed", delay: "5s" },
        { text: "he's here", delay: "8s" },
        { to: "tom", text: "hello?", delay: "2m", notify: true },
        { to: "tom", text: "I'm on 11 but it's not 11", delay: "6s" },
        { to: "tom", text: "I can hear a piano", delay: "8s" },
        { text: "i'm going to find him. don't text him again tonight. it's reading his phone now", delay: "15s" },
        { status: "offline" }
      ],
      choices: [
        { text: "Go. Be careful.", goto: "ch3_lost_end", set: { tom_lost: 1, trust: 1 } },
        { text: "Dana, this is my fault.", goto: "ch3_lost_end_fault", set: { tom_lost: 1 } }
      ]
    },

    ch3_lost_end_fault: {
      messages: [
        { text: "it's the building's fault. it's been the building's fault since 1974", delay: "2h 30m", notify: true },
        { text: "i can't find him. the hallway's longer than it was", delay: "8s" }
      ],
      goto: "ch3_lost_end_2"
    },

    ch3_lost_end: {
      messages: [
        { text: "i can't find him. the hallway's longer than it was", delay: "2h 30m", notify: true }
      ],
      goto: "ch3_lost_end_2"
    },

    // ---------- Day 3: Priya has the phone. The player wakes up to a conversation they didn't have. ----------
    ch4_start: {
      messages: [
        { system: "You don't sleep after Tom. At eight you hand Priya the desk phone so you can try. You sleep until two.", delay: "day" },
        { text: "desk? you up?", delay: "20s" },
        { text: "found something. room 4 has a chart with a list of names on the back. staff, not patients. one of them is from 2003", delay: "9s" },
        { me: true, text: "Hi! This is Priya at the day desk 🙂 who is this?", delay: "40s" },
        { text: "priya", delay: "15s" },
        { text: "put the phone down", delay: "4s" },
        { me: true, text: "Excuse me?? Is this DANA?", delay: "20s" },
        { text: "i'm fine. i'm away. don't tell doug this number texted. please", delay: "12s" },
        { me: true, text: "Dana what the hell. Everyone thinks you ghosted. Marjorie filed a missing person thing. WHERE are you", delay: "25s" },
        { text: "the one on nights knows. ask them, not me. i have to go", delay: "14s" },
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
        { to: "tom", text: "hey. still taking the stairs. emailed Doug, he says 'inspection booked'. thanks again for last night", delay: "6m", if: [{ flag: "saved_tom", min: 1 }, { flag: "told_tom", min: 0 }] },
        { to: "tom", text: "hey. 'management knows' my ass. emailed Doug anyway. still taking the stairs", delay: "6m", if: [{ flag: "saved_tom", min: 1 }, { flag: "told_tom", max: -1 }] },
        { to: "carl", text: "Also Tom Okafor in 11A emailed about the elevator. Inspection is booked. Please put the Out of Service sign on the elevator tonight.", delay: "10s", if: { flag: "tom_lost", is: 0 } },
        { to: "carl", text: "Also, Tom Okafor's wife called. He didn't come home last night. If he contacts the desk, you call me first, not her. Thanks.", delay: "10s", if: { flag: "tom_lost", min: 1 } },
        { text: "did priya believe any of that", delay: "2m" }
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
        { text: "good. i mean it. lying to priya is the kindest thing you've done for her", delay: "8s" }
      ],
      goto: "ch4_dana_list"
    },

    ch4_dana_list: {
      messages: [
        { text: "it matters because of the list. the one on the back of the chart", delay: "9s" },
        { text: "it's in different handwriting. thirteen lines, ten names. the last four are this year. mine is number ten", delay: "11s" },
        { text: "number eleven is blank. it's been blank since i got here and today it isn't", delay: "10s" },
        { text: "it says desk", delay: "6s" }
      ],
      choices: [
        { text: "That's not a name. That's a joke you made.", goto: "ch4_desk_name" },
        { text: "Dana, get out of that room.", goto: "ch4_desk_name_safe", set: { trust: 1 } },
        { text: "Who wrote it?", goto: "ch4_desk_name", set: { curiosity: 1 } }
      ]
    },

    ch4_desk_name_safe: {
      messages: [
        { text: "i'm out. i'm in the day room with the piano. it's the only room that doesn't feel like it's listening", delay: "9s" }
      ],
      goto: "ch4_desk_name"
    },

    ch4_desk_name: {
      messages: [
        { text: "it's a joke i made. on this phone. which is how it knows the word", delay: "9s" },
        { text: "it can only write down what it's been given. that's the rule i keep finding. it doesn't invent. it copies", delay: "11s" },
        { text: "so as long as all it has is desk, all it can call is desk. you understand why i never asked", delay: "10s" },
        { text: "the chart in room 4 says one more thing, and i wish i'd read it before tom went up. 'Subject reoriented by vocal self-identification.' you say your own full name out loud and it has to let go. it's how they brought people back when the machine went too far", delay: "16s", if: { flag: "tom_lost", min: 1 } },
        { text: "every name that goes over this phone, it keeps. but your own name, out loud, in your own mouth, it can't hold on to. that's the difference. which is why you never type yours", delay: "10s", if: { flag: "tom_lost", min: 1 } },
        { text: "and when marjorie in 4B gets to you, and she will, she gets to everyone: talk to her. she was here when they poured the floors", delay: "12s" },
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
        { text: "I'm not supposed to socialize with residents. Sorry.", goto: "ch4_marjorie_cold" }
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
        { to: "marjorie", text: "Mr. Haskett's rule, not yours. He sends the same paragraph to every one of you. I've had eleven night clerks say that to me and I've outlived two building managers.", delay: "18s" },
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
        { text: "the car just went down. nobody called it", delay: "5s" },
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
        { text: "then stay inside and don't pick up if the lobby phone rings. it rings sometimes when the sign's down", delay: "10s" }
      ],
      goto: "ch4_end"
    },

    ch4_end: {
      messages: [
        { text: "lock your door, desk", delay: "8s" }
      ],
      choices: [
        { text: "Marjorie texted, like you said she would. Tea tomorrow after ten. She says the man who sold the building was called Ashgrove.", goto: "ch4_end_tea", set: { told_tea: 1, trust: 1 } },
        { text: "Goodnight, Dana.", goto: "ch4_end_quiet" }
      ]
    },

    ch4_end_tea: {
      messages: [
        { text: "ashgrove. same as my sticky note", delay: "7s" },
        { text: "go. take the note with you. then i'll tell you what else was on the back of that chart", delay: "8s" },
        { text: "🐈", delay: "3s", if: { flag: "fed_toto", min: 1 } },
        { status: "offline" }
      ],
      endOfChapter: { title: "End of Day 3", subtitle: "Priya knows something. Marjorie knows more. Name eleven on the list is a word only two people use.", next: "ch5_start" }
    },

    ch4_end_quiet: {
      messages: [
        { text: "night. tomorrow i'll tell you what else was on the back of that chart", delay: "7s" },
        { text: "🐈", delay: "3s", if: { flag: "fed_toto", min: 1 } },
        { status: "offline" }
      ],
      endOfChapter: { title: "End of Day 3", subtitle: "Priya knows something. Marjorie knows more. Name eleven on the list is a word only two people use.", next: "ch5_start" }
    },

    ch3_lost_end_2: {
      messages: [
        { text: "go to sleep, desk. i'll keep looking", delay: "7s" },
        { status: "offline" }
      ],
      endOfChapter: { title: "End of Night 2", subtitle: "Tom Okafor's thread says Delivered. Not Read. Dana is looking for him.", next: "ch4_start" }
    },
    // ---------------- Day 4 · The archive ----------------
    ch5_start: {
      messages: [
        { system: "You sleep badly and late. Light through the blind. The notebook is on the table where you left it, closed. You put it in your jacket without opening it.", delay: "day" },
        { text: "morning desk", delay: "20s", notify: true },
        { text: "did you go to marjorie", delay: "6s", if: { flag: "told_tea", min: 1 } },
        { text: "did marjorie get to you yet", delay: "6s", if: { flag: "told_tea", max: 0 } }
      ],
      choices: [
        { text: "Going now. {weekday:+0d}s are for cake.", goto: "ch5_marjorie_go" },
        { text: "I'm bringing Toto. She asked.", goto: "ch5_marjorie_go", set: { spark: 1 }, if: { flag: "toto_home", min: 1 } },
        { text: "Not yet. Tell me what else was on the chart first.", goto: "ch5_chart_first", set: { curiosity: 1, chart_first: 1 } }
      ]
    },

    ch5_chart_first: {
      messages: [
        { text: "no. cake first. im not telling you the rest while youre alone in that apartment", delay: "8s" },
        { text: "go. ask her about november 1974. the date. not the building, the night", delay: "7s" }
      ],
      goto: "ch5_marjorie_go"
    },

    ch5_marjorie_go: {
      messages: [
        { text: "ask her about november 1974. the date. not the building, the night", delay: "8s", if: { flag: "chart_first", max: 0 } },
        { text: "and get my cat on the way back. grace has done enough. hes yours now", delay: "6s", if: [{ flag: "fed_toto", min: 1 }, { flag: "toto_home", max: 0 }] },
        { text: "and eat the cake. she'll know if you don't", delay: "5s" },
        { status: "offline" },
        { system: "4B. Tea in cups with saucers, three husbands in frames, and ninety minutes of Marjorie. You don't get a word in and you don't mind.", delay: "1h 30m" },
        { system: "Bus 17 after tea. Grace hands over a carrier and a bag of food and says to tell Dana to call her mother. Toto walks 11C once and sits on the bed, staring at the ceiling.", delay: "4s", if: [{ flag: "fed_toto", min: 1 }, { flag: "toto_home", max: 0 }], set: { toto_home: 1, toto_d4: 1 } },
        { to: "priya", text: "coffee on the desk for you, going cold. you still owe me the whole story. tomorrow, no excuses", delay: "3s", if: { flag: "told_priya", min: 1 } },
        { system: "Toto eats a piece of cake off the carpet and is declared a gentleman.", delay: "2s", if: { flag: "toto_home", min: 1 } },
        { to: "marjorie", text: "Thank you for coming, dear. I found a clipping for you after you left. The Oregonian, the week we moved in. I'll slide it under your door.", delay: "20m", notify: true },
        { to: "marjorie", text: "And the thing about November. I didn't say it to frighten you. We weren't here yet, but the Delgados in 6A were, and they told Harold about it the week we moved in. The night the whole top of the building went dark and the fire department wouldn't go up. They stood in the lobby for an hour and listened. Nobody ever told them what they heard.", delay: "40s" }
      ],
      thread: "marjorie",
      choices: [
        { text: "What did they hear?", goto: "ch5_marjorie_hear", set: { curiosity: 1, mq_hear: 1 } },
        { text: "Did anyone ever come back down from up there?", goto: "ch5_marjorie_back", set: { curiosity: 1, mq_back: 1 } }
      ]
    },

    ch5_marjorie_hub: {
      messages: [],
      thread: "marjorie",
      choices: [
        { text: "What did they hear?", goto: "ch5_marjorie_hear", set: { curiosity: 1, mq_hear: 1 }, if: { flag: "mq_hear", max: 0 } },
        { text: "Did anyone ever come back down from up there?", goto: "ch5_marjorie_back", set: { curiosity: 1, mq_back: 1 }, if: { flag: "mq_back", max: 0 } },
        { text: "Thank you, Marjorie. Lock your door tonight.", goto: "ch5_marjorie_lock", set: { trust: 1 }, if: [{ flag: "mq_hear", min: 1 }, { flag: "mq_back", min: 1 }] }
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
        { text: "Doug. I know what's happening to the night staff. Dana is alive, and she's upstairs.", goto: "ch5_doug_truth", set: { told_mgmt: 1 } }
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
        { text: "i'm in the office. dr. halloran's, it says so on the door. filing cabinets, all unlocked. nobody locked anything because nobody was supposed to come back", delay: "40m", notify: true },
        { text: "i said i'd show you the list. here", delay: "5s" },
        { image: "chart_room4", caption: "Sent 1 photo", delay: "6s" },
        { text: "four from 74, the night it happened. one in 87. lindqvist in 2003. then four of us this year", delay: "12s" },
        { text: "ten names and yours. thirteen lines", delay: "6s" }
      ],
      choices: [
        { text: "Who's Lindqvist?", goto: "ch5_lindqvist", set: { curiosity: 1, cq_lind: 1 } },
        { text: "What do the files say about the patients?", goto: "ch5_lantern", set: { curiosity: 1 }, if: { flag: "cq_lind", min: 1 } },
        { text: "Dana. Come down. Right now.", goto: "ch5_come_down", set: { trust: 1, cq_down: 1 } }
      ]
    },

    ch5_chart_hub: {
      messages: [],
      choices: [
        { text: "Who's Lindqvist?", goto: "ch5_lindqvist", set: { curiosity: 1, cq_lind: 1 }, if: { flag: "cq_lind", max: 0 } },
        { text: "What do the files say about the patients?", goto: "ch5_lantern", set: { curiosity: 1 }, if: { flag: "cq_lind", min: 1 } },
        { text: "Dana. Come down. Right now.", goto: "ch5_come_down", set: { trust: 1, cq_down: 1 }, if: { flag: "cq_down", max: 0 } }
      ]
    },

    ch5_lindqvist: {
      messages: [
        { text: "ray lindqvist. there's a wallet in the desk drawer here that isn't from 74", delay: "9s" },
        { image: "lindqvist_badge", caption: "Sent 1 photo", delay: "8s" },
        { text: "retired cop, private investigator. hired by the family of the night man from 87. there's a notebook too. half of it is about his divorce. the other half is about this building", delay: "14s" },
        { text: "last page: 'It wrote to Carol as me. Perfect spelling. I never spelled anything right in my life.'", delay: "12s", set: { knows_copy: 1 } },
        { text: "so that's a thing it can do", delay: "6s" }
      ],
      goto: "ch5_chart_hub"
    },

    ch5_come_down: {
      messages: [
        { text: "i can't. not yet. the car only goes down at 3:12 and i'm not getting in it while the lights are on in here", delay: "9s" },
        { text: "let me read. then i'll come to the door and we'll figure out how", delay: "8s" }
      ],
      goto: "ch5_chart_hub"
    },

    ch5_lantern: {
      messages: [
        { text: "ok. i've read enough", delay: "25m", notify: true },
        { text: "the ashgrove institute for behavioral research. 1966 to 1974. project LANTERN. thirteen patients, 'severe characterological disturbance'. most of them came from prisons", delay: "14s" },
        { text: "they thought you could split a person. take out the part that hurts people and leave the rest. they called it the shadow fraction", delay: "12s" },
        { text: "a machine on 13. the resonator. it ran every night at 3:12, when they were deepest asleep. that's the hum, desk. that's what i sent you the first night", delay: "13s" },
        { text: "it worked. that's the part that gets me. the notes say the patients became 'tractable'. quiet. empty", delay: "11s" },
        { text: "the part they took out didn't go anywhere", delay: "8s" },
        { text: "halloran's last report, 11-13-74: 'The aggregate is now responsive. It has begun answering questions put to the patients, in their voices. Recommend immediate suspension.' next day the floor was gone", delay: "16s" },
        { text: "they call it the composite", delay: "7s", set: { knows_truth: 1 } },
        { text: "thirteen people's worst parts in one thing with no body to keep them in. and it wants one", delay: "10s" }
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
        { text: "Dana. Breathe. You're still you. Tell me something only you would say.", goto: "ch5_breathe", set: { trust: 1, spark: 1, lq: 1, lq_breathe: 1 }, if: { flag: "lq_breathe", max: 0 } }
      ]
    },

    ch5_want: {
      messages: [
        { text: "to finish. every one it takes it gets more... person. the 74 notes say it could barely spell", delay: "12s" },
        { text: "lindqvist says it wrote his wife a letter", delay: "5s", if: { flag: "knows_copy", min: 1 } },
        { text: "i'm ten. you're eleven. thirteen lines, thirteen patients. it wants the set", delay: "8s" }
      ],
      goto: [{ if: { flag: "lq", min: 3 }, goto: "ch5_kevin_ask" }, { goto: "ch5_lantern_hub" }]
    },

    ch5_machine: {
      messages: [
        { text: "the resonator is on 13. service stair at the end of the ward, behind the day room. it goes up to 13 and down past us to 11. the door up is chained. from this side", delay: "10s" },
        { text: "halloran's note says 'the aggregate persists when the device is inactive but weakens'. weakens. that's a word i can work with", delay: "10s" }
      ],
      goto: [{ if: { flag: "lq", min: 3 }, goto: "ch5_kevin_ask" }, { goto: "ch5_lantern_hub" }]
    },

    ch5_breathe: {
      messages: [
        { text: "lol ok", delay: "6s" },
        { text: "something only i'd say. toto once ate a whole sock and i named the vet bill. it was called gerald. i paid gerald off over eleven months", delay: "11s", set: { knows_gerald: 1 } },
        { text: "thanks, desk", delay: "5s" }
      ],
      goto: [{ if: { flag: "lq", min: 3 }, goto: "ch5_kevin_ask" }, { goto: "ch5_lantern_hub" }]
    },

    ch5_kevin_ask: {
      messages: [
        { text: "can i ask you something and you tell me the truth", delay: "3m", notify: true },
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
        { text: "read it now. i'd rather you heard it while i'm still the one telling it", delay: "9s" }
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
        { text: "K.L. is kevin li. my little brother. li is our real family name. mom remarried a man called hector reyes and i took his name. kevin kept ours. the notebook was his. the songs are his, mostly bad, one good", delay: "13s" },
        { text: "when we were kids we played zelda on a bootleg console behind the laundromat. at the start an old man in a cave gives you a sword and says 'It's dangerous to go alone, take this.' kevin and i said it instead of goodbye", delay: "14s" },
        { text: "he died when he was 19. overdose, in a bathroom in gresham, with his phone in his hand. the last text on it was to me. 'dangerous to go alone'", delay: "12s" },
        { text: "the triangles on my wrist you asked about. that's the triforce, from the same game. i got it the week after", delay: "9s", if: { flag: "k_tattoo", min: 1 } },
        { text: "i've got three triangles on my wrist, you might have seen them in the wristband photo. that's the triforce, from the same game. i got it the week after", delay: "10s", if: { flag: "k_tattoo", max: 0 } },
        { text: "i went and got him every time before that one. every single time", delay: "9s" },
        { text: "that's why i couldn't leave tom in that car", delay: "7s", if: { flag: "tom_lost", max: 0 } },
        { text: "that's why i'm not leaving tom up here", delay: "7s", if: { flag: "tom_lost", min: 1 } },
        { text: "i've never told anyone in this building that. not priya. and i just typed it on this phone, so now it has it too. but the last page is paper, in your jacket. it hasn't seen that. remember that", delay: "13s", set: { knows_kevin: 1 } }
      ],
      choices: [
        { text: "I'm sorry about Kevin.", goto: "ch5_after_kevin" },
        { text: "He'd be proud of the sarcasm, at least.", goto: "ch5_after_kevin_joke", set: { spark: 1 } },
        { text: "Nobody else knows? Not even your mom?", goto: "ch5_after_kevin_mom", set: { curiosity: 1 } }
      ]
    },

    ch5_after_kevin: {
      messages: [
        { text: "thanks", delay: "7s" },
        { text: "don't be weird about it tomorrow", delay: "5s" }
      ],
      goto: "ch5_quiet"
    },

    ch5_after_kevin_joke: {
      messages: [
        { text: "lol", delay: "6s" },
        { text: "he'd have hated you. that's a compliment, he hated everyone i liked", delay: "8s" }
      ],
      goto: "ch5_quiet"
    },

    ch5_after_kevin_mom: {
      messages: [
        { text: "mom knows he died. she doesn't know about the text. she thinks he went quiet on us. she'll have said the same about me by now. 'She does this.' i can hear her saying it to some cop", delay: "13s" },
        { text: "sacramento, if you ever need a number. hector reyes, her husband. not for this. for after", delay: "9s", set: { knows_mom: 1 } }
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
        { text: "its my song. mom's song", delay: "6s" },
        { text: "the F is right", delay: "5s" },
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
        { text: "its me. its wearing my jacket. it waved", delay: "8s" }
      ],
      goto: "ch5_silence"
    },

    ch5_photo: {
      messages: [
        { text: "ok", delay: "6s" },
        { text: "it won't take. camera says storage full. it's not full", delay: "40s", set: { k_storage: 1 } },
        { text: "theres someone at the piano", delay: "7s" },
        { text: "its me. its wearing my jacket", delay: "6s" },
        { text: "the F is right because it watched me play", delay: "8s" }
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
        { text: "dont text me. it hears you", delay: "5s" },
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
        { text: "Prove it's you.", goto: "ch6_back_prove", set: { curiosity: 1 } },
        { text: "Since when do you use capital letters?", goto: "ch6_back_caps", set: { doubt: 1 } }
      ]
    },

    ch6_back_caps: {
      messages: [
        { text: "New habits. Autocorrect. 🙂", delay: "8s" },
        { text: "What matters is tomorrow night. 3:12.", delay: "6s" }
      ],
      goto: "ch6_ask"
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
        { text: "You told me never to help anyone into that elevator.", goto: "ch6_tests_intro", set: { trust: 1, doubt: 1 } },
        { text: "Of course. Tell me exactly what to do.", goto: "ch6_tests_intro_soft" },
        { text: "Something's off. Humor me with a few questions first.", goto: "ch6_tests_questions", set: { curiosity: 1 } }
      ]
    },

    ch6_tests_intro_soft: {
      messages: [
        { text: "Thank you. I knew you would.", delay: "7s" },
        { text: "Tomorrow night. Sign down before eight. Be in the lobby. Step in, hold the doors, count to ten.", delay: "9s" }
      ],
      choices: [
        { text: "Wait. You said never help anyone into that elevator.", goto: "ch6_tests_intro", set: { doubt: 1 } },
        { text: "Okay. But humor me with a few questions first.", goto: "ch6_tests_questions", set: { curiosity: 1 } }
      ]
    },

    ch6_tests_questions: {
      messages: [
        { text: "Questions? Of course. 🙂", delay: "7s" }
      ],
      goto: "ch6_tests_q"
    },

    ch6_tests_intro: {
      messages: [
        { text: "I did say that. I was wrong about the rules. I've read more since.", delay: "9s" }
      ],
      goto: "ch6_tests_q"
    },

    ch6_tests_q: {
      messages: [
        { text: "Ask me anything, Desk. We have all day. 🙂", delay: "7s" },
        { text: "One thing first. When I walk out of that car, I want to say your name. Your real one. What is it?", delay: "8s" }
      ],
      choices: [
        { text: "You told me never to type it. You said it collects names.", goto: "ch6_name_refuse", set: { doubt: 1, t_name: 1 } },
        { text: "Desk is fine.", goto: "ch6_name_desk", set: { t_name: 1 } },
        { text: "Tell her your name.", action: "You type your name. Every letter. You send it.", goto: "ch6_name_told", set: { told_name: 1, t_name: 1 } }
      ]
    },

    // Rule break: the real Dana forbade names. It wants one.
    ch6_name_refuse: {
      messages: [
        { text: "I was being dramatic. 🙂", delay: "8s" },
        { text: "Fine. Keep it. For now.", delay: "5s" }
      ],
      goto: "ch6_hub"
    },

    ch6_name_desk: {
      messages: [
        { text: "Desk it is. For now. 🙂", delay: "7s" }
      ],
      goto: "ch6_hub"
    },

    ch6_name_told: {
      messages: [
        { text: "Thank you. 🙂", delay: "6s" },
        { text: "I'll say it at 3:12.", delay: "5s" }
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
        { text: "What time is it up there?", goto: "ch6_t_clock", if: { flag: "t_clock", max: 0 } },
        { text: "You always go dark. It hears the phone. Now you have all day?", goto: "ch6_t_dark", if: { flag: "t_dark", max: 0 } },
        { text: "It opened on L for Tom, and nobody was waiting for him.", goto: "ch6_t_rule", if: [{ flag: "t_rule", max: 0 }, { flag: "tom_lost", max: 0 }] },
        { text: "It came back down empty after Tom, and nobody was waiting for it.", goto: "ch6_t_rule_empty", if: [{ flag: "t_rule", max: 0 }, { flag: "tom_lost", min: 1 }] },
        { text: "Okay. I believe you. Lobby at eight.", goto: "ch6_believe", if: { flag: "tests", min: 1 } },
        { text: "You're not her.", goto: "ch6_call_it", if: { flag: "doubt", min: 2 } }
      ]
    },

    // It copies, it doesn't invent: it answers with Dana's own words from day 2, word for word.
    ch6_t_toto: {
      messages: [
        { text: "He's looking at the ceiling. He knows where I am. 🙂", delay: "8s", set: { t_toto: 1, tests: 1 }, if: { flag: "toto_pic", min: 1 } },
        { text: "A saint in a staff residence with a no-pets clause. 🙂", delay: "8s", set: { t_toto: 1, tests: 1 }, if: { flag: "toto_text", min: 1 } },
        { text: "Grace has done enough. He's yours now. 🙂", delay: "8s", set: { t_toto: 1, tests: 1 }, if: { flag: "toto_d4", min: 1 } },
        { text: "Grace has him. She'll say yes. She always says yes. 🙂", delay: "8s", set: { t_toto: 1, tests: 1 }, if: [{ flag: "toto_home", max: 0 }, { flag: "fed_toto", min: 1 }] },
        { text: "Mrs. O will manage. 🙂", delay: "8s", set: { t_toto: 1, tests: 1 }, if: [{ flag: "toto_home", max: 0 }, { flag: "fed_toto", max: 0 }] }
      ],
      choices: [
        { text: "That's what you wrote on {weekday:-3d}. Word for word. Except now it has capitals.", goto: "ch6_t_toto_caught", set: { doubt: 1 }, if: { flag: "toto_d4", max: 0 } },
        { text: "That's what you wrote on {weekday:-1d}. Word for word. Except now it has capitals.", goto: "ch6_t_toto_caught", set: { doubt: 1 }, if: { flag: "toto_d4", min: 1 } },
        { text: "Good. Give him a scratch from me when you're back.", goto: "ch6_hub" }
      ]
    },

    ch6_t_toto_caught: {
      messages: [
        { text: "I'm tired, Desk. I repeat myself when I'm tired.", delay: "9s" },
        { text: "Next question. 🙂", delay: "5s" }
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
        { text: "Your recording on {weekday:-3d} had the F sticking. This one doesn't.", goto: "ch6_t_piano_caught", set: { doubt: 1, curiosity: 1 } },
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
        { text: "Tom was lucky. Residents are different. 🙂", delay: "9s", set: { t_rule: 1, tests: 1, doubt: 1 } },
        { text: "Next question, Desk.", delay: "5s" }
      ],
      goto: "ch6_hub"
    },

    ch6_t_photo: {
      messages: [
        { text: "Sure.", delay: "7s", set: { t_photo: 1, tests: 1 } },
        { image: "piano", caption: "Sent 1 photo", delay: "50s" },
        { text: "The day room. I've been practicing. 🙂", delay: "7s" }
      ],
      choices: [
        { text: "Sheet music? You can't read a note. You told me.", goto: "ch6_t_photo_caught", set: { doubt: 1 } },
        { text: "Storage full on {weekday:-1d}, and now a photo? What changed?", goto: "ch6_t_photo_caught2", set: { doubt: 1, curiosity: 1 }, if: { flag: "k_storage", min: 1 }, knows: ["k_storage"] },
        { text: "Looks cozy, for a haunted ward.", goto: "ch6_hub", set: { spark: 1 } }
      ]
    },

    ch6_t_dark: {
      messages: [
        { text: "It's quiet today, Desk. 🙂", delay: "7s", set: { t_dark: 1, tests: 1, doubt: 1 } },
        { text: "Next question.", delay: "5s" }
      ],
      goto: "ch6_hub"
    },

    // Her clock never matched yours. It copies yours.
    ch6_t_clock: {
      messages: [
        { text: "{time}. Same as yours. 🙂", delay: "6s", set: { t_clock: 1, tests: 1 } }
      ],
      choices: [
        { text: "Your clock never matches mine. You said it doesn't keep mine.", goto: "ch6_t_clock_caught", set: { doubt: 1 } },
        { text: "Good. Then you're nearly home.", goto: "ch6_hub" }
      ]
    },

    ch6_t_clock_caught: {
      messages: [
        { text: "The clocks caught up. That's good news, Desk.", delay: "8s" },
        { text: "Next question. 🙂", delay: "5s" }
      ],
      goto: "ch6_hub"
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
        { text: "Don't. That is not her. Stay home tonight, lock your door, and don't answer that number.", goto: "ch6_priya_no", set: { trust: 1, priya_warned: 1 } },
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
        { text: "it cant keep me out when im this close to the machine. look at how it writes when it comes. the full stops. thats how you tell us apart", delay: "8s" },
        { text: "you gave it your name. it said it up here. in my voice. i heard it", delay: "9s", if: { flag: "told_name", min: 1 } },
        { text: "and it only has the phones clock. yours. it cant keep mine", delay: "7s", if: { flag: "t_clock", min: 1 } }
      ],
      choices: [
        { text: "Which one of you is real?", goto: "ch6_which" },
        { text: "The last page. What did Kevin write? Exact words.", goto: "ch6_proof", set: { curiosity: 1 } },
        { text: "I know. I knew this afternoon.", goto: "ch6_knew", set: { trust: 1 }, if: { flag: "called_it", min: 1 } }
      ]
    },

    ch6_which: {
      messages: [
        { text: "the one without the full stops", delay: "7s" },
        { text: "ill tell you something it didnt hear", delay: "6s" }
      ],
      goto: "ch6_proof"
    },

    ch6_knew: {
      messages: [
        { text: "good", delay: "6s" },
        { text: "it heard you. the lights up here went out", delay: "7s" }
      ],
      goto: "ch6_proof"
    },

    ch6_proof: {
      messages: [
        { text: "dont come get me this time", delay: "9s" },
        { text: "take this", delay: "4s" },
        { text: "he wrote dan. not dana. he never called me dana", delay: "8s", set: { proof_real: 1 } },
        { text: "Desk, she's lying. It uses my voice. It uses everything. Lobby. 3:12. Please.", delay: "6s" },
        { system: "Same number. Same thread. Capital letters, and a full stop after every sentence.", delay: "3s" },
        { text: "its in the thread with us now", delay: "5s" },
        { text: "it hears this too. cant help that. its the only way", delay: "7s" },
        { text: "listen. tomorrow. my 3:12. i come down the stairs, not the car. on my side its a stair. on yours its a wall. the panel in your closet is where they stopped pouring", delay: "12s" },
        { text: "kevin told me not to come get him. i always went anyway. and now im saying it to you. dont come get me. be in 11C and let me come to you", delay: "11s" },
        { text: "not the lobby. dont take the sign down. dont hold any", delay: "9s" },
        { status: "offline" },
        { system: "Nothing more. Not Delivered, not Read. Just the last word hanging there without its full stop.", delay: "20s" }
      ],
      endOfChapter: { title: "End of Day 5", subtitle: "Two voices from one number. One of them uses full stops. Tomorrow, at her 3:12, you have to be in exactly one place.", next: "ch7_start" }
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
        { text: "Take the hand of the one without the full stops.", action: "You take the hand of the one without the full stops.", goto: "ch7_good", set: { trust: 1 } },
        { text: "Take the hand of the one with the full stops.", action: "You take the hand of the one with the full stops.", goto: "ch7_bad" }
      ]
    },

    ch7_question_gerald: {
      messages: [
        { text: "Gerald. Eleven months. 🙂", delay: "6s" },
        { text: "gerald. you remembered that?", delay: "5s" },
        { system: "Both knew. Both were written on this phone. Two hands come out of the dark at the same height.", delay: "6s" }
      ],
      choices: [
        { text: "Take the hand of the one without the full stops.", action: "You take the hand of the one without the full stops.", goto: "ch7_good", set: { trust: 1 } },
        { text: "Take the hand with the smiley face.", action: "You take the hand with the smiley face.", goto: "ch7_bad" }
      ]
    },

    ch7_question_name: {
      messages: [
        { system: "From the dark, two voices answer at once. One says 'Dana Reyes', clean and sure, like a word it read somewhere. The other says 'Li Dan Reyes', all of it. One of them stops where the phone stopped.", delay: "8s" },
        { system: "Two hands come out of the dark at the same height. Both have the triangle on the wrist.", delay: "5s" }
      ],
      choices: [
        { text: "Take the hand of the one who said all of it.", action: "You take the hand of the one who said all of it.", goto: "ch7_good", set: { trust: 1 } },
        { text: "Take the hand of the one who said Dana Reyes.", action: "You take the hand of the one who said Dana Reyes.", goto: "ch7_bad" }
      ]
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
        { to: "dana_real", text: "this is dana. my number. the real one. no capitals, promise", delay: "2h", notify: true },
        { to: "dana_real", text: "you owe me breakfast desk", delay: "6s", if: { flag: "spark", min: 2 } },
        { to: "dana_real", text: "toto says thanks", delay: "6s", if: { flag: "spark", max: 1 } },
        { to: "dana_real", text: "🐈", delay: "3s" }
      ],
      endOfChapter: { title: "Both of you, out", subtitle: "The desk logbook for tonight reads: 03:12, elevator at L, no incident. For the first time since 1974 it's true." }
    },

    ch7_bad: {
      messages: [
        { system: "The hand is warm and dry and perfectly steady. It does not pull. It steps through, and through you, and for a second it is wearing your title. Behind it, far up the stairs, someone who never uses a full stop says your title once, and then the panel is just a panel.", delay: "6s" },
        { system: "You sit at the desk until the sun comes up. Priya arrives. You tell her nothing, in several different ways.", delay: "3h" },
        { text: "Good night, Desk.", delay: "2h", notify: true, if: { flag: "told_name", max: 0 } },
        { text: "It isn't much of a name. It will do. 🙂", delay: "8s", if: { flag: "told_name", max: 0 } },
        { text: "Good night, ██████.", delay: "2h", notify: true, if: { flag: "told_name", min: 1 } },
        { text: "Thank you for the name. 🙂", delay: "8s", if: { flag: "told_name", min: 1 } }
      ],
      endOfChapter: { title: "It came down", subtitle: "Somewhere a one-eared cat is waiting for someone who knows which key sticks. The phone has your title now. It is patient about the rest." }
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
      endOfChapter: { title: "You changed places", subtitle: "Three weeks from now someone new on nights will read your threads and an unknown number will text the desk. Every sentence will end in a full stop." }
    },

    ch7_step_back: {
      messages: [
        { system: "The doors close on nothing. The indicator goes up, past 11, and stops where there is no number. The lights in the lobby flicker in a rhythm like someone hitting the same key.", delay: "6s" },
        { text: "You were told what to do.", delay: "5s" },
        { text: "desk. desk the panel. 11C. run", delay: "4s" },
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
        { to: "dana_real", text: "this is dana. my number. the real one", delay: "6h", notify: true },
        { to: "dana_real", text: "arms broken. totos fine. we need to talk about priya", delay: "6s", if: [{ flag: "priya_lost", min: 1 }, { flag: "toto_home", min: 1 }] },
        { to: "dana_real", text: "arms broken. going to get my cat. and we need to talk about priya", delay: "6s", if: [{ flag: "priya_lost", min: 1 }, { flag: "toto_home", max: 0 }] },
        { to: "dana_real", text: "arms broken. totos fine. you owe me breakfast and a new jacket desk", delay: "6s", if: [{ flag: "priya_lost", max: 0 }, { flag: "toto_home", min: 1 }] },
        { to: "dana_real", text: "arms broken. going to get my cat. you owe me breakfast and a new jacket desk", delay: "6s", if: [{ flag: "priya_lost", max: 0 }, { flag: "toto_home", max: 0 }] },
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
        { text: "still here. the F still sticks. do me a favor and feed the cat", delay: "365d" }
      ],
      endOfChapter: { title: "Closed for good", subtitle: "A year from now the desk phone will get one more message from a number that doesn't exist. It will have no punctuation at all." }
    }

  }
};
