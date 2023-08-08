import React, { useEffect, useState } from 'react'

type Props = {
  editorLabel?: string
  editorValue?: {
    __html: string
  }
  onChange?: React.FormEventHandler<HTMLDivElement>
  editorId: string
}

const RichTextEditor: React.FC<Props> = ({
  editorLabel,
  editorValue,
  onChange,
  editorId,
}) => {
  let [textEditorValue, setTextEditorValue] = useState<{ __html: string }>(
    editorValue!,
  )
  useEffect(() => {
    setTextEditorValue(textEditorValue)
    // @ts-ignore
    document.getElementById(editorId).innerHTML = editorValue?.__html
  }, [textEditorValue])

  return (
    <>
      <div className="group">
        {editorLabel && (
          <label className="block text-black-900 mb-1 text-sm">
            {editorLabel}
          </label>
        )}
        <div className="rounded-md bg-white border border-[#e5e6ea]">
          <div className="bg-[#f5f5f5] p-4 flex items-center gap-3">
            <button
              type="button"
              className="bg-transparent outline-none focus:outline-none font-bold w-5 h-5 flex justify-center items-center"
              onClick={() => document.execCommand('bold')}
            >
              B
            </button>
            <button
              type="button"
              className="bg-transparent outline-none focus:outline-none font-bold italic w-5 h-5 flex justify-center items-center"
              onClick={() => document.execCommand('italic')}
            >
              I
            </button>
            <button
              type="button"
              className="bg-transparent outline-none focus:outline-none underline underline-offset-2 w-5 h-5 flex justify-center items-center"
              onClick={() => document.execCommand('underline')}
            >
              U
            </button>
          </div>
          <div
            contentEditable
            className="bg-white p-3 pb-[26px] outline-none focus:outline-none ring-0 ring-offset-0 focus:ring-0 focus:ring-offset-0 border-0 focus:border-0 appearance-none"
            id={editorId}
            onInput={onChange}
            dangerouslySetInnerHTML={textEditorValue}
          ></div>
        </div>
      </div>
    </>
  )
}

export default RichTextEditor
