const stash = require("./index");
const inventory = call('inventory');

module.exports = {
    "init": async () => {
        await stash.init();
        inited(__dirname);
    },
    "characterInit.done": (player) => {
        stash.loadCharacterStash(player);
    },
    "stash.items.show": (player) => {
        if (!player.character) return;
        if (player.character.stash.length == 0) return notify.warning(player, `У вас нет предметов в Схроне`);
        let stash = player.character.stash.map(x => inventory.getInventoryItem(x.prizeId));
        player.call('stash.items.show', [stash]);
    },
    "stash.items.use": (player, id) => {
        stash.useItem(player, id);
    },
}