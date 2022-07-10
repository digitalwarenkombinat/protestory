import { ChatSpeaker } from 'context/data'

export const chat = {
  title: 'Hallo, ich bin ...',
  relation: {
    0: 1,
    1: 2,
    2: 4,
    3: 6,
    4: 5,
    5: 1,
    6: 7,
    7: 1,
  },
  list: [
    {
      id: 0,
      text: '.. Andreas. Schön, dass du hier bist.',
      from: ChatSpeaker.BOT,
    },
    {
      id: 1,
      text: 'Wie kann ich dir weiterhelfen?',
      from: ChatSpeaker.BOT,
    },
    {
      id: 2,
      text: 'Ich bin zufällig hier gelandet und wollte mal sehen, was ihr hier so macht.',
      from: ChatSpeaker.QUESTION,
    },
    {
      id: 3,
      text: 'Ich interessiere mich für linke Jugendproteste und hoffe hier mehr darüber zu erfahren',
      from: ChatSpeaker.QUESTION,
    },
    {
      id: 4,
      text: 'Bei PROTESTORY! geht es um die Kunst jugendlichen Protestes. Ist dir schon mal aufgefallen, dass es wirklich viele kreative Protestmaterialen und -aktionen gibt? Wir wollen das sichtbar machen. Hier zum Beispiel',
      from: ChatSpeaker.BOT,
    },
    {
      id: 5,
      text: 'Bild eines Protestplakates',
      from: ChatSpeaker.BOT,
      image: '/home/protestart.webp',
      alt: 'Bild eines Protestplakates',
    },
    {
      id: 6,
      text: 'Dann bist du hier genau richtig! PROTESTORY! erzählt die Geschichte jugendlichen Protestes in der Bundesrepublik Deutschland von der 1920er Jahren bis heute. Dabei war die SAJ (Sozialistische Arbeiterjugend) bereits von Anfang an engagiert',
      from: ChatSpeaker.BOT,
    },
    {
      id: 7,
      text: 'Bild einer SAJ Aktion',
      from: ChatSpeaker.BOT,
      image: '/home/artofprotest.webp',
      alt: 'Bild einer SAJ Aktion',
    },
  ],
}
