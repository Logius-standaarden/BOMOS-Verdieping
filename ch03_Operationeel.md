# Operationeel
In deze sectie worden onderwerpen verdiept die gerelateerd zijn aan strategische onderwerpen uit het Beheer- en Ontwikkelmodel.

## Proces voor de ontwikkeling en het beheer van een standaard (Hoofdactiviteit: Operationeel)

De primaire standaardisatieactiviteit is het operationele proces: Op welke manier komt de uiteindelijke standaard nu tot stand?

Daarbij is een aantal aspecten van belang:
*   Hoe worden wensen en eisen verzameld?
*   Hoe worden wensen en eisen vertaald naar concrete wijzigingsvoorstellen?
*   Hoe vindt besluitvorming plaats over wijzigingsvoorstellen?
*   Op welke manier wordt omgegaan met versies van een standaard?

### Verzamelen van wensen en eisen
Misschien wel de belangrijkste stap is het verzamelen van wensen en eisen. Dit moet zowel gebeuren bij het opstellen van een nieuwe standaard als bij het wijzigen van een bestaande standaard.

Kenmerk voor een open standaard is dat iedereen zijn of haar wensen kan indienen. Deze groep is idealiter zo groot mogelijk – dit vergroot immers het draagvlak van de standaard. Wel kan het zo zijn dat er door het bestuur van de standaardisatieorganisatie bepaalde richtingen zijn uitgezet die hiervoor een beperking vormen. Deze beperking kan bijvoorbeeld betrekking hebben op de overall functionele scope van de standaard. Er zijn verschillende mogelijkheden om wensen en eisen te verzamelen:

*   Het inrichten van een omgeving (zoals een website, miro board, git repository of wiki) waar gebruikers ideeën kunnen achterlaten. Gebruikers kunnen daar ook met elkaar discussiëren over ideeën of wijzigingsvoorstellen.
*   Via een formele consultatie. Hierbij wordt een formele vraag gesteld aan partijen rondom de standaard over toekomstige ontwikkelingen, wensen of eisen.
*   Door het organiseren van workshops of discussiebijeenkomsten met stakeholders uit de gemeenschap. Tijdens deze bijeenkomsten kunnen lopende ontwikkelingen worden besproken. Zo kan er bijvoorbeeld een nieuwe ontwikkeling zijn bij één van de deelnemers, die ook voor anderen relevant is. Deze ontwikkeling kan dan aanleiding geven tot uitbreiding van de standaard.

Welke vorm ook gekozen wordt, of combinatie van vormen: uiteindelijk moet dit proces leiden tot een lijst met wensen en eisen die beoordeeld moet worden.

Het verzamelen van wensen en eisen is een doorlopend proces. Wel kan het soms zinvol zijn om vanuit de beheerorganisatie partijen in de gemeenschap actief te wijzen op de mogelijkheid om wensen en eisen aan te leveren.

Bij het opstellen van een nieuwe standaard kan een _pressure cooker_ proces worden gevolgd, waarin in korte tijd met een aantal sleutelspelers de eerste aanzet voor de standaard wordt gegeven.

### Voorbereiden veranderingsvoorstellen
Niet ieder idee of wens leidt automatisch tot een veranderingsvoorstel voor de standaard. Grofweg zijn er de volgende mogelijkheden:

*   Het idee is meer een vraag die specifiek is voor de implementatie bij een bepaalde partij. Bijvoorbeeld wanneer een organisatie nog weinig ervaring heeft met de standaard. In een dergelijk geval kan vanuit de gemeenschap of vanuit de beheerorganisatie mogelijke ondersteuning worden geboden bij het oplossen van het probleem. Het is dan niet nodig de standaard te wijzigen.
*   Een wens of idee heeft betrekking op aanpassing of uitbreiding van de bestaande standaard. Dit kan voortkomen uit veranderde wetgeving, veranderde processen of andere veranderde behoefte.
*   Het voorstel heeft betrekking tot fundamentele wijziging of uitbreiding van de standaard. Denk aan:
    *   Functionele uitbreiding
    *   Naast semantische standaardisatie ook op transportniveau vastleggen hoe gegevens uitgewisseld moeten worden. Bijvoorbeeld: vastleggen dat bepaalde XML/JSON-berichten enkel via REST-API mogen worden uitgewisseld.
    *   Toepassing van de standaard in nieuwe sectoren.

Op een moment dat de indiener dit aangeeft dient de wens of eis opgenomen te worden als _request for change_ of _wijzigingsverzoek_.

Afhankelijk van de inrichting van beheerorganisaties kan er door een secretariaat of ondersteunende experts alvast een eerste sortering worden gemaakt aan de hand van de genoemde categorieën. Ook kan er een eerste inschatting worden gemaakt van de impact van een wijzigingsvoorstel.

Door dit te laten doen door een secretariaat of ondersteunende experts kan de uiteindelijke beoordeling later vlotter verlopen. Daarbij is het wel van belang dat hierbij primair een neutrale rol wordt aangenomen door de beheerorganisatie: het is bij een open standaard uiteindelijk de standaardisatie gemeenschap die beslist. Soms kunnen er wensen of eisen zijn die buiten het operationele proces vallen en die op tactisch of strategisch niveau besluitvorming vereisen door het bestuur van de standaardisatie organisatie. Deze kunnen dan direct richting het bestuur worden doorgeleid.

### Beoordeling en besluitvorming
Periodiek moet de lijst met _requests for change_/_wijzigingsverzoeken_ worden doorlopen. Daarbij moeten de wijzigingsverzoeken worden beoordeeld en moet worden besloten of een wijziging wordt doorgevoerd in de standaard.

<aside class="example">
<b>Het hele proces via git bij Logius</b)>

Zoals hierboven gezegd in 
[verzamelen van eisen en wensen](#verzamelen-van-wensen-en-eisen) 
kan _git_ gebruikt worden als een kanaal om gebruikers 
wijzigingsvoorstellen in te laten dienen. Maar het kan ook goed 
toegepast worden in de stappen daarna, tot en met besluitvorming toe. 
Bij Logius wordt [github](https://www.githubcom/) gebruikt in het hele 
operationele proces. 

Allereerst wordt alle documentatie gepubliceerd via github. Gebruikers 
kunnen bij een document over een standaard een vraag of idee of een 
voorstel tot wijziging indienen. De beheerorganisatie beantwoordt de 
vraag of neemt het voorstel tot wijziging in behandeling. Daarbij wordt 
aan een voorstel (een _issue_ in github terminologie) een aantal 
_labels_ toegekend door de beheerder. Hiermee wordt de _scope_ 
aangegeven, betreft het een kleine of grote wijziging. Daarnaast zijn er 
labels voor de verschillende overleggen waarin advies aan stakeholders 
wordt gevraagd en uiteindelijk besluitvorming plaatsvindt. Bijvoorbeeld: 
door het label _technisch overleg_ aan een issue toe te kennen wordt het 
voorstel opgenomen in de agenda voor het volgende technich overleg. De 
automatisering die github biedt maakt het mogelijk een agenda 
automatisch te genereren uit de issues met het relevante label. 

Door issues zo door het hele proces binnen git te houden is het 
eenvoudig om een overzicht te maken van alle voorstellen en van die 
voorstellen die speciale aandacht nodig hebben. Daarnaast worden alle 
voorstellen op deze manier volledig open behandeld. Iedere gebruiker kan 
gedurende het hele behandelingproces opmerkingen op een voorstel geven. 
Participatie van gebruikers is zo niet beperkt tot de overleggen maar 
kan gedurende het hele proces.
</aside>

#### Manier van besluitvorming
Er zijn verschillende manieren waarop de besluitvorming georganiseerd kan worden. Een open standaard vereist dat er sprake is van ofwel meerderheidsbesluitvorming ofwel consensus. Bij consensus moet iedereen het eens zijn over de voorgestelde wijziging. Bij meerderheidsbesluitvorming moet minimaal de helft plus één akkoord zijn met een voorgestelde wijziging.

Soms kan de besluitvorming gedaan worden door een werkgroep, soms door een hoger orgaan. In dat geval zal een werkgroep doorgaans een belangrijk advies geven over de wijziging. Daarbij kan gebruik worden gemaakt van adviezen van technische en inhoudelijke expertise door een wijzigingsvoorstel voor te leggen aan technische en inhoudelijke werkgroepen alvorens deze te agenderen voor besluitvorming. Uiteindelijk is het van belang dat iedere belanghebbende betrokken kan zijn in het besluitvormingsproces.

#### Aandachtspunten
Bij de beoordeling en besluitvorming moet gekeken worden naar tal van aspecten:

*   De wijze van inpassing in de standaard: is het technisch gezien mogelijk een wijziging in te passen en welke stappen zijn daarvoor nodig?
*   De impact van de wijziging op bestaande systemen en processen.
*   De toegevoegde waarde van de wijziging (in ITIL-termen de business justification): wat levert het op en staat dit in verhouding tot de kosten?

### Werkgroepen en stakeholders
Werkgroepen zijn een belangrijk instrument voor het verzamelen, voorbereiden en beoordelen van wijzigingsverzoeken. Ondanks openheid kan om praktische redenen de deelname aan werkgroepen gelimiteerd zijn. Daarbij wordt vaak onderscheid gemaakt in type stakeholder, mede omdat het verstandig is dat de werkgroep een goede afspiegeling bevat van de stakeholders. NEN gebruikt hiervoor een stakeholderanalyse waarin de stakeholders worden geïdentificeerd door gebruik te maken van een generieke waardeketen. Deze zijn de volgende:  

|       | Stakeholders | Omschrijving |
| :---: | :--- | :--- |
| 1a | Directe gebruikers | Eindgebruiker van dienst, proces of product |
| 1b | Brancheorganisaties directe gebruikers | Als groep, in de vorm van belangenorganisaties |
| 2a | Voorwaarde scheppende organisaties / opdrachtgevers | Organisaties die de voorwaarden bepalen waaraan het product of dienst moet voldoen. Bijv. opdrachtgevers. Wetmatige voorwaarden worden door wetgevende instanties bepaald (zie onder 9). |
| 2b | Brancheorganisaties van voorwaarde scheppende partijen |  |
| 3a | Adviserende organisaties | Organisaties die andere belanghebbenden inhoudelijk kunnen adviseren (bijv. ingenieursbureaus, adviesbureaus, consultancy) |
| 3b | Brancheorganisaties van adviserende partijen |  |
| 4a | Uitvoerende / toepassende / dienstverlenende organisaties | Productnormalisatie: organisaties die het product gebruiken / toepassen in hun dienstverlening naar de eindgebruiker toe (bijv. aannemer, installateur). Dienstennormalisatie: organisaties die een proces of dienst verlenen aan de eindgebruiker (bijv. schuldhulpverlener). |
| 4b | Brancheorganisaties van uitvoerende / dienstverlenende / toepassende partijen |  |
| 5a | Producenten / leveranciers van hoofdproduct | Bij productnormalisatie is dit de hoofdproducent / hoofdleverancier. Bij dienstennormalisatie wordt deze categorie niet gebruikt. De rol van ‘producent / leverancier’ wordt vervuld door de uitvoerende, dienstverlenende organisatie. |
| 5b | Brancheorganisaties van producenten / leveranciers van hoofdproduct |  |
| 6a | Producenten / leveranciers van aanhangende producten en diensten | Bij productnormalisatie betreft dit producenten / leveranciers van producten die als grondstof, halffabrikaat of rest-/afvalstof in de productketen voorkomen. Bij dienstennormalisatie betreft het de aanbieders van aanvullende diensten. |
| 6b | Brancheorganisaties van producenten / leveranciers van aanhangende producten en diensten |  |
| 7 | Onderzoek- en kennisinstellingen | Instellingen die zonder direct commercieel belang kennisleverancier zijn of onderzoek verrichten. Bijv. onderwijsinstellingen, laboratoria, onderzoeksinstellingen.  |
| 8 | Controlerende instanties | Bijv. inspectiediensten, certificeringinstellingen |
| 9 | Wetgevende instanties | Overheden |
| 10 | Bestaande/nieuwe initiatiefnemers | Partijen die alternatieve initiatieven ondernemen vergelijkbaar met NEN. (normen, certificatieschema’s, richtlijnen etc.) |
| 11 | Contextbepalers groter geheel | Organisaties (bijv. stichtingen, platforms) die op generieke wijze betrokken zijn. |

### Overgang naar nieuwe versie
Een standaard wordt (idealiter) gebruikt door een groot aantal organisaties. De wijziging van een standaard heeft potentieel dan ook veel impact. Het kan er toe leiden dat een groot aantal systemen en processen aangepast moet worden. Behalve een bewuste keuze per wijzigingsverzoek vereist dit dat de beheerorganisatie ook nadenkt over het algemene versiebeleid.

Allereerst is het daarbij van belang vast te leggen welke soorten versies er zijn. Zo kunnen er _major releases_ zijn die een grote wijziging omvatten, maar ook _minor releases_ die slechts kleine aanpassingen inhouden. Voor gebruikers moet duidelijk zijn welke versie van de standaard men mag gebruiken. Mag men bijvoorbeeld tegelijkertijd twee versies gebruiken of niet?

Binnen de standaard geeft dit ook eisen op het gebied van migratie en compatibiliteit tussen versies. Soms worden er binnen de standaard voorzieningen getroffen om dit mogelijk te maken. Vaak wordt er bijvoorbeeld gekozen om standaarden tot een bepaalde versie backwards compatible te maken. Bijvoorbeeld: alle minor wijzigingen op een major versie zijn backwards compatible. Indien er een dergelijke afspraak is, is het goed dit expliciet te maken. Zodoende kunnen gebruikers van de standaard zich hier op instellen bij het maken van keuzes over de toe te passen versie.

### Vaste cyclus
Om gebruikers niet voor verrassingen te plaatsen is het wenselijk om te werken met een vaste cyclus van releasemomenten. Deze principes moeten op strategisch en tactisch niveau worden vastgelegd: ze zijn immers van invloed op de werking van de beheerorganisatie.

Veel organisaties kiezen er voor om maximaal één keer per jaar een grote release door te voeren, indien nodig aangevuld met een ‘minor’ release met slechts kleine wijzigingen. Denk daarbij aan correctie van kleine fouten in de specificatie, aanvulling met voorbeelden, etc.

Door deze keuze kan een duidelijke jaarplanning worden opgesteld voor het operationele proces. Bijvoorbeeld: in januari een aantal workshops beleggen, in april wijzigingsvoorstellen in de werkgroep en in juni de uiteindelijke wijzigingen vaststellen. Het tweede halfjaar kan worden benut voor het volgen van de ervaringen bij gebruikers en het helpen bij de overgang naar nieuwe versies. Eventuele correcties kunnen in een ‘minor’ release in december worden meegenomen.

Aan deze cyclus kan ook de versienummering worden gekoppeld. Uitgaande van bijvoorbeeld drie posities x, y en z (bijvoorbeeld versie 3.1.5) kan x bijvoorbeeld corresponderen met de hoofdversie (het ingeslagen ontwikkelpad), y met de major release en z met de minor release.

Tip: minimaliseer het aantal wijzigingen. Het is wenselijk het aantal wijzigingen beperkt te houden. Immers: een wijziging kan betekenen dat gebruikers van de standaard systemen of processen moeten aanpassen. Het feit dat er een maximum aantal wijzigingen per jaar is vastgelegd betekent daarmee nog niet dat er automatisch ook zoveel nieuwe versies moeten komen.

### Relatie met andere standaarden
In veel gevallen is er een relatie met een andere standaard. Bijvoorbeeld een internationale standaard waarvoor een toepassingsprofiel is ontwikkeld. Naast wijzigingen vanuit de eigen community moet in een dergelijk geval ook rekening gehouden worden met wijziging van de onderliggende (internationale) standaard.

Het is van belang dit in het wijzigingsproces te onderkennen. Drie aspecten zijn daarbij met name van belang:

*   Er moet afgesproken worden in hoeverre er een vaste relatie is tussen de ‘eigen’ standaard en de gerelateerde of onderliggende standaard: mag willekeurig een versie worden gebruikt? Of wordt een bepaalde versie voorgeschreven?
*   Bij wijzigingen van de internationale/onderliggende standaard moet worden bepaald of dit impact heeft op eigen standaard.
*   Er moet vastgelegd worden of en zo ja welke relatie er is tussen het releaseschema en versienummer van de eigen standaard en de onderliggende standaard.

In een ander deel wordt dieper ingegaan op de relatie met andere standaarden.

## Voorbeelden uit de operationele praktijk

### Pressure Cooker – een standaard in een week in de afvalbranche

Een veel gehoorde opmerking is dat standaarden ontwikkelen een langzaam proces is dat jaren kan duren. Dat is er van oudsher ingeslopen, maar wie zegt dat men het oude traditionele proces van standaardisatie moet doorlopen?

Het kan duidelijker sneller: In de afvalbranche is het concept van _Pressure cooker_ gebruikt voor het ontwikkelen van een standaard. In een week tijd is gewerkt aan het standaarden van koppelvlakken tussen verschillende systemen in de afvalbranche. Denk daarbij aan het koppelvlak tussen de mini-container en de vuilniswagen, en het koppelvlak van de vuilniswagen met de back-office van de gemeentelijke afvalverwerker.

Na een werkgroepweek, met gemiddeld 15 deelnemers van zowel de afvalverwerkers en de leveranciers, waarin de standaarden stuk voor stuk zijn doorlopen, volgt twee weken van uitwerking door een externe begeleider, en vervolgens een twee weken review periode door de werkgroep voordat de standaard is opgeleverd aan de stuurgroep. Geteld vanaf de start van de werkgroep ligt er dan binnen 2 maanden een standaard.

Het gevaar bestaat dat dit ten koste gaat van de kwaliteit: een slechte standaard zou veel ellende voor de toekomst kunnen opleveren. De kwaliteit van de standaard is sterk gerelateerd aan de deelnemers in de pressure cooker. Een opmerkelijk verschijnsel is dat werkgroepleden ter plekke contacten gaan leggen binnen hun eigen organisatie om extra informatie te vergaren. Daaraan gerelateerd is ook direct de achilleshiel: indien een werkgroeplid zich niet voldoende heeft voorbereid en bijvoorbeeld de noodzakelijk informatie ter plekke mist, dan kan deze informatie niet meegenomen worden in de pressure cooker. De kwaliteit en voorbereiding van de werkgroepleden zijn daarmee van groot belang.

Een belangrijke eerste graadmeter is het reviewproces; Mocht tijdens het reviewproces veel fundamentele keuzes opnieuw ter discussie worden gesteld en ook leiden tot wijzigingen in de beoogde standaard dan is dat geen positieve indicatie voor de kwaliteit. Overigens een eerste versie van een standaard is nooit perfect. Tijdens implementaties worden altijd nieuwe inzichten ontdekt en regelmatig fouten ongeacht het gebruik van een pressure cooker. Een perfecte standaard is ook niet het doel: een werkbare standaard die helpt het probleem op te lossen daarentegen wel.

De leerpunten:
Belangrijke leerpunten zijn:
* Een pressure cooker is een prima middel om efficiënt een standaard te ontwikkelen. De kwaliteit moet zich nog bewijzen, maar de indruk is ontstaan dat de werkgroep bepalend is in de kwaliteit van de standaard.
* Duidelijke scope; wat in standaardisatie-kringen bekend staat als “scope-creep” (verschuivende scope)  ligt sterker op de loer in een pressure cooker.
* Niet te lang en te veel willen: Meer ervaringen zijn nodig om het optimum aan lengte en inhoud te kunnen bepalen, maar er is zeker sprake dat er een optimum is; op een gegeven moment is de magie uitgewerkt.

Het gebruik van de pressure cooker wordt in standaardisatie-land nog niet veel gebruikt, hoewel het idee wel afkomstig is van internationale standaardisatie-bijeenkomsten waarin de werkgroepleden zich ook soms ook een aantal dagen buigen over een standaard. Met een ‘pressure cooker’ kan hiermee de lengte van het standaardisatie-proces flink worden bekort. Daarnaast kan de ontwikkeling van standaarden hierdoor ook efficiënter – en dus: goedkoper - worden, en dat is natuurlijk mooi meegenomen.

### Documentatie (en Publicatie) met Git en Respec

Er is een breder keuze aan digitale applicaties die gebruikt kunnen worden voor standaarden beheer, al zijn ze hier niet altijd voor bedoeld. Samenwerkingsapplicaties voor documentbeheer of softwareontwikkeling kunnen worden toegepast om beheerders en betrokkenen toegang te geven tot documentatie of zelfs om gebruikers de documentatie bij te laten werken.

Een voorbeeld is het gebruik van Git en Respec voor het operationeel beheer. Git is een applicatie voor wijzigingsbeheer bij softwareontwikkeling. Iedere wijziging wordt opgeslagen in een database nadat het door de auteur voorzien is van commentaar. Hierdoor kunnen versies van verschillende tijdstippen vergeleken worden en kan de verantwoording nagelezen worden. Daarnaast is er ondersteuning voor parallellopende versies waardoor er bijvoorbeeld gewerkt kan worden aan een ingrijpende wijziging zonder dat onderhoud aan de huidige werkversie verstoord wordt. Er is een aantal webomgevingen voor samenwerking aan code die gebruik maken van git zoals [Github](https://github.com), [Gitlab](https://gitlab.com) en [Gitea](https://gitea.io). Een gebruiker kan ook zelf op basis van de beschikbare Git open source software een Git omgeving maken en daarmee onafhankelijk blijven van de grote Git platforms. De Git platforms zoals Github en Gitlab bieden hostingopties en een webinterface voor het doorvoeren en inzien van wijzigingen naast ondersteuning voor lokaal geïnstalleerde git-applicaties.

Respec is een applicatie om bestanden om te zetten in documentatie die online gepubliceerd kan worden. Het beheer van specificaties verloopt steeds vaker via een automatisch proces. Waar het in het verleden nog gebruikelijk was om losse documenten te delen binnen werkgroepen, stappen steeds meer beheerorganisaties over naar (git) repositories om teksten in te beheren. Hoewel deze omgevingen van oorsprong bedoeld zijn om programma code in te beheren, zijn deze ook goed bruikbaar voor het beheer van ‘leesbare’ tekst. Door gebruik van een responsive layout kan de documentatie onafhankelijk van schermgrootte leesbaar getoond worden. Respec maakt automatisch een inhoudsopgave waarmee een gebruiker snel door de documentatie kan browsen. Respec is specifiek bedoeld voor technische documentatie en het sluit goed aan bij applicaties voor softwareontwikkeling zoals Git.

#### Git en Git platforms
Door gebruik te maken van dezelfde gereedschappen als voor het beheer van programmacode kan het beheerproces automatisch ondersteund worden. Documentatie wordt ondergebracht in een online _repository_. Een repository is meer dan een archief voor code. Binnen Git platforms zoals Github en Gitlab kunnen issues ingediend worden door gebruikers, zijn projectmanagementtools beschikbaar en kunnen automatische acties op een repository uitgevoerd worden. Het is ook mogelijk om automatische controles uit te voeren op de code in een repository, bijvoorbeeld op basis van toegankelijkheid of op ontbrekende verwijzingen.

#### Wijzigingsverzoeken
In een Git platform zoals Github kunnen ook verzoeken tot wijzigingen (genaamd _issues_ in git) ingediend worden, die dan weer tot wijziging in de code kunnen leiden. Issues kunnen in principe door iedere gebruiker worden ingediend. Een wijzigingsverzoek wordt verwerkt door de beheerder van de repository. Een issue kan worden toegewezen aan een ontwikkelaar en worden door de beheerder geagendeerd voor overleggen door ze te labelen. Door een _issue_ een label _Technische overleg_ te geven kan gefilterd worden op alle issues die relevant zijn voor dat overleg. Daarnaast worden wijzigingsvoorstellen gelabeld met scope (klein of groot) en wat voor wijziging het betreft (correctie, documentatie, wijziging etc.).

Omdat de wijzigingen op de documentatie bijgehouden wordt met git kunnen deze gerelateerd worden aan het wijzigingsvoorstel waar ze bij horen. Hierdoor bevatten de issues een overzicht van alle wijzigingen die daaruit voortkomen.

Binnen Github kunnen de lijsten met lopende wijzigingen bestemd voor een specifiek overleg automatisch gegenereerd worden. Vooral wanneer een beheerder een groot aantal repositories in beheer heeft is het handig de wijzigingsvoorstellen met zo'n automatisch proces overzichtelijk te houden.
