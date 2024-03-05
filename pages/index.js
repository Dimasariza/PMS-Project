import { Box, Container, Button, styled, CircularProgress } from '@mui/material';
import BaseLayout from 'src/layouts/BaseLayout';
import Head from 'next/head';
import TextField from '@mui/material/TextField';
import React, { useState, useContext } from "react";
import { useRouter } from 'next/router';
import { getSession, signIn, useSession } from 'next-auth/react';
import axios from 'axios';
import { SidebarContext } from 'src/contexts/SidebarContext';

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
    const [loading, setLoading] = useState(false);
    const [errorMessage, setErrorMessage] = useState(false)
    const { closeSidebar, setShipId } = useContext(SidebarContext);
    // const { data : session } = useSession() 

    const handleLogin = async (e) => {
        setLoading(true);
        e.preventDefault()
        const res = await login();
    }

    const login = async () =>{
        console.log("Login attempt")
        const res = await signIn("credentials", { 'login': username, 'password' : password, redirect : false })
        if(res.ok){
            const session = await getSession();
            if(session){
                setErrorMessage(false)
                setLoading(false);
                if(session.user.role.ship_id == null){
                    console.log("Show Ship List");
                    router.push('/ship-list');
                }else{
                    console.log("Show Certain Ship");
                    setShipId(session.user.role.ship_id)
                    router.push(`/dashboards/ship-details?id=${session.user.role.ship_id}`)
                }
            }else{
                setTimeout(async () => {await login();}, 1000);
            }
        } 
        if(res.error) {
            setErrorMessage(true)
            setLoading(false);
        }
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
                            variant='outlined'
                            onChange={(event) => {setUsername(event.target.value)}}
                            InputLabelProps={{ shrink: true }}
                        />
                    
                        <TextField
                            sx={{ width: '100%' }}
                            id="outlined-password-input"
                            label="Password"
                            required
                            type="password"
                            autoComplete="current-password"
                            value={password}
                            variant='outlined'
                            onChange={(event) => {setPassword(event.target.value)}}
                            InputLabelProps={{ shrink: true }}
                        />
                        <Box sx={{ m: 1, position: 'relative' }}>
                            <Button
                                sx={{ width: '100%' }}
                                variant="contained"
                                className="text-3xl font-bold underline"
                                onClick={handleLogin}
                                disabled={loading}
                                >
                                Login
                            </Button>
                            {loading && (
                                <CircularProgress
                                    size={24}
                                    sx={{
                                    color: 'blue',
                                    position: 'absolute',
                                    top: '50%',
                                    left: '50%',
                                    marginTop: '-12px',
                                    marginLeft: '-12px',
                                    }}
                                />
                            )}
                        </Box>
                        
                        <p style={{ color: 'red', visibility: errorMessage ? "visible" : "hidden" }} >Login failed. Please check your credentials.</p>

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