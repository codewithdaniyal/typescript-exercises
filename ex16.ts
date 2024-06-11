let guestsList: string[] = ["Omair", "Junaid", "Daniyal"];

for(let elements of guestsList){
     console.log(`${elements}, we'd love to have you join us for dinner tonight!`)
}

let not_Present: string = "Daniyal" 
let Present: string = "Arbaz"

guestsList[2] = Present

for(let elements of guestsList){
    console.log(`${elements}, we'd love to have you join us for dinner tonight!`)
}

console.log(`Mr ${not_Present} will not comming tonight.`)

guestsList.splice(0, 0, "Farhan", "Naveed", "Imran")

for(let elements of guestsList){
    console.log(`${elements}, we'd love to have you join us for dinner tonight!`)
}
