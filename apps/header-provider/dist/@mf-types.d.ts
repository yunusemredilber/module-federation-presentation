
    export type RemoteKeys = 'REMOTE_ALIAS_IDENTIFIER/header';
    type PackageType<T> = T extends 'REMOTE_ALIAS_IDENTIFIER/header' ? typeof import('REMOTE_ALIAS_IDENTIFIER/header') :any;