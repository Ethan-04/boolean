controller.A.onEvent(ControllerButtonEvent.Pressed, function () {
    Boolean_Logic = true
})
controller.A.onEvent(ControllerButtonEvent.Released, function () {
    Boolean_Logic = false
})
let projectile: Sprite = null
let Boolean_Logic = false
Boolean_Logic = false
game.onUpdateInterval(500, function () {
    if (Boolean_Logic) {
        projectile = sprites.createProjectileFromSide(img`
. . . . . . . . . . . . . . . . 
. . . . . . . 7 . . . . . . . . 
. . . . . . . e 7 . . . . . . . 
. . . . . . . e e 7 . . . . . . 
. . . . . . . e e e 7 . . . . . 
e e e e e e e e e e e 7 . . . . 
7 7 7 7 7 7 7 7 7 7 7 7 . . . . 
e e e e e e e e e e e 7 . . . . 
. . . . . . . e e e 7 . . . . . 
. . . . . . . e e 7 . . . . . . 
. . . . . . . e 7 . . . . . . . 
. . . . . . . 7 . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
`, Math.randomRange(0, 100), Math.randomRange(0, 100))
    } else {
        projectile = sprites.createProjectileFromSide(img`
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . 7 . . . . 
. . . . . . . . . . 7 e . . . . 
. . . . . . . . . 7 e e . . . . 
. . . . . . . . 7 e e e . . . . 
. . . . . . . 7 e e e e e e e e 
. . . . . . . 7 7 7 7 7 7 7 7 7 
. . . . . . . 7 e e e e e e e e 
. . . . . . . . 7 e e e . . . . 
. . . . . . . . . 7 e e . . . . 
. . . . . . . . . . 7 e . . . . 
. . . . . . . . . . . 7 . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
`, Math.randomRange(0, -100), Math.randomRange(0, -100))
    }
})
