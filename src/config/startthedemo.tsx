export const cartMessage = {
  de: {
    start: 'Sobald du Gegenstände gefunden hast, die ihr für die Demo braucht, erscheinen diese hier.',
    playing: 'Sehr gut! Du hast etwas gefunden, was ihr für die Demo braucht. Finde auch die restlichen Gegenstände!',
    finish:
      'Herzlichen Glückwunsch! Du hast alle notwendigen Gegenstände gefunden, die ihr für die Demo braucht. Jetzt kann es endlich losgehen! Hier kannst du dir die Checklist noch als PDF herunterladen. Unten findest du noch weitere Inspiration für den nächsten Protest.',
  },
  en: {
    start: 'EN Sobald du Gegenstände gefunden hast, die ihr für die Demo braucht, erscheinen diese hier.',
    playing: 'EN Sehr gut! Du hast etwas gefunden, was ihr für die Demo braucht. Finde auch die restlichen Gegenstände!',
    finish:
      'EN Herzlichen Glückwunsch! Du hast alle notwendigen Gegenstände gefunden, die ihr für die Demo braucht. Jetzt kann es endlich losgehen! Hier kannst du dir die Checklist noch als PDF herunterladen. Unten findest du noch weitere Inspiration für den nächsten Protest.',
  },
}

export const items = [
  {
    active: false,
    link: '',
    id: 'verpflegung',
    name: 'Rucksack mit Essen, Trinken und Regenkleidung',
    source: '../startthedemo/verpflegung.svg',
    description:
      'Bei einer Demo kann viel dazwischen kommen – meist ist es das Wetter. Während du als Teilnehmer:innen bei strömenden Regen vielleicht zu Hause bleiben würdest, geht das als Organisator:in natürlich nicht. Regenkleidung, Essen und Trinken sind also ein Muss.',
    print: 'Regenkleidung, Essen und Trinken sind ein Muss - wer weiß, wie lang der Tag noch wird und ob das Wetter mitspielt.',
  },
  {
    active: false,
    link: '',
    id: 'schluessel',
    name: 'Transporterschlüssel',
    source: '../startthedemo/schluessel.svg',
    description: 'Ein Freund hat einen Transporter mit offener Ladefläche organisiert. Da du den Autoschlüssel gefunden hast, kann es nun auch losgehen.',
    print: 'Wenn ihr einen Transporter gemietet habt, sollte unbedingt klar sein, wer den Schlüssel aufbewahrt.',
  },
  {
    active: false,
    link: '/revolutiontelephone',
    linkName: 'Revolutionstelefon',
    linkText: 'Gedanken von historischen Personen zum Thema Protest',
    name: 'Pressekontakt',
    id: 'festnetz',
    source: '../startthedemo/festnetz.svg',
    description:
      'Du hast den Pressekontakt gefunden! Social Media ist wichtig, aber viel Berichterstattung findet immer noch über normale Tageszeitungen und deren Portale statt. Insbesondere wenn ihr ältere und unbeteiligte Menschen von eurer Sache überzeugen wollt, solltet ihr auch klassische Medien kontaktieren, um euer Anliegen publik zu machen.',
    print: 'Viel Berichterstattung findet immer noch über normale Tageszeitungen und deren Portale statt; darüber erreicht ihr vor allem auch Ältere.',
  },
  {
    active: false,
    link: '',
    id: 'baseball',
    name: 'Baseball',
    source: '../startthedemo/baseball.svg',
    leave: true,
    description:
      'Du willst nach der Demo noch zum Baseball-Training? Klingt logisch für dich, aber wahrscheinlich nicht für die Polizei. Die wird darin eher eine potentielle Waffe und einen Verstoß gegen die Demoauflagen sehen. Wenn du keinen Anlass für Stress bieten willst, lass ihn lieber zu Hause.',
  },
  {
    active: false,
    link: '',
    id: 'namen',
    name: 'Redner:innenliste',
    source: '../startthedemo/namen.svg',
    description:
      'Keine Demo ohne Redebeiträge! Ohne Redebeiträge weiß man oft gar nicht, wofür oder wogegen demonstriert wird. Sie dienen dazu, der Demo eine klare Richtung zu geben und die eigenen Anliegen klar zu formulieren. Da alle Redner:innen sich ebenfalls auf ihre Beiträge vorbereiten müssen, solltet ihr früh anfangen, geeignete Menschen dafür zu finden und absprechen, wer worüber spricht.',
    print: 'Redebeiträge geben der Demo eine klare Richtung. Findet frühzeitig Redner:innen, damit diese sich gut vorbereiten können.',
  },
  {
    active: false,
    link: '',
    id: 'demoshirt',
    name: 'Demoshirt',
    source: '../startthedemo/demoshirt.svg',
    description:
      'Um euren Protest gegen den Tagebau-Ausbau auch an anderen Tagen öffentlich zu zeigen, hast du T-Shirts aus Biobaumwolle mit dem Demoslogan drucken lassen. Das trägst du natürlich auch auf der Demo.',
    print: 'Um euren Protest an allen Tagen öffentlich zu zeigen, könnt ihr T-Shirts mit dem Demoslogan drucken lassen.',
  },
  {
    active: false,
    link: '/slogangenerator',
    linkName: 'Slogan-Generator',
    linkText: 'Inspiration für deinen nächsten Demo-Rufe',
    id: 'megafon',
    name: 'Megafon',
    source: '../startthedemo/megafon.svg',
    description:
      'Ein Megafon ist wichtig, z.B. um Sprechchöre anzustimmen. Als Ergänzung zu Lautsprechern und Mikrofon ist es auch mobiler einsetzbar, sobald sich die Demonstration in Bewegung setzt. Und deine Stimme ist vielleicht nicht kräftig genug, um über einige Hundert Meter hinweg hörbar zu sein.',
    print: 'Ergänzend zu Lautsprechern und Mikrofon ist ein Megafon mobil und zum Anstimmen von Sprechchören besser einsetzbar.',
  },
  {
    active: false,
    link: '',
    id: 'books_floor',
    name: 'Bücherstapel',
    source: '../startthedemo/books_floor.svg',
    leave: true,
    description:
      'Eine Demo kann entspannt sein, aber wahrscheinlich gibt es immer genug zu tun. Du wirst also eher keine Zeit haben, nebenbei noch was zu lesen. Also mach lieber deinen Rucksack leichter und lass die Bücher zu Hause.',
  },
  {
    active: false,
    link: '/concert',
    linkName: 'If I can`t dance to it, it`s not my revolution',
    linkText: 'Protestsongs aus mehreren Jahrzehnten - zum Mitsingen',
    id: 'smartphone',
    name: 'Playlist',
    source: '../startthedemo/smartphone.svg',
    description:
      'Die beste Demo ist die, bei der gute Musik läuft und Lieder auch mal mitgesungen werden. Du hast eine Playlist mit klassischen Protestliedern zusammengestellt, aber auch mit neueren empowernden Songs. Falls ihr noch Inspiration sucht, schaut mal bei "If I can´t dance to it, it is not my revolution" rein.',
    print: 'Die beste Playlist für eine Demo setzt sich aus klassischen Protestliedern und neueren empowernden Songs zusammen.',
  },
  {
    active: false,
    link: '',
    id: 'gitarre',
    name: 'Gitarre für Live-Musik',
    source: '../startthedemo/gitarre.svg',
    description:
      'Du hast Glück und einer deiner Freunde will live zwischen einigen Reden auftreten und zwei eigene Songs spielen. Dafür hast du eine Gitarre besorgt, die ihr an den Verstärker anschließen könnt. Vergesst den Soundcheck nicht!',
    print: 'Kennt ihr jemanden, der Live-Musik auf der Demo spielen kann? Gut für euch! Vergesst den Soundcheck nicht!',
  },
  {
    active: false,
    link: '',
    id: 'hund',
    name: 'Hund',
    source: '../startthedemo/hund.svg',
    leave: true,
    description:
      'Eine Demo ist für Tiere meist nicht der richtige Platz, denn es sind zu viele Menschen auf engstem Raum. Hunde macht das oft unruhig und manche Menschen haben Angst vor Hunden. Du tust ihm also einen Gefallen, wenn du ihn zu Hause lässt.',
  },
  {
    active: false,
    link: '',
    id: 'lautsprecher_mikro',
    name: 'Lautsprecher und Mikro',
    source: '../startthedemo/lautsprecher_mikro.svg',
    description:
      'Da ihr einen Transporter mit offener Ladefläche als Bühne nutzen wollt, ist es praktisch, ein Mikrofon mit Lautsprecher zu haben. Gerade eure Redner:innen wollen gut von allen gehört werden. Testet am Besten vorab, wie gut die Qualität und die Lautstärke der Anlage ist.',
    print: 'Wenn ihr eine Bühne habt, benötigt ihr dort ein Mikrofon mit Lautsprecher. Soundcheck nicht vergessen!',
  },
  {
    active: false,
    link: '',
    id: 'messer',
    name: 'Messer',
    source: '../startthedemo/messer.svg',
    leave: true,
    description:
      'Auch wenn ihr nur Obst damit schneiden wollt: es ist besser, das Messer zu Hause zu lassen, da es auch als Waffe gelesen werden kann. Oft wird das Mitführen von Messern auch in den Demoauflagen der Polizei untersagt.',
  },
  {
    active: false,
    link: '',
    id: 'checklist',
    name: 'Checklist für die Demo',
    source: '../startthedemo/checklist.svg',
    description:
      'Ihr habt zu Beginn eurer Planungen eine lange Checklist geschrieben, damit ihr bei der Vorbereitung nichts vergesst. Dabei helfen euch auch bereits bestehende Checklists, z. B. von Aktion Mensch.',
    print: 'Eine Checklist kann euch helfen, alle zu organisierenden Dinge im Auge zu behalten.',
  },
  {
    active: false,
    link: '',
    id: 'glasflasche',
    name: 'Glasflasche',
    source: '../startthedemo/glasflasche.svg',
    leave: true,
    description:
      'Eine Glasflasche mitzunehmen, ist keine gute Idee. Oft wird dies bereits in den Demo-Auflagen der Polizei untersagt. Es besteht die Befürchtung, dass eine Glasflasche auch als Wurfgeschoss eingesetzt werden könnte und Menschen verletzt.',
  },
  {
    active: false,
    link: '',
    id: 'papierstapel',
    name: 'Anmeldebestätigung',
    source: '../startthedemo/papierstapel.svg',
    description:
      'Du hast die Anmeldebestätigung der Stadt gefunden! Das ist wichtig, denn sie bestätigt, dass ihr eure Demo korrekt bei der Stadt angezeigt habt. Meist folgt darauf ein Vorgespräch mit der Polizei, bei dem Rahmenbedingungen und Auflagen geklärt werden.',
    print: 'Die Anmeldebestätigung der Stadt bezeugt, dass die Demo korrekt angemeldet wurde. Oft folgt ein Vorgespräch mit der Polizei.',
  },
  {
    active: false,
    link: '/posterparade',
    linkName: 'Posterparade',
    linkText: 'Demoplakate und ihre Geschichte',
    id: 'plakate',
    name: 'Plakate',
    source: '../startthedemo/plakate.svg',
    description:
      'Instagram, Twitter, Mailinglisten, alles schön und gut. Aber manche Leute werden auch einfach durch Plakate in ihrem Kiez auf eine Demo aufmerksam. Vergesst also nicht, auch im Analogen Werbung für eure Demo zu machen, damit sich möglichst verschiedene Menschen für euer Anliegen einsetzen und euch unterstützen können.',
    print: 'Manche Leute werden durch Plakate in ihrem Kiez auf eine Demo aufmerksam. Macht also auch im Analogen Werbung.',
  },
  {
    active: false,
    link: '/protestart',
    linkName: 'Protestkunst',
    linkText: 'Ein Blick in die Sammlung des Archivs der Arbeiterjugendbewegung',
    id: 'transparente',
    name: 'Transparente',
    source: '../startthedemo/transparente.svg',
    description:
      'Keine Demo kommt ohne Plakate, Parolen und Transparente aus. Für die erste Reihe habt ihr ein großes Banner drucken lassen, auf dem "Kohle stoppen, Klima und Dörfer retten!" steht.',
    print: 'Keine Demo kommt ohne Plakate. Für die erste und sichtbarste Reihe empfiehlt es sich, ein großes Banner drucken zu lassen.',
  },
  {
    active: false,
    link: '/socialmediawall',
    linkName: 'Social Media Wall',
    linkText: 'PROTESTORY! im Netz',
    id: 'laptop',
    name: 'Social Media',
    source: '../startthedemo/laptop.svg',
    description:
      'Je jünger eure Zielgruppe für die Demo, desto wichtiger ist Social Media – das ist klar. Wenn ihr sehr früh mit der Demoplanung angefangen habt, ist es gut, bereits einige Wochen vorher den Termin bekannt zu machen, denn die wenigsten entscheiden sich spontan an einer Demo teilzunehmen.',
    print: 'Je jünger eure Zielgruppe für die Demo, desto wichtiger ist Social Media. Gebt frühzeitig den Demotermin bekannt!',
  },
  {
    active: false,
    link: '',
    id: 'adressen',
    name: 'Mailingliste',
    source: '../startthedemo/adressen.svg',
    description:
      'Stell dir vor, es ist eine Demo und keiner geht hin. Um das zu vermeiden, braucht es im Vorfeld viel Mobilisierung vor Ort und im Internet, z.B. über auch über Mailinglisten. Diese haben den Vorteil, dass sie meist über Verbände und Vereine weiter in die Strukturen durchgereicht werden und auch Leute erreichen, die nicht auf Social Media Kanälen unterwegs sind.',
    print: 'Mailinglisten können Leute erreichen, die nicht auf Social Media Kanälen unterwegs sind.',
  },
  {
    active: false,
    link: '',
    id: 'ordner_weste',
    name: 'Kontakte zu Demo-Ordner:innen',
    source: '../startthedemo/ordner_weste.svg',
    description:
      'Diesen Job macht keiner gern und auf vielen Demos werden noch spontan Ordner:innen gesucht. Ihr habt zum Glück schon eine Liste mit Menschen, die sich freiwillig bereit erklärt haben, als Ordner:innen die Demo zu flankieren. Sie sollen vor allem die Demo-Auflagen durchsetzen, also z.B. eingreifen, wenn jemand aggressiv wird oder Gegenstände dabei hat, die untersagt sind.',
    print: 'Findet vor Demobeginn eine Reihe von Freiwilligen, die als Ordner:innen die Demo flankieren und die Demo-Auflagen durchsetzen.',
  },
  {
    active: false,
    link: '',
    id: 'formular',
    name: 'Offizielle Demoanmeldung bei der Stadt',
    source: '../startthedemo/formular.svg',
    description:
      'Du hast das Formular für die Demo-Anmeldung gefunden! Das ist wichtig, denn nur so kann garantiert werden, dass ihr eure Demo wie geplant durchführen könnt. In den meisten Städten muss man Demonstrationen bis zu 48 Stunden vorher anmelden. In kurzfristigen Fällen funktioniert das aber auch auf telefonischem oder mündlichen Weg.',
    print: 'In der Regel muss man eine Demo bis zu 48 Stunden vorher anmelden. Kurzfristig funktioniert das auch telefonisch oder mündlich.',
  },
]
