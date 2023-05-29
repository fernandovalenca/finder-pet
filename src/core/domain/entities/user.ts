type UserProps = {
  name: string;
  email: string;
  image: string;
};

export default class User {
  name: string;
  email: string;
  image: string;

  constructor(props: UserProps) {
    this.name = props.name;
    this.email = props.email;
    this.image = props.image;
  }
}
