const wc = require('./app_module14_words');
const sentence = 'Worte sind wie Pfeile: Erst einmal abgeschossen, kannst du sie nicht mehr zurückholen.';
const wordCount = wc(sentence);
console.log(sentence);
for (var i in wordCount) {
  console.log(wordCount[i] + ' x ' + i);
}
