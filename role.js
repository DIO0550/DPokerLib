import { Card, CARD_MARK, JOKER_CARD_NUMBER, HAND_COUNT } from "card.js"

const ROLE_LIST = {
    ROYAL_FLUSH: "ロイヤルストレートフラッシュ",
    STRATIGHT_FLUSH: "ストレートフラッシュ",
    FOUR_CARD: "フォーカード",
    FULL_HAUSE: "フルハウス",
    FLUSH: "フラッシュ",
    STRAIGHT: "ストレート",
    THREE_CARD: "スリーカード",
    TWO_PAIR: "ツーペア",
    HIGH_CARD: "役なし"
}

export function role(hand) {
    if (isRoyalFlush(hand)) {
        return ROLE_LIST.ROYAL_FLUSH
    }

    if (isStraightFlush(hand)) {
        return ROLE_LIST.STRATIGHT_FLUSH
    }

    if (isFourCard(card)) {
        return ROLE_LIST.FOUR_CARD
    }

    if (isFullHause(card)) {
        return ROLE_LIST.FOUR_CARD
    } 

    if (isFlush(card)) {
        return ROLE_LIST.FLUSH
    }

    if (isStraight(card)) {
        return ROLE_LIST.STRAIGHT
    }

    if (isThreeCard(card)) {
        return ROLE_LIST.THREE_CARD
    }

    if (isTwoPair(card)) {

    }
}

function compareNumber(obj1, obj2) {
    return obj1.number < obj2.number
}

function sortHand(hand) {
    let handCopy = Object.assign({}, hand);
    handCopy.sort(compareNumber)
    return handCopy
}

/**
 * ロイヤルストレートフラッシュ
 */
function isRoyalFlush(hand) {

}

/**
 * ストレートフラッシュ
 */
function isStraightFlush(hand) {
    return isStraight(hand) && isFlush(hand)
}

/**
 * フォーカード
 */
function isFourCard(hand) {
    
}

/**
 * フルハウス
 */
function isFullHause(hand) {

}

/**
 * フラッシュ
 */
function isFlush(hand) {
    let mark = hand[0]

    for (var i = 1; i < HAND_COUNT; i++) {
        let card = hand[i]
        if (card.mark != mark) {
            return false
        }
    }

    return true
}

/**
 * ストレート
 */
function isStraight(hand) {
    let sortHand = sortHand()
    let firstNumber = sortHand[0]

    let next = (firstNumber + 1)
    if (firstNumber == 1) {
        next = 10
    }

     for (var i = 1; i < HAND_COUNT; i++) {
        let card = hand[i]
        if (card.number != next) {
            return false
        }
        next++
     }
     return true;
}

/**
 * スリーカード
 */
function isThreeCard(hand) {
    
}

/**
 * ツーペア
 */
function isTwoPair(hand) {

}