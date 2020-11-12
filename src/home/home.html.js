module.exports = /* html */`
<div>
<header class="w3-container w3-center" style="padding:100px 16px">
  <h1 class="w3-margin w3-jumbo">{{ this.title }} app is running!</h1>
  <p class="w3-xlarge">Resources</p>
  <div>
    <a target="_blank" href="http://jiji-js.io/getting-started" class="w3-button w3-black w3-padding-large w3-large w3-margin-top w3-button-icon"><i class="icon icon-instacart"></i>Get Started</a>
    <a target="_blank" href="http://jiji-js.io/api"  class="w3-button w3-black w3-padding-large w3-large w3-margin-top w3-button-icon"><i class="icon icon-codersrank"></i>CLI documentation</a>
    <a target="_blank" href="https://github.com/jguyet/jiji-js" class="w3-button w3-black w3-padding-large w3-large w3-margin-top w3-button-icon"><i class="icon icon-github"></i>Github repository</a>
  </div>
</header>
<div style="position: relative;">
<header class="w3-container w3-center">
  <div style="color:white">
  A few suggest for your application?
  </div>
  <div>
    <a click="this.command = '$ ji new'" class="w3-button w3-blue w3-padding-large w3-large w3-margin-top">New Application</a>
    <a click="this.command = '$ ji debug'" class="w3-button w3-blue w3-padding-large w3-large w3-margin-top">Debug</a>
    <a click="this.command = '$ ji build'" class="w3-button w3-blue w3-padding-large w3-large w3-margin-top">Build</a>
    <a click="this.command = '$ ji generate controller abc'" class="w3-button w3-blue w3-padding-large w3-large w3-margin-top">New Controller</a>
    <a click="this.command = 'Jiji.DetectChange.interval = 200;'" class="w3-button w3-blue w3-padding-large w3-large w3-margin-top">DetectChange Interval</a>
    <a external-link="_blank" href="https://simpleicons.org" class="w3-button w3-blue w3-padding-large w3-large w3-margin-top">Simple Icons</a>
  </div>
  <div style="background-color: black;color: white;width: 25%;margin: auto;height: 40px;border-radius: 8px;margin-top: 1em;">
    <div style="line-height: 40px;">{{ this.command }}</div>
  </div>
  <div style="color:white">
  You love Jiji Framework? Give a star to project repository <a external-link="_blank" href="https://github.com/jguyet/jiji-cli" class="w3-button w3-button-radius"><svg _ngcontent-arl-c11="" style="vertical-align: sub;" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path _ngcontent-arl-c11="" d="M0 0h24v24H0z" fill="none"></path><path _ngcontent-arl-c11="" d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z"></path></svg> Star</a>
  </div>
</header>
</div>
</div>
`;