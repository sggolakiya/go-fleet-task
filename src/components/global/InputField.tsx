import React from 'react'

type Props = {
  fieldLabel?: string
  fieldType: string
  value?: string
  placeholderText?: string
  isRequired?: boolean
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void
}

const InputField: React.FC<Props> = ({
  fieldType,
  fieldLabel,
  value,
  placeholderText,
  isRequired,
  onChange,
}) => {
  return (
    <>
      <div>
        {fieldLabel && (
          <label className="block text-black-900 mb-1">
            {fieldLabel} {isRequired && <span className="text-red-600">*</span>}
          </label>
        )}
        <div>
          <input
            type={fieldType}
            className="block w-full rounded-md border border-card-border-color text-black-900 shadow-sm shadow-[rgba(54,55,68,0.05)] placeholder:text-black-400 focus:border-primary py-2.5 px-3 focus:ring-0 focus:ring-offset-0 focus:outline-none outline-none"
            placeholder={placeholderText}
            required={isRequired}
            value={value}
            onChange={onChange}
          />
        </div>
      </div>
    </>
  )
}

export default InputField
