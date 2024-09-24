import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar'
import { QuestionMarkCircledIcon } from '@radix-ui/react-icons'
import { IconCheck, IconMessageCircleUser, IconUser } from '@tabler/icons-react'

export function RecentSales() {
  return (
    <div className='space-y-8'>
      <div className='flex items-center'>
        <Avatar className='h-9 w-9'>
          <AvatarImage src='/avatars/01.png' alt='Avatar' />
          <AvatarFallback>
            <IconUser />
          </AvatarFallback>
        </Avatar>
        <div className='ml-4 space-y-1'>
          <p className='text-sm font-medium leading-none'> Agence 1</p>
          <p className='text-sm text-muted-foreground'>
            Demande de visa d'études
          </p>
        </div>
        <div className='ml-auto font-medium'>
          <IconCheck className='h-5 w-5 text-muted-foreground' />
        </div>
      </div>
    </div>
  )
}
