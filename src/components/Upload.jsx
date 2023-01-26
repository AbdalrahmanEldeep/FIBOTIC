import { useEffect, useRef, useState } from "react";
import {
  getDownloadURL,
  getMetadata,
  ref,
  uploadBytesResumable,
} from "firebase/storage";

import React from "react";
import { storage, writeQuezzesData } from "../../firebaseEvents";
import { useAuth } from "../context/ContextProvider";
import { toast } from "react-toastify";
import styled from "styled-components";

const UploadBox = styled.div`
  position: fixed;
  top: 30px;
  width: 30% !important;
`;

export default function Upload({ children }) {
  // State to store uploaded file
  const [file, setFile] = useState(""); // progress
  const [percent, setPercent] = useState(100); // Handle file upload event and update state
  const INP = useRef();
  const [timerStatus, setTimerStatus] = useState(0);
  const { users, dispatch } = useAuth();
  const TIM = useRef();

  function handleChange({ target }) {
    setFile(target.files[0]);
  }

  const handleUpload = () => {
    if (!file) {
      alert("Please Select Your File First !");
    } else if (timerStatus == 0 || timerStatus == "Timer") {
      alert("Please Select Timer First !");
    } else {
      if (!users.filesData.some((e) => e.fileName == file.name)) {
        const storageRef = ref(storage, `/Quezes/${file.name}`); // progress can be paused and resumed. It also exposes progress updates. // Receives the storage reference and the file to upload.
        const uploadTask = uploadBytesResumable(storageRef, file);

        uploadTask.on(
          "state_changed",
          (snapshot) => {
            const percent = Math.round(
              (snapshot.bytesTransferred / snapshot.totalBytes) * 100
            ); // update progress
            setPercent(percent);
            setFile("");
            setTimerStatus(0);
            TIM.current.value = "Timer";
            INP.current.value = "";
          },
          (err) => console.log(err),
          () => {
            getMetadata(uploadTask.snapshot.ref).then((metadata) => {
              // Metadata now contains the metadata for 'images/forest.jpg'
              //   setFilesData(arr => [...arr,{name:metadata.name}])
              getDownloadURL(uploadTask.snapshot.ref).then((url) => {
                if (
                  !users.filesData.some((e) =>
                    e.fileName.includes(metadata.name)
                  )
                ) {
                  dispatch({
                    type: "FILES_DATA_SETER",
                    data: {
                      fileName: metadata.name,
                      fileLocation: metadata.fullPath,
                      filePath: url,
                      lastUpdated: metadata.updated.slice(0, 10),
                      size: metadata.size,
                      id: metadata.generation,
                      type: metadata.type,
                      timer: timerStatus,
                      status: true,
                    },
                  });

                  writeQuezzesData(
                    metadata.name.replace(/\.[^/.]+$/, ""),
                    false,
                    metadata.generation,
                    url,
                    timerStatus
                  );

                  toast.success("Appended Successfully", {
                    position: "top-right",
                    autoClose: 2000,
                    hideProgressBar: false,
                    closeOnClick: true,
                    pauseOnHover: true,
                    draggable: true,
                    progress: undefined,
                    theme: "succuss",
                    className: "custom-style-toast",
                  });
                }
              });
            });
          }
        );
      } else {
        toast.warn("This is file Exist !", {
          position: "top-right",
          autoClose: 2000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: "dark",
          className: "custom-style-toast custom-style-toast-warn",
        });
        setFile("");
        setTimerStatus(0);
        TIM.current.value = "";
        INP.current.value = "";
      }
    }
  };
  return (
    <>
      <UploadBox className="flex justify-evenly items-center bg-gray-800 p-1 w-auto rounded gap-2">
        <div className="flex justify-evenly items-center">
          <input
            ref={INP}
            type="file"
            onChange={handleChange}
            accept="/image/*"
            className="text-white w-full"
          />
          <button className="text-white" onClick={handleUpload}>
            {children}
          </button>
          <div className="flex justify-center items-center">
            {percent < 100 ? (
              <p style={{ color: "yellow" }}>{percent} %</p>
            ) : null}
          </div>
        </div>
        <select
          ref={TIM}
          onChange={({ target }) => setTimerStatus(target.value)}
          id="small"
          className="block w-28 p-2  text-sm text-gray-900 border border-gray-300 rounded bg-gray-50 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
        >
          <option defaultValue="Timer">Timer</option>
          {[5, 10, 15, 20, 25, 30, 35, 40, 45, 50, 55].map((e) => {
            return (
              <option value={e} key={e}>
                {e}m
              </option>
            );
          })}
        </select>
      </UploadBox>
    </>
  );
}
