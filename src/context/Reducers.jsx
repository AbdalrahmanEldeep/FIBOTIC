export const customState = {    
    sections:null,
    IDS:null,
    std_status:false,
    adm_status:false,
}

export const dbController = (state=customState,action) => {
    switch(action.type){
        case "ADD_SEC":
            return {...state,sections:action.sec};
        case "ADD_IDS":
            return {...state,IDS:action.ids};
        case "STD_STATUS":
            return {...state,std_status:action.act}
        case "ADM_STATUS":
            return {...state,adm_status:action.act}
        default :
            return state;            
    }
}