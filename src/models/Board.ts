import Item from './Item';

export default interface Board {
    id: string;
    title: string;
    items: Item[];
}
