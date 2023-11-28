import { Outlet } from "react-router-dom";

import PageLayoutWithSwitches from "../../components/PageLayoutWithSwitches";
import { Tab } from "../../components/TabNavigationBar";

const tabs: Tab[] = [
  {
    name: "Overview",
    linkTo: "overview",
  },
  {
    name: "Report issue",
    linkTo: "crp",
  },
  {
    name: "Public reports",
    linkTo: "vrp",
  },
];

function ReportPage(): JSX.Element {
  return (
    <PageLayoutWithSwitches tabs={tabs}>
      <Outlet />
    </PageLayoutWithSwitches>
  );
}

export default ReportPage;
