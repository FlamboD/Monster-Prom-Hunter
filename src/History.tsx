import React, { useMemo } from "react";

export class History {
    current?: JSX.Element | JSX.Element[];
    previous?: JSX.Element | JSX.Element[];
    private history: (JSX.Element|JSX.Element[])[];

    constructor() {
        this.history = [];
    }

    public goBack() {
        if (this.previous === undefined) return;
        this.current = this.previous;
        this.previous = this.history.pop();
        return this.current;
    }

    public navigate(next: JSX.Element | JSX.Element[]) {
        if(this.previous !== undefined) this.history.push(this.previous);
        this.previous = this.current;
        this.current = next;
    }

    public getRef() {
        return ((node: React.Component | null) => {
            if(node === null || node === undefined) return;
            let el = node.render()
            if(el === this.current) return;
            console.log("DOING HISTORY", node, this);
            this.navigate(el as (JSX.Element | JSX.Element[]));
        });
    }
}

export function useHistory(): History {
    const history = useMemo(() => new History(), []);
    return history;
}