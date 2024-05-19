# Api-Razan

Free Rest API for Bot Whatsapp (Recode from AlipBot/ApiAlpis)

## Warning
Project ini atau repo ini tidak akan dilanjutkan lagi. Jika mau, tolong fork dan recode sendiri. Untuk selanjutnya, menunggu info terbaru dari pesan ini.

## Setup

### STEP 1: Fork this GitHub Repository

### STEP 2: Create a MongoDB Account and Database

### STEP 3: Create an SMTP Email Account

[How to Create a Free SMTP Email](https://www.youtube.com)

### STEP 4: Create a Render Account

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
