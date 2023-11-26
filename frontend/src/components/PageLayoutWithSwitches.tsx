import { ReactNode } from "react";
import Container from "@mui/material/Container";

import NavigationBar from "./NavigationBar";
import TabNavigationBar, { Tab } from "./TabNavigationBar";

interface PageLayoutWithSwitchesProps {
  children: ReactNode;
  tabs: Tab[];
}

function PageLayoutWithSwitches(props: PageLayoutWithSwitchesProps): JSX.Element {
  const { children, tabs } = props;

  return (
    <>
      <NavigationBar />
      <TabNavigationBar tabs={tabs} />
      <Container disableGutters maxWidth="md" sx={{ p: 3 }}>
        {children}
      </Container>
    </>
  );
}

export default PageLayoutWithSwitches;
