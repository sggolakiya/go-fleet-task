import React from 'react'

type Props = {
  fieldLabel?: string
  fieldOptions?: string[]
  value?: string
  onChange?: (e: React.ChangeEvent<HTMLSelectElement>) => void
}

const SelectField: React.FC<Props> = ({
  fieldLabel,
  fieldOptions,
  value,
  onChange,
}) => {
  return (
    <>
      <div>
        {fieldLabel && (
          <label className="block text-black-900 mb-1">{fieldLabel}</label>
        )}
        <select
          className="block w-full rounded-md border border-card-border-color text-black-900 shadow-sm shadow-[rgba(54,55,68,0.05)] placeholder:text-black-400 focus:border-primary py-2.5 px-3 focus:ring-0 focus:ring-offset-0 focus:outline-none outline-none"
          value={value}
          onChange={onChange}
        >
          {fieldOptions?.map((option: string) => (
            <option key={option}>{option}</option>
          ))}
        </select>
      </div>
    </>
  )
}

export default SelectField
