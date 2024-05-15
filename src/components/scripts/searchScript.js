// пример заполнения одного из компонентов

// заполняется по индексу элемента в массиве

// components: [
//   ['0', 'Tactica lSMG', '$ 987.587.666', 'ezeQel', '03:00:00', '[Кухня Гурмана] Кладовщик', ['conditionItem', 'conditionItem', 'conditionItem', 'conditionItem'], [85, 100, 74, 31], [], 'Вооружение', 'Пистолеты'],
//   ['1', 'Navy Revolver', '$ 187.527.636', 'Stas', '03:25:00', '[Кухня Гурмана] Кладовщик', [], [], ['itemForMainItem'], 'Одежда', 'Верхняя'],
// ],

import {executeClient} from './rage.js';
import './events.js';

export const searchScript = {
    // props: {
    //   isModalVisible: Boolean,
    // },
    components: [],
    lots: [],
    currentItem: { id: 1},
    data(){
        return {
            script: searchScript, // isModalVisible: false,
            // slotTimers: this.initializeTimers(),
            imgURL: "package://browser/img/inventory/items/",
            selectedId: '',
            pickedId: '',
            chosenId: '',
            nameItem: 'Gun',
            slotTimers: [],
            selectedImage: '',
            commission: true,
            commissionSum: 0,
            visibleInfoSell: false,
            visibleInfoItem: false,
            visibleModal: false,
            isVisibleContent: false,
            isModalVisible: false,
            inputValue: null,
            changedValue: null,
            commentValue: '',
            visible: {
                isClickMarkVisible: false
            },
            items: [{ id: 1}, { id: 2}, {id: 3}, {id: 4}, {id: 5}, {id: 6}, {id: 7}, {id: 8}, {id: 9}, {id: 10}, {id: 11}, {id: 12}, {id: 13}, {id: 14}, {id: 15}, {id: 16}, {id: 17}, {id: 18}, {id: 19}, {id: 20}, {id: 21}, {id: 22}, {id: 23}, {id: 24}, {id: 25}, {id: 26}, {id: 27}, {id: 28}, {id: 29}, {id: 30}, {id: 31}, {id: 32}, {id: 33}, {id: 34}, {id: 35}, {id: 36}, {id: 37}, {id: 38}, {id: 39}, {id: 40}, {id: 41}, {id: 42}, {id: 43}, {id: 44}, {id: 45}, {id: 46}, {id: 47}, {id: 48},],


            aboutItems: {},
            aboutItemText: '',

            modalPrice: false,

            activeItem: null,
            modalStyle: {},

            searchFields: {
                itemName: '',
                storekeeper: '',
                nestedItem: '',
                fromQuantity: '',
                upQuantity: '',
                secondFromQuantity: '',
                secondUpQuantity: '',
                thirdFromQuantity: '',
                thirdUpQuantity: '',
            },
            categories: [
                {
                name: 'Вооружение',
                isOpen: false,
                checked: false,
                subcategories: [{name: 'Пистолет', checked: false}, {
                    name: 'Пистолет-пулемет',
                    checked: false
                }, {name: 'Гладкоствольное', checked: false}, {name: 'Винтовка', checked: false}, {
                    name: 'Пулемет',
                    checked: false
                }, {name: 'Гранатомёт', checked: false}, {name: 'Детали', checked: false}, {
                    name: 'Патроны',
                    checked: false
                }, {name: 'Компоненты патрона', checked: false}, {
                    name: 'Гранаты',
                    checked: false
                }, {name: 'Компоненты гранат', checked: false}]
            },

                {
                    name: 'Одежда',
                    isOpen: false,
                    checked: false,
                    subcategories: [{name: 'Шапки', checked: false}, {
                        name: 'Бронешлемы',
                        checked: false
                    }, {name: 'Очки', checked: false}, {name: 'Маски', checked: false}, {
                        name: 'Противогазы',
                        checked: false
                    }, {name: 'Куртки', checked: false}, {name: 'Бронежилеты', checked: false}, {
                        name: 'Жилеты',
                        checked: false
                    }, {name: 'Штаны', checked: false}, {name: 'Перчатки', checked: false}, {
                        name: 'Ботинки',
                        checked: false
                    }, {name: 'Рюкзаки', checked: false}, {name: 'Костюмы', checked: false}, {
                        name: 'Защитные костюмы',
                        checked: false
                    }, {name: 'Ткани', checked: false}, {name: 'Чехлы', checked: false}]
                },

                {name: 'Бижутерия', isOpen: false, checked: false},

                {
                    name: 'Приборы',
                    isOpen: false,
                    checked: false,
                    subcategories: [{name: 'Источники питания', checked: false}, {
                        name: 'Фонари',
                        checked: false
                    }, {name: 'Оптика и прицелы', checked: false}, {
                        name: 'Радиационный контроль',
                        checked: false
                    }, {name: 'Радиостанции', checked: false}, {
                        name: 'Наушники',
                        checked: false
                    }, {name: 'Контейнер артефактов', checked: false}, {
                        name: 'Магнитный захват',
                        checked: false
                    }, {name: 'Детали электроники', checked: false}]
                },

                {name: 'Пища', isOpen: false, checked: false},

                {name: 'Медицина', isOpen: false, checked: false},

                {
                    name: 'Посуда',
                    isOpen: false,
                    checked: false,
                    subcategories: [{name: 'Столовая посуда', checked: false}, {
                        name: 'Хим. оборудование',
                        checked: false
                    }]
                },

                {name: 'Инструменты', isOpen: false, checked: false},

                {name: 'Артефакты', isOpen: false, checked: false},

                {
                    name: 'Природные',
                    isOpen: false,
                    checked: false,
                    subcategories: [{name: 'Животные', checked: false}, {
                        name: 'Цветы и растения',
                        checked: false
                    }, {name: 'Грибы', checked: false}]
                },

                {name: 'Технические', isOpen: false, checked: false},

                {name: 'Хим. вещества', isOpen: false, checked: false},

                {name: 'Упаковки и свертки', isOpen: false, checked: false},

                {
                    name: 'Документы',
                    isOpen: false,
                    checked: false,
                    subcategories: [{name: 'Схемы и чертежи', checked: false}]
                },

                {name: 'Разное', isOpen: false, checked: false},],

        };
    }, computed: {
        filteredComponents() {
            const checked = this.getCheckedCategories();
            const fromHour = parseInt(this.searchFields.fromQuantity) || 0;
            const upHour = parseInt(this.searchFields.upQuantity) || 24;

            return searchScript.components.filter(component => {
                const itemNameMatch = component[1].toLowerCase().startsWith(this.searchFields.itemName.toLowerCase());
                const storekeeperMatch = component[3].toLowerCase().startsWith(this.searchFields.storekeeper.toLowerCase());
                const categoryOrSubcategoryMatch = checked.length === 0 || checked.includes(component[9]) || checked.includes(component[10]);

                const timer = this.slotTimers.find(t => t.id === component[0]);
                if (!timer) return false;

                const remainingHours = Math.floor(timer.time / 3600);
                const timeMatch = remainingHours >= fromHour && remainingHours < upHour;

                return itemNameMatch && storekeeperMatch && categoryOrSubcategoryMatch && timeMatch;
            });
        },

        aboutText() {
            const sanitizedItemName = this.script.currentItem.nameItem.replace(/[^a-zA-Z0-9]/g, '');
            return this.aboutItems[sanitizedItemName] ? this.aboutItems[sanitizedItemName].join(' ') : '';
        },
    },

    methods: {
        getHoursFromTime(timeString) {
            const timeParts = timeString.split(':');
            return parseInt(timeParts[0]);
        },

        calculateCommission() {
            const rate = this.commission ? 0.04 : 0.05;
            this.commissionSum = (this.inputValue * rate).toFixed(2);
        },

        showModal(event, item) {
            if (this.activeItem === item) {
                this.hideModal();
            } else {
                this.activeItem = item;
                const elementRect = event.currentTarget.getBoundingClientRect();
                this.modalStyle = {
                    display: 'block',
                    top: `${elementRect.top + window.scrollY}px`,
                    left: `${elementRect.left + window.scrollX}px`
                };

                event.stopPropagation();

            }
        }, hideModal() {
            this.activeItem = null;
        },

        toggleinfoSelling(item) {
            this.visibleInfoItem = false;
            this.visibleInfoSell = true;
            this.script.currentItem = item;
        },

        toggleinfoItem(item) {
            this.visibleInfoSell = false;
            this.visibleInfoItem = true;
            this.script.currentItem = item;

        },

        toggleClosePrice() {
            this.$emit('closeModalPrice');
        },

        openModalPrice(lot) {
            this.pickedId = lot;
            this.modalPrice = true;
            console.log(`openModalPrice: ${this.pickedId}`)
        },

        handleClosePrice() {
            this.modalPrice = false;
        },

        handleClickOutside(event) {
            if (this.$refs.gridSell && !this.$refs.gridSell.contains(event.target)) {
                this.hideModal();
            }
        },

        initializeTimers() {
            const timers = searchScript.components.map(component => {
                const timeParts = component[4].split(':');
                const seconds = parseInt(timeParts[0]) * 3600 + parseInt(timeParts[1]) * 60 + parseInt(timeParts[2]);
                return {
                    id: component[0], time: seconds, expired: false,
                };
            });
            return timers;
        },

        startTimers() {
            let timerInterval;

            const updateTimers = () => {
                this.slotTimers.forEach((timer) => {
                    if (timer.time > 0) {
                        timer.time--;
                    } else {
                        timer.expired = true;
                    }
                });
            };

            const startInterval = () => {
                timerInterval = setInterval(updateTimers, 1000);
            };

            const stopInterval = () => {
                clearInterval(timerInterval);
            };

            stopInterval();
            startInterval();
        },

        formatTime(seconds) {
            const hours = Math.floor(seconds / 3600);
            const minutes = Math.floor((seconds % 3600) / 60);
            const secs = seconds % 60;
            return `${hours.toString().padStart(2, '0')}:${minutes.toString().padStart(2, '0')}:${secs.toString().padStart(2, '0')}`;
        }, getCheckedCategories() {
            const checked = [];
            this.categories.forEach(category => {
                if (category.checked) {
                    checked.push(category.name);
                }
                if (category.subcategories) {
                    category.subcategories.forEach(subcategory => {
                        if (subcategory.checked) {
                            checked.push(subcategory.name);
                        }
                    });
                }
            });
            return checked;
        }, closeMainWindow() {
            if (!this.isModalVisible) {
                this.isVisibleContent = false;
            }
            this.isModalVisible = false;
            executeClient('announceboard.board.pressClose');
        }, toggleModal(imagePath, id) {
            console.log(`toggleModal: ${imagePath}, ${id}`)
            this.selectedImage = imagePath;
            this.selectedId = id;
            this.isModalVisible = true;
        }, closeModal() {
            this.$emit('close');
        }, handleModalClose() {
            this.isModalVisible = false;
        }, toggleClickMark() {
            this.visible.isClickMarkVisible = !this.visible.isClickMarkVisible;
        }, resetSearchFields() {
            this.searchFields.itemName = '';
            this.searchFields.storekeeper = '';
            this.searchFields.nestedItem = '';
            this.searchFields.fromQuantity = '';
            this.searchFields.upQuantity = '';
            this.searchFields.secondFromQuantity = '';
            this.searchFields.secondUpQuantity = '';
            this.searchFields.thirdFromQuantity = '';
            this.searchFields.thirdUpQuantity = '';
        }, toggleSubcategories(category) {
            category.isOpen = !category.isOpen;
        }, toggleCheckMark(category) {
            category.checked = !category.checked;
            if (category.subcategories) {
                category.subcategories.forEach(subcategory => {
                    subcategory.checked = category.checked;
                });
            }
        }, toggleSubcategoryCheckMark(subcategory, parentCategory) {
            subcategory.checked = !subcategory.checked;
            parentCategory.checked = parentCategory.subcategories.every(sub => sub.checked);
        }, getClipPath(isOpen) {
            if (isOpen) {
                return {
                    'clip-path': 'polygon(7px 0px, 4px 4px, 4px 4px, 5px 4px, 7px 1px, 7px 15px, 8px 15px, 8px 15px, 8px 1px, 10px 4px, 11px 4px, 11px 4px, 11px 4px, 11px 4px, 11px 4px, 8px 0px, 8px 0px, 7px 0px, 7px 0px, 7px 0px)',
                    'background': 'rgba(255, 255, 255, 1)'
                };
            } else {
                return {
                    'clip-path': 'polygon(8px 15px, 11px 11px, 11px 11px, 10px 11px, 8px 14px, 8px 0px, 7px 0px, 7px 0px, 7px 14px, 5px 11px, 4px 11px, 4px 11px, 4px 11px, 4px 11px, 4px 11px, 7px 15px, 7px 15px, 8px 15px, 8px 15px, 8px 15px)',
                    'background': 'rgba(255, 255, 255, 0.35)'
                };
            }
        },

        fetchDataFromBackend() {
            executeClient('requestBackendData');
        },

        handleKeydown(status) {
            this.isVisibleContent = status;
        },

        // openMainWindow() {
        //   this.isVisibleContent = true;
        // },

        updateComponents(newComponents) {
            this.stopTimers();
            searchScript.components = newComponents;
            this.slotTimers = this.initializeTimers(newComponents);
            this.startTimers();
        },

        updateLots(newLots) {
            this.lots = newLots;
        },

        stopTimers() {
            this.slotTimers.forEach((timer, index) => {
                clearInterval(timer.interval);
                this.slotTimers[index].expired = true;
            });
        }, // sendPurchaseConfirmation() {
        //   const purchaseData = { id: this.selectedId };
        //   executeClient('sendPurchaseConfirmation', JSON.stringify(purchaseData));
        //   this.closeModal();
        // },

        sendPurchaseConfirmation() {
            const purchaseData = {id: searchScript.components[this.selectedId][12]};
            //console.log(`sendPurchaseConfirmation: ${JSON.stringify(purchaseData)}`)
            executeClient('announceboard.board.buyItem', JSON.stringify(purchaseData));
            this.closeModal();
        },

        sendRemoveConfirmation(lot) {
            let _lot = searchScript.lots.find(t=>t[6] === lot[6])
            if(_lot === undefined) return;
            this.chosenId = _lot;
            //console.log(`снять ${lot[6]}, ${JSON.stringify(lot) }`)
            executeClient('announceboard.removeItem', JSON.stringify(lot));
            searchScript.lots.splice(searchScript.lots.indexOf(lot),1);

        },

        sendSellItem() {
            if (!this.script.currentItem || !this.script.currentItem.id) {
                alert("Выберите товар для продажи.");
                return;
            }
            const payload = {
                id: this.script.currentItem.ItemUID, price: this.inputValue, comment: this.commentValue,
            };
            const payloadString = JSON.stringify(payload);

            executeClient('announceboard.board.sellItem', payloadString);

            setTimeout(() => {
                this.fetchDataFromBackend();
            }, 1000);
        },

        changeItem() {

            if (!this.changedValue) {
                alert("Выберите новую сумму продажи.");
                return;
            }
            console.log(`changeItem: ${this.pickedId}`)
            const changeload = {
                id: this.pickedId[0], price: this.changedValue,
            };

            const changeloadString = JSON.stringify(changeload);
            console.log(`${this.pickedId}`)
            executeClient('changeItem', changeloadString);

            setTimeout(() => {
                this.fetchDataFromBackend();
            }, 1000);
        },

        requestItemDetails(item) {
            if (!item || !item.id) {
                console.error("Item ID is missing");
                return;
            }
            executeClient('requestItemDetails', JSON.stringify({id: item.id}));
        },

        getImagePath(itemUID) {
            //console.log(`getImagePath: ${JSON.stringify(itemUID)}`)
            //const sanitizedImageName = imageName.replace(/[^a-zA-Z0-9]/g, '');
            //return require(`../assets/png/${sanitizedImageName}.png`);
            let _component = searchScript.components.find(component => {
                return component[12] === itemUID;
            });
            //_component = JSON.stringify(_component)
            //console.log(this.imgURL + _component[12] + '.png')
            return this.imgURL + _component[11] + '.png'
        },
        getImagePathChild(itemID) {
            //console.log(`getImagePathChild: ${JSON.stringify(itemID)}`)
            //const sanitizedImageName = imageName.replace(/[^a-zA-Z0-9]/g, '');
            //return require(`../assets/png/${sanitizedImageName}.png`);

            //_component = JSON.stringify(_component)
            //console.log(this.imgURL + _component[12] + '.png')
            return this.imgURL + itemID + '.png'
        },
    },

    mounted() {
        window.events.addEvent('sendPurchaseConfirmation', this.sendPurchaseConfirmation)
        window.events.addEvent('receiveBackendData', (data) => {
            try {

                //let _datas = [
                //    {
                //        ItemId: 1, // Id предмета
                //        ItemUID: 9081, // Уникальный Id предмета
                //        Price: 0, //Цена
                //        Name: "111111", Image: "", Owner: "ezeQel", // Продавец
                //        SellTime: '00:00:60', //Осталось времени
                //        Location: '[Кухня Гурмана]', // Локация
                //        NpcName: 'Кладовщик', // НПЦ
                //        Conditions: [ // состояния
                //            {name: 'conditionItem', percent: 100}, {
                //                name: 'conditionItem',
                //                percent: 100
                //            }, {name: 'conditionItem', percent: 100}, {name: 'conditionItem', percent: 100}], Category: { //категория
                //            Name: 'Вооружение', SubCategories: ['Пистолет'] //подкатегории
                //        }, SubItems: [ // айдишники
                //            2, 2], IsOwner: true
                //    },
                //    {
                //        ItemId: 1, // Id предмета
                //        ItemUID: 1222, // Уникальный Id предмета
                //        Price: 0, //Цена
                //        Name: "2222222", Image: "", Owner: "ezeQel", // Продавец
                //        SellTime: '00:00:60', //Осталось времени
                //        Location: '[Кухня Гурмана]', // Локация
                //        NpcName: 'Кладовщик', // НПЦ
                //        Conditions: [ // состояния
                //            {name: 'conditionItem', percent: 100}, {
                //                name: 'conditionItem',
                //                percent: 100
                //            }, {name: 'conditionItem', percent: 100}, {name: 'conditionItem', percent: 100}], Category: { //категория
                //            Name: 'Вооружение', SubCategories: ['Пистолет'] //подкатегории
                //        }, SubItems: [ // айдишники
                //            2, 2], IsOwner: true
                //    },
                //]
                let _datas = JSON.parse(data)
                // eslint-disable-next-line
                const newComponents = _datas.map((data, index) => {
                    return [(index).toString(), data.Name, `$ ${data.Price}`, data.Owner, data.SellTime, `${data.Location} ${data.NpcName}`, data.Conditions.map(condition => condition.name), data.Conditions.map(condition => condition.percent), data.SubItems, data.Category.Name, data.Category.SubCategories.join(', '), data.ItemId, data.ItemUID, data.IsOwner];
                });
                const newLots = _datas.filter(data => data.IsOwner === true).map((data, index) => {
                    //const newLots = _datas.map((data, index) => {
                    return [(index).toString(), data.Name, `$ ${data.Price}`, data.SellTime, data.SubItems, data.ItemId, data.ItemUID];
                });
                this.updateLots(newLots);
                this.updateComponents(newComponents);
                searchScript.components = newComponents;
                searchScript.lots = newLots;

                console.log(`window.events.callEvent`)
            } catch (error) {
                console.error('Ошибка при обработке данных:', error);
            }
        });


        window.events.addEvent('receiveItemDetails', (_data) => {
            try {
                let data = JSON.parse(_data);
                let _items = [];
                let _index = 1;
                data.forEach(element => {
                    _items.push({
                        id: _index++,
                        nameItem: element.Name,
                        categoryItem: element.Category,
                        ItemId: element.ItemId,
                        ItemUID: element.ItemUID
                    })
                })
                _items.forEach(item => {
                    const index = this.items.findIndex(existingItem => existingItem.id === item.id);
                    if (index !== -1) {
                        this.$set(this.items, index, {
                            ...this.items[index], ...item
                        });
                    }
                });
            } catch (error) {
                console.error('Ошибка при обработке данных предмета:', error);
            }
        });
    },

};