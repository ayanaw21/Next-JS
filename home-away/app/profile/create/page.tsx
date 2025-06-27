
import SubmitButton from "@/components/form/Buttons";
import FormInput from "@/components/form/FormInput";

const createProfileAction = async (formData: FormData) => {
	"use server";
	const firstName = formData.get("firstName") as string;
	console.log(firstName);
};

const CreateProfilePage = () => {
	return (
		<section>
			<h1 className="text-2xl font-semibold mb-b capitalize">new user</h1>
			<div className="border p-8 round-md max-w-lg">
				<form action={createProfileAction}>
                    <FormInput name="firstName" type='text' label='First Name'/>
                    <SubmitButton text='submit' />
                </form>
			</div>
		</section>
	);
};

export default CreateProfilePage;
