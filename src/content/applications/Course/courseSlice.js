import { createSlice } from '@reduxjs/toolkit';
import { setUserProgress } from '../../../services/progress';

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
    updateProgress: (state, action) => {
      state.progress = action.payload;
      setUserProgress(action.payload);
    }
  },
})

// Action creators are generated for each case reducer function
export const { loadCourse, updateProgress } = courseSlice.actions;

export default courseSlice.reducer;