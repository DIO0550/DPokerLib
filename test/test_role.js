import { Card, CARD_MARK, JOKER_CARD_NUMBER } from '../lib/card.js'
import { hand, HAND_LIST } from '../lib/hand.js'

var assert = require('assert');


describe("hand", function() {
    it("royal flush", function() {
        let card1 = new Card(CARD_MARK.DIAMOND, 1)
        let card2 = new Card(CARD_MARK.DIAMOND, 13) 
        let card3 = new Card(CARD_MARK.DIAMOND, 11)
        let card4 = new Card(CARD_MARK.DIAMOND, 12)
        let card5 = new Card(CARD_MARK.DIAMOND, 10)

        let handCards = [card1, card2, card3, card4, card5]


         assert.equal(hand(handCards) == HAND_LIST.ROYAL_FLUSH, true)
    });

    it("five card one joker", function() {
        let card1 = new Card(CARD_MARK.SPADE, 7)
        let card2 = new Card(CARD_MARK.DIAMOND, 7) 
        let card3 = new Card(CARD_MARK.HEART, 7)
        let card4 = new Card(CARD_MARK.CLUB, 7)
        let card5 = new Card(CARD_MARK.JOKER, JOKER_CARD_NUMBER)

        let handCards = [card1, card2, card3, card4, card5]

        assert.equal(hand(handCards) == HAND_LIST.FIVE_CARD, true)
    });

    it("five card two joker", function() {
        let card1 = new Card(CARD_MARK.SPADE, 10)
        let card2 = new Card(CARD_MARK.DIAMOND, 10) 
        let card3 = new Card(CARD_MARK.JOKER, JOKER_CARD_NUMBER)
        let card4 = new Card(CARD_MARK.HEART, 10)
        let card5 = new Card(CARD_MARK.JOKER, JOKER_CARD_NUMBER)

        let handCards = [card1, card2, card3, card4, card5]

        assert.equal(hand(handCards) == HAND_LIST.FIVE_CARD, true)
    });

    it("straight flush no joker", function() {
        let card1 = new Card(CARD_MARK.DIAMOND, 9)
        let card2 = new Card(CARD_MARK.DIAMOND, 13) 
        let card3 = new Card(CARD_MARK.DIAMOND, 11)
        let card4 = new Card(CARD_MARK.DIAMOND, 12)
        let card5 = new Card(CARD_MARK.DIAMOND, 10)
        
        let handCards = [card1, card2, card3, card4, card5]
        
        assert.equal(hand(handCards) == HAND_LIST.STRATIGHT_FLUSH, true)
    });

    it("straight flush one joker", function() {
        let card1 = new Card(CARD_MARK.JOKER, JOKER_CARD_NUMBER)
        let card2 = new Card(CARD_MARK.DIAMOND, 13) 
        let card3 = new Card(CARD_MARK.DIAMOND, 11)
        let card4 = new Card(CARD_MARK.DIAMOND, 12)
        let card5 = new Card(CARD_MARK.DIAMOND, 1)
        
        let handCards = [card1, card2, card3, card4, card5]
        
        assert.equal(hand(handCards) == HAND_LIST.STRATIGHT_FLUSH, true)
    });

    it("straight flush two joker", function() {
        let card1 = new Card(CARD_MARK.JOKER, JOKER_CARD_NUMBER)
        let card2 = new Card(CARD_MARK.DIAMOND, 13) 
        let card3 = new Card(CARD_MARK.DIAMOND, 11)
        let card4 = new Card(CARD_MARK.DIAMOND, 12)
        let card5 = new Card(CARD_MARK.JOKER, JOKER_CARD_NUMBER)
        
        let handCards = [card1, card2, card3, card4, card5]
        
        assert.equal(hand(handCards) == HAND_LIST.STRATIGHT_FLUSH, true)
    });

    it("four card no joker", function() {
        let card1 = new Card(CARD_MARK.SPADE, 1)
        let card2 = new Card(CARD_MARK.DIAMOND, 13) 
        let card3 = new Card(CARD_MARK.HEART, 1)
        let card4 = new Card(CARD_MARK.DIAMOND, 1)
        let card5 = new Card(CARD_MARK.CLUB, 1)

        let handCards = [card1, card2, card3, card4, card5]

        assert.equal(hand(handCards) == HAND_LIST.FOUR_CARD, true)
    });

    it("four card one joker", function() {
        let card1 = new Card(CARD_MARK.SPADE, 6)
        let card2 = new Card(CARD_MARK.SPADE, 13) 
        let card3 = new Card(CARD_MARK.HEART, 6)
        let card4 = new Card(CARD_MARK.CLUB, 6)
        let card5 = new Card(CARD_MARK.JOKER, JOKER_CARD_NUMBER)
        
        let handCards = [card1, card2, card3, card4, card5]
        
        assert.equal(hand(handCards) == HAND_LIST.FOUR_CARD, true)
    });

    it("four card two joker", function() {
        let card1 = new Card(CARD_MARK.SPADE, 10)
        let card2 = new Card(CARD_MARK.DIAMOND, 5) 
        let card3 = new Card(CARD_MARK.JOKER, JOKER_CARD_NUMBER)
        let card4 = new Card(CARD_MARK.HEART, 10)
        let card5 = new Card(CARD_MARK.JOKER, JOKER_CARD_NUMBER)
        
        let handCards = [card1, card2, card3, card4, card5]
        
        assert.equal(hand(handCards) == HAND_LIST.FOUR_CARD, true)
    });

    it("full hause no joker", function() {
        let card1 = new Card(CARD_MARK.SPADE, 1)
        let card2 = new Card(CARD_MARK.SPADE, 13) 
        let card3 = new Card(CARD_MARK.HEART, 1)
        let card4 = new Card(CARD_MARK.CLUB, 13)
        let card5 = new Card(CARD_MARK.CLUB, 1)
        
        let handCards = [card1, card2, card3, card4, card5]
        
        assert.equal(hand(handCards) == HAND_LIST.FULL_HAUSE, true)
    });

    it("full hause one joker", function() {
        let card1 = new Card(CARD_MARK.SPADE, 6)
        let card2 = new Card(CARD_MARK.SPADE, 13) 
        let card3 = new Card(CARD_MARK.HEART, 6)
        let card4 = new Card(CARD_MARK.CLUB, 13)
        let card5 = new Card(CARD_MARK.JOKER, JOKER_CARD_NUMBER)
        
        let handCards = [card1, card2, card3, card4, card5]
        
        assert.equal(hand(handCards) == HAND_LIST.FULL_HAUSE, true)
    });

    it("flush no joker", function() {
        let card1 = new Card(CARD_MARK.SPADE, 3)
        let card2 = new Card(CARD_MARK.SPADE, 12) 
        let card3 = new Card(CARD_MARK.SPADE, 6)
        let card4 = new Card(CARD_MARK.SPADE, 7)
        let card5 = new Card(CARD_MARK.SPADE, 10)
        
        let handCards = [card1, card2, card3, card4, card5]
        
        assert.equal(hand(handCards) == HAND_LIST.FLUSH, true)
    });

    it("flush one joker", function() {
        let card1 = new Card(CARD_MARK.HEART, 3)
        let card2 = new Card(CARD_MARK.HEART, 12) 
        let card3 = new Card(CARD_MARK.HEART, 11)
        let card4 = new Card(CARD_MARK.HEART, 4)
        let card5 = new Card(CARD_MARK.JOKER, JOKER_CARD_NUMBER)
        
        let handCards = [card1, card2, card3, card4, card5]
        
        assert.equal(hand(handCards) == HAND_LIST.FLUSH, true)
    });

    it("flush two joker", function() {
        let card1 = new Card(CARD_MARK.JOKER, JOKER_CARD_NUMBER)
        let card2 = new Card(CARD_MARK.CLUB, 12) 
        let card3 = new Card(CARD_MARK.CLUB, 11)
        let card4 = new Card(CARD_MARK.CLUB, 3)
        let card5 = new Card(CARD_MARK.JOKER, JOKER_CARD_NUMBER)
        
        let handCards = [card1, card2, card3, card4, card5]
        
        assert.equal(hand(handCards) == HAND_LIST.FLUSH, true)
    });

    it("straight no joker", function() {
        let card1 = new Card(CARD_MARK.SPADE, 3)
        let card2 = new Card(CARD_MARK.SPADE, 4) 
        let card3 = new Card(CARD_MARK.HEART, 7)
        let card4 = new Card(CARD_MARK.CLUB, 6)
        let card5 = new Card(CARD_MARK.CLUB, 5)
        
        let handCards = [card1, card2, card3, card4, card5]
        
        assert.equal(hand(handCards) == HAND_LIST.STRAIGHT, true)
    });

    it("straight no joker 10 ~ 1", function() {
        let card1 = new Card(CARD_MARK.SPADE, 1)
        let card2 = new Card(CARD_MARK.SPADE, 12) 
        let card3 = new Card(CARD_MARK.HEART, 13)
        let card4 = new Card(CARD_MARK.CLUB, 10)
        let card5 = new Card(CARD_MARK.CLUB, 11)
        
        let handCards = [card1, card2, card3, card4, card5]
        console.log(hand(handCards))
        assert.equal(hand(handCards) == HAND_LIST.STRAIGHT, true)
    });

    it("straight one joker 9 ~ 13", function() {
        let card1 = new Card(CARD_MARK.SPADE, 10)
        let card2 = new Card(CARD_MARK.SPADE, 9) 
        let card3 = new Card(CARD_MARK.HEART, 11)
        let card4 = new Card(CARD_MARK.CLUB, 13)
        let card5 = new Card(CARD_MARK.JOKER, JOKER_CARD_NUMBER)
        
        let handCards = [card1, card2, card3, card4, card5]
        
        assert.equal(hand(handCards) == HAND_LIST.STRAIGHT, true)
    });

    it("straight one joker 10 ~ 12 1", function() {
        let card1 = new Card(CARD_MARK.SPADE, 12)
        let card2 = new Card(CARD_MARK.SPADE, 1) 
        let card3 = new Card(CARD_MARK.HEART, 11)
        let card4 = new Card(CARD_MARK.CLUB, 10)
        let card5 = new Card(CARD_MARK.JOKER, JOKER_CARD_NUMBER)
        
        let handCards = [card1, card2, card3, card4, card5]
        
        assert.equal(hand(handCards) == HAND_LIST.STRAIGHT, true)
    });

    it("straight two joker 11 ~ 12 1", function() {
        let card1 = new Card(CARD_MARK.JOKER, JOKER_CARD_NUMBER)
        let card2 = new Card(CARD_MARK.SPADE, 12) 
        let card3 = new Card(CARD_MARK.HEART, 11)
        let card4 = new Card(CARD_MARK.CLUB, 1)
        let card5 = new Card(CARD_MARK.JOKER, JOKER_CARD_NUMBER)
        
        let handCards = [card1, card2, card3, card4, card5]
        
        assert.equal(hand(handCards) == HAND_LIST.STRAIGHT, true)
    });
    
    it("straight two joker 12 ~ 13 1", function() {
        let card1 = new Card(CARD_MARK.JOKER, JOKER_CARD_NUMBER)
        let card2 = new Card(CARD_MARK.SPADE, 12) 
        let card3 = new Card(CARD_MARK.HEART, 13)
        let card4 = new Card(CARD_MARK.CLUB, 1)
        let card5 = new Card(CARD_MARK.JOKER, JOKER_CARD_NUMBER)
        
        let handCards = [card1, card2, card3, card4, card5]
        
        assert.equal(hand(handCards) == HAND_LIST.STRAIGHT, true)
    });
    
    
    it("straight two joker 5 ~ 6 8", function() {
        let card1 = new Card(CARD_MARK.JOKER, JOKER_CARD_NUMBER)
        let card2 = new Card(CARD_MARK.SPADE, 8) 
        let card3 = new Card(CARD_MARK.HEART, 5)
        let card4 = new Card(CARD_MARK.CLUB, 6)
        let card5 = new Card(CARD_MARK.JOKER, JOKER_CARD_NUMBER)
        
        let handCards = [card1, card2, card3, card4, card5]
        
        assert.equal(hand(handCards) == HAND_LIST.STRAIGHT, true)
    });
    
    it("straight two joker 6 ~ 7 10", function() {
        let card1 = new Card(CARD_MARK.JOKER, JOKER_CARD_NUMBER)
        let card2 = new Card(CARD_MARK.SPADE, 10) 
        let card3 = new Card(CARD_MARK.HEART, 6)
        let card4 = new Card(CARD_MARK.CLUB, 7)
        let card5 = new Card(CARD_MARK.JOKER, JOKER_CARD_NUMBER)
        
        let handCards = [card1, card2, card3, card4, card5]
        
        assert.equal(hand(handCards) == HAND_LIST.STRAIGHT, true)
    });

    it("three card no joker", function() {
        let card1 = new Card(CARD_MARK.SPADE, 3)
        let card2 = new Card(CARD_MARK.SPADE, 12) 
        let card3 = new Card(CARD_MARK.HEART, 3)
        let card4 = new Card(CARD_MARK.CLUB, 3)
        let card5 = new Card(CARD_MARK.CLUB, 6)
        
        let handCards = [card1, card2, card3, card4, card5]
        
        assert.equal(hand(handCards) == HAND_LIST.THREE_CARD, true)
    });

    it("three card one joker", function() {
        let card1 = new Card(CARD_MARK.SPADE, 3)
        let card2 = new Card(CARD_MARK.SPADE, 12) 
        let card3 = new Card(CARD_MARK.HEART, 11)
        let card4 = new Card(CARD_MARK.CLUB, 3)
        let card5 = new Card(CARD_MARK.JOKER, JOKER_CARD_NUMBER)
        
        let handCards = [card1, card2, card3, card4, card5]
        
        assert.equal(hand(handCards) == HAND_LIST.THREE_CARD, true)
    });

    it("three card two joker", function() {
        let card1 = new Card(CARD_MARK.SPADE, JOKER_CARD_NUMBER)
        let card2 = new Card(CARD_MARK.SPADE, 12) 
        let card3 = new Card(CARD_MARK.HEART, 11)
        let card4 = new Card(CARD_MARK.CLUB, 3)
        let card5 = new Card(CARD_MARK.JOKER, JOKER_CARD_NUMBER)
        
        let handCards = [card1, card2, card3, card4, card5]
        
        assert.equal(hand(handCards) == HAND_LIST.THREE_CARD, true)
    });

    it("two pair no joker", function() {
        let card1 = new Card(CARD_MARK.SPADE, 3)
        let card2 = new Card(CARD_MARK.SPADE, 4) 
        let card3 = new Card(CARD_MARK.HEART, 3)
        let card4 = new Card(CARD_MARK.CLUB, 2)
        let card5 = new Card(CARD_MARK.CLUB, 4)
        
        let handCards = [card1, card2, card3, card4, card5]
        
        assert.equal(hand(handCards) == HAND_LIST.TWO_PAIR, true)
    });

    it("one pair no joker", function() {
        let card1 = new Card(CARD_MARK.SPADE, 3)
        let card2 = new Card(CARD_MARK.SPADE, 5) 
        let card3 = new Card(CARD_MARK.HEART, 3)
        let card4 = new Card(CARD_MARK.CLUB, 2)
        let card5 = new Card(CARD_MARK.CLUB, 4)
        
        let handCards = [card1, card2, card3, card4, card5]
        
        assert.equal(hand(handCards) == HAND_LIST.ONE_PAIR, true)
    });

    it("one pair one joker", function() {
        let card1 = new Card(CARD_MARK.SPADE, 3)
        let card2 = new Card(CARD_MARK.SPADE, 5) 
        let card3 = new Card(CARD_MARK.HEART, 10)
        let card4 = new Card(CARD_MARK.CLUB, 2)
        let card5 = new Card(CARD_MARK.JOKER, JOKER_CARD_NUMBER)
        
        let handCards = [card1, card2, card3, card4, card5]
        
        assert.equal(hand(handCards) == HAND_LIST.ONE_PAIR, true)
    });

    it("high card no joker", function() {
        let card1 = new Card(CARD_MARK.SPADE, 3)
        let card2 = new Card(CARD_MARK.SPADE, 10) 
        let card3 = new Card(CARD_MARK.HEART, 6)
        let card4 = new Card(CARD_MARK.CLUB, 7)
        let card5 = new Card(CARD_MARK.CLUB, 4)
        
        let handCards = [card1, card2, card3, card4, card5]
        
        assert.equal(hand(handCards) == HAND_LIST.HIGH_CARD, true)
    });
});