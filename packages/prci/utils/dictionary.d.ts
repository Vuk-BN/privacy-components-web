/**
 * Mapping of PRIV Actions to corresponding titles.
 */
export declare const ACTION_TITLES: {
    ACCESS: () => string;
    DELETE: () => string;
    MODIFY: () => string;
    OBJECT: () => string;
    PORTABILITY: () => string;
    RESTRICT: () => string;
    'REVOKE-CONSENT': () => string;
    TRANSPARENCY: () => string;
    'TRANSPARENCY.DATA-CATEGORIES': () => string;
    'TRANSPARENCY.DPO': () => string;
    'TRANSPARENCY.KNOWN': () => string;
    'TRANSPARENCY.LEGAL-BASES': () => string;
    'TRANSPARENCY.ORGANIZATION': () => string;
    'TRANSPARENCY.POLICY': () => string;
    'TRANSPARENCY.PROCESSING-CATEGORIES': () => string;
    'TRANSPARENCY.PROVENANCE': () => string;
    'TRANSPARENCY.PURPOSE': () => string;
    'TRANSPARENCY.RETENTION': () => string;
    'TRANSPARENCY.WHERE': () => string;
    'TRANSPARENCY.WHO': () => string;
    'OTHER-DEMAND': () => string;
};
/**
 * Mapping of PRIV Actions to corresponding descriptions.
 */
export declare const ACTION_DESCRIPTIONS: {
    ACCESS: () => string;
    DELETE: () => string;
    MODIFY: () => string;
    OBJECT: () => string;
    PORTABILITY: () => string;
    RESTRICT: () => string;
    'REVOKE-CONSENT': () => string;
    TRANSPARENCY: () => string;
    'OTHER-DEMAND': () => string;
    'TRANSPARENCY.DATA-CATEGORIES': () => string;
    'TRANSPARENCY.DPO': () => string;
    'TRANSPARENCY.KNOWN': () => string;
    'TRANSPARENCY.LEGAL-BASES': () => string;
    'TRANSPARENCY.ORGANIZATION': () => string;
    'TRANSPARENCY.POLICY': () => string;
    'TRANSPARENCY.PROCESSING-CATEGORIES': () => string;
    'TRANSPARENCY.PROVENANCE': () => string;
    'TRANSPARENCY.PURPOSE': () => string;
    'TRANSPARENCY.RETENTION': () => string;
    'TRANSPARENCY.WHERE': () => string;
    'TRANSPARENCY.WHO': () => string;
};
export declare const PROVENANCE_DESCRIPTIONS: {
    '*': () => string;
    USER: () => string;
    'USER.DATA-SUBJECT': () => string;
    DERIVED: () => string;
    TRANSFERRED: () => string;
};
export declare const DATA_CATEGORY_DESCRIPTIONS: {
    '*': () => import("lit").TemplateResult<1 | 2>;
    AFFILIATION: () => import("lit").TemplateResult<1 | 2>;
    'AFFILIATION.MEMBERSHIP': () => import("lit").TemplateResult<1 | 2>;
    'AFFILIATION.MEMBERSHIP.UNION': () => import("lit").TemplateResult<1 | 2>;
    'AFFILIATION.SCHOOL': () => import("lit").TemplateResult<1 | 2>;
    'AFFILIATION.WORKPLACE': () => import("lit").TemplateResult<1 | 2>;
    BEHAVIOR: () => import("lit").TemplateResult<1 | 2>;
    'BEHAVIOR.ACTIVITY': () => import("lit").TemplateResult<1 | 2>;
    'BEHAVIOR.CONNECTION': () => import("lit").TemplateResult<1 | 2>;
    'BEHAVIOR.PREFERENCE': () => import("lit").TemplateResult<1 | 2>;
    'BEHAVIOR.TELEMETRY': () => import("lit").TemplateResult<1 | 2>;
    BIOMETRIC: () => import("lit").TemplateResult<1 | 2>;
    CONTACT: () => import("lit").TemplateResult<1 | 2>;
    'CONTACT.EMAIL': () => import("lit").TemplateResult<1 | 2>;
    'CONTACT.ADDRESS': () => import("lit").TemplateResult<1 | 2>;
    'CONTACT.PHONE': () => import("lit").TemplateResult<1 | 2>;
    DEMOGRAPHIC: () => import("lit").TemplateResult<1 | 2>;
    'DEMOGRAPHIC.AGE': () => import("lit").TemplateResult<1 | 2>;
    'DEMOGRAPHIC.BELIEFS': () => import("lit").TemplateResult<1 | 2>;
    'DEMOGRAPHIC.GENDER': () => import("lit").TemplateResult<1 | 2>;
    'DEMOGRAPHIC.ORIGIN': () => import("lit").TemplateResult<1 | 2>;
    'DEMOGRAPHIC.RACE': () => import("lit").TemplateResult<1 | 2>;
    'DEMOGRAPHIC.SEXUAL-ORIENTATION': () => import("lit").TemplateResult<1 | 2>;
    DEVICE: () => import("lit").TemplateResult<1 | 2>;
    FINANCIAL: () => import("lit").TemplateResult<1 | 2>;
    'FINANCIAL.BANK-ACCOUNT': () => import("lit").TemplateResult<1 | 2>;
    GENETIC: () => import("lit").TemplateResult<1 | 2>;
    HEALTH: () => import("lit").TemplateResult<1 | 2>;
    IMAGE: () => import("lit").TemplateResult<1 | 2>;
    LOCATION: () => import("lit").TemplateResult<1 | 2>;
    NAME: () => import("lit").TemplateResult<1 | 2>;
    PROFILING: () => import("lit").TemplateResult<1 | 2>;
    RELATIONSHIPS: () => import("lit").TemplateResult<1 | 2>;
    UID: () => import("lit").TemplateResult<1 | 2>;
    'UID.ID': () => import("lit").TemplateResult<1 | 2>;
    'UID.IP': () => import("lit").TemplateResult<1 | 2>;
    'UID.USER-ACCOUNT': () => import("lit").TemplateResult<1 | 2>;
    'UID.SOCIAL-MEDIA': () => import("lit").TemplateResult<1 | 2>;
    'OTHER-DATA': () => import("lit").TemplateResult<1 | 2>;
};
export declare const TARGET_DESCRIPTIONS: {
    '*': () => import("lit").TemplateResult<1 | 2>;
    SYSTEM: () => import("lit").TemplateResult<1 | 2>;
    ORGANIZATION: () => import("lit").TemplateResult<1 | 2>;
    PARTNERS: () => import("lit").TemplateResult<1 | 2>;
    'PARTNERS.DOWNWARD': () => import("lit").TemplateResult<1 | 2>;
    'PARTNERS.UPWARD': () => import("lit").TemplateResult<1 | 2>;
};
export declare const STATUS_DESCRIPTIONS: {
    IN_PROCESSING: () => import("lit").TemplateResult<1 | 2>;
    PARTIALLY_COMPLETED: () => import("lit").TemplateResult<1 | 2>;
    COMPLETED: () => import("lit").TemplateResult<1 | 2>;
    CANCELED: () => import("lit").TemplateResult<1 | 2>;
};
