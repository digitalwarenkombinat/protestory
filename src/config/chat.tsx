import { ChatSpeaker } from 'context/data'

export const chat = {
  title: 'Willkommen bei PROTESTORY!',
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
      text: 'Hier geht es um die Kunst jugendlichen Protestes. Ist Dir schon mal aufgefallen, dass es wirklich viele kreative Protestmaterialien und Aktionsformen gibt? Wir wollen das mit dieser Seite sichtbar machen.',
      from: ChatSpeaker.BOT,
    },
    {
      id: 1,
      text: 'Wähle eine Antwortmöglichkeit.',
      from: ChatSpeaker.BOT,
    },
    {
      id: 2,
      text: 'Was gibt es denn bei Euch so? Habt ihr für mich eine Übersicht?',
      from: ChatSpeaker.QUESTION,
    },
    {
      id: 3,
      text: 'Könnt ihr mir denn ein Beispiel geben, was das für Materialien sind?',
      from: ChatSpeaker.QUESTION,
    },
    {
      id: 4,
      text: 'Klar, hier geht´s lang.',
      link: '/protestart',
      from: ChatSpeaker.BOT,
    },
    {
      id: 5,
      text: 'Zum Beispiel gibt es dieses Protestplakat aus dem Jahr 1983.',
      from: ChatSpeaker.BOT,
    },
    {
      id: 6,
      text: '',
      from: ChatSpeaker.BOT,
      image: '/chat/1983.webp',
      isPortrait: true,
    },
    {
      id: 7,
      text: 'Wähle eine Antwortmöglichkeit.',
      from: ChatSpeaker.BOT,
    },
    {
      id: 8,
      text: 'Gibt es noch etwas anderes für mich. Etwas Interaktives, wo ich auch mitmachen kann?',
      from: ChatSpeaker.QUESTION,
    },
    {
      id: 9,
      text: 'Interessant. Worum ging es denn auf diesem Plakat?',
      from: ChatSpeaker.QUESTION,
    },
    {
      id: 10,
      text: 'Na klar! Wir haben eine Reihe von Mini-Anwendungen für dich, in denen Du dich spielerisch mit dem Thema Protest auseinandersetzen kannst. Betritt unser WG-Zimmer und erkunde von hier aus die Welt des Protestes.',
      from: ChatSpeaker.BOT,
    },
    {
      id: 11,
      text: 'Wähle eine Antwortmöglichkeit.',
      from: ChatSpeaker.BOT,
    },
    {
      id: 12,
      text: 'Darunter kann ich mir noch gar nichts vorstellen. Habt ihr ein Beispiel?',
      from: ChatSpeaker.QUESTION,
    },
    {
      id: 13,
      text: 'Wunderbar. Da bin ich dabei!',
      from: ChatSpeaker.QUESTION,
    },
    {
      id: 14,
      text: "Es gibt zum Beispiel die Anwendung 'If I can´t dance to it, it´s not my revolution'. Hier findest Du Protestlieder aus den verschiedenen Jahrzehnten. Du kannst sie Dir anhören (und mitsingen) und findest historische Materialien. Darüber hinaus sind aber auch zahlreiche Informationen über die Lieder für Dich aufbereitet. Hast Du Lust auf eine kleine Zeitreise?",
      from: ChatSpeaker.BOT,
    },
    {
      id: 15,
      text: 'Wähle eine Antwortmöglichkeit.',
      from: ChatSpeaker.BOT,
    },
    {
      id: 16,
      text: 'Klingt gut. Wie komme ich dorthin?',
      from: ChatSpeaker.QUESTION,
    },
    {
      id: 17,
      text: 'Klingt lustig, im Moment möchte ich aber lieber sehen, welche Materialien es auf der Seite so gibt und mich selbst durchwühlen.',
      from: ChatSpeaker.QUESTION,
    },
    {
      id: 18,
      text: 'Hier geht´s lang.',
      link: '/concert',
      from: ChatSpeaker.BOT,
    },
    {
      id: 19,
      text: 'Klar, hier geht´s lang.',
      link: '/protestart',
      from: ChatSpeaker.BOT,
    },
    {
      id: 20,
      text: 'Sehr schön :) Hier geht´s los.',
      link: '/artofprotest',
      from: ChatSpeaker.BOT,
    },
    {
      id: 21,
      text: 'In den 1980er Jahren gab es in Westeuropa den Plan, großflächig aufzurüsten, z.B. mit Langstreckenraketen aus den USA. Leider ist das Thema heute auch wieder aktuell. Damals befand sich durch die Zweiteilung Europas in die politischen Blöcke (Kommunistische Länder und Kapitalistische Länder) die BRD auf der Seite des Westblocks und mit der Grenze zur DDR an der Front zum Ostblock. Dementsprechend war die Aufrüstung ein hochemotionales Thema, da man sich im Falle eines Krieges in dessen Mitte sah.',
      from: ChatSpeaker.BOT,
    },
    {
      id: 22,
      text: 'Wähle eine Antwortmöglichkeit.',
      from: ChatSpeaker.BOT,
    },
    {
      id: 23,
      text: 'Gibt es denn noch ältere Sachen?',
      from: ChatSpeaker.QUESTION,
    },
    {
      id: 24,
      text: 'Davon möchte ich gerne mehr sehen. Habt ihr eine Ansicht der Materialien zu den verschiedenen Themen?',
      from: ChatSpeaker.QUESTION,
    },
    {
      id: 25,
      text: 'Na klar. PROTESTORY! erzählt die Geschichte jugendlichen Protestes in Deutschland von den 1920er Jahren bis heute. Dabei war die Sozialistische Arbeiterjugend (SAJ) bereits seit dieser Zeit engagiert, wie du auf diesem Bild sehen kannst.',
      from: ChatSpeaker.BOT,
    },
    {
      id: 26,
      text: '',
      from: ChatSpeaker.BOT,
      image: '/chat/1928.webp',
      isPortrait: false,
    },
    {
      id: 27,
      text: 'Wähle eine Antwortmöglichkeit.',
      from: ChatSpeaker.BOT,
    },
    {
      id: 28,
      text: 'Von wann ist das Foto?',
      from: ChatSpeaker.QUESTION,
    },
    {
      id: 29,
      text: 'Meine Augen sind müde. Ich will Geschichte für die Ohren!',
      from: ChatSpeaker.QUESTION,
    },
    {
      id: 30,
      text: 'Das Foto ist von 1928 und zeigt eine Demonstration anlässlich des Jugendtages in Dortmund.',
      from: ChatSpeaker.BOT,
    },
    {
      id: 31,
      text: 'Wähle eine Antwortmöglichkeit.',
      from: ChatSpeaker.BOT,
    },
    {
      id: 32,
      text: 'Dann zeig mir mal Eure Materialien!',
      from: ChatSpeaker.QUESTION,
    },
    {
      id: 33,
      text: 'Gibt es noch etwas anderes für mich. Etwas Interaktives, wo ich auch mitmachen kann?',
      from: ChatSpeaker.QUESTION,
    },
    {
      id: 34,
      text: 'Klar, sehr gern. Hör hier mal rein!',
      from: ChatSpeaker.BOT,
      audio: '/chat/audio.mp3',
    },
    {
      id: 35,
      text: 'Du hörst hier das Lied Rauch-Haus-Song der Westberliner Politrockgruppe Ton-Steine-Scherben, die in der Hausbesetzerszene sehr aktiv waren. Es handelt von der Besetzung des Bethanien-Krankenhauses 1971. Westberlin hatte aufgrund der geteilten Stadt Sonderstatus und zog viele Linke aus der Bundesrepublik an (unter anderem weil Westberliner nicht zum Wehrdienst mussten). Da Wohnungsnot herrschte, besetzen sie kurzerhand leerstehende Gebäude, um darin zu wohnen.',
      from: ChatSpeaker.BOT,
    },
    {
      id: 36,
      text: "Eine Strophe aus dem Song ist z.B.: „Der Senator war stinksauer, die CDU war schwer empört/daß die Typen sich jetzt nehmen, was ihnen sowieso gehört./Aber um der Welt zu zeigen, wie großzügig sie sind/sachten sie: 'Wir räumen später, lassen sie erstmal drin!'“",
      from: ChatSpeaker.BOT,
    },
    {
      id: 37,
      text: 'Wähle eine Antwortmöglichkeit.',
      from: ChatSpeaker.BOT,
    },
    {
      id: 38,
      text: 'Gibt es noch etwas anderes für mich. Etwas Interaktives, wo ich auch mitmachen kann?',
      from: ChatSpeaker.QUESTION,
    },
    {
      id: 39,
      text: 'Ich möchte gerne mehr über Musik und Protest erfahren.',
      from: ChatSpeaker.QUESTION,
    },
  ],
}
