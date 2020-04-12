import { Card, CARD_MARK, JOKER_CARD_NUMBER } from "./card.js"

export var Deck = (function() {

    var Deck = function() {
        this.deckCards = createDeckCards()
    }

    var prototype = Deck.prototype;

    /**
     * draw one
     */
    prototype.drawOne = function() {
        return this.deckCards.shift()
    }

    return Deck
})()

/**
 * create deck
 */
function createDeckCards() {
    let deckCards = []
    Array.prototype.push.apply(deckCards, createCards(CARD_MARK.SPADE))
    Array.prototype.push.apply(deckCards, createCards(CARD_MARK.HEART))
    Array.prototype.push.apply(deckCards, createCards(CARD_MARK.DIAMOND))
    Array.prototype.push.apply(deckCards, createCards(CARD_MARK.CLUB))
    Array.prototype.push.apply(deckCards, createJocker())

    // 山札をシャッフル
    var length = deckCards.length;
    //シャッフルアルゴリズム
    while (length) {
        var j = Math.floor(Math.random() * length);
        var t = deckCards[--length];
        deckCards[length] = deckCards[j];
        deckCards[j] = t;
    }
    return deckCards
}

/**
 * ジョーカー生成
 */
function createJocker() {
    let cards = []
    for (var i = 0; i < 2; i++) {
        let card = new Card(CARD_MARK.JOKER, JOKER_CARD_NUMBER)
        cards.push(card)
    }
    return cards
}

/**
 * 指定したマークのカードを13枚
 */
function createCards(mark) {
    let cards = []
    for(var i = 1; i < 14; i++) {
        let card = new Card(mark, i)
        cards.push(card)
    }

    return cards
}