import React, { useState } from 'react'

type Props = {
  fieldLabel: string
  value?: string
  placeholderText?: string
  isRequired?: boolean
  onChange?: (e: React.ChangeEvent<HTMLTextAreaElement>) => void
}

const TextArea: React.FC<Props> = ({
  fieldLabel,
  value,
  placeholderText,
  isRequired,
  onChange,
}) => {
  let [textAreaLength, setTextAreaLength] = useState<string | number>(0)

  return (
    <>
      <div className="group">
        {fieldLabel && (
          <label className="block text-black-900 mb-1">
            {fieldLabel} {isRequired && <span className="text-red-600">*</span>}
          </label>
        )}
        <div className="relative flex items-center py-px">
          <textarea
            className="block w-full rounded-md border border-card-border-color text-black-900 shadow-sm shadow-[rgba(54,55,68,0.05)] placeholder:text-black-400 focus:border-primary py-2.5 px-3 focus:ring-0 focus:ring-offset-0 focus:outline-none outline-none"
            placeholder={placeholderText}
            cols={30}
            rows={6}
            required={isRequired}
            value={value}
            onChange={(e) => {
              onChange && onChange(e)
              setTextAreaLength((textAreaLength = e.target.value.length))
            }}
            minLength={0}
            maxLength={250}
          ></textarea>
          <span className="absolute z-10 right-4 bottom-4 text-xs text-black-300 bg-white pt-1 px-2">
            {textAreaLength}/250
          </span>
        </div>
      </div>
    </>
  )
}

export default TextArea
