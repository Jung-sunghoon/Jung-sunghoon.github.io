import React, { useEffect } from 'react'
// CSS 파일 임포트
import './summernote.css'
import './bootstrap.css'

export type TextEditorProps = {
  isNew: boolean
  html: string
  setTextEditor: (contents: string) => void
}

const TextEditor: React.FC<TextEditorProps> = ({
  isNew,
  html,
  setTextEditor,
}) => {
  // Summernote 에디터 초기화
  useEffect(() => {
    const selector = isNew ? '.add' : '.rte'
    const $editor = initEditor(selector)
    //@ts-ignore
    $('.dropdown-toggle').dropdown()
    if (html) {
      //@ts-ignore
      $editor.summernote('code', html)
    }
    return () => {
      destroyEditor(selector)
    }
  }, [isNew])

  // html 값 변경 감지
  useEffect(() => {
    const selector = isNew ? '.add' : '.rte'
    const $editor = $(selector)
    //@ts-ignore
    $('.dropdown-toggle').dropdown()
    //@ts-ignore
    if (html !== $editor.summernote('code')) {
      //@ts-ignore
      $editor.summernote('code', html)
    }
  }, [html])

  // Summernote 에디터 옵션
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
      onChange: function (contents: any) {
        setTextEditor(contents)
      },
    },
  }

  // 에디터 초기화 함수
  const initEditor = (selector: string) => {
    const $editor = $(selector)
    //@ts-ignore
    $('.dropdown-toggle').dropdown()
    //@ts-ignore
    $editor.summernote(options)

    return $editor
  }

  // 에디터 파괴 함수
  const destroyEditor = (selector: string) => {
    const $editor = $(selector)
    //@ts-ignore
    $('.dropdown-toggle').dropdown()
    //@ts-ignore
    $editor.summernote('destroy')
  }

  return (
    <>{isNew ? <div className="add"></div> : <div className="rte"></div>}</>
  )
}

export default TextEditor
