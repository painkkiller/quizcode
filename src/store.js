import { configureStore } from '@reduxjs/toolkit';

import courseReducer from './content/applications/Course/courseSlice';


export default configureStore({
  reducer: {
    course: courseReducer
  },
});