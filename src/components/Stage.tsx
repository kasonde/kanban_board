import React from 'react';
import StageModel from '../models/Stage';
import ItemModel from '../models/Item';
import Item from '../components/Item';
import Button from '../components/Button';

type StageProps = {
    stage: StageModel;
    globalItems: ItemModel[];
};

const Stage = ({ stage, globalItems }: StageProps) => {
    const items = globalItems.filter((item) => item.stageID === stage.id);

    return (
        <div
            style={{
                backgroundColor: 'white',
                borderRadius: '5px',
                borderRight: '5px solid #eee',
                borderBottom: '5px solid #eee',
                borderTop: '1px solid #eee',
                borderLeft: '1px solid #eee',
                height: 'fit-content',
            }}
        >
            <h5
                className="stage-title"
                style={{
                    textAlign: 'center',
                    margin: '0px',
                    padding: '10px 0px 10px 0px',
                    color: '#374151',
                    fontWeight: 'bold',
                    borderBottom: '1px solid #eee',
                }}
            >
                {stage.title}
            </h5>
            <div
                className="stage-body"
                style={{
                    padding: 8,
                    display: 'grid',
                    gridTemplateColumns: '1fr',
                    rowGap: '5px',
                }}
            >
                {items.map((item) => (
                    <Item item={item} key={item.id} />
                ))}
            </div>
            <div
                className="stage-meta"
                style={{ padding: 8, borderTop: '1px solid #eee' }}
            >
                <Button>Add new</Button>
            </div>
        </div>
    );
};

export default Stage;
