// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {
  
  if(license == "Apache License, Version 2.0"){
    // license = "![AUR license](https://img.shields.io/aur/license/node?color=GREEN&label=LICENSE&style=plastic)";
    license = "[![License](https://img.shields.io/badge/License-Apache%202.0-blue.svg)](https://opensource.org/licenses/Apache-2.0)<br />";
    license += " This application is covered under the Apache License, Version 2.0.";
    return license;
  }
  else if(license == "BSD-3-Clause"){
    // license = "![PyPI - License](https://img.shields.io/pypi/l/node?label=LICENSE&style=plastic)";
    license = "[![License](https://img.shields.io/badge/License-BSD%203--Clause-blue.svg)](https://opensource.org/licenses/BSD-3-Clause)<br />";
    license += " This application is covered under the BSD-3-Clause license.";
    return license;
  }
  else if(license == "MIT License"){
    license = "![APM](https://img.shields.io/apm/l/npm?style=plastic)<br />";
    license += " This application is covered under the MIT license.";
    return license;
  }
  else if(license == "Mozilla Public License 2.0 (MPL-2.0)"){
    license = "[![License: MPL 2.0](https://img.shields.io/badge/License-MPL%202.0-brightgreen.svg)](https://opensource.org/licenses/MPL-2.0)<br />";
    license += " This application is covered under the Mozilla Public License 1.1 (MPL 1.1) license.";
    return license;
  }
  else {
    return "";
  }
}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license,copyrightYear,author) {
  if(license == "Apache License, Version 2.0"){
    license = `  Copyright [${copyrightYear}] [${author}]

    Licensed under the Apache License, Version 2.0 (the "License");
    you may not use this file except in compliance with the License.
    You may obtain a copy of the License at
 
      http://www.apache.org/licenses/LICENSE-2.0
 
    Unless required by applicable law or agreed to in writing, software
    distributed under the License is distributed on an "AS IS" BASIS,
    WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
    See the License for the specific language governing permissions and
    limitations under the License.`
    return license;
  }
  else if(license == "BSD-3-Clause"){
    license = `   Copyright [${copyrightYear}] [${author}]
    
    THIS SOFTWARE IS PROVIDED BY THE COPYRIGHT HOLDERS AND CONTRIBUTORS 
    "AS IS" AND ANY EXPRESS OR IMPLIED WARRANTIES, INCLUDING, BUT NOT LIMITED TO, 
    THE IMPLIED WARRANTIES OF MERCHANTABILITY AND FITNESS FOR A PARTICULAR PURPOSE 
    ARE DISCLAIMED. IN NO EVENT SHALL THE COPYRIGHT HOLDER OR CONTRIBUTORS BE LIABLE 
    FOR ANY DIRECT, INDIRECT, INCIDENTAL, SPECIAL, EXEMPLARY, OR CONSEQUENTIAL DAMAGES 
    (INCLUDING, BUT NOT LIMITED TO, PROCUREMENT OF SUBSTITUTE GOODS OR SERVICES; 
      LOSS OF USE, DATA, OR PROFITS; OR BUSINESS INTERRUPTION) HOWEVER CAUSED AND ON 
      ANY THEORY OF LIABILITY, WHETHER IN CONTRACT, STRICT LIABILITY, OR TORT 
      (INCLUDING NEGLIGENCE OR OTHERWISE) ARISING IN ANY WAY OUT OF THE USE OF THIS 
      SOFTWARE, EVEN IF ADVISED OF THE POSSIBILITY OF SUCH DAMAGE.`;
    return license;
  }
  else if(license == "MIT License"){
    license = `  Copyright [${copyrightYear}] [${author}]
    
    THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, 
    EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, 
    FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE 
    AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, 
    WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN 
    CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.`;
    return license;
  }
  else if(license == "Mozilla Public License 2.0 (MPL-2.0)"){
    license = `  Copyright [${copyrightYear}] [${author}]

    Covered Software is provided under this License on an “as is” basis, 
    without warranty of any kind, either expressed, implied, or statutory, including, 
    without limitation, warranties that the Covered Software is free of defects, 
    merchantable, fit for a particular purpose or non-infringing. The entire risk 
    as to the quality and performance of the Covered Software is with You. Should 
    any Covered Software prove defective in any respect, You (not any Contributor) 
    assume the cost of any necessary servicing, repair, or correction. This disclaimer 
    of warranty constitutes an essential part of this License. No use of any Covered 
    Software is authorized under this License except under this disclaimer.`
    return license;
  }
  else {
    return "";
  }
}

// TODO: Create a function to generate markdown for README
function generateMarkdown(data, author) {
  return `# License 
  ${renderLicenseBadge(data.license)}

##  ${data.title}

## Table of Contents
  [Title](#title)  
  [Description](#description)  
  [Installation](#installation)  
  [Usage](#usage)  
  [Licenses](#licenses)  
  [Contribution](#contribution)  
  [Test](#test)  
  [Questions](#questions)

  ## Installation
  ${data.installation}
  ## Usage
  ${data.usage}

  ## License
  ${renderLicenseLink(data.license, data.copyrightYear,author)}

  ## Contribution
  ${data.contributions} 

  ## Test
  ${data.test}

  ## Questions 
  [${data.username}'s GitHub](https://github.com/${data.username})   
  Reach me with additional questions at ${data.email}.
`;
}

module.exports = generateMarkdown;
