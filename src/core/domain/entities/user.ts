import Email from "./email";
import Password from "./password";

type UserProps = {
  name: string;
  email: string;
  image: string;
  username: string;
  password: string;
};

export default class User {
  readonly name: string;
  readonly email: string;
  readonly image?: string;
  readonly username?: string;
  readonly password?: string;

  constructor(
    props: Omit<User, "username" | "password">,
    username?: string,
    password?: string
  ) {
    this.name = props.name;
    this.email = props.email;
    this.image = props.image;

    if (username && password) {
      this.username = username;
      this.password = password;
    }
  }

  static create(props: Omit<UserProps, "image">): User {
    return new User(
      { ...props, email: new Email(props.email).value },
      props.username,
      new Password(props.password).value
    );
  }
}
