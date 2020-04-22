class Formatter {
  //add static methods here
  static capitalize(string){
    return `${string.charAt(0).toUpperCase()} + ${string.split(1)}`
  }
   static sanitize(string) {
    // removes any non alpha-numeric characters except dash and single quotes (apostrophes)
    return string.replace(/[^A-za-z0-9-']+/g, '')
   }
   static titleize(string){
     if(string !== 'the' || 'a' || 'an' || 'but' || 'of' || 'and' || 'for' || 'at' || 'by' || 'from'){
       string.charAt(0).toUpperCase()
       }
   }
}