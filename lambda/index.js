/* *
 * This sample demonstrates handling intents from an Alexa skill using the Alexa Skills Kit SDK (v2).
 * Please visit https://alexa.design/cookbook for additional examples on implementing slots, dialog management,
 * session persistence, api calls, and more.
 * */
const Alexa = require('ask-sdk-core');
const math = require('mathjs');

const LaunchRequestHandler = {
    canHandle(handlerInput) {
        return Alexa.getRequestType(handlerInput.requestEnvelope) === 'LaunchRequest';
    },
    handle(handlerInput) {
        const speakOutput = 'Bienvenidos a Calculadora UTHH por AW';

        return handlerInput.responseBuilder
            .speak(speakOutput)
            .reprompt(speakOutput)
            .getResponse();
    }
};

const SumaIntentHandler ={
    canHandle(handlerInput) {
        return Alexa.getRequestType(handlerInput.requestEnvelope) === 'IntentRequest'
        && Alexa.getIntentName(handlerInput.requestEnvelope) === 'SumaIntent';
    },
    handle(handlerInput) {
        const numeroUno = parseFloat(handlerInput.requestEnvelope.request.intent.slots.numeroUno.value);
        const numeroDos = parseFloat(handlerInput.requestEnvelope.request.intent.slots.numeroDos.value);
        const resultado = numeroUno + numeroDos;
        
        if(isNaN(numeroUno) || isNaN(numeroDos)) {
            return handlerInput.responseBuilder
            .speak('Lo siento, no pude entender los números. Por favor, inténtalo de nuevo.')
            .getResponse();
        }
        
        const speakOutput = `Calculadora UTHH... El resultado de la suma de ${numeroUno} más ${numeroDos} es igual a ${resultado}.`;

        return handlerInput.responseBuilder
            .speak(speakOutput)
            //.reprompt('add a reprompt if you want to keep the session open for the user to respond')
            .getResponse();
    }
}

const RestaIntentHandler ={
    canHandle(handlerInput) {
        return Alexa.getRequestType(handlerInput.requestEnvelope) === 'IntentRequest'
        && Alexa.getIntentName(handlerInput.requestEnvelope) === 'RestaIntent';
    },
    handle(handlerInput) {
        const numeroUno = parseFloat(handlerInput.requestEnvelope.request.intent.slots.numeroUno.value);
        const numeroDos = parseFloat(handlerInput.requestEnvelope.request.intent.slots.numeroDos.value);
        const resultado = numeroUno - numeroDos;
        
        if(isNaN(numeroUno) || isNaN(numeroDos)) {
            return handlerInput.responseBuilder
            .speak('Lo siento, no pude entender los números. Por favor, inténtalo de nuevo.')
            .getResponse();
        }
        
        const speakOutput = `Calculadora UTHH... El resultado de la resta de ${numeroUno} menos ${numeroDos} es igual a ${resultado}.`;

        return handlerInput.responseBuilder
            .speak(speakOutput)
            .getResponse();
    }
}

const MultiplicacionIntentHandler ={
    canHandle(handlerInput) {
        return Alexa.getRequestType(handlerInput.requestEnvelope) === 'IntentRequest'
        && Alexa.getIntentName(handlerInput.requestEnvelope) === 'MultiplicacionIntent';
    },
    handle(handlerInput) {
        const numeroUno = parseFloat(handlerInput.requestEnvelope.request.intent.slots.numeroUno.value);
        const numeroDos = parseFloat(handlerInput.requestEnvelope.request.intent.slots.numeroDos.value);
        const resultado = numeroUno * numeroDos;
        
        if(isNaN(numeroUno) || isNaN(numeroDos)) {
            return handlerInput.responseBuilder
            .speak('Lo siento, no pude entender los números. Por favor, inténtalo de nuevo.')
            .getResponse();
        }

        const speakOutput = `Calculadora UTHH... El resultado de la multiplicación de ${numeroUno} por ${numeroDos} es igual a ${resultado}.`;

        return handlerInput.responseBuilder
            .speak(speakOutput)
            .getResponse();
    }
}

const DivisionIntentHandler ={
    canHandle(handlerInput) {
        return Alexa.getRequestType(handlerInput.requestEnvelope) === 'IntentRequest'
        && Alexa.getIntentName(handlerInput.requestEnvelope) === 'DivisionIntent';
    },
    handle(handlerInput) {
        const numeroUno = parseFloat(handlerInput.requestEnvelope.request.intent.slots.numeroUno.value);
        const numeroDos = parseFloat(handlerInput.requestEnvelope.request.intent.slots.numeroDos.value);
        
        let speakOutput;
        if (numeroDos === 0) {
            speakOutput = "No se puede dividir entre cero. Por favor, intenta con otro número.";
        } else {
            const resultado = numeroUno / numeroDos;
            speakOutput = `Calculadora UTHH... El resultado de la división de ${numeroUno} entre ${numeroDos} es igual a ${resultado}.`;
        }

        return handlerInput.responseBuilder
            .speak(speakOutput)
            .getResponse();
    }
}

const PotenciaIntentHandler = {
    canHandle(handlerInput) {
        return Alexa.getIntentName(handlerInput.requestEnvelope) === 'PotenciaIntent';
    },
    handle(handlerInput) {
        const base = parseFloat(handlerInput.requestEnvelope.request.intent.slots.numeroBase.value);
        const exponente = parseFloat(handlerInput.requestEnvelope.request.intent.slots.numeroExponente.value);
        const resultado = Math.pow(base, exponente);
        
        if(isNaN(base) || isNaN(exponente)) {
            return handlerInput.responseBuilder
            .speak('Lo siento, no pude entender los números. Por favor, inténtalo de nuevo.')
            .getResponse();
        }

        const speakOutput = `Calculadora UTHH... El resultado de ${base} elevado a la potencia de ${exponente} es ${resultado}`;
        
        return handlerInput.responseBuilder
            .speak(speakOutput)
            .getResponse();
    }
};

const RaizCuadradaIntentHandler = {
    canHandle(handlerInput) {
        return Alexa.getIntentName(handlerInput.requestEnvelope) === 'RaizCuadradaIntent';
    },
    handle(handlerInput) {
        const numero = parseFloat(handlerInput.requestEnvelope.request.intent.slots.numero.value);
        const resultado = Math.sqrt(numero);
        
        if(isNaN(numero)) {
            return handlerInput.responseBuilder
            .speak('Lo siento, no pude entender el números. Por favor, inténtalo de nuevo.')
            .getResponse();
        }

        const speakOutput = `Calculadora UTHH... La raíz cuadrada de ${numero} es ${resultado}`;
        
        return handlerInput.responseBuilder
            .speak(speakOutput)
            .getResponse();
    }
};

const HelloWorldIntentHandler = {
    canHandle(handlerInput) {
        return Alexa.getRequestType(handlerInput.requestEnvelope) === 'IntentRequest'
            && Alexa.getIntentName(handlerInput.requestEnvelope) === 'HelloWorldIntent';
    },
    handle(handlerInput) {
        const speakOutput = 'Hello World!';

        return handlerInput.responseBuilder
            .speak(speakOutput)
            //.reprompt('add a reprompt if you want to keep the session open for the user to respond')
            .getResponse();
    }
};

const HelpIntentHandler = {
    canHandle(handlerInput) {
        return Alexa.getRequestType(handlerInput.requestEnvelope) === 'IntentRequest'
            && Alexa.getIntentName(handlerInput.requestEnvelope) === 'AMAZON.HelpIntent';
    },
    handle(handlerInput) {
        const speakOutput = 'You can say hello to me! How can I help?';

        return handlerInput.responseBuilder
            .speak(speakOutput)
            .reprompt(speakOutput)
            .getResponse();
    }
};

const CancelAndStopIntentHandler = {
    canHandle(handlerInput) {
        return Alexa.getRequestType(handlerInput.requestEnvelope) === 'IntentRequest'
            && (Alexa.getIntentName(handlerInput.requestEnvelope) === 'AMAZON.CancelIntent'
                || Alexa.getIntentName(handlerInput.requestEnvelope) === 'AMAZON.StopIntent');
    },
    handle(handlerInput) {
        const speakOutput = 'Goodbye!';

        return handlerInput.responseBuilder
            .speak(speakOutput)
            .getResponse();
    }
};
/* *
 * FallbackIntent triggers when a customer says something that doesn’t map to any intents in your skill
 * It must also be defined in the language model (if the locale supports it)
 * This handler can be safely added but will be ingnored in locales that do not support it yet 
 * */
const FallbackIntentHandler = {
    canHandle(handlerInput) {
        return Alexa.getRequestType(handlerInput.requestEnvelope) === 'IntentRequest'
            && Alexa.getIntentName(handlerInput.requestEnvelope) === 'AMAZON.FallbackIntent';
    },
    handle(handlerInput) {
        const speakOutput = 'Sorry, I don\'t know about that. Please try again.';

        return handlerInput.responseBuilder
            .speak(speakOutput)
            .reprompt(speakOutput)
            .getResponse();
    }
};
/* *
 * SessionEndedRequest notifies that a session was ended. This handler will be triggered when a currently open 
 * session is closed for one of the following reasons: 1) The user says "exit" or "quit". 2) The user does not 
 * respond or says something that does not match an intent defined in your voice model. 3) An error occurs 
 * */
const SessionEndedRequestHandler = {
    canHandle(handlerInput) {
        return Alexa.getRequestType(handlerInput.requestEnvelope) === 'SessionEndedRequest';
    },
    handle(handlerInput) {
        console.log(`~~~~ Session ended: ${JSON.stringify(handlerInput.requestEnvelope)}`);
        // Any cleanup logic goes here.
        return handlerInput.responseBuilder.getResponse(); // notice we send an empty response
    }
};
/* *
 * The intent reflector is used for interaction model testing and debugging.
 * It will simply repeat the intent the user said. You can create custom handlers for your intents 
 * by defining them above, then also adding them to the request handler chain below 
 * */
const IntentReflectorHandler = {
    canHandle(handlerInput) {
        return Alexa.getRequestType(handlerInput.requestEnvelope) === 'IntentRequest';
    },
    handle(handlerInput) {
        const intentName = Alexa.getIntentName(handlerInput.requestEnvelope);
        const speakOutput = `You just triggered ${intentName}`;

        return handlerInput.responseBuilder
            .speak(speakOutput)
            //.reprompt('add a reprompt if you want to keep the session open for the user to respond')
            .getResponse();
    }
};
/**
 * Generic error handling to capture any syntax or routing errors. If you receive an error
 * stating the request handler chain is not found, you have not implemented a handler for
 * the intent being invoked or included it in the skill builder below 
 * */
const ErrorHandler = {
    canHandle() {
        return true;
    },
    handle(handlerInput, error) {
        const speakOutput = 'Sorry, I had trouble doing what you asked. Please try again.';
        console.log(`~~~~ Error handled: ${JSON.stringify(error)}`);

        return handlerInput.responseBuilder
            .speak(speakOutput)
            .reprompt(speakOutput)
            .getResponse();
    }
};

/**
 * This handler acts as the entry point for your skill, routing all request and response
 * payloads to the handlers above. Make sure any new handlers or interceptors you've
 * defined are included below. The order matters - they're processed top to bottom 
 * */
exports.handler = Alexa.SkillBuilders.custom()
    .addRequestHandlers(
        LaunchRequestHandler,
        SumaIntentHandler,
        RestaIntentHandler,
        MultiplicacionIntentHandler,
        DivisionIntentHandler,
        PotenciaIntentHandler,
        RaizCuadradaIntentHandler,
        HelloWorldIntentHandler,
        HelpIntentHandler,
        CancelAndStopIntentHandler,
        FallbackIntentHandler,
        SessionEndedRequestHandler,
        IntentReflectorHandler)
    .addErrorHandlers(
        ErrorHandler)
    .withCustomUserAgent('sample/hello-world/v1.2')
    .lambda();