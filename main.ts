namespace SpriteKind {
    export const pizza = SpriteKind.create()
}
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
    controller.moveSprite(character)
})
sprites.onOverlap(SpriteKind.Player, SpriteKind.Food, function (sprite, otherSprite) {
    statusbar.value += 5
    music.magicWand.play()
    pause(100)
    burgerlife += 1
    info.changeScoreBy(1)
})
sprites.onOverlap(SpriteKind.Player, SpriteKind.pizza, function (sprite, otherSprite) {
    statusbar.value += 10
    music.magicWand.play()
    pause(100)
    pizzalife += 1
    info.changeScoreBy(1)
})
sprites.onOverlap(SpriteKind.Player, SpriteKind.Enemy, function (sprite, otherSprite) {
    statusbar.value += -5
    music.pewPew.play()
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
let pizzafood = sprites.create(img`
    .............beebbbb............
    ............eebbbb4bb...........
    ............eb344bb4bb..........
    ............e44334bb4bb.........
    ............eb433344b4be........
    ............4eb43344444be.......
    ...........bd4eb43333344bb......
    ..........b455d4443333444bb.....
    ..........4d5555d444333444bb....
    .........4555555dd4b4443444be...
    ........bd5555d555d4bb444444ee..
    ........b55ddd665555bb4b44444ee.
    .......bd5555677655554ebb44444eb
    .......43222558855555d4eeb44b4ee
    ......b422332ddd555222d4eebbb4be
    ......be22232ed55522332db4ebbbbe
    .....bde22222e555e22232edd4bbbbe
    .....b52e222e3555e22222eddd4ebee
    ....bd552eee355552e222e355544eee
    ....665dd5555555552eee355dd4deee
    ...6776555555555555555551554d4ee
    ...4885222555dddd6655551544d4eee
    ..b45522332555dd677611d444ddeee.
    ..4d5222232e55555881d44ddd4eee..
    .bdd5e22222e555115114d54d4ee....
    .b55d2e222e351144d1d55eeee......
    bd5ddd2eee3d444555dd4e..........
    b555115dddd55d544eede...........
    4511d444d5544ee...4de...........
    41d4555d4ee........44...........
    41554eede.......................
    44ee...4e.......................
    `, SpriteKind.pizza)
let burgerlife = 0
let pizzalife = 0
scene.setBackgroundColor(12)
tiles.setTilemap(tiles.createTilemap(hex`10001000030303030303030303030303030303030303030303030303030303030303030303020202020202020202020202020203060a0a0a0a0a0a0a0a0a0a0a0a0a0a08060a0a0a0a0a0a0a0a0a0a0a0a0a0a08060a0a0a0a0a0a0a0a0a0a0a0a0a0a08060a0a0a0a0a0a0a0a0a0a0a0a0a0a08060a0a0a0a0a0a0a0a0a0a0a0a0a0a08060a0a0a0a0a0a0a0a0a0a0a0a0a0a0805090909090909090909090909090907010101010101010101010101010101010304030303030303030303030303030303030303030303000303030303030303030303030303030303030303030403030303040303030303030303030303030303030303030303030303030303030303`, img`
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
    `, [myTiles.transparency16,sprites.dungeon.darkGroundNorth,sprites.dungeon.darkGroundSouth,sprites.dungeon.darkGroundCenter,sprites.dungeon.collectibleInsignia,sprites.dungeon.purpleOuterSouthEast,sprites.dungeon.purpleOuterWest1,sprites.dungeon.purpleOuterSouthWest,sprites.dungeon.purpleOuterEast1,sprites.dungeon.purpleOuterSouth1,sprites.dungeon.floorLight2], TileScale.Sixteen))
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
tiles.placeOnRandomTile(pizzafood, sprites.dungeon.collectibleInsignia)
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
game.onUpdate(function () {
    if (info.score() >= 1000) {
        game.over(true)
    }
})
game.onUpdate(function () {
    if (burgerlife == 20) {
        burger.destroy()
    }
    if (pizzalife == 100) {
        pizzafood.destroy()
    }
})
