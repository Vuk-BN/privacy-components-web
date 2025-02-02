/* eslint-disable camelcase */
import {
  DEMAND_STATUS,
  MOTIVE,
  PROVENANCE,
  TARGET,
} from '@blindnet/prci/src/models/priv-terms.js';

export interface Recomendation {
  id: string;
  d_id: string;
  status: DEMAND_STATUS;
  motive: MOTIVE;
  data_categories: string[];
  date_from: string;
  date_to: string;
  provenance: PROVENANCE;
  target: TARGET;
}
