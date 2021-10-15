# DBM Oauth2

Made by Finbar#0001 (811751283555172433)
<br>
Written in: HTML, Javascript, PHP

# Installation

1. Clone github repository
2. Drag contents of the `/actions` directory to your bots actions folder
3. Drag the `/js` and `/php` directories along with the `auth.html` file to a web server
4. Go to the [discord developer portal application page](https://discord.com/developers/applications) and create a new application
5. Click on your application and go to the Oauth2 panel
6. Add a redirect to `yourserveraddress/auth.html`
7. Go to the Oauth2 URL Generator and select your redirect URL
8. Apply the scopes `identify`, `email`, and `guilds`
9. Copy the OAuth2 link
10. Modify your OAuth2 linkL Where it says `&response_type=code` in the url, change it to `&response_type=token`
11. In `auth.html` on line 9 change the href location to your modified redirect link.
12. CD Into your bots directory and run `npm i sync-mysql`

