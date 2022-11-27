export const cartMessage = {
  de: {
    start: 'Sobald du Gegenstände gefunden hast, die ihr für die Demo braucht, erscheinen diese hier.',
    playing: 'Sehr gut! Du hast etwas gefunden, was ihr für die Demo braucht. Finde auch die restlichen Gegenstände!',
    finish:
      'Herzlichen Glückwunsch! Du hast alle notwendigen Gegenstände gefunden, die ihr für die Demo braucht. Jetzt kann es endlich losgehen! Hier kannst du dir die Checklist noch als PDF herunterladen. Unten findest du noch weitere Inspiration für den nächsten Protest.',
  },
  en: {
    start: 'Once you find items you need for the demo, they will appear here.',
    playing: 'Very good! You´ve found something you need for the demo. Find the remaining items as well!',
    finish:
      'Congratulations! You have found all the necessary items you need for the demo. Now you can finally start! You can still download the checklist as a PDF here. Below you´ll find more inspiration for the next protest.',
  },
}

export const items = [
  {
    active: false,
    link: '',
    id: 'verpflegung',
    name: { de: 'Rucksack mit Essen, Trinken und Regenkleidung', en: 'Backpack with food, some water and rainwear' },
    source: '../startthedemo/verpflegung.svg',
    description: {
      de: 'Bei einer Demo kann viel dazwischen kommen – meist ist es das Wetter. Während du als Teilnehmer:innen bei strömenden Regen vielleicht zu Hause bleiben würdest, geht das als Organisator:in natürlich nicht. Regenkleidung, Essen und Trinken sind also ein Muss.',
      en: 'A lot of unexpected things can happen during a demo - often it is bad weather coming up. While you as a participant might stay at home in pouring rain, this is of course not possible as an organizer. So rainwear, food and water are a musthave.',
    },
    print: {
      de: 'Regenkleidung, Essen und Trinken sind ein Muss - wer weiß, wie lang der Tag noch wird und ob das Wetter mitspielt.',
      en: 'Rain gear, food and water are a musthave - who knows how long the day will be and if the weather will be ok.',
    },
  },
  {
    active: false,
    link: '',
    id: 'schluessel',
    name: { de: 'Transporterschlüssel', en: 'Transporter keys' },
    source: '../startthedemo/schluessel.svg',
    description: {
      de: 'Ein Freund hat einen Transporter mit offener Ladefläche organisiert. Da du den Autoschlüssel gefunden hast, kann es nun auch losgehen.',
      en: 'A friend has organized a transporter with an open loading space. Now that you´ve found the car keys, you´re ready to go.',
    },
    print: {
      de: 'Wenn ihr einen Transporter gemietet habt, sollte unbedingt klar sein, wer den Schlüssel aufbewahrt.',
      en: 'If you have rented a transporter, it should be absolutely clear who will keep the keys.',
    },
  },
  {
    active: false,
    link: '/revolutiontelephone',
    linkName: { de: 'Revolutionstelefon', en: 'Revolution telephone' },
    linkText: { de: 'Gedanken von historischen Personen zum Thema Protest', en: 'Thoughts of historical persons on the subject of protest' },
    name: { de: 'Pressekontakt', en: 'Press contact' },
    id: 'festnetz',
    source: '../startthedemo/festnetz.svg',
    description: {
      de: 'Du hast den Pressekontakt gefunden! Social Media ist wichtig, aber viel Berichterstattung findet immer noch über normale Tageszeitungen und deren Portale statt. Insbesondere wenn ihr ältere und unbeteiligte Menschen von eurer Sache überzeugen wollt, solltet ihr auch klassische Medien kontaktieren, um euer Anliegen publik zu machen.',
      en: 'You have found the press contact! Social media is important, but a lot of coverage still takes place via normal daily newspapers and their websites. Especially if you want to convince older and uninvolved people of your cause, you should also contact classic media to make your concern public.',
    },
    print: {
      de: 'Viel Berichterstattung findet immer noch über normale Tageszeitungen und deren Portale statt; darüber erreicht ihr vor allem auch Ältere.',
      en: 'A lot of reporting still takes place via normal daily newspapers and their websites; this is how you reach older people in particular.',
    },
  },
  {
    active: false,
    link: '',
    id: 'baseball',
    name: { de: 'Baseball', en: 'Baseball' },
    source: '../startthedemo/baseball.svg',
    leave: true,
    description: {
      de: 'Du willst nach der Demo noch zum Baseball-Training? Klingt logisch für dich, aber wahrscheinlich nicht für die Polizei. Die wird darin eher eine potentielle Waffe und einen Verstoß gegen die Demoauflagen sehen. Lass ihn zu Hause.',
      en: 'You want to go to baseball training after the demo? Sounds logical to you, but probably not to the police. They will see it more as a potential weapon and a violation of the demo rules. Leave it at home.',
    },
  },
  {
    active: false,
    link: '',
    id: 'namen',
    name: { de: 'Redner:innenliste', en: 'Speakers list' },
    source: '../startthedemo/namen.svg',
    description: {
      de: 'Keine Demo ohne Redebeiträge! Ohne Redebeiträge weiß man oft gar nicht, wofür oder wogegen demonstriert wird. Sie dienen dazu, der Demo eine klare Richtung zu geben und die eigenen Anliegen klar zu formulieren. Da alle Redner:innen sich ebenfalls auf ihre Beiträge vorbereiten müssen, solltet ihr früh anfangen, geeignete Menschen dafür zu finden und absprechen, wer worüber spricht.',
      en: 'No demo without speeches! Without speeches, one often does not know what is being demonstrated for or against. They serve to give the demo a clear direction and to clearly formulate your own concerns. Since all speakers also have to prepare for their statements, you should start early to find suitable people and agree on who will speak about what.',
    },
    print: {
      de: 'Redebeiträge geben der Demo eine klare Richtung. Findet frühzeitig Redner:innen, damit diese sich gut vorbereiten können.',
      en: 'Speeches give the demo a clear direction. Find speakers early so that they can prepare well.',
    },
  },
  {
    active: false,
    link: '',
    id: 'demoshirt',
    name: { de: 'Demoshirt', en: 'Demo shirt' },
    source: '../startthedemo/demoshirt.svg',
    description: {
      de: 'Um euren Protest gegen den Tagebau-Ausbau auch an anderen Tagen öffentlich zu zeigen, hast du T-Shirts aus Biobaumwolle mit dem Demoslogan drucken lassen. Das trägst du natürlich auch auf der Demo.',
      en: 'In order to show your protest against the open pit mining publicly on other days as well, you had T-shirts made of organic cotton printed with the demo slogan. Of course, you´ll wear that at the demo, too.',
    },
    print: {
      de: 'Um euren Protest an allen Tagen öffentlich zu zeigen, könnt ihr T-Shirts mit dem Demoslogan drucken lassen.',
      en: 'To show your protest publicly on all days, you can have T-shirts printed with the demo slogan.',
    },
  },
  {
    active: false,
    link: '/slogangenerator',
    linkName: { de: 'Slogan-Generator', en: 'Slogan Generator' },
    linkText: { de: 'Inspiration für deinen nächsten Demo-Rufe', en: 'Inspiration for your next demo chants' },
    id: 'megafon',
    name: { de: 'Megafon', en: 'Megaphone' },
    source: '../startthedemo/megafon.svg',
    description: {
      de: 'Ein Megafon ist wichtig, z.B. um Sprechchöre anzustimmen. Als Ergänzung zu Lautsprechern und Mikrofon ist es auch mobiler einsetzbar, sobald sich die Demonstration in Bewegung setzt. Und deine Stimme ist vielleicht nicht kräftig genug, um über einige Hundert Meter hinweg hörbar zu sein.',
      en: '',
    },
    print: {
      de: 'Ergänzend zu Lautsprechern und Mikrofon ist ein Megafon mobil und zum Anstimmen von Sprechchören besser einsetzbar.',
      en: 'In addition to loudspeakers and microphone, a megaphone is mobile and more suitable for chanting.',
    },
  },
  {
    active: false,
    link: '',
    id: 'books_floor',
    name: { de: 'Bücherstapel', en: 'Pile of books' },
    source: '../startthedemo/books_floor.svg',
    leave: true,
    description: {
      de: 'Eine Demo kann entspannt sein, aber wahrscheinlich gibt es immer genug zu tun. Du wirst also eher keine Zeit haben, nebenbei noch was zu lesen. Also mach lieber deinen Rucksack leichter und lass die Bücher zu Hause.',
      en: 'A demo can be relaxing, but there is probably always enough to do. So you won´t have time to read anything on the sidelines. So lighten your backpack and leave the books at home.',
    },
  },
  {
    active: false,
    link: '/concert',
    linkName: { de: 'If I can`t dance to it, it`s not my revolution', en: 'If I Can`t Dance to It, It`s Not My Revolution' },
    linkText: { de: 'Protestsongs aus mehreren Jahrzehnten - zum Mitsingen', en: 'Protest songs from several decades - for singing along' },
    id: 'smartphone',
    name: { de: 'Playlist', en: 'Playlist' },
    source: '../startthedemo/smartphone.svg',
    description: {
      de: 'Die beste Demo ist die, bei der gute Musik läuft und Lieder auch mal mitgesungen werden. Du hast eine Playlist mit klassischen Protestliedern zusammengestellt, aber auch mit neueren empowernden Songs. Falls ihr noch Inspiration sucht, schaut mal bei "If I can´t dance to it, it is not my revolution" rein.',
      en: 'The best demo is the one where good music is playing and songs are sung along. You´ve put together a playlist of classic protest songs, but also newer empowering songs. If you´re still looking for inspiration, check out "If I Can´t Dance to It, It´s Not My Revolution."',
    },
    print: {
      de: 'Die beste Playlist für eine Demo setzt sich aus klassischen Protestliedern und neueren empowernden Songs zusammen.',
      en: 'The best playlist for a demo is a mix of classic protest songs and newer empowering songs.',
    },
  },
  {
    active: false,
    link: '',
    id: 'gitarre',
    name: { de: 'Gitarre für Live-Musik', en: 'Guitar for live music' },
    source: '../startthedemo/gitarre.svg',
    description: {
      de: 'Du hast Glück und einer deiner Freunde will live zwischen einigen Reden auftreten und zwei eigene Songs spielen. Dafür hast du eine Gitarre besorgt, die ihr an den Verstärker anschließen könnt. Vergesst den Soundcheck nicht!',
      en: 'You are lucky and one of your friends wants to perform live between some speeches and play two of his own songs. For that, you got a guitar that you can plug into the amp. Don´t forget the sound check!',
    },
    print: {
      de: 'Kennt ihr jemanden, der Live-Musik auf der Demo spielen kann? Gut für euch! Vergesst den Soundcheck nicht!',
      en: 'Do you know someone who can play live music at the demo? Good for you! Don´t forget the sound check!',
    },
  },
  {
    active: false,
    link: '',
    id: 'hund',
    name: { de: 'Hund', en: 'dog' },
    source: '../startthedemo/hund.svg',
    leave: true,
    description: {
      de: 'Eine Demo ist für Tiere meist nicht der richtige Platz, denn es sind zu viele Menschen auf engstem Raum. Hunde macht das oft unruhig und manche Menschen haben Angst vor Hunden. Du tust ihm also einen Gefallen, wenn du ihn zu Hause lässt.',
      en: 'A demo is usually not the right place for pets, because there are too many people in a crowded space. Dogs often get anxious about that, and some people are afraid of dogs. So you´re doing it a favor by leaving it at home.',
    },
  },
  {
    active: false,
    link: '',
    id: 'lautsprecher_mikro',
    name: { de: 'Lautsprecher und Mikro', en: 'Loudspeaker and microphone' },
    source: '../startthedemo/lautsprecher_mikro.svg',
    description: {
      de: 'Da ihr einen Transporter mit offener Ladefläche als Bühne nutzen wollt, ist es praktisch, ein Mikrofon mit Lautsprecher zu haben. Gerade eure Redner:innen wollen gut von allen gehört werden. Testet am Besten vorab, wie gut die Qualität und die Lautstärke der Anlage ist.',
      en: 'Since you want to use a transporter with an open loading space as a stage, it is practical to have a microphone with a loudspeaker. Especially your speakers want to be heard well by everyone. It is best to test in advance how good the quality and volume of the system is.',
    },
    print: {
      de: 'Wenn ihr eine Bühne habt, benötigt ihr dort ein Mikrofon mit Lautsprecher. Soundcheck nicht vergessen!',
      en: 'If you have a stage, you need a microphone with speaker there. Don´t forget the sound check!',
    },
  },
  {
    active: false,
    link: '',
    id: 'messer',
    name: { de: 'Messer', en: 'knife' },
    source: '../startthedemo/messer.svg',
    leave: true,
    description: {
      de: 'Auch wenn ihr nur Obst damit schneiden wollt: es ist besser, das Messer zu Hause zu lassen, da es auch als Waffe gelesen werden kann. Oft wird das Mitführen von Messern auch in den Demoauflagen der Polizei untersagt.',
      en: 'Even if you only want to cut some fruit with it: it is better to leave the knife at home, because it can also be interpreted as a weapon. Often, the carrying of knives is also prohibited in the demo regulations of the police.',
    },
  },
  {
    active: false,
    link: '',
    id: 'checklist',
    name: { de: 'Checklist für die Demo', en: 'Checklist for the demo' },
    source: '../startthedemo/checklist.svg',
    description: {
      de: 'Ihr habt zu Beginn eurer Planungen eine lange Checklist geschrieben, damit ihr bei der Vorbereitung nichts vergesst. Dabei helfen euch auch bereits bestehende Checklists, z. B. von Aktion Mensch.',
      en: 'You have written a long checklist at the beginning of your planning so that you don´t forget anything during the preparation. Existing checklists, e.g. from Aktion Mensch, can also help you.',
    },
    print: {
      de: 'Eine Checklist kann euch helfen, alle zu organisierenden Dinge im Auge zu behalten.',
      en: 'A checklist can help you keep track of all the things you need to organize.',
    },
  },
  {
    active: false,
    link: '',
    id: 'glasflasche',
    name: { de: 'Glasflasche', en: 'Glass bottle' },
    source: '../startthedemo/glasflasche.svg',
    leave: true,
    description: {
      de: 'Eine Glasflasche mitzunehmen, ist keine gute Idee. Oft wird dies bereits in den Demo-Auflagen der Polizei untersagt. Es besteht die Befürchtung, dass eine Glasflasche auch als Wurfgeschoss eingesetzt werden könnte und Menschen verletzt.',
      en: 'Taking a glass bottle with you is not a good idea. Often this is already prohibited by the police in the demo regulations. There is a fear that a glass bottle could also be used as a missile and injure people.',
    },
  },
  {
    active: false,
    link: '',
    id: 'papierstapel',
    name: { de: 'Anmeldebestätigung', en: 'Confirmation of registration' },
    source: '../startthedemo/papierstapel.svg',
    description: {
      de: 'Du hast die Anmeldebestätigung der Stadt gefunden! Das ist wichtig, denn sie bestätigt, dass ihr eure Demo korrekt bei der Stadt angezeigt habt. Meist folgt darauf ein Vorgespräch mit der Polizei, bei dem Rahmenbedingungen und Auflagen geklärt werden.',
      en: 'You have found the city´s confirmation of registration! This is important, because it confirms that you have correctly announced your demo to the city. In most cases, this is followed by a preliminary consultation with the police, during which the general conditions and requirements are clarified.',
    },
    print: {
      de: 'Die Anmeldebestätigung der Stadt bezeugt, dass die Demo korrekt angemeldet wurde. Oft folgt ein Vorgespräch mit der Polizei.',
      en: 'The confirmation of registration of the city testifies that the demo was announced correctly. Often follows a preliminary consultation with the police.',
    },
  },
  {
    active: false,
    link: '/posterparade',
    linkName: { de: 'Posterparade', en: 'Poster Parade' },
    linkText: { de: 'Demoplakate und ihre Geschichte', en: 'Demo posters and their history' },
    id: 'plakate',
    name: { de: 'Plakate', en: 'Posters' },
    source: '../startthedemo/plakate.svg',
    description: {
      de: 'Instagram, Twitter, Mailinglisten, alles schön und gut. Aber manche Leute werden auch einfach durch Plakate in ihrem Kiez auf eine Demo aufmerksam. Vergesst also nicht, auch im Analogen Werbung für eure Demo zu machen, damit sich möglichst verschiedene Menschen für euer Anliegen einsetzen und euch unterstützen können.',
      en: 'Instagram, Twitter, mailing lists, that´s all well and good. But some people also become aware of a demo simply through posters in their neighborhood. So don´t forget to advertise your demo in the analog world as well, so that as many people as possible can get involved in your cause and support you.',
    },
    print: {
      de: 'Manche Leute werden durch Plakate in ihrem Kiez auf eine Demo aufmerksam. Macht also auch im Analogen Werbung.',
      en: 'Some people become aware of a demo through posters in their neighborhood. So advertise in the analog sphere as well.',
    },
  },
  {
    active: false,
    link: '/protestart',
    linkName: { de: 'Protestkunst', en: 'Protest Art' },
    linkText: { de: 'Ein Blick in die Sammlung des Archivs der Arbeiterjugendbewegung', en: 'A look at the collection of the Archive of the Workers´ Youth Movement.' },
    id: 'transparente',
    name: { de: 'Transparente', en: 'Banner' },
    source: '../startthedemo/transparente.svg',
    description: {
      de: 'Keine Demo kommt ohne Plakate, Parolen und Transparente aus. Für die erste Reihe habt ihr ein großes Banner drucken lassen, auf dem "Kohle stoppen, Klima und Dörfer retten!" steht.',
      en: 'No demo can do without posters, slogans and banners. For the front row you have a big banner printed that says "Stop coal, save climate and villages!',
    },
    print: {
      de: 'Keine Demo kommt ohne Plakate aus. Für die erste und sichtbarste Reihe empfiehlt es sich, ein großes Banner drucken zu lassen.',
      en: 'No demo is complete without posters. For the first row, it is recommended to have a large banner printed.',
    },
  },
  {
    active: false,
    link: '/socialmediawall',
    linkName: { de: 'Social Media Wall', en: 'Social Media Wall' },
    linkText: { de: 'PROTESTORY! im Netz', en: 'PROTESTORY! on the web' },
    id: 'laptop',
    name: { de: 'Social Media', en: 'Social Media' },
    source: '../startthedemo/laptop.svg',
    description: {
      de: 'Je jünger eure Zielgruppe für die Demo, desto wichtiger ist Social Media – das ist klar. Wenn ihr sehr früh mit der Demoplanung angefangen habt, ist es gut, bereits einige Wochen vorher den Termin bekannt zu machen, denn die wenigsten entscheiden sich spontan an einer Demo teilzunehmen.',
      en: 'The younger your target group for the demo, the more important social media is - that´s obvious. If you have started planning the demo very early, it is good to announce the date a few weeks in advance, because very few people decide to attend a demo spontaneously.',
    },
    print: {
      de: 'Je jünger eure Zielgruppe für die Demo, desto wichtiger ist Social Media. Gebt frühzeitig den Demotermin bekannt!',
      en: 'The younger your target audience for the demo, the more important social media is. Announce the demo date early!',
    },
  },
  {
    active: false,
    link: '',
    id: 'adressen',
    name: { de: 'Mailingliste', en: 'Mailing list' },
    source: '../startthedemo/adressen.svg',
    description: {
      de: 'Stell dir vor, es ist eine Demo und keiner geht hin. Um das zu vermeiden, braucht es im Vorfeld viel Mobilisierung vor Ort und im Internet, z.B. über auch über Mailinglisten. Diese haben den Vorteil, dass sie meist über Verbände und Vereine weiter in die Strukturen durchgereicht werden und auch Leute erreichen, die nicht auf Social Media Kanälen unterwegs sind.',
      en: 'Imagine there is a demo and nobody attends it. To avoid this, a lot of mobilization is needed in advance, both locally and on the Internet, e.g. via mailing lists. These have the advantage that they are usually passed on to the structures via associations and clubs and also reach people who are not on social media channels.',
    },
    print: {
      de: 'Mailinglisten können Leute erreichen, die nicht auf Social Media Kanälen unterwegs sind.',
      en: 'Mailing lists can reach people who are not on social media channels.',
    },
  },
  {
    active: false,
    link: '',
    id: 'ordner_weste',
    name: { de: 'Kontakte zu Demo-Ordner:innen', en: 'Contacts to demo stewards' },
    source: '../startthedemo/ordner_weste.svg',
    description: {
      de: 'Diesen Job macht keiner gern und auf vielen Demos werden noch spontan Ordner:innen gesucht. Ihr habt zum Glück schon eine Liste mit Menschen, die sich freiwillig bereit erklärt haben, als Ordner:innen die Demo zu flankieren. Sie sollen vor allem die Demo-Auflagen durchsetzen, also z.B. eingreifen, wenn jemand aggressiv wird oder Gegenstände dabei hat, die untersagt sind.',
      en: 'No one likes to do this job and many demos are still spontaneously looking for stewards. Fortunately, you already have a list of people who have volunteered to flank the demo as stewards. Their main task is to ensure that the demo rules are enforced, e.g. to intervene if someone becomes aggressive or has objects with them that are prohibited.',
    },
    print: {
      de: 'Findet vor Demobeginn eine Reihe von Freiwilligen, die als Ordner:innen die Demo flankieren und die Demo-Auflagen durchsetzen.',
      en: 'Find a number of volunteers before the demo starts to act as stewards to flank the demo and enforce demo requirements.',
    },
  },
  {
    active: false,
    link: '',
    id: 'formular',
    name: { de: 'Offizielle Demoanmeldung bei der Stadt', en: 'Official demo registration to the city' },
    source: '../startthedemo/formular.svg',
    description: {
      de: 'Du hast das Formular für die Demo-Anmeldung gefunden! Das ist wichtig, denn nur so kann garantiert werden, dass ihr eure Demo wie geplant durchführen könnt. In den meisten Städten muss man Demonstrationen bis zu 48 Stunden vorher anmelden. In kurzfristigen Fällen funktioniert das aber auch auf telefonischem oder mündlichen Weg.',
      en: 'You have found the demo registration form! This is important, because it is the only way to guarantee that you can hold your demo as planned. In most cities, you have to register demonstrations up to 48 hours in advance. In short-term cases, however, this also works on the phone or verbally.',
    },
    print: {
      de: 'In der Regel muss man eine Demo bis zu 48 Stunden vorher anmelden. Kurzfristig funktioniert das auch telefonisch oder mündlich.',
      en: 'As a rule, you have to register a demo up to 48 hours in advance. At short notice, this also works by phone or verbally.',
    },
  },
]
