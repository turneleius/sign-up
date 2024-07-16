'use server'

type User = {
    firstName: String
    lastName: String
    email: String
    password: String
    passwordConfirmation: String
    country: String
}

export const createAccount = (user: User) => {
    const firstName = user.firstName;
    const lastName = user.lastName;
    const email = user.email;
    const password = user.password;
    const passwordConfirmation = user.passwordConfirmation;
    const country = user.country;
    console.log('🚀 ~ handleSubmit ~ firstName:', {
      firstName,
      lastName,
      email,
      password,
      passwordConfirmation,
      country,
    })
}