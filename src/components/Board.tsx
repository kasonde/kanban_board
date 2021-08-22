import React, { useState } from 'react';
import BoardModel from '../models/Board';
import StageModel from '../models/Stage';
import Stage from '../components/Stage';

/**
 * Author: Richard K. Nsama
 * Github: @kasonde
 * Rationale: The way I will implement the kanban board will the the following:
 * 1. Each task will belong to stages. i.e Pending, Doing, Done
 * 2. I will make the list of "stages", static to begin with and then extend them to make them dynamic
 * 3. To choose a new state, I will first implement a simple radio button but afterwards, implement something like
 * React DND to make drag and drop a possibility.
 * 4. See the models folder to see how data is modelled to build this board
 */

const Board = () => {
    // Setup a board object and instantiate data
    let board: BoardModel = {
        title: 'Test Board',
        id: 'unique_id',
        items: [
            {
                id: 'somerandom_id',
                stageID: 'pending',
                description: 'Do that thing you said you were going to do',
            },
        ],
    };
    // setup the the stages: i.e pending, doing, done
    let stages: StageModel[] = [
        {
            id: 'pending',
            title: 'Pending',
        },
        {
            id: 'doing',
            title: 'Doing',
        },
        {
            id: 'done',
            title: 'Done',
        },
    ];
    return (
        <div
            style={{
                width: '100%',
                display: 'grid',
                gridTemplateColumns: 'repeat(auto-fill, 300px)',
                columnGap: '10px',
            }}
        >
            {stages.map((stage: StageModel) => {
                return (
                    <Stage
                        key={stage.id}
                        globalItems={board.items}
                        stage={stage}
                    />
                );
            })}
        </div>
    );
};

export default Board;
