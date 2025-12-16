import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

export const getBlogs = createAsyncThunk('blog/getBlogs', async(_, thunkAPI) => {
    const {rejectWithValue} = thunkAPI
    try{
        const res = await fetch ("https://movieapp-api-07gn.onrender.com/blog")
        const data = await res.json()
        return data;

    }catch(error) {
        return rejectWithValue(error.message)
    }

})
export const insertBlog = createAsyncThunk("blog/insertBlog" , async (blogData , thunkAPI) => {
    const {rejectWithValue, getState} = thunkAPI
    try{
      console.log(blogData)
        const res = await fetch("https://movieapp-api-07gn.onrender.com/blog", {
            method:'POST',
            body : JSON.stringify(blogData),
            headers: {
                'Content-type': 'application/json; charset=UTF-8'
            },
        })
        const data = await res.json()
        return data;

    }catch(error){
        return rejectWithValue(error.message)

    }
})
export const updateBlog = createAsyncThunk(
  "blog/updateBlog",
  async (blogData, thunkAPI) => {
    const { rejectWithValue } = thunkAPI;
    try {
      const res = await fetch(`https://movieapp-api-07gn.onrender.com/blog/${blogData.id}`, {
        method: "PUT",
        body: JSON.stringify(blogData),
        headers: {
          "Content-Type": "application/json; charset=UTF-8",
        },
      });
      const data = await res.json();
      console.log(data)
      return data;
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);
export const deleteBlog = createAsyncThunk(
  "blog/deleteBlog",
  async (id, thunkAPI) => {
    const { rejectWithValue } = thunkAPI;
    console.log(typeof(id))
    try {
      await fetch(`https://movieapp-api-07gn.onrender.com/blog/${id}`, { method: "DELETE" });
      return id;
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);





const BlogSlice = createSlice({
  name: "blog",
  initialState: {
    blogs: [],
  },
  reducers: {
   
  },
  extraReducers: (builder) => {
    builder
      .addCase(getBlogs.pending, (state) => {
        console.log("getBlogs pending")
      })
      .addCase(getBlogs.fulfilled, (state, action) => {
        state.blogs = action.payload;
        console.log("getBlogs fullfiled")
      })
      .addCase(getBlogs.rejected, (state, action) => {
        console.log("getBlogs rejected")
      })
      .addCase(updateBlog.pending, (state) => {
  state.loading = true;
})
.addCase(updateBlog.fulfilled, (state, action) => {
  state.loading = false;
  state.blogs = state.blogs.map((b) =>
    b.id === action.payload.id ? action.payload : b
  );
})
.addCase(updateBlog.rejected, (state, action) => {
  state.loading = false;
  state.error = action.payload;
});


  }
});

export const {filterData} = BlogSlice.actions;
export default BlogSlice.reducer;
