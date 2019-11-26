const CHANGE_SELECTED_CATEGORY = 'test/products/CHANGE_SELECTED_CATEGORY';
const TOGGLE_SHOW_FAVORITE = 'test/products/TOGGLE_SHOW_FAVORITE';
const TOGGLE_IS_FAVORITE = 'test/products/TOGGLE_IS_FAVORITE';

let initialState = {
    productItems: [
        {
            id: 1,
            title: 'Lenovo ThinkPad X1',
            description: 'Экран 14" IPS (2560x1440) HDR WQHD, глянцевый / Intel Core i7-8550U (1.8 - 4.0 ГГц) / ' +
                'RAM 16 ГБ / SSD 1 ТБ / Intel UHD Graphics 620 / без ОД / Wi-Fi / Bluetooth / 3G / 4G / ' +
                'веб-камера / Windows 10 Pro 64bit / 1.13 кг',
            image: 'https://i1.rozetka.ua/goods/13759877/lenovo_20qd003drt_images_13759877389.jpg',
            price: '$2900',
            isFavorite: false,
            category: 'laptop'
        },
        {
            id: 2,
            title: 'Dell Alienware 15 R4',
            description: 'Экран 15.6" IPS (1920x1080) Full HD, глянцевый / Intel Core i7-8750H (2.2 - 4.1 ГГц) / ' +
                'RAM 16 ГБ / HDD 1 ТБ + SSD 256 ГБ / nVidia GeForce GTX 1070, 8 ГБ / без ОД / LAN / Wi-Fi / ' +
                'Bluetooth / веб-камера / Windows 10 Home 64bit / 3.49 кг / серый',
            image: 'https://i2.rozetka.ua/goods/10932399/copy_dell_ar415ui716h1r2dw_8s_5c66c684ae21c_images_10932399921.jpg',
            price: '$2200',
            isFavorite: true,
            category: 'laptop'

        },
        {
            id: 3,
            title: 'Xiaomi Redmi Note 8 Pro',
            description: 'Экран (6.53", IPS, 2340x1080)/ MediaTek Helio G90T (2 x 2.05 ГГц + 6 x 2.0 ГГц)/ ' +
                'квадро основная камера: 64 Мп + 8 Мп + 2 Мп + 2 Мп, фронтальная камера: 20 Мп/ RAM 6 ГБ/ ' +
                '64 ГБ встроенной памяти + microSD (до 256 ГБ)/ 3G/ LTE/ GPS/ поддержка 2х SIM-карт (Nano-SIM)/ ' +
                'Android 9.0 (Pie) / 4500 мА*ч',
            image: 'https://i2.rozetka.ua/goods/14144523/xiaomi_redmi_note_8_pro_6_64gb_green_images_14144523956.jpg',
            price: '$310',
            isFavorite: false,
            category: 'phone'
        },
        {
            id: 4,
            title: 'Xiaomi Redmi 8 4/64GB',
            description: 'Экран (6.22", IPS, 1520x720)/ Qualcomm Snapdragon 439 (4 x 1.95 ГГц + 4 х 1.45 ГГц)/' +
                ' основная двойная камера: 12 Мп + 2 Мп, фронтальная камера: 8 Мп/ RAM 4 ГБ/ 64 ГБ встроенной ' +
                'памяти + microSD (до 512 ГБ)/ 3G/ LTE/ GPS/ ГЛОНАСС/ поддержка 2х SIM-карт (Nano-SIM)/ ' +
                'Android 9.0 (Pie)/ 5000 мА*ч',
            image: 'https://i1.rozetka.ua/goods/14513019/xiaomi_redmi_8_4_64gb_red_eu_images_14513019154.jpg',
            price: '$200',
            isFavorite: true,
            category: 'phone'
        },
        {
            id: 5,
            title: 'Asus ROG Zephyrus S',
            description: 'Экран 15.6" IPS (1920x1080) Full HD 144 Гц, матовый / Intel Core i7-8750H (2.2 - 4.1 ГГц)' +
                ' / RAM 16 ГБ / SSD 512 ГБ / nVidia GeForce RTX 2080, 8 ГБ / без ОД / Wi-Fi / Bluetooth / ' +
                'веб-камера / Windows 10 Home / 2.25 кг / черный / мышь + сумка',
            image: 'https://i2.rozetka.ua/goods/12062197/copy_asus_rog_zephyrus_s_gx531gm_es004r_90nr0101_m00040_5cc86cf08d0a3_images_12062197596.jpg',
            price: '$3100',
            isFavorite: true,
            category: 'laptop'
        },
        {
            id: 6,
            title: 'Samsung Galaxy S9 64GB',
            description: 'Экран (5.8", Super AMOLED, 2960х1440)/ Samsung Exynos 9810 (4 x 2.7 ГГц + 4 x 1.7 ГГц)/ ' +
                'основная камера 12 Мп + фронтальная 8 Мп/ RAM 4 ГБ/ 64 ГБ встроенной памяти + microSD ' +
                '(до 400 ГБ)/ 3G/ LTE/ GPS/ поддержка 2х SIM-карт (Nano-SIM)/ Android 8.0 (Oreo) / 3000 мА*ч',
            image: 'https://i1.rozetka.ua/goods/11740653/82335645_images_11740653639.jpg',
            price: '$720',
            isFavorite: false,
            category: 'phone'

        }
    ],
    selectedCategory: null,
    showFavorite: false
};

const productsReducer = (state = initialState, action) => {
    switch (action.type) {
        case CHANGE_SELECTED_CATEGORY:
        case TOGGLE_SHOW_FAVORITE: {
            return {
                ...state,
                ...action.payload
            }
        }
        case TOGGLE_IS_FAVORITE: {
            return {
                ...state,
                productItems: state.productItems.map(item => {
                    if (item.id == action.id) {
                        return {...item, isFavorite: !item.isFavorite}
                    }
                    return item
                })

            }
        }
        default:
            return state;
    }
};

export const changeSelectedCategory = (category) => {
    return {
        type: CHANGE_SELECTED_CATEGORY,
        payload: {
            selectedCategory: category
        }
    }
};

export const toggleShowFavorite = (showFavorite) => {
    return {
        type: TOGGLE_SHOW_FAVORITE,
        payload: {
            showFavorite
        }
    }
};
export const toggleIsFavorite = (id) => {
    return {
        type: TOGGLE_IS_FAVORITE,
        id
    }
};

export default productsReducer;
