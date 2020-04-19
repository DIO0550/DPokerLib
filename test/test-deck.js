import { Deck } from '../lib/deck.js'
import { CARD_MARK, JOKER_CARD_NUMBER } from '../lib/card.js'
var assert = require('assert');

describe("deck", function() {
    it("test drawOne", function() {
        var deck = new Deck()
        let length = deck.deckCards.length
        for (var i = 0; i < length; i++) {
            let card = deck.drawOne()
        }
        assert.equal(deck.deckCards.length, 0)
    });
    
    it("test spade count", function() {
        var deck = new Deck()
        let spade = 0
        for (var card of deck.deckCards) {
            if (card.mark != CARD_MARK.SPADE) {
                continue
            }
            spade++
        }
        assert.equal(spade, 13)
    });
    
    it("test heart count", function() {
        var deck = new Deck()
        let heart = 0
        for (var card of deck.deckCards) {
            if (card.mark != CARD_MARK.HEART) {
                continue
            }
            heart++
        }
        assert.equal(heart, 13)
    });
    
    it("test diamond count", function() {
        var deck = new Deck()
        let diamond = 0
        for (var card of deck.deckCards) {
            if (card.mark != CARD_MARK.DIAMOND) {
                continue
            }
            diamond++
        }
        assert.equal(diamond, 13)
    });
    
    it("test club count", function() {
        var deck = new Deck()
        let club = 0
        for (var card of deck.deckCards) {
            if (card.mark != CARD_MARK.CLUB) {
                continue
            }
            club++
        }
        assert.equal(club, 13)
    });
    
    it("test joker count", function() {
        var deck = new Deck()
        let joker = 0
        let joker_number_count = 0
        for (var card of deck.deckCards) {
            if (card.number == JOKER_CARD_NUMBER) {
                joker_number_count++
            }
            
            if (card.mark == CARD_MARK.JOKER) {
                joker++
            }
        }
        assert.equal(joker, 2)
        assert.equal(joker_number_count, 2)
    });
    
    it("test number 1 count", function() {
        var deck = new Deck()
        let count = 0
        for (var card of deck.deckCards) {
            if (card.number == 1) {
                count++
            }
        }
        assert.equal(count, 4)
    });
    
    it("test number 2 count", function() {
        var deck = new Deck()
        let count = 0
        for (var card of deck.deckCards) {
            if (card.number == 2) {
                count++
            }
        }
        assert.equal(count, 4)
    });
    
    it("test number 3 count", function() {
        var deck = new Deck()
        let count = 0
        for (var card of deck.deckCards) {
            if (card.number == 3) {
                count++
            }
        }
        assert.equal(count, 4)
    });
    
    
    it("test number 4 count", function() {
        var deck = new Deck()
        let count = 0
        for (var card of deck.deckCards) {
            if (card.number == 4) {
                count++
            }
        }
        assert.equal(count, 4)
    });
    
    it("test number 5 count", function() {
        var deck = new Deck()
        let count = 0
        for (var card of deck.deckCards) {
            if (card.number == 5) {
                count++
            }
        }
        assert.equal(count, 4)
    });
    
    it("test number 6 count", function(){
        var deck = new Deck()
        let count = 0
        for (var card of deck.deckCards) {
            if (card.number == 6) {
                count++
            }
        }
        assert.equal(count, 4)
    });
    
    it("test number 7 count", function(){
        var deck = new Deck()
        let count = 0
        for (var card of deck.deckCards) {
            if (card.number == 7) {
                count++
            }
        }
        assert.equal(count, 4)
    });
    
    it("test number 8 count", function(){
        var deck = new Deck()
        let count = 0
        for (var card of deck.deckCards) {
            if (card.number == 8) {
                count++
            }
        }
        assert.equal(count, 4)
    });
    
    it("test number 9 count", function(){
        var deck = new Deck()
        let count = 0
        for (var card of deck.deckCards) {
            if (card.number == 9) {
                count++
            }
        }
        assert.equal(count, 4)
    });
    
    it("test number 10 count", function(){
        var deck = new Deck()
        let count = 0
        for (var card of deck.deckCards) {
            if (card.number == 10) {
                count++
            }
        }
        assert.equal(count, 4)
    });
    
    it("test number 11 count", function(){
        var deck = new Deck()
        let count = 0
        for (var card of deck.deckCards) {
            if (card.number == 11) {
                count++
            }
        }
        assert.equal(count, 4)
    });
    
    it("test number 12 count", function(){
        var deck = new Deck()
        let count = 0
        for (var card of deck.deckCards) {
            if (card.number == 3) {
                count++
            }
        }
        assert.equal(count, 4)
    });
    
    it("test number 13 count", function() {
        var deck = new Deck()
        let count = 0
        for (var card of deck.deckCards) {
            if (card.number == 13) {
                count++
            }
        }
        assert.equal(count, 4)
    });
    
});