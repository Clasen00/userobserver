import { type FC } from 'react'
import { useAppSelector } from '@/lib/hooks/useAppSelector'
import { selectUsers } from '@/store/slices'

import profileCircle from 'public/profilecircle.svg'

export const UsersScreen: FC = () => {
  const users = useAppSelector(selectUsers)

  return (
    <div className="flex flex-col justify-between items-center max-w-md p-10 col-[6_/_16]">
      <h2 className="mb-16 text-3xl">Список пользователей</h2>
      <ul>
        {users.map((user) => (
          <li key={user.id} className="relative group border border-[#DEDEDE] rounded-2xl mb-3">
            <div className="relative px-7 py-2 leading-none flex items-top justify-start">
              <div className="w-28 h-28">
                <img className="rounded-2xl" src={user.avatar_url} alt="User avatar image"/>
              </div>
              <div className="ml-6">
                <div className="flex mb-8">
                  <img src={profileCircle.src} alt="" className="mr-2"/>
                  <div>{user.login}</div>
                </div>
                <div className="flex">
                  <div className="flex flex-col mr-8">
                    <span className="mb-2 text-[#787878]">ID</span>
                    <span className="text-xl">{user.id}</span>
                  </div>
                  <div className="flex flex-col">
                    <span className="mb-2 text-[#787878]">
                      NodeID
                    </span>
                    <span className="text-xl">
                      {user.node_id}
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </li>
        ))}
      </ul>
    </div>
  )
}
