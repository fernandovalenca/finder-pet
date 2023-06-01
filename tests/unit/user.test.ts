import User from "@/core/domain/entities/user";

describe('User', () => {
  it('should create a valid user object with username and password', () => {
    const userProps = {
      name: 'John Doe',
      email: 'john.doe@example.com',
      image: 'profile.jpg',
      username: 'johndoe',
      password: 'Test@123'
    };

    const user = User.create(userProps);

    expect(user.name).toBe(userProps.name);
    expect(user.email).toBe(userProps.email);
    expect(user.image).toBe(userProps.image);
    expect(user.username).toBe(userProps.username);
    expect(user.password).toBe(userProps.password);
  });

  it('should create a valid user object without username and password', () => {
    const userProps = {
      name: 'Jane Doe',
      email: 'jane.doe@example.com',
      image: 'profile.jpg'
    };

    const user = new User(userProps);

    expect(user.name).toBe(userProps.name);
    expect(user.email).toBe(userProps.email);
    expect(user.image).toBe(userProps.image);
    expect(user.username).toBeUndefined();
    expect(user.password).toBeUndefined();
  });

  it('should throw an error for an invalid email', () => {
    const userProps = {
      name: 'Invalid User',
      email: 'invalid-email',
      image: 'profile.jpg',
      username: 'invaliduser',
      password: 'Test@123'
    };

    expect(() => User.create(userProps)).toThrow('Invalid email');
  });

  it('should throw an error for an invalid password', () => {
    const userProps = {
      name: 'Weak Password',
      email: 'weak.password@example.com',
      image: 'profile.jpg',
      username: 'weakpassword',
      password: 'weakpassword'
    };

    expect(() => User.create(userProps)).toThrow('Invalid password');
  });
});