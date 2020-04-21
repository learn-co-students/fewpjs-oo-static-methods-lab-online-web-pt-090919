class Formatter {
  //add static methods here

  static capitalize(word) {
    return word[0].toUpperCase() + word.slice(1, word.length);
  };

  static sanitize(word) {
    return word.replace(/[^A-Za-z0-9-'\s]+/g, '');
  };

  static titleize(phrase) {
    const fillers = ['the', 'a', 'an', 'but', 'of', 'and', 'for', 'at', 'by', 'from']
    let title = phrase.split(" ").map(word => {
      if (fillers.includes(word) && !(phrase.indexOf(word) === 0)){
        return word;
      }else{
        return Formatter.capitalize(word);
      };
    });

    return title.join(" ");
  };

}