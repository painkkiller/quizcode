import { createSlice } from '@reduxjs/toolkit';


export const courseSlice = createSlice({
  name: 'course',
  initialState: {
    course: {},
    progress: {}
  },
  reducers: {
    loadCourse: (state, action) => {
      state.course = action.payload;
    },
  },
})

// Action creators are generated for each case reducer function
export const { loadCourse } = courseSlice.actions;

export default courseSlice.reducer;