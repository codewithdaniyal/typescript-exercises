let guests: string[] = ["Omair", "Junaid", "Daniyal"];

// for(let elements of guestList){
//     console.log(`${elements}, we'd love to have you join us for dinner tonight!`)
// }

let canceledGuest: string = "Daniyal" 
let invitedGuest: string = "Arbaz"

guests[2] = invitedGuest

for(let elements of guests){
    console.log(`${elements}, we'd love to have you join us for dinner tonight!`)
}

console.log(`Mr ${canceledGuest} will not comming tonight.`)

guests.splice(0, 0, "Farhan", "Naveed", "Imran")

// for(let elements of guestList){
//     console.log(`${elements}, we'd love to have you join us for dinner tonight!`)
// }

let remove_guests = "Sorry I can only invite two people on dinner"
console.log(remove_guests)

let remove_guest1 = guests.pop()
console.log(`${remove_guest1}, sorry I can't you invite you on a dinner`)

let remove_guest2 = guests.pop()

console.log(`${remove_guest2}, sorry I can't you invite you on a dinner`)

let remove_guest3 = guests.pop()

console.log(`${remove_guest3}, sorry I can't you invite you on a dinner`)

let remove_guest4 = guests.pop()

console.log(`${remove_guest4}, sorry I can't you invite you on a dinner`)

console.log(guests)
