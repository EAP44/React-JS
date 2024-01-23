const initialstate = {
    users : [
        {
            id: 1,
            Name: "Ayoub",
            Lname:"Elaouadi",
            Age: "21",
            City: "Temara",
            Adress: "Temara  NR 118",
            email: "ayoubelaouadi@gmail.com",
            password: "12345"
        }
    ]
}
const Reducer = (state=initialstate,action)=>{
    switch(action.type){
        case "SignAction":
            return {...state , users : [...state.users, action.payload]}
        default:
            return state;
    }
}
export default Reducer;