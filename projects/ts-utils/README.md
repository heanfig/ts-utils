
# @heanfig/ts-utils

  
> Fast, generic typescript/angular utility functions.

Install with [npm](https://www.npmjs.com/)

```sh
$ npm i @heanfig/ts-utils --save
```

## <code>@Memoize</code> Decorator

**Wrapper for <code>memoizee</code> package**
https://www.npmjs.com/package/memoizee

Basic Import 

```ts
import { Memoize } from '@heanfig/ts-utils';
```

using in component

```ts
export class DemoComponent {
	
	@Memoize()
	public getRandomInt(value:number): number {
		return value ** 34;
	}
}
```


## ¿ Whats next ?

  
To get more help [contact me](mailto:heanfig@gmail.com) or see.

#### References

https://www.npmjs.com/package/memoizee