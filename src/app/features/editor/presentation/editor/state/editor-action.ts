export type EditorAction = UpdateDocument |
    AddTextParagraph |
    ChangeMenuVisibility |
    ChangeLastTextSpanStyle |
    ChangeFocusedParagraphId

export enum EditorActionType {
    UPDATE_DOCUMENT,
    ADD_TEXT_PARAGRAPH,
    CHANGE_MENU_VISIBILITY,
    CHANGE_LAST_SPAN_STYLE,
    CHANGE_FOCUSED_PARAGRAPH_ID
}

export interface UpdateDocument {
    readonly type: EditorActionType.UPDATE_DOCUMENT,
    readonly element: HTMLElement,
}

export interface AddTextParagraph {
    readonly type: EditorActionType.ADD_TEXT_PARAGRAPH
}

export interface ChangeMenuVisibility {
    readonly type: EditorActionType.CHANGE_MENU_VISIBILITY
}


export interface ChangeLastTextSpanStyle {
    readonly  type: EditorActionType.CHANGE_LAST_SPAN_STYLE
    readonly style: TextSpanStyle
}

export enum TextSpanStyle {
    TEXT,
    HEADER_1,
    HEADER_2
}

export interface ChangeFocusedParagraphId {
    readonly type: EditorActionType.CHANGE_FOCUSED_PARAGRAPH_ID
    readonly focusedParagraphId: string
}
