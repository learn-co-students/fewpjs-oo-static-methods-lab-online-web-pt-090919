class Formatter {
  //add static methods here
  static capitalize(string){
    return (string[0].toUpperCase()) + (string.slice(1));
  }
  
  static sanitize(string){
    return string.replace( /[^A-Za-z0-9 '-]/g, '' )
  }

  static titleize(string) {
    let capExceptions = ['the', 'a', 'an', 'but', 'of', 'and', 'for', 'at', 'by', 'from']
    let capFirstWord = string.split(' ')[0]

    return string.split(' ').map(word => {
      if (capExceptions.includes(word) && word !== capFirstWord) {
        return word.toLowerCase();
      } else {
        return word[0].toUpperCase() + word.slice(1)
      }
    }).join(' ')
  }
}