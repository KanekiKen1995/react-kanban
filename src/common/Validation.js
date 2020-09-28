/* eslint-disable no-useless-escape */
import _ from 'lodash';
import isAfter from 'date-fns/isAfter';
import isValid from 'date-fns/isValid';

const createDateFromTextValue = (value) => {
    const splitParts = value.split(':');
    return new Date(1970, 1, 1, splitParts[0], splitParts[1]); // add time to any date
};

const Validation = {
    validateAllRules(validateRules) {
        const results = {};
        _.forEach(validateRules, (rules, key) => {
            for (let i = 0; i < rules.length; i += 1) {
                const validatorRule = rules[i];
                const validateResult = validatorRule();
                if (validateResult && validateResult.result !== 'success') {
                    results[key] = validateResult;
                    break;
                }
            }
        });
        return results;
    },

    isNotEmpty(value) {
        if (_.isNil(value) || value === '' || (_.isString(value) && value.trim() === '')) {
            return {
                result: 'error',
                message: 'validation.required',
            };
        }

        return {
            result: 'success',
        };
    },

    isAnyCheckboxSelected(arr) {
        const a = arr.some((x) => x === true);
        if (a) {
            return {
                result: 'success',
            };
        }
        return {
            result: 'error',
            message: 'validation.requiredMultipleCheckboxes',
        };
    },

    validatePhoneNumber(value) {
        if (!value) {
            return { result: 'success' };
        }

        if (value.split('-').includes('')) {
            return {
                result: 'error',
                message: 'validation.requiredPattern',
            };
        }

        if (value.length !== 12 && value.length !== 13) {
            return {
                result: 'error',
                message: 'validation.phoneNumber',
            };
        }

        if (!new RegExp(/[0-9]{2,5}\-[0-9]{1,4}\-[0-9]{3,4}/g).test(value)) {
            return {
                result: 'error',
                message: 'validation.phoneNumber',
            };
        }

        return {
            result: 'success',
        };
    },

    validateEmail(value) {
        if (value) {
            const regexEmail = /\b[\w\.-]+@[\w\.-]+\.\w{2,4}\b/gi;
            if (!regexEmail.test(value)) {
                return {
                    result: 'error',
                    message: 'validation.email',
                };
            }

            return {
                result: 'success',
            };
        }
        return {
            result: 'success',
        };
    },

    validateFax(value) {
        if (value) {
            if (value.length !== 12 && value.length !== 13) {
                return {
                    result: 'error',
                    message: 'validation.fax',
                };
            }

            if (!new RegExp(/[0-9]{2,5}\-[0-9]{1,4}\-[0-9]{3,4}/g).test(value)) {
                return {
                    result: 'error',
                    message: 'validation.fax',
                };
            }

            return {
                result: 'success',
            };
        }
        return {
            result: 'success',
        };
    },

    validateMaxLength(value, maxLength, type) {
        let length;
        if (!_.isNil(value)) {
            const temp = `${value}`;
            length = temp.replace(/(?:\r\n|\r|\n)/g, '').length + (temp.split(/\r\n|\r|\n/).length - 1) * 2;
        } else {
            length = 0;
        }
        if (typeof type !== 'undefined' && type === 'textarea') {
            if (value && length > maxLength) {
                return {
                    result: 'error',
                    message: 'validation.maxLength',
                };
            }
        }
        if (value && length > maxLength) {
            return {
                result: 'error',
                message: 'validation.maxLength',
            };
        }

        return {
            result: 'success',
        };
    },

    validateKanaChar(value) {
        if (value && new RegExp(/[^\u30A1-\u30FA|\uFF66-\uFF6F|\uFF71-\uFF9D|\u3000\u0020\u30FC\u2010\u002D\u2015\uFF0D\u2212\uFF70]+|[\|]+/).test(value)) {
            return {
                result: 'error',
                message: 'validation.kanaChar',
            };
        }
        return { result: 'success' };
    },

    isValidUrl(value) {
        if (value && !new RegExp(/^http:\/\/|^https:\/\//).test(value)) {
            return {
                result: 'error',
                message: 'validation.url',
            };
        }
        return { result: 'success' };
    },

    isCheck(value) {
        if (value === false) {
            return {
                result: 'error',
                message: 'validation.requiredCheckbox',
            };
        }

        return {
            result: 'success',
        };
    },

    validateSame(oldValue, newValue) {
        if (oldValue !== newValue) {
            return {
                result: 'error',
                message: 'validation.sameValue',
            };
        }

        return {
            result: 'success',
        };
    },
    isPositiveNumbers(value) {
        if (_.isNil(value) || Number(value) < 1) {
            return {
                result: 'error',
                message: 'validation.positiveNumber',
            };
        }

        return {
            result: 'success',
        };
    },

    validateZipCode(value) {
        if (value && !new RegExp(/^[0-9]{5}(?:-[0-9]{4})?$/).test(value)) {
            return {
                result: 'error',
                message: '',
            };
        }
        return { result: 'success' };
    },

    validateDateFormat(date) {
        if (!isValid(new Date(date))) {
            return {
                result: 'error',
                message: 'validation.dateTime',
            };
        }
        return {
            result: 'success',
        };
    },

    validateTimeFormat(time) {
        const temp = createDateFromTextValue(time);
        if (!isValid(new Date(temp))) {
            return {
                result: 'error',
                message: 'validation.dateTime',
            };
        }
        return {
            result: 'success',
        };
    },

    validateDateRanger(startDate, endDate) {
        if (isAfter(new Date(startDate), new Date(endDate))) {
            return {
                result: 'error',
                message: 'validation.dateRange',
            };
        }
        return {
            result: 'success',
        };
    },

    splitTime(time) {
        const splitTime = time.split(':');
        return {
            hour: splitTime[0],
            minute: splitTime[1],
        };
    },

    validateTimeRanger(startTime, endTime) {
        const tempStart = createDateFromTextValue(startTime);
        const tempEnd = createDateFromTextValue(endTime);
        if (isAfter(new Date(tempStart), new Date(tempEnd))) {
            return {
                result: 'error',
                message: 'validation.dateRange',
            };
        }
        return {
            result: 'success',
        };
    },

    validateArr(arr) {
        if (arr.length > 0) {
            return {
                result: 'success',
            };
        }
        return {
            result: 'error',
            message: 'validation.requiredArray',
        };
    },

    isNumber(value) {
        if (!Number.isNaN(Number(value))) {
            return { result: 'success' };
        }
        return {
            result: 'error',
            message: 'validation.number',
        };
    },

    isInt(value) {
        if (Number.isInteger(Number(value))) {
            return { result: 'success' };
        }
        return {
            result: 'error',
            message: 'validation.integer',
        };
    },

    isNonNegative(value) {
        if (value >= 0) {
            return { result: 'success' };
        }
        return {
            result: 'error',
            message: 'validation.nonNegativeNumber',
        };
    },

    limitValue(value, minValue, maxValue) {
        if (value <= maxValue && value >= minValue) {
            return { result: 'success' };
        }
        return {
            result: 'error',
            message: 'validation.limitValue',
        };
    },
    validateBigWithSmall(big, small) {
        if (Number(small) <= Number(big)) {
            return { result: 'success' };
        }
        return {
            result: 'error',
            message: 'validation.bigWithSmall',
        };
    },
};

export default Validation;
