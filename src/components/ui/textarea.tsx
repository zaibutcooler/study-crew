'use client'
import { cn } from '@/utils'
import React, { useState } from 'react'

interface InputProps {
  placeholder?: string
  className?: string
  value: string
  onChange: (
    event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => void
  characterLimit?: number
  rowLimit?: number
}

const Input: React.FC<InputProps> = ({
  placeholder,
  className,
  value,
  onChange,
  characterLimit,
  rowLimit
}) => {
  const [characterCount, setCharacterCount] = useState(0)
  const initialStyles =
    'placeholder:text-[#8e97a6]  text-[#0C1B33] border-2 border-[#8e97a6] rounded w-[400px] px-2 py-2 text-lg'

  function calculateWidthCharacterLimit(): number {
    return `${characterLimit}`.length * 20
  }

  return (
    <div className="relative w-fit h-fit">
      {(!characterLimit || characterLimit <= 0) &&
        (!rowLimit || rowLimit <= 0) && (
          <input
            type="text"
            value={value}
            className={cn(initialStyles, className)}
            onChange={onChange}
            placeholder={placeholder}
          />
        )}
      {(!characterLimit || characterLimit <= 0) && rowLimit && rowLimit > 1 && (
        <textarea
          value={value}
          rows={rowLimit}
          className={cn(`${initialStyles} resize-none`, className)}
          onChange={onChange}
          placeholder={placeholder}
        />
      )}
      {characterLimit && characterLimit > 0 && (
        <div className={cn(`${initialStyles} flex w-fit`, className)}>
          <input
            type="text"
            value={value}
            className="w-[350px] bg-transparent outline-none"
            onChange={(e) => {
              if (onChange) onChange(e)
              setCharacterCount(e.target.value.length)
            }}
            placeholder={placeholder}
          />
          <div
            className="text-[#8e97a6] px-1 flex"
            style={{ width: `${calculateWidthCharacterLimit()}px` }}
          >
            <span
              className={`${characterCount > characterLimit ? 'text-red-600' : ''}`}
            >
              {characterCount}
            </span>{' '}
            /{characterLimit}
          </div>
        </div>
      )}
    </div>
  )
}

export default Input
