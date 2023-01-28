function shout(string) {
    return string.toUpperCase();
}

function whisper(string) {
    return string.toLowerCase();
}

function logShout(string) {
    console.log(string.toUpperCase());
}

function logWhisper(string) {
    console.log(string.toLowerCase());
}

function sayHiToHeadphonedRoommate(string) {
    let result = ""; 
    switch (string) {
      case string.toLowerCase():
        result = "I can't hear you!";
        break;
      case string.toUpperCase():
        result = "YES INDEED!";
        break;
      case "Let's have dinner together!":
        result = "I would love to!";
        break;
    }
    return result;
}
