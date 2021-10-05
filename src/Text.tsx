import { VFC } from "react";

type Props = {
  color: string;
  fontSize: string;
};
// React17まではFC型だとchildrenを暗黙的に渡せてしまうため、許容しない場合はVFCを用いる
export const Text: VFC<Props> = (props) => {
  const { color, fontSize } = props;
  return <p style={{ color, fontSize }}>テキスト</p>;
};
