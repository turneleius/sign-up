export const createAccount = (event: any) => {
    event.preventDefault();
    const firstName = event.target.firstName.value;
    const lastName = event.target.lastName.value;
    const email = event.target.email.value;
    const password = event.target.password.value;
    const passwordConfirmation = event.target.passwordConfirmation.value;
    const country = event.target.country.value;
    console.log('🚀 ~ handleSubmit ~ firstName:', {
      firstName,
      lastName,
      email,
      password,
      passwordConfirmation,
      country,
    })
}