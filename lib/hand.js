import { JOKER_CARD_NUMBER } from "./card.js"

const handCards_COUNT = 5

/**
 * HAND LIST
 */
export const HAND_LIST = {
    ROYAL_FLUSH: "ROYAL_FLUSH",
    FIVE_CARD: "FIVE_CARD",
    STRATIGHT_FLUSH: "STRATIGHT_FLUSH",
    FOUR_CARD: "FOUR_CARD",
    FULL_HAUSE: "FULL_HAUSE",
    FLUSH: "FLUSH",
    STRAIGHT: "STRAIGHT",
    THREE_CARD: "THREE_CARD",
    TWO_PAIR: "TWO_PAIR",
    ONE_PAIR: "ONE_PAIR",
    HIGH_CARD: "HIGH_CARD"
}

/**
 * Hand
 * 
 * return Poker Hand
 */
export function hand(handCards) {
    if (isRoyalFlush(handCards)) {
        return HAND_LIST.ROYAL_FLUSH
    }

    if (isFiveCard(handCards)) {
        return HAND_LIST.FIVE_CARD
    }

    if (isStraightFlush(handCards)) {
        return HAND_LIST.STRATIGHT_FLUSH
    }

    if (isFourCard(handCards)) {
        return HAND_LIST.FOUR_CARD
    }

    if (isFullHause(handCards)) {
        return HAND_LIST.FULL_HAUSE
    } 

    if (isFlush(handCards)) {
        return HAND_LIST.FLUSH
    }

    if (isStraight(handCards)) {
        return HAND_LIST.STRAIGHT
    }

    if (isThreeCard(handCards)) {
        return HAND_LIST.THREE_CARD
    }

    if (isTwoPair(handCards)) {
        return HAND_LIST.TWO_PAIR
    }

    if (isOnePair(handCards)) {
        return HAND_LIST.ONE_PAIR
    }

    return HAND_LIST.HIGH_CARD
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
 * sort handCards
 */
function sortHandCards(handCards) {
    let handCardsCopy = [];
    Object.assign(handCardsCopy , handCards);
    handCardsCopy.sort(compareNumber)
    return handCardsCopy
}

/**
 * joker count
 */
function jokerCount(handCards) {
    let count = 0
    for (var card of handCards) {
        if (card.number == JOKER_CARD_NUMBER) {
            count++
        }
    }
    return count
}

/**
 * RoyalFlush
 */
function isRoyalFlush(handCards) {
    if (!isFlush(handCards)) {
        return false
    }
    let sortedHandCards = sortHandCards(handCards)
    // Do not consider jokers
    let result =  (sortedHandCards[0].number == 1  && sortedHandCards[1].number == 10 && sortedHandCards[2].number == 11 &&
                   sortedHandCards[3].number == 12 && sortedHandCards[4].number == 13)
    return result

}

/**
 * FiveCard
 */
function isFiveCard(handCards) {
    let sortedHandCards = sortHandCards(handCards)
    // joker count 
    let jcount = jokerCount(handCards)
    if (jcount == 0) {
        return false
    }
    
    let num = sortedHandCards[jcount].number
    for (var i = jcount; i < handCards_COUNT; i++) {
        let card = sortedHandCards[i];
        if (card.number != num) {
            return false
        }
    }

    return true
}

/**
 * Straight Flush
 */
function isStraightFlush(handCards) {
    return isStraight(handCards) && isFlush(handCards)
}

/**
 * Four Card
 */
function isFourCard(handCards) {
    let sortedHandCards = sortHandCards(handCards)
    let jcount = jokerCount(handCards)

    if (jcount == 2) {
        return (sortedHandCards[2].number == sortedHandCards[3].number || sortedHandCards[3].number == sortedHandCards[4].number)
    }

    
    if (jcount == 1) {
        return (sortedHandCards[1].number == sortedHandCards[2].number && sortedHandCards[1].number == sortedHandCards[3].number) ||
               (sortedHandCards[2].number == sortedHandCards[3].number && sortedHandCards[2].number == sortedHandCards[4].number)
    }

    return ((sortedHandCards[0].number == sortedHandCards[1].number && sortedHandCards[0].number == sortedHandCards[2].number && sortedHandCards[0].number == sortedHandCards[3].number) || 
            (sortedHandCards[1].number == sortedHandCards[2].number && sortedHandCards[1].number == sortedHandCards[3].number && sortedHandCards[1].number == sortedHandCards[4].number))
}

/**
 * Full Hause
 */
function isFullHause(handCards) {
    let sortedHandCards = sortHandCards(handCards)
    let jcount = jokerCount(handCards)
    if (jcount == 2) {
        return ((sortedHandCards[2].number == sortedHandCards[3].number || sortedHandCards[3].numb == sortedHandCards[4].number)) 
    }

    if (jcount == 1) {
        return isTwoPair(handCards)
    }

    let result = (((sortedHandCards[0].number == sortedHandCards[1].number && sortedHandCards[1].number == sortedHandCards[2].number) && sortedHandCards[3].number == sortedHandCards[4].number) || 
                  ((sortedHandCards[0].number == sortedHandCards[1].number) && (sortedHandCards[2].number == sortedHandCards[3].number && sortedHandCards[2].number == sortedHandCards[4].number)))

    return result
}

/**
 * Flush
 */
function isFlush(handCards) {
    let sortedHandCards = sortHandCards(handCards)
    let jcount = jokerCount(handCards)

    let mark = sortedHandCards[jcount].mark
    for (var i = jcount; i < handCards_COUNT; i++) {
        let card = sortedHandCards[i]
        if (card.mark != mark) {
            return false
        }
    }

    return true
}

/**
 * Straight
 */
function isStraight(handCards) {
    let sortedHandCards = sortHandCards(handCards)
    // joker count 
    let jCount = jokerCount(handCards)
    // next number 
    let next = (sortedHandCards[jCount].number == 1) ? 10 : sortedHandCards[jCount].number + 1

    // can miss count
    let canMissCount = jCount;
    // check index
    let checkIndex = jCount + 1
    while (checkIndex < handCards_COUNT) {

        let card = sortedHandCards[checkIndex]
        if (card.number == next++) {
            checkIndex++
            continue
        }

        canMissCount--
        if (canMissCount < 0) {
            return false
        }
    }
    return true;
}

/**
 * Three Card
 */
function isThreeCard(handCards) {
    let sortedHandCards = sortHandCards(handCards)
    let jcount = jokerCount(handCards)

    if (jcount == 2) {
        return true
    }

    if (jcount == 1) {
        for (var i = 0; i < 4; i++) {
            if (sortedHandCards[i].number == sortedHandCards[i + 1].number) {
                return true
            }
        }
        return false
    }

    for (var i = 0; i < 3; i++) {
        if (sortedHandCards[i].number == sortedHandCards[i + 1].number && sortedHandCards[i].number == sortedHandCards[i + 2].number) {
            return true
        }
    }

    return false;
}

/**
 * Two Pair
 */
function isTwoPair(handCards) {
    let sortedHandCards = sortHandCards(handCards)
    let result = (sortedHandCards[0].number == sortedHandCards[1].number && sortedHandCards[2].number == sortedHandCards[3].number) || (sortedHandCards[1].number == sortedHandCards[2].number && sortedHandCards[3].number == sortedHandCards[4].number)

    return result
}

/**
 * One Pair
 */
function isOnePair(handCards) {
    let sortedHandCards = sortHandCards(handCards)
    let jcount = jokerCount(handCards)
    if (jcount >= 1) {
        return true
    }

    for (var i = 0; i < handCards_COUNT - 1; i++) {
        if (sortedHandCards[i].number == sortedHandCards[i + 1].number) {
            return true
        }
    }
    return false
}