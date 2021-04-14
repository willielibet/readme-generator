// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function generateBadge(license) {
  
    if(license == "APACHE 2.0"){
      license == "![AUR license](https://img.shields.io/aur/license/node?color=GREEN&label=LICENSE&style=plastic)";
      return license;
    }
    else if(license == "BSD"){
      data.license == "![PyPI - License](https://img.shields.io/pypi/l/node?label=LICENSE&style=plastic)";
      return data.license;
    }
    else if(license == "MIT"){
      license == "![APM](https://img.shields.io/apm/l/npm?style=plastic)";
      return license;
    }
    else if(license == "Mozilla Public License 1.1 (MPL 1.1)"){
      data.license == "![APM](https://img.shields.io/apm/l/npm?style=plastic)";
      return license;
    }
    else {
      return "";
    }
    
  }

  module.exports = generateBadge;