var interactionMenu = new Vue({
  el: "#interactionMenu",
  data: {
    show: false,
    // Возможность использования
    enable: true,
    left: 80, /// сдвиг от левой части экрана
    // Текущее меню
    menu: null,
    menus: {
      "vehicle": {
        name: "vehicle", // название меню
        items: [{
          text: "Двери",
          icon: "key.svg"
        },
        {
          text: "Капот",
          icon: "hood.svg"
        },
        {
          text: "Багажник",
          icon: "trunk.svg"
        },
        {
          text: "Ремонт",
          icon: "tool.svg"
        }
        ],
        handler(index) {
          var item = this.items[index];
          if (item.text == 'Двери') {
            mp.trigger(`vehicles.lock`);
            mp.trigger(`interaction.menu.close`);
          }
          if (item.text == 'Капот') {
            mp.trigger(`vehicles.hood`);
            mp.trigger(`interaction.menu.close`);
          }
          if (item.text == 'Багажник') {
            mp.trigger(`vehicles.trunk`);
            mp.trigger(`interaction.menu.close`);
          }
          if (item.text == 'Диагностика') {
            mp.trigger(`carservice.diagnostics.offer`);
            mp.trigger(`interaction.menu.close`);
          }
          if (item.text == 'Взломать') {
            mp.trigger(`interaction.menu.close`);
          }
          if (item.text == 'Ограбить') {
            mp.trigger(`interaction.menu.close`);
          }
          if (item.text == 'Ремонт') {
            mp.trigger(`interaction.menu.close`);
          }
          if (item.text == 'NOOSE') {
            interactionMenu.menu = interactionMenu.menus["noose_vehicle"];
          }
          if (item.text == 'Вытащить') {
            mp.trigger(`interaction.police.ejectlist.get`);
            //mp.trigger(`interaction.menu.close`);
          }
          mp.trigger(`interactionMenu.onClick`, this.name, item.text);
        }
      },
      "vehicle_inside": {
        name: "vehicle_inside", // название меню
        items: [{
          text: "Двери",
          icon: "key.svg"
        },
        {
          text: "Вытолкнуть",
          icon: "eject.svg"
        },
        {
          text: "Автопилот",
          icon: "gps.svg"
        },
        ],
        handler(index) {
          var item = this.items[index];
          if (item.text == 'Двери') {
            mp.trigger(`vehicles.lock`);
            mp.trigger(`interaction.menu.close`);
          }
          if (item.text == 'Вытолкнуть') {
            mp.trigger(`interaction.ejectlist.get`);
            //mp.trigger(`interaction.menu.close`);
          }
          /*if (item.text == 'Звук сирены') {
              mp.trigger(`vehicles.siren.sound`);
              mp.trigger(`interaction.menu.close`);
          }*/
          if (item.text == 'Продать Т/С') {
            mp.trigger(`interaction.menu.close`);
            mp.trigger(`vehicles.sell.show`);
          }
          if (item.text == 'Автопилот') {
            mp.trigger(`vehicles.autopilot`);
            mp.trigger(`interaction.menu.close`);
          }
          if (item.text == 'Авто семьи') {
            mp.trigger(`interaction.menu.close`);
            mp.trigger(`callRemote`, `families.vehicles.showMenu`);
          }
        }
      },
      "vehicle_ejectlist": {
        name: "vehicle_ejectlist",
        items: [],
        handler(index) {
          var item = this.items[index];
          mp.trigger(`interaction.eject`, index);
          mp.trigger(`interaction.menu.close`);
        }
      },
      "police_ejectlist": {
        name: "police_ejectlist",
        items: [],
        handler(index) {
          var item = this.items[index];
          mp.trigger(`interaction.police.eject`, index);
          mp.trigger(`interaction.menu.close`);
        }
      },
      "player_ownmenu": {
        name: "player_ownmenu",
        items: [
        //   {
        //   text: "Мои документы",
        //   icon: "doc.svg"
        // },
        // {
        //   text: "Мой транспорт",
        //   icon: "vehicle.svg"
        // },
        {
          text: "Мой схрон",
          icon: "dice.svg"
        },
        {
          text: "Мои призы",
          icon: "dice.svg"
        },
        {
          text: "Призы с кейсов",
          icon: "dice.svg"
        },
        {
          text: "Анимации",
          icon: "activity.svg"
        },
        {
          text: "Скины на оружие",
          icon: "weapon.svg"
        },
          // {
          //   text: "Карантин",
          //   icon: "quarantine.svg"
          // },
          // {
          //     text: "Слепить снежок",
          //     icon: "snow.svg"
          // }
        ],
        handler(index) {
          var item = this.items[index];
          if (item.text == 'Мои документы') {
            mp.trigger(`documents.list`);
            //mp.trigger(`interaction.menu.close`);
          } else if (item.text == "Организация") {
            mp.trigger(`interaction.menu.close`);
            selectMenu.showByName("factionControl");
          } else if (item.text == "Учения") {
            mp.trigger(`interaction.menu.close`);
            if (captureScore.show) return notifications.push(`error`, `Недоступно`);
            mp.trigger(`callRemote`, `army.capture.start`);
          } else if (item.text == "Захват") {
            mp.trigger(`interaction.menu.close`);
            if (captureScore.show) return notifications.push(`error`, `Недоступно`);
            mp.trigger(`callRemote`, `bands.capture.start`);
          } else if (item.text == "Захват биз.") {
            mp.trigger(`interaction.menu.close`);
            if (captureScore.show) return notifications.push(`error`, `Недоступно`);
            mp.trigger(`callRemote`, `mafia.bizWar.show`);
          } else if (item.text == "Эфир") {
            mp.trigger(`interaction.menu.close`);
            mp.trigger(`callRemote`, `news.stream`);
          } else if (item.text == "Мой транспорт") {
            mp.trigger(`interaction.menu.close`);
            mp.trigger(`callRemote`, `vehicles.own.list.show`);
          } else if (item.text == "Анимации") {
            mp.trigger(`interaction.menu.close`);
            mp.trigger(`animMenu.open`);
            // } else if (item.text == "Слепить снежок") {
            //     mp.trigger(`interaction.menu.close`);
            //     mp.trigger(`callRemote`, `snowball.create`);
          } else if (item.text == "Мой Схрон") {
            mp.trigger(`interaction.menu.close`);
            mp.trigger(`callRemote`, `stash.items.show`);
          } else if (item.text == "Мои призы") {
            mp.trigger(`interaction.menu.close`);
            mp.trigger(`callRemote`, `casino.prizes.show`);
          } else if (item.text == "Призы с кейсов") {
            mp.trigger(`interaction.menu.close`);
            mp.trigger(`callRemote`, `cases.prizes.show`);
          } else if (item.text == 'Прослушка') {
            mp.trigger(`interaction.menu.close`);
            selectMenu.menu = selectMenu.menus["nooseWiretapping"];
            selectMenu.show = true;
          } else if (item.text == "Радар") {
            mp.trigger(`interaction.menu.close`);
            selectMenu.menu = selectMenu.menus["speedingRadars"];
            selectMenu.show = true;
          } else if (item.text == "Выйти из комнаты") {
            mp.trigger(`callRemote`, `gungame.room.exit`);
          } else if (item.text == "Семейный захват") {
            mp.trigger(`interaction.menu.close`);
            if (familiesCaptureScore.show) return notifications.push(`error`, `Недоступно`);
            mp.trigger(`callRemote`, `families.zones.capture.start`);
          } else if (item.text == "Скины на оружие") {
            mp.trigger(`interaction.menu.close`);
            mp.trigger(`callRemote`, `weaponSkins.show`);
          }
        }
      },
      "player_interaction": {
        name: "player_interaction",
        items: [{
          text: "Познакомиться",
          icon: "hands.svg"
        },
        {
          text: "Документы",
          icon: "doc.svg"
        },
        {
          text: "Деньги",
          icon: "wallet.svg"
        },
        {
          text: "Обмен",
          icon: "trade.svg"
        }
        ],
        handler(index) {
          var item = this.items[index];
          if (item.text == 'Познакомиться') {
            mp.trigger(`interaction.menu.close`);
            mp.trigger(`interactionMenu.onClick`, this.name, item.text);
          } else if (item.text == 'Документы') {
            mp.trigger(`documents.list`);
          } else if (item.text == 'Деньги') {
            mp.trigger(`interaction.menu.close`);
            mp.trigger(`interaction.money.show`);
          } else if (item.text == 'Обмен') {
            mp.trigger(`interaction.menu.close`);
            mp.trigger(`interactionMenu.onClick`, this.name, item.text);
          } else if (item.text == 'Организация') {
            interactionMenu.menu = interactionMenu.menus["faction"];
          } else if (item.text == 'Правительство') {
            interactionMenu.menu = interactionMenu.menus["government"];
          } else if (item.text == 'Полиция') {
            interactionMenu.menu = interactionMenu.menus["police"];
          } else if (item.text == 'NOOSE') {
            interactionMenu.menu = interactionMenu.menus["noose"];
          } else if (item.text == 'Больница') {
            interactionMenu.menu = interactionMenu.menus["hospital"];
          } else if (item.text == 'Армия') {
            interactionMenu.menu = interactionMenu.menus["army"];
          } else if (item.text == 'Weazel News') {
            interactionMenu.menu = interactionMenu.menus["news"];
          } else if (item.text == 'Группировка') {
            interactionMenu.menu = interactionMenu.menus["band"];
          } else if (item.text == 'Синдикат') {
            interactionMenu.menu = interactionMenu.menus["mafia"];
          } else if (item.text == 'Бросить кости') {
            mp.trigger(`interaction.menu.close`);
            mp.trigger(`casino.dice.offer.create`);
          } else if (item.text == 'Семья') {
            interactionMenu.menu = interactionMenu.menus["families"];
          }
        }
      },
      "player_docs": {
        name: "player_docs",
        items: [{
          text: "Основные",
          icon: "doc.svg"
        },
        // {
        //     text: "Лицензии на т/с",
        //     icon: "doc.svg"
        // },
        // {
        //     text: "Паспорт т/с",
        //     icon: "doc.svg"
        // },
        // {
        //     text: "Медкарта",
        //     icon: "doc.svg"
        // },
        {
          text: "Удостоверение",
          icon: "doc.svg"
        },
          // {
          //     text: "Лиц. на оружие",
          //     icon: "gun.svg"
          // },
        ],
        handler(index) {
          var item = this.items[index];
          if (item.text == 'Основные') {
            mp.trigger(`documents.showTo`, "mainDocuments");
            mp.trigger(`interaction.menu.close`);
          }
          if (item.text == 'Лицензии на т/с') {
            mp.trigger(`documents.showTo`, "driverLicense");
            mp.trigger(`interaction.menu.close`);
          }
          if (item.text == 'Паспорт т/с') {
            mp.trigger(`documents.showTo`, "carPass");
            mp.trigger(`interaction.menu.close`);
          }
          if (item.text == 'Медкарта') {
            mp.trigger(`documents.showTo`, "medCard");
            mp.trigger(`interaction.menu.close`);
          }
          if (item.text == 'Лиц. на оружие') {
            mp.trigger(`documents.showTo`, "gunLicense");
            mp.trigger(`interaction.menu.close`);
          }
          if (item.text == 'Удостоверение') {
            mp.trigger(`documents.showTo`, "governmentBadge");
            mp.trigger(`interaction.menu.close`);
          }
        }
      },
      "carPass_list": {
        name: "carPass_list",
        items: [],
        handler(index) {
          var item = this.items[index];
          let plate = item.text.split(' ')[1];
          mp.trigger('documents.carPass.list.choose', plate);
          mp.trigger(`interaction.menu.close`);
        }
      },
      "faction": {
        name: "faction",
        items: [{
          text: "Пригласить",
          icon: "invite.svg"
        },
        {
          text: "Уволить",
          icon: "uval.svg"
        },
        {
          text: "Ранг",
          icon: "rank.svg"
        }
        ],
        handler(index) {
          var item = this.items[index];
          mp.trigger(`interactionMenu.onClick`, this.name, item.text);
          mp.trigger(`interaction.menu.close`);
        }
      },
      "government": {
        name: "government",
        items: [
          {
            text: "Наручники",
            icon: "cuffs.svg"
          },
          {
            text: "Освобождение",
            icon: "freedom.svg"
          },
          {
            text: "Следование",
            icon: "follow.svg"
          },
          {
            text: "В авто",
            icon: "vehicle.svg"
          },
          {
            text: "Лиц. на оружие",
            icon: "gun.svg"
          },
          {
            text: "Лиц. на транспорт",
            icon: "vehicle.svg"
          },
          {
            text: "Карантин",
            icon: "quarantine.svg"
          },
        ],
        handler(index) {
          var item = this.items[index];
          mp.trigger(`interactionMenu.onClick`, this.name, item.text);
          mp.trigger(`interaction.menu.close`);
        }
      },
      "police": {
        name: "police",
        items: [{
          text: "Наручники",
          icon: "cuffs.svg"
        },
        {
          text: "Розыск",
          icon: "wanted.svg"
        },
        {
          text: "Обыск",
          icon: "search.svg"
        },
        {
          text: "Арест",
          icon: "arrest.svg"
        },
        {
          text: "Следование",
          icon: "follow.svg"
        },
        {
          text: "Лиц. на оружие",
          icon: "gun.svg"
        },
        {
          text: "В авто",
          icon: "vehicle.svg"
        },
        {
          text: "Карантин",
          icon: "quarantine.svg"
        },
        ],
        handler(index) {
          var item = this.items[index];
          if (item.text == 'Лиц. на оружие') return interactionMenu.showByName("police_gunlicense");
          mp.trigger(`interactionMenu.onClick`, this.name, item.text);
          mp.trigger(`interaction.menu.close`);
        }
      },
      "police_gunlicense": {
        name: "police_gunlicense",
        items: [
          {
            text: "Выдать",
          },
          {
            text: "Изъять",
          },
        ],
        handler(index) {
          var item = this.items[index];
          mp.trigger(`interactionMenu.onClick`, this.name, item.text);
          mp.trigger(`interaction.menu.close`);
        }
      },
      "noose": {
        name: "noose",
        items: [{
          text: "Наручники",
          icon: "cuffs.svg"
        },
        {
          text: "Розыск",
          icon: "wanted.svg"
        },
        {
          text: "Обыск",
          icon: "search.svg"
        },
        {
          text: "Арест",
          icon: "arrest.svg"
        },
        {
          text: "Следование",
          icon: "follow.svg"
        },
        {
          text: "Лиц. на оружие",
          icon: "gun.svg"
        },
        // {
        //     text: "Прослушка",
        //     icon: "headphones.svg"
        // },
        {
          text: "В авто",
          icon: "vehicle.svg"
        },
        {
          text: "Карантин",
          icon: "quarantine.svg"
        },
        ],
        handler(index) {
          var item = this.items[index];
          if (item.text == 'Лиц. на оружие') return interactionMenu.showByName("noose_gunlicense");
          mp.trigger(`interactionMenu.onClick`, this.name, item.text);
          mp.trigger(`interaction.menu.close`);
        }
      },
      "noose_gunlicense": {
        name: "noose_gunlicense",
        items: [
          {
            text: "Выдать",
          },
          {
            text: "Изъять",
          },
        ],
        handler(index) {
          var item = this.items[index];
          mp.trigger(`interactionMenu.onClick`, this.name, item.text);
          mp.trigger(`interaction.menu.close`);
        }
      },
      "noose_vehicle": {
        name: "noose_vehicle",
        items: [{
          text: "Номер",
        },],
        handler(index) {
          var item = this.items[index];
          mp.trigger(`interactionMenu.onClick`, this.name, item.text);
          mp.trigger(`interaction.menu.close`);
        }
      },
      "hospital": {
        name: "hospital",
        items: [{
          text: "Лечить",
          icon: "heal.svg"
        },
        {
          text: "Реанимировать",
          icon: "reanimate.svg"
        },
        {
          text: "Медкарта",
          icon: "doc.svg"
        },
        {
          text: "Карантин",
          icon: "quarantine.svg"
        },
        ],
        handler(index) {
          var item = this.items[index];
          mp.trigger(`interactionMenu.onClick`, this.name, item.text);
          mp.trigger(`interaction.menu.close`);
        }
      },
      "army": {
        name: "army",
        items: [{
          text: "Наручники",
          icon: "cuffs.svg"
        },
        {
          text: "Следование",
          icon: "follow.svg"
        },
        {
          text: "В авто",
          icon: "vehicle.svg"
        },
        {
          text: "Обыск",
          icon: "search.svg"
        },
        {
          text: "Карантин",
          icon: "quarantine.svg"
        },
        ],
        handler(index) {
          var item = this.items[index];
          mp.trigger(`interaction.menu.close`);
          mp.trigger(`interactionMenu.onClick`, this.name, item.text);
        }
      },
      "news": {
        name: "news",
        items: [{
          text: "Эфир",
          icon: "stream.svg"
        }],
        handler(index) {
          var item = this.items[index];
          mp.trigger(`interaction.menu.close`);
          mp.trigger(`interactionMenu.onClick`, this.name, item.text);
        }
      },
      "band": {
        name: "band",
        items: [
          {
            text: "Ограбить",
            icon: "rob.svg"
          },
          {
            text: "Связать",
            icon: "rope.svg"
          },
          {
            text: "Вести",
            icon: "follow.svg"
          },
          {
            text: "Мешок на голову",
            icon: "hide.svg"
          },
          {
            text: "В авто",
            icon: "vehicle.svg"
          },
        ],
        handler(index) {
          var item = this.items[index];
          mp.trigger(`interaction.menu.close`);
          mp.trigger(`interactionMenu.onClick`, this.name, item.text);
        }
      },
      "mafia": {
        name: "mafia",
        items: [{
          text: "Продать крышу",
          icon: "roof.svg"
        },
        {
          text: "Ограбить",
          icon: "rob.svg"
        },
        {
          text: "Связать",
          icon: "rope.svg"
        },
        {
          text: "Вести",
          icon: "follow.svg"
        },
        {
          text: "Мешок на голову",
          icon: "hide.svg"
        },
        {
          text: "В авто",
          icon: "vehicle.svg"
        },
        ],
        handler(index) {
          var item = this.items[index];
          mp.trigger(`interaction.menu.close`);
          mp.trigger(`interactionMenu.onClick`, this.name, item.text);
        }
      },
      "families": {
        name: "families",
        items: [{
          text: "Пригласить",
          icon: "invite.svg"
        }
        ],
        handler(index) {
          var item = this.items[index];
          mp.trigger(`interactionMenu.onClick`, this.name, item.text);
          mp.trigger(`interaction.menu.close`);
        }
      },
    },
    families: null,
    faction: null,
    hasHeadBag: false,
    room: false
  },
  methods: {
    imgSrc(index) {
      var item = this.menu.items[index];
      var icon = item.icon || "default.svg";
      return "img/interactionMenu/" + icon;
    },
    onClick(index) {
      this.menu.handler(index);
    },
    showByName(name) {
      var menu = this.menus[name];
      if (!menu) return;
      this.menu = menu;
      this.show = true;
    },
    addItems(menuName, items) {
      if (typeof items == 'string') items = JSON.parse(items);
      if (!Array.isArray(items)) items = [items];
      var menu = this.menus[menuName];
      if (!menu) return;
      items.forEach(item => {
        this.deleteItem(menuName, item.text);
        menu.items.push(item);
      });
    },
    deleteItem(menuName, itemText) {
      var menu = this.menus[menuName];
      if (!menu) return;
      for (var i = 0; i < menu.items.length; i++) {
        var item = menu.items[i];
        if (item.text == itemText) {
          menu.items.splice(i, 1);
          i--;
        }
      }
    },
  },
  watch: {
    enable(val) {
      if (!val) this.show = false;
    },
    show(val) {
      if (val) busy.add("interaction", true, true);
      else busy.remove("interaction", true);
    },
    faction(val) {
      if (!val) {
        this.deleteItem("player_interaction", "Организация");
        this.deleteItem("player_interaction", "Правительство");
        this.deleteItem("player_interaction", "Полиция");
        this.deleteItem("player_interaction", "NOOSE");
        this.deleteItem("player_interaction", "Больница");
        this.deleteItem("player_interaction", "Армия");
        this.deleteItem("player_interaction", "Weazel News");
        this.deleteItem("player_interaction", "Группировка");
        this.deleteItem("player_interaction", "Синдикат");
        this.deleteItem("player_ownmenu", "Организация");
        this.deleteItem("player_ownmenu", "Учения");
        this.deleteItem("player_ownmenu", "Захват");
        this.deleteItem("player_ownmenu", "Захват биз.");
        this.deleteItem("player_ownmenu", "Эфир");
        this.deleteItem("player_ownmenu", "Прослушка");
        this.deleteItem("player_ownmenu", "Радар");
        this.deleteItem("vehicle", "NOOSE");
        this.deleteItem("vehicle", "Взломать");
        return;
      }
      this.addItems("player_interaction", {
        text: "Организация",
        icon: "faction.svg"
      });
      this.addItems("player_ownmenu", {
        text: "Организация",
        icon: "faction.svg"
      });

      if (val == 1) { // government
        this.addItems("player_interaction", {
          text: "Правительство",
          icon: "government.svg"
        });
      } else this.deleteItem("player_interaction", "Правительство");


      if (val == 2) { // police
        this.addItems("player_interaction", {
          text: "Полиция",
          icon: "police.svg"
        });
        this.addItems("vehicle", {
          text: "Вытащить",
          icon: "eject.svg"
        });
        this.addItems("player_ownmenu", {
          text: "Радар",
          icon: "police.svg"
        });
      } else {
        this.deleteItem("player_interaction", "Полиция");
        this.deleteItem("vehicle", "Вытащить");
        this.deleteItem("player_ownmenu", "Радар");
      }
      if (val == 1 || val == 2 || val == 3 || val == 5 || val == 7 || val == 8 || val == 9 || val == 10 || val == 11 || val == 12 || val == 13 || val == 14 || val == 15 || val == 16) { // band
        this.addItems("vehicle", {
          text: "Вытащить",
          icon: "eject.svg"
        });
      } else {
        this.deleteItem("vehicle", "Вытащить");
      }

      if (val == 3) { // noose
        this.addItems("player_interaction", {
          text: "NOOSE",
          icon: "noose.svg"
        });
        this.addItems("vehicle", {
          text: "NOOSE",
          icon: "noose.svg"
        });
        this.addItems("player_ownmenu", {
          text: "Прослушка",
          icon: "headphones.svg"
        });
      } else {
        this.deleteItem("player_interaction", "NOOSE");
        this.deleteItem("vehicle", "NOOSE");
        this.deleteItem("player_ownmenu", "Прослушка");
      }

      if (val == 4) { // hospital
        this.addItems("player_interaction", {
          text: "Больница",
          icon: "hospital.svg"
        });
      } else this.deleteItem("player_interaction", "Больница");

      if (val == 5) { // army
        this.addItems("player_interaction", {
          text: "Армия",
          icon: "army.svg"
        });
      } else {
        this.deleteItem("player_interaction", "Армия");
        this.deleteItem("player_ownmenu", "Учения");
      }

      if (val == 6) { // news
        this.addItems("player_interaction", {
          text: "Weazel News",
          icon: "news.svg"
        });
        this.addItems("player_ownmenu", {
          text: "Эфир",
          icon: "stream.svg"
        });
      } else {
        this.deleteItem("player_interaction", "Weazel News");
        this.deleteItem("player_ownmenu", "Эфир");
      }

      if ((val >= 11 && val <= 16)) { // bands
        this.addItems("player_interaction", {
          text: "Группировка",
          icon: "band.svg"
        });
        this.addItems("player_ownmenu", {
          text: "Захват",
          icon: "war.svg"
        });

      } else {
        this.deleteItem("player_interaction", "Группировка");
        this.deleteItem("player_ownmenu", "Захват");
      }

      if ((val >= 7 && val <= 10)) { // mafia
        this.addItems("player_interaction", {
          text: "Синдикат",
          icon: "mafia.svg"
        });
        this.addItems('player_ownmenu', {
          text: "Захват биз.",
          icon: "war.svg"
        });
      } else {
        this.deleteItem("player_interaction", "Синдикат");
        this.deleteItem('player_ownmenu', "Захват биз.");
      }

      if ((val >= 7 && val <= 16)) {
        this.addItems("vehicle", {
          text: "Взломать",
          icon: "rob.svg"
        });
      } else {
        this.deleteItem("vehicle", "Взломать");
      }

      if ((val >= 7 && val <= 16)) {
        this.addItems("vehicle", {
          text: "Ограбить",
          icon: "rob.svg"
        });
      } else {
        this.deleteItem("vehicle", "Ограбить");
      }
    },
    hasHeadBag(val) {
      if (val) {
        var item = {
          text: "Снять мешок",
          icon: "hide.svg",
        };
        this.addItems("police", item);
        this.addItems("noose", item);
      } else {
        this.deleteItem("police", "Снять мешок");
        this.deleteItem("noose", "Снять мешок");
      }
    },
    room(val) {
      if (val) {
        this.addItems("player_ownmenu", {
          text: "Выйти из комнаты",
          icon: "faction.svg"
        });
      } else {
        this.deleteItem("player_ownmenu", "Выйти из комнаты");
      }
    },
    families(val) {
      if (!val) {
        this.deleteItem("player_ownmenu", "Семейный захват");
        this.deleteItem("player_interaction", "Семья");
        return;
      }

      this.addItems("player_interaction", {
        text: "Семья",
        icon: "faction.svg"
      });

      this.addItems("player_ownmenu", {
        text: "Семейный захват",
        icon: "war.svg"
      });
    },
  },
});

// for tests
// Для своего меню необходимо создать след. структуру (комментарии внутри):
/*  var testMenu = {
     name: "test", // название меню
     items: [{
             text: "Познакомиться", // текст пункта меню
             icon: "handshake.png" // иконка пункта меню (необяз.)
         },
         {
             text: "Обмен"
         },
         {
             text: "Документы",
             icon: "doc.svg"
         },
         {
             text: "Новый пункт"
         },
         {
            text: "Обмен",
            icon: "trade.svg"
        }
     ],
     handler(index) { // обработчик кликов на пункт меню
         var item = this.items[index];
         console.log(`Кликнули на пункт: ${item.text}`);
     }
 };
// // Далее, присвоить эту структуру модулю interactionMenu:
 interactionMenu.menu = testMenu;
// // Показываем меню:
 interactionMenu.show = true; */
