'use strict';
function loadAllItems() {
    return [
        {
            barcode: 'ITEM000000',
            name: '可口可乐',
            unit: '瓶',
            price: 3.0
        },
        {
            barcode: 'ITEM000001',
            name: '雪碧',
            unit: '瓶',
            price: 3.0
        },
        {
            barcode: 'ITEM000002',
            name: '苹果',
            unit: '斤',
            price: 5.5
        },
        {
            barcode: 'ITEM000003',
            name: '荔枝',
            unit: '斤',
            price: 15.0
        },
        {
            barcode: 'ITEM000004',
            name: '电池',
            unit: '个',
            price: 2.0
        },
        {
            barcode: 'ITEM000005',
            name: '方便面',
            unit: '袋',
            price: 4.5
        }
    ];
}

function loadPromotions() {
    return [
        {
            type: 'BUY_TWO_GET_ONE_FREE',
            barcodes: ['ITEM000000', 'ITEM000001', 'ITEM000005']
        }
    ];
}

module.exports = {
    loadAllItems: loadAllItems,
    loadPromotions: loadPromotions
};