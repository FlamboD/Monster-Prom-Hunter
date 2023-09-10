import React, { useEffect, useMemo, useRef, useState } from "react";

// export interface IHistory<T> extends React.MutableRefObject<T | undefined> {
//     previous: T | undefined,
//     history: Array<T>
// }

// class History<T> implements IHistory<T> {
//     ref: React.MutableRefObject<T>;
//     previous: T;
//     history: T[];

//     constructor(ref: React.MutableRefObject<T>) {
//         this.ref = ref;
//         useEffect(() => {

//         })
//         useRef(initialValue);
//     }
// }
// Stack class
class Stack<T> {
    items: T[];
    
    constructor() {
        this.items = [];
    }
    
    push(element: T) {
        this.items.push(element);
    }
    
    pop(): T | undefined {
        if (this.items.length === 0) return;
        return this.items.pop();
    }
    
    peek() {
        return this.items[this.items.length - 1];
    }
    
    isEmpty() {
        return this.items.length === 0;
    }
}

export class History<T> {
    readonly ref?: React.MutableRefObject<T | undefined>;
    current?: T;
    previous?: T;
    private history: Stack<T>;

    constructor(ref: React.MutableRefObject<T | undefined>) {
        this.ref = ref;
        this.current = ref.current;
        this.previous = undefined;
        this.history = new Stack();
    }

    public goBack() {
        if (this.previous === undefined) return;
        this.current = this.previous;
        this.previous = this.history.pop();
    }

    public navigate(next: T) {
        if(this.previous !== undefined) this.history.push(this.previous);
        this.previous = this.current;
        this.current = next;
    }

}

export function useHistory<T>(ref: React.MutableRefObject<T | undefined>): History<T> {
    const history = useMemo(() => new History(ref), [ref]);
    useEffect(() => {
        if(ref.current === history.current) return;
        if(ref.current !== undefined) history.navigate(ref.current);
    }, [history, ref]);
    return history;
}