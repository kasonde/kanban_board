import React from 'react';
import ItemModel from '../models/Item';

type ItemProps = {
    item: ItemModel;
};

const Item = ({ item }: ItemProps) => {
    return (
        <div
            style={{
                border: '5px solid #eee',
                padding: 8,
                borderRadius: 5,
            }}
        >
            <span
                style={{
                    fontSize: '0.9em',
                    maxLines: 2,
                    overflow: 'clip',
                    color: '#374151',
                }}
            >
                {item.description}
            </span>
        </div>
    );
};

export default Item;
