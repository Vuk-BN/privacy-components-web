/* eslint-disable camelcase */
import { DATA_CATEGORY, PROCESSING_CATEGORY, PURPOSE } from './priv-terms.js';

interface PrivacyScopeTriple {
  data_category: DATA_CATEGORY;
  processing_cateogry: PROCESSING_CATEGORY;
  purpose: PURPOSE;
}

export interface PrivacyScope {
  triples: PrivacyScopeTriple[];
}
