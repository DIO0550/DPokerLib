# DPokerLib
DPokerLib is Poker Library

[![License: MIT](https://img.shields.io/badge/License-MIT-green.svg)](https://github.com/DIO0550/DPokerLib/blob/master/LICENSE)

## install
```
$ npm install DPokerLib
```

## Usage
### Create Deck
```JS
var DPokerLib = require('../index.js');

let deck = new DPokerLib.deck.Deck()
```
### Draw One
```JS
var DPokerLib = require('../index.js');

let deck = new DPokerLib.deck.Deck()
let card = deck.drawOne()
```

### Get Card Number
```JS
var DPokerLib = require('../index.js');

let deck = new DPokerLib.deck.Deck()
let card = deck.drawOne()
let number = card.number
```

### Get Card Mark
```JS
var DPokerLib = require('../index.js');

let deck = new DPokerLib.deck.Deck()
let card = deck.drawOne()
let number = card.mark
```

### Check Role
```JS
var DPokerLib = require('../index.js');

let deck = new DPokerLib.deck.Deck()

let card1 = deck.drawOne()
let card2 = deck.drawOne()
let card3 = deck.drawOne()
let card4 = deck.drawOne()
let card5 = deck.drawOne()

let hand = [card1, card2, card3, card4, card5]
let role = DPokerLib.role.role(hand)
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


## Role List
### - Royal Flush
```JS
ROLE_LIST.ROYAL_FLUSH
```

### - Five Card
```JS
ROLE_LIST.FIVE_CARD
```

### - Straight Flush
```JS
ROLE_LIST.STRATIGHT_FLUSH
```

### - Four Card
```JS
ROLE_LIST.FOUR_CARD
```

### - Full Hause
```JS
ROLE_LIST.FULL_HAUSE
```

### - Flush
```JS
ROLE_LIST.FLUSH
```

### - Straight
```JS
ROLE_LIST.STRAIGHT
```

### - Three Card
```JS
ROLE_LIST.THREE_CARD
```

### - Two Pair
```JS
ROLE_LIST.TWO_PAIR
```

### - One Pair
```JS
ROLE_LIST.ONE_PAIR
```

### - High Card
```JS
ROLE_LIST.HIGH_CARD
```

## LICENSE
[MIT](https://github.com/DIO0550/DPokerLib/blob/master/LICENSE)