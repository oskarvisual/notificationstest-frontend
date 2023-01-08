import { useEditor, EditorContent } from '@tiptap/react'
import StarterKit from '@tiptap/starter-kit'

const Tiptap = () => {
  const editor = useEditor({
    extensions: [
      StarterKit,
    ],
    editorProps: {
        attributes: {
            class: 'shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline',
        },
    },
    content: '<p></p>',
  })

  return (
    <EditorContent editor={editor} id="content" />
  )
}

export default Tiptap;