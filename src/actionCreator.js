export const DEC = 'DEC';
export const INC = 'INC';

export function decrement() {
    return {
        type: DEC
    };
}

export function increment() {
    return {
        type: INC
    };
}