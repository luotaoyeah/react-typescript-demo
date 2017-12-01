class AuthenticationService {
  static isAuthenticated: boolean = false;

  /**
   *
   * @returns {Promise<void>}
   */
  static async authenticate(): Promise<void> {
    AuthenticationService.isAuthenticated = true;
    /* fake async */
    await new Promise((resolve) => {
      setTimeout(
        () => {
          resolve();
        },
        100
      );
    });
  }

  /**
   *
   * @param {Function} cb
   */
  static signout(cb: Function): void {
    AuthenticationService.isAuthenticated = false;
    setTimeout(
      () => {
        cb();
      },
      100
    );
  }

}

export {
  AuthenticationService
};