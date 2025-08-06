'use client'

import { useEditor, EditorContent } from '@tiptap/react'
import StarterKit from '@tiptap/starter-kit'
import MenuBar from './MenuBar'
import Highlight from '@tiptap/extension-highlight'
import TextAlign from '@tiptap/extension-text-align'
import { TextStyle, FontSize } from '@tiptap/extension-text-style';
import Color from '@tiptap/extension-color'
const Tiptap = ({passdata,setpassdata}) => {
    const editor = useEditor({
        extensions: [StarterKit.configure({
            bulletList: {
                HTMLAttributes: {
                    class: "list-disc ml-3",
                },
            },
            orderedList: {
                HTMLAttributes: {
                    class: "list-decimal ml-3",
                },
            },
        }), Highlight,TextStyle,Color,
        FontSize.configure({ types: ['textStyle'] }),
        TextAlign.configure({
            types: ['heading', 'paragraph'],
        })
        ],
        content: passdata,
        
        immediatelyRender: false,
        editorProps: {
            attributes: {
                class: 'min-h-[80px] w-[650px] text-black border rounded-md bg-slate-50 p-3 outline-none',
            }
        },
        onUpdate:({editor})=>{
            setpassdata(editor.getHTML())
        }
        
    })

    return (
        <div>
            <MenuBar editor={editor} />
            <EditorContent editor={editor} />
        </div>
    )
}

export default Tiptap