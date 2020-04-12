class Formatter {

  static capitalize(str) {
    return str[0].toUpperCase() + str.slice(1)
  }

  static sanitize(str) {
    return str.replace(/[^A-Za-z0-9\s-']/g, '')
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