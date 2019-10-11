import { wordCount as wc } from './Listing1_16';
const sentence = 'orte sind wie Pfeile: Erst einmal abgeschossen, kannst du sie nicht mehr zurückholen.';
const wordCount = wc(sentence);
console.log(sentence);
for (var i in wordCount) {
  console.log(wordCount[i] + ' x ' + i);
}
