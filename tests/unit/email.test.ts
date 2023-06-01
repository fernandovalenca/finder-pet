import Email from "@/core/domain/entities/email";

describe("Email", () => {
  it("should create a valid email object", () => {
    const validEmail = "test@example.com";
    const email = new Email(validEmail);
    expect(email.value).toBe(validEmail);
  });

  it("should throw an error for an invalid email", () => {
    const invalidEmail = "invalid-email";
    expect(() => new Email(invalidEmail)).toThrow("Invalid email");
  });
});
