import axios from "axios"

export const api =  axios.create({
    baseURL: "http://localhost:8080",
    
})
// this function register new users with
export async function registrationUser(register){
    try {
        const response = await api.post("/auth/register-user", register)
        return response.data
    } catch (error) {
        if(error.response && error.response.data){
            throw new Error(error.response.data)
        }
        else {
            throw new Error(`User registration error :${error.message}`)
        }
    }
}

// this function login a register user
export async function loginUser(login){
    try {
        const response = await api.post("/auth/login", login)
        if(response.status >= 200 && response.status < 300) {
        return response.data
        }
    } catch (error) {
        return null 
    }
}
// add doctor from admin panel and show in user profile
export async function addDoctor(doctor){
    try {
        const response = await api.post("/admin/add-doctor", doctor)
        if(response.status >= 200 && response.status < 300) {
        return response.data
        }
    } catch (error) {
        return null 
    }
}
// getDoctor from admin panel and show in user profile
export async function getAllDoctor(){
    try {
        const response = await api.get("/admin/get-all-doctor")
        return response.data
        
    } catch (error) {
        throw new Error("Fetcing Data from server Error")
    }
}
// add Session from admin to user
export async function addSesssion(seesion){
    try {
        const response = await api.post("/admin/addSesssion", addSesssion)
        if(response.status >= 200 && response.status < 300) {
        return response.data
        }
    } catch (error) {
        return null 
    }
}

// get session from user
export async function getSesssion(){
    try {
        const response = await api.get("/admin/get-all-seesion")
        return response.data
        
    } catch (error) {
        throw new Error("Fetcing Data from server Error")
    }
}

// remove session by id 
export async function deleteSession(sessionId){
    try {
        const response = api.delete(`/admin/delete${sessionId}`)
        return response.data
        
    }
     catch (error) {
        throw new Error(`Remove Session : ${error.message}`)
    }
}
export async function viewSeesion(sessionId){
    try {
        const response = await api.get(`/admin/view-session/${sessionId}`)
        return response.data
        
    } catch (error) {
        return null
    }
}
// view one patients appointmnet
export async function viewPatient(patientId){
    try {
        const response = await api.get(`/patients/view-patients ${patientId}`)
        return response.data
    } catch (error) {
        return null
    }
}
// view all patients appointment 
export async function getAppointment(){
    try {
        const response = await api.get("/patients/all-view-appointment")
        return response.data
    } catch (error) {
        throw new Error(`Fetching the data for patient ${error.message}`)
    }
}


// delete patient appointmnet 
export async function deletePatient(patientId){
    try {
        const response = await api.delete(`/patients/remove-id/${patientId}`)
        return response.data
    } catch (error) {
        throw new Error(`${error.message}`)
    }
}