import { Component } from 'react'
import './summernote.css'
import './bootstrap.css'

type TextEditorProps = {
  edit: boolean
  isNew: boolean
  html: string
  setTextEditor: any
}
class TextEditor extends Component<TextEditorProps> {
  constructor(props: TextEditorProps) {
    super(props)
  }

  componentDidMount() {
    if (this.props.isNew) {
      this.props.isNew === true ? this.onEditNew() : this.onDisplayNew()
    } else {
      this.props.edit === true ? this.onEdit() : this.onDisplay()
    }
  }

  onEdit() {
    const OnSave = this.props.setTextEditor
    // @ts-ignore
    $('.rte').summernote({
      height: 600,
      dialogsInBody: true,
      toolbar: [
        ['style', ['style']],
        ['font', ['bold', 'underline', 'italic']],
        ['fontname', ['fontname', 'fontsize', 'color']],
        ['para', ['ul', 'paragraph']],
        ['insert', ['link', 'picture', 'video']],
        ['table', ['table']],
        ['view', ['fullscreen']],
      ],
      callbacks: {
        onChange: function (contents: any) {
          OnSave(contents)
        },
      },
    })

    // @ts-ignore
    $('.dropdown-toggle').dropdown()
  }

  onEditNew() {
    const OnSave = this.props.setTextEditor
    // @ts-ignore
    $('.add').summernote({
      height: 600,
      dialogsInBody: true,
      toolbar: [
        ['style', ['style']],
        ['font', ['bold', 'underline', 'italic']],
        ['fontname', ['fontname', 'fontsize', 'color']],
        ['para', ['ul', 'paragraph']],
        ['insert', ['link', 'picture', 'video']],
        ['table', ['table']],
        ['view', ['fullscreen']],
      ],
      callbacks: {
        onChange: function (contents: any) {
          OnSave(contents)
        },
      },
    })

    // @ts-ignore
    $('.dropdown-toggle').dropdown()
  }

  onDisplay() {
    // @ts-ignore
    if (this.props?.html) {
      // @ts-ignore
      $('.rte').summernote('code', this.props?.html)
    } else {
      // @ts-ignore
      $('.rte').summernote('code', '')
    }
    // @ts-ignore
    $('.rte').summernote('destroy')
  }

  onDisplayNew() {
    // @ts-ignore
    if (this.props?.html) {
      // @ts-ignore
      $('.add').summernote('code', this.props?.html)
    } else {
      // @ts-ignore
      $('.add').summernote('code', '')
    }
    // @ts-ignore
    $('.add').summernote('destroy')
  }

  render() {
    if (this.props.isNew) {
      // @ts-ignore
      if (this.props.edit) this.onEditNew()
      // @ts-ignore
      else this.onDisplayNew()
    } else {
      // @ts-ignore
      if (this.props.edit) this.onEdit()
      // @ts-ignore
      else this.onDisplay()
    }

    return (
      <div>
        {this.props.isNew ? (
          <div className="add"></div>
        ) : (
          <div className="rte"></div>
        )}
      </div>
    )
  }
}

export default TextEditor
