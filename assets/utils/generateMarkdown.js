// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {
  
  if(license == "Apache License, Version 2.0"){
    // license = "![AUR license](https://img.shields.io/aur/license/node?color=GREEN&label=LICENSE&style=plastic)";
    license = "[![License](https://img.shields.io/badge/License-Apache%202.0-blue.svg)](https://opensource.org/licenses/Apache-2.0)";
    return license;
  }
  else if(license == "BSD-3-Clause"){
    // license = "![PyPI - License](https://img.shields.io/pypi/l/node?label=LICENSE&style=plastic)";
    license = "[![License](https://img.shields.io/badge/License-BSD%203--Clause-blue.svg)](https://opensource.org/licenses/BSD-3-Clause)";
    return license;
  }
  else if(license == "MIT License"){
    license = "![APM](https://img.shields.io/apm/l/npm?style=plastic)";
    return license;
  }
  else if(license == "Mozilla Public License 1.1 (MPL 1.1)"){
    license = "![APM](https://img.shields.io/apm/l/npm?style=plastic)";
    return license;
  }
  else {
    return "";
  }
  
}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {}

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  if (renderLicenseBadge(data.license)) {
    console.log("called badge function");
    let badge = renderLicenseBadge(data.license);
    console.log("function renderBadge: " + renderLicenseBadge(data.license));
  }
  return `# License 
  ${renderLicenseBadge(data.license)}

  # Title
  ${data.title}
  # Description
  ${data.description}
## Table of Contents 
  -[Title](#title)  
  -[Description](#description)  
  -[Installation](#installation)  
  -[Usage](#usage)  
  -[Licenses](#licenses)  
  -[Contribution](#contribution)  
  -[Test](#test)  

  ## Installation
  ${data.installation}
  ## Usage
  ${data.usage}

  ## Licenses
  ${data.license}

  ## Contribution
  ${data.contribution} 

  ## Test
${data.test}
`;
}

module.exports = generateMarkdown;
