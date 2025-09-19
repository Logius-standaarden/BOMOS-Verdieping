import { loadRespecWithConfiguration } from "https://logius-standaarden.github.io/publicatie/respec/organisation-config.mjs";
import { generateMermaidFigures } from "https://logius-standaarden.github.io/publicatie/respec/plugins/mermaid.mjs";

loadRespecWithConfiguration({
  authors: [ { 
        "company" : "HAN University of Applied Sciences",
        "companyURL" : "https://www.han.nl/",
        "name" : "Erwin Folmer"
      } ],
  editors: [ 
      { 
        "company" : "HAN University of Applied Sciences",
        "companyURL" : "https://www.han.nl/",
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
      },
      { 
        "company" : "TNO",
        "companyURL" : "https://www.tno.nl/nl/",
        "name" : "Wouter van den Berg"
      },
      { 
        "company" : "TNO",
        "companyURL" : "https://www.tno.nl/nl/",
        "name" : "Wouter van den Berg"
      }
    ],
  github: "https://github.com/Logius-standaarden/BOMOS-Verdieping",
  maxTocLevel: 3,
  previousMaturity: "DEF",
  previousPublishVersion: "3.0.1",
  pubDomain: "bomos",
  publishDate: "2025-09-19",
  publishVersion: "3.1.0",


  shortName: "verdieping",
  specStatus: "DEF",
  specStatus: "DEF",
  specType: "HR",

  postProcess: [ generateMermaidFigures ],
});
