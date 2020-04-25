# DPokerLib
DPokerLib is Poker Library

[![License: MIT](https://img.shields.io/badge/License-MIT-green.svg)](https://github.com/DIO0550/DPokerLib/blob/master/LICENSE) 
[![npm version](https://badge.fury.io/js/dpoker-lib.svg)](https://badge.fury.io/js/dpoker-lib)

## install
```
$ npm install DPokerLib
```

## Usage
### Create Deck
```JS
var DPokerLib = require('dpoker-lib');

let deck = new DPokerLib.deck.Deck()
```
### Draw One
```JS
var DPokerLib = require('dpoker-lib');

let deck = new DPokerLib.deck.Deck()
let card = deck.drawOne()
```

### Get Card Number
```JS
var DPokerLib = require('dpoker-lib');

let deck = new DPokerLib.deck.Deck()
let card = deck.drawOne()
let number = card.number
```

### Get Card Mark
```JS
var DPokerLib = require('dpoker-lib');

let deck = new DPokerLib.deck.Deck()
let card = deck.drawOne()
let number = card.mark
```

### Check Role
```JS
var DPokerLib = require('dpoker-lib');

let deck = new DPokerLib.deck.Deck()

let card1 = deck.drawOne()
let card2 = deck.drawOne()
let card3 = deck.drawOne()
let card4 = deck.drawOne()
let card5 = deck.drawOne()

let handCards = [card1, card2, card3, card4, card5]
let hand = DPokerLib.hand.hand(handCards)
```

## MARK LIST
### - SPADE
```
CARD_MARK.SPADE
```
### - HEART
```
CARD_MARK.HEART
```
### - DIAMOND
```
CARD_MARK.DIAMOND
```
### - CLUB
```
CARD_MARK.CLUB
```
### - JOKER
```
CARD_MARK.JOKER
```


## Hand List
### - Royal Flush
```JS
HAND_LIST.ROYAL_FLUSH
```

### - Five Card
```JS
HAND_LIST.FIVE_CARD
```

### - Straight Flush
```JS
HAND_LIST.STRATIGHT_FLUSH
```

### - Four Card
```JS
HAND_LIST.FOUR_CARD
```

### - Full Hause
```JS
HAND_LIST.FULL_HAUSE
```

### - Flush
```JS
HAND_LIST.FLUSH
```

### - Straight
```JS
HAND_LIST.STRAIGHT
```

### - Three Card
```JS
HAND_LIST.THREE_CARD
```

### - Two Pair
```JS
HAND_LIST.TWO_PAIR
```

### - One Pair
```JS
HAND_LIST.ONE_PAIR
```

### - High Card
```JS
HAND_LIST.HIGH_CARD
```

## LICENSE
[MIT](https://github.com/DIO0550/DPokerLib/blob/master/LICENSE)