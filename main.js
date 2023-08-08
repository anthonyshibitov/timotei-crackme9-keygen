let key = "2023CM"

for(let i = 0; i < 5; i++){
    key += Math.floor(Math.random() * 10);
}

console.log(key);

function encryptedKeyValue(key){
    let running = 0;
    for(let i = 0; i < key.length; i++){
        running += 123456;
        running += key[i].charCodeAt(0);
    }
    return running;
}

let priorKey = key;

while(true){
    let encrypted = encryptedKeyValue(key)
    if(encrypted % 2023 == 0){
        console.log("Finished key:", key);
        break;
    }
    if(key.length > 15){
        key = priorKey;
    }
    let remainder = encrypted % 2023;
    if(remainder > 32 && remainder != 127) {
        let randomChar = Math.floor(Math.random() * (126 - 33) + 33);
        key += String.fromCharCode(randomChar);
    } else {
        key = key.substring(0, key.length - 1);
    }
}

console.log("enc value:", encryptedKeyValue(key));
console.log("module result:", encryptedKeyValue(key) % 2023);