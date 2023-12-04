import Checkbox from "@mui/material/Checkbox";
import FormControlLabel from "@mui/material/FormControlLabel";
import FormGroup from "@mui/material/FormGroup";
import MenuItem from "@mui/material/MenuItem";
import Select, { SelectChangeEvent } from "@mui/material/Select";
import TextField from "@mui/material/TextField";

import { Product } from "../../interfaces/Product";
import FormLabel from "./FormLabel";
import ProgressButton from "./ProgressButton";

interface CreateReportFormAProps {
  selectedProductId: string | null;
  products: Product[];
  onSelectProduct: (e: SelectChangeEvent) => void;
  onCheckUnlistedProduct: (event: React.ChangeEvent<HTMLInputElement>) => void;
  isUnlistedProduct: boolean;
  onUpdateStepNumber: (newStepNumber: number) => void;
}

/**
 * Part 1 of report creation form.
 * handles report location
 */
function CreateReportFormA(props: CreateReportFormAProps): JSX.Element {
  const {
    selectedProductId,
    products,
    onSelectProduct,
    onCheckUnlistedProduct,
    isUnlistedProduct,
    onUpdateStepNumber,
  } = props;

  // a product must be selected to progress through the form, unless it is not listed
  const disableForm = selectedProductId === null && !isUnlistedProduct;

  return (
    <>
      <FormLabel
        primaryText="Which product have you found the issue in?"
        secondaryText="Please contact our administrators if you do not see any products displayed"
      />
      <Select
        disabled={isUnlistedProduct}
        value={selectedProductId ?? ""}
        displayEmpty
        onChange={onSelectProduct}
        size="small"
        variant="filled"
        fullWidth
      >
        <MenuItem value="" disabled>
          <em>Please select a product</em>
        </MenuItem>
        {products.map((product) => (
          <MenuItem value={product.id} key={product.id}>
            {product.name}
          </MenuItem>
        ))}
      </Select>
      <FormGroup sx={{ mt: 1, display: "inline-block", mb: 6 }}>
        <FormControlLabel
          control={<Checkbox onChange={onCheckUnlistedProduct} checked={isUnlistedProduct} />}
          label="My product is not listed"
        />
      </FormGroup>

      <FormLabel primaryText="[Optional] Which URL have you found the issue in?" />
      <TextField
        variant="filled"
        fullWidth
        size="small"
        placeholder="https://example.com"
        sx={{ mb: 8 }}
      />
      <ProgressButton text="Next" onClick={() => onUpdateStepNumber(1)} isDisabled={disableForm} />
    </>
  );
}

export default CreateReportFormA;
