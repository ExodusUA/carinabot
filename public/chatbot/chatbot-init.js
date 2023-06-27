var showChatBotScrollPosition = 320
var isChatBotEnabled = false

function createChatBotInstance() {
    if (isChatBotEnabled) {
        return
    }
    isChatBotEnabled = true

    // Create chat bot instance
    initChatBot({
        name: 'CarinaBot',
        prettyName: 'Chat with CarinaBot',
        botName: 'CarinaBot',
        userName: 'You',
        baseUrl: 'https://chat.carinabot.com/api',
        welcomeMessage: 'Hi. I am artificial intelligence CarinaBot. Ask me your questions.',
        theme: {
            primaryColor: '#6A854D',
            secondaryColor: '#383A37',
            backgroundColor: '#F8F9FA',
            accentColorPrimary: '#F8F9FA',
            accentColorSecondary: '#757575',
            grayColor: '#757575'
        },
        callbacks: {
            onSessionStarted: function () {
                saveOrUpdateChatBotCookie()
                dataLayer.push({ event: 'myevent_chatbot_used' }) //send event to Google Analytics
            },
            onMessageReceived: function () {
                saveOrUpdateChatBotCookie()
            }
        }
    })
}

function checkChatBotCookie() {
    var cookies = document.cookie.split(';')
    for (var i = 0; i < cookies.length; i++) {
        if (cookies[i].includes('open_chat_bot')) {
            return true
        }
    }
    return false
}

function saveOrUpdateChatBotCookie() {
    var now = new Date()
    var time = now.getTime()
    var expireTime = time + 1000 * 60 * 30
    now.setTime(expireTime)
    document.cookie = 'cookie=open_chat_bot;expires=' + now.toUTCString() + ';path=/'
}

if (checkChatBotCookie()) {
    createChatBotInstance()
}

window.addEventListener('scroll', function () {
    if (isChatBotEnabled) {
        return
    }

    if (window.scrollY >= showChatBotScrollPosition) {
        createChatBotInstance()
    }
}, false)