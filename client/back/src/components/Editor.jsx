import React, { Component } from 'react';
import Editor from 'draft-js-plugins-editor';
import createMarkdownShortcutsPlugin from 'draft-js-markdown-shortcuts-plugin';
import createInlineToolbarPlugin, { Separator } from 'draft-js-inline-toolbar-plugin';

import {EditorState, RichUtils} from 'draft-js';
import 'draft-js-inline-toolbar-plugin/lib/plugin.css';

const inlineToolbarPlugin = createInlineToolbarPlugin();


const { InlineToolbar } = inlineToolbarPlugin;

const plugins = [
  createMarkdownShortcutsPlugin(),
  inlineToolbarPlugin
];

class myEditor extends Component {
    constructor(props) {
        super(props);
        this.state = { editorState: EditorState.createEmpty() };

        this.focus = () => this.editor.focus();
        this.onChange = (editorState) => this.setState({ editorState });
        this.handleKeyCommand = (command) => this._handleKeyCommand(command);
        this.onTab = (e) => this._onTab(e);
        this.toggleBlockType = (type) => this._toggleBlockType(type);
        this.toggleInlineStyle = (style) => this._toggleInlineStyle(style);
    }

    _handleKeyCommand(command) {
        const {editorState} = this.state;
        const newState = RichUtils.handleKeyCommand(editorState, command);
        if (newState) {
            this.onChange(newState);
            return true;
        }
        return false;
    }

    _onTab(e) {
        const maxDepth = 4;
        this.onChange(RichUtils.onTab(e, this.state.editorState, maxDepth));
    }

    _toggleBlockType(blockType) {
        this.onChange(
            RichUtils.toggleBlockType(
                this.state.editorState,
                blockType
            )
        );
    }

    _toggleInlineStyle(inlineStyle) {
        this.onChange(
            RichUtils.toggleInlineStyle(
                this.state.editorState,
                inlineStyle
            )
        );
    }

    render() {
        const {editorState} = this.state;

        // If the user changes block type before entering any text, we can
        // either style the placeholder or hide it. Let's just hide it now.
        let className = 'RichEditor-editor';
        var contentState = editorState.getCurrentContent();
        if (!contentState.hasText()){
            if (contentState.getBlockMap().first().getType() !== 'unstyled') {
                className += ' ' + 'RichEditor-hidePlaceholder';
            }
        }

        return (
            <div className='RichEditor-root'>
                <div className='RichEditor-controls'>
                    <InlineStyleControls
                        editorState={editorState}
                        onToggle={this.toggleInlineStyle}
                        />
                    <BlockStyleControls
                        editorState={editorState}
                        onToggle={this.toggleBlockType}
                        />
                </div>
                <div className={className}  onClick={this.focus}>
                    <Editor
                        blockStyleFn={getBlockStyle}
                        customStyleMap={styleMap}
                        editorState={editorState}
                        plugins={plugins}
                        handleKeyCommand={this.handleKeyCommand}
                        onChange={this.onChange}
                        onTab={this.onTab}
                        // placeholder="Tell a story..."
                        onFocus={()=>{console.log('focus')}}
                        ref={(element) => { this.editor = element; }}
                        spellCheck={true}
                        />
                    <InlineToolbar />
                </div>
            </div>
        );
    }
}

const styleMap = {
    CODE: {
        backgroundColor: 'rgba(0, 0, 0, 0.05)',
        fontFamily: '"Inconsolata", "Menlo", "Consolas", monospace',
        fontSize: 16,
        padding: 2,
    },
};

function getBlockStyle(block) {
    switch (block.getType()) {
        case 'blockquote': 
            return 'RichEditor-blockquote';
        default: 
            return null;
    }
}

class StyleButton extends React.Component {
    constructor() {
        super();
        this.onToggle = (e) => {
            e.preventDefault();
            this.props.onToggle(this.props.style);
        };
    }

    render() {
        let className = 'iconfont icon-' + this.props.label;
        if (this.props.active) {
            className += ' ' + 'active';
        }

        return (
            <i className={className} onMouseDown={this.onToggle}>
            </i>
        );
    }
}

const BLOCK_TYPES = [
    // { label: 'H1', style: 'header-one' },
    // { label: 'H2', style: 'header-two' },
    // { label: 'H3', style: 'header-three' },
    // { label: 'H4', style: 'header-four' },
    // { label: 'H5', style: 'header-five' },
    // { label: 'H6', style: 'header-six' },
    { label: 'blockquote', style: 'blockquote' },
    { label: 'unorderedlist', style: 'unordered-list-item' },
    { label: 'orderedlist', style: 'ordered-list-item' },
    { label: 'code', style: 'code-block' },
];

const BlockStyleControls = (props) => {
    const {editorState} = props;
    const selection = editorState.getSelection();
    const blockType = editorState
        .getCurrentContent()
        .getBlockForKey(selection.getStartKey())
        .getType();

    return (
        <div className="Block-controls">
            {BLOCK_TYPES.map((type) =>
                <StyleButton
                    key={type.label}
                    active={type.style === blockType}
                    label={type.label}
                    onToggle={props.onToggle}
                    style={type.style}
                    />
            )}
        </div>
    );
};

var INLINE_STYLES = [
    { label: 'bold', style: 'BOLD' },
    { label: 'italic', style: 'ITALIC' },
    { label: 'underline', style: 'UNDERLINE' },
    { label: 'link', style: 'UNDERLINE' },
    // { label: 'Monospace', style: 'CODE' },
];

const InlineStyleControls = (props) => {
    var currentStyle = props.editorState.getCurrentInlineStyle();
    return (
        <div className="Inline-controls">
            {INLINE_STYLES.map(type =>
                <StyleButton
                    key={type.label}
                    active={currentStyle.has(type.style)}
                    label={type.label}
                    onToggle={props.onToggle}
                    style={type.style}
                    />
            )}
        </div>
    );
};

export default myEditor;