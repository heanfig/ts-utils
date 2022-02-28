import * as memoizee from 'memoizee';

export function Memoize<T>(config?: T): any {
    return function(_target: any, _key: any, descriptor: PropertyDescriptor) {
        const oldFunction = descriptor.value;
        const newFunction = memoizee(oldFunction, config);
        descriptor.value = function () {
          return newFunction.apply(this, arguments);
        };
    };
}