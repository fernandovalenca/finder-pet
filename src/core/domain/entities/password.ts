export default class Password {
  private passwordRegex: RegExp =
    /^(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#$%^&*()_+\-=[\]{};':"\\|,.<>/?]).{6,}$/;

  constructor(private password: string) {
    if (!password.match(this.passwordRegex)) {
      throw new Error("Invalid password");
    }
  }

  get value(): string {
    return this.password;
  }
}
