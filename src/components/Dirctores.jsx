import React, { useEffect, useState } from "react";
import {
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
import { removeQuezze, storage, writeQuezzesData } from "../../firebaseEvents";
import { useAuth } from "../context/ContextProvider";
import { toast } from "react-toastify";
import {
  getDatabase,
  child,
  get,
  ref as dbRef,
  onValue,
} from "firebase/database";
import { useRef } from "react";

// import { storage } from '../../firebaseEvents';

const Container = styled.div`
  display: flex;
  justify-content: flex-start;
  align-items: flex-start;
  flex-direction: column;
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
  const listRef = ref(storage, "Quezes/");
  const { users, dispatch } = useAuth();
  const [status, setStatus] = useState([]);
  const TIM = useRef();
  const [timer,setTimer] = useState([]);


  const QActivity = ({ fileName, id, filePath}, i,selcetTimer,checked = false) => {
    let currentTimer = selcetTimer ? selcetTimer : timer[i];
    
    writeQuezzesData(
      fileName.replace(/\.[^/.]+$/, ""),
      checked,
      id,
      filePath,
      currentTimer
    );
    QUpdataStatus(id, i);
  };

  const QUpdataStatus = (id, i) => {
    const db = getDatabase();
    const starCountRef = dbRef(db, `users/CSITS1/Quezzes/${id}`);
    onValue(starCountRef, (snapshot) => {
      try {
        let data = snapshot.val().activity;
        if (status.length == 0) {
          setStatus((arr) => Array.from(new Set([...arr, { [id]: data }])));
        } else {
          let newArray = [...status];
          newArray[i] = { [id]: data };
          setStatus(newArray);
        }
      } catch (e) {
        console.log(e);
      }
    });
  };

  const TimerUpdater = (id) =>{
    const Ref = dbRef(getDatabase());
    get(child(Ref, `users/CSITS1/Quezzes/${id}`)).then((snapshot) => {
      if (snapshot.exists()) {
        setTimer((arr) => [...arr,snapshot.val().timer])
      } else {setTimer([])}
    }).catch((error) => {
      console.error(error);
    });
  }

  function ListData() {
    // Create a reference under which you want to list
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
              const Ref = dbRef(getDatabase());
                get(child(Ref, `users/CSITS1/Quezzes/${metadata.generation}`)).then((snapshot) => {
                  if (snapshot.exists()) {
                    if (users.filesData.length == 0) {
                      getDownloadURL(ref(storage, itemRef._location.path_)).then(
                        (url) => {
                          dispatch({
                            type: "FILES_DATA_SETER",
                            data: {
                              fileName: metadata.name,
                              fileLocation: metadata.fullPath,
                              filePath: url,
                              lastUpdated: metadata.updated.slice(0, 10),
                              size: metadata.size,
                              id: metadata.generation,
                              timer:snapshot.val().timer,
                              type: metadata.type,
                            },
                          });
                          QUpdataStatus(metadata.generation);
                          TimerUpdater(metadata.generation);
                        }
                      );
                    }
                  } else {
                    getDownloadURL(ref(storage, itemRef._location.path_)).then(
                      (url) => {
                        dispatch({
                          type: "FILES_DATA_SETER",
                          data: {
                            fileName: metadata.name,
                            fileLocation: metadata.fullPath,
                            filePath: url,
                            lastUpdated: metadata.updated.slice(0, 10),
                            size: metadata.size,
                            id: metadata.generation,
                            timer:'Timer',
                            type: metadata.type,
                          },
                        });
                        QUpdataStatus(metadata.generation);
                      }
                    );                  }
                }).catch((error) => {
                  console.error(error);
                });
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
    if (status.length < users.filesData.length) {
      users.filesData.forEach((e, i) => {
        QUpdataStatus(e.id, i);
        TimerUpdater(e.id);
      });
    }
  }, []);

  function DeleteFile({ target }, { fileLocation, fileName, id }) {
    let conf = confirm(`You Will Delete ${fileName}`);
    if (conf) {
      deleteObject(ref(storage, fileLocation))
        .then(() => {
          dispatch({
            type: "FILES_DATA_DELETER",
            data: users.filesData.filter((e) => e.fileLocation != fileLocation),
          });
          setStatus(status.filter((e) => !Object.hasOwn(e, id)));
          toast("Deleted Successfully", {
            position: "top-right",
            autoClose: 2000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            theme: "dark",
            className: "custom-style-toast custom-style-toast-success",
          });
        })
        .catch((error) => {
          // Uh-oh, an error occurred!
        });
      removeQuezze(id);
    }
  }

  function formatter(e) {
    let conf = confirm("You Will Delete All Quizzes");
    listAll(listRef)
      .then((res) => {
        res.prefixes.forEach((folderRef) => {
          // All the prefixes under listRef.
          // You may call listAll() recursively on them.
        });
        res.items.forEach((itemRef) => {
          // All the items under listRef.
          if (conf) {
            getMetadata(ref(storage, itemRef._location.path_)).then(
              (metadata) => {
                deleteObject(ref(storage, itemRef._location.path_))
                  .then(() => {
                    dispatch({
                      type: "FILES_DATA_DELETER",
                      data: [],
                    });
                    removeQuezze();
                    setStatus([]);
                    toast.success(" All Items Deleted Successfully", {
                      position: "top-right",
                      autoClose: 2000,
                      hideProgressBar: false,
                      closeOnClick: true,
                      pauseOnHover: true,
                      draggable: true,
                      progress: undefined,
                      theme: "dark",
                      className:
                        "custom-style-toast custom-style-toast-success",
                    });
                  })
                  .catch((error) => {
                    // Uh-oh, an error occurred!
                  });
              }
            );
          }
        });
      })
      .catch((error) => {
        // Uh-oh, an error occurred!
      });
  }

  function checkState(i, data) {
    if (status[i]) {
      return status[i][data.id];
    } else {
      return false;
    }
  }

  return (
    <Container>
      <Upload>
        <AddIcon />
      </Upload>
      <Table striped={true} hoverable={true}>
        <Table.Head>
          <Table.HeadCell></Table.HeadCell>
          <Table.HeadCell>Quiz name</Table.HeadCell>
          <Table.HeadCell>Last Update</Table.HeadCell>
          <Table.HeadCell>Size</Table.HeadCell>
          <Table.HeadCell>From</Table.HeadCell>

          <Table.HeadCell>
            <button className="text-red-500" onClick={(e) => formatter(e)}>
              <DeleteIcon />
            </button>
          </Table.HeadCell>
          <Table.HeadCell>
            <div></div>
          </Table.HeadCell>
        </Table.Head>
        <Table.Body className="divide-y bg-gray-700">
          {!users.filesData.length == 0 ? (
            users.filesData.map((data, i) => (
              <Table.Row
                key={data.id}
                className="bg-white dark:border-gray-700 dark:bg-gray-800"
              >
                <Table.Cell>
                  <div className="flex items-center mr-4">
                    <input
                      id="purple-checkbox"
                      type="checkbox"
                      value=""
                      checked={checkState(i, data)}
                      onChange={(e) => {
                        QActivity(data, i,undefined,e.target.checked)
                      }}
                      className="w-4 h-4 text-purple-600 bg-gray-100 border-gray-300 rounded focus:ring-purple-500 dark:focus:ring-purple-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
                    />
                  </div>
                </Table.Cell>
                <Table.Cell className="whitespace-nowrap font-medium text-gray-900 dark:text-white">
                  {data.fileName}
                </Table.Cell>
                <Table.Cell>{data.lastUpdated}</Table.Cell>
                <Table.Cell>{(data.size / 1000).toFixed(2)} KB</Table.Cell>
                <Table.Cell>{data.type}</Table.Cell>
                <Table.Cell>
                  <button
                    onClick={(e) => DeleteFile(e, data)}
                    className="text-red-500"
                  >
                    <DeleteIcon />
                  </button>
                </Table.Cell>
                <Table.Cell className="flex justify-between">
                  <button>
                    <a
                      href={data.filePath}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <RemoveRedEyeIcon />
                    </a>
                  </button>
                  <select
                    id="small"
                    ref={TIM}
                    onChange={({target}) => QActivity(data, i,target.value)}
                    className="block w-28 p-2  text-sm text-gray-900 border border-gray-300 rounded bg-gray-50 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                  >
                    <option defaultValue={ timer.length != 0 ? timer[i] : data.timer}>{ timer.length != 0 ? timer[i] : data.timer}m</option>
                    {[5, 10, 15, 20, 25, 30, 35, 40, 45, 50, 55].filter((e) => e != data.timer).map((e) => {
                      return (
                        <option value={e} key={e}>
                          {e}m
                        </option>
                      );
                    })}
                  </select>
                </Table.Cell>
              </Table.Row>
            ))
          ) : (
            <Table.Row className="bg-white dark:border-gray-700 dark:bg-gray-800">
              <Table.Cell className=""></Table.Cell>
              <Table.Cell className="">No Data Appended yet !</Table.Cell>
              <Table.Cell className=""></Table.Cell>
              <Table.Cell className=""></Table.Cell>
              <Table.Cell className=""></Table.Cell>
              <Table.Cell className=""></Table.Cell>
              <Table.Cell className=""></Table.Cell>
            </Table.Row>
          )}
        </Table.Body>
      </Table>
    </Container>
  );
};
