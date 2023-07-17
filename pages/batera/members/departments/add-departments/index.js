import Head from 'next/head';
import SidebarLayout from 'src/layouts/SidebarLayout-Batera';
import PageHeader from 'src/batera/content/members/departments/add-departments/PageHeader';
import PageTitleWrapper from 'src/components/PageTitleWrapper';
import { Grid, Container } from '@mui/material';
import Footer from 'src/components/Footer';
import TitlesList from 'src/batera/content/members/departments/add-departments/TitlesList';
import { useState, useContext, useEffect } from 'react';
import axios from 'axios';
import { SidebarContext } from 'src/contexts/SidebarContext';

function Users() {
  const {user} = useContext(SidebarContext)
  const [workplaceList, setWorkplaceList] = useState([
    {
      workplace: 'Ship',
      value: 'ship'
    },
    {
      workplace: 'Office',
      value: 'office'
    }
  ]);
  const [departmentList, setDepartmentList] = useState(
    {
      departmentCode: '',
      departmentName: '',
      workplace: workplaceList[0].value,
    });
    
    
    
    const handleUpdate = (key) => (event) => {
      setDepartmentList((prev) => ({
        ...prev,
        [key]: event.target.value,
      }));
    };

    const postData = async () => {
      const formData = new FormData();
      formData.append("departmentName", departmentList.departmentName)
      formData.append("departmentCode", departmentList.departmentCode)
      formData.append("workPlace", departmentList.workplace)
      try {
        const response = await axios.post(`http://127.0.0.1:8000/api/v1/department`, 
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
        <title>Add Department</title>
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
            <TitlesList departmentList={departmentList} setDepartmentList={setDepartmentList} workplaceList={workplaceList} setWorkplaceList={setWorkplaceList} handleUpdate={handleUpdate} />
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
