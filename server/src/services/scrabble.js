const getDictionaryWords = require('./dictionary');;

class Scrabble {
  constructor(input) {
    this.list = input.toLowerCase().split("");
    this.dictWords = getDictionaryWords();
  }

  score = (letter) => {
    const score = new Proxy({
      'a|e|i|l|n|o|r|t|u' : 1,
      'd|g' : 2,
      'b|c|m|p': 3,
      'f|h|v|w|y': 4,
      'k': 5,
      'j|x': 8,
      'q|z': 10
    }, {
      get: (target, property) => {
        for (let k in target)
            if (new RegExp(k).test(property))
                return target[k]
        return null
      }
    });
    return score[letter];
  }

  getWords = () => {
    let result = [];
    let scoreArr  = [];
    let search = (node, string, score, list) => {
      list = list.filter(l => string.indexOf(l) === -1);
			if (node.keys.size != 0 && list.length>0) {
				for (let letter of list) {
          if (node.isEnd()) {
            this.push(result, string, score, scoreArr);
          };
          if(node.keys.has(letter)) {
					  search(node.keys.get(letter), string.concat(letter), score + this.score(letter) , list);
          }
				};
			} else {
				if(node.isEnd()) {
          this.push(result, string, score, scoreArr);
        }
				return;
			};
		};
		search(this.dictWords.root, "", 0, this.list);
    scoreArr.sort((a,b) => {
      return a.score < b.score ? 1: -1;
    })
    return scoreArr.map((obj) => obj.string);
  }

  push = (array, string, score, scoreArr) => {
    if(string !== "" && array.indexOf(string) === -1) {
      const word = {"string": string, "score": score}
      scoreArr.push(word);
      array.push(string);
    }
  }
}

module.exports = Scrabble;

