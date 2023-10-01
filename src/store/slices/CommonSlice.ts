import type { PayloadAction } from '@reduxjs/toolkit'
import { createSlice } from '@reduxjs/toolkit'
import { type TRootState } from '@/store'
import { getAllUsers, loadUsers } from '@/store/slices/CommonSliceThunks'
import { type IFetchSlotsResponse } from '@/lib/api/users'

interface IInitState {
  searchValue: string
  users: IFetchSlotsResponse[]
  currentScreen: string
  currentPage: number
}

const initialState = {
  searchValue: '',
  users: [] as IFetchSlotsResponse[],
  currentScreen: 'default',
  currentPage: 0
} satisfies IInitState

export const commonSlice = createSlice({
  name: 'commonSlice',
  initialState,
  reducers: {
    setSearchValue (state, action: PayloadAction<string>) {
      state.searchValue = action.payload
    },
    setCurrentPage (state, action: PayloadAction<number>) {
      state.currentPage = action.payload
    }
  },
  extraReducers: (builder) => {
    builder
      .addCase(getAllUsers.fulfilled, (draft, action: PayloadAction<IFetchSlotsResponse[]>) => {
        draft.users = action.payload
        draft.currentScreen = 'users'
      })
      .addCase(loadUsers.fulfilled, (draft, action: PayloadAction<IFetchSlotsResponse[]>) => {
        draft.users = [...draft.users, ...action.payload]
      })
  }
})

export const { setSearchValue, setCurrentPage } = commonSlice.actions

export const selectUsers = (state: TRootState): IFetchSlotsResponse[] => state.commonSlice.users
export const selectSearchValue = (state: TRootState): string => state.commonSlice.searchValue
export const selectCurrentScreen = (state: TRootState): string => state.commonSlice.currentScreen
