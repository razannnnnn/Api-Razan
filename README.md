<p align="center">
  <img src="https://i.postimg.cc/4NkfZjMr/icon.png" width="200" height="200" alt="Logo">
</p>

<p align="center">
  <a href="#">
    <img src="http://readme-typing-svg.herokuapp.com?color=d1fa02&center=true&vCenter=true&multiline=false&lines=Welcome+To+Rest+Api+Razan+" alt="Typing Animation">
  </a>
</p>

<p align="center">
  <a href="#"><img title="Creator" src="https://img.shields.io/badge/Creator-Razan X Alip-red.svg?style=for-the-badge&logo=github"></a>
</p>

<p align="center">
  <a href="https://github.com/razn-id?tab=followers"><img title="Followers" src="https://img.shields.io/github/followers/razn-id?color=green&style=flat-square"></a>
  <a href="https://github.com/razn-id/Api-Razan/stargazers/"><img title="Stars" src="https://img.shields.io/github/stars/razn-id/Api-Razan?color=white&style=flat-square"></a>
  <a href="https://github.com/razn-id/Api-Razan/network/members"><img title="Forks" src="https://img.shields.io/github/forks/razn-id/Api-Razan?color=yellow&style=flat-square"></a>
  <a href="https://github.com/razn-id/Api-Razan/watchers"><img title="Watching" src="https://img.shields.io/github/watchers/razn-id/Api-Razan?label=Watchers&color=red&style=flat-square"></a>
  <a href="https://github.com/razn-id/Api-Razan"><img title="Open Source" src="https://badges.frapsoft.com/os/v2/open-source.svg?v=103"></a>
  <a href="https://github.com/razn-id/Api-Razan/"><img title="Size" src="https://img.shields.io/github/repo-size/razn-id/Api-Razan?style=flat-square&color=darkred"></a>
  <a href="https://hits.seeyoufarm.com"><img src="https://hits.seeyoufarm.com/api/count/incr/badge.svg?url=https%3A%2F%2Fgithub.com%2Frazn-id%2FApi-Razan%2Fhit-counter&count_bg=%2379C83D&title_bg=%23555555&icon=probot.svg&icon_color=%2304FF00&title=hits&edge_flat=false"/></a>
  <a href="https://github.com/razn-id/Api-Razan/graphs/commit-activity"><img height="20" src="https://img.shields.io/badge/Maintained-No-red.svg"></a>&nbsp;&nbsp;
</p>

## Setup
### 1. Fork this GitHub Repository
### 2. Create a MongoDB Account and Database
### 3. Create an SMTP Email Account

[How to Create a Free SMTP Email](https://www.youtube.com)

### 4. Create a Render Account

1. Create a new web service.
2. Connect your GitHub account and select the forked repository.
3. Set the build command to `npm install`.
4. Set the start command to `npm start`.
5. Click on "Advanced" and add the following environment variables:
    ```
    mongodb = "Your MongoDB Database Key"
    sendemail = 'Your SMTP Email'
    fromsendemail = 'Same as SMTP Email'
    sendpwmail = "SMTP Email Password"
    recaptcha_key_1 = 'Your reCAPTCHA V1 Key'
    recaptcha_key_2 = 'Your reCAPTCHA V2 Key'
    ```
    Get Apikey Recaptcha From [Google reCAPTCHA](https://www.google.com/recaptcha/admin/create)

6. Create the web service.
7. After successful deployment, add your website's domain to the settings file and update the reCAPTCHA keys in the environment variables.

## Configuration

Edit the file `settings.js` for the following configurations:
- Change the Creator's name.
- Change the port.
- Adjust the API key limit.

## Usage

Start the application with:

```
npm start
```

or

```
npm run start
```

## Features

### Script Features
- Login
- Sign Up
- No Temporary Email
- Anti-Spam Email
- Email Verification
- Change Password
- Database
- API Key Limit with Auto Reset
- Anti-Error

### API Features
- Downloader
- Text Pro
- Photooxy
- Sound Of Text
- Search
- Random Images
- Games
- Maker
- Link Shortener
- Information
- Tools
- Islamic

## Deployment
- [api.rivqi.my.id](http://api.rivqi.my.id)
- [alpis.eu.org](http://alpis.eu.org)

## Support Deploy Free

## Credits
- [AlipBot](https://github.com/AlipBot)
- [razn-id](https://github.com/razn-id)
