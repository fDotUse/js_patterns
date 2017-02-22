// this
function talk() {
  console.log(this.sound)
}

let cat = {
  sound: 'miauuu',
  talk: talk
}

let dog = {
  sound: 'wooof',
  talk: talk
}

//'this' is the context where the function was called in this case dog
dog.talk() // wooof
cat.talk() // miaaau

// creating bounded functions
let dogTalkBound = talk.bind(dog)
let catTalkBound = talk.bind(cat)
dogTalkBound() // woof
catTalkBound() // miauuu

// call and apply methods of a function
talk.call(dog) // wooof
talk.apply(dog) // wooof

