import Divider from "../../components/Divider";
import PageLayout from "../../components/PageLayout";
import BugReportWriteup from "./BugReportWriteup";
import PublicReportWriteup from "./PublicReportWriteup";

function LandingPage(): JSX.Element {
  return (
    <PageLayout>
      <BugReportWriteup />
      <Divider spacing={4} />
      <PublicReportWriteup />
    </PageLayout>
  );
}

export default LandingPage;
