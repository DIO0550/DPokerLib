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
        return TWO_PAIR
    }

    if (isOnePair(hand)) {
        return ONE_PAIRE
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
        if (card.number == JOKER_CARD_NUMBER) {
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
    let result =  (sortedHand[0].number == 1  && sortedHand[1].number == 10 && sortedHand[2].number == 11 &&
                   sortedHand[3].number == 12 && sortedHand[4].number == 13)
    return result

}

/**
 * FiveCard
 */
function isFiveCard(hand) {
    let sortedHand = sortHand(hand)
    // joker count 
    let jcount = jokerCount(hand)
    if (jcount == 0) {
        return false
    }
    
    let num = sortedHand[jcount].number
    for (var i = jcount; i < HAND_COUNT; i++) {
        let card = sortedHand[i];
        if (card.number != num) {
            return false
        }
    }

    return true
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
    let jcount = jokerCount(hand)

    if (jcount == 2) {
        return (sortedHand[2].number == sortedHand[3].number || sortedHand[3].number == sortedHand[4].number)
    }

    
    if (jcount == 1) {
        return (sortedHand[1].number == sortedHand[2].number && sortedHand[1].number == sortedHand[3].number) ||
               (sortedHand[2].number == sortedHand[3].number && sortedHand[2].number == sortedHand[4].number)
    }

    return ((sortedHand[0].number == sortedHand[1].number && sortedHand[0].number == sortedHand[2].number && sortedHand[0].number == sortedHand[3].number) || 
            (sortedHand[1].number == sortedHand[2].number && sortedHand[1].number == sortedHand[3].number && sortedHand[1].number == sortedHand[4].number))
}

/**
 * Full Hause
 */
function isFullHause(hand) {
    let sortedHand = sortHand(hand)
    let jcount = jokerCount(hand)
    if (jcount == 2) {
        return ((sortedHand[2].number == sortedHand[3].number || sortedHand[3].numb == sortedHand[4].number)) 
    }

    if (jcount == 1) {
        return isTwoPair(hand)
    }

    let result = (((sortedHand[0].number == sortedHand[1].number && sortedHand[1].number == sortedHand[2].number) && sortedHand[3].number == sortedHand[4].number) || 
                  ((sortedHand[0].number == sortedHand[1].number) && (sortedHand[2].number == sortedHand[3].number && sortedHand[2].number == sortedHand[4].number)))

    return result
}

/**
 * Flush
 */
function isFlush(hand) {
    let sortedHand = sortHand(hand)
    let jcount = jokerCount(hand)

    let mark = sortedHand[jcount].mark
    for (var i = jcount; i < HAND_COUNT; i++) {
        let card = sortedHand[i]
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
    // joker count 
    let jCount = jokerCount(hand)
    // next number 
    let next = (sortedHand[jCount].number == 1) ? 10 : sortedHand[jCount].number + 1

    // can miss count
    let canMissCount = jCount;
    // check index
    let checkIndex = jCount + 1
    while (checkIndex < HAND_COUNT) {

        let card = sortedHand[checkIndex]
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
function isThreeCard(hand) {
    let sortedHand = sortHand(hand)
    let jcount = jokerCount(hand)

    if (jcount == 2) {
        return true
    }

    if (jcount == 1) {
        for (var i = 0; i < 4; i++) {
            if (sortedHand[i].number == sortedHand[i + 1].number) {
                return true
            }
        }
        return false
    }

    for (var i = 0; i < 3; i++) {
        if (sortedHand[i].number == sortedHand[i + 1].number && sortedHand[i].number == sortedHand[i + 2].number) {
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
    let result = (sortedHand[0].number == sortedHand[1].number && sortedHand[2].number == sortedHand[3].number) || (sortedHand[1].number == sortedHand[2].number && sortedHand[3].number == sortedHand[4].number)

    return result
}

/**
 * One Pair
 */
function isOnePair(hand) {
    let sortedHand = sortHand(hand)
    for (var i = 0; i < HAND_COUNT - 1; i++) {
        if (sortedHand[i].number == sortedHand[i + 1].number) {
            return true
        }
    }
    return false
}