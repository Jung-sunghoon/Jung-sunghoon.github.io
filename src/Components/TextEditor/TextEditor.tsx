import React, { useEffect } from 'react'
import './summernote.css'
import './bootstrap.css'

export type TextEditorProps = {
  edit: boolean
  isNew: boolean
  html: string
  setTextEditor: (contents: string) => void
}

const TextEditor: React.FC<TextEditorProps> = ({
  edit,
  isNew,
  html,
  setTextEditor,
}) => {
  useEffect(() => {
    const options = {
      height: 600,
      codemirror: {
        theme: 'monokai',
        lineNumbers: true,
      },
      tabDisable: true,
      toolbar: [
        ['style', ['style']],
        ['font', ['bold', 'underline', 'italic']],
        ['fontname', ['fontname', 'fontsize', 'color']],
        ['para', ['ul', 'ol', 'paragraph']],
        ['insert', ['link', 'picture', 'video']],
        ['table', ['table']],
        ['view', ['fullscreen', 'codeview']],
      ],
      disableResizeEditor: true,
      callbacks: {
        onSave: function (contents: any) {
          setTextEditor(contents)
        },
      },
    }

    const initEditor = (selector: string) => {
      const $editor = $(selector)
      //@ts-ignore
      $editor.summernote(options)
      //@ts-ignore
      $('.dropdown-toggle').dropdown()

      return $editor
    }

    const destroyEditor = (selector: string) => {
      const $editor = $(selector)
      //@ts-ignore
      $editor.summernote('destroy')
    }

    if (isNew) {
      const $editor = edit ? initEditor('.add') : initEditor('.add')
      if (html) {
        //@ts-ignore
        $editor.summernote('code', html)
      }
    } else {
      const $editor = edit ? initEditor('.rte') : initEditor('.rte')
      if (html) {
        //@ts-ignore
        $editor.summernote('code', html)
      }
    }

    return () => {
      if (isNew) {
        destroyEditor('.add')
      } else {
        destroyEditor('.rte')
      }
    }
  }, [edit, isNew, html, setTextEditor])

  return (
    <>{isNew ? <div className="add"></div> : <div className="rte"></div>}</>
  )
}

export default TextEditor
