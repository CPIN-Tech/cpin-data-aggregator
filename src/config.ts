import { envSchema, JSONSchemaType } from 'env-schema';

interface Env {
  PORT: number;
  ENCRYPTED_PK: string;
  ENCRYPTED_PASS: string;
  PASS: string;
  PEAQ_WSS_URL: string;
  PEAQ_EVM_URL: string;
  PINATA_GATEWAY_URL: string;
}

const schema: JSONSchemaType<Env> = {
  type: 'object',
  required: ['PORT', 'ENCRYPTED_PK', 'PEAQ_WSS_URL', 'PEAQ_EVM_URL', 'PINATA_GATEWAY_URL'],
  properties: {
    PORT: {
      type: 'number',
      default: 3000,
    },
    ENCRYPTED_PK: {
      type: 'string',
    },
    ENCRYPTED_PASS: {
      type: 'string',
    },
    PASS: {
      type: 'string',
    },
    PEAQ_WSS_URL: {
      type: 'string',
    },
    PEAQ_EVM_URL: {
      type: 'string',
    },
    PINATA_GATEWAY_URL: {
      type: 'string',
    },
  },
};

const config = envSchema({
  schema,
  dotenv: true,
});
export default config;
