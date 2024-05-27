export default function createIteratorObject(report) {
  let reportIterator = report;
  reportIterator[Symbol.iterator] = function() {
    let employees = [].concat(...Object.values(reportIterator.allEmployees));
    let i = -1;
    let done = false;
    return {
      next() {
        i += 1;
        if (i == employees.length) {
	  done = true
	}
        return {
	  value: employees[i],
	  done: done,
	};
      }
    };
  };

  return reportIterator;
}
