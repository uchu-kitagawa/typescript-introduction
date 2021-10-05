import { VFC } from "react";
import { User } from "./types/user";

type Props = {
  user: User;
};

export const UserProfile: VFC<Props> = (props) => {
  const { user } = props;
  return (
    <dl>
      <dt>名前</dt>
      <dd>{user.name}</dd>
      <dt>趣味</dt>
      {/* .の代わりに.?（Optional Chaining）を使用することで、結果がnullまたはundefinedの際にundifinedを返却をするのでエラーにならない */}
      <dd>{user.hobbies?.join(" / ")}</dd>
    </dl>
  );
};
