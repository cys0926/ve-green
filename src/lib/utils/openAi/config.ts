import { Configuration, OpenAIApi } from 'openai';

const apiKey = process.env.NEXT_PUBLIC_OPENAI_API_KEY;
const organization = process.env.NEXT_PUBLIC_OPENAI_ORG;

const configuration = new Configuration({
  organization,
  apiKey,
});
const openai = new OpenAIApi(configuration);

export default openai;
