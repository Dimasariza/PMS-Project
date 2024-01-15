import { Box, Container, Button, styled } from '@mui/material';
import BaseLayout from 'src/layouts/BaseLayout';
import Head from 'next/head';
import TextField from '@mui/material/TextField';
import React, { useState } from "react";
import { useRouter } from 'next/router';
import { signIn } from 'next-auth/react';

const OverviewWrapper = styled(Box)(
  ({ theme }) => `
    overflow: auto;
    background: ${theme.palette.common.white};
    flex: 1;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
  `
);

function Login() {
    const router = useRouter();
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [errorMessage, setErrorMessage] = useState(null)

    const handleLogin = async (e) => {
      e.preventDefault()
      const res = await signIn("credentials", { username, password, redirect : false })
      if(res.ok) router.push('/ship-list')
      if(res.error) return setErrorMessage(res)
    }

    return (
        <OverviewWrapper>
            <Head>
            <title>Login PMS</title>
            </Head>
            
            <Box sx={{ mt: 4 }} className='w-full'>
                <Container maxWidth="sm">
                    <Box display="flex" flexDirection="column" gap={2} sx={{ mt: 4 }} className='items-center'>

                        <div style={{display: 'flex', alignItems: 'center', justifyContent: 'center'}}>
                            <img
                            src="/static/images/logo/logo-batera.svg"
                            alt="Logo Batera"
                            width={"80%"}
                            />
                        </div>

                        <TextField
                            sx={{ width: '100%' }}
                            required
                            id="outlined-required"
                            label="Username"
                            value={username}
                            onChange={(event) => {setUsername(event.target.value)}}
                        />
                    
                        <TextField
                            sx={{ width: '100%' }}
                            id="outlined-password-input"
                            label="Password"
                            required
                            type="password"
                            autoComplete="current-password"
                            value={password}
                            onChange={(event) => {setPassword(event.target.value)}}
                        />

                        {errorMessage && <p style={{ color: 'red' }}>Login failed. Please check your credentials.</p>}

                        <Button
                            sx={{ width: '100%' }}
                            variant="contained"
                            className="text-3xl font-bold underline"
                            onClick={handleLogin}
                            >
                            Login
                        </Button>

                    </Box>
                </Container>
            </Box>
        </OverviewWrapper>
    );
}
export default Login;

Login.getLayout = function getLayout(page) {
  return <BaseLayout>{page}</BaseLayout>;
};