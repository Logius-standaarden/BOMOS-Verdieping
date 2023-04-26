# Bijlage: de Praktijk

## Governance

### Edustandaard governance

#### Edustandaard Standaardisatieraad
De Edustandaard Standaardisatieraad vormt het bestuurlijke orgaan waarin besluitvorming plaatsvindt over vraagstukken rondom de governance en in beheer name of uitfasering van standaarden (afspraken). De raad bestaat uit bestuurders van de publieke en private brancheorganisaties in het onderwijs (primair tot en met hoger onderwijs). Het initiatief tot het ontwikkelen van een nieuwe afspraak of aanpassen van een bestaande afspraak ligt in het algemeen in het toepassingsdomein, maar uiteraard kan ook overheidsbrede wetgeving hiertoe aanleiding geven. Daarnaast heeft hij een belangrijke rol in het erkennen en adopteren van de afspraken in het veld. De Standaardisatieraad wordt door de Architectuurraad geadviseerd over standaarden en hun onderlinge samenhang. Via www.edustandaard.nl wordt overzicht geboden van alle afspraken die in het onderwijs worden beheerd.
Meer info: https://www.edustandaard.nl/standaardisatieraad/ 

#### Edustandaard Architectuurraad
De Edustandaard Architectuurraad vormt het inhoudelijke adviesorgaan over ketenarchitectuur en standaarden (afspraken) op basis van de ROSA Ketenreferentiearchitectuur. De Architectuurraad vormt tevens het inhoudelijke beheer over de ROSA en het bevordert samenhang tussen de referentiearchitecturen in het onderwijs. Middels het instrument ROSA-architectuurscan wordt in kaart gebracht hoe nieuwe standaarden (afspraken), voorzieningen en andere ketenuitwisselingen zich verhouden tot de referentiearchitectuur voor ketenuitwisselingen. ROSA vormt dus ook het kader (de meetlat) waarlangs nieuwe architecturale ontwikkelingen worden getoetst middel de ROSA-architectuurscan.
Meer info: https://www.edustandaard.nl/architectuurraad/ 

#### Edustandaard Expertgroepen
Edustandaard is een netwerkorganisatie die samenwerkt met ketenpartijen in het onderwijs, zoals Kennisnet, SURF, het ministerie van OCW, de Dienst Uitvoering Onderwijs, onderwijsinstellingen, uitgevers en leveranciers van software voor het onderwijs. Die samenwerking krijgt gestalte door verschillende expertgroepen met elk een andere rol. Edustandaard volgt hierbij de globale organisatiestructuur van BOMOS. Er zijn vier soorten expertgroepen binnen Edustandaard: adviesorgaan, bestuur, uitvoeringsorganisatie en werkgroep.
In een Edustandaard werkgroep vindt de ontwikkeling, het beheer en de ondersteuning van het gebruik van afspraken (standaarden) plaats. Er zijn meer dan 15 Edustandaard werkgroepen actief. Er zijn ook werkgroepen die zich richten op specifieke onderdelen van de ROSA, zoals de werkgroep Toegang). Edustandaard kent 2 adviesorganen, namelijk de Architectuurraad en het QA-team (QA = quality assurance). De Architectuurraad is het inhoudelijke adviesorgaan over ketenarchitectuur en standaarden (afspraken) op basis van de ROSA; het QA-team adviseert over de backlog en de roadmap van de ROSA. Bureau Edustandaard vormt de uitvoeringsorganisatie, daaronder valt ook het ROSA Beheerteam.
Meer info: https://www.edustandaard.nl/standaard_werkgroepen/ 

### Logius en het GDI proces

Logius heeft de governance van het beheer van haar standaarden aangesloten op de 
governance van de Generieke Data Infrastructuur (GDI) van de Nederlandse overheid.

#### De Programmeringsraad GDI

#### Programmeringstafels

#### Het Technische Overleg

Het Technisch Overleg is het operationele overleg van de Logius standaarden. De Technische Overleggen vallen 
niet binnen de GDI overlegstructuur.

## Gereedschap

Voor de implementatie en ondersteuning van het beheerproces is (digitale) gereedschap 
nodig. Wijzigingsvoorstellen moeten kunnen worden ingediend (bijvoorbeeld online)
en gedocumenteerd. Documentatie moet (open) worden gepubliceerd, vragen en verzoeken 
van stakeholders moeten behandeld en beantwoord en agenda's voor overleggen moeten 
worden opgesteld. 

### Documentatie (en Publicatie) met Git en Respec

Er is een breder keuze aan digitale applicaties die gebruikt kunnen 
worden voor standaarden beheer, al zijn ze hier niet altijd voor bedoeld. 
Samenwerkingsapplicaties voor documentbeheer of softwareontwikkeling kunnen 
worden toegepast om beheerders en betrokkenen toegang te geven tot documentatie 
of zelfs om gebruikers de documentatie bij te laten werken.

Een voorbeeld is het gebruik van Git en Respec voor het operationeel beheer. 
Git is een applicatie voor wijzigingsbeheer bij softwareontwikkeling. Iedere 
wijziging wordt opgeslagen in een database nadat het door de auteur voorzien is 
van commentaar. Hierdoor kunnen versies van verschillende tijdstippen vergeleken 
worden en kan de verantwoording nagelezen worden. Daarnaast is er ondersteuning 
voor parallellopende versies waardoor er bijvoorbeeld gewerkt kan worden aan een ingrijpende wijziging zonder dat onderhoud aan de huidige werkversie verstoord 
wordt. Er is een aantal webomgevingen voor samenwerking aan code die gebruik maken 
van git zoals [Github](https://github.com), [Gitlab](https://gitlab.com) en 
[Gitea](https://gitea.io). Een gebruiker kan ook zelf op basis van de beschikbare 
Git open source software een Git omgeving maken en daarmee onafhankelijk blijven 
van de grote Git platforms. De Git platforms zoals Github en Gitlab bieden 
hostingopties en een webinterface voor het doorvoeren en inzien van wijzigingen 
naast ondersteuning voor lokaal geïnstalleerde git-applicaties.

Respec is een applicatie om bestanden om te zetten in documentatie die online 
gepubliceerd kan worden. Het beheer van specificaties verloopt steeds vaker via 
een automatisch proces. Waar het in het verleden nog gebruikelijk was om losse 
documenten te delen binnen werkgroepen, stappen steeds meer beheerorganisaties 
over naar (git) repositories om teksten in te beheren. Hoewel deze omgevingen 
van oorsprong bedoeld zijn om programma code in te beheren, zijn deze ook goed 
bruikbaar voor het beheer van ‘leesbare’ tekst. Door gebruik van een responsive 
layout kan de documentatie onafhankelijk van schermgrootte leesbaar getoond worden. 
Respec maakt automatisch een inhoudsopgave waarmee een gebruiker snel door de 
documentatie kan browsen. Respec is specifiek bedoeld voor technische documentatie 
en het sluit goed aan bij applicaties voor softwareontwikkeling zoals Git.

### Git en Git platforms
Door gebruik te maken van dezelfde gereedschappen als voor het beheer van 
programmacode kan het beheerproces automatisch ondersteund worden. 
Documentatie wordt ondergebracht in een online _repository_. Een repository is 
meer dan een archief voor code. Binnen Git platforms zoals Github en Gitlab 
kunnen issues ingediend worden door gebruikers, zijn projectmanagementtools 
beschikbaar en kunnen automatische acties op een repository uitgevoerd worden. 
Het is ook mogelijk om automatische controles uit te voeren op de code in een 
repository, bijvoorbeeld op basis van toegankelijkheid of op ontbrekende verwijzingen.

<aside class="example">
<b>Het hele proces via git bij Logius</b>

Zoals hierboven gezegd in 
[verzamelen van eisen en wensen](#verzamelen-van-wensen-en-eisen) 
kan _git_ gebruikt worden als een kanaal om gebruikers 
wijzigingsvoorstellen in te laten dienen. Maar het kan ook goed 
toegepast worden in de stappen daarna, tot en met besluitvorming toe. 
Bij Logius wordt [github](https://www.githubcom/) gebruikt in het hele 
operationele proces. 

Allereerst wordt alle documentatie gepubliceerd via github (zie [hierboven](#documentatie-en-publicatie-met-git-en-respec). Gebruikers 
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

### Wijzigingsverzoeken
In een Git platform zoals Github kunnen ook verzoeken tot wijzigingen 
(genaamd _issues_ in git) ingediend worden, die dan weer tot wijziging 
in de code kunnen leiden. Issues kunnen in principe door iedere gebruiker 
worden ingediend. Een wijzigingsverzoek wordt verwerkt door de beheerder 
van de repository. Een issue kan worden toegewezen aan een ontwikkelaar 
en worden door de beheerder geagendeerd voor overleggen door ze te labelen. 
Door een _issue_ een label _Technische overleg_ te geven kan gefilterd 
worden op alle issues die relevant zijn voor dat overleg. Daarnaast worden
wijzigingsvoorstellen gelabeld met scope (klein of groot) en wat voor 
wijziging het betreft (correctie, documentatie, wijziging etc.).

Omdat de wijzigingen op de documentatie bijgehouden wordt met git kunnen 
deze gerelateerd worden aan het wijzigingsvoorstel waar ze bij horen. 
Hierdoor bevatten de issues een overzicht van alle wijzigingen die 
daaruit voortkomen.

Binnen Github kunnen de lijsten met lopende wijzigingen bestemd voor een 
specifiek overleg automatisch gegenereerd worden. Vooral wanneer een beheerder 
een groot aantal repositories in beheer heeft is het handig de 
wijzigingsvoorstellen met zo'n automatisch proces overzichtelijk te houden.
