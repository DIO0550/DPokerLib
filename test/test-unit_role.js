import { Card, CARD_MARK, JOKER_CARD_NUMBER } from '../lib/card.js'
var assert = require('assert');
var rewire = require('rewire');

// get role module
var roleModule = rewire("../lib/role.js")

/**
* royal flush test
*/
describe("test role royal flush", function() {
    it("royal flush", function() {
        let card1 = new Card(CARD_MARK.DIAMOND, 1)
        let card2 = new Card(CARD_MARK.DIAMOND, 13) 
        let card3 = new Card(CARD_MARK.DIAMOND, 11)
        let card4 = new Card(CARD_MARK.DIAMOND, 12)
        let card5 = new Card(CARD_MARK.DIAMOND, 10)
        
        let hand = [card1, card2, card3, card4, card5]
        
        var isRoyalFlush = roleModule.__get__("isRoyalFlush")
        
        assert.equal(isRoyalFlush(hand), true)
    });
    
    it("not royal flush no joker", function() {
        let card1 = new Card(CARD_MARK.DIAMOND, 12)
        let card2 = new Card(CARD_MARK.DIAMOND, 13) 
        let card3 = new Card(CARD_MARK.DIAMOND, 10)
        let card4 = new Card(CARD_MARK.DIAMOND, 11)
        let card5 = new Card(CARD_MARK.DIAMOND, 9)
        
        let hand = [card1, card2, card3, card4, card5]
        
        var isRoyalFlush = roleModule.__get__("isRoyalFlush")
        
        assert.equal(isRoyalFlush(hand), false)
    });
    
    it("not royal flush one joker", function() {
        let card1 = new Card(CARD_MARK.SPADE, 10)
        let card2 = new Card(CARD_MARK.SPADE, 11) 
        let card3 = new Card(CARD_MARK.SPADE, 12)
        let card4 = new Card(CARD_MARK.SPADE, 13)
        let card5 = new Card(CARD_MARK.JOKER, JOKER_CARD_NUMBER)
        
        let hand = [card1, card2, card3, card4, card5]
        
        var isRoyalFlush = roleModule.__get__("isRoyalFlush")
        
        assert.equal(isRoyalFlush(hand), false)
    });
    
    it("not royal flush two joker", function() {
        let card1 = new Card(CARD_MARK.JOKER, JOKER_CARD_NUMBER)
        let card2 = new Card(CARD_MARK.DIAMOND, 10) 
        let card3 = new Card(CARD_MARK.DIAMOND, 13)
        let card4 = new Card(CARD_MARK.DIAMOND, 12)
        let card5 = new Card(CARD_MARK.JOKER, JOKER_CARD_NUMBER)
        
        let hand = [card1, card2, card3, card4, card5]
        
        var isRoyalFlush = roleModule.__get__("isRoyalFlush")
        
        assert.equal(isRoyalFlush(hand), false)
    });
});


/**
* five card test
*/
describe("test role five card", function() {
    it("five card one joker", function() {
        let card1 = new Card(CARD_MARK.SPADE, 7)
        let card2 = new Card(CARD_MARK.DIAMOND, 7) 
        let card3 = new Card(CARD_MARK.HEART, 7)
        let card4 = new Card(CARD_MARK.CLUB, 7)
        let card5 = new Card(CARD_MARK.JOKER, JOKER_CARD_NUMBER)
        
        let hand = [card1, card2, card3, card4, card5]
        
        var isFiveCard = roleModule.__get__("isFiveCard")
        
        assert.equal(isFiveCard(hand), true)
    });
    
    it("not five card one joker", function() {
        let card1 = new Card(CARD_MARK.SPADE, 8)
        let card2 = new Card(CARD_MARK.DIAMOND, 8) 
        let card3 = new Card(CARD_MARK.HEART, 8)
        let card4 = new Card(CARD_MARK.CLUB, 2)
        let card5 = new Card(CARD_MARK.JOKER, JOKER_CARD_NUMBER)
        
        let hand = [card1, card2, card3, card4, card5]
        
        var isFiveCard = roleModule.__get__("isFiveCard")
        
        assert.equal(isFiveCard(hand), false)
    });
    
    it("five card two joker", function() {
        let card1 = new Card(CARD_MARK.SPADE, 10)
        let card2 = new Card(CARD_MARK.DIAMOND, 10) 
        let card3 = new Card(CARD_MARK.JOKER, JOKER_CARD_NUMBER)
        let card4 = new Card(CARD_MARK.HEART, 10)
        let card5 = new Card(CARD_MARK.JOKER, JOKER_CARD_NUMBER)
        
        let hand = [card1, card2, card3, card4, card5]
        
        var isFiveCard = roleModule.__get__("isFiveCard")
        
        assert.equal(isFiveCard(hand), true)
    });
    
    it("not five card two joker", function() {
        let card1 = new Card(CARD_MARK.SPADE, 11)
        let card2 = new Card(CARD_MARK.DIAMOND, 10) 
        let card3 = new Card(CARD_MARK.JOKER, JOKER_CARD_NUMBER)
        let card4 = new Card(CARD_MARK.HEART, 11)
        let card5 = new Card(CARD_MARK.JOKER, JOKER_CARD_NUMBER)
        
        let hand = [card1, card2, card3, card4, card5]
        
        var isFiveCard = roleModule.__get__("isFiveCard")
        
        assert.equal(isFiveCard(hand), false)
    });
});

/**
* straight flush test
*/
describe("test role straight flush", function() {
    it("straight flush no joker", function() {
        let card1 = new Card(CARD_MARK.DIAMOND, 9)
        let card2 = new Card(CARD_MARK.DIAMOND, 13) 
        let card3 = new Card(CARD_MARK.DIAMOND, 11)
        let card4 = new Card(CARD_MARK.DIAMOND, 12)
        let card5 = new Card(CARD_MARK.DIAMOND, 10)
        
        let hand = [card1, card2, card3, card4, card5]
        
        var isStraightFlush = roleModule.__get__("isStraightFlush")
        
        assert.equal(isStraightFlush(hand), true)
    });
    
    it("not straight flush no joker not flush", function() {
        let card1 = new Card(CARD_MARK.DIAMOND, 9)
        let card2 = new Card(CARD_MARK.DIAMOND, 13) 
        let card3 = new Card(CARD_MARK.SPADE, 11)
        let card4 = new Card(CARD_MARK.DIAMOND, 12)
        let card5 = new Card(CARD_MARK.DIAMOND, 10)
        
        let hand = [card1, card2, card3, card4, card5]
        
        var isStraightFlush = roleModule.__get__("isStraightFlush")
        
        assert.equal(isStraightFlush(hand), false)
    });
    
    it("not straight flush no joker not straight", function() {
        let card1 = new Card(CARD_MARK.DIAMOND, 8)
        let card2 = new Card(CARD_MARK.DIAMOND, 13) 
        let card3 = new Card(CARD_MARK.DIAMOND, 11)
        let card4 = new Card(CARD_MARK.DIAMOND, 12)
        let card5 = new Card(CARD_MARK.DIAMOND, 10)
        
        let hand = [card1, card2, card3, card4, card5]
        
        var isStraightFlush = roleModule.__get__("isStraightFlush")
        
        assert.equal(isStraightFlush(hand), false)
    });
    
    it("straight flush one joker", function() {
        let card1 = new Card(CARD_MARK.JOKER, JOKER_CARD_NUMBER)
        let card2 = new Card(CARD_MARK.DIAMOND, 13) 
        let card3 = new Card(CARD_MARK.DIAMOND, 11)
        let card4 = new Card(CARD_MARK.DIAMOND, 12)
        let card5 = new Card(CARD_MARK.DIAMOND, 1)
        
        let hand = [card1, card2, card3, card4, card5]
        
        var isStraightFlush = roleModule.__get__("isStraightFlush")
        
        assert.equal(isStraightFlush(hand), true)
    });
    
    it("not straight flush one joker not flush", function() {
        let card1 = new Card(CARD_MARK.DIAMOND, 9)
        let card2 = new Card(CARD_MARK.SPADE, 13) 
        let card3 = new Card(CARD_MARK.JOKER, JOKER_CARD_NUMBER)
        let card4 = new Card(CARD_MARK.DIAMOND, 12)
        let card5 = new Card(CARD_MARK.DIAMOND, 10)
        
        let hand = [card1, card2, card3, card4, card5]
        
        var isStraightFlush = roleModule.__get__("isStraightFlush")
        
        assert.equal(isStraightFlush(hand), false)
    });
    
    it("not straight flush one joker not straight", function() {
        let card1 = new Card(CARD_MARK.DIAMOND, 8)
        let card2 = new Card(CARD_MARK.DIAMOND, 13) 
        let card3 = new Card(CARD_MARK.JOKER, JOKER_CARD_NUMBER)
        let card4 = new Card(CARD_MARK.DIAMOND, 12)
        let card5 = new Card(CARD_MARK.DIAMOND, 10)
        
        let hand = [card1, card2, card3, card4, card5]
        
        var isStraightFlush = roleModule.__get__("isStraightFlush")
        
        assert.equal(isStraightFlush(hand), false)
    });
    
    it("straight flush two joker", function() {
        let card1 = new Card(CARD_MARK.JOKER, JOKER_CARD_NUMBER)
        let card2 = new Card(CARD_MARK.DIAMOND, 13) 
        let card3 = new Card(CARD_MARK.DIAMOND, 11)
        let card4 = new Card(CARD_MARK.DIAMOND, 12)
        let card5 = new Card(CARD_MARK.JOKER, JOKER_CARD_NUMBER)
        
        let hand = [card1, card2, card3, card4, card5]
        
        var isStraightFlush = roleModule.__get__("isStraightFlush")
        
        assert.equal(isStraightFlush(hand), true)
    });
    
    it("not straight flush two joker not flush", function() {
        let card1 = new Card(CARD_MARK.DIAMOND, 9)
        let card2 = new Card(CARD_MARK.SPADE, 13) 
        let card3 = new Card(CARD_MARK.JOKER, JOKER_CARD_NUMBER)
        let card4 = new Card(CARD_MARK.DIAMOND, 12)
        let card5 = new Card(CARD_MARK.JOKER, JOKER_CARD_NUMBER)
        
        let hand = [card1, card2, card3, card4, card5]
        
        var isStraightFlush = roleModule.__get__("isStraightFlush")
        
        assert.equal(isStraightFlush(hand), false)
    });
    
    it("not straight flush two joker not straight", function() {
        let card1 = new Card(CARD_MARK.DIAMOND, 8)
        let card2 = new Card(CARD_MARK.DIAMOND, 13) 
        let card3 = new Card(CARD_MARK.JOKER, JOKER_CARD_NUMBER)
        let card4 = new Card(CARD_MARK.DIAMOND, 12)
        let card5 = new Card(CARD_MARK.JOKER, JOKER_CARD_NUMBER)
        
        let hand = [card1, card2, card3, card4, card5]
        
        var isStraightFlush = roleModule.__get__("isStraightFlush")
        
        assert.equal(isStraightFlush(hand), false)
    });
});


/**
* four card test
*/
describe("test role four card", function() {
    it("four card no joker", function() {
        let card1 = new Card(CARD_MARK.SPADE, 1)
        let card2 = new Card(CARD_MARK.DIAMOND, 13) 
        let card3 = new Card(CARD_MARK.HEART, 1)
        let card4 = new Card(CARD_MARK.DIAMOND, 1)
        let card5 = new Card(CARD_MARK.CLUB, 1)
        
        let hand = [card1, card2, card3, card4, card5]
        
        var isFourCard = roleModule.__get__("isFourCard")
        
        assert.equal(isFourCard(hand), true)
    });
    
    it("not four card no joker", function() {
        let card1 = new Card(CARD_MARK.SPADE, 1)
        let card2 = new Card(CARD_MARK.DIAMOND, 1) 
        let card3 = new Card(CARD_MARK.HEART, 13)
        let card4 = new Card(CARD_MARK.DIAMOND, 13)
        let card5 = new Card(CARD_MARK.CLUB, 13)
        
        let hand = [card1, card2, card3, card4, card5]
        
        var isFourCard = roleModule.__get__("isFourCard")
        
        assert.equal(isFourCard(hand), false)
    });
    
    it("four card one joker", function() {
        let card1 = new Card(CARD_MARK.SPADE, 6)
        let card2 = new Card(CARD_MARK.SPADE, 13) 
        let card3 = new Card(CARD_MARK.HEART, 6)
        let card4 = new Card(CARD_MARK.CLUB, 6)
        let card5 = new Card(CARD_MARK.JOKER, JOKER_CARD_NUMBER)
        
        let hand = [card1, card2, card3, card4, card5]
        
        var isFourCard = roleModule.__get__("isFourCard")
        
        assert.equal(isFourCard(hand), true)
    });
    
    it("not four card one joker", function() {
        let card1 = new Card(CARD_MARK.SPADE, 4)
        let card2 = new Card(CARD_MARK.DIAMOND, 4) 
        let card3 = new Card(CARD_MARK.HEART, 13)
        let card4 = new Card(CARD_MARK.CLUB, 13)
        let card5 = new Card(CARD_MARK.JOKER, JOKER_CARD_NUMBER)
        
        let hand = [card1, card2, card3, card4, card5]
        
        var isFourCard = roleModule.__get__("isFourCard")
        
        assert.equal(isFourCard(hand), false)
    });
    
    it("four card two joker", function() {
        let card1 = new Card(CARD_MARK.SPADE, 10)
        let card2 = new Card(CARD_MARK.DIAMOND, 5) 
        let card3 = new Card(CARD_MARK.JOKER, JOKER_CARD_NUMBER)
        let card4 = new Card(CARD_MARK.HEART, 10)
        let card5 = new Card(CARD_MARK.JOKER, JOKER_CARD_NUMBER)
        
        let hand = [card1, card2, card3, card4, card5]
        
        var isFourCard = roleModule.__get__("isFourCard")
        
        assert.equal(isFourCard(hand), true)
    });
    
    it("not four card two joker", function() {
        let card1 = new Card(CARD_MARK.SPADE, 11)
        let card2 = new Card(CARD_MARK.DIAMOND, 10) 
        let card3 = new Card(CARD_MARK.JOKER, JOKER_CARD_NUMBER)
        let card4 = new Card(CARD_MARK.HEART, 9)
        let card5 = new Card(CARD_MARK.JOKER, JOKER_CARD_NUMBER)
        
        let hand = [card1, card2, card3, card4, card5]
        
        var isFourCard = roleModule.__get__("isFourCard")
        
        assert.equal(isFourCard(hand), false)
    });
});


/**
* full hause test
*/
describe("test role full hause", function() {
    it("full hause no joker", function() {
        let card1 = new Card(CARD_MARK.SPADE, 1)
        let card2 = new Card(CARD_MARK.SPADE, 13) 
        let card3 = new Card(CARD_MARK.HEART, 1)
        let card4 = new Card(CARD_MARK.CLUB, 13)
        let card5 = new Card(CARD_MARK.CLUB, 1)
        
        let hand = [card1, card2, card3, card4, card5]
        
        var isFullHause = roleModule.__get__("isFullHause")
        
        assert.equal(isFullHause(hand), true)
    });

    it("not full hause no joker", function() {
        let card1 = new Card(CARD_MARK.SPADE, 1)
        let card2 = new Card(CARD_MARK.SPADE, 13) 
        let card3 = new Card(CARD_MARK.HEART, 1)
        let card4 = new Card(CARD_MARK.CLUB, 12)
        let card5 = new Card(CARD_MARK.CLUB, 1)
        
        let hand = [card1, card2, card3, card4, card5]
        
        var isFullHause = roleModule.__get__("isFullHause")
        
        assert.equal(isFullHause(hand), false)
    });
    
    it("full hause one joker", function() {
        let card1 = new Card(CARD_MARK.SPADE, 6)
        let card2 = new Card(CARD_MARK.SPADE, 13) 
        let card3 = new Card(CARD_MARK.HEART, 6)
        let card4 = new Card(CARD_MARK.CLUB, 13)
        let card5 = new Card(CARD_MARK.JOKER, JOKER_CARD_NUMBER)
        
        let hand = [card1, card2, card3, card4, card5]
        
        var isFullHause = roleModule.__get__("isFullHause")
        
        assert.equal(isFullHause(hand), true)
    });
    
    it("not full hause one joker", function() {
        let card1 = new Card(CARD_MARK.SPADE, 1)
        let card2 = new Card(CARD_MARK.SPADE, 1) 
        let card3 = new Card(CARD_MARK.HEART, 13)
        let card4 = new Card(CARD_MARK.CLUB, 3)
        let card5 = new Card(CARD_MARK.JOKER, JOKER_CARD_NUMBER)
        
        let hand = [card1, card2, card3, card4, card5]
        
        var isFullHause = roleModule.__get__("isFullHause")
        
        assert.equal(isFullHause(hand), false)
    });
    
    it("full hause two joker", function() {
        let card1 = new Card(CARD_MARK.SPADE, 10)
        let card2 = new Card(CARD_MARK.DIAMOND, 10) 
        let card3 = new Card(CARD_MARK.JOKER, JOKER_CARD_NUMBER)
        let card4 = new Card(CARD_MARK.HEART, 10)
        let card5 = new Card(CARD_MARK.JOKER, JOKER_CARD_NUMBER)
        
        let hand = [card1, card2, card3, card4, card5]
        
        var isFullHause = roleModule.__get__("isFullHause")
        
        assert.equal(isFullHause(hand), true)
    });
    
    it("full hause two joker", function() {
        let card1 = new Card(CARD_MARK.SPADE, 9)
        let card2 = new Card(CARD_MARK.DIAMOND, 10) 
        let card3 = new Card(CARD_MARK.JOKER, JOKER_CARD_NUMBER)
        let card4 = new Card(CARD_MARK.HEART, 9)
        let card5 = new Card(CARD_MARK.JOKER, JOKER_CARD_NUMBER)
        
        let hand = [card1, card2, card3, card4, card5]
        
        var isFullHause = roleModule.__get__("isFullHause")
        
        assert.equal(isFullHause(hand), true)
    });

    it("not full hause two joker", function() {
        let card1 = new Card(CARD_MARK.SPADE, 8)
        let card2 = new Card(CARD_MARK.DIAMOND, 10) 
        let card3 = new Card(CARD_MARK.JOKER, JOKER_CARD_NUMBER)
        let card4 = new Card(CARD_MARK.HEART, 9)
        let card5 = new Card(CARD_MARK.JOKER, JOKER_CARD_NUMBER)
        
        let hand = [card1, card2, card3, card4, card5]
        
        var isFullHause = roleModule.__get__("isFullHause")
        
        assert.equal(isFullHause(hand), false)
    });
});



/**
* flush test
*/
describe("test role flush", function() {
    it("flush no joker", function() {
        let card1 = new Card(CARD_MARK.SPADE, 3)
        let card2 = new Card(CARD_MARK.SPADE, 12) 
        let card3 = new Card(CARD_MARK.SPADE, 6)
        let card4 = new Card(CARD_MARK.SPADE, 7)
        let card5 = new Card(CARD_MARK.SPADE, 10)
        
        let hand = [card1, card2, card3, card4, card5]
        
        var isFlush = roleModule.__get__("isFlush")
        
        assert.equal(isFlush(hand), true)
    });
    
    it("not flush no joker", function() {
        let card1 = new Card(CARD_MARK.SPADE, 3)
        let card2 = new Card(CARD_MARK.SPADE, 12) 
        let card3 = new Card(CARD_MARK.HEART, 6)
        let card4 = new Card(CARD_MARK.SPADE, 7)
        let card5 = new Card(CARD_MARK.SPADE, 10)
        
        let hand = [card1, card2, card3, card4, card5]
        
        var isFlush = roleModule.__get__("isFlush")
        
        assert.equal(isFlush(hand), false)
    });
    
    it("flush one joker", function() {
        let card1 = new Card(CARD_MARK.HEART, 3)
        let card2 = new Card(CARD_MARK.HEART, 12) 
        let card3 = new Card(CARD_MARK.HEART, 11)
        let card4 = new Card(CARD_MARK.HEART, 4)
        let card5 = new Card(CARD_MARK.JOKER, JOKER_CARD_NUMBER)
        
        let hand = [card1, card2, card3, card4, card5]
        
        var isFlush = roleModule.__get__("isFlush")
        
        assert.equal(isFlush(hand), true)
    });
    
    it("not flush one joker", function() {
        let card1 = new Card(CARD_MARK.HEART, 3)
        let card2 = new Card(CARD_MARK.SPADE, 12) 
        let card3 = new Card(CARD_MARK.HEART, 11)
        let card4 = new Card(CARD_MARK.HEART, 4)
        let card5 = new Card(CARD_MARK.JOKER, JOKER_CARD_NUMBER)
        
        let hand = [card1, card2, card3, card4, card5]
        
        var isFlush = roleModule.__get__("isFlush")
        
        assert.equal(isFlush(hand), false)
    });
    
    it("flush two joker", function() {
        let card1 = new Card(CARD_MARK.JOKER, JOKER_CARD_NUMBER)
        let card2 = new Card(CARD_MARK.CLUB, 12) 
        let card3 = new Card(CARD_MARK.CLUB, 11)
        let card4 = new Card(CARD_MARK.CLUB, 3)
        let card5 = new Card(CARD_MARK.JOKER, JOKER_CARD_NUMBER)
        
        let hand = [card1, card2, card3, card4, card5]
        
        var isFlush = roleModule.__get__("isFlush")
        
        assert.equal(isFlush(hand), true)
    });
    
    it("not flush two joker", function() {
        let card1 = new Card(CARD_MARK.JOKER, JOKER_CARD_NUMBER)
        let card2 = new Card(CARD_MARK.CLUB, 12) 
        let card3 = new Card(CARD_MARK.DIAMOND, 11)
        let card4 = new Card(CARD_MARK.CLUB, 3)
        let card5 = new Card(CARD_MARK.JOKER, JOKER_CARD_NUMBER)
        
        let hand = [card1, card2, card3, card4, card5]
        
        var isFlush = roleModule.__get__("isFlush")
        
        assert.equal(isFlush(hand), false)
    });
});

/**
* straight test
*/
describe("test role straight", function() {
    it("straight no joker", function() {
        let card1 = new Card(CARD_MARK.SPADE, 3)
        let card2 = new Card(CARD_MARK.SPADE, 4) 
        let card3 = new Card(CARD_MARK.HEART, 7)
        let card4 = new Card(CARD_MARK.CLUB, 6)
        let card5 = new Card(CARD_MARK.CLUB, 5)
        
        let hand = [card1, card2, card3, card4, card5]
        
        var isStraight = roleModule.__get__("isStraight")
        
        assert.equal(isStraight(hand), true)
    });
    
    it("straight no joker 10 ~ 1", function() {
        let card1 = new Card(CARD_MARK.SPADE, 1)
        let card2 = new Card(CARD_MARK.SPADE, 12) 
        let card3 = new Card(CARD_MARK.HEART, 13)
        let card4 = new Card(CARD_MARK.CLUB, 10)
        let card5 = new Card(CARD_MARK.CLUB, 11)
        
        let hand = [card1, card2, card3, card4, card5]
        
        var isStraight = roleModule.__get__("isStraight")
        
        assert.equal(isStraight(hand), true)
    });
    
    it("not straight no joker 11 ~ 2", function() {
        let card1 = new Card(CARD_MARK.SPADE, 12)
        let card2 = new Card(CARD_MARK.SPADE, 11) 
        let card3 = new Card(CARD_MARK.HEART, 13)
        let card4 = new Card(CARD_MARK.CLUB, 1)
        let card5 = new Card(CARD_MARK.CLUB, 2)
        
        let hand = [card1, card2, card3, card4, card5]
        
        var isStraight = roleModule.__get__("isStraight")
        
        assert.equal(isStraight(hand), false)
    });
    
    it("not straight no joker", function() {
        let card1 = new Card(CARD_MARK.SPADE, 1)
        let card2 = new Card(CARD_MARK.SPADE, 2) 
        let card3 = new Card(CARD_MARK.HEART, 13)
        let card4 = new Card(CARD_MARK.CLUB, 4)
        let card5 = new Card(CARD_MARK.CLUB, 5)
        
        let hand = [card1, card2, card3, card4, card5]
        
        var isStraight = roleModule.__get__("isStraight")
        
        assert.equal(isStraight(hand), false)
    });
    
    it("straight one joker 9 ~ 13", function() {
        let card1 = new Card(CARD_MARK.SPADE, 10)
        let card2 = new Card(CARD_MARK.SPADE, 9) 
        let card3 = new Card(CARD_MARK.HEART, 11)
        let card4 = new Card(CARD_MARK.CLUB, 13)
        let card5 = new Card(CARD_MARK.JOKER, JOKER_CARD_NUMBER)
        
        let hand = [card1, card2, card3, card4, card5]
        
        var isStraight = roleModule.__get__("isStraight")
        
        assert.equal(isStraight(hand), true)
    });
    
    it("straight one joker 10 ~ 12 1", function() {
        let card1 = new Card(CARD_MARK.SPADE, 12)
        let card2 = new Card(CARD_MARK.SPADE, 1) 
        let card3 = new Card(CARD_MARK.HEART, 11)
        let card4 = new Card(CARD_MARK.CLUB, 10)
        let card5 = new Card(CARD_MARK.JOKER, JOKER_CARD_NUMBER)
        
        let hand = [card1, card2, card3, card4, card5]
        
        var isStraight = roleModule.__get__("isStraight")
        
        assert.equal(isStraight(hand), true)
    });
    
    it("not straight one joker 12 ~ 13 1 ~ 2", function() {
        let card1 = new Card(CARD_MARK.SPADE, 12)
        let card2 = new Card(CARD_MARK.SPADE, 1) 
        let card3 = new Card(CARD_MARK.HEART, 13)
        let card4 = new Card(CARD_MARK.CLUB, 2)
        let card5 = new Card(CARD_MARK.JOKER, JOKER_CARD_NUMBER)
        
        let hand = [card1, card2, card3, card4, card5]
        
        var isStraight = roleModule.__get__("isStraight")
        
        assert.equal(isStraight(hand), false)
    });
    
    it("not straight one joker 5 ~ 6 10 ~ 11", function() {
        let card1 = new Card(CARD_MARK.SPADE, 5)
        let card2 = new Card(CARD_MARK.SPADE, 6) 
        let card3 = new Card(CARD_MARK.HEART, 10)
        let card4 = new Card(CARD_MARK.CLUB, 11)
        let card5 = new Card(CARD_MARK.JOKER, JOKER_CARD_NUMBER)
        
        let hand = [card1, card2, card3, card4, card5]
        
        var isStraight = roleModule.__get__("isStraight")
        
        assert.equal(isStraight(hand), false)
    });
    
    it("straight two joker 11 ~ 12 1", function() {
        let card1 = new Card(CARD_MARK.JOKER, JOKER_CARD_NUMBER)
        let card2 = new Card(CARD_MARK.SPADE, 12) 
        let card3 = new Card(CARD_MARK.HEART, 11)
        let card4 = new Card(CARD_MARK.CLUB, 1)
        let card5 = new Card(CARD_MARK.JOKER, JOKER_CARD_NUMBER)
        
        let hand = [card1, card2, card3, card4, card5]
        
        var isStraight = roleModule.__get__("isStraight")
        
        assert.equal(isStraight(hand), true)
    });
    
    it("straight two joker 12 ~ 13 1", function() {
        let card1 = new Card(CARD_MARK.JOKER, JOKER_CARD_NUMBER)
        let card2 = new Card(CARD_MARK.SPADE, 12) 
        let card3 = new Card(CARD_MARK.HEART, 13)
        let card4 = new Card(CARD_MARK.CLUB, 1)
        let card5 = new Card(CARD_MARK.JOKER, JOKER_CARD_NUMBER)
        
        let hand = [card1, card2, card3, card4, card5]
        
        var isStraight = roleModule.__get__("isStraight")
        
        assert.equal(isStraight(hand), true)
    });
    
    
    it("straight two joker 5 ~ 6 8", function() {
        let card1 = new Card(CARD_MARK.JOKER, JOKER_CARD_NUMBER)
        let card2 = new Card(CARD_MARK.SPADE, 8) 
        let card3 = new Card(CARD_MARK.HEART, 5)
        let card4 = new Card(CARD_MARK.CLUB, 6)
        let card5 = new Card(CARD_MARK.JOKER, JOKER_CARD_NUMBER)
        
        let hand = [card1, card2, card3, card4, card5]
        
        var isStraight = roleModule.__get__("isStraight")
        
        assert.equal(isStraight(hand), true)
    });
    
    it("straight two joker 6 ~ 7 10", function() {
        let card1 = new Card(CARD_MARK.JOKER, JOKER_CARD_NUMBER)
        let card2 = new Card(CARD_MARK.SPADE, 10) 
        let card3 = new Card(CARD_MARK.HEART, 6)
        let card4 = new Card(CARD_MARK.CLUB, 7)
        let card5 = new Card(CARD_MARK.JOKER, JOKER_CARD_NUMBER)
        
        let hand = [card1, card2, card3, card4, card5]
        
        var isStraight = roleModule.__get__("isStraight")
        
        assert.equal(isStraight(hand), true)
    });
    
    it("not straight two joker 6 ~ 7 11", function() {
        let card1 = new Card(CARD_MARK.JOKER, JOKER_CARD_NUMBER)
        let card2 = new Card(CARD_MARK.SPADE, 11) 
        let card3 = new Card(CARD_MARK.HEART, 6)
        let card4 = new Card(CARD_MARK.CLUB, 7)
        let card5 = new Card(CARD_MARK.JOKER, JOKER_CARD_NUMBER)
        
        let hand = [card1, card2, card3, card4, card5]
        
        var isStraight = roleModule.__get__("isStraight")
        
        assert.equal(isStraight(hand), false)
    });
    
    it("not straight two joker 10 1 ~ 2", function() {
        let card1 = new Card(CARD_MARK.JOKER, JOKER_CARD_NUMBER)
        let card2 = new Card(CARD_MARK.SPADE, 2) 
        let card3 = new Card(CARD_MARK.HEART, 1)
        let card4 = new Card(CARD_MARK.CLUB, 10)
        let card5 = new Card(CARD_MARK.JOKER, JOKER_CARD_NUMBER)
        
        let hand = [card1, card2, card3, card4, card5]
        
        var isStraight = roleModule.__get__("isStraight")
        
        assert.equal(isStraight(hand), false)
    });
    
    
    it("not straight two joker 1 6 ~ 7", function() {
        let card1 = new Card(CARD_MARK.JOKER, JOKER_CARD_NUMBER)
        let card2 = new Card(CARD_MARK.SPADE, 6) 
        let card3 = new Card(CARD_MARK.HEART, 1)
        let card4 = new Card(CARD_MARK.CLUB, 7)
        let card5 = new Card(CARD_MARK.JOKER, JOKER_CARD_NUMBER)
        
        let hand = [card1, card2, card3, card4, card5]
        
        var isStraight = roleModule.__get__("isStraight")
        
        assert.equal(isStraight(hand), false)
    });
});

/**
* three card test
*/
describe("test role three card", function() {
    it("three card no joker", function() {
        let card1 = new Card(CARD_MARK.SPADE, 3)
        let card2 = new Card(CARD_MARK.SPADE, 12) 
        let card3 = new Card(CARD_MARK.HEART, 3)
        let card4 = new Card(CARD_MARK.CLUB, 3)
        let card5 = new Card(CARD_MARK.CLUB, 6)
        
        let hand = [card1, card2, card3, card4, card5]
        
        var isThreeCard = roleModule.__get__("isThreeCard")
        
        assert.equal(isThreeCard(hand), true)
    });

    it("not three card no joker", function() {
        let card1 = new Card(CARD_MARK.SPADE, 3)
        let card2 = new Card(CARD_MARK.SPADE, 12) 
        let card3 = new Card(CARD_MARK.HEART, 3)
        let card4 = new Card(CARD_MARK.CLUB, 2)
        let card5 = new Card(CARD_MARK.CLUB, 6)
        
        let hand = [card1, card2, card3, card4, card5]
        
        var isThreeCard = roleModule.__get__("isThreeCard")
        
        assert.equal(isThreeCard(hand), false)
    });
    
    it("three card one joker", function() {
        let card1 = new Card(CARD_MARK.SPADE, 3)
        let card2 = new Card(CARD_MARK.SPADE, 12) 
        let card3 = new Card(CARD_MARK.HEART, 11)
        let card4 = new Card(CARD_MARK.CLUB, 3)
        let card5 = new Card(CARD_MARK.JOKER, JOKER_CARD_NUMBER)
        
        let hand = [card1, card2, card3, card4, card5]
        
        var isThreeCard = roleModule.__get__("isThreeCard")
        
        assert.equal(isThreeCard(hand), true)
    });

    it("not three card one joker", function() {
        let card1 = new Card(CARD_MARK.SPADE, 3)
        let card2 = new Card(CARD_MARK.SPADE, 12) 
        let card3 = new Card(CARD_MARK.HEART, 11)
        let card4 = new Card(CARD_MARK.CLUB, 2)
        let card5 = new Card(CARD_MARK.JOKER, JOKER_CARD_NUMBER)
        
        let hand = [card1, card2, card3, card4, card5]
        
        var isThreeCard = roleModule.__get__("isThreeCard")
        
        assert.equal(isThreeCard(hand), false)
    });
    
    it("three card two joker", function() {
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
* two pair test
*/
describe("test role two pair", function() {
    it("two pair no joker", function() {
        let card1 = new Card(CARD_MARK.SPADE, 3)
        let card2 = new Card(CARD_MARK.SPADE, 4) 
        let card3 = new Card(CARD_MARK.HEART, 3)
        let card4 = new Card(CARD_MARK.CLUB, 2)
        let card5 = new Card(CARD_MARK.CLUB, 4)
        
        let hand = [card1, card2, card3, card4, card5]
        
        var isTwoPair = roleModule.__get__("isTwoPair")
        
        assert.equal(isTwoPair(hand), true)
    });
    
    it("not two pair no joker", function() {
        let card1 = new Card(CARD_MARK.SPADE, 3)
        let card2 = new Card(CARD_MARK.SPADE, 5) 
        let card3 = new Card(CARD_MARK.HEART, 3)
        let card4 = new Card(CARD_MARK.CLUB, 2)
        let card5 = new Card(CARD_MARK.CLUB, 4)
        
        let hand = [card1, card2, card3, card4, card5]
        
        var isTwoPair = roleModule.__get__("isTwoPair")
        
        assert.equal(isTwoPair(hand), false)
    });
});

/**
* one pair test
*/
describe("test role one pair", function() {
    it("one pair no joker", function() {
        let card1 = new Card(CARD_MARK.SPADE, 3)
        let card2 = new Card(CARD_MARK.SPADE, 5) 
        let card3 = new Card(CARD_MARK.HEART, 3)
        let card4 = new Card(CARD_MARK.CLUB, 2)
        let card5 = new Card(CARD_MARK.CLUB, 4)
        
        let hand = [card1, card2, card3, card4, card5]
        
        var isOnePair = roleModule.__get__("isOnePair")
        
        assert.equal(isOnePair(hand), true)
    });
    
    it("not one pair no joker", function() {
        let card1 = new Card(CARD_MARK.SPADE, 3)
        let card2 = new Card(CARD_MARK.SPADE, 5) 
        let card3 = new Card(CARD_MARK.HEART, 10)
        let card4 = new Card(CARD_MARK.CLUB, 2)
        let card5 = new Card(CARD_MARK.CLUB, 9)
        
        let hand = [card1, card2, card3, card4, card5]
        
        var isOnePair = roleModule.__get__("isOnePair")
        
        assert.equal(isOnePair(hand), false)
    });

    it("one pair one joker", function() {
        let card1 = new Card(CARD_MARK.SPADE, 3)
        let card2 = new Card(CARD_MARK.SPADE, 5) 
        let card3 = new Card(CARD_MARK.HEART, 10)
        let card4 = new Card(CARD_MARK.CLUB, 2)
        let card5 = new Card(CARD_MARK.JOKER, JOKER_CARD_NUMBER)
        
        let hand = [card1, card2, card3, card4, card5]
        
        var isOnePair = roleModule.__get__("isOnePair")
        
        assert.equal(isOnePair(hand), true)
    });
});