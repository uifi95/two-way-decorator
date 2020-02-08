import { EventEmitter, Input, Output } from '@angular/core';


export const TwoWay = () => (target: any, propertyKey: string) => {
    defineAuxiliaryProperties(target, propertyKey);

    defineAccessors(target, propertyKey);

    wirePropertyIntoAngular(target, propertyKey);
};

const valueKey = (propertyKey: string): string => `${propertyKey}Value`;
const emitterKey = (propertyKey: string): string => `${propertyKey}Change`;

const defineAuxiliaryProperties = (target: any, propertyKey: string) => {

    delete target[propertyKey];


    Object.defineProperty(target, valueKey(propertyKey), { writable: true });
    Object.defineProperty(target, emitterKey(propertyKey), { writable: true });
    target[emitterKey(propertyKey)] = new EventEmitter<any>();
};

const defineAccessors = (target: any, propertyKey: string) => {
    Object.defineProperty(target, propertyKey, {
        get: (): any => target[valueKey(propertyKey)],
        set: (value: any) => {
            target[valueKey(propertyKey)] = value;
            target[emitterKey(propertyKey)].emit(value);
        }
    });
};

const wirePropertyIntoAngular = (target: any, propertyKey: string) => {
    const ngInput = Input(propertyKey);
    ngInput(target, propertyKey);

    const ngOutput = Output();
    ngOutput(target, emitterKey(propertyKey));
};
