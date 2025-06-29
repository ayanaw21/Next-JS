import FormContainer from "@/components/form/FormContainer";
import SubmitButton from "@/components/form/Buttons";
import FormInput from "@/components/form/FormInput";
import { createProfileAction } from "@/utils/actions";

const CreateProfilePage = () => {
	return (
		<section>
			<h1 className="text-2xl font-semibold mb-b capitalize">new user</h1>
			<div className="border p-8 round-md">
				<FormContainer action={createProfileAction}>
					<div className="gird gap-4 mt-4 md:grid-cols-3">
						<FormInput
							name="firstName"
							type="text"
							label="First Name"
						/>
						<FormInput
							name="lastName"
							type="text"
							label="Last Name"
						/>
						<FormInput
							name="username"
							type="text"
							label="User Name"
						/>
						<SubmitButton text="submit" />
					</div>
				</FormContainer>
			</div>
		</section>
	);
};

export default CreateProfilePage;
