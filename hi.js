console.log('boba tea gnarly')

rli = require('readline').createInterface({
    input : process.stdin,
})
rli.on('line', get_the_channel)

function get_the_channel(line) {
    switch(line){
        case "2":
            console.log("abs-cbn")
            break;
        case "4":
            console.log("ptv")
            break;
        case "5":
            console.log("tv5")
            break;
        case "7":
            console.log("gma")
            break;
        default:
            console.log("idk what that is bru...")
            break;


    }
}