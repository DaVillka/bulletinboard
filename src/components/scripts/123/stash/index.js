"use strict";
let money = call('money');
let notify = call('notifications')
let vehicles = call('vehicles');
let utils = call('utils');
let logger = call('logger');

module.exports = {
   
    init() {
       
    },
    
    async loadCharacterStash(player) {
        if (!player.character) return;
        let stash = await db.Models.CharacterStash.findAll({
            where: {
                characterId: player.character.id
            }
        });
        player.character.stash = stash;
        console.log(`[STASH] Для персонажа ${player.character.name} загружено ${stash.length} предметов`);
    },

    async saveStashItem(player, prizeId) {
        if (!player.character) return;
        let item = await db.Models.CharacterStash.create({
            characterId: player.character.id,
            prizeId: prizeId
        });
        player.character.stash.push(item);
    },
    async removeItem(player, index) {
        if (!player.character) return;
        player.character.stash[index].destroy();
        player.character.stash.splice(index, 1);
    },
}