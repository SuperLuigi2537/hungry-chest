controller.A.onEvent(ControllerButtonEvent.Pressed, function () {
    animation.stopAnimation(animation.AnimationTypes.All, character)
    character.setImage(img`
        . . b b b b b b b b b b b b . . 
        . b e 4 4 4 4 4 4 4 4 4 4 e b . 
        b e 4 4 4 4 4 4 4 4 4 4 4 4 e b 
        b e 4 4 4 4 4 4 4 4 4 4 4 4 e b 
        b e 4 4 4 4 4 4 4 4 4 4 4 4 e b 
        b e e 4 4 4 4 4 4 4 4 4 4 e e b 
        b e e e e e e e e e e e e e e b 
        b e e e e e e e e e e e e e e b 
        b b b b b b b d d b b b b b b b 
        c b b b b b b c c b b b b b b c 
        c c c c c c b c c b c c c c c c 
        b e e e e e c b b c e e e e e b 
        b e e e e e e e e e e e e e e b 
        b c e e e e e e e e e e e e c b 
        b b b b b b b b b b b b b b b b 
        . b b . . . . . . . . . . b b . 
        `)
    controller.moveSprite(character, 0, 0)
    music.powerDown.play()
})
statusbars.onZero(StatusBarKind.Health, function (status) {
    game.over(false)
})
controller.A.onEvent(ControllerButtonEvent.Released, function () {
    music.powerUp.play()
    animation.runImageAnimation(
    character,
    [img`
        . b b b b b b b b b b b b b b . 
        b e 4 4 4 4 4 4 4 4 4 4 4 4 4 b 
        b e 4 4 4 4 4 4 4 4 4 4 4 4 e b 
        b e e 4 2 4 4 4 4 4 4 4 4 e e b 
        b b b b 2 2 b d d b b b b b b b 
        . b b b 2 2 b c c b b b b b b . 
        b c 1 c 2 2 b c c b c c c c 1 b 
        b c 1 c 2 2 2 b b c c c c c 1 b 
        b 1 c c c 2 2 2 c c c c 1 c c b 
        b 1 c c c c c c 1 c c c 1 c c b 
        b b b b b b b b b b b b b b b b 
        b e e e e e e e e e e e e e e b 
        b e e e e e e e e e e e e e e b 
        b c e e e e e e e e e e e e c b 
        b b b b b b b b b b b b b b b b 
        . b b . . . . . . . . . . b b . 
        `,img`
        . . b b b b b b b b b b b b . . 
        . b e 4 4 4 4 4 4 4 4 4 4 e b . 
        b e 4 4 4 4 4 4 4 4 4 4 4 4 e b 
        b e 4 4 4 4 4 4 4 4 4 4 4 4 e b 
        b e 4 4 4 4 4 4 4 4 4 4 4 4 e b 
        b e e 4 4 4 4 4 4 4 4 4 4 e e b 
        b e e e e e e e e e e e e e e b 
        b e e e e e e e e e e e e e e b 
        b b b b b b b d d b b b b b b b 
        c b b b b b b c c b b b b b b c 
        c c c c c c b c c b c c c c c c 
        b e e e e e c b b c e e e e e b 
        b e e e e e e e e e e e e e e b 
        b c e e e e e e e e e e e e c b 
        b b b b b b b b b b b b b b b b 
        . b b . . . . . . . . . . b b . 
        `,img`
        . b b b b b b b b b b b b b b . 
        b e 4 4 4 4 4 4 4 4 4 4 4 4 4 b 
        b e 4 4 4 4 4 4 4 4 4 4 4 4 e b 
        b e e 4 2 4 4 4 4 4 4 4 4 e e b 
        b b b b 2 2 b d d b b b b b b b 
        . b b b 2 2 b c c b b b b b b . 
        b c 1 c 2 2 b c c b c c c c 1 b 
        b c 1 c 2 2 2 b b c c c c c 1 b 
        b 1 c c c 2 2 2 c c c c 1 c c b 
        b 1 c c c c c c 1 c c c 1 c c b 
        b b b b b b b b b b b b b b b b 
        b e e e e e e e e e e e e e e b 
        b e e e e e e e e e e e e e e b 
        b c e e e e e e e e e e e e c b 
        b b b b b b b b b b b b b b b b 
        . b b . . . . . . . . . . b b . 
        `,img`
        . b b b b b b b b b b b b b b . 
        b e 4 4 4 4 4 4 4 4 4 4 4 4 4 b 
        b e 4 4 4 4 4 4 4 4 4 4 4 4 e b 
        b e e 4 2 4 4 4 4 4 4 4 4 e e b 
        b b b b 2 2 b d d b b b b b b b 
        . b b b 2 2 b c c b b b b b b . 
        b c 1 c 2 2 b c c b c c c c 1 b 
        b c 1 c 2 2 2 b b c c c c c 1 b 
        b 1 c c c 2 2 2 c c c c 1 c c b 
        b 1 c c c c c c 1 c c c 1 c c b 
        b b b b b b b b b b b b b b b b 
        b e e e e e e e e e e e e e e b 
        b e e e e e e e e e e e e e e b 
        b c e e e e e e e e e e e e c b 
        b b b b b b b b b b b b b b b b 
        . b b . . . . . . . . . . b b . 
        `],
    500,
    true
    )
    controller.moveSprite(character)
})
sprites.onOverlap(SpriteKind.Player, SpriteKind.Food, function (sprite, otherSprite) {
    statusbar.value += 5
    pause(100)
})
sprites.onOverlap(SpriteKind.Player, SpriteKind.Enemy, function (sprite, otherSprite) {
    statusbar.value += -5
    pause(100)
})
let statusbar: StatusBarSprite = null
let character: Sprite = null
game.splash("eat the food avoid the empty plate")
let burger = sprites.create(img`
    . . . . c c c b b b b b . . . . 
    . . c c b 4 4 4 4 4 4 b b b . . 
    . c c 4 4 4 4 4 5 4 4 4 4 b c . 
    . e 4 4 4 4 4 4 4 4 4 5 4 4 e . 
    e b 4 5 4 4 5 4 4 4 4 4 4 4 b c 
    e b 4 4 4 4 4 4 4 4 4 4 5 4 4 e 
    e b b 4 4 4 4 4 4 4 4 4 4 4 b e 
    . e b 4 4 4 4 4 5 4 4 4 4 b e . 
    8 7 e e b 4 4 4 4 4 4 b e e 6 8 
    8 7 2 e e e e e e e e e e 2 7 8 
    e 6 6 2 2 2 2 2 2 2 2 2 2 6 c e 
    e c 6 7 6 6 7 7 7 6 6 7 6 c c e 
    e b e 8 8 c c 8 8 c c c 8 e b e 
    e e b e c c e e e e e c e b e e 
    . e e b b 4 4 4 4 4 4 4 4 e e . 
    . . . c c c c c e e e e e . . . 
    `, SpriteKind.Food)
scene.setBackgroundColor(12)
tiles.setTilemap(tiles.createTilemap(hex`1000100005050505050505050505050505050505050505050505050505050505050505050502020202020202020202020202020503060606060606060606060606060604030606060606060606060606060606040306060606060606060606060606060403060606060606060606060606060604030606060606060606060606060606040306060606060606060606060606060403060606060606060606060606060604010101010101010101010101010101010509050505050505050505050505050505050505050505000505050505050505050505050505050505050505050705050505080505050505050505050505050505050505050505050505050505050505`, img`
    2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 
    2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 
    2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 
    2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 
    2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 
    2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 
    2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 
    2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 
    2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 
    2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . 2 2 2 . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    `, [myTiles.transparency16,sprites.dungeon.darkGroundNorth,sprites.dungeon.darkGroundSouth,sprites.dungeon.darkGroundEast,sprites.dungeon.darkGroundWest,sprites.dungeon.darkGroundCenter,sprites.castle.tilePath5,sprites.dungeon.collectibleBlueCrystal,sprites.dungeon.collectibleInsignia,sprites.dungeon.collectibleRedCrystal], TileScale.Sixteen))
character = sprites.create(img`
    . b b b b b b b b b b b b b b . 
    b e 4 4 4 4 4 4 4 4 4 4 4 4 4 b 
    b e 4 4 4 4 4 4 4 4 4 4 4 4 e b 
    b e e 4 2 4 4 4 4 4 4 4 4 e e b 
    b b b b 2 2 b d d b b b b b b b 
    . b b b 2 2 b c c b b b b b b . 
    b c 1 c 2 2 b c c b c c c c 1 b 
    b c 1 c 2 2 2 b b c c c c c 1 b 
    b 1 c c c 2 2 2 c c c c 1 c c b 
    b 1 c c c c c c 1 c c c 1 c c b 
    b b b b b b b b b b b b b b b b 
    b e e e e e e e e e e e e e e b 
    b e e e e e e e e e e e e e e b 
    b c e e e e e e e e e e e e c b 
    b b b b b b b b b b b b b b b b 
    . b b . . . . . . . . . . b b . 
    `, SpriteKind.Player)
let googlie = sprites.create(img`
    ...............bbbbbbbbbbbbbbbbbbb...............
    ...........bbbbdd111111111111111ddbbbb...........
    ........bbbd1111111111111111111111111dbbb........
    ......bbd11111111dddddddddddddd111111111dbb......
    ....bbd1111111ddd11111111111111dddd1111111dbb....
    ...bd111111ddd111111111111111111111ddd111111db...
    ..bd11111ddd111ddddddddddddddddddd111ddd11111db..
    .bd11111dd111dddd111111111111111dddd111dd11111db.
    .b11111d111ddd111111111111111111111ddd111d11111b.
    bd11111d1ddd1111111111111111111111111ddd1111111db
    b11111d1ddd111111111111111111111111111ddd1d11111b
    b11111ddddd111111111111111111111111111ddddd11111b
    b11111ddddd111111111111111111111111111dddbd11111b
    b111111dddd111111111111111111111111111dddb111111b
    bd111111dddd1111111111111111111111111dddbd11111db
    .b1111111dddd11111111111111111111111dddbd111111b.
    .bd1111111dbbdd1111111111111111111dddbbd111111db.
    ..bd11111111dbbdd111111111111111dddbbd1111111db..
    ...bd111111111dbbbbbbdddddddddddddd111111111db...
    ....bbd11111111111dbbbbbbbbbddd11111111111dbb....
    ......bbdd11111111111111111111111111111ddbb......
    ........bbbdd11111111111111111111111ddbbb........
    ...........bbbbbddd11111111111dddbbbbb...........
    ................bbbbbbbbbbbbbbbbb................
    `, SpriteKind.Enemy)
controller.moveSprite(character)
scene.cameraFollowSprite(character)
tiles.placeOnRandomTile(burger, sprites.dungeon.collectibleInsignia)
tiles.placeOnRandomTile(googlie, myTiles.transparency16)
animation.runImageAnimation(
character,
[img`
    . b b b b b b b b b b b b b b . 
    b e 4 4 4 4 4 4 4 4 4 4 4 4 4 b 
    b e 4 4 4 4 4 4 4 4 4 4 4 4 e b 
    b e e 4 2 4 4 4 4 4 4 4 4 e e b 
    b b b b 2 2 b d d b b b b b b b 
    . b b b 2 2 b c c b b b b b b . 
    b c 1 c 2 2 b c c b c c c c 1 b 
    b c 1 c 2 2 2 b b c c c c c 1 b 
    b 1 c c c 2 2 2 c c c c 1 c c b 
    b 1 c c c c c c 1 c c c 1 c c b 
    b b b b b b b b b b b b b b b b 
    b e e e e e e e e e e e e e e b 
    b e e e e e e e e e e e e e e b 
    b c e e e e e e e e e e e e c b 
    b b b b b b b b b b b b b b b b 
    . b b . . . . . . . . . . b b . 
    `,img`
    . . b b b b b b b b b b b b . . 
    . b e 4 4 4 4 4 4 4 4 4 4 e b . 
    b e 4 4 4 4 4 4 4 4 4 4 4 4 e b 
    b e 4 4 4 4 4 4 4 4 4 4 4 4 e b 
    b e 4 4 4 4 4 4 4 4 4 4 4 4 e b 
    b e e 4 4 4 4 4 4 4 4 4 4 e e b 
    b e e e e e e e e e e e e e e b 
    b e e e e e e e e e e e e e e b 
    b b b b b b b d d b b b b b b b 
    c b b b b b b c c b b b b b b c 
    c c c c c c b c c b c c c c c c 
    b e 1 e e 2 c b b c 1 e 1 e e b 
    b e 1 e e 2 2 e e e e e 1 e e b 
    b c e e e 2 2 e e e e e e e c b 
    b b b b b 2 b b b b b b b b b b 
    . b b . . . . . . . . . . b b . 
    `,img`
    . b b b b b b b b b b b b b b . 
    b e 4 4 4 4 4 4 4 4 4 4 4 4 4 b 
    b e 4 4 4 4 4 4 4 4 4 4 4 4 e b 
    b e e 4 2 4 4 4 4 4 4 4 4 e e b 
    b b b b 2 2 b d d b b b b b b b 
    . b b b 2 2 b c c b b b b b b . 
    b c 1 c 2 2 b c c b c c c c 1 b 
    b c 1 c 2 2 2 b b c c c c c 1 b 
    b 1 c c c 2 2 2 c c c c 1 c c b 
    b 1 c c c c c c 1 c c c 1 c c b 
    b b b b b b b b b b b b b b b b 
    b e e e e e e e e e e e e e e b 
    b e e e e e e e e e e e e e e b 
    b c e e e e e e e e e e e e c b 
    b b b b b b b b b b b b b b b b 
    . b b . . . . . . . . . . b b . 
    `,img`
    . b b b b b b b b b b b b b b . 
    b e 4 4 4 4 4 4 4 4 4 4 4 4 4 b 
    b e 4 4 4 4 4 4 4 4 4 4 4 4 e b 
    b e e 4 2 4 4 4 4 4 4 4 4 e e b 
    b b b b 2 2 b d d b b b b b b b 
    . b b b 2 2 b c c b b b b b b . 
    b c 1 c 2 2 b c c b c c c c 1 b 
    b c 1 c 2 2 2 b b c c c c c 1 b 
    b 1 c c c 2 2 2 c c c c 1 c c b 
    b 1 c c c c c c 1 c c c 1 c c b 
    b b b b b b b b b b b b b b b b 
    b e e e e e e e e e e e e e e b 
    b e e e e e e e e e e e e e e b 
    b c e e e e e e e e e e e e c b 
    b b b b b b b b b b b b b b b b 
    . b b . . . . . . . . . . b b . 
    `],
500,
true
)
tiles.placeOnTile(character, tiles.getTileLocation(4, 10))
statusbar = statusbars.create(20, 2, StatusBarKind.Health)
statusbar.attachToSprite(character)
