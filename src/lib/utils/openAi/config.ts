import { Configuration, OpenAIApi } from 'openai';

const configuration = new Configuration({
  organization: 'org-h7HTTEAEtZPLSrtlhAdsZpTW',
  apiKey: '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',
});
const openai = new OpenAIApi(configuration);

export default openai;
