import {Condition} from "../consts/Condition";
import {FilterByProperty} from "../consts/FilterByProperty";
import {LogicalOperation} from "../consts/LogicalOperation";

export interface FilterDefinition {
	id: number;
	logicalOperation: LogicalOperation;
	filterByProperty: FilterByProperty;
	condition: {
		conditionName: Condition;
		conditionValue: {
			[key: string]: string;
		};
	};
}
