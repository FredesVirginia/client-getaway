
import 'dotenv/config';
import * as joi from "joi";

interface EnvVars{
    PORT : number;
    PRODUCTS_MICROSERVICE_HOST:string;
    PRODUCTS_MICROSERVICE_PORT:number;
}

const envsShema = joi.object({
    PORT :  joi.number().required(),
    PRODUCTS_MICROSERVICE_HOST : joi.string().required(),
    PRODUCTS_MICROSERVICE_PORT:joi.number().required()
}).unknown(true);

const { error , value } = envsShema.validate(process.env);

if(error){
    throw new Error (`Config validation errors ${ error.message}`)
}

const envVars : EnvVars = value;

export const envs = {
    port : envVars.PORT,
    productMicroserviceHost : envVars.PRODUCTS_MICROSERVICE_HOST,
    productMicroservicePort : envVars.PRODUCTS_MICROSERVICE_PORT
}