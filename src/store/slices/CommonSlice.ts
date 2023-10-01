import { createSlice } from '@reduxjs/toolkit'
import type { PayloadAction } from '@reduxjs/toolkit'
import { type TRootState } from '@/store'
import { getAllUsers } from '@/store/slices/CommonSliceThunks'
import { type IFetchSlotsResponse } from '@/lib/api/users'

interface IInitState {
  searchValue: string
  users: IFetchSlotsResponse[]
  currentScreen: string
}

const initialState = {
  searchValue: '',
  users: [] as IFetchSlotsResponse[],
  currentScreen: 'default'
} satisfies IInitState

export const commonSlice = createSlice({
  name: 'commonSlice',
  initialState,
  reducers: {
    setSearchValue (state, action: PayloadAction<string>) {
      state.searchValue = action.payload
    }
  },
  extraReducers: (builder) => {
    builder
      .addCase(getAllUsers.fulfilled, (draft, action: PayloadAction<IFetchSlotsResponse[]>) => {
        draft.users = action.payload
        draft.currentScreen = 'users'
      })
  }
})

export const { setSearchValue } = commonSlice.actions

export const selectUsers = (state: TRootState): IFetchSlotsResponse[] => state.commonSlice.users
export const selectSearchValue = (state: TRootState): string => state.commonSlice.searchValue
export const selectCurrentScreen = (state: TRootState): string => state.commonSlice.currentScreen
