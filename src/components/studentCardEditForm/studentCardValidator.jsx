import validator from '../../utils/validator';

const VALIDATION_TYPES = ['isRequired', 'birthYear', 'url'].reduce((acc, el) => {
    return {...acc, [el]: el}
}, {});

function useValidator(inputFields) {

    const arrayToObjectReducer = (acc, el) => {return {...acc, ...el}};

    const validationRules = Object.values(inputFields).map(field => {
        const fieldName = field.name;
        
        const errMessage = (validationType) => {            
            const messagePrefix = `Поле '${field.label}':`;
            switch (validationType) {
                case VALIDATION_TYPES.isRequired:
                    return `${messagePrefix} обязательно для заполнения`;
                case VALIDATION_TYPES.string:
                    return `${messagePrefix} не может содержать цифры`;
                case VALIDATION_TYPES.number:
                    return `${messagePrefix} должно быть числом`;
                case VALIDATION_TYPES.birthYear:                    
                case VALIDATION_TYPES.url:                                    
                default:
                    return `${messagePrefix} содержит не правдоподобные данные`;
            }
        };
        
        const ruleSet = field.validation.map((validationType) => {
            const validationParams = {
                message: errMessage(validationType)
            }

            if (validationType === VALIDATION_TYPES.birthYear) {
                validationParams.min = 10;
                validationParams.max = 100;
            }

            return {
                [validationType]: validationParams
            };

        }).reduce(arrayToObjectReducer, {});

        return {[fieldName]: ruleSet};        
    }).reduce(arrayToObjectReducer, {});

    return (data) => {
        return validator(data, validationRules);
    }
}

export {
    VALIDATION_TYPES,
    useValidator
};

