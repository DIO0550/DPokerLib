import { Card, CARD_MARK, JOKER_CARD_NUMBER } from '../card.js'
var assert = require('assert');
var rewire = require('rewire');

// get role module
var roleModule = rewire("../role.js")

/**
 * full hause test
 */
 describe("test role full hause", function() {
    it("full hause no joker", function(){
        let card1 = new Card(CARD_MARK.SPADE, 1)
        let card2 = new Card(CARD_MARK.SPADE, 13) 
        let card3 = new Card(CARD_MARK.HEART, 1)
        let card4 = new Card(CARD_MARK.CLUB, 13)
        let card5 = new Card(CARD_MARK.CLUB, 1)

        let hand = [card1, card2, card3, card4, card5]

        var isFullHause = roleModule.__get__("isFullHause")

         assert.equal(isFullHause(hand), true)
    });

    it("full hause one joker", function(){
        let card1 = new Card(CARD_MARK.SPADE, 6)
        let card2 = new Card(CARD_MARK.SPADE, 13) 
        let card3 = new Card(CARD_MARK.HEART, 6)
        let card4 = new Card(CARD_MARK.CLUB, 13)
        let card5 = new Card(CARD_MARK.JOKER, JOKER_CARD_NUMBER)

        let hand = [card1, card2, card3, card4, card5]

        var isFullHause = roleModule.__get__("isFullHause")

         assert.equal(isFullHause(hand), true)
    });

    it("not full hause one joker", function(){
        let card1 = new Card(CARD_MARK.SPADE, 1)
        let card2 = new Card(CARD_MARK.SPADE, 1) 
        let card3 = new Card(CARD_MARK.HEART, 13)
        let card4 = new Card(CARD_MARK.CLUB, 3)
        let card5 = new Card(CARD_MARK.JOKER, JOKER_CARD_NUMBER)

        let hand = [card1, card2, card3, card4, card5]

        var isFullHause = roleModule.__get__("isFullHause")

         assert.equal(isFullHause(hand), false)
    });
    
    it("full hause two joker", function(){
        let card1 = new Card(CARD_MARK.SPADE, 10)
        let card2 = new Card(CARD_MARK.DIAMOND, 10) 
        let card3 = new Card(CARD_MARK.JOKER, JOKER_CARD_NUMBER)
        let card4 = new Card(CARD_MARK.HEART, 10)
        let card5 = new Card(CARD_MARK.JOKER, JOKER_CARD_NUMBER)

        let hand = [card1, card2, card3, card4, card5]

        var isFullHause = roleModule.__get__("isFullHause")

         assert.equal(isFullHause(hand), true)
    });

    it("full hause two joker", function(){
        let card1 = new Card(CARD_MARK.SPADE, 9)
        let card2 = new Card(CARD_MARK.DIAMOND, 10) 
        let card3 = new Card(CARD_MARK.JOKER, JOKER_CARD_NUMBER)
        let card4 = new Card(CARD_MARK.HEART, 9)
        let card5 = new Card(CARD_MARK.JOKER, JOKER_CARD_NUMBER)

        let hand = [card1, card2, card3, card4, card5]

        var isFullHause = roleModule.__get__("isFullHause")

         assert.equal(isFullHause(hand), true)
    });
});

/**
 * three card test
 */
describe("test role three card", function() {
    it("three card no joker", function(){
        let card1 = new Card(CARD_MARK.SPADE, 3)
        let card2 = new Card(CARD_MARK.SPADE, 12) 
        let card3 = new Card(CARD_MARK.HEART, 3)
        let card4 = new Card(CARD_MARK.CLUB, 3)
        let card5 = new Card(CARD_MARK.CLUB, 6)

        let hand = [card1, card2, card3, card4, card5]

        var isThreeCard = roleModule.__get__("isThreeCard")

         assert.equal(isThreeCard(hand), true)
    });

    it("three card one joker", function(){
        let card1 = new Card(CARD_MARK.SPADE, 3)
        let card2 = new Card(CARD_MARK.SPADE, 12) 
        let card3 = new Card(CARD_MARK.HEART, 11)
        let card4 = new Card(CARD_MARK.CLUB, 3)
        let card5 = new Card(CARD_MARK.JOKER, JOKER_CARD_NUMBER)

        let hand = [card1, card2, card3, card4, card5]

        var isThreeCard = roleModule.__get__("isThreeCard")

         assert.equal(isThreeCard(hand), true)
    });

    it("three card two joker", function(){
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