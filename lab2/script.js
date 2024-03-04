(function () {
  var names = ["Bill", "John", "Jen", "Jason", "Paul", "Frank", "Steven", "Larry", "Paula", "Laura", "Jim"];

  for (var i = 0; i < names.length; i++) {
      var name = names[i];
      var firstLetter = name.charAt(0).toLowerCase();

      if (firstLetter === 'j') {
          byeSpeaker.speak(name);
      } else {
          helloSpeaker.speak(name);
      }
  }

  function filterNamesByLastLetter(names, letter) {
    var filteredNames = [];
    for (var i = 0; i < names.length; i++) {
        var lastLetter = names[i].slice(-1).toLowerCase();
        if (lastLetter === letter.toLowerCase()) {
            console.log("Names ending with 'n':", names[i]);
        }
    }
    return filteredNames;
  }

    filterNamesByLastLetter(names, 'n');
})();