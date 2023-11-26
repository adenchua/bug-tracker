import Typography from "@mui/material/Typography";
import PageLayout from "../components/PageLayout";
import RedirectActionButton from "../components/RedirectActionButton";

function NotFoundPage(): JSX.Element {
  return (
    <PageLayout>
      <Typography variant="h4" paragraph>
        This page does not exist.
      </Typography>
      <RedirectActionButton buttonText="Return home" linkTo="/" />
    </PageLayout>
  );
}

export default NotFoundPage;
