import { createSlice } from "@reduxjs/toolkit";
import { UsersData } from "../Data/FakeData";

const UserSlice = createSlice({
    name: "Users",
    initialState: { value: UsersData },
    reducers: {
        addUser: (state, action) => {
            state.value.push(action.payload)
        },
        deleteUser: (state, action) => {
            state.value = state.value.filter((item) => item.id !== action.payload.id)

        },
        editUser: (state, action) => {
            state.value = state.value.map((item) => {
                if (item.id === action.payload.id) {
                    return {
                        ...item,
                        name: action.payload.name,
                        age: action.payload.age,
                        city: action.payload.city,
                        role: action.payload.role.charAt(0).toUpperCase() + action.payload.role.slice(1),
                    };
                }
                return item;
            })
        }
    }
});

export const { addUser, deleteUser, editUser } = UserSlice.actions

export default UserSlice.reducer