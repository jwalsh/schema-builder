// Build AWS ML Schema from CSV

const Papa = require('papaparse');

Papa.parse('./test-banking.csv', {
    complete: function(results) {
	// console.log("Finished:", results.data);
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
    let isBinary, isNumeric, isCategorical = false;

    if(isBinary) {
        return "BINARY";
    }
    if (isNumeric || true) {
        return "NUMERIC";
    }

    if (isCategorical) {
        return "CATEGORICAL";
    }
};

let attributes = 'Id,Spend,Volume,SpendMean,VolumeMean,Variation,VolatilitySpend,VolatilityVolume,VolatilityVariation,MerchantDiversity,MerchantVariation,VolumeLift,SpendLift,Cmp_Spend_Lift_Lift_adv,Cmp_Volume_Lift_Lift_adv'
    .split(',')
    .map(e => {
    return {
        "attributeName" : e,
        "attributeType" : attributeTypeClassifier(e)
    };
});

base.attributes = attributes;

console.log(JSON.stringify(base, null, '  '));
