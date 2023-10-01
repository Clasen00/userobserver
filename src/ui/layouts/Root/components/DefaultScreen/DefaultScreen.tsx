import { type FC, type FormEvent, useState } from 'react'
import { useAppSelector } from '@/lib/hooks/useAppSelector'
import { selectSearchValue, setSearchValue } from '@/store/slices'
import { useAppDispatch } from '@/lib/hooks/useAppDispatcher'
import { getAllUsers } from '@/store/slices/CommonSliceThunks'

export const DefaultScreen: FC = () => {
  const dispatch = useAppDispatch()
  const searchValue = useAppSelector(selectSearchValue)
  const codeRegExp = /^(?=.*[A-Z])(?=.*[a-z])(?=.*[0-9])(?=.*!).*$/
  const [isValid, setIsValid] = useState(false)

  const handleCodeChange = (value: string): void => {
    dispatch(setSearchValue(value))
  }

  const validateCode = () => {
    searchValue.match(codeRegExp) !== null ? setIsValid(true) : setIsValid(false)
  }

  const handleSubmit = (event: FormEvent<HTMLFormElement>): void => {
    event.preventDefault()

    dispatch(getAllUsers())
  }

  return (
    <main className="flex h-[410px] border border-[#DEDEDE] mt-32 flex-col items-center max-w-md p-10 col-[6_/_16]">
      <div className="sm:mx-auto sm:w-full sm:max-w-sm mt-9">
        <h2 className="text-3xl font-normal leading-9 text-gray-900">Запросить <br/>пользователей</h2>
      </div>
      <div className="mt-4 sm:mx-auto sm:w-full sm:max-w-sm">
        <form action="#" method="POST" onSubmit={(event) => { handleSubmit(event) }}>
          <p className="font-normal text-base text-[#787878]">
            Введите 10-ти значный код, чтобы запросить пользователей GitHub
          </p>
          <div>
            <div className="mt-6">
              <input id="code" onKeyUp={validateCode} name="code" value={searchValue} onChange={(event) => { handleCodeChange(event.target.value) }} placeholder="Введите 10-значный код" type="text" required className="block w-full rounded-md border-[#DEDEDE] py-1.5 text-gray-900 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6" />
            </div>
          </div>
          <div className="mt-4">
            <button type="submit" disabled={!isValid} className={`flex w-full justify-center rounded-md bg-[#007FFF] px-3 py-1.5 text-sm leading-6 text-white ${!isValid ? 'bg-[#DEDEDE]' : ''}`}>Запросить</button>
          </div>
        </form>
      </div>
    </main>
  )
}
