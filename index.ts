// Import stylesheets

import './style.css';

export interface SortCriteria {
	property: string;
	descending?: boolean;
}

export interface IKeyValuePair {
	key: string;
	value: string;
}


// Write TypeScript code!
export class Sorter{
		sort(value: IKeyValuePair[], criteria: SortCriteria): IKeyValuePair[] {
		if (!value || !criteria) {
			return value;
		}

		let ignoreCase = false;
		const p: string = criteria.property;

		let sortFn: (a: IKeyValuePair, b: IKeyValuePair) => any = (a, b) => {
			let value = 0;
			if (a[p] === undefined) {
				value = -1;
			} else if (b[p] === undefined) {
				value = 1;
			} else {
				if (ignoreCase) {
					value =
						a[p].toLowerCase() > b[p].toLowerCase() ? 1 : b[p].toLowerCase() > a[p].toLowerCase() ? -1 : 0;
				} else {
					value = a[p] > b[p] ? 1 : b[p] > a[p] ? -1 : 0;
				}
			}
			return criteria.descending ? value * -1 : value;
		};

		value.sort(sortFn);

		ignoreCase = true;
		value.sort(sortFn);

		return value;
	}
}

let sorter = new Sorter();

let unsorted: IKeyValuePair[] = [];
unsorted.push({key:"1",value:"Z"})
unsorted.push({key:"3",value:"a"})
unsorted.push({key:"4",value:"A"})
unsorted.push({key:"5",value:"z"})

sorter.sort(unsorted, {property:"value", descending:false})

console.log(unsorted);
