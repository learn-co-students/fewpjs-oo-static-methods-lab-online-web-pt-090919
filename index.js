class Formatter {
  static capitalize(string) {
    return string.charAt(0).toUpperCase() + string.slice(1)
  }

  static sanitize(string) {
    return string.replace(/[^A-Za-z0-9- '\w]+/g,'')
  }
  static titleize(string) {
    let lastArray = ['the', 'a', 'an', 'but', 'of', 'and', 'for', 'at', 'by', 'from']
    let word = string.split(' ')[0]
    
   return string.split('').map(e => {
     if (lastArray.includes(e) && e !== word) {
       return e.toLowerCase()
     } else {
       return e[0].toUpperCase() + e.slice(1)
     }
   }).join(' ')
  }
}

