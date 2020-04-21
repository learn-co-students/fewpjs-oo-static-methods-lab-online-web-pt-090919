class Formatter {
  //add static methods here

  static capitalize(string){
    return string.charAt(0).toUpperCase() + string.slice(1)
  }

  static sanitize(string){
    return string.replace( /[^A-Za-z0-9 '-]/g, '' )
  }

  static titleize(str) {
    let badArr = ['the', 'a', 'an', 'but', 'of', 'and', 'for', 'at', 'by', 'from']
    let firstWord = str.split(' ')[0]

    return str.split(' ').map(word => {
      if (badArr.includes(word) && word !== firstWord) {
        return word.toLowerCase();
      } else {
        return word[0].toUpperCase() + word.slice(1)
      }
    }).join(' ')
  }
}