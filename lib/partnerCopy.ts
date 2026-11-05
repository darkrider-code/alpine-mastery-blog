export interface PartnerGeneratorCopy {
  title: string;
  name: string;
  privacy: string;
  channel: string;
  channels: [string, string, string, string];
  slug: string;
  invalid: string;
  adult: string;
  parent: string;
  copy: string;
  copied: string;
  copyFailed: string;
}
export interface PartnerCopy {
  title: string;
  description: string;
  problem: string;
  workflowTitle: string;
  steps: string[];
  free: string;
  trackingTitle: string;
  tracking: string;
  limitsTitle: string;
  limits: string[];
  cta: string;
  club: string;
  footer: string;
  generator: PartnerGeneratorCopy;
}
export const partnerCopy: Record<string, PartnerCopy> = {
  "sv": {
    "title": "Videoanalys för skidlärare och skidskolor",
    "description": "Hjälp eleverna att utveckla sin skidteknik mellan lektioner och skidläger. Videoanalys från mobilfilm med ett tydligt fokus och en övning. Första analysen gratis.",
    "problem": "Under en lektion får varje elev bara några minuters egen uppmärksamhet. Eleven kan inte heller se sin egen åkning. En kort film ger er något konkret att återkomma till.",
    "workflowTitle": "Från film till nästa lektion",
    "steps": [
      "Eleven låter någon filma ett åk med mobilen.",
      "Eleven laddar upp filmen och får feedback på tekniken med ett konkret fokus och en övning.",
      "Eleven tar med feedbacken till nästa lektion så att ni kan följa upp tillsammans."
    ],
    "free": "Den första analysen är gratis för varje elev.",
    "trackingTitle": "En länk för dina elever",
    "tracking": "En partnerlänk gör att vi i vår rapportering kan se hur många av dina elever som har startat en analys.",
    "limitsTitle": "Du leder undervisningen",
    "limits": [
      "Feedbacken kompletterar undervisningen och ersätter inte skidläraren.",
      "Feedback från mobilfilm är inte en laboratoriemätning.",
      "Elever under 18 år behöver vårdnadshavarens samtycke för att ladda upp."
    ],
    "cta": "Fråga om ett samarbete",
    "club": "Representerar du en klubb? Läs om klubbpaketet.",
    "footer": "För skidlärare och skidskolor",
    "generator": {
      "title": "Skapa dina partnerlänkar",
      "name": "Partnernamn",
      "privacy": "Använd ett offentligt verksamhetsnamn, aldrig elevnamn, e-postadresser eller andra personuppgifter. Uppgiften behandlas bara här i webbläsaren och sparas inte av generatorn.",
      "channel": "Kanal",
      "channels": [
        "Lektionsmaterial",
        "E-post",
        "Sociala medier",
        "Tryckt QR-material"
      ],
      "slug": "Identifierare i länken",
      "invalid": "Ange ett verksamhetsnamn som ger 1–64 tecken med a–z, 0–9 och enkla bindestreck mellan orden.",
      "adult": "Vuxna elever — dela den här länken direkt med en vuxen elev.",
      "parent": "Vårdnadshavare — dela den här länken med vårdnadshavaren till en elev under 18 år.",
      "copy": "Kopiera länk",
      "copied": "Länken är kopierad.",
      "copyFailed": "Kopiering misslyckades. Markera och kopiera länken i fältet."
    }
  },
  "en": {
    "title": "Ski video analysis for instructors and ski schools",
    "description": "Help students improve their ski technique between lessons and ski camps. Phone video feedback with one clear focus and an exercise. First analysis free.",
    "problem": "During a lesson, each student gets only a few minutes of individual attention. Students cannot see their own skiing either. A short video gives you something concrete to revisit.",
    "workflowTitle": "From a video to the next lesson",
    "steps": [
      "The student asks someone to film a run on a phone.",
      "The student uploads the video and gets technique feedback with one concrete focus and an exercise.",
      "The student brings the feedback to the next lesson so you can follow up together."
    ],
    "free": "Every student's first analysis is free.",
    "trackingTitle": "A link for your students",
    "tracking": "A partner link lets us see in our reporting how many of your students have started an analysis.",
    "limitsTitle": "You lead the teaching",
    "limits": [
      "The feedback supports your teaching and does not replace the instructor.",
      "Feedback from phone video is not a laboratory measurement.",
      "Students under 18 need a guardian's consent to upload."
    ],
    "cta": "Ask about a partnership",
    "club": "Representing a club? Explore the club package.",
    "footer": "For instructors and ski schools",
    "generator": {
      "title": "Create your partner links",
      "name": "Partner name",
      "privacy": "Use a public business name, never student names, email addresses or other personal data. The generator processes the name only in this browser and does not save it.",
      "channel": "Channel",
      "channels": [
        "Lesson handout",
        "Email",
        "Social",
        "QR print"
      ],
      "slug": "Link identifier",
      "invalid": "Enter a business name that produces 1–64 characters using a–z, 0–9 and single hyphens between words.",
      "adult": "Adult students — share this link directly with an adult student.",
      "parent": "Guardians — share this link with the guardian of a student under 18.",
      "copy": "Copy link",
      "copied": "Link copied.",
      "copyFailed": "Copy failed. Select and copy the link in the field."
    }
  },
  "no": {
    "title": "Videoanalyse for skiinstruktører og skiskoler",
    "description": "Hjelp elevene med skiteknikken mellom skitimer og skileirer. Videoanalyse fra mobilfilm med ett tydelig fokus og en øvelse. Første analyse er gratis.",
    "problem": "I løpet av en skitime får hver elev bare noen få minutter med individuell oppmerksomhet. Eleven kan heller ikke se sin egen kjøring. En kort video gir dere noe konkret å komme tilbake til.",
    "workflowTitle": "Fra video til neste skitime",
    "steps": [
      "Eleven ber noen filme et løp med mobilen.",
      "Eleven laster opp videoen og får tilbakemelding på teknikken med ett konkret fokus og en øvelse.",
      "Eleven tar med tilbakemeldingen til neste time, slik at dere kan følge opp sammen."
    ],
    "free": "Den første analysen er gratis for hver elev.",
    "trackingTitle": "En lenke til elevene dine",
    "tracking": "En partnerlenke gjør at vi i rapporteringen vår kan se hvor mange av elevene dine som har startet en analyse.",
    "limitsTitle": "Du leder undervisningen",
    "limits": [
      "Tilbakemeldingen støtter undervisningen og erstatter ikke instruktøren.",
      "Tilbakemelding fra mobilvideo er ikke en laboratoriemåling.",
      "Elever under 18 år trenger samtykke fra foresatte for å laste opp."
    ],
    "cta": "Spør om et samarbeid",
    "club": "Representerer du en klubb? Les om klubbpakken.",
    "footer": "For instruktører og skiskoler",
    "generator": {
      "title": "Lag partnerlenkene dine",
      "name": "Partnernavn",
      "privacy": "Bruk et offentlig virksomhetsnavn, aldri elevnavn, e-postadresser eller andre personopplysninger. Navnet behandles bare i nettleseren og lagres ikke av generatoren.",
      "channel": "Kanal",
      "channels": [
        "Utdelt undervisningsmateriell",
        "E-post",
        "Sosiale medier",
        "Trykt QR-materiell"
      ],
      "slug": "Identifikator i lenken",
      "invalid": "Skriv et virksomhetsnavn som gir 1–64 tegn med a–z, 0–9 og enkle bindestreker mellom ordene.",
      "adult": "Voksne elever — del denne lenken direkte med en voksen elev.",
      "parent": "Foresatte — del denne lenken med foresatte til en elev under 18 år.",
      "copy": "Kopier lenke",
      "copied": "Lenken er kopiert.",
      "copyFailed": "Kopieringen mislyktes. Marker og kopier lenken i feltet."
    }
  },
  "da": {
    "title": "Videoanalyse til skiinstruktører og skiskoler",
    "description": "Hjælp eleverne med skiteknikken mellem skilektioner og skicamps. Videoanalyse af mobilvideo med ét tydeligt fokus og en øvelse. Første analyse er gratis.",
    "problem": "I en skilektion får hver elev kun få minutters individuel opmærksomhed. Eleven kan heller ikke se sit eget skiløb. En kort video giver jer noget konkret at vende tilbage til.",
    "workflowTitle": "Fra video til næste lektion",
    "steps": [
      "Eleven beder nogen om at filme en tur med mobilen.",
      "Eleven uploader videoen og får feedback på teknikken med ét konkret fokus og en øvelse.",
      "Eleven tager feedbacken med til næste lektion, så I kan følge op sammen."
    ],
    "free": "Den første analyse er gratis for hver elev.",
    "trackingTitle": "Et link til dine elever",
    "tracking": "Et partnerlink gør det muligt for os at se i vores rapportering, hvor mange af dine elever der har startet en analyse.",
    "limitsTitle": "Du står for undervisningen",
    "limits": [
      "Feedbacken supplerer undervisningen og erstatter ikke instruktøren.",
      "Feedback fra mobilvideo er ikke en laboratoriemåling.",
      "Elever under 18 år skal have samtykke fra en forælder eller værge for at uploade."
    ],
    "cta": "Spørg om et samarbejde",
    "club": "Repræsenterer du en klub? Læs om klubpakken.",
    "footer": "For instruktører og skiskoler",
    "generator": {
      "title": "Opret dine partnerlinks",
      "name": "Partnernavn",
      "privacy": "Brug et offentligt virksomhedsnavn, aldrig elevnavne, e-mailadresser eller andre personoplysninger. Navnet behandles kun i browseren og gemmes ikke af generatoren.",
      "channel": "Kanal",
      "channels": [
        "Undervisningsmateriale",
        "E-mail",
        "Sociale medier",
        "Trykt QR-materiale"
      ],
      "slug": "Identifikator i linket",
      "invalid": "Angiv et virksomhedsnavn, der giver 1–64 tegn med a–z, 0–9 og enkelte bindestreger mellem ordene.",
      "adult": "Voksne elever — del dette link direkte med en voksen elev.",
      "parent": "Forældre og værger — del dette link med en forælder eller værge til en elev under 18 år.",
      "copy": "Kopiér link",
      "copied": "Linket er kopieret.",
      "copyFailed": "Kopieringen mislykkedes. Markér og kopiér linket i feltet."
    }
  },
  "fi": {
    "title": "Laskettelun videoanalyysi hiihdonopettajille ja hiihtokouluille",
    "description": "Tue oppilaiden laskutekniikkaa oppituntien ja lasketteluleirien välillä. Puhelinvideosta yksi selkeä kehityskohde ja harjoitus. Ensimmäinen analyysi on ilmainen.",
    "problem": "Tunnilla jokainen oppilas saa vain muutaman minuutin henkilökohtaista huomiota. Oppilas ei myöskään näe omaa laskemistaan. Lyhyt video antaa teille konkreettisen lähtökohdan seuraavaan keskusteluun.",
    "workflowTitle": "Videolta seuraavalle tunnille",
    "steps": [
      "Oppilas pyytää jotakuta kuvaamaan laskun puhelimella.",
      "Oppilas lataa videon ja saa tekniikastaan palautetta, yhden konkreettisen painopisteen ja harjoituksen.",
      "Oppilas tuo palautteen seuraavalle tunnille, jotta voitte käydä sen yhdessä läpi."
    ],
    "free": "Ensimmäinen analyysi on maksuton jokaiselle oppilaalle.",
    "trackingTitle": "Linkki oppilaillesi",
    "tracking": "Kumppanilinkin avulla näemme raporteistamme, kuinka moni oppilaistasi on aloittanut analyysin.",
    "limitsTitle": "Sinä vastaat opetuksesta",
    "limits": [
      "Palaute tukee opetusta eikä korvaa hiihdonopettajaa.",
      "Puhelinvideosta annettu palaute ei ole laboratoriomittaus.",
      "Alle 18-vuotiaat tarvitsevat huoltajan suostumuksen videon lataamiseen."
    ],
    "cta": "Kysy yhteistyöstä",
    "club": "Edustatko seuraa? Tutustu seurapakettiin.",
    "footer": "Hiihdonopettajille ja hiihtokouluille",
    "generator": {
      "title": "Luo kumppanilinkit",
      "name": "Kumppanin nimi",
      "privacy": "Käytä julkista yrityksen nimeä, älä oppilaiden nimiä, sähköpostiosoitteita tai muita henkilötietoja. Nimeä käsitellään vain tässä selaimessa, eikä generaattori tallenna sitä.",
      "channel": "Kanava",
      "channels": [
        "Jaettava tuntimateriaali",
        "Sähköposti",
        "Sosiaalinen media",
        "Painettu QR-materiaali"
      ],
      "slug": "Linkin tunniste",
      "invalid": "Anna yrityksen nimi, josta muodostuu 1–64 merkkiä käyttäen kirjaimia a–z, numeroita 0–9 ja yksittäisiä yhdysmerkkejä sanojen välissä.",
      "adult": "Aikuiset oppilaat — jaa tämä linkki suoraan aikuiselle oppilaalle.",
      "parent": "Huoltajat — jaa tämä linkki alle 18-vuotiaan oppilaan huoltajalle.",
      "copy": "Kopioi linkki",
      "copied": "Linkki kopioitu.",
      "copyFailed": "Kopiointi epäonnistui. Valitse linkki kentästä ja kopioi se."
    }
  },
  "de": {
    "title": "Ski-Videoanalyse für Skilehrer und Skischulen",
    "description": "Begleite deine Schüler zwischen Skistunden und Skicamps. Feedback zum Handyvideo mit einem klaren Technikfokus und einer Übung. Die erste Analyse ist kostenlos.",
    "problem": "In einer Skistunde bekommt jeder Schüler nur wenige Minuten individuelle Aufmerksamkeit. Die eigene Fahrt kann der Schüler dabei nicht sehen. Ein kurzes Video gibt euch etwas Konkretes, auf das ihr zurückkommen könnt.",
    "workflowTitle": "Vom Video zur nächsten Skistunde",
    "steps": [
      "Der Schüler lässt eine Fahrt mit dem Smartphone filmen.",
      "Der Schüler lädt das Video hoch und erhält Feedback zur Technik mit einem konkreten Schwerpunkt und einer Übung.",
      "Der Schüler bringt das Feedback zur nächsten Stunde mit, damit ihr gemeinsam daran anknüpfen könnt."
    ],
    "free": "Die erste Analyse ist für jeden Schüler kostenlos.",
    "trackingTitle": "Ein Link für deine Schüler",
    "tracking": "Über einen Partnerlink können wir in unseren Berichten sehen, wie viele deiner Schüler eine Analyse gestartet haben.",
    "limitsTitle": "Du gestaltest den Unterricht",
    "limits": [
      "Das Feedback ergänzt den Unterricht und ersetzt den Skilehrer nicht.",
      "Feedback anhand eines Smartphone-Videos ist keine Labormessung.",
      "Schüler unter 18 Jahren benötigen zum Hochladen die Zustimmung eines Erziehungsberechtigten."
    ],
    "cta": "Eine Partnerschaft anfragen",
    "club": "Du vertrittst einen Verein? Informiere dich über das Vereinspaket.",
    "footer": "Für Skilehrer und Skischulen",
    "generator": {
      "title": "Deine Partnerlinks erstellen",
      "name": "Partnername",
      "privacy": "Verwende einen öffentlichen Geschäftsnamen, niemals Schülernamen, E-Mail-Adressen oder andere personenbezogene Daten. Der Generator verarbeitet den Namen nur in diesem Browser und speichert ihn nicht.",
      "channel": "Kanal",
      "channels": [
        "Unterrichtsmaterial",
        "E-Mail",
        "Social Media",
        "Gedrucktes QR-Material"
      ],
      "slug": "Kennung im Link",
      "invalid": "Gib einen Geschäftsnamen ein, der 1–64 Zeichen aus a–z, 0–9 und einzelnen Bindestrichen zwischen Wörtern ergibt.",
      "adult": "Erwachsene Schüler — teile diesen Link direkt mit einem erwachsenen Schüler.",
      "parent": "Erziehungsberechtigte — teile diesen Link mit den Erziehungsberechtigten eines Schülers unter 18 Jahren.",
      "copy": "Link kopieren",
      "copied": "Link kopiert.",
      "copyFailed": "Kopieren fehlgeschlagen. Markiere und kopiere den Link im Feld."
    }
  },
  "fr": {
    "title": "Analyse vidéo de ski pour moniteurs et écoles de ski",
    "description": "Aide tes élèves à progresser entre les cours et les stages de ski. Une vidéo, un point technique précis et un exercice. La première analyse est gratuite.",
    "problem": "Pendant un cours, chaque élève ne bénéficie que de quelques minutes d’attention individuelle. Il ne peut pas non plus voir sa propre façon de skier. Une courte vidéo vous donne un support concret à reprendre ensemble.",
    "workflowTitle": "De la vidéo au prochain cours",
    "steps": [
      "L’élève demande à quelqu’un de filmer une descente avec un téléphone.",
      "L’élève envoie la vidéo et reçoit un retour sur sa technique, avec un point précis à travailler et un exercice.",
      "L’élève apporte ce retour au prochain cours pour que vous puissiez le reprendre ensemble."
    ],
    "free": "La première analyse est gratuite pour chaque élève.",
    "trackingTitle": "Un lien pour vos élèves",
    "tracking": "Un lien partenaire nous permet de voir dans nos rapports combien de vos élèves ont commencé une analyse.",
    "limitsTitle": "Vous guidez l’apprentissage",
    "limits": [
      "Le retour complète votre enseignement et ne remplace pas le moniteur.",
      "Un retour fondé sur une vidéo de téléphone n’est pas une mesure en laboratoire.",
      "Les élèves de moins de 18 ans ont besoin de l’accord d’un représentant légal pour envoyer une vidéo."
    ],
    "cta": "Se renseigner sur un partenariat",
    "club": "Vous représentez un club ? Découvrez l’offre pour les clubs.",
    "footer": "Pour les moniteurs et les écoles de ski",
    "generator": {
      "title": "Créer vos liens partenaires",
      "name": "Nom du partenaire",
      "privacy": "Utilisez le nom public de votre structure, jamais de noms d’élèves, d’adresses e-mail ou d’autres données personnelles. Le générateur traite ce nom uniquement dans ce navigateur et ne l’enregistre pas.",
      "channel": "Canal",
      "channels": [
        "Support de cours",
        "E-mail",
        "Réseaux sociaux",
        "Support imprimé avec QR code"
      ],
      "slug": "Identifiant dans le lien",
      "invalid": "Saisissez un nom de structure donnant 1 à 64 caractères avec a–z, 0–9 et un seul trait d’union entre les mots.",
      "adult": "Élèves adultes — partagez ce lien directement avec un élève adulte.",
      "parent": "Représentants légaux — partagez ce lien avec le représentant légal d’un élève de moins de 18 ans.",
      "copy": "Copier le lien",
      "copied": "Lien copié.",
      "copyFailed": "La copie a échoué. Sélectionnez et copiez le lien dans le champ."
    }
  },
  "nl": {
    "title": "Videoanalyse voor skileraren en skischolen",
    "description": "Help je leerlingen met hun skitechniek tussen skilessen en skikampen. Feedback op een telefoonvideo met één aandachtspunt en oefening. Eerste analyse gratis.",
    "problem": "Tijdens een les krijgt elke leerling maar een paar minuten individuele aandacht. Een leerling kan bovendien het eigen skiën niet zien. Een korte video geeft jullie iets concreets om op terug te komen.",
    "workflowTitle": "Van video naar de volgende les",
    "steps": [
      "De leerling vraagt iemand om een afdaling met een telefoon te filmen.",
      "De leerling uploadt de video en krijgt feedback op de techniek met één concreet aandachtspunt en een oefening.",
      "De leerling neemt de feedback mee naar de volgende les, zodat jullie er samen op kunnen voortbouwen."
    ],
    "free": "De eerste analyse is gratis voor elke leerling.",
    "trackingTitle": "Een link voor jouw leerlingen",
    "tracking": "Met een partnerlink kunnen we in onze rapportage zien hoeveel van jouw leerlingen een analyse zijn gestart.",
    "limitsTitle": "Jij geeft richting aan de les",
    "limits": [
      "De feedback ondersteunt je lessen en vervangt de skileraar niet.",
      "Feedback op basis van een telefoonvideo is geen laboratoriummeting.",
      "Leerlingen onder de 18 hebben toestemming van een ouder of voogd nodig om te uploaden."
    ],
    "cta": "Informeer naar een samenwerking",
    "club": "Vertegenwoordig je een club? Bekijk het clubpakket.",
    "footer": "Voor skileraren en skischolen",
    "generator": {
      "title": "Maak je partnerlinks",
      "name": "Partnernaam",
      "privacy": "Gebruik een openbare bedrijfsnaam, nooit namen van leerlingen, e-mailadressen of andere persoonsgegevens. De generator verwerkt de naam alleen in deze browser en slaat deze niet op.",
      "channel": "Kanaal",
      "channels": [
        "Lesmateriaal",
        "E-mail",
        "Sociale media",
        "Gedrukt QR-materiaal"
      ],
      "slug": "Identificatie in de link",
      "invalid": "Voer een bedrijfsnaam in die 1–64 tekens oplevert met a–z, 0–9 en enkele koppeltekens tussen woorden.",
      "adult": "Volwassen leerlingen — deel deze link rechtstreeks met een volwassen leerling.",
      "parent": "Ouders en voogden — deel deze link met de ouder of voogd van een leerling onder de 18.",
      "copy": "Link kopiëren",
      "copied": "Link gekopieerd.",
      "copyFailed": "Kopiëren mislukt. Selecteer en kopieer de link in het veld."
    }
  }
};
