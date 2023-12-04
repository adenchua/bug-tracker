import Box from "@mui/material/Box";
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

const steps = ["Location", "The issue", "Review report"];

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
  const [products] = useState<Product[]>(MOCK_DATA_PRODUCTS);
  const [stepNumber, setStepNumber] = useState<number>(1); // report progress

  const [productId, setProductId] = useState<string | null>(null);
  const [isUnlistedProduct, setIsUnlistedProduct] = useState<boolean>(false);

  const [selectedReportType, setSelectedReportType] = useState<ReportType>("bug");
  const [reportTitle, setReportTitle] = useState<string>("");
  const [reportDescription, setReportDescription] = useState<string>("");

  const handleUpdateStepNumber = (newStepNumber: number): void => {
    setStepNumber(newStepNumber);
  };

  const handleSelectProduct = (event: SelectChangeEvent): void => {
    setProductId(event.target.value);
  };

  const handleSelectReportType = (reportType: ReportType): void => {
    setSelectedReportType(reportType);
  };

  const handleCheckUnlistedProduct = (event: React.ChangeEvent<HTMLInputElement>): void => {
    // product is unlisted, reset form in case user clicks on a random product to close the dropdown
    setProductId(null);
    setIsUnlistedProduct(event.target.checked);
  };

  const handleUpdateReportTitle = (newReportTitle: string): void => {
    setReportTitle(newReportTitle);
  };

  const handleUpdateReportDescription = (newReportDescription: string): void => {
    setReportDescription(newReportDescription);
  };

  return (
    <>
      <Typography variant="h4" mb={6}>
        Report an issue
      </Typography>
      <Stepper activeStep={stepNumber} alternativeLabel sx={{ mb: 8 }}>
        {steps.map((label) => (
          <Step key={label}>
            <StepLabel>{label}</StepLabel>
          </Step>
        ))}
      </Stepper>
      <Box mb={8}>
        {stepNumber === 0 && (
          <CreateReportFormA
            products={products}
            selectedProductId={productId}
            onSelectProduct={handleSelectProduct}
            isUnlistedProduct={isUnlistedProduct}
            onCheckUnlistedProduct={handleCheckUnlistedProduct}
            onUpdateStepNumber={handleUpdateStepNumber}
          />
        )}
        {stepNumber === 1 && (
          <CreateReportFormB
            onSelectReportType={handleSelectReportType}
            reportType={selectedReportType}
            onUpdateStepNumber={handleUpdateStepNumber}
            reportTitle={reportTitle}
            onUpdateReportTitle={handleUpdateReportTitle}
            reportDescription={reportDescription}
            onUpdateReportDescription={handleUpdateReportDescription}
          />
        )}
      </Box>
    </>
  );
}

export default CreateReportTabContent;
