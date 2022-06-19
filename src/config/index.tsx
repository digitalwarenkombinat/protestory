import GitHubIcon from '@mui/icons-material/GitHub'
import FacebookIcon from '@mui/icons-material/Facebook'
import TwitterIcon from '@mui/icons-material/Twitter'
import { ChatSpeaker } from 'context/data'

export const title = 'PROTESTORY!'

export const sections = [
  { title: 'Antifaschimus', url: 'antifascism' },
  { title: 'Frieden', url: 'peace' },
  { title: 'Arbeit & Bildung', url: 'work' },
  { title: 'Umwelt', url: 'environment' },
  { title: 'Solidarität', url: 'solidarity' },
  { title: 'Gleichberechtigung', url: 'equality' },
  { title: 'Antirassimus', url: 'antiracism' },
]

export const chat = {
  relation: {
    0: 1,
    1: 2,
    2: 3,
    3: 5,
    4: 7,
    5: 6,
    7: 8,
  },
  list: [
    {
      id: 0,
      text: 'Um den Chat zu beginnen, wähle einen Avatar aus.',
      from: ChatSpeaker.BOT,
      type: 'message',
    },
    {
      id: 1,
      text: 'Hallo ich bin Andrea. Schön, dass du hier bist. Warum bist du hier?',
      from: ChatSpeaker.BOT,
      type: 'message',
    },
    {
      id: 2,
      text: 'Wähle eine Antwortmöglichkeit',
      from: ChatSpeaker.QUESTION,
      type: 'selection',
    },
    {
      id: 3,
      text: 'Ich bin zufällig hier gelandet und wollte mal sehen, was ihr hier so macht.',
      from: ChatSpeaker.YOU,
      type: 'input',
    },
    {
      id: 4,
      text: 'Ich interessiere mich für linke Jugendproteste und hoffe hier mehr darüber zu erfahren',
      from: ChatSpeaker.YOU,
      type: 'input',
    },
    {
      id: 5,
      text: 'Bei PROTESTORY! geht es um die Kunst jugendlichen Protestes. Ist dir schon mal aufgefallen, dass es wirklich viele kreative Protestmaterialen und -aktionen gibt? Wir wollen das sichtbar machen. Hier zum Beispiel',
      from: ChatSpeaker.BOT,
      type: 'message',
    },
    {
      id: 6,
      text: 'Bild eines Protestplakates',
      from: ChatSpeaker.BOT,
      type: 'image',
      image: '/icon.svg',
      alt: 'Bild eines Protestplakates',
    },
    {
      id: 7,
      text: 'Dann bist du hier genau richtig! PROTESTORY erzählt die Geschichte jugendlichen Protestes in der Bundesrepublik Deutschland von der 1920er Jahren bis heute. Dabei war die SAJ (Sozialistische Arbeiterjugend) bereits von Anfang an engagiert',
      from: ChatSpeaker.BOT,
      type: 'message',
    },
    {
      id: 8,
      text: 'Bild einer SAJ Aktion',
      from: ChatSpeaker.BOT,
      type: 'image',
      image: '/icon.svg',
      alt: 'Bild einer SAJ Aktion',
    },
  ],
}

export const sidebar = {
  social: [
    { name: 'GitHub', icon: GitHubIcon },
    { name: 'Twitter', icon: TwitterIcon },
    { name: 'Facebook', icon: FacebookIcon },
  ],
}
