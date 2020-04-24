import { JOKER_CARD_NUMBER } from "./card.js"

const handCards_COUNT = 5

/**
 * ROLE LIST
 */
export const ROLE_LIST = {
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
 * ROLE
 * 
 * return handCards ROLE
 */
export function role(handCards) {
    if (isRoyalFlush(handCards)) {
        return ROLE_LIST.ROYAL_FLUSH
    }

    if (isFiveCard(handCards)) {
        return ROLE_LIST.FIVE_CARD
    }

    if (isStraightFlush(handCards)) {
        return ROLE_LIST.STRATIGHT_FLUSH
    }

    if (isFourCard(handCards)) {
        return ROLE_LIST.FOUR_CARD
    }

    if (isFullHause(handCards)) {
        return ROLE_LIST.FULL_HAUSE
    } 

    if (isFlush(handCards)) {
        return ROLE_LIST.FLUSH
    }

    if (isStraight(handCards)) {
        return ROLE_LIST.STRAIGHT
    }

    if (isThreeCard(handCards)) {
        return ROLE_LIST.THREE_CARD
    }

    if (isTwoPair(handCards)) {
        return ROLE_LIST.TWO_PAIR
    }

    if (isOnePair(handCards)) {
        return ROLE_LIST.ONE_PAIR
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
    let sortedhandCards = sortHandCards(handCards)
    // Do not consider jokers
    let result =  (sortedhandCards[0].number == 1  && sortedhandCards[1].number == 10 && sortedhandCards[2].number == 11 &&
                   sortedhandCards[3].number == 12 && sortedhandCards[4].number == 13)
    return result

}

/**
 * FiveCard
 */
function isFiveCard(handCards) {
    let sortedhandCards = sortHandCards(handCards)
    // joker count 
    let jcount = jokerCount(handCards)
    if (jcount == 0) {
        return false
    }
    
    let num = sortedHandCards[jcount].number
    for (var i = jcount; i < handCards_COUNT; i++) {
        let card = sortedhandCards[i];
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
    let sortedhandCards = sortHandCards(handCards)
    let jcount = jokerCount(handCards)

    if (jcount == 2) {
        return (sortedhandCards[2].number == sortedhandCards[3].number || sortedhandCards[3].number == sortedhandCards[4].number)
    }

    
    if (jcount == 1) {
        return (sortedhandCards[1].number == sortedhandCards[2].number && sortedhandCards[1].number == sortedhandCards[3].number) ||
               (sortedhandCards[2].number == sortedhandCards[3].number && sortedhandCards[2].number == sortedhandCards[4].number)
    }

    return ((sortedhandCards[0].number == sortedhandCards[1].number && sortedhandCards[0].number == sortedhandCards[2].number && sortedhandCards[0].number == sortedhandCards[3].number) || 
            (sortedhandCards[1].number == sortedhandCards[2].number && sortedhandCards[1].number == sortedhandCards[3].number && sortedhandCards[1].number == sortedhandCards[4].number))
}

/**
 * Full Hause
 */
function isFullHause(handCards) {
    let sortedhandCards = sortHandCards(handCards)
    let jcount = jokerCount(handCards)
    if (jcount == 2) {
        return ((sortedhandCards[2].number == sortedhandCards[3].number || sortedhandCards[3].numb == sortedhandCards[4].number)) 
    }

    if (jcount == 1) {
        return isTwoPair(handCards)
    }

    let result = (((sortedhandCards[0].number == sortedhandCards[1].number && sortedhandCards[1].number == sortedhandCards[2].number) && sortedhandCards[3].number == sortedhandCards[4].number) || 
                  ((sortedhandCards[0].number == sortedhandCards[1].number) && (sortedhandCards[2].number == sortedhandCards[3].number && sortedhandCards[2].number == sortedhandCards[4].number)))

    return result
}

/**
 * Flush
 */
function isFlush(handCards) {
    let sortedhandCards = sortHandCards(handCards)
    let jcount = jokerCount(handCards)

    let mark = sortedhandCards[jcount].mark
    for (var i = jcount; i < handCards_COUNT; i++) {
        let card = sortedhandCards[i]
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
    let sortedhandCards = sortHandCards(handCards)
    // joker count 
    let jCount = jokerCount(handCards)
    // next number 
    let next = (sortedhandCards[jCount].number == 1) ? 10 : sortedhandCards[jCount].number + 1

    // can miss count
    let canMissCount = jCount;
    // check index
    let checkIndex = jCount + 1
    while (checkIndex < handCards_COUNT) {

        let card = sortedhandCards[checkIndex]
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
    let sortedhandCards = sortHandCards(handCards)
    let jcount = jokerCount(handCards)

    if (jcount == 2) {
        return true
    }

    if (jcount == 1) {
        for (var i = 0; i < 4; i++) {
            if (sortedhandCards[i].number == sortedhandCards[i + 1].number) {
                return true
            }
        }
        return false
    }

    for (var i = 0; i < 3; i++) {
        if (sortedhandCards[i].number == sortedhandCards[i + 1].number && sortedhandCards[i].number == sortedhandCards[i + 2].number) {
            return true
        }
    }

    return false;
}

/**
 * Two Pair
 */
function isTwoPair(handCards) {
    let sortedhandCards = sortHandCards(handCards)
    let result = (sortedhandCards[0].number == sortedhandCards[1].number && sortedhandCards[2].number == sortedhandCards[3].number) || (sortedhandCards[1].number == sortedhandCards[2].number && sortedhandCards[3].number == sortedhandCards[4].number)

    return result
}

/**
 * One Pair
 */
function isOnePair(handCards) {
    let sortedhandCards = sortHandCards(handCards)
    let jcount = jokerCount(handCards)
    if (jcount >= 1) {
        return true
    }

    for (var i = 0; i < handCards_COUNT - 1; i++) {
        if (sortedhandCards[i].number == sortedhandCards[i + 1].number) {
            return true
        }
    }
    return false
}