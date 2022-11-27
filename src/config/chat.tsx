import { ChatSpeaker } from 'context/data'

export const chat = {
  title: { de: 'Willkommen bei PROTESTORY!', en: 'Welcome to PROTESTORY!' },
  relation: {
    0: 1,
    1: 2,
    2: 4, //end
    3: 5,
    5: 6,
    6: 7,
    7: 8,
    8: 10,
    9: 21,
    10: 11,
    11: 12,
    12: 14,
    13: 20, //end
    14: 15,
    15: 16,
    16: 18, //end
    17: 19, //end
    21: 22,
    22: 23,
    23: 25,
    24: 19, //end
    25: 26,
    26: 27,
    27: 28,
    28: 30,
    29: 34,
    30: 31,
    31: 32,
    32: 19, //end
    33: 10,
    34: 35,
    35: 36,
    36: 37,
    37: 38,
    38: 10,
    39: 18, //end
  },
  list: [
    {
      id: 0,
      text: {
        de: 'Hier geht es um die Kunst jugendlichen Protestes. Ist Dir schon mal aufgefallen, dass es wirklich viele kreative Protestmaterialien und Aktionsformen gibt? Wir wollen das mit dieser Seite sichtbar machen.',
        en: 'This is about the art of youth protest. Have you ever noticed that there are really many creative protest materials and forms of action? We want to make that visible with this page.',
      },
      from: ChatSpeaker.BOT,
    },
    {
      id: 1,
      text: {
        de: 'Wähle eine Antwortmöglichkeit.',
        en: 'Select an answer option.',
      },
      from: ChatSpeaker.BOT,
    },
    {
      id: 2,
      text: {
        de: 'Was gibt es denn bei Euch so? Habt ihr für mich eine Übersicht?',
        en: 'What do you have to offer? Do you have an overview for me?',
      },
      from: ChatSpeaker.QUESTION,
    },
    {
      id: 3,
      text: {
        de: 'Könnt ihr mir denn ein Beispiel geben, was das für Materialien sind?',
        en: 'Can you give me an example of what these materials are?',
      },
      from: ChatSpeaker.QUESTION,
    },
    {
      id: 4,
      text: {
        de: 'Klar, hier geht´s lang.',
        en: 'Sure, this way.',
      },
      link: '../protestart',
      from: ChatSpeaker.BOT,
    },
    {
      id: 5,
      text: {
        de: 'Zum Beispiel gibt es dieses Protestplakat aus dem Jahr 1983.',
        en: 'For example, there is this protest poster from 1983.',
      },
      from: ChatSpeaker.BOT,
    },
    {
      id: 6,
      text: '',
      from: ChatSpeaker.BOT,
      image: '/chat/1983.webp',
    },
    {
      id: 7,
      text: { de: 'Wähle eine Antwortmöglichkeit.', en: 'Select an answer option.' },
      from: ChatSpeaker.BOT,
    },
    {
      id: 8,
      text: {
        de: 'Gibt es noch etwas anderes für mich. Etwas Interaktives, wo ich auch mitmachen kann?',
        en: 'Is there anything else for me. Something interactive where I can also participate?',
      },
      from: ChatSpeaker.QUESTION,
    },
    {
      id: 9,
      text: {
        de: 'Interessant. Worum ging es denn auf diesem Plakat?',
        en: 'Interesting. What was this poster about?',
      },
      from: ChatSpeaker.QUESTION,
    },
    {
      id: 10,
      text: {
        de: 'Na klar! Wir haben eine Reihe von Mini-Anwendungen für dich, in denen Du dich spielerisch mit dem Thema Protest auseinandersetzen kannst. Betritt unser WG-Zimmer und erkunde von hier aus die Welt des Protestes.',
        en: 'Of course! We have a series of mini-apps for you to playfully explore the theme of protest. Enter our flat-share room and explore the world of protest from here.',
      },
      from: ChatSpeaker.BOT,
    },
    {
      id: 11,
      text: { de: 'Wähle eine Antwortmöglichkeit.', en: 'Select an answer option.' },
      from: ChatSpeaker.BOT,
    },
    {
      id: 12,
      text: {
        de: 'Darunter kann ich mir noch gar nichts vorstellen. Habt ihr ein Beispiel?',
        en: 'I can´t imagine anything about that yet. Do you have an example?',
      },
      from: ChatSpeaker.QUESTION,
    },
    {
      id: 13,
      text: { de: 'Wunderbar. Da bin ich dabei!', en: 'Great. I´m in!' },
      from: ChatSpeaker.QUESTION,
    },
    {
      id: 14,
      text: {
        de: 'Es gibt zum Beispiel die Anwendung "If I can´t dance to it, it´s not my revolution". Hier findest Du Protestlieder aus den verschiedenen Jahrzehnten. Du kannst sie Dir anhören (und mitsingen) und findest historische Materialien. Hast Du Lust auf eine kleine Zeitreise?',
        en: 'For example, there is the application "If I Can´t Dance to It, It´s Not My Revolution". Here you can find protest songs from different decades. You can listen to them (and sing along) and find historical materials. Do you feel like a little time travel?',
      },
      from: ChatSpeaker.BOT,
    },
    {
      id: 15,
      text: { de: 'Wähle eine Antwortmöglichkeit.', en: 'Select an answer option.' },
      from: ChatSpeaker.BOT,
    },
    {
      id: 16,
      text: { de: 'Klingt gut. Wie komme ich dorthin?', en: 'Sounds good. How do I get there?' },
      from: ChatSpeaker.QUESTION,
    },
    {
      id: 17,
      text: {
        de: 'Klingt lustig, im Moment möchte ich aber lieber sehen, welche Materialien es auf der Seite so gibt und mich selbst durchwühlen.',
        en: 'Sounds fun, but right now I´d rather see what materials are on the website and dig through them myself.',
      },
      from: ChatSpeaker.QUESTION,
    },
    {
      id: 18,
      text: { de: 'Hier geht´s lang.', en: 'This way.' },
      link: '../concert',
      from: ChatSpeaker.BOT,
    },
    {
      id: 19,
      text: { de: 'Klar, hier geht´s lang.', en: 'Sure, this way.' },
      link: '../protestart',
      from: ChatSpeaker.BOT,
    },
    {
      id: 20,
      text: { de: 'Sehr schön :) Hier geht´s los.', en: 'Very nice :) Here we go.' },
      link: '../artofprotest',
      from: ChatSpeaker.BOT,
    },
    {
      id: 21,
      text: {
        de: 'In den 1980er Jahren gab es in Westeuropa den Plan, großflächig aufzurüsten, z.B. mit Langstreckenraketen aus den USA. Leider ist das Thema heute auch wieder aktuell. Damals befand sich durch die Zweiteilung Europas in die politischen Blöcke (Kommunistische Länder und Kapitalistische Länder) die BRD auf der Seite des Westblocks und mit der Grenze zur DDR an der Front zum Ostblock. Dementsprechend war die Aufrüstung ein hochemotionales Thema, da man sich im Falle eines Krieges in dessen Mitte sah.',
        en: 'In the 1980s, there was a plan in Western Europe to rearm on a large scale, e.g. with long-range missiles from the USA. Unfortunately, the topic is also topical again today. At that time, due to the division of Europe into political blocs (Communist countries and Capitalist countries), the FRG was on the side of the Western bloc and, with its border with the GDR, on the front line to the Eastern bloc. Accordingly, rearmament was a highly emotional topic, as the country saw itself in the very center in case of a war.',
      },
      from: ChatSpeaker.BOT,
    },
    {
      id: 22,
      text: { de: 'Wähle eine Antwortmöglichkeit.', en: 'Select an answer option.' },
      from: ChatSpeaker.BOT,
    },
    {
      id: 23,
      text: { de: 'Gibt es denn noch ältere Sachen?', en: 'Is there any older stuff?' },
      from: ChatSpeaker.QUESTION,
    },
    {
      id: 24,
      text: {
        de: 'Davon möchte ich gerne mehr sehen. Habt ihr eine Ansicht der Materialien zu den verschiedenen Themen?',
        en: 'I would like to see more of that. Do you have an overview of the materials on those various topics?',
      },
      from: ChatSpeaker.QUESTION,
    },
    {
      id: 25,
      text: {
        de: 'Na klar. PROTESTORY! erzählt die Geschichte jugendlichen Protestes in Deutschland von den 1920er Jahren bis heute. Dabei war die Sozialistische Arbeiterjugend (SAJ) bereits seit dieser Zeit engagiert, wie du auf diesem Bild sehen kannst.',
        en: 'Of course. PROTESTORY! tells the story of youth protest in Germany from the 1920s until today. The Socialist Workers Youth (SAJ) has been involved since that time, as you can see in this picture.',
      },
      from: ChatSpeaker.BOT,
    },
    {
      id: 26,
      text: '',
      from: ChatSpeaker.BOT,
      image: '/chat/1928.webp',
    },
    {
      id: 27,
      text: { de: 'Wähle eine Antwortmöglichkeit.', en: 'Select an answer option.' },
      from: ChatSpeaker.BOT,
    },
    {
      id: 28,
      text: { de: 'Von wann ist das Foto?', en: 'When was this photo taken?' },
      from: ChatSpeaker.QUESTION,
    },
    {
      id: 29,
      text: { de: 'Meine Augen sind müde. Ich will Geschichte für die Ohren!', en: 'My eyes are tired. I want history for the ears!' },
      from: ChatSpeaker.QUESTION,
    },
    {
      id: 30,
      text: {
        de: 'Das Foto ist von 1928 und zeigt eine Demonstration anlässlich des Jugendtages in Dortmund.',
        en: 'The photo is from 1928 and shows a demonstration on the occasion of the Youth Day in Dortmund.',
      },
      from: ChatSpeaker.BOT,
    },
    {
      id: 31,
      text: { de: 'Wähle eine Antwortmöglichkeit.', en: 'Select an answer option.' },
      from: ChatSpeaker.BOT,
    },
    {
      id: 32,
      text: { de: 'Dann zeig mir mal Eure Materialien!', en: 'Let´s see your materials then!' },
      from: ChatSpeaker.QUESTION,
    },
    {
      id: 33,
      text: {
        de: 'Gibt es noch etwas anderes für mich. Etwas Interaktives, wo ich auch mitmachen kann?',
        en: 'Is there anything else for me. Something interactive where I can also participate?',
      },
      from: ChatSpeaker.QUESTION,
    },
    {
      id: 34,
      text: { de: 'Klar, sehr gern. Hör hier mal rein!', en: 'Sure, with pleasure. Listen in here!' },
      from: ChatSpeaker.BOT,
      audio: '/chat/audio.mp3',
    },
    {
      id: 35,
      text: {
        de: 'Du hörst hier das Lied Rauch-Haus-Song der Westberliner Politrockgruppe Ton-Steine-Scherben, die in der Hausbesetzerszene sehr aktiv waren. Es handelt von der Besetzung des Bethanien-Krankenhauses 1971. Westberlin hatte aufgrund der geteilten Stadt Sonderstatus und zog viele Linke aus der Bundesrepublik an (unter anderem weil Westberliner nicht zum Wehrdienst mussten). Da Wohnungsnot herrschte, besetzen sie kurzerhand leerstehende Gebäude, um darin zu wohnen.',
        en: 'You are listening to the song called Rauch-Haus-Song by the West Berlin political rock group Ton-Steine-Scherben, who were very active in the squatter scene. The song is about the occupation of the Bethanien Hospital in 1971. West Berlin had special status because of the divided city and attracted many leftists from West Germany (among other things because West Berliners did not have to do military service). Since there was a housing shortage, they simply occupied empty buildings in order to live in them.',
      },
      from: ChatSpeaker.BOT,
    },
    {
      id: 36,
      text: {
        de: 'Eine Strophe aus dem Song ist z.B.: „Der Senator war stinksauer, die CDU war schwer empört/daß die Typen sich jetzt nehmen, was ihnen sowieso gehört./Aber um der Welt zu zeigen, wie großzügig sie sind/sachten sie: `Wir räumen später, lassen sie erstmal drin!´"',
        en: 'One verse from the song is, for example: "The senator was pissed off, the CDU was severely outraged/That these guys are now taking what´s theirs anyway/But to show the world how generous they are/They said: `We´ll clear out later, leave them in for now!´"',
      },
      from: ChatSpeaker.BOT,
    },
    {
      id: 37,
      text: { de: 'Wähle eine Antwortmöglichkeit.', en: 'Select an answer option.' },
      from: ChatSpeaker.BOT,
    },
    {
      id: 38,
      text: {
        de: 'Gibt es noch etwas anderes für mich. Etwas Interaktives, wo ich auch mitmachen kann?',
        en: 'Is there anything else for me. Something interactive where I can also participate?',
      },
      from: ChatSpeaker.QUESTION,
    },
    {
      id: 39,
      text: { de: 'Ich möchte gerne mehr über Musik und Protest erfahren.', en: 'I would like to learn more about music and protest.' },
      from: ChatSpeaker.QUESTION,
    },
  ],
}
