namespace SpriteKind {
    export const sell = SpriteKind.create()
    export const Laptop = SpriteKind.create()
    export const generator = SpriteKind.create()
    export const plug = SpriteKind.create()
    export const generatortop = SpriteKind.create()
    export const areapicture = SpriteKind.create()
    export const cutterr = SpriteKind.create()
    export const areaexit = SpriteKind.create()
}
function Arnold_too_camander () {
    if (cutscene_phase == 0) {
        Arnold.setPosition(tilemap_to_pixels(15), tilemap_to_pixels(28))
        Cammander.setPosition(tilemap_to_pixels(7), tilemap_to_pixels(26) + 6.5)
        temporary_sprite_1.setPosition(tilemap_to_pixels(8), tilemap_to_pixels(27) + 15.5)
        Arnold.setVelocity(-50, 0)
        cutscene_phase = 1
    } else if (false) {
    	
    }
}
scene.onOverlapTile(SpriteKind.cutterr, myTiles.tile18, function (sprite, location) {
    if (sprites.readDataBoolean(sprite, "left")) {
        sprite.setVelocity(50, 0)
        sprites.setDataBoolean(sprite, "left", false)
    } else if (sprites.readDataBoolean(sprite, "left") == false) {
        sprite.setVelocity(-50, 0)
        sprites.setDataBoolean(sprite, "left", true)
    }
})
controller.up.onEvent(ControllerButtonEvent.Pressed, function () {
    if (cursor_is < 0) {
        if (cutscene_phase == 0 && current_area != 7) {
            facing = 3
            Arnold.setImage(img`
                . . . . f f f . f f f . . . . 
                . . . . f 2 2 f 2 2 f . . . . 
                . . . . f f f f f f f . . . . 
                . . . f 3 3 3 3 3 3 3 f . . . 
                . . . f 3 3 3 3 3 3 3 f . . . 
                . . . f 3 3 3 3 3 3 3 f . . . 
                . f f f f f f f f f f f f f . 
                f 3 3 3 3 3 3 3 3 3 3 3 3 3 f 
                f 3 3 3 3 3 3 3 3 3 3 3 3 3 f 
                f 3 3 3 3 3 f f f f 3 3 3 3 f 
                f 3 3 3 3 3 f 3 3 f 3 3 3 3 f 
                f 3 3 3 3 f 3 3 f f 3 3 3 3 f 
                f 3 3 3 3 3 3 3 3 3 3 3 3 3 f 
                f 3 3 3 f f f f f f f 3 3 3 f 
                f 3 3 3 f 3 f . f 3 f 3 3 3 f 
                f 3 3 3 f 3 f . f 3 f 3 3 3 f 
                f 3 3 3 f 3 f . f 3 f 3 3 3 f 
                f 3 3 3 f 3 f . f 3 f 3 3 3 f 
                f f f f f f f . f f f f f f f 
                `)
        }
    }
})
sprites.onOverlap(SpriteKind.Player, SpriteKind.cutterr, function (sprite, otherSprite) {
    game.gameOver(false)
})
function start_area (area_number: number) {
    scene.setBackgroundImage(img`
        ................................................................................................................................................................
        ................................................................................................................................................................
        ................................................................................................................................................................
        ................................................................................................................................................................
        ................................................................................................................................................................
        ................................................................................................................................................................
        ................................................................................................................................................................
        ................................................................................................................................................................
        ................................................................................................................................................................
        ................................................................................................................................................................
        ................................................................................................................................................................
        ................................................................................................................................................................
        ................................................................................................................................................................
        ................................................................................................................................................................
        ................................................................................................................................................................
        ................................................................................................................................................................
        ................................................................................................................................................................
        ................................................................................................................................................................
        ................................................................................................................................................................
        ................................................................................................................................................................
        ................................................................................................................................................................
        ................................................................................................................................................................
        ................................................................................................................................................................
        ................................................................................................................................................................
        ................................................................................................................................................................
        ................................................................................................................................................................
        ................................................................................................................................................................
        ................................................................................................................................................................
        ................................................................................................................................................................
        ................................................................................................................................................................
        ................................................................................................................................................................
        ................................................................................................................................................................
        ................................................................................................................................................................
        ................................................................................................................................................................
        ................................................................................................................................................................
        ................................................................................................................................................................
        ................................................................................................................................................................
        ................................................................................................................................................................
        ................................................................................................................................................................
        ................................................................................................................................................................
        ................................................................................................................................................................
        ................................................................................................................................................................
        ................................................................................................................................................................
        ................................................................................................................................................................
        ................................................................................................................................................................
        ................................................................................................................................................................
        ................................................................................................................................................................
        ................................................................................................................................................................
        ................................................................................................................................................................
        ................................................................................................................................................................
        ................................................................................................................................................................
        ................................................................................................................................................................
        ................................................................................................................................................................
        ................................................................................................................................................................
        ................................................................................................................................................................
        ................................................................................................................................................................
        ................................................................................................................................................................
        ................................................................................................................................................................
        ................................................................................................................................................................
        ................................................................................................................................................................
        ................................................................................................................................................................
        ................................................................................................................................................................
        ................................................................................................................................................................
        ................................................................................................................................................................
        ................................................................................................................................................................
        ................................................................................................................................................................
        ................................................................................................................................................................
        ................................................................................................................................................................
        ................................................................................................................................................................
        ................................................................................................................................................................
        ................................................................................................................................................................
        ................................................................................................................................................................
        ................................................................................................................................................................
        ................................................................................................................................................................
        ................................................................................................................................................................
        ................................................................................................................................................................
        ................................................................................................................................................................
        ................................................................................................................................................................
        ................................................................................................................................................................
        ................................................................................................................................................................
        ................................................................................................................................................................
        ................................................................................................................................................................
        ................................................................................................................................................................
        ................................................................................................................................................................
        ................................................................................................................................................................
        ................................................................................................................................................................
        ................................................................................................................................................................
        ................................................................................................................................................................
        ................................................................................................................................................................
        ................................................................................................................................................................
        ................................................................................................................................................................
        ................................................................................................................................................................
        ................................................................................................................................................................
        ................................................................................................................................................................
        ................................................................................................................................................................
        ................................................................................................................................................................
        ................................................................................................................................................................
        ................................................................................................................................................................
        ................................................................................................................................................................
        ................................................................................................................................................................
        ................................................................................................................................................................
        ................................................................................................................................................................
        ................................................................................................................................................................
        ................................................................................................................................................................
        ................................................................................................................................................................
        ................................................................................................................................................................
        ................................................................................................................................................................
        ................................................................................................................................................................
        ................................................................................................................................................................
        ................................................................................................................................................................
        ................................................................................................................................................................
        ................................................................................................................................................................
        ................................................................................................................................................................
        ................................................................................................................................................................
        ................................................................................................................................................................
        ................................................................................................................................................................
        ................................................................................................................................................................
        ................................................................................................................................................................
        ................................................................................................................................................................
        ................................................................................................................................................................
        `)
    if (area_number == 3) {
        tiles.setCurrentTilemap(tilemap`level27`)
        scene.cameraFollowSprite(Arnold)
        Arnold.setPosition(tilemap_to_pixels(27), tilemap_to_pixels(11))
        Area_entrance.setPosition(tilemap_to_pixels(25), tilemap_to_pixels(2))
        controller.moveSprite(Arnold, 100, 100)
        Area_entrance.setImage(img`
            fdddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddf
            fdddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddf
            fdddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddf
            fdddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddf
            fdddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddf
            fdddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddf
            fdddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddf
            fdddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddf
            fdddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddf
            fdddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddf
            fdddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddf
            fdddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddf
            fdddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddf
            fdddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddf
            fdddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddf
            fdddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddf
            fdddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddf
            fdddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddf
            fdddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddf
            fdddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddf
            fdddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddf
            fdddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddf
            fdddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddf
            fdddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddf
            fdddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddf
            fdddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddf
            fdddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddf
            fdddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddf
            fdddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddf
            fdddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddf
            fdddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddf
            fdddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddf
            fdddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddf
            fdddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddf
            fdddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddf
            fdddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddf
            fdddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddf
            fdddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddf
            fdddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddf
            fdddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddf
            fdddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddf
            fdddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddf
            fdddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddf
            fdddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddf
            fdddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddf
            fdddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddf
            fdddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddf
            fdddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddf
            fdddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddf
            fdddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddf
            fdddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddf
            fdddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddf
            fdddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddf
            fdddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddf
            fdddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddf
            fdddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddf
            fdddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddf
            fdddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddf
            fdddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddf
            fdddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddf
            fdddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddf
            fdddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddf
            fdddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddf
            fdddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddf
            fdddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddf
            fdddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddf
            fdddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddf
            fdddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddf
            fdddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddf
            fdddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddf
            fdddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddf
            fdddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddf
            fdddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddf
            fdddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddf
            fdddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddf
            fdddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddf
            fdddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddf
            fdddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddf
            fdddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddf
            fdddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddf
            fdddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddf
            fdddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddf
            fdddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddf
            fdddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddf
            fdddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddf
            fdddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddf
            fdddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddf
            fdddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddf
            fdddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddf
            fdddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddf
            fdddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddf
            fdddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddf
            fdddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddf
            fdddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddf
            fdddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddf
            fdddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddf
            fdddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddf
            fdddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddf
            fdddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddf
            fdddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddf
            fdddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddf
            fdddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddf
            fdddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddf
            fdddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddf
            fdddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddf
            fdddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddf
            fdddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddf
            fdddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddf
            fdddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddf
            fdddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddf
            fdddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddf
            fdddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddf
            fdddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddf
            fdddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddf
            fdddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddf
            fdddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddf
            fdddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddf
            fdddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddf
            fdddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddf
            fdddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddf
            fdddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddf
            fdddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddf
            fdddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddf
            fdddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddf
            fdddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddf
            fdddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddf
            fdddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddf
            fdddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddf
            fdddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddf
            fdddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddf
            fdddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddf
            fdddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddf
            fdddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddf
            fdddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddf
            fdddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddf
            fdddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddf
            fdddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddf
            fdddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddf
            fdddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddf
            fdddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddf
            fdddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddf
            fdddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddf
            fdddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddf
            fdddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddf
            fdddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddf
            fdddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddf
            fdddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddf
            fdddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddf
            fdddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddf
            ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
            `)
        cutscene_phase = 0
        facing = 1
        Arnold.setImage(img`
            ..................ff.ff..
            .................f22f2f..
            .................fbffff..
            ................ffff3f3f.
            ................f3333333f
            ....fffffffffffff3333333f
            ...f333333333333333333fff
            ..f333333333333333333333f
            ..f333333333333333333ffff
            fff3333333333333333fff...
            f33333333333333333f......
            .ffff333fffffff333f......
            ....f333f3f.f3f333f......
            ....f333f3f.f3f333f......
            ....fffffff.fffffff......
            `)
        Arnold.ay = 0
        Arnold.vy = 0
        sprites.destroyAllSpritesOfKind(SpriteKind.cutterr)
        if (game_state == 3) {
            game_state = 2
            Arnold.setPosition(tilemap_to_pixels(30), tilemap_to_pixels(7))
        }
    } else if (area_number == 7) {
        tiles.setCurrentTilemap(tilemap`level31`)
        Arnold.setPosition(tilemap_to_pixels(1), tilemap_to_pixels(47))
        Area_entrance.setPosition(-2200, 0)
        controller.moveSprite(Arnold, 100, 0)
        Arnold.ay = 500
        Area_entrance.setImage(img`
            fffffffffffffffffffffffff
            feeeeeeeeeeeeeeeeeeeeeeef
            feeeeeeeeeeeeeeeeeeeeeeef
            feeeeeeeeeeeeeeeeeeeeeeef
            feeeeeeeeeeeeeeeeeeeeeeef
            feeeeeeeeeeeeeeeeeeeeeeef
            feeeeeeeeeeeeeeeeeeeeeeef
            feeeeeeeeeeeeeeeeeeeeeeef
            feeeeeeeeeeeeeeeeeeeeeeef
            feeeeeeeeeeeeeeeeeeeeeeef
            feeeeeeeeeeeeeeeeeeeeeeef
            feeeeeeeeeeeeeeeeeeeeeeef
            feeeeeeeeeeeeeeeeeeeeeeef
            feeeeeeeeeeeeeeeeeeeeeeef
            feeeeeeeeeeeeefffffffffef
            feeeeeeeeeeeeefdddddddfef
            feeeeeeeeeeeeeeffffffffef
            feeeeeeeeeeeeeeeeeeeeeeef
            feeeeeeeeeeeeeeeeeeeeeeef
            feeeeeeeeeeeeeeeeeeeeeeef
            feeeeeeeeeeeeeeeeeeeeeeef
            feeeeeeeeeeeeeeeeeeeeeeef
            feeeeeeeeeeeeeeeeeeeeeeef
            feeeeeeeeeeeeeeeeeeeeeeef
            feeeeeeeeeeeeeeeeeeeeeeef
            feeeeeeeeeeeeeeeeeeeeeeef
            feeeeeeeeeeeeeeeeeeeeeeef
            feeeeeeeeeeeeeeeeeeeeeeef
            feeeeeeeeeeeeeeeeeeeeeeef
            feeeeeeeeeeeeeeeeeeeeeeef
            feeeeeeeeeeeeeeeeeeeeeeef
            feeeeeeeeeeeeeeeeeeeeeeef
            feeeeeeeeeeeeeeeeeeeeeeef
            feeeeeeeeeeeeeeeeeeeeeeef
            fffffffffffffffffffffffff
            `)
        Area_entrance.setPosition(tilemap_to_pixels(1), tilemap_to_pixels(47) - 5.5)
        Area_anything_else.setImage(img`
            fffffffffffffffffffffffff
            feeeeeeeeeeeeeeeeeeeeeeef
            feeeeeeeeeeeeeeeeeeeeeeef
            feeeeeeeeeeeeeeeeeeeeeeef
            feeeeeeeeeeeeeeeeeeeeeeef
            feeeeeeeeeeeeeeeeeeeeeeef
            feeeeeeeeeeeeeeeeeeeeeeef
            feeeeeeeeeeeeeeeeeeeeeeef
            feeeeeeeeeeeeeeeeeeeeeeef
            feeeeeeeeeeeeeeeeeeeeeeef
            feeeeeeeeeeeeeeeeeeeeeeef
            feeeeeeeeeeeeeeeeeeeeeeef
            feeeeeeeeeeeeeeeeeeeeeeef
            feeeeeeeeeeeeeeeeeeeeeeef
            feeeeeeeeeeeeefffffffffef
            feeeeeeeeeeeeefdddddddfef
            feeeeeeeeeeeeeeffffffffef
            feeeeeeeeeeeeeeeeeeeeeeef
            feeeeeeeeeeeeeeeeeeeeeeef
            feeeeeeeeeeeeeeeeeeeeeeef
            feeeeeeeeeeeeeeeeeeeeeeef
            feeeeeeeeeeeeeeeeeeeeeeef
            feeeeeeeeeeeeeeeeeeeeeeef
            feeeeeeeeeeeeeeeeeeeeeeef
            feeeeeeeeeeeeeeeeeeeeeeef
            feeeeeeeeeeeeeeeeeeeeeeef
            feeeeeeeeeeeeeeeeeeeeeeef
            feeeeeeeeeeeeeeeeeeeeeeef
            feeeeeeeeeeeeeeeeeeeeeeef
            feeeeeeeeeeeeeeeeeeeeeeef
            feeeeeeeeeeeeeeeeeeeeeeef
            feeeeeeeeeeeeeeeeeeeeeeef
            feeeeeeeeeeeeeeeeeeeeeeef
            feeeeeeeeeeeeeeeeeeeeeeef
            fffffffffffffffffffffffff
            `)
        Area_anything_else.setPosition(tilemap_to_pixels(16), tilemap_to_pixels(45) - 5.5)
        game_state = 3
        facing = 1
        Arnold.setImage(img`
            ..................ff.ff..
            .................f22f2f..
            .................fbffff..
            ................ffff3f3f.
            ................f3333333f
            ....fffffffffffff3333333f
            ...f333333333333333333fff
            ..f333333333333333333333f
            ..f333333333333333333ffff
            fff3333333333333333fff...
            f33333333333333333f......
            .ffff333fffffff333f......
            ....f333f3f.f3f333f......
            ....f333f3f.f3f333f......
            ....fffffff.fffffff......
            `)
        for (let value of tiles.getTilesByType(myTiles.tile22)) {
            cutter = sprites.create(img`
                . . . . . f . . f . . f . . . . . 
                . . . f f c f f c f f c f f . . . 
                . . f c b b b b b b b b b c f . . 
                . f c b b b b b b b b b b b c f . 
                . f b b b b b b b b b b b b b f . 
                f c b b b b b b b b b b b b b c f 
                . f b b b b b b b b b b b b b f . 
                . f b b b b b b b b b b b b b f . 
                f c b b b b b b b b b b b b b c f 
                . f b b b b b b b b b b b b b f . 
                . f b b b b b b b b b b b b b f . 
                f c b b b b b b b b b b b b b c f 
                . f b b b b b b b b b b b b b f . 
                . f c b b b b b b b b b b b c f . 
                . . f c b b b b b b b b b c f . . 
                . . . f f c f f c f f c f f . . . 
                . . . . . f . . f . . f . . . . . 
                `, SpriteKind.cutterr)
            sprites.setDataBoolean(cutter, "left", true)
            cutter.setVelocity(-50, 0)
            tiles.placeOnTile(cutter, value)
        }
    }
    current_area = area_number
    cursor.setFlag(SpriteFlag.StayInScreen, false)
    cursor.setPosition(-1000, 0)
    area_picture_one.setPosition(-4000, 0)
    area_picture_two.setPosition(-4000, 0)
    area_picture_three.setPosition(-4000, 0)
    area_picture_four.setPosition(-4000, 0)
    area_picture_five.setPosition(-4000, 0)
    area_picture_six.setPosition(-4000, 0)
}
controller.A.onEvent(ControllerButtonEvent.Pressed, function () {
    if (A_buttonoud == false) {
        if (current_area == 3) {
            if (Arnold.overlapsWith(Area_entrance) && game_state == 2) {
                cursor_overlaped(area_picture_one, 7, true)
            }
        } else if (current_area == 1) {
            if (Arnold.overlapsWith(Area_entrance) && game_state == 2) {
                area_select()
            }
        } else if (current_area == 7) {
            if (Arnold.overlapsWith(Area_entrance) && game_state == 3) {
                cursor_overlaped(area_picture_one, 3, true)
            } else if (Arnold.overlapsWith(Area_anything_else) && game_state == 3) {
                game_state = 4
            }
        }
    }
    a_button_signal.setPosition(-2100, 0)
    A_buttonoud = true
})
function start_game () {
    cursor_is = -1
    play.setPosition(-1000, 0)
    story_iintro.setPosition(-1000, 0)
    cursor.setPosition(-1000, 0)
    scene.setBackgroundImage(img`
        ................................................................................................................................................................
        ................................................................................................................................................................
        ................................................................................................................................................................
        ................................................................................................................................................................
        ................................................................................................................................................................
        ................................................................................................................................................................
        ................................................................................................................................................................
        ................................................................................................................................................................
        ................................................................................................................................................................
        ................................................................................................................................................................
        ................................................................................................................................................................
        ................................................................................................................................................................
        ................................................................................................................................................................
        ................................................................................................................................................................
        ................................................................................................................................................................
        ................................................................................................................................................................
        ................................................................................................................................................................
        ................................................................................................................................................................
        ................................................................................................................................................................
        ................................................................................................................................................................
        ................................................................................................................................................................
        ................................................................................................................................................................
        ................................................................................................................................................................
        ................................................................................................................................................................
        ................................................................................................................................................................
        ................................................................................................................................................................
        ................................................................................................................................................................
        ................................................................................................................................................................
        ................................................................................................................................................................
        ................................................................................................................................................................
        ................................................................................................................................................................
        ................................................................................................................................................................
        ................................................................................................................................................................
        ................................................................................................................................................................
        ................................................................................................................................................................
        ................................................................................................................................................................
        ................................................................................................................................................................
        ................................................................................................................................................................
        ................................................................................................................................................................
        ................................................................................................................................................................
        ................................................................................................................................................................
        ................................................................................................................................................................
        ................................................................................................................................................................
        ................................................................................................................................................................
        ................................................................................................................................................................
        ................................................................................................................................................................
        ................................................................................................................................................................
        ................................................................................................................................................................
        ................................................................................................................................................................
        ................................................................................................................................................................
        ................................................................................................................................................................
        ................................................................................................................................................................
        ................................................................................................................................................................
        ................................................................................................................................................................
        ................................................................................................................................................................
        ................................................................................................................................................................
        ................................................................................................................................................................
        ................................................................................................................................................................
        ................................................................................................................................................................
        ................................................................................................................................................................
        ................................................................................................................................................................
        ................................................................................................................................................................
        ................................................................................................................................................................
        ................................................................................................................................................................
        ................................................................................................................................................................
        ................................................................................................................................................................
        ................................................................................................................................................................
        ................................................................................................................................................................
        ................................................................................................................................................................
        ................................................................................................................................................................
        ................................................................................................................................................................
        ................................................................................................................................................................
        ................................................................................................................................................................
        ................................................................................................................................................................
        ................................................................................................................................................................
        ................................................................................................................................................................
        ................................................................................................................................................................
        ................................................................................................................................................................
        ................................................................................................................................................................
        ................................................................................................................................................................
        ................................................................................................................................................................
        ................................................................................................................................................................
        ................................................................................................................................................................
        ................................................................................................................................................................
        ................................................................................................................................................................
        ................................................................................................................................................................
        ................................................................................................................................................................
        ................................................................................................................................................................
        ................................................................................................................................................................
        ................................................................................................................................................................
        ................................................................................................................................................................
        ................................................................................................................................................................
        ................................................................................................................................................................
        ................................................................................................................................................................
        ................................................................................................................................................................
        ................................................................................................................................................................
        ................................................................................................................................................................
        ................................................................................................................................................................
        ................................................................................................................................................................
        ................................................................................................................................................................
        ................................................................................................................................................................
        ................................................................................................................................................................
        ................................................................................................................................................................
        ................................................................................................................................................................
        ................................................................................................................................................................
        ................................................................................................................................................................
        ................................................................................................................................................................
        ................................................................................................................................................................
        ................................................................................................................................................................
        ................................................................................................................................................................
        ................................................................................................................................................................
        ................................................................................................................................................................
        ................................................................................................................................................................
        ................................................................................................................................................................
        ................................................................................................................................................................
        ................................................................................................................................................................
        ................................................................................................................................................................
        ................................................................................................................................................................
        ................................................................................................................................................................
        ................................................................................................................................................................
        `)
    tiles.setCurrentTilemap(tilemap`level6`)
    controller.moveSprite(Arnold)
    Arnold.setPosition(tilemap_to_pixels(3), tilemap_to_pixels(21))
    Area_entrance.setPosition(tilemap_to_pixels(10), tilemap_to_pixels(15))
    Binglep.setPosition(tilemap_to_pixels(21), tilemap_to_pixels(21))
    scene.cameraFollowSprite(Arnold)
    current_area = 1
}
controller.down.onEvent(ControllerButtonEvent.Released, function () {
    if (cursor_is > 0 && current_area != 7) {
        if (cursor_is == 2) {
            cursor_is = 1
        } else {
            cursor_is += 1
        }
    }
})
controller.left.onEvent(ControllerButtonEvent.Pressed, function () {
    if (cursor_is < 0) {
        if (cutscene_phase == 0) {
            facing = 2
            Arnold.setImage(img`
                ..ff.ff..................
                ..f2f22f.................
                ..ffffbf.................
                .f3f3ffff................
                f3333333f................
                f3333333fffffffffffff....
                fff333333333333333333f...
                f333333333333333333333f..
                ffff333333333333333333f..
                ...fff3333333333333333fff
                ......f33333333333333333f
                ......f333fffffff333ffff.
                ......f333f3f.f3f333f....
                ......f333f3f.f3f333f....
                ......fffffff.fffffff....
                `)
        }
    }
})
function talking_to_someone2 (player2: Sprite, guytalkingto: Sprite, A_direction: number, A_amount: number, val: number) {
    if (Math.sqrt((guytalkingto.x - player2.x) ** 2 + (guytalkingto.y - player2.y) ** 2) < 50) {
        a_button_signal.setPosition(guytalkingto.x - A_direction * A_amount, guytalkingto.y)
        a_button_signal.setImage(img`
            . 1 1 1 1 1 1 . 
            1 2 2 2 2 2 2 1 
            1 2 1 1 1 1 2 1 
            1 2 1 1 1 1 2 1 
            1 2 2 2 2 2 2 1 
            1 2 1 1 1 1 2 1 
            1 2 1 1 1 1 2 1 
            . 1 1 1 1 1 1 . 
            `)
        cutscene_now = true
        if (controller.A.isPressed()) {
            cutscene_phase = 1
            cutscene_now = false
            a_button_signal.setPosition(-1000, 0)
            a_button_signal.sy = 1
            a_button_signal.sx = 1
            talking_to_who = val
        }
    } else {
        a_button_signal.setPosition(-1000, 0)
        return
    }
}
function Zac_to_Arnold () {
    if (cutscene_phase == 1) {
        cutscene_phase = 2
        story.startCutscene(function () {
            controller.moveSprite(Arnold, 0, 0)
            story.spriteSayText(Binglep, "you have to be carefull Arnold")
            story.spriteSayText(Binglep, "Piggy is roaming around killing everyone he can")
            story.spriteSayText(Binglep, "I heard he killed half of the cows and hes only been here for a week!")
            story.spriteSayText(Arnold, "I know I am brainstorming ideas to stop him")
            story.spriteSayText(Binglep, "Isn't what we do obvious? It's to run and hide!")
            story.spriteSayText(Arnold, "we shoudn't just run and hide, we have to stop piggy!")
            Zac.setPosition(tilemap_to_pixels(9), tilemap_to_pixels(20))
            Zac.setVelocity(50, 0)
            animation.runImageAnimation(
            Zac,
            [img`
                .................fff.ff..
                .................f22f2f..
                .................fbffff..
                ................ffff7f7f.
                ................f7777777f
                ..fffffffffffffff77777fff
                ..f777777777777777777777f
                ..f777777777777777777ffff
                fff7777777777777777fff...
                f77777777777777777f......
                .ffff777fffffff777f......
                ....fffff7f...f777f......
                ......fffff...fffff......
                `,img`
                .................fff.ff..
                .................f22f2f..
                .................fbffff..
                ................ffff7f7f.
                ................f7777777f
                ..fffffffffffffff77777fff
                ..f777777777777777777777f
                ..f777777777777777777ffff
                fff7777777777777777fff...
                f77777777777777777f......
                .ffff777fffffff777f......
                ....f777f...f7fffff......
                ....fffff...fffff........
                `],
            300,
            true
            )
            cutscene_phase = 3
            story.cancelCurrentCutscene()
        })
    } else if (cutscene_phase == 3 && Zac.x > tilemap_to_pixels(16)) {
        animation.stopAnimation(animation.AnimationTypes.All, Zac)
        Zac.setVelocity(0, 0)
        Zac.setImage(img`
            .................fff.ff..
            .................f22f2f..
            .................fbffff..
            ................ffff7f7f.
            ................f7777777f
            ..fffffffffffffff77777fff
            ..f777777777777777777777f
            ..f777777777777777777ffff
            fff7777777777777777fff...
            f77777777777777777f......
            .ffff777fffffff777f......
            ....f777f7f.f7f777f......
            ....fffffff.fffffff......
            `)
        cutscene_phase = 4
    } else if (cutscene_phase == 4) {
        cutscene_phase = 5
        story.startCutscene(function () {
            Arnold.setImage(img`
                ..ff.ff..................
                ..f2f22f.................
                ..ffffbf.................
                .f3f3ffff................
                f3333333f................
                f3333333fffffffffffff....
                fff333333333333333333f...
                f333333333333333333333f..
                ffff333333333333333333f..
                ...fff3333333333333333fff
                ......f33333333333333333f
                ......f333fffffff333ffff.
                ......f333f.....f333f....
                ......fffff.....fffff....
                `)
            story.spriteSayText(Zac, "shut up Biglep you keep yapping about")
            story.spriteSayText(Zac, "\"oh! Piggys going to kill us!\"")
            story.spriteSayText(Zac, "Im sure the farmer will deal with it.")
            Arnold.setImage(img`
                ..................ff.ff..
                .................f22f2f..
                .................fbffff..
                ................ffff3f3f.
                ................f3333333f
                ....fffffffffffff3333333f
                ...f333333333333333333fff
                ..f333333333333333333333f
                ..f333333333333333333ffff
                fff3333333333333333fff...
                f33333333333333333f......
                .ffff333fffffff333f......
                ....f333f.....f333f......
                ....fffff.....fffff......
                `)
            story.spriteSayText(Binglep, "Yeah well hes been here for a week and the ")
            story.spriteSayText(Binglep, "farmer has done nothing! Im just trying")
            story.spriteSayText(Binglep, "to keep us safe!")
            story.spriteSayText(Arnold, "I agree we must do something")
            story.spriteSayText(Zac, "and what is that? go see why")
            Arnold.setImage(img`
                ..ff.ff..................
                ..f2f22f.................
                ..ffffbf.................
                .f3f3ffff................
                f3333333f................
                f3333333fffffffffffff....
                fff333333333333333333f...
                f333333333333333333333f..
                ffff333333333333333333f..
                ...fff3333333333333333fff
                ......f33333333333333333f
                ......f333fffffff333ffff.
                ......f333f.....f333f....
                ......fffff.....fffff....
                `)
            story.spriteSayText(Zac, "the farmer isn't doing anything?")
            story.spriteSayText(Zac, "we'll be caught the moment we get outta here!")
            story.spriteSayText(Arnold, "It's worth a shot! com'n lets go!")
            story.spriteSayText(Binglep, "you do what you want but Im going to hide here!")
            Arnold.setImage(img`
                ..................ff.ff..
                .................f22f2f..
                .................fbffff..
                ................ffff3f3f.
                ................f3333333f
                ....fffffffffffff3333333f
                ...f333333333333333333fff
                ..f333333333333333333333f
                ..f333333333333333333ffff
                fff3333333333333333fff...
                f33333333333333333f......
                .ffff333fffffff333f......
                ....f333f.....f333f......
                ....fffff.....fffff......
                `)
            story.spriteSayText(Arnold, "right if you even call standing out in the open hiding...")
            story.spriteSayText(Binglep, "did you say something?")
            story.spriteSayText(Arnold, "Nothing!")
            story.spriteSayText(Arnold, "What about you Zac?")
            Arnold.setImage(img`
                ..ff.ff..................
                ..f2f22f.................
                ..ffffbf.................
                .f3f3ffff................
                f3333333f................
                f3333333fffffffffffff....
                fff333333333333333333f...
                f333333333333333333333f..
                ffff333333333333333333f..
                ...fff3333333333333333fff
                ......f33333333333333333f
                ......f333fffffff333ffff.
                ......f333f.....f333f....
                ......fffff.....fffff....
                `)
            story.spriteSayText(Zac, "Nah Im sure the farmer will do something soon enough.")
            story.spriteSayText(Arnold, "Ok bye you guys!")
            Zac.setVelocity(-50, 0)
            Zac.setImage(img`
                ..ff.fff.................
                ..f2f22f.................
                ..ffffbf.................
                .f7f7ffff................
                f7777777f................
                fff77777fffffffffffffff..
                f777777777777777777777f..
                ffff777777777777777777f..
                ...fff7777777777777777fff
                ......f77777777777777777f
                ......f777fffffff777ffff.
                ......f777f.....f777f....
                ......fffff.....fffff....
                `)
            animation.runImageAnimation(
            Zac,
            [img`
                ..ff.fff.................
                ..f2f22f.................
                ..ffffbf.................
                .f7f7ffff................
                f7777777f................
                fff77777fffffffffffffff..
                f777777777777777777777f..
                ffff777777777777777777f..
                ...fff7777777777777777fff
                ......f77777777777777777f
                ......f777fffffff777ffff.
                ......f777f...f7fffff....
                ......fffff...fffff......
                `,img`
                ..ff.fff.................
                ..f2f22f.................
                ..ffffbf.................
                .f7f7ffff................
                f7777777f................
                fff77777fffffffffffffff..
                f777777777777777777777f..
                ffff777777777777777777f..
                ...fff7777777777777777fff
                ......f77777777777777777f
                ......f777fffffff777ffff.
                ......fffff7f...f777f....
                ........fffff...fffff....
                `],
            300,
            true
            )
            cutscene_phase = 0
            story.cancelCurrentCutscene()
        })
    }
}
controller.right.onEvent(ControllerButtonEvent.Pressed, function () {
    if (cursor_is < 0) {
        if (cutscene_phase == 0) {
            facing = 1
            Arnold.setImage(img`
                ..................ff.ff..
                .................f22f2f..
                .................fbffff..
                ................ffff3f3f.
                ................f3333333f
                ....fffffffffffff3333333f
                ...f333333333333333333fff
                ..f333333333333333333333f
                ..f333333333333333333ffff
                fff3333333333333333fff...
                f33333333333333333f......
                .ffff333fffffff333f......
                ....f333f3f.f3f333f......
                ....f333f3f.f3f333f......
                ....fffffff.fffffff......
                `)
        }
    }
})
controller.A.onEvent(ControllerButtonEvent.Released, function () {
    A_buttonoud = false
})
controller.up.onEvent(ControllerButtonEvent.Released, function () {
    if (cursor_is > 0) {
        if (cursor_is == 1) {
            cursor_is = 2
        } else {
            cursor_is += -1
        }
    }
})
function cursor_overlaped (area: Sprite, val: number, mapselectno: boolean) {
    if (controller.A.isPressed()) {
        if (area.overlapsWith(cursor)) {
            start_area(val)
        } else if (mapselectno) {
            if (val == 7) {
                start_area(val)
            }
            if (val == 3) {
                start_area(val)
            }
        }
    }
}
function story_intro () {
    cursor_is = 0
    scene.setBackgroundImage(img`
        9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
        9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
        9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
        9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
        9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
        9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
        9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
        9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
        9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
        9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
        9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
        9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
        9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
        9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
        9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
        9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
        9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
        9999999999999999999999999999999999ffffffffffff999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
        9999999999999999999999999999999fff777777777777fff999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
        999999999999999999999999999ffff777777777777777777ff9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
        999999999999999999999999fff777777777777777777777777ff99999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
        99999999999999999999999f77777777777777777777777777777ff999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
        999999999999999999999ff77777777777777777777777777777777f99999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
        99999999999999999999f77777777777777777777777777777777777f9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
        999999999999999999ff777777777777777777777777777777777777f9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
        99999999999999999f777777777777777777777777777777777777777f999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
        999999999999999ff77777777777777777777777777777777777777777f99999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
        99999999999999f77777777777777777777777777777777777777777777f9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
        999999999999ff7777777777777777777777777777777777777777777777f999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
        9999999999ff777777777777777777777777777777777777777777777777f999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
        999999999f77777777777777777777777777777777777777777777777777ff99999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
        99999999f7777777777777777777777777777777777777777777777777777f99999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
        9999999f777777777777777777777777777777777777777777777777777777f9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
        999999f7777777777777777777777777777777777777777777777777777777f9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
        9999ff77777777777777777777777777777777777777777777777777777777f999999999999999999999999999999999999999999999999999999999fbbbbbbbb9999999999999999999999999999999
        999f77777777777777777777777777777777777777777777777777777777777f99999999999999999999999999999999999999999999999999999fff7bbbbbbbbf999999999999999999999999999999
        99f7777777777777777777777777777777777777777777777777777777777777f9999999999999999999999999999999999999999999999999999f777bbbbbbbbffff999999999999999999999999999
        9f777777777777777777777777777777777777777777777777777777777777777f99999999999999999999999999999999999999999999999999f7777bbbbbbbb7777f99999999999999999999999999
        f77777777777777777777777777777777777777777777777777777777777777777f999999999999999999999999999999999999999999999999f77777bbbbbbbb77777fff99999999999999999999999
        777777777777777777777777777777777777777777777777777777777777777777ff9999999999999999999999999999999999999999999999f777777bbbbbbbb77777777ff999999999999999999999
        77777777777777777777777777777777777777777777777777777777777777777777f999999999999999999999999999999999999999999999f777777bbbbbbbb7777777777ff9999999999999999999
        777777777777777777777777777777777777777777777777777777777777777777777ff999999999999999999999999999999999999999999f7777777bbbbbbbbb77777777777f999999999999999999
        7777777777777777777777777777777777777777777777777777777777777777777777ff9999999999999999999999999999999999999999f77777777bbbbbbbbb777777777777ffff99999999999999
        77777777777777777777777777777777777777777777777777777777777777777777777ff999999999999999999999999999999999999999f77777777bbbbbbbbb7777777777777777f9999999999999
        777777777777777777777777777777777777777777777777777777777777777777777777ff9999999999999999999999999999999999999f777777777bbbbbbbbbb7777777777777777f999999999999
        77777777777777777777777777777777777777777777777777777777777777777777777777f99999999999999999999999999999999999f77777777777bbbbbbbbb77777777777777777ff9999999999
        777777777777777777777777777777777777777777777777777777777777777777777777777ff99999999999999999999999999999ffff777777777777bbbbbbbbb7777777777777777777ff99999999
        77777777777777777777777777777777777777777777777777777777777777777777777777777fff999999999999999999ffffffff7777777777777777bbbbbbbbb777777777777777777777ff999999
        77777777777777777777777777777777777777777777777777777777777777777777777777777777ffffffffffffffffff777777777777777777777777bbbbbbbbb7777777777777777777777f999999
        77777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777bbbbbbbbb77777777777777777777777f99999
        77777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777bbbbbbbbbb77777777777777777777777ff999
        77777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777bbbbbbbbbb7777777777777777777777777f99
        7777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777bbbbbbbbbbb77777777777777777777777777ff
        7777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777bbbbbbbbbbb7777777777777777777777777777
        7777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777bbbbbbbbbbb7777777777777777777777777777
        7777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777bbbbbbbbbbb7777777777777777777777777777
        7777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777bbbbbbbbbbb7777777777777777777777777777
        7777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777bbbbbbbbbbb7777777777777777777777777777
        7777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777bbbbbbbbbbb7777777777777777777777777777
        777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777bbbbbbbbbbbb7777777777777777777777777777
        777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777bbbbbbbbbbbb7777777777777777777777777777
        777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777bbbbbbbbbbbb7777777777777777777777777777
        777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777bbbbbbbbbbbb7777777777777777777777777777
        777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777bbbbbbbbbbbb7777777777777777777777777777
        777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777bbbbbbbbbbbb7777777777777777777777777777
        77777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777bbbbbbbbbbbbb7777777777777777777777777777
        77777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777bbbbbbbbbbbb77777777777777777777777777777
        77777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777bbbbbbbbbbbb77777777777777777777777777777
        7777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777bbbbbbbbbbbbb77777777777777777777777777777
        7777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777bbbbbbbbbbbbb77777777777777777777777777777
        777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777bbbbbbbbbbbbbb77777777777777777777777777777
        777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777bbbbbbbbbbbbb777777777777777777777777777777
        77777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777bbbbbbbbbbbbbb777777777777777777777777777777
        77777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777bbbbbbbbbbbbb7777777777777777777777777777777
        7777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777bbbbbbbbbbbbbb7777777777777777777777777777777
        777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777bbbbbbbbbbbbbbb7777777777777777777777777777777
        77777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777bbbbbbbbbbbbbbb77777777777777777777777777777777
        7777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777bbbbbbbbbbbbbbb777777777777777777777777777777777
        777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777bbbbbbbbbbbbbbbb777777777777777777777777777777777
        77777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777bbbbbbbbbbbbbbbb7777777777777777777777777777777777
        7777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777bbbbbbbbbbbbbbbbb7777777777777777777777777777777777
        777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777bbbbbbbbbbbbbbbbb77777777777777777777777777777777777
        7777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777bbbbbbbbbbbbbbbbbb777777777777777777777777777777777777
        777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777bbbbbbbbbbbbbbbbbb7777777777777777777777777777777777777
        7777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777bbbbbbbbbbbbbbbbbbb77777777777777777777777777777777777777
        777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777bbbbbbbbbbbbbbbbbbbb77777777777777777777777777777777777777
        77777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777bbbbbbbbbbbbbbbbbbbb777777777777777777777777777777777777777
        777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777bbbbbbbbbbbbbbbbbbbbb7777777777777777777777777777777777777777
        77777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777bbbbbbbbbbbbbbbbbbbb777777777777777777777777777777777777777777
        777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777bbbbbbbbbbbbbbbbbbbbb7777777777777777777777777777777777777777777
        7777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777bbbbbbbbbbbbbbbbbbbb7777777777777777777777777777777777777777777777
        77777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777bbbbbbbbbbbbbbbbbbbb777777777777777777777777777777777777777777777777
        777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777bbbbbbbbbbbbbbbbbbbb77777777777777777777777777777777777777777777777777
        777777777777777777777777777777777777777777777777777777777777777777777777777777777777777bbbbbbbbbbbbbbbbbbbbbb777777777777777777777777777777777777777777777777777
        777777777777777777777777777777777777777777777777777777777777777777777777777777777777bbbbbbbbbbbbbbbbbbbbbbb77777777777777777777777777777777777777777777777777777
        777777777777777777777777777777777777777777777777777777777777777777777777777777777bbbbbbbbbbbbbbbbbbbbbbbbb777777777777777777777777777777777777777777777777777777
        7777777777777777777777777777777777777777777777777777777777777777777777777777777bbbbbbbbbbbbbbbbbbbbbbbbbb7777777777777777777777777777777777777777777777777777777
        777777777777777777777777777777777777777777777777777777777777777777777777777bbbbbbbbbbbbbbbbbbbbbbbbbbbb777777777777777777777777777777777777777777777777777777777
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        1111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111
        1111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111
        1111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111
        1111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111
        1111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        77777777f1111111f7777777777777777777f1111111f7777777bbbbbbbbbf111111111fbbbbbbbbbb777f111111f77777777777777777f111111f77777777777777f1111111f77777777777777f1111
        77777777f1111111f7777777777777777777f1111111f77777bbbbbbbbbbbf111111111fbbbbbbbb77777f111111f77777777777777777f111111f77777777777777f1111111f77777777777777f1111
        77777777f1111111f7777777777777777777f1111111f777bbbbbbbbbbbbbf111111111fbbbb777777777f111111f77777777777777777f111111f77777777777777f1111111f77777777777777f1111
        77777777f1111111f7777777777777777777f1111111f7bbbbbbbbbbbbbbbf111111111fb777777777777f111111f77777777777777777f111111f77777777777777f1111111f77777777777777f1111
        77777777f1111111f7777777777777777777f1111111fbbbbbbbbbbbbbbbbf111111111f7777777777777f111111f77777777777777777f111111f77777777777777f1111111f77777777777777f1111
        77777777f1111111f7777777777777777777f1111111fbbbbbbbbbbbbbbbbf111111111f7777777777777f111111f77777777777777777f111111f77777777777777f1111111f77777777777777f1111
        77777777f1111111f7777777777777777777f1111111fbbbbbbbbbbbbbbbbf111111111f7777777777777f111111f77777777777777777f111111f77777777777777f1111111f77777777777777f1111
        77777777f1111111f7777777777777777777f1111111fbbbbbbbbbbbbbbbbf111111111f7777777777777f111111f77777777777777777f111111f77777777777777f1111111f77777777777777f1111
        77777777f1111111f7777777777777777777f1111111fbbbbbbbbbbbbbbbbf111111111f7777777777777f111111f77777777777777777f111111f77777777777777f1111111f77777777777777f1111
        77777777f1111111f7777777777777777777f1111111fbbbbbbbbbbbbbb77f111111111f7777777777777f111111f77777777777777777f111111f77777777777777f1111111f77777777777777f1111
        77777777f1111111f7777777777777777777f1111111fbbbbbbbbbbbbb777f111111111f7777777777777f111111f77777777777777777f111111f77777777777777f1111111f77777777777777f1111
        77777777f1111111f7777777777777777777f1111111fbbbbbbbbbbbb7777f111111111f7777777777777f111111f77777777777777777f111111f77777777777777f1111111f77777777777777f1111
        77777777f1111111f7777777777777777777f1111111fbbbbbbbbbb777777f111111111f7777777777777f111111f77777777777777777f111111f77777777777777f1111111f77777777777777f1111
        77777777f1111111f777777777777777777bf1111111fbbbbbbbbb7777777f111111111f7777777777777f111111f77777777777777777f111111f77777777777777f1111111f77777777777777f1111
        77777777f1111111f77777777777777777bbf1111111fbbbbbbb777777777f111111111f7777777777777f111111f77777777777777777f111111f77777777777777f1111111f77777777777777f1111
        `)
    Piggy.setPosition(50, 114)
    cursor.setPosition(-1000, 0)
    play.setPosition(-1000, 0)
    story_iintro.setPosition(-1000, 0)
    story.startCutscene(function () {
        story.printText("once upon a time their was a pig", Piggy.x, Piggy.y - 50)
        story.printText("he was a normal pig  that lived with the rest of the farmers pigs", Piggy.x, Piggy.y - 50)
        story.printText("but one day he turned into...", Piggy.x, Piggy.y - 50)
        story.printText("PIGGY!", Piggy.x, Piggy.y - 50)
        Piggy.setImage(img`
            ..........fffffffff..........
            ..........f3333333f..........
            ..........f3553553f..........
            ..........f3333333f..........
            ..........f33f3f33f..........
            ...........f33f33f...........
            ............f333f............
            ............fffff............
            .....fffffffeeeeefffffff.....
            ....fddddddfeeeeefddddddf....
            ....fdffffffeeeeeffffffdf....
            ....fdf...feeeeeeef...fdf....
            ....ffff..feeeeeeef..ffff....
            ...f111f..feeeeeeef..f111f...
            ..f1111f.feeeeeeeeef.f1111f..
            ..f1f1ff.feeeeeeeeef.ff1f1f..
            ...f.f.f.feeeeeeeeef.f.f.f...
            ........feeeeeeeeeeef........
            ........feeeeeeeeeeef........
            ........fffffffffffff........
            ...........fcf...fcf.........
            ...........fcf...fcf.........
            ...........fcf...fcf.........
            ..........ffff...ffff........
            .........f111f...f111f.......
            .........fffff...fffff.......
            `)
        Piggy.setPosition(50, 107)
        timer.after(2000, function () {
            scene.setBackgroundImage(img`
                9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999111111111111111111111111111111111111111
                9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999991111111111111111111111111111111111111111
                9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999911111111111111111111111111111111111111111
                9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999911111111111111111111111111111111111111111
                9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999111111111111111111111111111111111111111111
                9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999991111111111111111111111111111111111111111111
                9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999911111111111111111111111111111111111111111111
                9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999111111111111111111111111111111111111111111111
                9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999991111111111111111111111111111111111111111111111
                9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999991111111111111111111111111111111111111111111111
                9999999999999999999999999991111111199999999999999999999999999999999999999999999999999999999999999999999999999999991111111111111111111111111111111111111111111111
                9999999999999999999999999111111111111111999911111111111199999999999999999999999999999999999999999999999999999999999999999991111111111111111111111111111111111111
                9999999999999999999999991111111111111111111111111111111119999999999999999999999999999999999999999999999999999999999999999999111111111111111111111111111191111111
                9999999999fffffffffffffffffffffffff111ffffffffffffffffffffffffff999fffffffffffffffffffffffff9999fffffffffffff999999999999999911111111111199111111111111999991111
                9999999999f55555555555555555555555f111f555555555555555555555555f999f55555555555555555555555f9999f55555555555f999999999999999991111111111999991111111119999999999
                9999999999f55555555555555555555555f111f555555555555555555555555f999f55555555555555555555555f9999f55555555555f999999999999999999911111111999999991119999999999999
                9999999999f55555555555555555555555f111f555555555555555555555555f999f55555555555555555555555f9999f555fffff555f999999999999999999999999999999999999999999999999999
                9999999999f5555ffffffffffffffffffff111ffffffffff555555ffffffffff999f55555555555555555555555f9999f555f999f555f999999999999999999999999999999999999999999999999999
                9999999999f5555f1111111111111111111111111111111f555555f111119999999f55555555555555555555555f9999f555f999f555f999999999999999999999999999999999999999999999999999
                9999999999f5555f1111111111111111111111111111111f555555f111111999999f55555fffffffffffff55555f9999f555fffff555f999999999999999999999999999999999999999999999999999
                9999999999f5555f1111111111111111111111111111111f555555f111111999999f55555f99999999999f55555f9999f55555555555f999999999999999999999999999999999999999999999999999
                9999999999f5555f1111111111111111111111111111111f555555f111111199999f55555f99999999999f55555f9999f55555555555f999999999999999999999999999999999999999999999999999
                9999999999f5555f1111111111111111111111111111111f555555f111111199999f55555f99999999999f55555f9999f55ffffffffff999999999999999999999999999999999999999999999999999
                9999999999f5555f1111111111111111111111111111111f555555f111111199999f55555f99999999999f55555f9999f55f999999999999999999999999999999999999999999999999999999999999
                9999999999f5555f1111111111111111111111111111111f555555f111111119999f55555f99999999999f55555f9999f55f999999999999999999999999999999999999999999999999999999999999
                9999999999f5555f1111111199991111111119111111111f555555f111111119999f55555f99999999999f55555f9999f55f999999999999999999999999999999999999999999999999999999999999
                9999999999f5555f9999999999999911119999911111111f555555f999991119999f55555f99999999999f55555f9999f55f999999999999999999999999999999999999999999999999999999999999
                9999999999f5555f9999999999999999999999999111111f555555f999999999999f55555f99999999999f55555f9999f55f999999999999999999999999999999999999999999999999999999999999
                9999999999f5555f9999999999999999999999999999999f555555f999999999999f55555f99999999999f55555f9999f55f999999999999999999999999999999999999999999999999999999999999
                9999999999f5555f9999999999999999999999999999999f555555f999999999999f55555f99999999999f55555f9999f55f999999999999999999999999999999999999999999999999999999999999
                9999999999f5555ffffffffffffffffff99999999999999f555555f999999999999f55555f99999999999f55555f9999f55f999999999999999999999999999999999999999999999999999999999999
                9999999999f555555555555555555555f99999999999999f555555f999999999999f55555f99999999999f55555f9999f55f999999999999999999999999999999999999999999999999999999999999
                9999999999f555555555555555555555f99999999999999f555555f999999999999f55555f99999999999f55555f9999f55f999999999999999999999999999999999999999999999999999999999999
                9999999999f555555555555555555555f99999999999999f555555f999999999999f55555f99999999999f55555f9999f55f999999999999999999999999999999999999999999999999999999999999
                9999999999ffffffffffffffff555555f99999999999999f555555f999999999999f55555f99999999999f55555f9999f55f999999999999999999999999999999999999999999999999999999999999
                9999999999999999999999999f555555f99999999999999f555555f999999999999f55555f99999999999f55555f9999f55f999999999999999999999999999999999999999999999999999999999999
                9999999999999999999999999f555555f99999999999999f555555f999999999999f55555f99999999999f55555f9999f55f999999999999999999999999999999999999999999999999999999999999
                9999999999999999999999999f555555f99999999999999f555555f999999999999f55555f99999999999f55555f9999f55f999999999999999999999999999999999999999999999999999999999999
                9999999999999999999999999f555555f99999999999999f555555f999999999999f55555f99999999999f55555f9999f55f999999999999999999999999999999999999999999999999999999999999
                9999999999999999999999999f555555f99999999999999f555555f999999999999f55555f99999999999f55555f9999f55f999999999999999999999999999999999999999999999999999999999999
                9999999999ffffffffffffffff555555f99999999999999f555555f999999999999f55555f99999999999f55555f9999f55f999999999999999999999999999999999999999999999999999999999999
                9999999999f555555555555555555555f99999999999999f555555f999999999999f55555fffffffffffff55555f9999f55f999999999999999999999999999999999999999999999999999999999999
                9999999999f555555555555555555555f99999999999999f555555f999999999999f55555555555555555555555f9999f55f999999999999999999999999999999999999999999999999999999999999
                9999999999f555555555555555555555f99999999999999f555555f999999999999f55555555555555555555555f9999f55f999999999999999999999999999999999999999999999999999999999999
                9999999999f555555555555555555555f99999999999999f555555f999999999999f55555555555555555555555f9999f55f999999999999999999999999999999999999999999999999999999999999
                9999999999fffffffffffffffffffffff99999999999999ffffffff999999999999f55555555555555555555555f9999ffff999999999999999999999999999999999999999999999999999999999999
                9999999999999999999999999999999999999999999999999999999999999999999f55555555555555555555555f99999999999999999999999999999999999999999999999999999999999999999999
                9999999999999999999999999999999999999999999999999999999999999999999fffffffffffffffffffffffff99999999999999999999999999999999999999999999999999999999999999999999
                9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
                1199999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
                1119999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
                1119999999999999222229922222922222992222292999299929999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
                1111999999999999299929999299929999992999992999299929999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
                1111999999999999299929999299929999992999992222299929999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
                1111999999999999299929999299929999992999999929999929999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
                1111999999999999222229999299929999992999999929999929999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
                1119999999999999299999999299929999992999999929999929999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
                1199999999999999299999999299929222992922299929999929999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
                9999999999999999299999999299929992992999299929999929999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
                9999999999999999299999999299929992992999299929999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
                9999999999999999299999922222922222992222299929999929999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
                9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
                9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
                9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
                9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
                9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
                9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
                9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
                9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
                9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
                9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
                9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
                9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
                9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
                9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
                9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
                9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
                9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
                9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
                9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
                9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
                9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
                9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
                9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
                9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
                9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
                9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
                9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
                9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
                9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
                9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
                9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
                9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
                9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
                9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
                9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
                9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
                9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
                9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
                9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
                9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
                9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
                9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
                9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
                9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
                9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
                9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
                9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
                9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
                9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
                9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
                9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
                9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
                9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
                9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
                9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
                9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
                9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
                9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
                9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
                `)
            cursor_is = 2
            cursor.setPosition(20, story_iintro.y)
            story_iintro.setPosition(53, 100)
            play.setPosition(50, 85)
            Piggy.setPosition(-5000, 0)
        })
    })
}
controller.down.onEvent(ControllerButtonEvent.Pressed, function () {
    if (cursor_is < 0) {
        if (cutscene_phase == 0 && current_area != 7) {
            facing = 4
            Arnold.setImage(img`
                . . . . f f f . f f f . . . . 
                . . . . f 2 2 f 2 2 f . . . . 
                . . . . f f f f f f f . . . . 
                . . . f 3 3 3 3 3 3 3 f . . . 
                . . . f 3 3 3 3 3 3 3 f . . . 
                . . . f 3 f 3 3 3 f 3 f . . . 
                . f f f 3 3 3 3 3 3 3 f f f . 
                f 3 3 f 3 f f f f f 3 f 3 3 f 
                f 3 3 f 3 3 3 3 3 3 3 f 3 3 f 
                f 3 3 3 f f f f f f f 3 3 3 f 
                f 3 3 3 3 3 3 3 3 3 3 3 3 3 f 
                f 3 3 3 3 3 3 3 3 3 3 3 3 3 f 
                f 3 3 3 3 3 3 3 3 3 3 3 3 3 f 
                f 3 3 3 f f f f f f f 3 3 3 f 
                f 3 3 3 f 3 f . f 3 f 3 3 3 f 
                f 3 3 3 f 3 f . f 3 f 3 3 3 f 
                f 3 3 3 f 3 f . f 3 f 3 3 3 f 
                f 3 3 3 f 3 f . f 3 f 3 3 3 f 
                f f f f f f f . f f f f f f f 
                `)
        }
    }
})
function Arnolds_Animations () {
    if (cutscene_phase == 0) {
        if (facing == 1) {
            facing = 1.5
            animation.runImageAnimation(
            Arnold,
            [img`
                ..................ff.ff..
                .................f22f2f..
                .................fbffff..
                ................ffff3f3f.
                ................f3333333f
                ....fffffffffffff3333333f
                ...f333333333333333333fff
                ..f333333333333333333333f
                ..f333333333333333333ffff
                fff3333333333333333fff...
                f33333333333333333f......
                .ffff333fffffff333f......
                ..fff333f...f3fffff......
                ....f333f...f333f........
                ....fffff...fffff........
                `,img`
                ..................ff.ff..
                .................f22f2f..
                .................fbffff..
                ................ffff3f3f.
                ................f3333333f
                ....fffffffffffff3333333f
                ...f333333333333333333fff
                ..f333333333333333333333f
                ..f333333333333333333ffff
                fff3333333333333333fff...
                f33333333333333333f......
                .ffff333fffffff333f......
                ..f3fffff...fff333f......
                ..f333f.......f333f......
                ..fffff.......fffff......
                `],
            200,
            true
            )
        } else if (facing == 1.5 && !(controller.right.isPressed())) {
            animation.stopAnimation(animation.AnimationTypes.All, Arnold)
            Arnold.setImage(img`
                ..................ff.ff..
                .................f22f2f..
                .................fbffff..
                ................ffff3f3f.
                ................f3333333f
                ....fffffffffffff3333333f
                ...f333333333333333333fff
                ..f333333333333333333333f
                ..f333333333333333333ffff
                fff3333333333333333fff...
                f33333333333333333f......
                .ffff333fffffff333f......
                ....f333f3f.f3f333f......
                ....f333f3f.f3f333f......
                ....fffffff.fffffff......
                `)
        } else if (facing == 2) {
            facing = 2.5
            animation.runImageAnimation(
            Arnold,
            [img`
                ..ff.ff..................
                ..f2f22f.................
                ..ffffbf.................
                .f3f3ffff................
                f3333333f................
                f3333333fffffffffffff....
                fff333333333333333333f...
                f333333333333333333333f..
                ffff333333333333333333f..
                ...fff3333333333333333fff
                ......f33333333333333333f
                ......f333fffffff333ffff.
                ......fffff3f...f333fff..
                ........f333f...f333f....
                ........fffff...fffff....
                `,img`
                ..ff.ff..................
                ..f2f22f.................
                ..ffffbf.................
                .f3f3ffff................
                f3333333f................
                f3333333fffffffffffff....
                fff333333333333333333f...
                f333333333333333333333f..
                ffff333333333333333333f..
                ...fff3333333333333333fff
                ......f33333333333333333f
                ......f333fffffff333ffff.
                ......f333fff...fffff3f..
                ......f333f.......f333f..
                ......fffff.......fffff..
                `],
            200,
            true
            )
        } else if (facing == 2.5 && !(controller.left.isPressed())) {
            animation.stopAnimation(animation.AnimationTypes.All, Arnold)
            Arnold.setImage(img`
                ..ff.ff..................
                ..f2f22f.................
                ..ffffbf.................
                .f3f3ffff................
                f3333333f................
                f3333333fffffffffffff....
                fff333333333333333333f...
                f333333333333333333333f..
                ffff333333333333333333f..
                ...fff3333333333333333fff
                ......f33333333333333333f
                ......f333fffffff333ffff.
                ......f333f3f.f3f333f....
                ......f333f3f.f3f333f....
                ......fffffff.fffffff....
                `)
        } else if (facing == 3 && current_area != 7) {
            facing = 3.5
            animation.runImageAnimation(
            Arnold,
            [img`
                . . . . f f f . f f f . . . . 
                . . . . f 2 2 f 2 2 f . . . . 
                . . . . f f f f f f f . . . . 
                . . . f 3 3 3 3 3 3 3 f . . . 
                . . . f 3 3 3 3 3 3 3 f . . . 
                . . . f 3 3 3 3 3 3 3 f . . . 
                . f f f f f f f f f f f f f . 
                f 3 3 3 3 3 3 3 3 3 3 3 3 3 f 
                f 3 3 3 3 3 3 3 3 3 3 3 3 3 f 
                f 3 3 3 3 3 f f f f 3 3 3 3 f 
                f 3 3 3 3 3 f 3 3 f 3 3 3 3 f 
                f 3 3 3 3 f 3 3 f f 3 3 3 3 f 
                f 3 3 3 3 3 3 3 3 3 3 3 3 3 f 
                f 3 3 3 f f f f f f f 3 3 3 f 
                f 3 3 3 f f f . f 3 f 3 3 3 f 
                f 3 3 3 f . . . f 3 f f f f f 
                f 3 3 3 f . . . f 3 3 3 f . . 
                f 3 3 3 f . . . f 3 3 3 f . . 
                f f f f f . . . f f f f f . . 
                `,img`
                . . . . f f f . f f f . . . . 
                . . . . f 2 2 f 2 2 f . . . . 
                . . . . f f f f f f f . . . . 
                . . . f 3 3 3 3 3 3 3 f . . . 
                . . . f 3 3 3 3 3 3 3 f . . . 
                . . . f 3 3 3 3 3 3 3 f . . . 
                . f f f f f f f f f f f f f . 
                f 3 3 3 3 3 3 3 3 3 3 3 3 3 f 
                f 3 3 3 3 3 3 3 3 3 3 3 3 3 f 
                f 3 3 3 3 3 f f f f 3 3 3 3 f 
                f 3 3 3 3 3 f 3 3 f 3 3 3 3 f 
                f 3 3 3 3 f 3 3 f f 3 3 3 3 f 
                f 3 3 3 3 3 3 3 3 3 3 3 3 3 f 
                f 3 3 3 f f f f f f f 3 3 3 f 
                f 3 3 3 f 3 f . f f f 3 3 3 f 
                f f f f f 3 f . . . f 3 3 3 f 
                . . f 3 3 3 f . . . f 3 3 3 f 
                . . f 3 3 3 f . . . f 3 3 3 f 
                . . f f f f f . . . f f f f f 
                `],
            200,
            true
            )
        } else if (facing == 3.5 && (current_area != 7 && !(controller.up.isPressed()))) {
            animation.stopAnimation(animation.AnimationTypes.All, Arnold)
            Arnold.setImage(img`
                . . . . f f f . f f f . . . . 
                . . . . f 2 2 f 2 2 f . . . . 
                . . . . f f f f f f f . . . . 
                . . . f 3 3 3 3 3 3 3 f . . . 
                . . . f 3 3 3 3 3 3 3 f . . . 
                . . . f 3 3 3 3 3 3 3 f . . . 
                . f f f f f f f f f f f f f . 
                f 3 3 3 3 3 3 3 3 3 3 3 3 3 f 
                f 3 3 3 3 3 3 3 3 3 3 3 3 3 f 
                f 3 3 3 3 3 f f f f 3 3 3 3 f 
                f 3 3 3 3 3 f 3 3 f 3 3 3 3 f 
                f 3 3 3 3 f 3 3 f f 3 3 3 3 f 
                f 3 3 3 3 3 3 3 3 3 3 3 3 3 f 
                f 3 3 3 f f f f f f f 3 3 3 f 
                f 3 3 3 f 3 f . f 3 f 3 3 3 f 
                f 3 3 3 f 3 f . f 3 f 3 3 3 f 
                f 3 3 3 f 3 f . f 3 f 3 3 3 f 
                f 3 3 3 f 3 f . f 3 f 3 3 3 f 
                f f f f f f f . f f f f f f f 
                `)
        } else if (facing == 4 && current_area != 7) {
            facing = 4.5
            animation.runImageAnimation(
            Arnold,
            [img`
                . . . . f f f . f f f . . . . 
                . . . . f 2 2 f 2 2 f . . . . 
                . . . . f f f f f f f . . . . 
                . . . f 3 3 3 3 3 3 3 f . . . 
                . . . f 3 3 3 3 3 3 3 f . . . 
                . . . f 3 f 3 3 3 f 3 f . . . 
                . f f f 3 3 3 3 3 3 3 f f f . 
                f 3 3 f 3 f f f f f 3 f 3 3 f 
                f 3 3 f 3 3 3 3 3 3 3 f 3 3 f 
                f 3 3 3 f f f f f f f 3 3 3 f 
                f 3 3 3 3 3 3 3 3 3 3 3 3 3 f 
                f 3 3 3 3 3 3 3 3 3 3 3 3 3 f 
                f 3 3 3 3 3 3 3 3 3 3 3 3 3 f 
                f 3 3 3 f f f f f f f 3 3 3 f 
                f 3 3 3 f f f . f 3 f 3 3 3 f 
                f 3 3 3 f . . . f 3 f f f f f 
                f 3 3 3 f . . . f 3 3 3 f . . 
                f 3 3 3 f . . . f 3 3 3 f . . 
                f f f f f . . . f f f f f . . 
                `,img`
                . . . . f f f . f f f . . . . 
                . . . . f 2 2 f 2 2 f . . . . 
                . . . . f f f f f f f . . . . 
                . . . f 3 3 3 3 3 3 3 f . . . 
                . . . f 3 3 3 3 3 3 3 f . . . 
                . . . f 3 f 3 3 3 f 3 f . . . 
                . f f f 3 3 3 3 3 3 3 f f f . 
                f 3 3 f 3 f f f f f 3 f 3 3 f 
                f 3 3 f 3 3 3 3 3 3 3 f 3 3 f 
                f 3 3 3 f f f f f f f 3 3 3 f 
                f 3 3 3 3 3 3 3 3 3 3 3 3 3 f 
                f 3 3 3 3 3 3 3 3 3 3 3 3 3 f 
                f 3 3 3 3 3 3 3 3 3 3 3 3 3 f 
                f 3 3 3 f f f f f f f 3 3 3 f 
                f 3 3 3 f 3 f . f f f 3 3 3 f 
                f f f f f 3 f . . . f 3 3 3 f 
                . . f 3 3 3 f . . . f 3 3 3 f 
                . . f 3 3 3 f . . . f 3 3 3 f 
                . . f f f f f . . . f f f f f 
                `],
            200,
            true
            )
        } else if (facing == 4.5 && (current_area != 7 && !(controller.down.isPressed()))) {
            animation.stopAnimation(animation.AnimationTypes.All, Arnold)
            Arnold.setImage(img`
                . . . . f f f . f f f . . . . 
                . . . . f 2 2 f 2 2 f . . . . 
                . . . . f f f f f f f . . . . 
                . . . f 3 3 3 3 3 3 3 f . . . 
                . . . f 3 3 3 3 3 3 3 f . . . 
                . . . f 3 f 3 3 3 f 3 f . . . 
                . f f f 3 3 3 3 3 3 3 f f f . 
                f 3 3 f 3 f f f f f 3 f 3 3 f 
                f 3 3 f 3 3 3 3 3 3 3 f 3 3 f 
                f 3 3 3 f f f f f f f 3 3 3 f 
                f 3 3 3 3 3 3 3 3 3 3 3 3 3 f 
                f 3 3 3 3 3 3 3 3 3 3 3 3 3 f 
                f 3 3 3 3 3 3 3 3 3 3 3 3 3 f 
                f 3 3 3 f f f f f f f 3 3 3 f 
                f 3 3 3 f 3 f . f 3 f 3 3 3 f 
                f 3 3 3 f 3 f . f 3 f 3 3 3 f 
                f 3 3 3 f 3 f . f 3 f 3 3 3 f 
                f 3 3 3 f 3 f . f 3 f 3 3 3 f 
                f f f f f f f . f f f f f f f 
                `)
        }
    }
}
function area_select () {
    scene.setBackgroundImage(img`
        7777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777
        7777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777
        7777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777
        ff77777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777
        77f7777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777
        777f7777777777777777777777777777777777777777777777777777777777777777777777ff777777777777777777777777777777777777777777777777777777777777777777777777777777777777
        777f777777777777777777777777777777777777777777777777777777777777777777777fddf77777777777777777777777777777777777777777777777777777777777777777777777777777777777
        ffffff777fff777777777777777777777777777777777777777777777777777777777777fddddff777777777777777777777777777777777777777777777777777777777777777777777777777777777
        f7f777f7f777f77777777777777777777777777777777777777777777777777777777777fddddddf77777777777777777777777777777777777777777777777777777777777777777777777777777777
        7ff7fffff777f7777777777777777777777777777777777777777777777777777777777fddddddddf7777777777777777777777777777777777777777777777777777777777777777777777777777777
        7fff7777ffffff77777777777777777777777777777777777777777777777777777777fddddddddddf777777777777777777777777777777777777777777777777777777777777777777777777777777
        f77f777777f777f77777777777777777777777777777777777777ffff777777777777fddddddddddddff7777777777777777777777777777777777777777777777777777777777777777777777777777
        f77f777777fffff7777777777777777777777777777777777777fddddf7777777777fddddffffdddddddf777777777777777777777777777777777777777777777777777777777777777777777777777
        efff77777ffeef7777777777777777777777777777777777777fddddddff77777777fddddfbbfddddddddf77777777777777777777777777777777777777777777777777777777777777777777777777
        efeffffffefeefffffffffff77777777777777777777777777fdddddddddf777777fdddddffffddddddddf77777777777777777777777777777777777777777777777777777777777777777777777777
        efefefeefefeeff77f777ff7ff77777777777777777777777fdddffffddddf7777fddddddddddddddddddff7777777777777777777777777777777777777777777777777777777777777777777777777
        efefefeefefeef77777777777ffffff77777777777777777fddddfbbfddddf7777fddddddddddddddddddfdf777777777777777777777777777777777777777777777777777777777777777777777777
        efefefeefefeef77777777777f77777f7777777777777777fddddffffddddf7777fddddddddddddddddddfddf77777777777777777777777777777777777777777777777777777777777777777777777
        efefefeefefeef777f777f777777777ff777777777777777fddddddddddddfffffdddddddddddddddddddfdddff777777777777777777777777777777777777777777777777777777777777777777777
        efefefeefefeef777f7777f777777777f777777777777777fddddddddddddfdddddddddddddddddddddddfdddddf77777777777777777777777777777777777777777777777777777777777777777777
        efefefeefefeef777f7777f777f77777f777777777777777fddddddddddddfdddddddddddddddddddddddfddddddf7777777777777777777777777777777777777777777777777777777777777777777
        efefefeefefeef777f777f77777f777ff777777777777777fddddddddddddfdddddddddddddddddddddddfdddddddf777777777777777777777777777777777777777777777777777777777777777777
        efefefeefefeef777f777f777777f777f777777777777777fddddddddddddfdddddddddddddddddddddddfffffffff777777777777777777777777777777777777777777777777777777777777777777
        efefefeefefeef77f777ff77f7777777f777777777777777fddddddddddddfdddddddddddddddddddddddfdddddddf777777777777777777777777777777777777777777777777777777777777777777
        efefefeefefeef77777f77777ff77777f777777777777777fddddddddddddfdddddfffffffdddddddddddfddffffdf777777777777777777777777777777777777777777777777777777777777777777
        ffefffeefefeef7777777777777f7777f777777777777777fddddddddddddfddddfeeeeeeefddddddddddfddfbbfdfff7777777777777777777777777777777777777777777777777777777777777777
        7fef7feefffeefff7777ffffffffff77f777777777777777fddddddddddddfddddfeeeeeeefddddddddddfddffffdddf7777777777777777777777777777777777777777777777777777777777777777
        7fff7feef7feef7f77ffbbbbbbbbbbfff777777777777777fddddddddddddfddddfeeeeeeefddddddddddfdddddddddf7777777777777777777777777777777777777777777777777777777777777777
        77777ffff7feef777fbbbbbbbbbbbbbbff77777777777777fddddddddddddfddddfeeeeeeefddddddddddfdddddddddf7777777777777777777777777777777777777777777777777777777777777777
        7777777777fffff7fbbbbbbbbbbbbbbbbbff777777777777fddddddddddddfddddfeeeeeeefddddddddddfdddddddddf7777777777777777777777777777777777777777777777777777777777777777
        777777777777777ffbbbbbbbbbbbbbbbbbbff77777777777fddddddddddddfddddfeeeeeeefddddddddddfdddddddddf7777777777777777777777777777777777777777777777777777777777777777
        7777777777777777fbbbbbbbbbbbbbbbbbbbf77777777777fddddddddddddfddddfeeeeeeefdffffffffffdddddddddf7777777777777777777777777777777777777777777777777777777777777777
        7777777777777777fbbbbbbbbbbbbbbbbbbbbf7777777777fdddddddddffffffffffffffffff777777777ffffffffff77777777777777777777777777777777777777777777777777777777777777777
        7777777777777777fbbbbbbbbbbbbbbbbbbbbf7777777777ffffffffff777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777
        7777777777777777fbbbbbbbbbbbbbbbbbbbbf77777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777ffffffffffffffffffffffffffff77
        7777777777777777fbbbbbbbbbbbbbbbbbbbbbf7777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777f77777777777777777777777777f77
        7777777777777777ffbbbbbbbbbbbbbbbbbbbbf7777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777f77777777777777777777777777f77
        7777777777777777fffbbbbbbbbbbbbbbbbbbbffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff7777777777777777777777f77777777777777777777777777f77
        7777777777777777fcfbbbbbbbbbbbbbbbbbbbfeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeef7777777777777777777777f77777777777777777777777777f77
        7777777777777777fccffbbbbbbbbbbbbbbbbffeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeef7777777777777777777777f77777777777777777777777777f77
        7777777777777777fcccfffbbbbbbbbbbbbbfffeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeef7777777777777777777777f77777777777777777777777777f77
        7777777777777777fccccccfffbbbbbbbfffccfeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeef7777777777777777777777f77777777777777777777777777f77
        7777777777777777fcccccccccfffffffcccccfeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeef7777777777777777777777f77777777777777777777777777f77
        777777777777777fccccccccccccccccccccccfeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeef7777777777777777777777f77777777777777777777777777f77
        777777777777777fcccccccccccfffffccccccfeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeef7777777777777777777777f7777777777fffffffffffffffff77
        777777777777777fccccfffffffbbbbbffccccfeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeef7777777777777777777777f7777777777f777777777777777777
        777777777777777fccffbbbbbbbbbbbbbbffccfeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeef7777777777777777777777f7777777777f777777777777777777
        777777777777777fcfbbbbbbbbbbbbbbbbbbfcfeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeef7777777777777777777777f7777777777f777777777777777777
        777777777777777ffbbbbbbbbbbbbbbbbbbbbffeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeef777777777ffff777777777f7777777777f77fffffffffffffff7
        777777777777777ffbbbbbbbbbbbbbbbbbbbbbffeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeef77777777fddddf77777777f7777777777f77f7777777777777f7
        777777777777777fbbbbbbbbbbbbbbbbbbbbbbbfeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeef7777777fdddddffff77777f7777777777f77f7777777777777f7
        777777777777777fbbbbbbbbbbbbbbbbbbbbbbbfeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeef777777fddddddfeef77777f7777777777f77f7777777777777f7
        777777777777777fbbbbbbbbbbbbbbbbbbbbbbbfeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeef777777fddddddfeef77777f7777777777f77f7777777777777f7
        777777777777777fbbbbbbbbbbbbbbbbbbbbbbbfeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeef777777fddddddfeef77777f7777777777f77f7777777777777f7
        777777777777777fbbbbbbbbbbbbbbbbbbbbbbffeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeef777777fddddddfeef77777f7777777777f77f7777777777777f7
        777777777777777fbbbbbbbbbbbbbbbbbbbbbbffeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeef777777fddddddffff77777f7777777777f77f7777777777777f7
        777777777777777ffbbbbbbbbbbbbbbbbbbbbfcfeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeef777777fddddddfbbf77777f7777777777f77f7777777777777f7
        777777777777777fffbbbbbbbbbbbbbbbbbbfccfeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeef777777fddddddfbbf77777f7777777777f77f7777777777777f7
        777777777777777fcfffbbbbbbbbbbbbbfffcccfeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeef777777fddddddffff77777f7777777777f77f7777777777777f7
        777777777777777fccccffbbbbbbbbbfffcccccfeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeef777777fddddddfeef77777f7777777777f77f7777777777777f7
        777777777777777fccccccfffffffffccccccccfeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeef777777fddddddfeef77777f7777777777f77f7777777777777f7
        777777777777777fcccccccccccccccccccccccfeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeef777777fddddddfeef77777f7777777777f77f7777777777777f7
        777777777777777fcccccccccccccccccccccccfeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeef777777fddddddfeef77777f7777777777f77f7777777777777f7
        777777777777777fcccccccccccccccccccccccfeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeef777777fddddddfeef77777f7777777777f77f7777777777777f7
        777777777777777fcccccccccccccccccccccccfeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeef777777fddddddfeef77777f7777777777f77f7777777777777f7
        777777777777777fcccccccccccccccccccccccfeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeef777777fddddddfeef77777f7777777777f77f7777777777777f7
        777777777777777fcccccccccccccccccccccccfeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeef7777777fdddddfeef77777f7777777777f77f7777777777777f7
        777777777777777fcccccccccccccccccccccccfeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeef77777777fdddfffff77777f7777777777f77f7777777777777f7
        777777777777777fcccccccccccccccccccccccfeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeef777777777fff7777777777f7777777777f77f7777777777777f7
        777777777777777fcccccccccccccccccccccccfeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeef7777777777777777777777f7777777777f77f7777777777777f7
        777777777777777fcccccccccccccccccccccccfeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeef7777777777777777777777ffffffffffff77f7777777777777f7
        777777777777777fcccccccccccccccccccccccfeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeef777777777777777777777777777777777777f7777777777777f7
        777777777777777fcccccccccccccccccccccccfeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeef777777777777777fffffffffffffffffff77f7777777777777f7
        777777777777777fcccccccccccccccccccccccfeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeef777777777777777f77777777777777777f77f7777777777777f7
        777777777777777fcccccccccccccccccccccccfeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeef777777777777777f77777777777777777f77f7777777777777f7
        777777777777777fcccccccccccccccccccccccfeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeef777777777777777f77777777777777777f77f7777777777777f7
        777777777777777fcccccccccccccccccccccccfeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeef777777777777777f77777777777777777f77f7777777777777f7
        777777777777777fcccccccccccccccccccccccfeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeef777777777777777f77777777777777777f77f7777777777777f7
        777777777777777fcccccccccccccccccccccccfeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeef777777777777777f77777777777777777f77f7777777777777f7
        777777777777777fcccccccccccccccccccccccfeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeef777777777777777f77777777777777777f77f7777777777777f7
        777777777777777fcccccccccccccccccccccccfeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeef777777777777777f77777777777777777f77f7777777777777f7
        777777777777777fcccccccccccccccccccccccfeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeef777777777777777f77777777777777777f77f7777777777777f7
        777777777777777fcccccccccccccccccccccccfeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeef777777777777777f77777777777777777f77f7777777777777f7
        777777777777777fffffffffffffffffffffffffeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeffffffffeeeeeeeeeeeeeeeef777777777777777fffffffffffffffffff77fffffffffffffff7
        777777777777777feeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeefccccccccfeeeeeeeeeeeeeeef7777777777777777777777777777777777777777777777777777
        777777777777777fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffccccccccccffffffffffffffff7777777777777777777777777777777777777777777777777777
        7777777777777777777777777777777777777777777777777777777777777777777777777777777ffccccccccccccf777777777777777777777777777777777777777777777777777777777777777777
        777777777777777777777777777777777777777777777777777777777777777777777777777777fcccccccccccccccff7777777777777777777777777777777777777777777777777777777777777777
        77777777777777777777777777777777777777777777777777777777777777777777777777777fccccccccccccccccccf777777777777777777777777777777777777777777777777777777777777777
        7777777777777777777777777777777777777777777777777777777777777777777777777777fccccccccccccccccccccf77777777777777777777777777777777777777777777777777777777777777
        77777777777777777777777777777777777777777777777777777777777777777777777777fffffffffffffffffffffffff7777777777777777777777777777777777777777777777777777777777777
        777777777777777777777777777777777777777777777777777777777777777777777777777777777feef8feeef777777777777777777777777777777777777777777777777777777777777777777777
        777777777777777777777777777777777777777777777777777777777777777777777777777777777feefffeeef777777777777777777777777777777777777777777777777777777777777777777777
        777777777777777777777777777777777777777777777777777777777777777777777777777777777feeeeeeeef777777777777777777777777777777777777777777777777777777777777777777777
        777777777777777777777777777777777777777777777777777777777777777777777777777777777feeffffeef777777777777777777777777777777777777777777777777777777777777777777777
        777777777777777777777777777777777777777777777777777777777777777777777777777777777feefddfeef777777777777777777777777777777777777777777777777777777777777777777777
        77777777777777777777777777777777777777777777777777777fffffffffffffffffffffffffffffeefddfeeffffffffffffffffffffffffffffffffff777777777777777777777777777777777777
        77777777777777777777777777777777777777777777777777777f777777777777777777777777777ffffffffff77777777777777777777777777777777f777777777777777777777777777777777777
        77777777777777777777777777777777777777777777777777777f777777777777777777777777777777777777777777777777777777777777777777777f777777777777777777777777777777777777
        77777777777777777777777777777777777777777777777777777f777777777777777777777777777777777777777777777777777777777777777777777f777777777777777777777777777777777777
        77777777777777777777777777777777777777777777777777777f777777777777777777777777777777777777777777777777777777777777777777777f777777777777777777777777777777777777
        77777777777777777777777777777777777777777777777777777f777777777777777777777777777777777777777777777777777777777777777777777f777777777777777777777777777777777777
        77777777777777777777777777777777777777777777777777777f777777777777777777777777777777777777777777777777777777777777777777777f777777777777777777777777777777777777
        77777777777777777777777777777777777777777777777777777f777777777777777777777777777777777777777777777777777777777777777777777f777777777777777777777777777777777777
        77777777777777777777777777777777777777777777777777777f777777777777777777777777777777777777777777777777777777777777777777777f777777777777777777777777777777777777
        77777777777777777777777777777777777777777777777777777fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff777777777777777777777777777777777777
        7777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777
        7777777ffffffffffffffffffffffffffff77777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777
        777777fccccccccccccccccccccccccccccf7777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777
        77777fccccccccccccccccccccccccccccccf777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777
        77777fcccccffffffffffcccfffffffffcccf777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777
        77777fcccccf99999999fcccf9999999fcccf777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777
        77777fcfffcf99999999fcccf9999999fcccf777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777
        77777fcfdfcffffffffffcccfffffffffcccf777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777
        77777fcfdfccccccccccccccccccccccccccf777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777
        77777fcfdfccccccccccccccccccccccccccf777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777
        77777ffffffffffffffffffffffffffffffff777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777
        7777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777
        7777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777
        7777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777
        `)
    tiles.setCurrentTilemap(tilemap`level25`)
    a_button_signal.setPosition(-2100, 0)
    Area_entrance.setPosition(-1000, 0)
    Arnold.setPosition(-2000, 0)
    Binglep.setPosition(-1000, 0)
    Zac.setPosition(-1000, 0)
    area_picture_one.setPosition(tilemap_to_pixels(5), tilemap_to_pixels(6))
    area_picture_two.setPosition(tilemap_to_pixels(9), tilemap_to_pixels(4))
    area_picture_three.setPosition(tilemap_to_pixels(4), tilemap_to_pixels(4))
    area_picture_four.setPosition(tilemap_to_pixels(1), tilemap_to_pixels(6) + 10)
    area_picture_five.setPosition(tilemap_to_pixels(7), tilemap_to_pixels(3))
    area_picture_six.setPosition(tilemap_to_pixels(0), tilemap_to_pixels(1))
    cursor.setImage(img`
        . . . . . . . f f . . . . . . . 
        . . . . . . f 5 5 f . . . . . . 
        . . . . . f 5 5 5 5 f . . . . . 
        . . . . f 5 5 5 5 5 5 f . . . . 
        . . . f 5 5 5 5 5 5 5 5 f . . . 
        . . f 5 5 5 5 5 5 5 5 5 5 f . . 
        . f 5 5 5 5 5 5 5 5 5 5 5 5 f . 
        f 5 5 5 5 5 5 5 5 5 5 5 5 5 5 f 
        f 5 5 5 5 5 5 5 5 5 5 5 5 5 5 f 
        . f 5 5 5 5 5 5 5 5 5 5 5 5 f . 
        . . f 5 5 5 5 5 5 5 5 5 5 f . . 
        . . . f 5 5 5 5 5 5 5 5 f . . . 
        . . . . f 5 5 5 5 5 5 f . . . . 
        . . . . . f 5 5 5 5 f . . . . . 
        . . . . . . f 5 5 f . . . . . . 
        . . . . . . . f f . . . . . . . 
        `)
    cursor.setFlag(SpriteFlag.StayInScreen, true)
    cursor.setPosition(tilemap_to_pixels(4), tilemap_to_pixels(2))
    controller.moveSprite(cursor)
    controller.moveSprite(Arnold, 0, 0)
    game_state = 2
    cutscene_phase = 1
}
function tilemap_to_pixels (position: number) {
    return position * 16 + 8
}
function animate_map_select_icons (icon: Sprite, value: number) {
    if (cursor.overlapsWith(icon)) {
        if (!(animated == value)) {
            animated = value
            animation.runImageAnimation(
            icon,
            [img`
                . 8 8 8 8 8 8 . 
                8 8 8 8 8 8 8 8 
                8 8 8 8 8 8 8 8 
                8 8 8 9 9 8 8 8 
                8 8 8 9 9 8 8 8 
                8 8 8 8 8 8 8 8 
                8 8 8 8 8 8 8 8 
                . 8 8 8 8 8 8 . 
                `,img`
                . 8 8 8 8 8 8 . 
                8 8 8 8 8 8 8 8 
                8 8 8 9 9 8 8 8 
                8 8 9 9 9 9 8 8 
                8 8 9 9 9 9 8 8 
                8 8 8 9 9 8 8 8 
                8 8 8 8 8 8 8 8 
                . 8 8 8 8 8 8 . 
                `,img`
                . 8 8 8 8 8 8 . 
                8 8 8 9 9 8 8 8 
                8 8 9 9 9 9 8 8 
                8 9 9 9 9 9 9 8 
                8 9 9 9 9 9 9 8 
                8 8 9 9 9 9 8 8 
                8 8 8 9 9 8 8 8 
                . 8 8 8 8 8 8 . 
                `,img`
                . 8 8 8 8 8 8 . 
                8 9 9 9 9 9 9 8 
                8 9 9 9 9 9 9 8 
                8 9 9 9 9 9 9 8 
                8 9 9 9 9 9 9 8 
                8 9 9 9 9 9 9 8 
                8 9 9 9 9 9 9 8 
                . 8 8 8 8 8 8 . 
                `,img`
                . 9 9 9 9 9 9 . 
                9 9 9 9 9 9 9 9 
                9 9 9 9 9 9 9 9 
                9 9 9 9 9 9 9 9 
                9 9 9 9 9 9 9 9 
                9 9 9 9 9 9 9 9 
                9 9 9 9 9 9 9 9 
                . 9 9 9 9 9 9 . 
                `],
            200,
            false
            )
            sprites.setDataNumber(icon, "animated timer", 0)
        }
        if (sprites.readDataNumber(icon, "animated timer") != 20) {
            sprites.changeDataNumberBy(icon, "animated timer", 1)
        } else {
            return animated
        }
        return animated
    } else {
        if (sprites.readDataNumber(icon, "animated timer") == 20) {
            sprites.setDataNumber(icon, "animated timer", 21)
            animation.runImageAnimation(
            icon,
            [img`
                . 9 9 9 9 9 9 . 
                9 9 9 9 9 9 9 9 
                9 9 9 9 9 9 9 9 
                9 9 9 9 9 9 9 9 
                9 9 9 9 9 9 9 9 
                9 9 9 9 9 9 9 9 
                9 9 9 9 9 9 9 9 
                . 9 9 9 9 9 9 . 
                `,img`
                . 8 8 8 8 8 8 . 
                8 9 9 9 9 9 9 8 
                8 9 9 9 9 9 9 8 
                8 9 9 9 9 9 9 8 
                8 9 9 9 9 9 9 8 
                8 9 9 9 9 9 9 8 
                8 9 9 9 9 9 9 8 
                . 8 8 8 8 8 8 . 
                `,img`
                . 8 8 8 8 8 8 . 
                8 8 8 9 9 8 8 8 
                8 8 9 9 9 9 8 8 
                8 9 9 9 9 9 9 8 
                8 9 9 9 9 9 9 8 
                8 8 9 9 9 9 8 8 
                8 8 8 9 9 8 8 8 
                . 8 8 8 8 8 8 . 
                `,img`
                . 8 8 8 8 8 8 . 
                8 8 8 8 8 8 8 8 
                8 8 8 9 9 8 8 8 
                8 8 9 9 9 9 8 8 
                8 8 9 9 9 9 8 8 
                8 8 8 9 9 8 8 8 
                8 8 8 8 8 8 8 8 
                . 8 8 8 8 8 8 . 
                `,img`
                . 8 8 8 8 8 8 . 
                8 8 8 8 8 8 8 8 
                8 8 8 8 8 8 8 8 
                8 8 8 9 9 8 8 8 
                8 8 8 9 9 8 8 8 
                8 8 8 8 8 8 8 8 
                8 8 8 8 8 8 8 8 
                . 8 8 8 8 8 8 . 
                `,img`
                . 8 8 8 8 8 8 . 
                8 8 8 8 8 8 8 8 
                8 8 8 8 8 8 8 8 
                8 8 8 8 8 8 8 8 
                8 8 8 8 8 8 8 8 
                8 8 8 8 8 8 8 8 
                8 8 8 8 8 8 8 8 
                . 8 8 8 8 8 8 . 
                `],
            200,
            false
            )
            return 0
        } else if (sprites.readDataNumber(icon, "animated timer") == 21) {
            return animated
        }
        animation.stopAnimation(animation.AnimationTypes.All, icon)
        icon.setImage(img`
            . 8 8 8 8 8 8 . 
            8 8 8 8 8 8 8 8 
            8 8 8 8 8 8 8 8 
            8 8 8 8 8 8 8 8 
            8 8 8 8 8 8 8 8 
            8 8 8 8 8 8 8 8 
            8 8 8 8 8 8 8 8 
            . 8 8 8 8 8 8 . 
            `)
        return animated
    }
}
let animated = 0
let talking_to_who = 0
let cutter: Sprite = null
let cutscene_now = false
let A_buttonoud = false
let facing = 0
let current_area = 0
let cutscene_phase = 0
let game_state = 0
let cursor_is = 0
let cursor: Sprite = null
let area_picture_six: Sprite = null
let area_picture_five: Sprite = null
let area_picture_four: Sprite = null
let area_picture_three: Sprite = null
let area_picture_two: Sprite = null
let area_picture_one: Sprite = null
let a_button_signal: Sprite = null
let temporary_sprite_1: Sprite = null
let Cammander: Sprite = null
let Binglep: Sprite = null
let Zac: Sprite = null
let Arnold: Sprite = null
let Piggy: Sprite = null
let Area_anything_else: Sprite = null
let Area_entrance: Sprite = null
let story_iintro: TextSprite = null
let play: TextSprite = null
scene.setBackgroundImage(img`
    9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999111111111111111111111111111111111111111
    9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999991111111111111111111111111111111111111111
    9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999911111111111111111111111111111111111111111
    9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999911111111111111111111111111111111111111111
    9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999111111111111111111111111111111111111111111
    9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999991111111111111111111111111111111111111111111
    9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999911111111111111111111111111111111111111111111
    9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999111111111111111111111111111111111111111111111
    9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999991111111111111111111111111111111111111111111111
    9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999991111111111111111111111111111111111111111111111
    9999999999999999999999999991111111199999999999999999999999999999999999999999999999999999999999999999999999999999991111111111111111111111111111111111111111111111
    9999999999999999999999999111111111111111999911111111111199999999999999999999999999999999999999999999999999999999999999999991111111111111111111111111111111111111
    9999999999999999999999991111111111111111111111111111111119999999999999999999999999999999999999999999999999999999999999999999111111111111111111111111111191111111
    9999999999fffffffffffffffffffffffff111ffffffffffffffffffffffffff999fffffffffffffffffffffffff9999fffffffffffff999999999999999911111111111199111111111111999991111
    9999999999f55555555555555555555555f111f555555555555555555555555f999f55555555555555555555555f9999f55555555555f999999999999999991111111111999991111111119999999999
    9999999999f55555555555555555555555f111f555555555555555555555555f999f55555555555555555555555f9999f55555555555f999999999999999999911111111999999991119999999999999
    9999999999f55555555555555555555555f111f555555555555555555555555f999f55555555555555555555555f9999f555fffff555f999999999999999999999999999999999999999999999999999
    9999999999f5555ffffffffffffffffffff111ffffffffff555555ffffffffff999f55555555555555555555555f9999f555f999f555f999999999999999999999999999999999999999999999999999
    9999999999f5555f1111111111111111111111111111111f555555f111119999999f55555555555555555555555f9999f555f999f555f999999999999999999999999999999999999999999999999999
    9999999999f5555f1111111111111111111111111111111f555555f111111999999f55555fffffffffffff55555f9999f555fffff555f999999999999999999999999999999999999999999999999999
    9999999999f5555f1111111111111111111111111111111f555555f111111999999f55555f99999999999f55555f9999f55555555555f999999999999999999999999999999999999999999999999999
    9999999999f5555f1111111111111111111111111111111f555555f111111199999f55555f99999999999f55555f9999f55555555555f999999999999999999999999999999999999999999999999999
    9999999999f5555f1111111111111111111111111111111f555555f111111199999f55555f99999999999f55555f9999f55ffffffffff999999999999999999999999999999999999999999999999999
    9999999999f5555f1111111111111111111111111111111f555555f111111199999f55555f99999999999f55555f9999f55f999999999999999999999999999999999999999999999999999999999999
    9999999999f5555f1111111111111111111111111111111f555555f111111119999f55555f99999999999f55555f9999f55f999999999999999999999999999999999999999999999999999999999999
    9999999999f5555f1111111199991111111119111111111f555555f111111119999f55555f99999999999f55555f9999f55f999999999999999999999999999999999999999999999999999999999999
    9999999999f5555f9999999999999911119999911111111f555555f999991119999f55555f99999999999f55555f9999f55f999999999999999999999999999999999999999999999999999999999999
    9999999999f5555f9999999999999999999999999111111f555555f999999999999f55555f99999999999f55555f9999f55f999999999999999999999999999999999999999999999999999999999999
    9999999999f5555f9999999999999999999999999999999f555555f999999999999f55555f99999999999f55555f9999f55f999999999999999999999999999999999999999999999999999999999999
    9999999999f5555f9999999999999999999999999999999f555555f999999999999f55555f99999999999f55555f9999f55f999999999999999999999999999999999999999999999999999999999999
    9999999999f5555ffffffffffffffffff99999999999999f555555f999999999999f55555f99999999999f55555f9999f55f999999999999999999999999999999999999999999999999999999999999
    9999999999f555555555555555555555f99999999999999f555555f999999999999f55555f99999999999f55555f9999f55f999999999999999999999999999999999999999999999999999999999999
    9999999999f555555555555555555555f99999999999999f555555f999999999999f55555f99999999999f55555f9999f55f999999999999999999999999999999999999999999999999999999999999
    9999999999f555555555555555555555f99999999999999f555555f999999999999f55555f99999999999f55555f9999f55f999999999999999999999999999999999999999999999999999999999999
    9999999999ffffffffffffffff555555f99999999999999f555555f999999999999f55555f99999999999f55555f9999f55f999999999999999999999999999999999999999999999999999999999999
    9999999999999999999999999f555555f99999999999999f555555f999999999999f55555f99999999999f55555f9999f55f999999999999999999999999999999999999999999999999999999999999
    9999999999999999999999999f555555f99999999999999f555555f999999999999f55555f99999999999f55555f9999f55f999999999999999999999999999999999999999999999999999999999999
    9999999999999999999999999f555555f99999999999999f555555f999999999999f55555f99999999999f55555f9999f55f999999999999999999999999999999999999999999999999999999999999
    9999999999999999999999999f555555f99999999999999f555555f999999999999f55555f99999999999f55555f9999f55f999999999999999999999999999999999999999999999999999999999999
    9999999999999999999999999f555555f99999999999999f555555f999999999999f55555f99999999999f55555f9999f55f999999999999999999999999999999999999999999999999999999999999
    9999999999ffffffffffffffff555555f99999999999999f555555f999999999999f55555f99999999999f55555f9999f55f999999999999999999999999999999999999999999999999999999999999
    9999999999f555555555555555555555f99999999999999f555555f999999999999f55555fffffffffffff55555f9999f55f999999999999999999999999999999999999999999999999999999999999
    9999999999f555555555555555555555f99999999999999f555555f999999999999f55555555555555555555555f9999f55f999999999999999999999999999999999999999999999999999999999999
    9999999999f555555555555555555555f99999999999999f555555f999999999999f55555555555555555555555f9999f55f999999999999999999999999999999999999999999999999999999999999
    9999999999f555555555555555555555f99999999999999f555555f999999999999f55555555555555555555555f9999f55f999999999999999999999999999999999999999999999999999999999999
    9999999999fffffffffffffffffffffff99999999999999ffffffff999999999999f55555555555555555555555f9999ffff999999999999999999999999999999999999999999999999999999999999
    9999999999999999999999999999999999999999999999999999999999999999999f55555555555555555555555f99999999999999999999999999999999999999999999999999999999999999999999
    9999999999999999999999999999999999999999999999999999999999999999999fffffffffffffffffffffffff99999999999999999999999999999999999999999999999999999999999999999999
    9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
    1199999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
    1119999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
    1119999999999999333339933333922222992222293999399929999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
    1111999999999999399939999399929999992999993999399929999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
    1111999999999999399939999399929999992999993333399929999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
    1111999999999999399939999399929999992999999939999929999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
    1111999999999999333339999399929999992999999939999929999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
    1119999999999999399999999399929999992999999939999929999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
    1199999999999999399999999399929222992922299939999929999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
    9999999999999999399999999399929992992999299939999929999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
    9999999999999999399999999399929992992999299939999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
    9999999999999999399999933333922222992222299939999929999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
    9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
    9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
    9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
    9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
    9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
    9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
    9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
    9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
    9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
    9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
    9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
    9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
    9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
    9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
    9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
    9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
    9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
    9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
    9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
    9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
    9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
    9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
    9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
    9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
    9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
    9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
    9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
    9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
    9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
    9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
    9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
    9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
    9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
    9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
    9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
    9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
    9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
    9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
    9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
    9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
    9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
    9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
    9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
    9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
    9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
    9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
    9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
    9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
    9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
    9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
    9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
    9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
    9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
    9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
    9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
    9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
    9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
    9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
    9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
    `)
play = textsprite.create("Play", 5, 2)
play.setBorder(1, 8)
play.setPosition(50, 85)
story_iintro = textsprite.create("story", 5, 2)
story_iintro.setBorder(1, 8)
story_iintro.setPosition(53, 100)
Area_entrance = sprites.create(img`
    ........fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeef.......
    ........feeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeef.......
    ......fffffffffffffffffffffffffffffffffffffeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeef......
    .....feeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeefffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeef.....
    ....feeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeefffffffffffffffffffffffffffffffffff...
    ..ffeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeef...
    .feeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeef..
    feeeeffffffffffffffffffffffffeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeef..
    ffffffeeeeeeeeeeeeeeeeeeeeeeeffffffffffffffffffffffffffffffffffffffffffffffeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeef.
    .....feeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeffffffffffffffffffffffffffffffffffffffffffffffeeeeeeeeeeeeeeeeeeeeeeeeeeeef
    .....feeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeefffffffffffffffffffffffffffff
    .....feeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeef.......
    .....feeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeef.......
    .....feeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeef.......
    .....feeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeef.......
    .....feeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeef.......
    .....feeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeef.......
    .....feeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeef.......
    .....feeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeef.......
    .....feeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeef.......
    .....feeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeef.......
    .....feeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeef.......
    .....feeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeef.......
    .....feeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeef.......
    .....feeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeef.......
    .....feeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeef.......
    .....feeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeef.......
    .....feeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeef.......
    .....feeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeef.......
    .....feeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeef.......
    .....feeeeeeeeeeeeeeeffffffffffffffffffffffffffffffffffeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeef.......
    .....feeeeeeeeeeeeeeefccccccccccccccccccccccccccccccccfeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeef.......
    .....feeeeeeeeeeeeeeefccccccccccccccccccccccccccccccccfeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeef.......
    .....feeeeeeeeeeeeeeefccccccccccccccccccccccccccccccccfeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeef.......
    .....feeeeeeeeeeeeeeefccccccccccccccccccccccccccccccccfeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeef.......
    .....feeeeeeeeeeeeeeefccccccccccccccccccccccccccccccccfeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeef.......
    .....feeeeeeeeeeeeeeefccccccccccccccccccccccccccccccccfeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeef.......
    .....feeeeeeeeeeeeeeefccccccccccccccccccccccccccccccccfeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeef.......
    .....feeeeeeeeeeeeeeefccccccccccccccccccccccccccccccccfeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeef.......
    .....feeeeeeeeeeeeeeefccccccccccccccccccccccccccccccccfeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeef.......
    .....feeeeeeeeeeeeeeefccccccccccccccccccccccccccccccccfeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeffffffffeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeef.......
    .....feeeeeeeeeeeeeeefccccccccccccccccccccccccccccccccfeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeefffddddddddffffffffffeeeeeeeeeeeeeeeeeeeeeeeeeeeeef.......
    .....feeeeeeeeeeeeeeefccccccccccccccccccccccccccccccccfeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeffdddddddddddddddddddddffffffeeeeeeeeeeeeeeeeeeeeeeef.......
    .....feeeeeeeeeeeeeeefccccccccccccccccccccccccccccccccfeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeefffddddddddddddddddddddddddddddffeeeeeeeeeeeeeeeeeeeeeef.......
    .....feeeeeeeeeeeeeeefccccccccccccccccccccccccccccccccfeeeeeeeeeeeeeeeeeeeeeeeeeeeeefffdddddddddddddddddddddddddddddddddffeeeeeeeeeeeeeeeeeeeef.......
    .....feeeeeeeeeeeeeeefccccccccccccccccccccccccccccccccfeeeeeeeeeeeeeeeeeeeeeeeeeeeffddddddddddddddddddddddddddddddddddddddffeeeeeeeeeeeeeeeeeef.......
    .....feeeeeeeeeeeeeeefccccccccccccccccccccccccccccccccfeeeeeeeeeeeeeeeeeeeeeeeefffddddddddddddddddddddddddddddddddddddddddddffeeeeeeeeeeeeeeeef.......
    .....feeeeeeeeeeeeeeefccccccccccccccccccccccccccccccccfeeeeeeeeeeeeeeeeeeeeeeffdddddddddddddddddddddddddddddddddddddddddddddddffeeeeeeeeeeeeeef.......
    .....feeeeeeeeeeeeeeefccccccccccccccccccccccccccccccccfeeeeeeeeeeeeeeeeeeeeeefddddddddddddddddddddddddddddddddddddddddddddddddddffeeeeeeeeeeeef.......
    .....feeeeeeeeeeeeeeefccccccccccccccccccccccccccccccccfeeeeeeeeeeeeeeeeeeeeefddddddddddddddddddddddddddddddddddddddddddddddddddddfeeeeeeeeeeeef.......
    .....feeeeeeeeeeeeeeefccccccccccccccccccccccccccccccccfeeeeeeeeeeeeeeeeeeeeefddddddddddddddddddddddddddddddddddddddddddddddddddddfeeeeeeeeeeeef.......
    .....feeeeeeeeeeeeeeefccccccccccccccccccccccccccccccccfeeeeeeeeeeeeeeeeeeeeefddddddddddddddddddddddddddddddddddddddddddddddddddddfeeeeeeeeeeeef.......
    .....feeeeeeeeeeeeeeefccccccccccccccccccccccccccccccccfeeeeeeeeeeeeeeeeeeeeefddddddddddddddddddddddddddddddddddddddddddddddddddddfeeeeeeeeeeeef.......
    .....feeeeeeeeeeeeeeefccccccccccccccccccccccccccccccccfeeeeeeeeeeeeeeeeeeeeefddddddddddddddddddddddddddddddddddddddddddddddddddddfeeeeeeeeeeeef.......
    .....feeeeeeeeeeeeeeefccccccccccccccccccccccccccccccccfeeeeeeeeeeeeeeeeeeeeefddddddddddddddddddddddddddddddddddddddddddddddddddddfeeeeeeeeeeeef.......
    .....feeeeeeeeeeeeeeefccccccccccccccccccccccccccccccccfeeeeeeeeeeeeeeeeeeeeefddddddddddddddddddddddddddddddddddddddddddddddddddddfeeeeeeeeeeeef.......
    .....feeeeeeeeeeeeeeefccccccccccccccccccccccccccccccccfeeeeeeeeeeeeeeeeeeeeefddddddddddddddddddddddddddddddddddddddddddddddddddddfeeeeeeeeeeeef.......
    .....feeeeeeeeeeeeeeefccccccccccccccccccccccccccccccccfeeeeeeeeeeeeeeeeeeeeefddddddddddddddddddddddddddddddddddddddddddddddddddddfeeeeeeeeeeeef.......
    .....feeeeeeeeeeeeeeefccccccccccccccccccccccccccccccccfeeeeeeeeeeeeeeeeeeeeefddddddddddddddddddddddddddddddddddddddddddddddddddddfeeeeeeeeeeeef.......
    .....feeeeeeeeeeeeeeefccccccccccccccccccccccccccccccccfeeeeeeeeeeeeeeeeeeeeefddddddddddddddddddddddddddddddddddddddddddddddddddddfeeeeeeeeeeeef.......
    .....feeeeeeeeeeeeeeefccccccccccccccccccccccccccccccccfeeeeeeeeeeeeeeeeeeeeefddddddddddddddddddddddddddddddddddddddddddddddddddddfeeeeeeeeeeeef.......
    .....feeeeeeeeeeeeeeefccccccccccccccccccccccccccccccccfeeeeeeeeeeeeeeeeeeeeefdddddddddddddddddddddddddddddddddddddddfddddddddddddfeeeeeeeeeeeef.......
    .....feeeeeeeeeeeeeeefccccccccccccccccccccccccccccccccfeeeeeeeeeeeeeeeeeeeeefddddddddddddddddddddddddddddddddddddddffffddddddddddfeeeeeeeeeeeef.......
    .....feeeeeeeeeeeeeeeffffffffffffffffffffffffffffffffffeeeeeeeeeeeeeeeeeeeeefddddddddddddddddddddddddddddddddddddddfbbfffddddddddfeeeeeeeeeeeef.......
    .....feeeeeeeeeeeeeeefeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeefdddddddddddddddddddddddddddddddddddddffbbbbffdddddddfeeeeeeeeeeeef.......
    .....feeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeefdddddddddddddddddddddddddddddddddddddfbbbbbbbffdddddfeeeeeeeeeeeef.......
    .....feeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeefdddddddddddddddddddddddddddddddddddddfbbbbbbbbbfffddfeeeeeeeeeeeef.......
    .....feeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeefddddddddddddddddddddddddddddddddddddddfbbbbbbbbbbbfffeeeeeeeeeeeef.......
    .....feeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeefddddddddddddddddddddddddddddddddddddddffbbbbbbbbbbbbfeeeeeeeeeeeef.......
    .....feeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeefddddddddddddddddddddddddddddddddddddddddffbbbbbbbbbbfeeeeeeeeeeeef.......
    .....feeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeefdddddddddddddddddddddddddddddddddddddddddffbbbbbbbbbfeeeeeeeeeeeef.......
    .....feeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeefdddddddddddddddddddddddddddddddddddddddddddffbbbbbbbfeeeeeeeeeeeef.......
    .....feeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeefddddddddddddddddddddddddddddddddddddddddddddfffbbbbbfeeeeeeeeeeeef.......
    .....feeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeefddddddddddddddddddddddddddddddddddddddddddddddfffbbbfeeeeeeeeeeeef.......
    .....feeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeefddddddddddddddddddddddddddddddddddddddddddddddddfffffeeeeeeeeeeeef.......
    .....feeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeefddddddddddddddddddddddddddddddddddddddddddddddddddddfeeeeeeeeeeeef.......
    .....feeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeefddddddddddddddddddddddddddddddddddddddddddddddddddddfeeeeeeeeeeeef.......
    .....feeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeefddddddddddddddddddddddddddddddddddddddddddddddddddddfeeeeeeeeeeeef.......
    .....feeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeefddddddddddddddddddddddddddddddddddddddddddddddddddddfeeeeeeeeeeeef.......
    .....feeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeefddddddddddddddddddddddddddddddddddddddddddddddddddddfeeeeeeeeeeeef.......
    .....feeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeefddddddddddddddddddddddddddddddddddddddddddddddddddddfeeeeeeeeeeeef.......
    .....feeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeefddddddddddddddddddddddddddddddddddddddddddddddddddddfeeeeeeeeeeeef.......
    .....feeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeefddddddddddddddddddddddddddddddddddddddddddddddddddddfeeeeeeeeeeeef.......
    .....feeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeefddddddddddddddddddddddddddddddddddddddddddddddddddddfeeeeeeeeeeeef.......
    .....feeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeefddddddddddddddddddddddddddddddddddddddddddddddddddddfeeeeeeeeeeeef.......
    .....feeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeefddddddddddddddddddddddddddddddddddddddddddddddddddddfeeeeeeeeeeeef.......
    .....feeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeefddddddddddddddddddddddddddddddddddddddddddddddddddddfeeeeeeeeeeeef.......
    .....feeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeefddddddddddddddddddddddddddddddddddddddddddddddddddddfeeeeeeeeeeeef.......
    .....feeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeefddddddddddddddddddddddddddddddddddddddddddddddddddddfeeeeeeeeeeeef.......
    .....feeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeefddddddddddddddddddddddddddddddddddddddddddddddddddddfeeeeeeeeeeeef.......
    .....feeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeefddddddddddddddddddddddddddddddddddddddddddddddddddddfeeeeeeeeeeeef.......
    .....feeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeefddddddddddddddddddddddddddddddddddddddddddddddddddddfeeeeeeeeeeeef.......
    .....feeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeefddddddddddddddddddddddddddddddddddddddddddddddddddddfeeeeeeeeeeeef.......
    .....feeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeefddddddddddddddddddddddddddddddddddddddddddddddddddddfeeeeeeeeeeeef.......
    .....feeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeefddddddddddddddddddddddddddddddddddddddddddddddddddddfeeeeeeeeeeeef.......
    .....feeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeefddddddddddddddddddddddddddddddddddddddddddddddddddddfeeeeeeeeeeeef.......
    .....feeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeefddddddddddddddddddddddddddddddddddddddddddddddddddddfeeeeeeeeeeeef.......
    .....feeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeefddddddddddddddddddddddddddddddddddddddddddddddddddddfeeeeeeeeeeeef.......
    .....feeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeefddddddddddddddddddddddddddddddddddddddddddddddddddddfeeeeeeeeeeeef.......
    .....feeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeefddddddddddddddddddddddddddddddddddddddddddddddddddddfeeeeeeeeeeeef.......
    .....feeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeefddddddddddddddddddddddddddddddddddddddddddddddddddddfeeeeeeeeeeeef.......
    .....feeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeefddddddddddddddddddddddddddddddddddddddddddddddddddddfeeeeeeeeeeeef.......
    .....feeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeefddddddddddddddddddddddddddddddddddddddddddddddddddddfeeeeeeeeeeeef.......
    .....feeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeefddddddddddddddddddddddddddddddddddddddddddddddddddddfeeeeeeeeeeeef.......
    .....feeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeefddddddddddddddddddddddddddddddddddddddddddddddddddddfeeeeeeeeeeeef.......
    .....ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff.......
    `, SpriteKind.areaexit)
Area_entrance.setPosition(-2200, 0)
Area_anything_else = sprites.create(img`
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    `, SpriteKind.areaexit)
Area_anything_else.setPosition(-1000, 0)
Piggy = sprites.create(img`
    .................fff.ff..
    .................f22f2f..
    .................fbffff..
    ................ffff2f2f.
    ................f2222222f
    ..fffffffffffffff22222fff
    ..f222222222222222222222f
    ..f222222222222222222ffff
    fff2222222222222222fff...
    f22222222222222222f......
    .ffff222fffffff222f......
    ....f222f.....f222f......
    ....fffff.....fffff......
    `, SpriteKind.Player)
Piggy.setPosition(-2000, 0)
Arnold = sprites.create(img`
    ..................ff.ff..
    .................f22f2f..
    .................fbffff..
    ................ffff3f3f.
    ................f3333333f
    ....fffffffffffff3333333f
    ...f333333333333333333fff
    ..f333333333333333333333f
    ..f333333333333333333ffff
    fff3333333333333333fff...
    f33333333333333333f......
    .ffff333fffffff333f......
    ....f333f3f.f3f333f......
    ....f333f3f.f3f333f......
    ....fffffff.fffffff......
    `, SpriteKind.Player)
Arnold.setPosition(-2100, 0)
Zac = sprites.create(img`
    .................fff.ff..
    .................f22f2f..
    .................fbffff..
    ................ffff7f7f.
    ................f7777777f
    ..fffffffffffffff77777fff
    ..f777777777777777777777f
    ..f777777777777777777ffff
    fff7777777777777777fff...
    f77777777777777777f......
    .ffff777fffffff777f......
    ....f777f7f.f7f777f......
    ....fffffff.fffffff......
    `, SpriteKind.Player)
Zac.setPosition(-2100, 0)
Binglep = sprites.create(img`
    . . f f . f f . . . . . . . . . . . . . . . . 
    . . f 2 f 2 2 f . . . . . . . . . . . . . . . 
    . . f f f f b f . . . . . . . . . . . . . . . 
    . f 3 f 3 f f f . . . . . . . . . . . . . . . 
    f 3 3 3 3 3 3 f f f f f f f f f f f f . . . . 
    f f f 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 f . . f f 
    f 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 f . . f . 
    . f f f f f f 3 3 3 3 3 3 3 3 3 3 3 f f f f . 
    . . . . . . f 3 f f f f f f f f f 3 f . . . . 
    . . . . . . f 3 f . f 3 f . f 3 f 3 f . . . . 
    . . . . . . f 3 f . f 3 f . f 3 f 3 f . . . . 
    . . . . . . f f f . f f f . f f f f f . . . . 
    `, SpriteKind.Player)
Binglep.setPosition(-2100, 0)
Cammander = sprites.create(img`
    ................ffffffff...
    ...............f11222111f..
    ..............f1112111111f.
    .............f111122211111f
    .............fff11111111fff
    ...............ffffffffff..
    ...............ff3333333f..
    ...............f33333333f..
    ...............f33333f3ff..
    ...............f33333333f..
    ....ffffffffffff33333333f..
    ...f333333333333333333fff..
    ..f333333333333333333333f..
    ..f333333333333333333ffff..
    fff3333333333333333fff.....
    f33333333333333333f........
    .ffff333fffffff333f........
    ....f333f3f.f3f333f........
    ....f333f3f.f3f333f........
    ....fffffff.fffffff........
    `, SpriteKind.Player)
Cammander.setPosition(-2100, 0)
temporary_sprite_1 = sprites.create(img`
    .ffffffffffffffffffffffffffffffffffffffffffffffffffffffffff.
    fbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbf
    fbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbf
    f1111111111111111111111111111111111111111111111111111111111f
    fbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbf
    f1111111111111111111111111111111111111111111111111111111111f
    .ffffffffffffffffffffffffffffffffffffffffffffffffffffffffff.
    ..................f1111111111111111111111f..................
    ..................f1111111111111111111111f..................
    ..................f1111111111111111111111f..................
    ..................f1111111111111111111111f..................
    ..................f1111111111111111111111f..................
    ..................f1111111111111111111111f..................
    ..................f1111111111111111111111f..................
    ..................f1111111111111111111111f..................
    ..................f1111111111111111111111f..................
    ..................f1111111111111111111111f..................
    ..................f1111111111111111111111f..................
    ..................f1111111111111111111111f..................
    ..................f1111111111111111111111f..................
    ..................f1111111111111111111111f..................
    ..................f1111111111111111111111f..................
    ..................f1111111111111111111111f..................
    ..................f1111111111111111111111f..................
    ..................f1111111111111111111111f..................
    `, SpriteKind.Player)
temporary_sprite_1.setPosition(-2100, 0)
a_button_signal = sprites.create(img`
    . 1 1 1 1 1 1 . 
    1 2 2 2 2 2 2 1 
    1 2 1 1 1 1 2 1 
    1 2 1 1 1 1 2 1 
    1 2 2 2 2 2 2 1 
    1 2 1 1 1 1 2 1 
    1 2 1 1 1 1 2 1 
    . 1 1 1 1 1 1 . 
    `, SpriteKind.Player)
a_button_signal.setPosition(-2100, 0)
area_picture_one = sprites.create(img`
    . 8 8 8 8 8 8 . 
    8 8 8 8 8 8 8 8 
    8 8 8 8 8 8 8 8 
    8 8 8 8 8 8 8 8 
    8 8 8 8 8 8 8 8 
    8 8 8 8 8 8 8 8 
    8 8 8 8 8 8 8 8 
    . 8 8 8 8 8 8 . 
    `, SpriteKind.areapicture)
area_picture_two = sprites.create(img`
    . 8 8 8 8 8 8 . 
    8 8 8 8 8 8 8 8 
    8 8 8 8 8 8 8 8 
    8 8 8 8 8 8 8 8 
    8 8 8 8 8 8 8 8 
    8 8 8 8 8 8 8 8 
    8 8 8 8 8 8 8 8 
    . 8 8 8 8 8 8 . 
    `, SpriteKind.areapicture)
area_picture_three = sprites.create(img`
    . 8 8 8 8 8 8 . 
    8 8 8 8 8 8 8 8 
    8 8 8 8 8 8 8 8 
    8 8 8 8 8 8 8 8 
    8 8 8 8 8 8 8 8 
    8 8 8 8 8 8 8 8 
    8 8 8 8 8 8 8 8 
    . 8 8 8 8 8 8 . 
    `, SpriteKind.areapicture)
area_picture_four = sprites.create(img`
    . 8 8 8 8 8 8 . 
    8 8 8 8 8 8 8 8 
    8 8 8 8 8 8 8 8 
    8 8 8 8 8 8 8 8 
    8 8 8 8 8 8 8 8 
    8 8 8 8 8 8 8 8 
    8 8 8 8 8 8 8 8 
    . 8 8 8 8 8 8 . 
    `, SpriteKind.areapicture)
area_picture_five = sprites.create(img`
    . 8 8 8 8 8 8 . 
    8 8 8 8 8 8 8 8 
    8 8 8 8 8 8 8 8 
    8 8 8 8 8 8 8 8 
    8 8 8 8 8 8 8 8 
    8 8 8 8 8 8 8 8 
    8 8 8 8 8 8 8 8 
    . 8 8 8 8 8 8 . 
    `, SpriteKind.areapicture)
area_picture_six = sprites.create(img`
    . 8 8 8 8 8 8 . 
    8 8 8 8 8 8 8 8 
    8 8 8 8 8 8 8 8 
    8 8 8 8 8 8 8 8 
    8 8 8 8 8 8 8 8 
    8 8 8 8 8 8 8 8 
    8 8 8 8 8 8 8 8 
    . 8 8 8 8 8 8 . 
    `, SpriteKind.areapicture)
area_picture_one.setPosition(-4000, 0)
area_picture_two.setPosition(-4000, 0)
area_picture_three.setPosition(-4000, 0)
area_picture_four.setPosition(-4000, 0)
area_picture_five.setPosition(-4000, 0)
area_picture_six.setPosition(-4000, 0)
sprites.setDataNumber(area_picture_one, "animated timer", 0)
sprites.setDataNumber(area_picture_two, "animated timer", 0)
sprites.setDataNumber(area_picture_three, "animated timer", 0)
sprites.setDataNumber(area_picture_four, "animated timer", 0)
sprites.setDataNumber(area_picture_five, "animated timer", 0)
sprites.setDataNumber(area_picture_six, "animated timer", 0)
cursor = sprites.create(img`
    f f . . . . . . . . . . . . . . 
    f 5 f f . . . . . . . . . . . . 
    f 5 5 5 f f . . . . . . . . . . 
    f 5 5 5 5 5 f f . . . . . . . . 
    f 5 5 5 5 5 5 5 f . . . . . . . 
    f 5 5 5 5 5 5 5 5 f f . . . . . 
    f 5 5 5 5 5 5 5 5 5 5 f f . . . 
    f 5 5 5 5 5 5 5 5 5 5 5 5 f f . 
    f 5 5 5 5 5 5 5 5 5 5 5 5 5 5 f 
    f 5 5 5 5 5 5 5 5 5 5 5 5 f f . 
    f 5 5 5 5 5 5 5 5 5 5 f f . . . 
    f 5 5 5 5 5 5 5 5 f f . . . . . 
    f 5 5 5 5 5 f f f . . . . . . . 
    f 5 5 5 f f . . . . . . . . . . 
    f 5 f f . . . . . . . . . . . . 
    f f . . . . . . . . . . . . . . 
    `, SpriteKind.Player)
cursor.setPosition(20, play.y)
cursor_is = 1
game_state = 1
cutscene_phase = 0
current_area = 0
facing = 1
A_buttonoud = false
cutscene_now = false
// this is where stuff besides just talking happens in a cutscene
game.onUpdate(function () {
    if (talking_to_who == 1) {
        Zac_to_Arnold()
    }
    if (game_state == 4) {
        Arnold_too_camander()
    }
})
// this is where I ask what cutscene has started
game.onUpdate(function () {
    if (cursor_is < 0) {
        if (game_state == 1 && cutscene_phase == 0) {
            talking_to_someone2(Arnold, Binglep, 1, 5, 1)
        }
    }
})
game.onUpdate(function () {
    if (cursor_is == 2) {
        cursor.setPosition(20, story_iintro.y)
    } else if (cursor_is == 1) {
        cursor.setPosition(20, play.y)
    }
    if (cursor_is == 2 && controller.A.isPressed()) {
        story_intro()
    } else if (cursor_is == 1 && controller.A.isPressed()) {
        start_game()
    }
    if (cursor_is < 0) {
        cursor_overlaped(area_picture_one, 1, false)
        cursor_overlaped(area_picture_two, 2, false)
        cursor_overlaped(area_picture_three, 3, false)
        cursor_overlaped(area_picture_four, 4, false)
        cursor_overlaped(area_picture_five, 5, false)
        cursor_overlaped(area_picture_six, 6, false)
        Arnolds_Animations()
    }
    if (game_state >= 2) {
        animated = animate_map_select_icons(area_picture_one, 2.1)
        animated = animate_map_select_icons(area_picture_two, 2.2)
        animated = animate_map_select_icons(area_picture_three, 2.3)
        animated = animate_map_select_icons(area_picture_four, 2.4)
        animated = animate_map_select_icons(area_picture_five, 2.5)
        animated = animate_map_select_icons(area_picture_six, 2.6)
    }
    if (current_area == 7) {
        if (controller.A.isPressed() && Arnold.vy == 0) {
            Arnold.vy = -150
        }
    }
    if (Arnold.overlapsWith(Area_anything_else)) {
        a_button_signal.setPosition(Area_anything_else.x, Area_anything_else.y)
        a_button_signal.setImage(img`
            . . 1 1 1 1 1 1 1 1 1 1 1 1 . . 
            . 1 1 1 1 1 1 1 1 1 1 1 1 1 1 . 
            1 1 1 2 2 2 2 2 2 2 2 2 2 1 1 1 
            1 1 1 2 2 2 2 2 2 2 2 2 2 1 1 1 
            1 1 1 2 2 1 1 1 1 1 1 2 2 1 1 1 
            1 1 1 2 2 1 1 1 1 1 1 2 2 1 1 1 
            1 1 1 2 2 1 1 1 1 1 1 2 2 1 1 1 
            1 1 1 2 2 2 2 2 2 2 2 2 2 1 1 1 
            1 1 1 2 2 2 2 2 2 2 2 2 2 1 1 1 
            1 1 1 2 2 1 1 1 1 1 1 2 2 1 1 1 
            1 1 1 2 2 1 1 1 1 1 1 2 2 1 1 1 
            1 1 1 2 2 1 1 1 1 1 1 2 2 1 1 1 
            1 1 1 2 2 1 1 1 1 1 1 2 2 1 1 1 
            1 1 1 2 2 1 1 1 1 1 1 2 2 1 1 1 
            . 1 1 1 1 1 1 1 1 1 1 1 1 1 1 . 
            . . 1 1 1 1 1 1 1 1 1 1 1 1 . . 
            `)
    } else if (Arnold.overlapsWith(Area_entrance)) {
        if (current_area != 3) {
            a_button_signal.setPosition(Area_entrance.x, Area_entrance.y)
            a_button_signal.setImage(img`
                . . 1 1 1 1 1 1 1 1 1 1 1 1 . . 
                . 1 1 1 1 1 1 1 1 1 1 1 1 1 1 . 
                1 1 1 2 2 2 2 2 2 2 2 2 2 1 1 1 
                1 1 1 2 2 2 2 2 2 2 2 2 2 1 1 1 
                1 1 1 2 2 1 1 1 1 1 1 2 2 1 1 1 
                1 1 1 2 2 1 1 1 1 1 1 2 2 1 1 1 
                1 1 1 2 2 1 1 1 1 1 1 2 2 1 1 1 
                1 1 1 2 2 2 2 2 2 2 2 2 2 1 1 1 
                1 1 1 2 2 2 2 2 2 2 2 2 2 1 1 1 
                1 1 1 2 2 1 1 1 1 1 1 2 2 1 1 1 
                1 1 1 2 2 1 1 1 1 1 1 2 2 1 1 1 
                1 1 1 2 2 1 1 1 1 1 1 2 2 1 1 1 
                1 1 1 2 2 1 1 1 1 1 1 2 2 1 1 1 
                1 1 1 2 2 1 1 1 1 1 1 2 2 1 1 1 
                . 1 1 1 1 1 1 1 1 1 1 1 1 1 1 . 
                . . 1 1 1 1 1 1 1 1 1 1 1 1 . . 
                `)
        } else {
            a_button_signal.setPosition(Area_entrance.x, Area_entrance.y + 15)
            a_button_signal.setImage(img`
                .......11111111111111111111111111111111.......
                ......1111111111111111111111111111111111......
                .....111111111111111111111111111111111111.....
                ....11111111111111111111111111111111111111....
                ...1111111111111111111111111111111111111111...
                ..111111222222222222222222222222222222111111..
                .11111112222222222222222222222222222221111111.
                1111111122222222222222222222222222222211111111
                1111111122211111111111111111111111122211111111
                1111111122211111111111111111111111122211111111
                1111111122211111111111111111111111122211111111
                1111111122211111111111111111111111122211111111
                1111111122211111111111111111111111122211111111
                1111111122211111111111111111111111122211111111
                1111111122211111111111111111111111122211111111
                1111111122211111111111111111111111122211111111
                1111111122211111111111111111111111122211111111
                1111111122211111111111111111111111122211111111
                1111111122211111111111111111111111122211111111
                1111111122222222222222222222222222222211111111
                1111111122222222222222222222222222222211111111
                1111111122222222222222222222222222222211111111
                1111111122211111111111111111111111122211111111
                1111111122211111111111111111111111122211111111
                1111111122211111111111111111111111122211111111
                1111111122211111111111111111111111122211111111
                1111111122211111111111111111111111122211111111
                1111111122211111111111111111111111122211111111
                1111111122211111111111111111111111122211111111
                1111111122211111111111111111111111122211111111
                1111111122211111111111111111111111122211111111
                1111111122211111111111111111111111122211111111
                1111111122211111111111111111111111122211111111
                1111111122211111111111111111111111122211111111
                1111111122211111111111111111111111122211111111
                1111111122211111111111111111111111122211111111
                1111111122211111111111111111111111122211111111
                1111111122211111111111111111111111122211111111
                1111111122211111111111111111111111122211111111
                1111111122211111111111111111111111122211111111
                .11111111111111111111111111111111111111111111.
                ..111111111111111111111111111111111111111111..
                ...1111111111111111111111111111111111111111...
                ....11111111111111111111111111111111111111....
                .....111111111111111111111111111111111111.....
                ......1111111111111111111111111111111111......
                .......11111111111111111111111111111111.......
                `)
        }
    } else if (cutscene_now == false) {
        a_button_signal.setPosition(-2100, 0)
    }
})
