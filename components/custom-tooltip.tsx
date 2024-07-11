import { CustomTooltipProps } from '@/types/types'
import React from 'react'
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from './ui/tooltip'
import { Info } from 'lucide-react'

export default function CustomTooltip({content}: CustomTooltipProps) {

  return (
    <TooltipProvider>
      <Tooltip>
        <TooltipTrigger><Info strokeWidth={1} className='h-5 w-5'  /></TooltipTrigger>
        <TooltipContent>
          {content}
        </TooltipContent>
      </Tooltip>

    </TooltipProvider>
  )
}
