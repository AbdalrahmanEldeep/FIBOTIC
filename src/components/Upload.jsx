import { useEffect, useRef, useState } from "react";
import { getDownloadURL, getMetadata, ref, uploadBytesResumable} from "firebase/storage";

import React from "react";
import { storage } from "../../firebaseEvents";
import { useAuth } from "../context/ContextProvider";
import { toast } from "react-toastify";



export default function Upload({children}) {
  // State to store uploaded file
  const [file, setFile] = useState(""); // progress
  const [percent, setPercent] = useState(100); // Handle file upload event and update state
  const INP = useRef();
  const [status,setStatus] = useState("");
  const {users,dispatch} = useAuth();



  function handleChange({target}) {
    setFile(target.files[0]);
  }


  const handleUpload = () => {
    if (!file) {
      alert("Please Select Your File First !");
    }else{

      const storageRef = ref(storage, `/Quezes/${file.name}`); // progress can be paused and resumed. It also exposes progress updates. // Receives the storage reference and the file to upload.
      const uploadTask = uploadBytesResumable(storageRef, file);
      uploadTask.on(
        "state_changed",
        (snapshot) => {
          const percent = Math.round((snapshot.bytesTransferred / snapshot.totalBytes) * 100); // update progress
          setPercent(percent);
          setFile("");
          INP.current.value="";
        },
        (err) => console.log(err),
        () => {
          getMetadata(uploadTask.snapshot.ref).then(
            (metadata) => {
              // Metadata now contains the metadata for 'images/forest.jpg'
            //   setFilesData(arr => [...arr,{name:metadata.name}])
            getDownloadURL(uploadTask.snapshot.ref).then((url) =>{
              if(!users.filesData.some((e) => e.fileName.includes(metadata.name))){
                  dispatch({
                    type:"FILES_DATA_SETER",
                    data:{fileName:metadata.name,fileLocation:metadata.fullPath,filePath:url,lastUpdated:metadata.updated.slice(0,10),size:metadata.size,id:metadata.generation,type:metadata.type}
                })
                toast.success('Appended Successfully', {
                  position: "top-right",
                  autoClose: 2000,
                  hideProgressBar: false,
                  closeOnClick: true,
                  pauseOnHover: true,
                  draggable: true,
                  progress: undefined,
                  theme: "succuss",
                  className:"custom-style-toast",
                });
              }else{
                toast.warn('This is file Exist !', {
                  position: "top-right",
                  autoClose: 2000,
                  hideProgressBar: false,
                  closeOnClick: true,
                  pauseOnHover: true,
                  draggable: true,
                  progress: undefined,
                  theme: "dark",
                  className:"custom-style-toast custom-style-toast-warn",
                });
              }
            })
            }
          );
        }
      );
    }
    
  };
  return (
    <>
      <div className="flex items-center bg-green-500 pr-4 w-auto rounded gap-2">
        <input ref={INP} type="file" onChange={handleChange} accept="/image/*" className="text-white"/>
        <button className="text-white" onClick={handleUpload}>{children}</button>
        <button onClick={() => writeUserData("asd","ASdsad",false,"ASdasd")}>test</button>
        {percent < 100 ?  <p style={{color:"yellow"}}>{percent} % pross</p> : null}
      </div>
    </>

  );
}

