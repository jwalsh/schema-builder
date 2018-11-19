// Build AWS ML Schema from CSV

const Papa = require('papaparse');

Papa.parse('./test-banking.csv', {
    complete: function(results) {
	console.log("Finished:", results.data);
    }
});

let base = {
  "version" : "1.0",
  "rowId" : null,
  "rowWeight" : null,
  "targetAttributeName" : null,
  "dataFormat" : "CSV",
  "dataFileContainsHeader" : true,
  "excludedAttributeNames" : [ ]
};

// Return String attributeType
const attributeTypeClassifier = (df) => {
    if(isBinary) {
        return "BINARY";
    }
    if (isNumeric) {
        return "NUMERIC";
    }

    if (isCategorical) {
        return "CATEGORICAL";
    }
};

let attributes =  [].map(e => {
    return {
        "attributeName" : e,
        "attributeType" : attributeTypeClassifier(e)
    };
});
