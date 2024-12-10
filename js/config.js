var respecConfig = {
  alternateFormats: [ { 
        "label" : "pdf",
        "uri" : "BOMOS-Elaboration.pdf"
      } ],
  authors: [ { 
        "company" : "HAN University of Applied Sciences",
        "companyURL" : "https://www.utwente.nl/",
        "name" : "Erwin Folmer"
      } ],
  editors: [ 
      { 
        "company" : "HAN University of Applied Sciences",
        "companyURL" : "https://www.utwente.nl/",
        "name" : "Erwin Folmer"
      },
      { 
        "company" : "Logius",
        "companyURL" : "https://www.logius.nl/",
        "name" : "Gül Işik"
      },
      { 
        "company" : "Logius",
        "companyURL" : "https://www.logius.nl/",
        "name" : "Edwin Wisse"
      }
    ],
  github: "https://github.com/Logius-standaarden/BOMOS-Verdieping",
  maxTocLevel: 3,
  previousMaturity: "DEF",
  previousPublishVersion: "3.0.0",
  pubDomain: "bomos",
  publishDate: "2023-11-02",
  publishVersion: "3.0.1",
  shortName: "verdieping/en",
  specStatus: "DEF",
  specType: "HR",

  postProcess: [window.respecMermaid.createFigures],
};
