import React, { useEffect, useState } from "react";
// import {  ref, getMetadata, getStorage } from "firebase/storage";
import {
  getStorage,
  ref,
  listAll,
  getDownloadURL,
  getMetadata,
  deleteObject,
} from "firebase/storage";
import { Table } from "flowbite-react";
import styled from "styled-components";
import DeleteIcon from "@mui/icons-material/Delete";
import RemoveRedEyeIcon from "@mui/icons-material/RemoveRedEye";
import AddIcon from "@mui/icons-material/Add";
import Upload from "./Upload";
import { storage } from "../../firebaseEvents";
import { useAuth } from "../context/ContextProvider";

// import { storage } from '../../firebaseEvents';

const Container = styled.div`
  display: flex;
  justify-content: flex-start;
  align-items: flex-start;
  width: 85%;
  padding: 20px;
  padding-top: 100px;
  margin: 0 auto;
  height: 100vh;
  overflow: auto;
  & div {
    width: 100%;
  }
  & table {
    width: 100%;
  }
`;

export const Dirctores = () => {


  const {users,dispatch} = useAuth();



  function ListData(){
    // Create a reference under which you want to list
    const listRef = ref(storage, "Quezes/");

    // Find all the prefixes and items.
    listAll(listRef)
      .then((res) => {
        res.prefixes.forEach((folderRef) => {
          // All the prefixes under listRef.
          // You may call listAll() recursively on them.
        });
        res.items.forEach((itemRef) => {
          // All the items under listRef.
          getMetadata(ref(storage, itemRef._location.path_)).then(
            (metadata) => {
             if(users.filesData.length <= 0){
                getDownloadURL(ref(storage,itemRef._location.path_)).then((url) =>{
                    dispatch({
                        type:"FILES_DATA_SETER",
                        data:{fileName:metadata.name,fileLocation:metadata.fullPath,filePath:url,lastUpdated:metadata.updated.slice(0,10),size:metadata.size,id:metadata.generation,type:metadata.type}
                    })
                })
            }
            }
          );
        });
      })
      .catch((error) => {
        // Uh-oh, an error occurred!
      });

  }

  useEffect(() => {
    ListData();
  }, []);


  function DeleteFile({target},location){
    // Delete the file
    deleteObject(ref(storage,location)).then(() => {
    }).catch((error) => {
        // Uh-oh, an error occurred!
    });
  }
  
  return (
    <Container>
      <Table striped={true} hoverable={true}>
        <Table.Head>
          <Table.HeadCell></Table.HeadCell>
          <Table.HeadCell>Quiz name</Table.HeadCell>
          <Table.HeadCell>Last Update</Table.HeadCell>
          <Table.HeadCell>Size</Table.HeadCell>
          <Table.HeadCell>From</Table.HeadCell>
          <Table.HeadCell>
            <button className="text-red-500">
              <DeleteIcon />
            </button>
          </Table.HeadCell>
          <Table.HeadCell>
            <div>
              <Upload>
                <AddIcon />
              </Upload>
            </div>
          </Table.HeadCell>
        </Table.Head>
        <Table.Body className="divide-y bg-gray-700">
        {
        !users.filesData.length == 0 ? 
            users.filesData.map((data) => (
                <Table.Row key={data.id} className="bg-white dark:border-gray-700 dark:bg-gray-800">
                    <Table.Cell>
                    <div className="flex items-center mr-4">
                        <input
                        id="purple-checkbox"
                        type="checkbox"
                        value=""
                        className="w-4 h-4 text-purple-600 bg-gray-100 border-gray-300 rounded focus:ring-purple-500 dark:focus:ring-purple-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
                        />
                    </div>
                    </Table.Cell>
                    <Table.Cell className="whitespace-nowrap font-medium text-gray-900 dark:text-white">
                    {data.fileName}
                    </Table.Cell>
                    <Table.Cell>{data.lastUpdated}</Table.Cell>
                    <Table.Cell>{(data.size/1000).toFixed(2)} KB</Table.Cell>
                    <Table.Cell>{data.type}</Table.Cell>
                    <Table.Cell>
                    <button onClick={(e) => DeleteFile(e,data.fileLocation)} className="text-red-500">
                        <DeleteIcon />
                    </button>
                    </Table.Cell>
                    <Table.Cell>
                    <button>
                        <a href={data.filePath} target="_blank" rel="noopener noreferrer"><RemoveRedEyeIcon /></a>
                    </button>
                    </Table.Cell>
                </Table.Row>
            )) : 
                <Table.Row  className="bg-white dark:border-gray-700 dark:bg-gray-800">
                    <Table.Cell className=""></Table.Cell>
                    <Table.Cell className="">No Data Appended yet !</Table.Cell>
                    <Table.Cell className=""></Table.Cell>
                    <Table.Cell className=""></Table.Cell>
                    <Table.Cell className=""></Table.Cell>
                    <Table.Cell className=""></Table.Cell>
                    <Table.Cell className=""></Table.Cell>
                </Table.Row>
        }
        </Table.Body>
      </Table>
    </Container>
  );
};
