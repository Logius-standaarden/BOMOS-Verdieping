# Operational
This section looks in more detail at subjects related to strategic subjects from the Management and Development Model.

## Process for the development and management of a standard (Main activity: Operational)

The primary standardisation activity is the operational process: How is the standard eventually created?

This involves a number of important aspects:
* How are wishes and requirements gathered?
* How are those wishes and requirements translated into specific proposals for change?
* How are decisions taken about proposals for change?
* How are the different versions of a standard dealt with?

### Gathering wishes and requirements
Perhaps the most important step is to gather the relevant wishes and requirements. This must be done both when a new standard is drawn up and when an existing standard is amended.

The reference for an open standard is that everyone is able to submit his or her wishes. In the ideal situation, this group is as large as possible - since this increases support for the standard. It is possible that the governing body of the standardisation organisation will lay down certain directions, which may introduce some restrictions. These restrictions may for example relate to the overall functional scope of the standard. There are different possibilities for gathering wishes and requirements:

* Creating an environment (such as a website, miro board, git repository or wiki) on which users can leave their ideas. In that same environment, users can also discuss ideas and proposals for changes, with each other.
* Via formal consultation. In this option, a formal request is submitted to parties related to the standard about future developments, wishes or requirements.
* By organising workshops or discussion meetings with stakeholders from the community. During these meetings, current developments can be discussed. For example there may be a new development at one of the participants that is also relevant for others. This development can result in the extension of the standard.

Whatever form or combination of forms is chosen, at the end of the day the process should produce a list of wishes and requirements that needs to be evaluated.

Gathering wishes and requirements is an ongoing process. It can sometimes be meaningful for the management organisation to inform parties active in the community of the possibilities for submitting wishes and requirements.

When drawing up a new standard, a _pressure cooker_ process can be followed, in which the initial step towards a new standard can be taken in a short time, with a number of key players.

### Preparing proposals for change
Not every idea or wish will automatically result in a proposal for change to the standard. Broadly speaking the following possibilities emerge:

* The idea is more a question specific to implementation at a particular party. For example when an organisation still has little experience with the standard. In such a case, the community or the management organisation can offer support in solving the problem. It is then not necessary to change the standard.
A wish or idea relates to adaptation or extension of the existing standard. This may be the result of changing legislation, changing processes or other changing needs.
The proposal relates to a fundamental change to or extension of the standard. For example:
    * Functional extension
    * In addition to semantic standardisation, also specifying at transport level how data should be exchanged. For example: specifying that certain XML/JSON messages can only be exchanged via REST-API.
    * Application of the standard in new sectors.

At a certain point in time, as identified by the submitting party, the wish or requirement should be included as a _request for change_.

Depending on the structure of the management organisation, a secretariat or support experts can carry out an initial selection according to the categories referred to above. It is also possible to make an initial estimate of the impact of a proposal for change.

By entrusting this task to a secretariat or support experts, the eventual evaluation can be completed more quickly. It is however important that the management organisation adopts a primarily neutral role: in the case of an open standard, it is eventually the standardisation community that decides. There may sometimes be wishes or requirements that are beyond the scope of the operational process or which require decision making at tactical or strategic level by the governing body of the standardisation organisation. These issues can then be directed straight to the governing body.

### Evaluation and decision making
The list of _requests for change_ must be periodically examined. In that process, the requests for change must be evaluated and a decision reached on whether or not a change will be made to the standard.

### Method of decision making
There are different ways in which decision making can be organised. An open standard requires a majority decision or a consensus. In a consensus, everyone must agree on the proposed change. With majority decision making, at least half plus one must agree to the proposed change.

Decisions can sometimes be taken by a working group and sometimes by a more senior body. In that case, a working group will generally provide important advice about the change. This may rely on advice from technical and substantive experts by submitting a proposal for change to technical and substantive working groups before putting the changes on the agenda for decision making. At the end of the day, the essence is that every stakeholder has an opportunity to be involved in the decision-making process.

#### Points for attention
During the evaluation and decision making, numerous aspects must be taken into account:

* The way the change is integrated in the standard: is it technically possible to integrate a change, and what steps need to be taken?
* The impact of the change on existing systems and processes.
* The added value of the change (in ITIL terms the business justification): what is the benefit in relation to the costs?

### Working groups and stakeholders
Working groups are important instruments for gathering, preparing and evaluating proposals for change. Despite openness, participation in working groups may be limited, for practical reasons. Distinctions are often made between types of stakeholders, also because it is worthwhile for the working group to be a good representation of the stakeholders. For this purpose, NEN uses a stakeholder analysis, in which the stakeholders are identified by using a generic value chain. As follows:  

|       | Stakeholders | Description |
| --- | --- | --- |
| 1a | Direct users | End user of service, process or product |
 | 1b | Sectoral organisations of direct users | As a group, in the form of interest groups |
| 2a | Organisations that set the conditions / commissioning parties | Organisations that set the conditions that a product or service must satisfy. E.g. commissioning parties. Statutory conditions are determined by legislative bodies (see 9). |
| 2b | Sectoral organisations of parties that set the conditions |  |
| 3a | Advisory organisations | Organisations capable of providing advice to other stakeholders (e.g. engineering firms, consultancy firms) |
| 3b | Sectoral organisations of advisory parties |  |
| 4a | Executive / operational / service providing organisations | Product normalisation: organisations that use the product / in the service they provide to the end user (e.g. contractor, installation engineer). Service normalisation: organisations that provide a process or service to the end user (e.g. debt management organisations). |
| 4b | Sectoral organisations of executive / service providing organisation / operational parties |  |
| 5a | Producers / suppliers of the main product | For product normalisation, this is the main producer / main supplier. For service normalisation, this category is not used. The role of ‘producer / supplier’ is fulfilled by the executive, service providing organisation |
| 5b | Sectoral organisations of producers / suppliers of the main product |  |
| 6a | Producers / suppliers of related products and services | For product normalisation these are the producers / suppliers of products that are present in the product chain as a raw material, semi-manufactured good or residual/waste substance. For service normalisation, these are the providers of auxiliary services. |
| 6b | Sectoral organisations of producers / suppliers of related products and services |  |
| 7 | Research and knowledge institutions | Institutions that are knowledge providers or conduct research with no direct commercial interest. E.g. educational institutions, laboratories, research organisations.  |
| 8 | Controlling bodies | E.g. inspection services, certification organisations |
| 9 | Legislative bodies | Government authorities |
| 10 | Existing/new initiators | Parties implementing alternative initiatives comparable to NEN (standards, certification tables, guidelines, etc.) |
| 11 | Context setters for the big picture l | Organisations (e.g. foundations, platforms) involved in a generic manner. |

### Transition to the new version
In ideal terms, a standard is used by a large number of organisations. Any change to a standard will potentially have considerable impact. It can mean that a large number of systems and processes have to be adapted. As well as making a deliberate choice for each request for change, this also requires the management organisation to think about its overall version policy.

The first key point is to determine what types of version are used. There can be _major releases_ which contain a major change, but also _minor releases_ that involve only minor adaptations. It must be clear to users which version of the standard they are permitted to use. Is it for example permissible to use two versions at the same time, or not?

Within the standard itself, this also creates requirements in terms of migration and compatibility between versions. On occasion, provisions are made within a standard to make this possible. For example, a common choice is to make standards backwards compatible to a specified version. For example: all minor changes to a major version are backwards compatible. If such an agreement is put in place, it must be announced explicitly. In this way, users of the standard can adjust to the situation when choosing which version to use.

#### Fixed cycle
To avoid surprising users, it is desirable to work with a fixed cycle of release moments. These principles must be laid down at strategic and tactical level: after all, they impact on the functioning of the management organisation.

Many organisations opt to issue a major release not more than once a year, if necessary supplemented by a minor release containing only minor changes. For example corrections to minor errors in the specification, the addition of new examples, etc.

This option allows a clear annual timetable to be drawn up for the operational process. For example: organising a number of workshops in January, discussing proposals for change  in the working group in April and adopting the eventual changes in June. The second six months can be used to monitor experiences among users and to assist in the transition to new versions. Any corrections can then be included in a minor release in December.

This cycle can be identified using version numbers. Based on the example of three positions x, y and z (for example version 3.1.5), x could correspond to the main version (the initial development pathway), y the major release and z the minor release.

Tip: minimise the number of changes. Ideally, the number of changes should be restricted. After all, a change can mean that users have to adapt the standard systems or processes. The fact that a maximum number of changes is laid down per year does not necessarily mean that that same number of new versions needs to be released.

### Relationship with other standards
In many cases, there is a relationship with another standard. For example an international standard for which an application profile has been developed. As well as changes from within their own community, in such cases, account must also be taken of changes to the underlying (international) standard.

This must be recognised in the change process. There are three aspects:

* Agreement must be reached on the extent to which there is a fixed relationship between the (own) standard and the related or underlying standard: can any random version be used? Or is a particular version specified?
* In the event of changes to the international/underlying standard, a decision must be reached on whether this impacts on the own standard.
* It must be determined whether and if so what relationship exists between the release timetable and version number of the own standard and the underlying standard.

The relationship with other standards is discussed in more detail in section 3.2 Architecture.

### Examples from operational practice

### Pressure Cooker - a standard for the waste sector within one week

One widely made comment is that developing standards is a slow process that can take years. This is a traditional mode of thinking, but who says that it is necessary to follow the old, traditional route to standardisation?

Things can clearly be achieved more quickly: The _Pressure cooker_ concept was used in the waste sector to develop a standard. In just one week, standards were developed for the interfaces between the different systems in the waste sector. For example the interface between the mini container and the garbage truck and the interface between the garbage truck and the back office of the municipal waste processing organisation.

A week of working groups, each with on average 15 participants from both waste processing organisations and suppliers, in which the standards were individually discussed, was followed by two further weeks of elaboration by an external supervisor and two more weeks of review period for the working group, before the standard was delivered to the steering committee. Counting from the moment at which the working group was established, a standard was put in place within two months.

There is a risk that this accelerated process will be to the detriment of quality: a poor standard could cause huge problems in the future. The quality of the standard relates strongly to the participants in the pressure cooker. One remarkable feature is that working group members tend to establish contacts on the spot within their own organisation, as a means of gathering additional information. This situation can in and of itself be an Achilles heel: if one working group member has prepared insufficiently for his task and for example the essential information is not available on the spot, that information cannot be included in the pressure cooker. As such, the quality of and preparations by the working group members are of vital importance.

An important first yardstick is the review process; if it emerges during the review process that many fundamental choices need to be rediscussed, and those choices lead to changes to the intended standard, this is not a positive indicator for the quality of the standard under review. It should however be remembered that the first version of a standard is never perfect. New insights are always discovered during implementations, and errors regularly emerge whether the pressure cooker method is used or not. At the end of the day, a perfect standard is not the objective: instead, a workable standard that helps solve problems.

Learning points:
Important learning points are:
- A pressure cooker is an excellent tool for efficiently developing a standard. 
  The quality still has to be proven, but there is a clear impression that the quality of the working group is decisive 
  for the quality of the standard.
- Clear scope; the phenomenon known in standardisation circles as ‘scope creep’ 
  is more clearly present in a pressure cooker situation.
- Not wanting to work too long and achieve too much: More experience is needed to be able to determine the optimum length 
  and content of a pressure cooker process, but it is certain that there is an optimum; 
  at a certain moment, the magic no longer works.

The use of the pressure cooker is still not common in the world of standardisation, although the idea did originate at international standardisation meetings, in which working group members also sometimes consider a standard, over a period of days. Using a pressure cooker can considerably shorten the duration of the standardisation process. It can also help make the development of standards more efficient and therefore cheaper and that is of course a good thing.

