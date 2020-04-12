import { Card, CARD_MARK, JOKER_CARD_NUMBER, HAND_COUNT } from "./card.js"

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
    if (!isFlush(hand)) {
        return false
    }

    
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
    let sortHand = sortHand(hand)
    // TODO: ジョーカーを考慮
    let result = ((sortHand[0].number == sortHand[1].number == sortHand[2].number == sortHand[3].number) || 
                  (sortHand[1].number == sortHand[2].number == sortHand[3].number == sortHand[4].number))

    return result
}

/**
 * フルハウス
 */
function isFullHause(hand) {
    let sortHand = sortHand(hand)

    // TODO: ジョーカーを考慮

    let result = ((sortHand[0].number == sortHand[1].number == sortHand[2].number && sortHand[3].number == sortHand[4].number) || 
                  (sortHand[0].number == sortHand[1].number && sortHand[2].number == sortHand[3].number == sortHand[4].number))

    return result
}

/**
 * フラッシュ
 */
function isFlush(hand) {
    let mark = hand[0]

    for (var i = 1; i < HAND_COUNT; i++) {
        let card = hand[i]
        if (card.mark == CARD_MARK.JOKER || mark == CARD_MARK.JOKER) {
            continue
        }

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
    let sortHand = sortHand(hand)
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
    let sortHand = sortHand(hand)
    for (var i = 0; i < 3; i++) {
        let startIndex = i
        let firstNumber = sortHand[i].number
        for (var j = startIndex + 1; j < startIndex + 2; j++) {
            let card = sortHand[i]
            if (firstNumber != card.number) {
                break
            }
            return true
        }
    }

    return false;
}

/**
 * ツーペア
 */
function isTwoPair(hand) {
    let sortHand = sortHand(hand)

    // TODO ジョーカー2枚なら、ツーペアは確定 

    let result = (sortHand[0] == sortHand[1] && sortHand[2] == sortHand[3]) || (sortHand[1] == sortHand[2] && sortHand[3] == sortHand[4])

    return result
}