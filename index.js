'use strict';

var AnagramFinder = function () {
    this.wordlist = [];
    this.newWordlist = {};
};

AnagramFinder.prototype.setWordlist = function (wordlist) {
    this.wordlist = wordlist;

    wordlist.forEach(function (item) {
        var normalizedItem = normalizeString(item);
        this.newWordlist[normalizedItem] = this.newWordlist[normalizedItem] || [];
        this.newWordlist[normalizedItem].push(item);
    }.bind(this));

    return this;
};

AnagramFinder.prototype.getWordlist = function () {
    return this.wordlist;
};

AnagramFinder.prototype.find = function (word) {
    word = normalizeString(word);
    return this.newWordlist[word] || null;
};

function normalizeString(string) {
    return string.toLowerCase().replace(/[^a-z]/g, '').split('').sort().join('');
}

module.exports = AnagramFinder;
