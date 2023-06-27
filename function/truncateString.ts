interface Props {
  str: string;
  maxLength: number;
}
export default function truncateString(props: Props) {
  if (props.str.length > props.maxLength) {
    return props.str.slice(0, props.maxLength) + "...";
  }
  return props.str;
}