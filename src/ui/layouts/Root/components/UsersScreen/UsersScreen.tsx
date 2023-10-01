import { type FC, useEffect, useRef } from 'react'
import { useAppSelector } from '@/lib/hooks/useAppSelector'
import { selectUsers, setCurrentPage } from '@/store/slices'

import { UserCard } from './components/UserCard'
import useIsOnScreen from '@/lib/hooks/useIsOnScreen'
import { useAppDispatch } from '@/lib/hooks/useAppDispatcher'
import { loadUsers } from '@/store/slices/CommonSliceThunks'

export const UsersScreen: FC = () => {
  const dispatch = useAppDispatch()
  const users = useAppSelector(selectUsers)
  const paginationAnchor = useRef<HTMLDivElement>(null)
  const isNeedNewPage = useIsOnScreen(paginationAnchor)

  useEffect(() => {
    if (isNeedNewPage) {
      dispatch(setCurrentPage(users[users.length - 1].id))
      dispatch(loadUsers())
    }
  }, [isNeedNewPage])

  return (
    <div className="flex flex-col justify-between items-center max-w-md p-10 col-[6_/_16]">
      <h2 className="mb-16 text-3xl">Список пользователей</h2>
      <ul>
        {users.map((user) => (
          <UserCard user={user} />
        ))}
        <div ref={paginationAnchor}></div>
      </ul>
    </div>
  )
}
