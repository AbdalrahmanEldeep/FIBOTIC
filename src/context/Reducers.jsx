export const customState = {    
    sections:null,
    IDS:null,
    QZS:[],
    std_status:false,
    adm_status:false,
    filesData:[],
    studentData:{}
}




export const dbController = (state=customState,action) => {
    switch(action.type){
        case "ADD_SEC":
            return {...state,sections:action.sec};
        case "ADD_IDS":
            return {...state,IDS:action.ids};
        case "ADD_QZS":
            return {...state,QZS:action.qzs};
        case "STD_STATUS":
            return {...state,std_status:action.act}
        case "ADM_STATUS":
            return {...state,adm_status:action.act}
        case "FILES_DATA_SETER":
            return {...state,filesData:[...state.filesData,action.data]}
        case "FILES_DATA_DELETER":
            return {...state,filesData:action.data}
        case "SET_STD_DATA":
            return {...state,studentData:action.data}
        default :
            return state;            
    }
}