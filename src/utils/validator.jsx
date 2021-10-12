
function validate(validateMethod, data, validateMethodConfig) {
    const REGEX_EMAIL = /^\S+@\S+\.\S+$/g;
    const REGEX_CONTAIN_CAPITAL = /[A-Z]+/;
    const REGEX_CONTAIN_DIGIT = /\d+/;
    const REGEX_URL = /^https*:\/\/(\w+\.)+\w+$/;

    let isDataValid = true;

    switch (validateMethod) {
    case 'isRequired':
        isDataValid = (data.trim() !== '');
        break;
    case 'isEmail':
        isDataValid = REGEX_EMAIL.test(data);
        break;
    case 'isCapital':
        isDataValid = REGEX_CONTAIN_CAPITAL.test(data);
        break;
    case 'isDigit':
        isDataValid = REGEX_CONTAIN_DIGIT.test(data);
        break;
    case 'minLen':
        isDataValid = (data.length >= validateMethodConfig.value);
        break;
    case 'url':
        isDataValid = REGEX_URL.test(data);
        break;
    case 'birthYear':
        const yearNow = (new Date()).getFullYear();        
        isDataValid = (/^(\d){4,4}$/).test(data) && (yearNow - data) > 0 && (yearNow - data) < 100;
        break;
    default:
        return `Unsupported validate method: ${validateMethod}`;
    }

    return !isDataValid ? validateMethodConfig.message : null;
}

export default function validator(data, config) {
    const errors = {};

    for (const [fieldName, fieldData] of Object.entries(data)) {
        const fieldConf = config[fieldName] || {};

        for (const [validateMethod, validateMethodConfig] of Object.entries(fieldConf)) {
            const error = validate(validateMethod, fieldData, validateMethodConfig);

            if (error) {
                errors[fieldName] = error;
                break;
            }
        }
    }

    return errors;
}