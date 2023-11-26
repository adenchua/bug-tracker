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
      <div />
    </PageLayoutWithSwitches>
  );
}

export default ReportPage;
