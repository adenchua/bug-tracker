import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import { SelectChangeEvent } from "@mui/material/Select";
import Step from "@mui/material/Step";
import StepLabel from "@mui/material/StepLabel";
import Stepper from "@mui/material/Stepper";
import Typography from "@mui/material/Typography";
import { useState } from "react";

import { Product } from "../../interfaces/Product";
import { ReportType } from "../../interfaces/Report";
import CreateReportFormA from "./CreateReportFormA";
import CreateReportFormB from "./CreateReportFormB";

const steps = ["Report type", "Report details", "Review report"];

// TODO: To remove and replace with database data
const MOCK_DATA_PRODUCTS: Product[] = [
  {
    id: "12345dwqddqwd",
    name: "Product A",
  },
  {
    id: "dwqdddqww123",
    name: "Product B",
  },
];

function CreateReportTabContent(): JSX.Element {
  const [products, setProducts] = useState<Product[]>(MOCK_DATA_PRODUCTS);
  const [productId, setProductId] = useState<string | null>(null);
  const [reportProgressState, setReportProgressState] = useState<number>(1);
  const [selectedReportType, setSelectedReportType] = useState<ReportType>("bug");

  const disableForm = products.length === 0;

  const handleSelectProduct = (event: SelectChangeEvent): void => {
    setProductId(event.target.value);
  };

  const handleSelectReportType = (reportType: ReportType): void => {
    setSelectedReportType(reportType);
  };

  return (
    <>
      <Typography variant="h4" mb={6}>
        Report an issue
      </Typography>
      <Stepper activeStep={reportProgressState} alternativeLabel sx={{ mb: 8 }}>
        {steps.map((label) => (
          <Step key={label}>
            <StepLabel>{label}</StepLabel>
          </Step>
        ))}
      </Stepper>
      <Box mb={8}>
        {reportProgressState === 0 && (
          <CreateReportFormA
            disableForm={disableForm}
            products={products}
            selectedProductId={productId}
            onSelectProduct={handleSelectProduct}
            onSelectReportType={handleSelectReportType}
            reportType={selectedReportType}
          />
        )}
        {reportProgressState === 1 && <CreateReportFormB />}
      </Box>
      <Box display="flex" justifyContent="space-between" gap={4}>
        <Button
          variant="outlined"
          disableElevation
          disableRipple
          fullWidth
          sx={{ visibility: reportProgressState !== 0 ? "visible" : "hidden" }}
          onClick={() => setReportProgressState((prevState) => prevState - 1)}
        >
          Previous
        </Button>
        {reportProgressState !== 2 && (
          <Button
            variant="contained"
            disableElevation
            disableRipple
            fullWidth
            onClick={() => setReportProgressState((prevState) => prevState + 1)}
            disabled={disableForm || productId === null}
          >
            Next
          </Button>
        )}
        {reportProgressState === 2 && (
          <Button variant="contained" disableElevation disableRipple fullWidth>
            Submit report
          </Button>
        )}
      </Box>
    </>
  );
}

export default CreateReportTabContent;
