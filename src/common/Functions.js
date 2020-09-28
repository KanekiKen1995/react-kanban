const CommonFunctions = {
    // Only support primitives, plain objects and arrays
    trimObject: (val) => {
        switch (typeof val) {
            case 'string':
                return val.trim();
            case 'object': {
                if (Array.isArray(val)) return val.map((item) => CommonFunctions.trimObject(item));
                if (!Object.keys(val).length) return val; // For complex object like binary, Map etc.
                const result = {};
                Object.keys(val).forEach((key) => { result[key] = CommonFunctions.trimObject(val[key]); });
                return result;
            }
            default:
                return val;
        }
    },
};

export default CommonFunctions;
