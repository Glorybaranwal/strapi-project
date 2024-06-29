import Image from "next/image";
import axios from "axios";
import { useState } from "react";
import { Typography, Box, Card, Button } from "@mui/material";
import CustomizedDialogs from "./edit"

export default function Post({ data }) {

  const [title, setTitle] = useState("")
  const [description, setDescription] = useState("")
  const [edit, setEdit] = useState(false)
  const [editableData, setEditableData] = useState("")

  const delete_post = async (id) => {
    try {
      const response = await axios.delete(`${process.env.NEXT_PUBLIC_URL}/api/posts/${id}`);
      console.log("response", response)
    } catch (error) {
      console.log("error", error)
    }
  }

  const update_post = async (id) => {
    const update_data = {
      title: title,
      description: description
    }
    try {
      const response = await axios.put(`${process.env.NEXT_PUBLIC_URL}/api/posts/${id}`,
        data = update_data

      );
      console.log("response", response)
    } catch (error) {
      console.log("error", error)
    }
  }

  const create_post = async (id) => {
    const data = {
      title: title,
      description: description
    }
    try {
      const response = await axios.delete(`${process.env.NEXT_PUBLIC_URL}/api/posts/`, data);
      console.log("response", response)
    } catch (error) {
      console.log("error", error)
    }
  }

  const edit_card = (data) => {
    setEditableData(data)
    setEdit(true)
  }

  return (
    <Box m={5}>
      <Card >
        <Typography variant="title" fontWeight="600" fontSize="2rem" >Strapi</Typography>
        {/* <Box> <Button variant="contained" color="info" onClick={create_post}>Add Post</Button></Box> */}
        {data && data.data.map((data, index) => (
          <Card key={index}>

            <Box m={4}>
              <Box display="flex" alignItems="center" justifyContent="space-between">
                <Typography variant="title" fontWeight="500"> {data.attributes.title}</Typography>
                <Box display="flex">
                  <Box mx={1}>
                    <Button variant="outlined" color="success" onClick={() => edit_card(data)}>View</Button>
                  </Box>
                  <Box>
                    <Button variant="outlined" color="error" onClick={() => delete_post(data.id)}>Delete</Button>
                  </Box>
                </Box>
              </Box>
              <Typography variant="body">{data.attributes.content}</Typography>
            </Box>
          </Card>
        ))}
      </Card>

      {edit === true && (
        <CustomizedDialogs data={editableData} edit={edit} setEdit={setEdit} setTitle={setTitle} setDescription={setDescription} update_post={update_post} />
      )}

    </Box>
  );
}

// This function gets called at request time on the server-side
export async function getServerSideProps() {
  try {
    const response = await axios.get(`${process.env.NEXT_PUBLIC_URL}/api/posts`);
    const data = response.data;
    // Pass data to the page via props
    return { props: { data } };
  } catch (error) {
    console.error(error);

    // In case of error, you can return an empty array or some error information
    return { props: { data: [] } };
  }
}
