import { createSlice } from '@reduxjs/toolkit';
import { setUserProgress, getUserProgress } from '../../../services/progress';

export const courseSlice = createSlice({
  name: 'course',
  initialState: {
    course: {},
    progress: {}
  },
  reducers: {
    loadCourse: (state, action) => {
      state.course = action.payload;
      state.progress = getUserProgress('userId', state.course.id);
    },
    updateProgress: (state, action) => {
      const { progress, userId, courseId } = action.payload;
      state.progress = progress;
      console.log('updateProgress', progress);
      setUserProgress(userId, courseId, progress);
    }
  },
})

// Action creators are generated for each case reducer function
export const { loadCourse, updateProgress } = courseSlice.actions;

export default courseSlice.reducer;