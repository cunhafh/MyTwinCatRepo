declare module TcHmi.Functions.Beckhoff {
    /**
     * Logout server session. Will cause hmi to reload if reload parameter is not set to false.
     * @param ctx An object holding functions for success and error.
     * @param reload
     */
    function LogoutEx(ctx: Required<TcHmi.Context>, reload?: boolean): void;
}
//# sourceMappingURL=LogoutEx.d.ts.map