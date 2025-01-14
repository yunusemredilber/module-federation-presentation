
    export type RemoteKeys = 'REMOTE_ALIAS_IDENTIFIER/product-detail';
    type PackageType<T> = T extends 'REMOTE_ALIAS_IDENTIFIER/product-detail' ? typeof import('REMOTE_ALIAS_IDENTIFIER/product-detail') :any;