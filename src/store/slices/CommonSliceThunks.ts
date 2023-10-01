import { type TThunkConfig } from '@/store'
import { createAsyncThunk } from '@reduxjs/toolkit'
import { getUsers } from '@/lib/api/users'

export const getAllUsers = createAsyncThunk<
Awaited<ReturnType<typeof getUsers>>,
void,
TThunkConfig
>('commonSlice/getUsers', async (_) => {
  return await getUsers()
})
