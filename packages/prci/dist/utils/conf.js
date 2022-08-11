import { ACTION } from '../models/priv-terms.js';

const enabledActions = new Map([
    [ACTION.ACCESS, false],
    [ACTION.DELETE, false],
    [ACTION.MODIFY, false],
    [ACTION.OBJECT, false],
    [ACTION.PORTABILITY, false],
    [ACTION.RESTRICT, false],
    [ACTION.REVOKE, false],
    [ACTION.TRANSPARENCY, true],
    [ACTION['TRANSPARENCY.DATA.CATEGORIES'], false],
    [ACTION['TRANSPARENCY.DPO'], true],
    [ACTION['TRANSPARENCY.KNOWN'], false],
    [ACTION['TRANSPARENCY.LEGAL.BASES'], false],
    [ACTION['TRANSPARENCY.ORGANIZATION'], true],
    [ACTION['TRANSPARENCY.POLICY'], true],
    [ACTION['TRANSPARENCY.PROCESSING.CATEGORIES'], false],
    [ACTION['TRANSPARENCY.PURPOSE'], false],
    [ACTION['TRANSPARENCY.PROVENANCE'], false],
    [ACTION['TRANSPARENCY.RETENTION'], true],
    [ACTION['TRANSPARENCY.WHERE'], true],
    [ACTION['TRANSPARENCY.WHO'], true],
    [ACTION['OTHER.DEMAND'], false],
]);

export { enabledActions };
//# sourceMappingURL=conf.js.map
