import Head from 'next/head';
import SidebarLayout from 'src/layouts/SidebarLayout-Batera';
import PageHeader from 'src/batera/content/members/title-settings/add-titles/PageHeader';
import PageTitleWrapper from 'src/components/PageTitleWrapper';
import { Grid, Container } from '@mui/material';
import Footer from 'src/components/Footer';
import TitlesList from 'src/batera/content/members/title-settings/add-titles/TitlesList';
import { useState, useEffect, useContext } from 'react';
import axios from 'axios';
import { SidebarContext } from 'src/contexts/SidebarContext';

function Users() {
  const {user} = useContext(SidebarContext)
  const [titleList, setTitleList] = useState([
    {
      id: '1',
      titleName: 'Admin',
      shipList: true,
      shipDetails: true,
      jobList: true,
      dataSheet: true,
      stock: true,
      users: true,
      department: true,
      notification: true,
      inbox: true,
    },
  ]);

  function handleUpdate(id, key, value) {
    setTitleList((prevTitleList) => {
      const updatedTitleList = prevTitleList.map((title) =>
        title.id === id ? { ...title, [key]: value } : title
      );
      return updatedTitleList;
    });
  }

  const handleUpdateName = (key) => (event) => {
    setTitleList((prevTitleList) => {
      const updatedTitleList = prevTitleList.map((title) =>
        title.id === '1' ? { ...title, [key]: event.target.value } : title
      );
      return updatedTitleList;
    });
  };

  const postData = async () => {
    const formData = new FormData();
    const access = {
      "shipList": titleList[0].shipList ? 1 : 0,
      "shipDetails": titleList[0].shipDetails ? 1 : 0,
      "jobList": titleList[0].jobList ? 1 : 0,
      "dataSheet": titleList[0].dataSheet ? 1 : 0,
      "stock": titleList[0].stock ? 1 : 0,
      "users": titleList[0].users ? 1 : 0,
      "department": titleList[0].department ? 1 : 0,
      "inbox": titleList[0].inbox ? 1 : 0,
    }

    formData.append("titleName", titleList[0].titleName)
    formData.append("titleAccess", JSON.stringify(access))
    // console.log(access)
    // console.log(formData)
    // const requestedData = {
    //   "titleName" : titleList[0].titleName,
    //   "titleAccess" : access
    // }
    try {
      const response = await axios.post(`http://127.0.0.1:8000/api/v1/user_title`, 
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
        <title>Add Title</title>
      </Head>
      <PageTitleWrapper>
        <PageHeader postData={postData}/>
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
            <TitlesList titleList={titleList} setTitleList={setTitleList} handleUpdate={handleUpdate} handleUpdateName={handleUpdateName} />
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
