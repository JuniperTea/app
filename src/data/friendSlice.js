import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import {
  commonGetJson,
  commonPostJson,
  commonDeleteJson,
} from "../shared/utils/api-helper";

export const getAllFriends = createAsyncThunk("getAllFriends", async () => {
  return commonGetJson("/friends");
});

export const saveFriend = createAsyncThunk("saveFriend", async data => {
  return commonPostJson("/friends", data);
});
export const deleteFriend = createAsyncThunk("deleteFriend", async data => {
  return commonDeleteJson("/friends/" + data);
});

const friendSlice = createSlice({
  name: "friends",
  initialState: {
    friends: [],
    areFriendsLoading: false,
    isFriendBeingSaved: false,
    friendsBeingDeleted: [],
  },

  //get
  extraReducers: builder => {
    builder.addCase(getAllFriends.pending, (state, action) => {
      state.areFriendsLoading = true;
    });
    builder.addCase(getAllFriends.fulfilled, (state, action) => {
      state.areFriendsLoading = false;
      state.friends = [state.friends, ...action.payload];
    });
    builder.addCase(getAllFriends.rejected, (state, action) => {
      state.areFriendsLoading = false;
    });

    //save
    builder.addCase(saveFriend.pending, (state, action) => {
      state.isFriendBeingSaved = true;
    });
    builder.addCase(saveFriend.fulfilled, (state, action) => {
      state.isFriendBeingSaved = false;
    });
    builder.addCase(saveFriend.rejected, (state, action) => {
      state.isFriendBeingSaved = false;
    });

    //deletes
    builder.addCase(deleteFriend.pending, (state, action) => {
      let id = action.meta.arg;
      state.friendsBeingDeleted = [...state.friendsBeingDeleted, id];
    });
    builder.addCase(deleteFriend.fulfilled, (state, action) => {
      let id = action.meta.arg;
      state.friendsBeingDeleted = state.friendsBeingDeleted.filter(
        x => x !== id
      );
      state.notes = [...action.payload];
    });
    builder.addCase(deleteFriend.rejected, (state, action) => {
      let id = action.meta.arg;
      state.friendsBeingDeleted = state.friendsBeingDeleted.filter(
        x => x !== id
      );
    });
  },
});

export default friendSlice;
