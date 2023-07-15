import { Configuration, OpenAIApi } from 'openai';

const configuration = new Configuration({
  organization: 'org-h7HTTEAEtZPLSrtlhAdsZpTW',
  apiKey: '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',
});
const openai = new OpenAIApi(configuration);

export default openai;
