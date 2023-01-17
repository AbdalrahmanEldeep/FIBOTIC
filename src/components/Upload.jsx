import { useEffect, useRef, useState } from "react";
import { getDownloadURL, getMetadata, ref, uploadBytesResumable} from "firebase/storage";

import React from "react";
import { storage } from "../../firebaseEvents";
import { useAuth } from "../context/ContextProvider";

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
          setStatus("Done");
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
              }else{
                alert("This is file Exist !");
              }
            })
            }
          );
        }
      );
    }
    
  };
  return (
    <div className="flex items-center bg-green-500 pr-4 w-auto rounded gap-2">
      <input ref={INP} type="file" onChange={handleChange} accept="/image/*" className="text-white"/>
      <button className="text-white" onClick={handleUpload}>{children}</button>
      {percent < 100 ?  <p style={{color:"yellow"}}>{percent} % pross</p> : <p className="text-gray-900">{status}</p>}
    </div>
  );
}
