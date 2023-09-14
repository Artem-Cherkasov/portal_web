import {Reducer} from "../../../../../core/mvi/store";
import {EditorState} from "./editor-state";
import {EditorResultAction, EditorResultActionType} from "./editor-result-action";
import {Injectable} from "@angular/core";
import {clone} from "cloneable-ts";
import {DocumentParser} from "../../../domain/document-parser";
import {LongreadDocument, TextParagraph} from "../../../domain/models/models";
import {v4 as uuidv4} from 'uuid';

@Injectable({
  providedIn: 'root'
})
export class EditorReducer implements Reducer<EditorState, EditorResultAction> {

  constructor(
    private parser: DocumentParser,
  ) {
  }

  reduce(state: EditorState, action: EditorResultAction): EditorState {
    switch (action.type) {
      case EditorResultActionType.UPDATE_DOCUMENT:
        return this.updateDocument(state, action.document)

      case EditorResultActionType.MODIFY_TEXT_PARAGRAPH:
        return this.modifyTextParagraph(state, action.value, action.paragraphId, action.spanId)

      case EditorResultActionType.ADD_TEXT_PARAGRAPH:
        return this.addTextParagraph(state)

      case EditorResultActionType.MODIFY_TITLE:
        return this.modifyTitle(state, action.value)
    }
  }

  private updateDocument(state: EditorState, newDocument: LongreadDocument): EditorState {
    return clone(state, {
      document: newDocument,
      content: this.parser.parse(newDocument)
    })
  }

  private modifyTextParagraph(
    state: EditorState,
    value: string,
    paragraphId: string,
    spanId: string
  ): EditorState {
    const newDocument = clone(state.document)
    const paragraph = newDocument.paragraphs
      .find((paragraph) => paragraph.id == paragraphId)

    if (paragraph == undefined || paragraph.type == "image") return state

    const textSpan = (paragraph as TextParagraph).spans
      .find((span) => span.id == spanId)

    if (textSpan == undefined) return state;

    textSpan.text = value

    return this.updateDocument(state, newDocument)
  }

  private addTextParagraph(state: EditorState): EditorState {
    const newDocument = clone(state.document)

    const paragraph = {
      id: uuidv4(),
      type: "text",
      spans: [
        {
          id: uuidv4(),
          text: "<br>"
        }
      ]
    }
    newDocument.paragraphs.push(paragraph)

    return this.updateDocument(state, newDocument)
  }

  private modifyTitle(state: EditorState, value: string): EditorState {
    const newDocument = clone(state.document, {
      title: value
    })

    return this.updateDocument(state, newDocument)
  }

}
