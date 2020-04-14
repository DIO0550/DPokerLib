import { Card, CARD_MARK, JOKER_CARD_NUMBER } from '../card.js'
var assert = require('assert');
var rewire = require('rewire');

// get role module
var roleModule = rewire("../role.js")

/**
 * three card test
 */
describe("test role three card", function() {
    it("not three card no joker", function(){
        let card1 = new Card(CARD_MARK.SPADE, 3)
        let card2 = new Card(CARD_MARK.SPADE, 12) 
        let card3 = new Card(CARD_MARK.HEART, 3)
        let card4 = new Card(CARD_MARK.CLUB, 3)
        let card5 = new Card(CARD_MARK.CLUB, 6)

        let hand = [card1, card2, card3, card4, card5]

        var isThreeCard = roleModule.__get__("isThreeCard")

         assert.equal(isThreeCard(hand), true)
    });

    it("not three card one joker", function(){
        let card1 = new Card(CARD_MARK.SPADE, 3)
        let card2 = new Card(CARD_MARK.SPADE, 12) 
        let card3 = new Card(CARD_MARK.HEART, 11)
        let card4 = new Card(CARD_MARK.CLUB, 3)
        let card5 = new Card(CARD_MARK.JOKER, JOKER_CARD_NUMBER)

        let hand = [card1, card2, card3, card4, card5]

        var isThreeCard = roleModule.__get__("isThreeCard")

         assert.equal(isThreeCard(hand), true)
    });

    it("not three card two joker", function(){
        let card1 = new Card(CARD_MARK.SPADE, JOKER_CARD_NUMBER)
        let card2 = new Card(CARD_MARK.SPADE, 12) 
        let card3 = new Card(CARD_MARK.HEART, 11)
        let card4 = new Card(CARD_MARK.CLUB, 3)
        let card5 = new Card(CARD_MARK.JOKER, JOKER_CARD_NUMBER)

        let hand = [card1, card2, card3, card4, card5]

        var isThreeCard = roleModule.__get__("isThreeCard")

        assert.equal(isThreeCard(hand), true)
    });
});

/**
 * three card test
 */
describe("test role two paire", function() {
    it("not two paire no joker", function(){
        let card1 = new Card(CARD_MARK.SPADE, 3)
        let card2 = new Card(CARD_MARK.SPADE, 4) 
        let card3 = new Card(CARD_MARK.HEART, 3)
        let card4 = new Card(CARD_MARK.CLUB, 2)
        let card5 = new Card(CARD_MARK.CLUB, 4)

        let hand = [card1, card2, card3, card4, card5]

        var isTwoPair = roleModule.__get__("isTwoPair")

         assert.equal(isTwoPair(hand), true)
    });
});