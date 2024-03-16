import { useFieldArray, useForm } from "react-hook-form";
import { NavLink, useNavigate } from "react-router-dom";

import Field from "./formElements/Field";
import Fieldset from "./formElements/Fieldset";

const Register = () => {
    const navigate = useNavigate();
    const { register, handleSubmit, formState: { errors }, control } = useForm();
    const { fields, append, remove } = useFieldArray({
        name: "socials",
        control,
    });

    const formSubmit = async (formData) => {
        console.log(formData);
        const { email, password } = formData;

        try {
            const user = await registerUserWithEmailAndPassword(email, password);
            console.log(user);
            console.log("User registered successfully");
            navigate("/login");

        } catch (error) {
            console.error(error);
        }
    }

    return (
        <div className="flex flex-col justify-center items-center h-lvh">
            <div className=" border-t-8 rounded-sm border-indigo-400 bg-white p-12 shadow-2xl w-96">
                <h1 className="font-bold text-center block text-2xl">Create your Account</h1>
                <form onSubmit={handleSubmit(formSubmit)} className="mb-4">
                    {/* User Details */}
                    <Fieldset label="Enter personal details">
                        <Field label="Email" error={errors.email}>
                            <input {...register("email", { required: "Email is required" })}
                                className={`p-2 border box-border w-[300px] rounded-md ${errors.email ? "border-red-500" : "border-gray-400"}`}
                                type="email" name="email" id="email" placeholder="example@email.com" />
                        </Field>

                        {/* <Field label="Full Name" error={errors.fName}>
                            <input {...register("fName", { required: "Full Name is required" })}
                                className={`p-2 border box-border w-[300px] rounded-md ${errors.fName ? "border-red-500" : "border-gray-400"}`}
                                type="text" name="fName" id="fName" placeholder="Example Name" />
                        </Field> */}

                        <Field label="Password" error={errors.password}>
                            <input {...register("password", {
                                required: "Password is required",
                                minLength: { value: 6, message: "Password must be at least 6 characters" },
                            })}
                                className={`p-2 border box-border w-[300px] rounded-md ${errors.password ? "border-red-500" : "border-gray-400"}`}
                                type="password" name="password" id="password" placeholder="Enter Password" />
                        </Field>

                    </Fieldset>

                    {/* Social Handles  */}
                    {/* <Fieldset label="Enter Social Handles">
                        {
                            fields.map((field, index) => {
                                return (
                                    <div key={field.id}
                                        className="flex justify-between items-center w-full p-2 mb-5 border border-gray-300 rounded-md"
                                    >
                                        <Field label="Name">
                                            <input {...register(`socials.${index}.name`)}
                                                className="p-2 border box-border w-[300px] rounded-md border-gray-400"
                                                type="text" name={`socials.${index}.name`} id={`socials.${index}.name`} placeholder="Facebook" />
                                        </Field>

                                        <Field label="URL">
                                            <input {...register(`socials.${index}.url`)}
                                                className="p-2 border box-border w-[300px] rounded-md border-gray-400"
                                                type="text" name={`socials.${index}.url`} id={`socials.${index}.url`} placeholder="https://facebook.com" />
                                        </Field>
                                        <button onClick={() => remove(index)}
                                            className="mt-8 text-red-900 font-medium border border-red-800 rounded-full w-[3.25rem] cursor-pointer">&#x2715;</button>
                                    </div>
                                )
                            })
                        }
                        <button onClick={() => append({ name: "", url: "" })}
                            className="m-auto my-2 text-blue-900 font-medium border border-blue-800 rounded-full w-8 h-8 cursor-pointer">&#43;</button>
                    </Fieldset> */}
                    <Field>
                        <button className="p-2 mt-4 bg-indigo-500 hover:bg-indigo-600 text-white rounded-md w-[300px] cursor-pointer">Sign up</button>
                    </Field>
                </form>
                <NavLink className="text-gray-900 block" to="/login">Already have an account? <span className="underline text-indigo-500">Sign in</span></NavLink>
            </div>
        </div >
    )
}

export default Register;
