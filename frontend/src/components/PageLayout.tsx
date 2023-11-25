import { ReactNode } from "react";
import Container from "@mui/material/Container";

import NavigationBar from "./NavigationBar";

interface PageLayoutProps {
  children: ReactNode;
}

function PageLayout(props: PageLayoutProps): JSX.Element {
  const { children } = props;

  return (
    <>
      <NavigationBar />
      <Container disableGutters sx={{ p: 3 }} maxWidth="md">
        {children}
      </Container>
    </>
  );
}

export default PageLayout;
