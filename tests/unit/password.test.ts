import Password from "@/core/domain/entities/password";


describe('Password', () => {
  it('should create a valid password object', () => {
    const validPassword = 'Test@123';
    const password = new Password(validPassword);
    expect(password.value).toBe(validPassword);
  });

  it('should throw an error for an invalid password', () => {
    const invalidPassword = 'weakpassword';
    expect(() => new Password(invalidPassword)).toThrow('Invalid password');
  });
});