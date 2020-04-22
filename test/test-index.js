var DPokerLib = require('../index.js');
var assert = require('assert');

describe("DPokerLib", function() {
    it("Card Mark", function() {
        assert.equal(typeof DPokerLib.card.CARD_MARK === 'undefined', false)
        assert.equal(typeof DPokerLib.card.CARD_MARK.SPADE === 'undefined', false)
        assert.equal(typeof DPokerLib.card.CARD_MARK.HEART === 'undefined', false)
        assert.equal(typeof DPokerLib.card.CARD_MARK.DIAMOND === 'undefined', false)
        assert.equal(typeof DPokerLib.card.CARD_MARK.CLUB === 'undefined', false)
        assert.equal(typeof DPokerLib.card.CARD_MARK.JOKER === 'undefined', false)
    })
    
    it("Card JOKER_CARD_NUMBER", function() {
        assert.equal(typeof DPokerLib.card.JOKER_CARD_NUMBER === 'undefined', false)
    })
    
    it("Deck", function() {
        let deck1 = new DPokerLib.deck.Deck()
        let length = deck1.deckCards.length
        for (var i = 0; i < length; i++) {
            let card = deck1.drawOne()
        }
        let deck2 = new DPokerLib.deck.Deck()
        
        assert.equal(deck1.deckCards.length, 0)
        assert.notEqual(deck1.deckCards.length, deck2.deckCards.length)
    });
    
    
    it("Role ROLE_LIST", function() {
        assert.equal(typeof DPokerLib.role.ROLE_LIST === 'undefined', false)
        assert.equal(typeof DPokerLib.role.ROLE_LIST.ROYAL_FLUSH === 'undefined', false)
        assert.equal(typeof DPokerLib.role.ROLE_LIST.FIVE_CARD === 'undefined', false)
        assert.equal(typeof DPokerLib.role.ROLE_LIST.STRATIGHT_FLUSH === 'undefined', false)
        assert.equal(typeof DPokerLib.role.ROLE_LIST.FOUR_CARD === 'undefined', false)
        assert.equal(typeof DPokerLib.role.ROLE_LIST.FULL_HAUSE === 'undefined', false)
        assert.equal(typeof DPokerLib.role.ROLE_LIST.FLUSH === 'undefined', false)
        assert.equal(typeof DPokerLib.role.ROLE_LIST.STRAIGHT === 'undefined', false)
        assert.equal(typeof DPokerLib.role.ROLE_LIST.THREE_CARD === 'undefined', false)
        assert.equal(typeof DPokerLib.role.ROLE_LIST.TWO_PAIR === 'undefined', false)
        assert.equal(typeof DPokerLib.role.ROLE_LIST.ONE_PAIR === 'undefined', false)
        assert.equal(typeof DPokerLib.role.ROLE_LIST.HIGH_CARD === 'undefined', false)
    })

    
    it("Role role", function() {
        assert.equal(typeof DPokerLib.role.role === 'undefined', false)
    })
});