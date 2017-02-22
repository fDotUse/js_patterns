function talk(sound) {
  console.log(this.sound)
}
let animal = {
  talk
}
let cat = {
  sound: 'meow!'
}

let superCat = {
  howl: function() {
    console.log(this.sound.toUpperCase())
  }
}
// sets cat as an animal
Object.setPrototypeOf(cat, animal)
cat.talk() // 'meow!
// we can extend the prototype chain as long as we want
Object.setPrototypeOf(superCat, cat)
superCat.howl() // MEOW!
