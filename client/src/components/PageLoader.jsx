import {LucideLoader, LucideLoader2, LucideLoaderCircle, LucideLoaderPinwheel} from 'lucide-react'
import { useThemeStore } from '../store/useThemeStore'

const PageLoader = () => {
  const {theme}=useThemeStore();
  return (
    <div className='flex-col min-h-screen  flex items-center justify-center' data-theme={theme}>
      <LucideLoaderPinwheel className='animate-spin size-10 text-primary'/>
    </div>
  )
}

export default PageLoader
