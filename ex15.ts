let guestList: string[] = ["Omair", "Junaid", "Daniyal"];
for(let elements of guestList){
    console.log(`${elements}, we'd love to have you join us for dinner tonight!`)
}

let notPresent: string = "Daniyal" 
let present: string = "Arbaz"

guestList[2] = present

for(let elements of guestList){
    console.log(`${elements}, we'd love to have you join us for dinner tonight!`)
}

console.log(`Mr ${notPresent} will not comming tonight.`)