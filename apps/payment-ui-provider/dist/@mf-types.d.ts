
    export type RemoteKeys = 'REMOTE_ALIAS_IDENTIFIER/payment-widgets' | 'REMOTE_ALIAS_IDENTIFIER/pdp-basket-footer';
    type PackageType<T> = T extends 'REMOTE_ALIAS_IDENTIFIER/pdp-basket-footer' ? typeof import('REMOTE_ALIAS_IDENTIFIER/pdp-basket-footer') :T extends 'REMOTE_ALIAS_IDENTIFIER/payment-widgets' ? typeof import('REMOTE_ALIAS_IDENTIFIER/payment-widgets') :any;