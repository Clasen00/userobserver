import { DefaultScreen } from '@/ui/layouts/Root/components/DefaultScreen'
import RootLayout from '@/ui/layouts/Root/RootLayout'
import { useAppSelector } from '@/lib/hooks/useAppSelector'
import { selectCurrentScreen } from '@/store/slices'
import { UsersScreen } from '@/ui/layouts/Root/components/UsersScreen'

export default function Page () {
  const currentScreen = useAppSelector(selectCurrentScreen)

  if (currentScreen === 'users') {
    return <RootLayout><UsersScreen /></RootLayout>
  }

  return <RootLayout><DefaultScreen /></RootLayout>
}
