import { Card, CARD_MARK, JOKER_CARD_NUMBER } from '../lib/card.js'
var assert = require('assert');

describe("card", function() {
    it("initialize spade", function(){
        var card = new Card(CARD_MARK.SPADE, 1)
        assert.equal(1, card.number);
        assert.equal(CARD_MARK.SPADE, card.mark);
    });

    it("initialize hart", function(){
        var card = new Card(CARD_MARK.HEART, 1)
        assert.equal(1, card.number);
        assert.equal(CARD_MARK.HEART, card.mark);
    });

    it("initialize diamond", function(){
        var card = new Card(CARD_MARK.DIAMOND, 1)
        assert.equal(1, card.number);
        assert.equal(CARD_MARK.DIAMOND, card.mark);
    });

    it("initialize club", function(){
        var card = new Card(CARD_MARK.CLUB, 1)
        assert.equal(1, card.number);
        assert.equal(CARD_MARK.CLUB, card.mark);
    });

    it("initialize jocker", function(){
        var card = new Card(CARD_MARK.JOKER, JOKER_CARD_NUMBER)
        assert.equal(JOKER_CARD_NUMBER, card.number);
        assert.equal(CARD_MARK.JOKER, card.mark);
    });
});