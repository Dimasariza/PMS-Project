import Head from 'next/head';
import SidebarLayout from 'src/layouts/SidebarLayout-Batera';
import PageHeader from 'src/batera/members/users/add-users/PageHeader';
import PageTitleWrapper from 'src/components/PageTitleWrapper';
import { Grid, Container } from '@mui/material';
import Footer from 'src/components/Footer';
import TitlesList from 'src/batera/members/users/add-users/TitlesList';
import { useState, useContext, useEffect } from 'react';
import axios from 'axios';
import { SidebarContext } from 'src/contexts/SidebarContext';

function Users() {
  const {user} = useContext(SidebarContext)
  const [inputedUser, setInputedUser] = useState(
    {
      fullName: '',
      userName: '',
      title: '',
      email: '',
      workplace: '',
      status: '',
      department: '',
      password: '',
      document: '',
    });
  
    
    const handleUpdate = (key) => (event) => {
      if(key == 'document'){
        setInputedUser((prev) => ({
          ...prev,
          [key]: event,
        }));
      }else{
        setInputedUser((prev) => ({
          ...prev,
          [key]: event.target.value,
        }));
      }
    };

    const postData = async () => {
      const formData = new FormData();
      formData.append("username", inputedUser.userName)
      formData.append("fullname", inputedUser.fullName)
      formData.append("departmentId", inputedUser.department)
      formData.append("email", inputedUser.email)
      formData.append("password", inputedUser.password)
      formData.append("userTitleId", inputedUser.title)
      formData.append("workPlace", inputedUser.workplace)
      formData.append("status", 1)
      formData.append("document", inputedUser.document)
      try {
        const response = await axios.post(`http://127.0.0.1:8000/api/v1/user`, 
        formData,
        {
          headers: {
            Authorization: `Bearer ${user.token}`,
          },
        });
        console.log(response)
        
      } catch (error) {
        console.log(error)
      }
    }
  return (
    <>
      <Head>
        <title>Add User</title>
      </Head>
      <PageTitleWrapper>
        <PageHeader postData={postData} />
      </PageTitleWrapper>
      <Container maxWidth="lg">
        <Grid
          container
          direction="row"
          justifyContent="center"
          alignItems="stretch"
          spacing={3}
        >
          <Grid item xs={12}>
            <TitlesList inputedUser={inputedUser} setInputedUser={setInputedUser} handleUpdate={handleUpdate} />
          </Grid>
        </Grid>
      </Container>
      <Footer />
    </>
  );
}

Users.getLayout = (page) => (
  <SidebarLayout>{page}</SidebarLayout>
);

export default Users;
