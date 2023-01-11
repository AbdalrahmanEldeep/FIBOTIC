import React, { useEffect } from 'react'
// import {  ref, getMetadata, getStorage } from "firebase/storage";
import { getStorage, ref, listAll } from "firebase/storage";
import { Table } from 'flowbite-react';
import styled from 'styled-components';
import DeleteIcon from '@mui/icons-material/Delete';
import RemoveRedEyeIcon from '@mui/icons-material/RemoveRedEye';
import AddIcon from '@mui/icons-material/Add';
import Upload from './Upload';

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
    & div{
        width: 100%;
    }
    & table{
        width: 100%;
    }
`

export const Dirctores = () => {

 useEffect(() => {
 
    // Create a reference to the file whose metadata we want to retrieve
    const storage = getStorage();
    // const htmlForestRef = ref(storage, 'Quezes/Grid-code-System-ex-1.PNG');


    // // Get metadata properties
    // getMetadata(htmlForestRef)
    // .then((metadata) => {
    //     // Metadata now contains the metadata htmlFor 'images/htmlForest.jpg'
    //     console.log(metadata.type);
    // })
    // .catch((error) => {
    //     // Uh-oh, an error occurred!
    // });

    

// Create a reference under which you want to list
const listRef = ref(storage, 'Quezes/');

// Find all the prefixes and items.
listAll(listRef)
  .then((res) => {
    res.prefixes.htmlForEach((folderRef) => {
      // All the prefixes under listRef.
      // You may call listAll() recursively on them.
      console.log(folderRef);
    });
    res.items.htmlForEach((itemRef) => {
      // All the items under listRef.
      console.log(itemRef);
    });
  }).catch((error) => {
    // Uh-oh, an error occurred!
  });
 })
  return (
    <Container>
      <Table  striped={true} hoverable={true}>
        <Table.Head>
            <Table.HeadCell>
            <div class="flex items-center mr-4">
                <input  id="purple-checkbox" type="checkbox" value="" class="w-4 h-4 text-purple-600 bg-gray-100 border-gray-300 rounded focus:ring-purple-500 dark:focus:ring-purple-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"/>
            </div>
            </Table.HeadCell>
            <Table.HeadCell>
              Quiz name
            </Table.HeadCell>
            <Table.HeadCell>
              Date
            </Table.HeadCell>
            <Table.HeadCell>
              Size
            </Table.HeadCell>
            <Table.HeadCell>
              From
            </Table.HeadCell>
            <Table.HeadCell>
                <button className='text-red-500'><DeleteIcon/></button>
            </Table.HeadCell>
            <Table.HeadCell>
             <button><Upload><AddIcon/></Upload></button>
            </Table.HeadCell>
        </Table.Head>
        <Table.Body  className="divide-y bg-gray-700">
            <Table.Row  className="bg-white dark:border-gray-700 dark:bg-gray-800">
            <Table.Cell>
                <div class="flex items-center mr-4">
                    <input  id="purple-checkbox" type="checkbox" value="" class="w-4 h-4 text-purple-600 bg-gray-100 border-gray-300 rounded focus:ring-purple-500 dark:focus:ring-purple-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"/>
                </div>
            </Table.Cell>
            <Table.Cell className="whitespace-nowrap font-medium text-gray-900 dark:text-white">
                Apple MacBook Pro 17"
            </Table.Cell>
            <Table.Cell>
                Sliver
            </Table.Cell>
            <Table.Cell>
                Laptop
            </Table.Cell>
            <Table.Cell>
                $2999
            </Table.Cell>
            <Table.Cell>
                <button className='text-red-500'><DeleteIcon/></button>
            </Table.Cell>
            <Table.Cell>
                <button><RemoveRedEyeIcon/></button>
            </Table.Cell>
            </Table.Row>
            <Table.Row  className="bg-white dark:border-gray-700 dark:bg-gray-800">
            <Table.Cell>
                <div class="flex items-center mr-4">
                    <input  id="purple-checkbox" type="checkbox" value="" class="w-4 h-4 text-purple-600 bg-gray-100 border-gray-300 rounded focus:ring-purple-500 dark:focus:ring-purple-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"/>
                </div>
            </Table.Cell>
            <Table.Cell className="whitespace-nowrap font-medium text-gray-900 dark:text-white">
                Apple MacBook Pro 17"
            </Table.Cell>
            <Table.Cell>
                Sliver
            </Table.Cell>
            <Table.Cell>
                Laptop
            </Table.Cell>
            <Table.Cell>
                $2999
            </Table.Cell>
            <Table.Cell>
                <button className='text-red-500'><DeleteIcon/></button>
            </Table.Cell>
            <Table.Cell>
                <button><RemoveRedEyeIcon/></button>
            </Table.Cell>
            </Table.Row>
            <Table.Row  className="bg-white dark:border-gray-700 dark:bg-gray-800">
            <Table.Cell>
                <div class="flex items-center mr-4">
                    <input  id="purple-checkbox" type="checkbox" value="" class="w-4 h-4 text-purple-600 bg-gray-100 border-gray-300 rounded focus:ring-purple-500 dark:focus:ring-purple-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"/>
                </div>
            </Table.Cell>
            <Table.Cell className="whitespace-nowrap font-medium text-gray-900 dark:text-white">
                Apple MacBook Pro 17"
            </Table.Cell>
            <Table.Cell>
                Sliver
            </Table.Cell>
            <Table.Cell>
                Laptop
            </Table.Cell>
            <Table.Cell>
                $2999
            </Table.Cell>
            <Table.Cell>
                <button className='text-red-500'><DeleteIcon/></button>
            </Table.Cell>
            <Table.Cell>
                <button><RemoveRedEyeIcon/></button>
            </Table.Cell>
            </Table.Row>
            <Table.Row  className="bg-white dark:border-gray-700 dark:bg-gray-800">
            <Table.Cell>
                <div class="flex items-center mr-4">
                    <input  id="purple-checkbox" type="checkbox" value="" class="w-4 h-4 text-purple-600 bg-gray-100 border-gray-300 rounded focus:ring-purple-500 dark:focus:ring-purple-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"/>
                </div>
            </Table.Cell>
            <Table.Cell className="whitespace-nowrap font-medium text-gray-900 dark:text-white">
                Apple MacBook Pro 17"
            </Table.Cell>
            <Table.Cell>
                Sliver
            </Table.Cell>
            <Table.Cell>
                Laptop
            </Table.Cell>
            <Table.Cell>
                $2999
            </Table.Cell>
            <Table.Cell>
                <button className='text-red-500'><DeleteIcon/></button>
            </Table.Cell>
            <Table.Cell>
                <button><RemoveRedEyeIcon/></button>
            </Table.Cell>
            </Table.Row>
            <Table.Row  className="bg-white dark:border-gray-700 dark:bg-gray-800">
            <Table.Cell>
                <div class="flex items-center mr-4">
                    <input  id="purple-checkbox" type="checkbox" value="" class="w-4 h-4 text-purple-600 bg-gray-100 border-gray-300 rounded focus:ring-purple-500 dark:focus:ring-purple-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"/>
                </div>
            </Table.Cell>
            <Table.Cell className="whitespace-nowrap font-medium text-gray-900 dark:text-white">
                Apple MacBook Pro 17"
            </Table.Cell>
            <Table.Cell>
                Sliver
            </Table.Cell>
            <Table.Cell>
                Laptop
            </Table.Cell>
            <Table.Cell>
                $2999
            </Table.Cell>
            <Table.Cell>
                <button className='text-red-500'><DeleteIcon/></button>
            </Table.Cell>
            <Table.Cell>
                <button><RemoveRedEyeIcon/></button>
            </Table.Cell>
            </Table.Row>
            <Table.Row  className="bg-white dark:border-gray-700 dark:bg-gray-800">
            <Table.Cell>
                <div class="flex items-center mr-4">
                    <input  id="purple-checkbox" type="checkbox" value="" class="w-4 h-4 text-purple-600 bg-gray-100 border-gray-300 rounded focus:ring-purple-500 dark:focus:ring-purple-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"/>
                </div>
            </Table.Cell>
            <Table.Cell className="whitespace-nowrap font-medium text-gray-900 dark:text-white">
                Apple MacBook Pro 17"
            </Table.Cell>
            <Table.Cell>
                Sliver
            </Table.Cell>
            <Table.Cell>
                Laptop
            </Table.Cell>
            <Table.Cell>
                $2999
            </Table.Cell>
            <Table.Cell>
                <button className='text-red-500'><DeleteIcon/></button>
            </Table.Cell>
            <Table.Cell>
                <button><RemoveRedEyeIcon/></button>
            </Table.Cell>
            </Table.Row>
            <Table.Row  className="bg-white dark:border-gray-700 dark:bg-gray-800">
            <Table.Cell>
                <div class="flex items-center mr-4">
                    <input  id="purple-checkbox" type="checkbox" value="" class="w-4 h-4 text-purple-600 bg-gray-100 border-gray-300 rounded focus:ring-purple-500 dark:focus:ring-purple-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"/>
                </div>
            </Table.Cell>
            <Table.Cell className="whitespace-nowrap font-medium text-gray-900 dark:text-white">
                Apple MacBook Pro 17"
            </Table.Cell>
            <Table.Cell>
                Sliver
            </Table.Cell>
            <Table.Cell>
                Laptop
            </Table.Cell>
            <Table.Cell>
                $2999
            </Table.Cell>
            <Table.Cell>
                <button className='text-red-500'><DeleteIcon/></button>
            </Table.Cell>
            <Table.Cell>
                <button><RemoveRedEyeIcon/></button>
            </Table.Cell>
            </Table.Row>
            <Table.Row  className="bg-white dark:border-gray-700 dark:bg-gray-800">
            <Table.Cell>
                <div class="flex items-center mr-4">
                    <input  id="purple-checkbox" type="checkbox" value="" class="w-4 h-4 text-purple-600 bg-gray-100 border-gray-300 rounded focus:ring-purple-500 dark:focus:ring-purple-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"/>
                </div>
            </Table.Cell>
            <Table.Cell className="whitespace-nowrap font-medium text-gray-900 dark:text-white">
                Apple MacBook Pro 17"
            </Table.Cell>
            <Table.Cell>
                Sliver
            </Table.Cell>
            <Table.Cell>
                Laptop
            </Table.Cell>
            <Table.Cell>
                $2999
            </Table.Cell>
            <Table.Cell>
                <button className='text-red-500'><DeleteIcon/></button>
            </Table.Cell>
            <Table.Cell>
                <button><RemoveRedEyeIcon/></button>
            </Table.Cell>
            </Table.Row>
            <Table.Row  className="bg-white dark:border-gray-700 dark:bg-gray-800">
            <Table.Cell>
                <div class="flex items-center mr-4">
                    <input  id="purple-checkbox" type="checkbox" value="" class="w-4 h-4 text-purple-600 bg-gray-100 border-gray-300 rounded focus:ring-purple-500 dark:focus:ring-purple-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"/>
                </div>
            </Table.Cell>
            <Table.Cell className="whitespace-nowrap font-medium text-gray-900 dark:text-white">
                Apple MacBook Pro 17"
            </Table.Cell>
            <Table.Cell>
                Sliver
            </Table.Cell>
            <Table.Cell>
                Laptop
            </Table.Cell>
            <Table.Cell>
                $2999
            </Table.Cell>
            <Table.Cell>
                <button className='text-red-500'><DeleteIcon/></button>
            </Table.Cell>
            <Table.Cell>
                <button><RemoveRedEyeIcon/></button>
            </Table.Cell>
            </Table.Row>
        </Table.Body>
    </Table>
    </Container>

  )
}
