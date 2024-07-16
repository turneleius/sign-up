'use client'
import { createAccount } from "./actions/formActions";

const CreateAccountForm = ({ formTitle }: any) => {

    const handleSubmit = (event: any) => {
        event.preventDefault();
        const user = {
            firstName: event.target.firstName.value,
            lastName: event.target.lastName.value,
            email: event.target.email.value,
            password: event.target.password.value,
            passwordConfirmation: event.target.passwordConfirmation.value,
            country: event.target.country.value
        }
        createAccount(user);
    }
    return (
        <>
            <div className="text-5xl">
                {formTitle}
            </div>
            <div>
                <form onSubmit={handleSubmit}>
                    <input className="border-2 border-gray-500" name="firstName" type="text" placeholder="Enter your First Name" />
                    <input className="border-2 border-gray-500" name="lastName" type="text" placeholder="Enter your Last Name" />
                    <input className="border-2 border-gray-500" name="email" type="email" placeholder="Enter your email address" />
                    Country<select name="country" className="border-2 border-gray-500">
                        <option value="TT">Trinidad and Tobago</option>
                        <option value="JA">Jamaica</option>
                        <option value="BD">Barbados</option>
                    </select>
                    <input className="border-2 border-gray-500" name="password" type="password" placeholder="Enter your password" />
                    <input className="border-2 border-gray-500" name="passwordConfirmation" type="password" placeholder="Confirm your password" />
                    <div>
                        <button className="bg-lime-600 text-white" type="submit">Create Account</button>
                    </div>
                </form>
            </div>
        </>
    )
}

export default CreateAccountForm;