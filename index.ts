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
	sort(value: any[], criteria: SortCriteria): any[] {
		if (!value || !criteria) {
			return value;
		}

		let p: string = criteria.property;
    

		let sortFn: (a: any, b: any) => any = (a, b) => {

			let value = 0;
			if (a[p] === undefined) {
				value = -1;
			} else if (b[p] === undefined) {
				value = 1;
			} else {
				value = a[p].toLowerCase() > b[p].toLowerCase() ? 1 : b[p].toLowerCase() > a[p].toLowerCase() ? -1 : 0;
			}
			return criteria.descending ? value * -1 : value;
		};

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