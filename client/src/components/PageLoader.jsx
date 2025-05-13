import {LucideLoader} from 'lucide-react'

const PageLoader = () => {
  return (
    <div className='flex-col min-h-screen  flex items-center justify-center'>
      <LucideLoader className='animate-spin size-10 text-primary'/>
    </div>
  )
}

export default PageLoader
