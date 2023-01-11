import { useEffect, useRef, useState } from "react";
import { ref, uploadBytesResumable, getDownloadURL } from "firebase/storage";

import React from "react";
import { storage } from "../../firebaseEvents";

export default function Upload({children}) {
  // State to store uploaded file
  const [file, setFile] = useState(""); // progress
  const [percent, setPercent] = useState(0); // Handle file upload event and update state
  const INP = useRef();


  useEffect(() => {
    if(percent > 99){
      INP.current.value = ''
      setFile("")
    }
  },[percent])

  function handleChange({target}) {
    setFile(target.files[0]);
  }
  const handleUpload = () => {
    if (!file) {
      alert("Please upload an image first!");
    }
    const storageRef = ref(storage, `/Quezes/${file.name}`); // progress can be paused and resumed. It also exposes progress updates. // Receives the storage reference and the file to upload.
    const uploadTask = uploadBytesResumable(storageRef, file);
    uploadTask.on(
      "state_changed",
      (snapshot) => {
        const percent = Math.round(
          (snapshot.bytesTransferred / snapshot.totalBytes) * 100
        ); // update progress
        setPercent(percent);
      },
      (err) => console.log(err),
      () => {
        // download url
        getDownloadURL(uploadTask.snapshot.ref).then((url) => {
          console.log(url);
        });
      }
    );
  };
  return (
    <div className="flex items-center gap-2">
      <input ref={INP} type="file" onChange={handleChange} accept="/image/*" className="text-white"/>
      <button className="text-white" onClick={handleUpload}>{children}</button>
      {percent && percent != 100 ? <p className="text-green-500">{percent} % done</p> : ""}
    </div>
  );
}
