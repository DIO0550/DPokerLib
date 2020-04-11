/**
 * カードクラス
 */
export var Card = function (mark, number) {
    this.mark = mark
    this.number = number
}

/**
 * カードのマーク
 */
export const CARD_MARK = {
    SPADE: "♠️",
    HEART: "❤︎",
    DIAMOND: "◆",
    CLUB: "♣︎",
    JOKER: "joker" 
}

export const JOKER_CARD_NUMBER = 0

export const HAND_COUNT = 5