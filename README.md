
![Api-Razan](https://socialify.git.ci/razn-id/Api-Razan/image?description=1&font=Inter&forks=1&language=1&name=1&owner=1&pattern=Charlie%20Brown&stargazers=1&theme=Auto)


<!-- <p align="center">
  <a href="#"><img title="Creator" src="https://img.shields.io/badge/Creator-Razan X Alip-red.svg?style=for-the-badge&logo=github"></a>
</p> -->

<p align="center">
  <a href="https://github.com/razn-id?tab=followers"><img title="Followers" src="https://img.shields.io/github/followers/razn-id?color=green&style=flat-square"></a>
  <a href="https://github.com/razn-id/Api-Razan/stargazers/"><img title="Stars" src="https://img.shields.io/github/stars/razn-id/Api-Razan?color=white&style=flat-square"></a>
  <a href="https://github.com/razn-id/Api-Razan/network/members"><img title="Forks" src="https://img.shields.io/github/forks/razn-id/Api-Razan?color=yellow&style=flat-square"></a>
  <a href="https://github.com/razn-id/Api-Razan/watchers"><img title="Watching" src="https://img.shields.io/github/watchers/razn-id/Api-Razan?label=Watchers&color=red&style=flat-square"></a>
  <a href="https://github.com/razn-id/Api-Razan"><img title="Open Source" src="https://badges.frapsoft.com/os/v2/open-source.svg?v=103"></a>
  <a href="https://github.com/razn-id/Api-Razan/"><img title="Size" src="https://img.shields.io/github/repo-size/razn-id/Api-Razan?style=flat-square&color=darkred"></a>
  <a href="https://hits.seeyoufarm.com"><img src="https://hits.seeyoufarm.com/api/count/incr/badge.svg?url=https%3A%2F%2Fgithub.com%2Frazn-id%2FApi-Razan%2Fhit-counter&count_bg=%2379C83D&title_bg=%23555555&icon=probot.svg&icon_color=%2304FF00&title=hits&edge_flat=false"/></a>
  <a href="https://github.com/razn-id/Api-Razan/graphs/commit-activity"><img height="20" src="https://img.shields.io/badge/Maintained-Yes-green.svg"></a>&nbsp;&nbsp;
</p>


# Installation

### Step 1: Fork the GitHub Repository
- Click the `Fork` button at the top-right of the repository page.
- Customize the name, description, etc., if desired.

### Step 2: Create a MongoDB Account and Database
- Visit [MongoDB](https://www.mongodb.com/).
- Sign up for an account.
- Create a new database and obtain the connection string (MongoDB URI).

### Step 3: Create an SMTP Email Account
- Set up an SMTP email account.
- You can use your own SMTP server or a free SMTP service.
- Obtain the SMTP server details and credentials.

### Step 4: Create a Render Account and Deploy the Service
1. Sign up at [Render](https://render.com/).
2. Create a new web service on Render.
3. Connect your GitHub account to Render.
4. Select the forked repository.
5. Set the build command to `npm install`.
6. Set the start command to `npm start`.
7. Click "Advanced" and add the following environment variables:
    ```env
    mongodb = "Your MongoDB Database Key"
    sendemail = "Your SMTP Email"
    fromsendemail = "Same as SMTP Email"
    sendpwmail = "SMTP Email Password"
    recaptcha_key_1 = "Your reCAPTCHA V1 Key"
    recaptcha_key_2 = "Your reCAPTCHA V2 Key"
    ```
   - Get API keys for reCAPTCHA from [Google reCAPTCHA](https://www.google.com/recaptcha/admin/create).
8. Create the web service.
9. After deployment, update the environment variables in the Render dashboard as needed.


# Configuration

Edit the file `settings.js` for the following configurations:
- Change the Creator's name.
- Change the port.
- Adjust the API key limit.

# Usage

Start the application with:

```
npm start
```

or

```
npm run start
```

# Features
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

# Deployment
- [api.rivqi.xyz](http://api.rivqi.xyz)
- [alpis.eu.org](http://alpis.eu.org)


# Credits
- [AlipBot](https://github.com/AlipBot)
- [razn-id](https://github.com/razn-id)
