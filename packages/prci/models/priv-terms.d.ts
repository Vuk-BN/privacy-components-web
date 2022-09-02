export declare enum ACTION {
    'ACCESS' = "ACCESS",
    'DELETE' = "DELETE",
    'MODIFY' = "MODIFY",
    'OBJECT' = "OBJECT",
    'PORTABILITY' = "PORTABILITY",
    'RESTRICT' = "RESTRICT",
    'REVOKE' = "REVOKE-CONSENT",
    'TRANSPARENCY' = "TRANSPARENCY",
    'TRANSPARENCY.DATA.CATEGORIES' = "TRANSPARENCY.DATA-CATEGORIES",
    'TRANSPARENCY.DPO' = "TRANSPARENCY.DPO",
    'TRANSPARENCY.KNOWN' = "TRANSPARENCY.KNOWN",
    'TRANSPARENCY.LEGAL.BASES' = "TRANSPARENCY.LEGAL-BASES",
    'TRANSPARENCY.ORGANIZATION' = "TRANSPARENCY.ORGANIZATION",
    'TRANSPARENCY.POLICY' = "TRANSPARENCY.POLICY",
    'TRANSPARENCY.PROCESSING.CATEGORIES' = "TRANSPARENCY.PROCESSING-CATEGORIES",
    'TRANSPARENCY.PROVENANCE' = "TRANSPARENCY.PROVENANCE",
    'TRANSPARENCY.PURPOSE' = "TRANSPARENCY.PURPOSE",
    'TRANSPARENCY.RETENTION' = "TRANSPARENCY.RETENTION",
    'TRANSPARENCY.WHERE' = "TRANSPARENCY.WHERE",
    'TRANSPARENCY.WHO' = "TRANSPARENCY.WHO",
    'OTHER.DEMAND' = "OTHER-DEMAND"
}
export declare enum TRANSPARENCY_ACTION {
    TRANSPARENCY_DATA_CATEGORIES = "TRANSPARENCY.DATA-CATEGORIES",
    TRANSPARENCY_DPO = "TRANSPARENCY.DPO",
    TRANSPARENCY_KNOWN = "TRANSPARENCY.KNOWN",
    TRANSPARENCY_LEGAL_BASES = "TRANSPARENCY.LEGAL-BASES",
    TRANSPARENCY_ORGANIZATION = "TRANSPARENCY.ORGANIZATION",
    TRANSPARENCY_POLICY = "TRANSPARENCY.POLICY",
    TRANSPARENCY_PROCESSING_CATEGORIES = "TRANSPARENCY.PROCESSING-CATEGORIES",
    TRANSPARENCY_PROVENANCE = "TRANSPARENCY.PROVENANCE",
    TRANSPARENCY_PURPOSE = "TRANSPARENCY.PURPOSE",
    TRANSPARENCY_RETENTION = "TRANSPARENCY.RETENTION",
    TRANSPARENCY_WHERE = "TRANSPARENCY.WHERE",
    TRANSPARENCY_WHO = "TRANSPARENCY.WHO"
}
export declare enum PROVENANCE {
    'ALL' = "*",
    'USER' = "USER",
    'USER.DATA-SUBJECT' = "USER.DATA-SUBJECT",
    'DERIVED' = "DERIVED",
    'TRANSFERRED' = "TRANSFERRED"
}
export declare enum REQUEST_STATUS {
    'IN_PROCESSING' = "IN_PROCESSING",
    'PARTIALLY_COMPLETED' = "PARTIALLY_COMPLETED",
    'COMPLETED' = "COMPLETED",
    'CANCELED' = "CANCELED"
}
export declare enum DEMAND_STATUS {
    'GRANTED' = "GRANTED",
    'DENIED' = "DENIED",
    'PARTIALLY-GRANTED' = "PARTIALLY-GRANTED",
    'UNDER-REVIEW' = "UNDER-REVIEW",
    'CANCELED' = "CANCELED"
}
export declare enum TARGET {
    'ALL' = "*",
    'SYSTEM' = "SYSTEM",
    'ORGANIZATION' = "ORGANIZATION",
    'PARTNERS' = "PARTNERS",
    'PARTNERS.DOWNWARD' = "PARTNERS.DOWNWARD",
    'PARTNERS.UPWARD' = "PARTNERS.UPWARD"
}
export declare enum TARGET_DIRECTION {
    'PARTNERS.DOWNWARD' = "PARTNERS.DOWNWARD",
    'PARTNERS.UPWARD' = "PARTNERS.UPWARD"
}
export declare enum DATA_CATEGORY {
    'ALL' = "*",
    'AFFILIATION' = "AFFILIATION",
    'AFFILIATION.MEMBERSHIP' = "AFFILIATION.MEMBERSHIP",
    'AFFILIATION.MEMBERSHIP.UNION' = "AFFILIATION.MEMBERSHIP.UNION",
    'AFFILIATION.SCHOOL' = "AFFILIATION.SCHOOL",
    'AFFILIATION.WORKPLACE' = "AFFILIATION.WORKPLACE",
    'BEHAVIOR' = "BEHAVIOR",
    'BEHAVIOR.ACTIVITY' = "BEHAVIOR.ACTIVITY",
    'BEHAVIOR.CONNECTION' = "BEHAVIOR.CONNECTION",
    'BEHAVIOR.PREFERENCE' = "BEHAVIOR.PREFERENCE",
    'BEHAVIOR.TELEMETRY' = "BEHAVIOR.TELEMETRY",
    'BIOMETRIC' = "BIOMETRIC",
    'CONTACT' = "CONTACT",
    'CONTACT.EMAIL' = "CONTACT.EMAIL",
    'CONTACT.ADDRESS' = "CONTACT.ADDRESS",
    'CONTACT.PHONE' = "CONTACT.PHONE",
    'DEMOGRAPHIC' = "DEMOGRAPHIC",
    'DEMOGRAPHIC.AGE' = "DEMOGRAPHIC.AGE",
    'DEMOGRAPHIC.BELIEFS' = "DEMOGRAPHIC.BELIEFS",
    'DEMOGRAPHIC.GENDER' = "DEMOGRAPHIC.GENDER",
    'DEMOGRAPHIC.ORIGIN' = "DEMOGRAPHIC.ORIGIN",
    'DEMOGRAPHIC.RACE' = "DEMOGRAPHIC.RACE",
    'DEMOGRAPHIC.SEXUAL-ORIENTATION' = "DEMOGRAPHIC.SEXUAL-ORIENTATION",
    'DEVICE' = "DEVICE",
    'FINANCIAL' = "FINANCIAL",
    'FINANCIAL.BANK-ACCOUNT' = "FINANCIAL.BANK-ACCOUNT",
    'GENETIC' = "GENETIC",
    'HEALTH' = "HEALTH",
    'IMAGE' = "IMAGE",
    'LOCATION' = "LOCATION",
    'NAME' = "NAME",
    'PROFILING' = "PROFILING",
    'RELATIONSHIPS' = "RELATIONSHIPS",
    'UID' = "UID",
    'UID.ID' = "UID.ID",
    'UID.IP' = "UID.IP",
    'UID.USER-ACCOUNT' = "UID.USER-ACCOUNT",
    'UID.SOCIAL-MEDIA' = "UID.SOCIAL-MEDIA"
}
export declare enum PROCESSING_CATEGORY {
    'ALL' = "*",
    'ANONYMIZATION' = "ANONYMIZATION",
    'AUTOMATED-INFERENCE' = "AUTOMATED-INFERENCE",
    'AUTOMATED-DECISION-MAKING' = "AUTOMATED-DECISION-MAKING",
    'COLLECTION' = "COLLECTION",
    'GENERATING' = "GENERATING",
    'PUBLISHING' = "PUBLISHING",
    'STORING' = "STORING",
    'SHARING' = "SHARING",
    'USING' = "USING",
    'OTHER-PROCESSING' = "OTHER-PROCESSING"
}
export declare enum PURPOSE {
    'ALL' = "*",
    'ADVERTISING' = "ADVERTISING",
    'COMPLIANCE' = "COMPLIANCE",
    'EMPLOYMENT' = "EMPLOYMENT",
    'JUSTICE' = "JUSTICE",
    'MARKETING' = "MARKETING",
    'MEDICAL' = "MEDICAL",
    'PERSONALIZATION' = "PERSONALIZATION",
    'PUBLIC-INTERESTS' = "PUBLIC-INTERESTS",
    'RESEARCH' = "RESEARCH",
    'SALE' = "SALE",
    'SECURITY' = "SECURITY",
    'SERVICES' = "SERVICES",
    'SERVICES.ADDITIONAL-SERVICES' = "SERVICES.ADDITIONAL-SERVICES",
    'SERVICES.BASIC-SERVICE' = "SERVICES.BASIC-SERVICE",
    'SOCIAL-PROTECTION' = "SOCIAL-PROTECTION",
    'TRACKING' = "TRACKING",
    'VITAL-INTERESTS' = "VITAL-INTERESTS",
    'OTHER-PURPOS' = "OTHER-PURPOSE"
}
export declare enum MOTIVE {
    'IDENTITY-UNCONFIRMED' = "IDENTITY-UNCONFIRMED",
    'LANGUAGE-UNSUPPORTED' = "LANGUAGE-UNSUPPORTED",
    'VALID-REASONS' = "VALID-REASONS",
    'IMPOSSIBLE' = "IMPOSSIBLE",
    'NO-SUCH-DATA' = "NO-SUCH-DATA",
    'REQUEST-UNSUPPORTED' = "REQUEST-UNSUPPORTED",
    'USER-UNKNOWN' = "USER-UNKNOWN",
    'OTHER-MOTIVE' = "OTHER-MOTIVE"
}
export declare enum LEGAL_BASE_TYPE {
    'CONTRACT' = "CONTRACT",
    'CONSENT' = "CONSENT",
    'LEGITIMATE-INTEREST' = "LEGITIMATE-INTEREST",
    'NECESSARY' = "NECESSARY",
    'NECESSARY.LEGAL-OBLIGATION' = "NECESSARY.LEGAL-OBLIGATION",
    'NECESSARY.PUBLIC-INTEREST' = "NECESSARY.PUBLIC-INTEREST",
    'NECESSARY.VITAL-INTEREST' = "NECESSARY.VITAL-INTEREST",
    'OTHER-LEGAL-BASE' = "OTHER-LEGAL-BASE"
}
export declare enum POLICY_TYPE {
    'NO-LONGER-THAN' = "NO-LONGER-THAN",
    'NO-LESS-THAN' = "NO-LESS-THAN"
}
export declare enum AFTER {
    'CAPTURE-DATE' = "CAPTURE-DATE",
    'RELATIONSHIP-START' = "RELATIONSHIP-START",
    'RELATIONSHIP-END' = "RELATIONSHIP-END",
    'SERVICE-START' = "SERVICE-START",
    'SERVICE-END' = "SERVICE-END"
}
