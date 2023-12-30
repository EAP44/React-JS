const initialstate = {
    users : [
        {id:1,name:"ayoub",email:"ayoubelaouadi@gmail.com"},
        {id:2,name:"hiba",email:"hibaaben@gmail.com"}
    ]
}
const Reducer = (state=initialstate , action) => {
    switch (action.type) {
        case "Add":
            return {...state, users : [...state.users , action.payload]}
        case "Update":
            const user = state.users.find((user)=>user.id===parseInt(action.payload.id))
            if(user){
                user.name = action.payload.name
                user.email = action.payload.email
            }
            return state;
        case "Delete":
            return {...state, users : [...state.users.filter((user)=>user.id!==parseInt(action.payload))]}
        default:
            return state;
            
    }
}
export default Reducer;