class Formatter {
  static capitalize(string) {
    return string.charAt(0).toUpperCase() + string.slice(1);
  }

  static sanitize(string) {
    return string.replace(/[^A-Za-z0-9 '-]/g, "");
  }

  static titleize(sentence) {
    const exceptions = [
      "the",
      "a",
      "an",
      "but",
      "of",
      "and",
      "for",
      "at",
      "by",
      "from",
    ];
    let result = [];
    let sentenceArray = sentence.split(" ");
    for (let n = 0; n < sentenceArray.length; n++) {
      if (n == 0) {
        result.push(this.capitalize(sentenceArray[n]));
      } else {
        if (exceptions.includes(sentenceArray[n])) {
          result.push(sentenceArray[n]);
        } else {
          result.push(this.capitalize(sentenceArray[n]));
        }
      }
    }
    return result.join(" ");
  }
}
