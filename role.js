import { Card, CARD_MARK, JOKER_CARD_NUMBER } from "./card.js"

export const HAND_COUNT = 5

/**
 * ROLE LIST
 */
const ROLE_LIST = {
    ROYAL_FLUSH: "ROYAL_FLUSH",
    FIVE_CARD: "FIVE_CARD",
    STRATIGHT_FLUSH: "STRATIGHT_FLUSH",
    FOUR_CARD: "FOUR_CARD",
    FULL_HAUSE: "FULL_HAUSE",
    FLUSH: "FLUSH",
    STRAIGHT: "STRAIGHT",
    THREE_CARD: "THREE_CARD",
    TWO_PAIR: "TWO_PAIR",
    ONE_PAIRE: "ONE_PAIRE",
    HIGH_CARD: "HIGH_CARD"
}

/**
 * ROLE
 * 
 * return HAND ROLE
 */
export function role(hand) {
    if (isRoyalFlush(hand)) {
        return ROLE_LIST.ROYAL_FLUSH
    }

    if (isFiveCard(hand)) {
        return ROLE_LIST.FIVE_CARD
    }

    if (isStraightFlush(hand)) {
        return ROLE_LIST.STRATIGHT_FLUSH
    }

    if (isFourCard(hand)) {
        return ROLE_LIST.FOUR_CARD
    }

    if (isFullHause(hand)) {
        return ROLE_LIST.FOUR_CARD
    } 

    if (isFlush(hand)) {
        return ROLE_LIST.FLUSH
    }

    if (isStraight(hand)) {
        return ROLE_LIST.STRAIGHT
    }

    if (isThreeCard(hand)) {
        return ROLE_LIST.THREE_CARD
    }

    if (isTwoPair(hand)) {

    }

    if (isOnePair(hand)) {

    }

    return ROLE_LIST.HIGH_CARD
}

/**
 * compare card number 
 */
function compareNumber(obj1, obj2) {
    if (obj1.number < obj2.number) return -1
    if (obj1.number > obj2.number) return 1
    return 0
}

/**
 * sort hand
 */
function sortHand(hand) {
    let handCopy = [];
    Object.assign(handCopy , hand);
    handCopy.sort(compareNumber)
    return handCopy
}

/**
 * joker count
 */
function jokerCount(hand) {
    let count = 0
    for (var card of hand) {
        if (card.number = JOKER_CARD_NUMBER) {
            count++
        }
    }
    return count
}

/**
 * RoyalFlush
 */
function isRoyalFlush(hand) {
    if (!isStraight(hand)) {
        return false
    }
    let sortedHand = sortHand(hand)
    // Do not consider jokers
    let result =  (sortedHand[0].number == "1" || sortedHand[1].number == "10" || sortedHand[2].number == "11" || 
                   sortedHand[3].number == "12" || sortedHand[4].number == "13")
    return result

}

/**
 * FiveCard
 */
function isFiveCard(hand) {
    let sortedHand = sortHand(hand)
}

/**
 * Straight Flush
 */
function isStraightFlush(hand) {
    return isStraight(hand) && isFlush(hand)
}

/**
 * Four Card
 */
function isFourCard(hand) {
    let sortedHand = sortHand(hand)
    // TODO: ジョーカーを考慮
    let result = ((sortedHand[0].number == sortedHand[1].number == sortedHand[2].number == sortedHand[3].number) || 
                  (sortedHand[1].number == sortedHand[2].number == sortedHand[3].number == sortedHand[4].number))

    return result
}

/**
 * Full Hause
 */
function isFullHause(hand) {
    let sortedHand = sortHand(hand)

    // TODO: ジョーカーを考慮

    let result = ((sortedHand[0].number == sortedHand[1].number == sortedHand[2].number && sortedHand[3].number == sortedHand[4].number) || 
                  (sortedHand[0].number == sortedHand[1].number && sortedHand[2].number == sortedHand[3].number == sortedHand[4].number))

    return result
}

/**
 * Flush
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
 * Straight
 */
function isStraight(hand) {
    let sortedHand = sortHand(hand)
    let firstNumber = sortedHand[0]

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
 * Three Card
 */
function isThreeCard(hand) {
    let sortedHand = sortHand(hand)
    let jcount = jokerCount(hand)

    if (jcount == 2) {
        return true
    }

    if (jcount == 1) {
        for (var i = 0; i < 4; i++) {
            if (sortedHand[i] == sortedHand[i + 1]) {
                return true
            }
        }
        return false
    }

    for (var i = 0; i < 3; i++) {
        let startIndex = i
        let firstNumber = sortedHand[i].number
        for (var j = startIndex + 1; j < startIndex + 2; j++) {
            let card = sortedHand[i]
            if (firstNumber != card.number) {
                break
            }
            return true
        }
    }

    return false;
}

/**
 * Two Pair
 */
function isTwoPair(hand) {
    let sortedHand = sortHand(hand)
    let result = (sortedHand[0].number == sortedHand[1].number && sortedHand[2].number == sortedHand[3].number) || 
                 (sortedHand[1].number == sortedHand[2].number && sortedHand[3].number == sortedHand[4].number)

    return result
}

/**
 * One Pair
 */
function isOnePair(hand) {
    return false
}