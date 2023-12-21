import { cloneElement, isValidElement, Children } from 'react';

export function titleCase(str) {
    if (!str) return '';
    return str.toLowerCase().replace(/\b\w/g, s => s.toUpperCase());
}

export function propagateProps(children, props) {
    return Children.map(children, child => {
        if (!isValidElement(child)) return child;
        return cloneElement(child, props);
    });
}
