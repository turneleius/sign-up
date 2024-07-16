'use client'
import { Button, FormControl, Grid, InputLabel, MenuItem, Select, TextField } from "@mui/material";
import { createAccount } from "./actions/formActions";
import { useState } from "react";

const CreateAccountForm = ({ formTitle }: any) => {
    const [country, setCountry] = useState("");

    const handleChange = (event: any) => {
        setCountry(() => event.target.value);
    }

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
                    <Grid container spacing={3}>
                        <Grid item xs={12} md={6}>
                            <TextField fullWidth name="firstName" label="First Name" variant="outlined" />
                        </Grid>
                        <Grid item xs={12} md={6}>
                            <TextField fullWidth name="lastName" label="Last Name" variant="outlined" />
                        </Grid>
                        <Grid item xs={12} md={6}>
                            <TextField fullWidth name="email" label="Email Address" type="email" variant="outlined" />
                        </Grid>
                        <Grid item xs={12} md={6}>
                            <FormControl fullWidth>
                                <InputLabel>Country</InputLabel>
                                <Select
                                    value={country}
                                    label="Country"
                                    name="country"
                                    onChange={handleChange}
                                >
                                    <MenuItem value={'TT'}>Trinidad and Tobago</MenuItem>
                                    <MenuItem value={'JA'}>Jamaica</MenuItem>
                                    <MenuItem value={'BD'}>Barbados</MenuItem>
                                </Select>
                            </FormControl>
                        </Grid>
                        <Grid item xs={12} md={6}>
                            <TextField fullWidth name="password" label="Password" variant="outlined" type="password" />
                        </Grid>
                        <Grid item xs={12} md={6}>
                            <TextField fullWidth name="passwordConfirmation" label="Confirm Password" variant="outlined" type="password" />
                        </Grid>
                        <Grid item xs={12} md={6}>
                            <Button variant="contained" type="submit">Create Account</Button>
                        </Grid>
                    </Grid>
                </form>
            </div>
        </>
    )
}

export default CreateAccountForm;