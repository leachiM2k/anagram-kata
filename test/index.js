var expect = require('chai').expect,
    AnagramKata = require('..');

var wordList = ['der', 'red', 'erd', 'Dr. E'];

describe('anagram-kata', function() {

    var obj;
    beforeEach(function () {
        obj = new AnagramKata();
    });

    it('should accept word list', function () {
        expect(obj.setWordlist([])).to.be.ok;
    });

    it('should return set word list', function () {
        obj.setWordlist(wordList);
        expect(obj.getWordlist()).to.equal(wordList);
    });

    it('should return no results for not found combination', function () {
        expect(obj.find('WTH')).to.be.null;
    });

    it('should return results without scrambling and in same letter case', function () {
        obj.setWordlist(wordList);
        var result = obj.find('der');
        expect(result).to.a('array');
        expect(result).to.contain('der');
    });

    it('should ignore letter case', function () {
        obj.setWordlist(wordList);
        expect(obj.find('DER')).to.contain('der');
        expect(obj.find('dEr')).to.contain('der');
        expect(obj.find('d32E - R..,')).to.contain('der');
    });

    it('should ignore any non-characters', function () {
        obj.setWordlist(wordList);
        expect(obj.find('d32E - R..,')).to.contain('der');
    });

    it('should ignore letter order', function () {
        obj.setWordlist(wordList);
        var result = obj.find('der');
        expect(result).to.deep.equal(['der', 'red', 'erd', 'Dr. E']);
    });

});
