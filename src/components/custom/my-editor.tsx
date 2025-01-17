"use client"

import React, { useState, useEffect } from "react"
import '@wangeditor/editor/dist/css/style.css'
import { Editor, Toolbar } from '@wangeditor/editor-for-react'
import { useTheme } from "next-themes"

const MyEditor = () => {
	const [editor, setEditor] = useState(null) // 存储 editor 实例
	const { setTheme, theme } = useTheme()

	// TODO: 根据theme切换toolbar样式配置及editor样式配置
	const toolbarConfig = {} // 菜单栏配置

	// 编辑器配置
	const editorConfig = {
		placeholder: '请输入内容...',
		onCreated: (editor: any) => {
			// 编辑器创建之后，记录 editor 实例，重要 ！！！ （有了 editor 实例，就可以执行 editor API）
			setEditor(editor)
		},
		onChange: (editor: { children: any }) => {
			// editor 选区或者内容变化时，获取当前最新的的 content
			console.log('changed', editor.children)
		}
	}

	// 组件销毁时，及时销毁 editor 实例，重要！！！
	useEffect(() => {
		return () => {
			if (editor === null) return;
			(editor as React.SetStateAction<any>).destroy();
			setEditor(null);
		};
	}, [editor]);

	return (
		<div style={{ border: '1px solid #ccc', zIndex: 100 }}>
			{/* 渲染 toolbar */}
			<Toolbar
				editor={editor}
				defaultConfig={toolbarConfig}
				style={{ borderBottom: '1px solid #ccc' }}
			/>

			{/* 渲染 editor */}
			<Editor
				defaultConfig={editorConfig}
				style={{ height: '500px' }}
			/>
		</div>
	)
}

export default MyEditor;