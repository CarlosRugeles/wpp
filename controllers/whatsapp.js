const venom = require('venom-bot')

const stage ={
    TODO : 1,
    IN_PROGRESS: 2,
    COMPLETED: 3
}
const getClient = async ()=>{
    return await venom
        .create('sessionName', //Pass the name of the client you want to start the bot
            //catchQR
            (base64Qrimg, asciiQR, attempts, urlCode) => {
                console.log('Number of attempts to read the qrcode: ', attempts);
                console.log('Terminal qrcode: ', asciiQR);
                console.log('base64 image string qrcode: ', base64Qrimg);
                console.log('urlCode (data-ref): ', urlCode);
            },
            (statusSession, session) => {
                console.log('Status Session: ', statusSession); //return isLogged || notLogged || browserClose || qrReadSuccess || qrReadFail || autocloseCalled || desconnectedMobile || deleteToken || chatsAvailable || deviceNotConnected || serverWssNotConnected || noOpenBrowser
                //Create session wss return "serverClose" case server for close
                console.log('Session name: ', session);
            },)
}
const start = (client) => {
    client.onMessage((message) => {
        if (message.body === 'Hi' && message.isGroupMsg === false) {
            client
                .sendText(message.from, 'Welcome Venom 🕷')
                .then((result) => {
                    console.log('Result: ', result); //return object success
                })
                .catch((erro) => {
                    console.error('Error when sending: ', erro); //return object error
                });
        }
    });
}

const logOut = async ()=> {
    let client = await getClient();
    return client.logout()
}
module.exports = {
    getClient,
    start,
    logOut
}

