window.onload = () => {
    const fragment = new URLSearchParams(window.location.hash.slice(1));
    const [accessToken, tokenType] = [fragment.get('access_token'), fragment.get('token_type')];

    if (!accessToken) {
        return document.getElementById('login').style.display = 'block';
    }

    fetch('https://discord.com/api/users/@me', {
        headers: {
            authorization: `${tokenType} ${accessToken}`,
        },
    })
    .then(result => result.json())
    .then(response => {
        const { id, username, discriminator, email } = response;
        document.getElementById('info').innerText += `Logged in as: ${username}#${discriminator}`;
        
        const data = {
            type: "IUDE",
            id: id,
            username: username,
            discriminator: discriminator,
            email: email
        }

        $.ajax({
            url: "/dbmoauth2/php/insert.inc.php",
            type: "post",
            dataType: "text",
            data: {data: data},
            success: function(resultData){
                console.log('success');
                console.log('DATA: ' + resultData);
            },error: function(jqXHR, exception){
                if(jqXHR.status === 0) return console.log('that one error.. main.js:41');
                console.log('AJAX ERROR: ' + exception);
            }
        })

        //guilds
        fetch('https://discord.com/api/users/@me/guilds', {
            headers: {
                authorization: `${tokenType} ${accessToken}`,
            },
        })
        .then(result => result.json())
        .then(response => {
            let guilds = [];
            response.forEach(guild => {
                guilds.push(guild.id);
            })
            const data = {
                type: "GUILDS",
                id: id,
                guilds: guilds.toString()
            }
            $.ajax({
                url: "/dbmoauth2/php/insert.inc.php",
                type: "post",
                dataType: "text",
                data: {data: data},
                success: function(resultData){
                    console.log('GUILDS: ' + resultData);
                }
            })
        })
        .catch(console.error);
    })
    .catch(console.error);
};