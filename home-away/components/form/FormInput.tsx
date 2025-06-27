import { Label } from "../ui/label";
import { Input } from "../ui/input";

type FormInputProps = {
	name: string;
	type: string;
	defaultValue?: string;
	placeholder?: string;
	label?: string;
};
const FormInput = (props: FormInputProps) => {
	const { name, type, defaultValue, placeholder, label } = props;
	return (
		<div className="mb-2">
			<Label htmlFor={name} className="mb-2 capitalize">
				{label||name}
			</Label>
			<Input id={name} name={name} type={type} placeholder={placeholder} defaultValue={defaultValue}  required/>
		</div>
	);
};

export default FormInput;
