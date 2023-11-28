import Chip from "@mui/material/Chip";
import MenuItem from "@mui/material/MenuItem";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Select, { SelectChangeEvent } from "@mui/material/Select";

import { Product } from "../../interfaces/Product";
import { ReportType } from "../../interfaces/Report";

interface DisplayedReportType {
  label: string;
  reportType: ReportType;
}

const reportTypeList: DisplayedReportType[] = [
  {
    label: "Bug",
    reportType: "bug",
  },
  {
    label: "UX Issue",
    reportType: "ux-issue",
  },
  {
    label: "Feature Request",
    reportType: "feature-request",
  },
  {
    label: "Others",
    reportType: "others",
  },
];

interface CreateReportFormAProps {
  disableForm: boolean;
  selectedProductId: string | null;
  products: Product[];
  reportType: ReportType;
  onSelectProduct: (e: SelectChangeEvent) => void;
  onSelectReportType: (reportType: ReportType) => void;
}

/**
 * Part A of report creation form.
 * handles report type fields, such as product and report type
 */
function CreateReportFormA(props: CreateReportFormAProps): JSX.Element {
  const {
    disableForm,
    selectedProductId,
    products,
    reportType,
    onSelectProduct,
    onSelectReportType,
  } = props;

  return (
    <>
      <Typography fontWeight="bold" gutterBottom>
        Product
      </Typography>
      <Select
        disabled={disableForm}
        value={selectedProductId ?? undefined}
        displayEmpty
        onChange={onSelectProduct}
        size="small"
        variant="filled"
        fullWidth
      >
        <MenuItem value={undefined} disabled>
          <em>Select Product</em>
        </MenuItem>
        {products.map((product) => (
          <MenuItem value={product.id} key={product.id}>
            {product.name}
          </MenuItem>
        ))}
      </Select>
      <Typography fontWeight="bold" gutterBottom sx={{ mt: 4 }}>
        Report type
      </Typography>
      <Box display="flex" gap={2} mb={8}>
        {reportTypeList.map((reportTypeDisplay) => (
          <Chip
            key={reportTypeDisplay.reportType}
            label={reportTypeDisplay.label}
            variant="outlined"
            color={reportType === reportTypeDisplay.reportType ? "primary" : "default"}
            onClick={() => onSelectReportType(reportTypeDisplay.reportType)}
            disabled={disableForm}
          />
        ))}
      </Box>
    </>
  );
}

export default CreateReportFormA;
