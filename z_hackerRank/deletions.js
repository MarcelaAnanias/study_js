s = "AABAAB";

function alternatingCharacters(s) {
    let deletions = 0;
    for (let i = 1; i < s.length; i++) {
        if (s[i] === s[i - 1]) { //comparando o caractere atual s[i] com o caractere imediatamente anterior s[i-1]
            deletions++;
        }
    }
  return deletions;
}

console.log(alternatingCharacters(s))
