# DPokerLib
DPokerLib is Poker Library

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


### Role List
```JS
ROLE_LIST.ROYAL_FLUSH
```
```JS
ROLE_LIST.FIVE_CARD
```
```JS
ROLE_LIST.STRATIGHT_FLUSH
```
```JS
ROLE_LIST.FOUR_CARD
```
```JS
ROLE_LIST.FULL_HAUSE
```
```JS
ROLE_LIST.FLUSH
```
```JS
ROLE_LIST.STRAIGHT
```
```JS
ROLE_LIST.THREE_CARD
```
```JS
ROLE_LIST.TWO_PAIR
```
```JS
ROLE_LIST.ONE_PAIR
```
```JS
ROLE_LIST.HIGH_CARD
```

## LICENSE
TODO