import MuiDivider from "@mui/material/Divider";

interface DividerProps {
  spacing?: number;
}

function Divider(props: DividerProps): JSX.Element {
  const { spacing } = props;

  return <MuiDivider sx={{ borderStyle: "dashed", my: spacing }} />;
}

Divider.defaultProps = {
  spacing: 0,
};

export default Divider;
